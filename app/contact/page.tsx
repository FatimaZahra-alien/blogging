"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (You can connect backend later)");
  };

  return (
    <section className="px-10 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
