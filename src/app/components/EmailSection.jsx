"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const emptyForm = { name: "", email: "", message: "" };

export default function EmailSection() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const sendingRef = useRef(false);
  const loading = status === "sending";

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "sending") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sendingRef.current) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please enter your name, email address, and a message.");
      return;
    }

    sendingRef.current = true;
    setStatus("sending");
    setFeedback("Sending your message…");

    try {
      if (!process.env.NEXT_PUBLIC_SERVICE || !process.env.NEXT_PUBLIC_TEMPLATE || !process.env.NEXT_PUBLIC_KEY) {
        throw new Error("Email service is not configured.");
      }
      // Keep the existing EmailJS service, template, and template parameter names.
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        {
          from_name: name,
          to_name: "Dejvi",
          from_email: email,
          to_email: "dimiderv@gmail.com",
          message,
          reply_to: email,
        },
        process.env.NEXT_PUBLIC_KEY,
      );
      setForm(emptyForm);
      setStatus("success");
      setFeedback("Thanks for getting in touch. Your message has been sent.");
    } catch {
      setStatus("error");
      setFeedback("Your message could not be sent. Please try again or email me directly at dimiderv@gmail.com.");
    } finally {
      sendingRef.current = false;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section grid gap-10 md:grid-cols-2 md:gap-16">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title" className="section-title">Let’s talk.</h2>
        <p className="mt-4 max-w-md leading-7 text-gray-400">
          Have a role, a project, or a question in mind? Send me a message. I’m happy to discuss how I can contribute.
        </p>
        <a href="mailto:dimiderv@gmail.com" className="mt-5 inline-flex min-h-11 items-center break-all text-purple-300 underline decoration-purple-300/40 underline-offset-4 hover:text-purple-200">dimiderv@gmail.com</a>
        <div className="mt-6 flex flex-wrap gap-5">
          <a href="https://github.com/dimiderv" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-300 hover:text-white">
            <Image src={GithubIcon} alt="" width={24} height={24} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/dejvi-dervishi-5a08ba13a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-300 hover:text-white">
            <Image src={LinkedinIcon} alt="" width={24} height={24} /> LinkedIn
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} aria-label="Contact Dejvi" aria-busy={loading}>
        <fieldset disabled={loading} className="min-w-0 space-y-5">
          <legend className="sr-only">Your contact details and message</legend>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
            <input className="field" name="name" id="name" type="text" autoComplete="name" required maxLength={120} value={form.name} onChange={handleChange} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
            <input className="field" name="email" id="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-200">Message</label>
            <textarea className="field min-h-36 resize-y" name="message" id="message" required maxLength={5000} rows={5} value={form.message} onChange={handleChange} placeholder="Tell me a little about what you have in mind." />
          </div>
          <button type="submit" disabled={loading} className="button-primary w-full sm:w-auto">{loading ? "Sending…" : "Send message"}</button>
        </fieldset>
        <p role="status" aria-live="polite" aria-atomic="true" className={`mt-4 min-h-12 text-sm leading-6 ${status === "error" ? "text-rose-300" : status === "success" ? "text-emerald-300" : "text-gray-400"}`}>
          {feedback}
        </p>
      </form>
    </section>
  );
}
