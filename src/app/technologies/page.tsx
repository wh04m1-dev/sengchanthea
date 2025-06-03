"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

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

const TechCard = ({ tech }: { tech: { name: string; imgSrc: string } }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-gray-100">
    <div className="w-16 h-16 relative mb-4">
      <Image
        src={tech.imgSrc}
        alt={tech.name}
        fill
        className="object-contain"
        sizes="64px"
        priority={tech.name === "Next.js"}
      />
    </div>
    <span className="text-gray-800 font-medium">{tech.name}</span>
  </div>
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
      <TechStackSection />
      <Disclaimer />
    </div>
  );
}
