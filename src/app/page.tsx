"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

// Types
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

// Data
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

// Main Page Components
const HeroSection = () => {
  const words = ["DevOps Engineer", "Software Engineer"];

  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center py-16 md:py-24 text-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Hello, I&apos;m Seng Chanthea
        </h1>
        <p className="text-xl mb-8 h-8 flex justify-center">
          <TypingEffect words={words} />
        </p>
        <PrimaryButton href="/about">Learn More About Me</PrimaryButton>
      </div>
    </section>
  );
};

const EducationSection = () => (
  <section className="w-full py-16 bg-white">
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

const CareerSection = () => (
  <section className="w-full py-16 bg-gray-50">
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
                  <PrimaryButton href="/contact">Let&apos;s Discuss</PrimaryButton>
                </div>
              </div>
            </div>
          </Card>
        ))}
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
      <CareerSection />
    </main>
  );
}
