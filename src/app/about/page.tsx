"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

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
      <TechStackSection />
      <Disclaimer />
    </div>
  );
}
