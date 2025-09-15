// components/ContactModal.tsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-modal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send("service_0mg7fyg", "template_3jexxsn", form, "uFHUiBNBQBBRSppkS")
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(handleClose, 2000); // Cierra modal luego de 2s
      })
      .catch(() => setStatus("error"));
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>
        {status === "sent" && <p className="success">Message sent! ✅</p>}
        {status === "error" && <p className="error">Something went wrong ❌</p>}
      </div>
    </div>
  );
}
