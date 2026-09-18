"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { IoCopyOutline, IoMailOutline } from "react-icons/io5";
import { contactEmail } from "@/data";
import { motion, AnimatePresence } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = contactEmail;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      // Using Web3Forms free public access key endpoint, with graceful fallback to mailto
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback: trigger client mail client if no Web3Forms key is set
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
          formData.subject || `Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
        setStatusMessage("Draft opened in your email client! Feel free to send directly.");
      }
    } catch {
      // Direct mail fallback on network or CORS failure
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
      setStatusMessage("Message prepared in your default mail app!");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 bg-black-200/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
      {/* Direct contact info sidebar */}
      <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
        <div>
          <span className="uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full bg-purple/15 text-purple border border-purple/25">
            Let&apos;s Connect
          </span>
          <h3 className="text-2xl font-bold text-white mt-4">
            Have a project in mind?
          </h3>
          <p className="text-white-200 text-sm mt-3 leading-relaxed font-light">
            Fill out the form or reach out directly to discuss backend architecture, API integrations, or fullstack web applications.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="h-10 w-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center text-purple text-lg shrink-0">
                <IoMailOutline />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-white-200/70 font-mono">Direct Email</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm font-medium text-white hover:text-purple truncate block transition-colors"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ y: -1, scale: 1.01, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-purple/40 bg-white/5 hover:bg-purple/10 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              <IoCopyOutline className="text-purple" />
              <span>{copied ? "Email copied to clipboard!" : "Copy email address"}</span>
            </motion.button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-white-200/60">
          <p>📍 Available for remote contracts & full-time roles worldwide.</p>
        </div>
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-white-200">
              Your Name <span className="text-purple">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Doe"
              className="w-full px-4 py-3 rounded-xl bg-black-100/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-white-200">
              Your Email <span className="text-purple">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              className="w-full px-4 py-3 rounded-xl bg-black-100/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-medium text-white-200">
            Project / Topic
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Landing Page / Web App / Consultation"
            className="w-full px-4 py-3 rounded-xl bg-black-100/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-medium text-white-200">
            Your Message <span className="text-purple">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, and goals..."
            className="w-full px-4 py-3 rounded-xl bg-black-100/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all resize-none"
          />
        </div>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs"
            >
              <FaCheckCircle className="shrink-0" />
              <span>{statusMessage}</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs"
            >
              <FaExclamationCircle className="shrink-0" />
              <span>{statusMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ y: -1, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] focus:outline-none disabled:opacity-60 cursor-pointer"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
            <FaPaperPlane className="text-purple text-xs" />
            <span>{status === "submitting" ? "Sending Message..." : "Send Message"}</span>
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
