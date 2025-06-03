"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle actual submission (API call, email sending, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-white py-12">
      <section className="container mx-auto px-4 lg:px-24 flex flex-col lg:flex-row gap-8">
        {/* Left side: contact details */}
        <div className="flex-1 text-gray-700 space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p>
            Email:{" "}
            <a
              href="mailto:hi@sokvatharalin.com"
              className="text-blue-600 hover:underline"
            >
              hi@sokvatharalin.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sokvathara Lin
            </a>
          </p>
          <p>Telegram: Lex</p>
          <p>GitHub: Lex</p>
          <p>Location: Phnom Penh, Cambodia</p>
        </div>

        {/* Right side: form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
