"use client";

import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contacts } from "@/data/contacts";
import { IconType } from "react-icons";

type IconComponents = {
  MdEmail: IconType;
  FaLinkedin: IconType;
  FaGithub: IconType;
  FaTelegram: IconType;
  FaMapMarkerAlt: IconType;
};

const iconComponents: IconComponents = {
  MdEmail,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaMapMarkerAlt,
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-200px)] flex items-center py-12 md:py-24">
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start p-8">
          <div className="lg:w-1/2">
            <h5 className="text-xl font-medium text-gray-500 mb-2">
              You want to say something?
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Please say it to me
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              You can contact me directly via email or connect through my social
              media profiles. I&apos;m always open to new opportunities and
              interesting conversations.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Quick Links
            </h2>
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const IconComponent =
                  iconComponents[contact.iconName as keyof IconComponents];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg"
                  >
                    <span className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                      <IconComponent className="text-blue-600 text-xl" />
                    </span>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 hover:underline transition-colors flex-grow text-lg"
                        aria-label={contact.label}
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-gray-700 flex-grow text-lg">
                        {contact.text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
