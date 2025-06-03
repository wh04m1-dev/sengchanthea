"use client";

import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-12">
      <section className="container mx-auto px-4 lg:px-24 flex flex-col lg:flex-row gap-12">
        {/* Left side: contact details */}
        <div className="flex-1 text-gray-700 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got something to say? You can contact me! 
            Contact Page Don&apos;t want to
            fill out your personal information? Feel free to reach out to me on
            social media instead.
          </h1>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-xl" />
              <a
                href="mailto:hi@sokvatharalin.com"
                className="text-blue-600 hover:underline"
              >
                sengchanthea@gmaiil.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600 text-xl" />
              <a
                href="https://linkedin.com/in/sokvatharalin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Sok
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaTelegram className="text-blue-600 text-xl" />
              <span>@osja</span>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-blue-600 text-xl" />
              <a
                href="https://github.com/sokvatharalin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                sok
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={5}
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-semibold py-3 px-8 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
