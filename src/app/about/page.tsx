"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Constants for reusable data
const TECH_STACK = [
  {
    name: "Next.js",
    imgSrc: "/images/nextjs-logo.png",
    description: "Full-stack framework for React applications",
  },
  {
    name: "React",
    imgSrc: "/images/react-logo.png",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Tailwind CSS",
    imgSrc: "/images/tailwindcss-logo.png",
    description: "Utility-first CSS framework",
  },
  {
    name: "TypeScript",
    imgSrc: "/images/typescript-logo.png",
    description: "Strongly typed JavaScript superset",
  },
  {
    name: "Node.js",
    imgSrc: "/images/nodejs-logo.png",
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
  {
    name: "Express",
    imgSrc: "/images/express-logo.png",
    description: "Minimalist web framework for Node.js",
  },
  {
    name: "MongoDB",
    imgSrc: "/images/mongodb-logo.png",
    description: "NoSQL database program",
  },
  {
    name: "PostgreSQL",
    imgSrc: "/images/postgresql-logo.png",
    description: "Powerful open-source relational database",
  },
];

const CURRENT_JOB = {
  position: "Full Time Server Side Developer",
  company: "Beniten Co., LTD",
  description:
    "Developing web and API components for company projects with a focus on scalability and performance. Responsibilities include architecture design, database optimization, and implementing security best practices.",
  achievements: [
    "Improved API response times by 40% through query optimization",
    "Implemented automated testing reducing production bugs by 30%",
    "Led migration from REST to GraphQL for core services",
  ],
  startDate: "September 2023",
  endDate: "Present",
};

// Reusable components
const TechCard = ({ tech }: { tech: (typeof TECH_STACK)[0] }) => (
  <div className="group flex flex-col items-center p-6 rounded-xl transition-all duration-300 h-full border">
    <div className="w-20 h-20 relative mb-4">
      <Image
        src={tech.imgSrc}
        alt={tech.name}
        fill
        className="object-contain"
        sizes="80px"
        priority={tech.name === "Next.js"}
      />
    </div>
    <h3 className="text-gray-800 font-semibold text-lg mb-1">{tech.name}</h3>
    <p className="text-gray-500 text-sm text-center">{tech.description}</p>
  </div>
);

const CurrentJobSection = () => (
  <section className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-xl overflow-hidden">
      <div className="p-8 md:p-10 order-2 md:order-1">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4">
          CURRENT POSITION
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {CURRENT_JOB.position}
        </h2>
        <h3 className="text-xl text-green-700 font-medium mb-4">
          {CURRENT_JOB.company}
        </h3>
        <p className="text-gray-600 mb-6">{CURRENT_JOB.description}</p>

        <ul className="space-y-2 mb-6">
          {CURRENT_JOB.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {CURRENT_JOB.startDate} - {CURRENT_JOB.endDate}
          </span>
          <button
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
            aria-label="Read more about current position"
          >
            Read more <span className="ml-1">→</span>
          </button>
        </div>
      </div>
      <div className="h-full min-h-[300px] relative order-1 md:order-2">
        <Image
          src="/images/server-side-development.jpg"
          alt="Server Side Development"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 from-white via-transparent to-transparent" />
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
  <section className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">My Tech Stack</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Technologies I&apos;ve mastered and use regularly to build robust,
        scalable applications
      </p>
    </div>

    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="!pb-12"
      >
        {TECH_STACK.map((tech, index) => (
          <SwiperSlide key={index}>
            <TechCard tech={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

const Disclaimer = () => (
  <section className="py-8 text-center">
    <div className="container mx-auto px-4">
      <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
        This portfolio is for demonstration purposes only. All projects and
        information are subject to change. Technologies shown represent current
        expertise but are not exhaustive.
      </p>
    </div>
  </section>
);

export default function TechStacks() {
  return (
    <div className="space-y-16 py-12">
      <CurrentJobSection />
      <TechStackSection />
      <Disclaimer />
    </div>
  );
}
