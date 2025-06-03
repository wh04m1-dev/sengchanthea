import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaPencilRuler, FaPlug, FaTools } from "react-icons/fa";

// Reusable Components
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
    {title}
  </h2>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
  >
    {children}
  </div>
);

const IconCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="h-full">
    <div className="flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

// Main Page
export default function Home() {
  const education = [
    {
      description: "BSc in Computer Science",
      img: "https://image.freshnewsasia.com/2021/id-024/fn-2022-02-11-18-41-39-1.jpg",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified",
      issuer: "Developer – Associate",
      year: "Expires October 29, 2026",
      img: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Developer-Associate_badge.607ee5e1f4b6685ff643ec9122e58c99d45488b2.png",
    },
  ];

  const capabilities = [
    {
      title: "DevOps Engineering",
      description:
        "Specializing in DevOps with expertise in Docker containers, Infrastructure as Code, and CI/CD pipelines for automated deployment across multiple environments.",
      icon: <FaTools className="text-3xl text-blue-600" />,
    },
    {
      title: "Web Development",
      description:
        "Building responsive web apps with Next.js and Tailwind CSS for a modern, clean user experience.",
      icon: <FaCode className="text-3xl text-blue-600" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting user-friendly interfaces with modern design principles for intuitive experiences.",
      icon: <FaPencilRuler className="text-3xl text-blue-600" />,
    },
    {
      title: "API Integration",
      description:
        "Connecting frontends with backend APIs to ensure seamless data flow and performance.",
      icon: <FaPlug className="text-3xl text-blue-600" />,
    },
  ];

  const professionalExperience = {
    title: "DevOps Engineer at ABA",
    location: "Phnom Penh, Cambodia",
    duration: "Sept. 2023 - Present",
    description:
      "As a DevOps Engineer at a leading banking institution, my role is to strategically address complex business challenges by focusing on scalability, efficiency, effectiveness, reliability, and performance. I am responsible for exploring and implementing cutting-edge technologies to enhance the bank's technological infrastructure.",
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hello, I&apos;m Seng Chanthea
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            DevOps & Software Engineer passionate about building efficient
            systems
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <SectionHeader title="About Me" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m a passionate developer with a focus on building modern,
            scalable systems. I specialize in DevOps practices, cloud
            technologies, and creating efficient development workflows.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/about"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              My Story
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <SectionHeader title="Education" />
        <div className="max-w-md mx-auto">
          {education.map((edu, index) => (
            <Card key={index}>
              <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                <Image
                  src={edu.img}
                  alt={edu.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{edu.description}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Preferences */}
      <section className="py-16">
        <SectionHeader title="Job Preferences" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://www.rupp.edu.kh/fe/factor4.0/images/img_stem_building.jpg"
              alt="Job Preferences"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Open for Opportunities
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m currently open to discussing new opportunities in DevOps
              and Software Engineering. Let&apos;s connect and explore how we
              can work together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <SectionHeader title="Certifications" />
        <div className="max-w-md mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 relative mb-6">
                  <Image
                    src={cert.img}
                    alt={`${cert.title} badge`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <SectionHeader title="Professional Experience" />
        <div className="max-w-3xl mx-auto">
          <Card>
            <h3 className="text-2xl font-semibold mb-2">
              {professionalExperience.title}
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gray-600">
                {professionalExperience.location}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600">
                {professionalExperience.duration}
              </span>
            </div>
            <p className="text-gray-600">
              {professionalExperience.description}
            </p>
          </Card>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <SectionHeader title="My Capabilities" />
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <IconCard
              key={index}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
