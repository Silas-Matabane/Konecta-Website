import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

/* ── Middleware ── */
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin(origin, cb) {
      // Allow requests with no origin (server-to-server, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json({ limit: "16kb" }));

/* ── Rate limiter (simple in-memory) ── */
const submissions = new Map();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function rateLimit(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const entry = submissions.get(ip) || [];
  const recent = entry.filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) {
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again shortly." });
  }
  recent.push(now);
  submissions.set(ip, recent);
  next();
}

/* ── Nodemailer transport ── */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ── Validation helpers ── */
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 500);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body) {
  const errors = [];
  if (!body.firstName?.trim()) errors.push("First name is required.");
  if (!body.surname?.trim()) errors.push("Surname is required.");
  if (!body.email?.trim() || !EMAIL_RE.test(body.email?.trim()))
    errors.push("A valid email address is required.");
  if (!body.companyName?.trim()) errors.push("Company name is required.");
  if (!body.industry?.trim()) errors.push("Industry is required.");
  if (!body.country?.trim()) errors.push("Country / region is required.");
  return errors;
}

/* ── POST /api/demo-request ── */
app.post("/api/demo-request", rateLimit, async (req, res) => {
  const errors = validateBody(req.body);
  if (errors.length) return res.status(400).json({ errors });

  const {
    firstName,
    surname,
    email,
    phone,
    companyName,
    industry,
    country,
    locations,
    goals,
  } = req.body;

  const goalsText = Array.isArray(goals) ? goals.join(", ") : sanitize(goals);

  const htmlBody = `
    <h2 style="color:#F48120;">New WiFi Platform Demo Request</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">First Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(firstName)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Surname</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(surname)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(email)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(phone) || "—"}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(companyName)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Industry</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(industry)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Country / Region</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(country)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Locations / Sites</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(locations) || "—"}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Primary Goals</td><td style="padding:8px;border-bottom:1px solid #eee;">${goalsText || "—"}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Konecta Website" <${process.env.SMTP_USER}>`,
      to:
        process.env.RECIPIENT_EMAIL ||
        "support@konecta.co.za, sales@konecta.co.za, smartwifi@konecta.co.za",
      replyTo: sanitize(email),
      subject: `WiFi Demo Request — ${sanitize(firstName)} ${sanitize(surname)} (${sanitize(companyName)})`,
      html: htmlBody,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err.message);
    return res
      .status(500)
      .json({ error: "Failed to send your request. Please try again later." });
  }
});

/* ── POST /api/contact ── */
app.post("/api/contact", rateLimit, async (req, res) => {
  const { name, email, company, subject, message } = req.body;
  const errs = [];
  if (!name?.trim()) errs.push("Name is required.");
  if (!email?.trim() || !EMAIL_RE.test(email?.trim()))
    errs.push("A valid email address is required.");
  if (!message?.trim()) errs.push("Message is required.");
  if (errs.length) return res.status(400).json({ errors: errs });

  const htmlBody = `
    <h2 style="color:#F48120;">New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(name)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(email)}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(company) || "—"}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(subject) || "—"}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${sanitize(message)}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"Konecta Website" <${process.env.SMTP_USER}>`,
      to: "support@konecta.co.za, marketing@konecta.co.za",
      replyTo: sanitize(email),
      subject: `Contact Form — ${sanitize(name)}${company ? ` (${sanitize(company)})` : ""}`,
      html: htmlBody,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err.message);
    return res
      .status(500)
      .json({ error: "Failed to send your message. Please try again later." });
  }
});

/* ── Health check ── */
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

/* ── Start ── */
app.listen(PORT, () => {
  console.log(`Demo API running on http://localhost:${PORT}`);
});
