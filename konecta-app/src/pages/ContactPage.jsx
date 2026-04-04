import { useState } from "react";
import SectionEyebrow from "@components/common/SectionEyebrow";
import SEO from "@components/common/SEO";
import { COMPANY, OFFICES, CONTACT_SUBJECTS, PAGE_SEO } from "@data/constants";
import useClock from "@hooks/useClock";
import useInView from "@hooks/useInView";

function OfficeCard({ city, tz, label }) {
  const time = useClock(tz);
  return (
    <div className="glass-card p-6">
      <div className="font-mono text-xl text-gradient-orange tracking-wider mb-2">
        {time}
      </div>
      <div className="font-heading font-bold text-sm text-konecta-white">
        {city}
      </div>
      <div className="text-xs text-white/80 mt-1">{label}</div>
    </div>
  );
}

export default function ContactPage() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\n\n${formData.message}`)}`;
  };

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.03)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-konecta-white outline-none focus:border-konecta-orange/60 focus:bg-[rgba(255,255,255,0.05)] transition-all placeholder:text-white/25";

  return (
    <>
    <SEO title={PAGE_SEO.contact.title} description={PAGE_SEO.contact.description} path="/contact" />
    <section
      ref={ref}
      className="relative px-6 lg:px-14 pt-40 pb-section overflow-hidden"
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
            Whether you need a Microsoft Azure migration, a WiFi network with
            data analytics, or strategic telecoms consulting — we&apos;re ready
            to deliver.
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
              <div className="text-sm text-white/75">{COMPANY.location}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OFFICES.map((o) => (
              <OfficeCard key={o.city} {...o} />
            ))}
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
          <button type="submit" className="btn-primary self-start mt-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
