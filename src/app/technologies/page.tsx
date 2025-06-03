"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

// Constants for reusable data
const TECH_STACK = [
  {
    name: "Next.js",
    imgSrc: "/images/nextjs-logo.png",
  },
  {
    name: "React",
    imgSrc: "/images/react-logo.png",
  },
  {
    name: "Tailwind CSS",
    imgSrc: "/images/tailwindcss-logo.png",
  },
  {
    name: "TypeScript",
    imgSrc: "/images/typescript-logo.png",
  },
  {
    name: "Node.js",
    imgSrc: "/images/nodejs-logo.png",
  },
  {
    name: "Express",
    imgSrc: "/images/express-logo.png",
  },
];

const CURRENT_JOB = {
  position: "Full Time Server Side Developer",
  company: "Beniten Co., LTD",
  description:
    "Developing web and API components for company projects with a focus on scalability and performance.",
  startDate: "September 2023",
};

// Reusable components
const TechCard = ({ tech }: { tech: { name: string; imgSrc: string } }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
    <div className="w-16 h-16 relative mb-4">
      <Image
        src={tech.imgSrc}
        alt={tech.name}
        fill
        className="object-contain"
        sizes="64px"
        priority={tech.name === "Next.js"} // Prioritize loading main tech
      />
    </div>
    <span className="text-gray-800 font-medium">{tech.name}</span>
  </div>
);

const CurrentJobSection = () => (
  <section className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 md:p-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
          CURRENT POSITION
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {CURRENT_JOB.position}
        </h2>
        <h3 className="text-xl text-green-700 font-medium mb-4">
          {CURRENT_JOB.company}
        </h3>
        <p className="text-gray-600 mb-6">{CURRENT_JOB.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Since <span className="font-medium">{CURRENT_JOB.startDate}</span>
          </span>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Read more <span className="ml-1">→</span>
          </button>
        </div>
      </div>
      <div className="h-full min-h-[300px] relative">
        <Image
          src="/images/server-side-development.jpg"
          alt="Server Side Development"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
  <section className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">My Tech Stack</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Technologies I work with daily to build robust applications
      </p>
    </div>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={2}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="!pb-12"
    >
      {TECH_STACK.map((tech, index) => (
        <SwiperSlide key={index}>
          <TechCard tech={tech} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

const Disclaimer = () => (
  <section className="py-8 text-center">
    <p className="text-gray-700 text-sm sm:text-base">
      This portfolio is for demonstration purposes only. All projects and
      information are subject to change.
    </p>
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
