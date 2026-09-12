"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { IoMailOutline, IoCopyOutline } from "react-icons/io5";
import { contactEmail } from "@/data";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const ContactModal = ({
  isOpen,
  onClose,
  serviceTitle,
}: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: serviceTitle ? `Inquiry regarding ${serviceTitle}` : "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = contactEmail;

  // Sync subject whenever serviceTitle changes or modal opens
  useEffect(() => {
    if (serviceTitle) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${serviceTitle}`,
      }));
    }
  }, [serviceTitle, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
          formData.subject || `Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
        setStatusMessage("Draft opened in your email client! Feel free to send directly.");
      }
    } catch {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-5000 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-2xl bg-black-100/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(203,172,249,0.2)] z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <IoClose className="text-xl" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded-full bg-purple/15 text-purple border border-purple/25">
                Let&apos;s Build Together
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Get in Touch
              </h2>
              <p className="text-white-200 text-xs sm:text-sm mt-1 font-light">
                {serviceTitle
                  ? `Discussing: ${serviceTitle}`
                  : "Send a message and I'll get back to you within 24 hours."}
              </p>
            </div>

            {/* Quick Email & Copy */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-2 text-white">
                <IoMailOutline className="text-purple text-base shrink-0" />
                <span className="font-mono text-white-100">{emailAddress}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-purple/20 text-white transition-colors cursor-pointer"
              >
                <IoCopyOutline className="text-purple" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="modal-name" className="text-xs font-medium text-white-200">
                    Your Name <span className="text-purple">*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-black-200/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-email" className="text-xs font-medium text-white-200">
                    Your Email <span className="text-purple">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black-200/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-subject" className="text-xs font-medium text-white-200">
                  Topic / Project
                </label>
                <input
                  id="modal-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Backend Architecture / Fullstack Application"
                  className="w-full px-4 py-2.5 rounded-xl bg-black-200/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-message" className="text-xs font-medium text-white-200">
                  Message <span className="text-purple">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black-200/80 border border-white/15 text-white placeholder:text-white-200/30 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all resize-none"
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
                  <FaCheckCircle className="shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                  <FaExclamationCircle className="shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-px focus:outline-none transition-transform active:scale-98 disabled:opacity-60 cursor-pointer mt-2"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
                  <FaPaperPlane className="text-purple text-xs" />
                  <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
