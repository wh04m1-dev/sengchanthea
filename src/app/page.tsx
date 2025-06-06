"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

type CardItem = {
  description: string;
  img: string;
};

type TypingEffectProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
};

// Reusable Components
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-start relative pb-2">
    {title}
    <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#3d8ba6]"></span>
  </h2>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`p-6 rounded-lg bg-white shadow-md ${className}`}>
    {children}
  </div>
);

const ImageCard = ({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) => (
  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority={priority}
    />
  </div>
);

const PrimaryButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-block font-medium px-6 py-3 rounded-lg bg-[#cf3436] text-white hover:bg-[#b02a2c] transition-colors duration-200"
  >
    {children}
  </Link>
);

const TypingEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypingEffectProps) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    const currentWord = words[loopNum % words.length];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    loopNum,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={styles.typewriter}>
      {currentText}
      <span className={styles.caret}>|</span>
    </span>
  );
};

const educationItems: CardItem[] = [
  {
    description:
      "I am a student in the Bachelor of Information Technology Engineering (ITE) program at the Faculty of Engineering, Royal University of Phnom Penh. My major focuses on software design and development. The ITE program combines computer organization, software, and mathematics with both theoretical and practical applications. It covers areas such as Artificial Intelligence, Computer Graphics, Data Mining, Security, and Game Development.\n\nFrom the second year onwards, we gain real-world experience through internships and practicums. This has helped me develop essential teamwork, communication, and technical skills—preparing me for work in the technology industry after graduation.",
    img: "/images/education/rupp.jpg",
  },
];

const careerItems: CardItem[] = [
  {
    description:
      "I'm currently open to internship or junior opportunities. If you have a project, job opportunity, or just want to connect, feel free to reach out. I'd love to hear from you!",
    img: "/images/career/job.jpg",
  },
];

const projects: ProjectItem[] = [
  {
    title: "Web API",
    subtitle: "Serverless TypeScript",
    description: "RESTful API via Lambda",
    tags: ["Lambda", "MySQL", "RESTful API"],
    githubUrl: "https://github.com/yourusername/web-api",
  },
  {
    title: "Web App",
    subtitle: "Book GraphQL",
    description: "Book Management App",
    tags: ["React", "TS", "GraphQL API", "MongoDB"],
    githubUrl: "https://github.com/yourusername/book-app",
  },
  {
    title: "iOS, Web App",
    subtitle: "Randevoo",
    description: "Online Reservation Platform",
    tags: ["React", "TS", "Swift", "GCP", "Algolia"],
    githubUrl: "https://github.com/yourusername/randevoo",
  },
  {
    title: "UX/UI Design",
    subtitle: "Blockchain",
    description: "Blockchain",
    tags: [],
    githubUrl: "https://github.com/yourusername/blockchain-design",
  },
];

const HeroSection = () => {
  const words = ["DevOps Engineer", "Software Engineer"];

  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Hello, I am
        </p>
        <h3 className="text-3xl mb-8 h-8 flex justify-center">
          <TypingEffect words={words} />
        </h3>
      </div>
    </section>
  );
};

const EducationSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Education" />
      <div className="max-w-4xl mx-auto">
        {educationItems.map((edu, index) => (
          <Card key={index}>
            <ImageCard
              src={edu.img}
              alt="Royal University of Phnom Penh Campus"
              priority={index === 0}
            />
            <p className="whitespace-pre-line text-gray-700">
              {edu.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Projects" />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-6 relative">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-gray-500"
                    aria-label="GitHub repository"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}

                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <h3 className="text-lg text-gray-600">{project.subtitle}</h3>
                  <p className="text-gray-500 mt-1">{project.description}</p>
                </div>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="w-full py-16">
    <div className="container mx-auto px-4 lg:px-24 max-w-4xl">
      <SectionHeader title="Skills & Expertise" />
      <div className="space-y-8">
        <div>
          <p className="mb-4 text-lg leading-relaxed">
            I&apos;m a{" "}
            <span className="font-semibold">Spring Boot Specialist</span> and{" "}
            <span className="font-semibold">DevOps Engineer</span> focused on
            building robust business logic with clean architecture (MVC,
            Microservices) and automating delivery pipelines. I architect
            systems where software engineering meets operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
              Backend Expertise
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Spring Boot application development</li>
              <li>Domain-driven design & clean architecture</li>
              <li>RESTful APIs & microservices patterns</li>
              <li>Database optimization & transaction management</li>
              <li>Integration with frontend & external systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
              DevOps Competencies
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>CI/CD pipeline design (Jenkins/GitHub Actions)</li>
              <li>Infrastructure as Code (Terraform/CDK)</li>
              <li>Container orchestration (Kubernetes/Docker)</li>
              <li>Monitoring & observability implementation</li>
              <li>Cloud cost optimization strategies</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
              Employment Details
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Focus:</span> Backend Systems &
                DevOps
              </li>
              <li>
                <span className="font-medium">Type:</span> Full-time
              </li>
              <li>
                <span className="font-medium">Location:</span> On-site (Phnom
                Penh) or Remote
              </li>
              <li>
                <span className="font-medium">Notice:</span> 1 month
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
              Technical Values
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>SOLID principles in practice</li>
              <li>Testable, maintainable code</li>
              <li>Infrastructure as cattle, not pets</li>
              <li>Automation-first mindset</li>
              <li>Measurable system improvements</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
            What I Deliver
          </h2>
          <p className="leading-relaxed">
            As a backend engineer, I build Spring Boot applications with proper
            layering (controller-service-repository), clean contracts, and
            business logic that stands the test of scale. As a DevOps
            practitioner, I eliminate manual toil through CI/CD pipelines that
            ensure reliable deployments.
          </p>
          <p className="leading-relaxed mt-4">
            I&apos;m seeking teams that value both{" "}
            <span className="font-medium">well-architected software</span> and{" "}
            <span className="font-medium">streamlined operations</span>. Whether
            it&apos;s implementing new microservices or automating their
            deployment, I focus on solutions that drive business value through
            technical excellence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CareerSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Career Alignment" />
      <div className="max-w-4xl mx-auto">
        {careerItems.map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <ImageCard src={item.img} alt="Career opportunities" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="mb-6 text-center md:text-left text-gray-700">
                  {item.description}
                </p>
                <div className="text-center md:text-left">
                  <PrimaryButton href="/contact">
                    Let&apos;s Discuss
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Get In Touch" />
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#3d8ba6]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-600 hover:text-[#3d8ba6] transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#3d8ba6]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-[#3d8ba6] transition-colors"
                    >
                      +123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-[#3d8ba6]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CareerSection />
      <ContactSection />
    </main>
  );
}
