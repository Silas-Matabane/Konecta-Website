import { useState } from "react";
import SectionEyebrow from "@components/common/SectionEyebrow";
import SEO from "@components/common/SEO";
import {
  COMPANY,
  SOCIAL_LINKS,
  CONTACT_SUBJECTS,
  PAGE_SEO,
} from "@data/constants";
import useInView from "@hooks/useInView";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function ContactPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(
          data.errors?.join(" ") || data.error || "Something went wrong.",
        );
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again later.");
    }
  };

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-konecta-white outline-none focus:border-konecta-orange/60 focus:bg-[rgba(255,255,255,0.05)] transition-all placeholder:text-white/25";

  return (
    <>
      <SEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        path="/contact"
      />
      <section
        ref={ref}
        className="relative content-px pt-40 pb-section overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-konecta-orange/[0.03] blur-[150px] rounded-full pointer-events-none" />

        {/* Page header */}
        <div
          className={`relative z-10 mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <SectionEyebrow text="Get In Touch" />
          <h1
            className="font-heading font-extrabold text-konecta-white mt-4 leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Let&apos;s <span className="text-gradient-orange">Build</span>
            <br />
            Together
          </h1>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — info + offices */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-base text-white/75 leading-relaxed mb-10 max-w-lg">
              Tell us about your challenge. We&apos;ll identify which of our
              services is best placed to deliver, and follow up within{" "}
              <span className="text-konecta-orange font-bold">48 hours</span>.
            </p>

            <div className="space-y-6 mb-12">
              <div className="glass-card p-5 rounded-xl">
                <div className="font-heading font-bold text-xs text-konecta-white uppercase tracking-wider mb-2">
                  Email
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-konecta-orange hover:underline"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="glass-card p-5 rounded-xl">
                <div className="font-heading font-bold text-xs text-konecta-white uppercase tracking-wider mb-2">
                  Location
                </div>
                <div className="text-white/75">{COMPANY.location}</div>
              </div>
            </div>

            <div>
              <div className="font-heading font-bold text-xs text-konecta-white uppercase tracking-wider mb-4">
                Follow Us
              </div>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-sm text-white/80 no-underline hover:border-konecta-orange hover:text-konecta-orange transition-all"
                    aria-label={s.platform}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className={`glass-card-strong p-8 lg:p-10 rounded-2xl flex flex-col gap-5 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-white/80 mb-2 font-heading font-bold uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-white/80 mb-2 font-heading font-bold uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-xs text-white/80 mb-2 font-heading font-bold uppercase tracking-wider"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
                placeholder="Company name"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs text-white/80 mb-2 font-heading font-bold uppercase tracking-wider"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a topic...</option>
                {CONTACT_SUBJECTS.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs text-white/80 mb-2 font-heading font-bold uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary self-start mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">
                Message sent! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
