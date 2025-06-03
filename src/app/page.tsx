import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

interface EducationItem {
  description: string;
  img: string;
}

interface CareerItem {
  description: string;
  img: string;
}

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
}) => <div className={`p-6 rounded-lg ${className}`}>{children}</div>;

export default function Home() {
  const education: EducationItem[] = [
    {
      description:
        "I am a student in the Bachelor of Information Technology Engineering (ITE) program at the Faculty of Engineering, Royal University of Phnom Penh. My major focuses on software design and development. The ITE program combines computer organization, software, and mathematics with both theoretical and practical applications. It covers areas such as Artificial Intelligence, Computer Graphics, Data Mining, Security, and Game Development.\n\nFrom the second year onwards, we gain real-world experience through internships and practicums. This has helped me develop essential teamwork, communication, and technical skills—preparing me for work in the technology industry after graduation.",
      img: "/images/education/rupp.jpg",
    },
  ];

  const career: CareerItem[] = [
    {
      description:
        "I'm open to new opportunities in DevOps and Software Engineering. Let's connect and explore how we can work together.",
      img: "/images/career/job.jpg",
    },
  ];

  const textToType =
    "DevOps & Software Engineer passionate about building efficient systems.";

  return (
    <main className="min-h-screen w-full">
      <section className="w-full min-h-[50vh] flex items-center justify-center py-16 md:py-24 text-center bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hello, I'm Seng Chanthea
          </h1>
          <p className="text-xl mb-8 h-8 flex justify-center">
            <span className={styles.typewriter}>{textToType}</span>
          </p>
          <Link
            href="/about"
            className="inline-block font-medium px-6 py-3 rounded-lg bg-[#cf3436] text-white hover:bg-[#b02a2c] transition-colors duration-200"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Education" />
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                  <Image
                    src={edu.img}
                    alt="Royal University of Phnom Penh Campus"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <p className="whitespace-pre-line">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Career Alignment" />
          <div className="max-w-4xl mx-auto">
            {career.map((item, index) => (
              <Card key={index}>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt="Career opportunities"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-6 text-center">{item.description}</p>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block font-medium px-6 py-3 rounded-lg bg-[#cf3436] text-white hover:bg-[#b02a2c] transition-colors duration-200"
                  >
                    Let&apos;s Discuss
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
