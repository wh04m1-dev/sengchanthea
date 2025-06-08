"use client";

import Link from "next/link";
import Image from "next/image";

type CardItem = {
  description: string;
  img: string;
  alt: string;
  cta?: string;
};

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-800 relative inline-block">
    {title}
    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full"></span>
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
    className={`p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
  >
    {children}
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
    className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    aria-label={typeof children === "string" ? children : "Action button"}
  >
    {children}
  </Link>
);

const careerItems: CardItem[] = [
  {
    description:
      "As an aspiring DevOps and Backend Engineer, I'm actively seeking internship or junior positions where I can contribute my skills in cloud infrastructure and API development. I'm particularly interested in roles that challenge me to implement automation and optimize deployment workflows.",
    img: "/images/career/job.jpg",
    alt: "Career opportunities illustration",
    cta: "Let's Connect",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-sky-100 opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-indigo-100 opacity-20 blur-3xl animate-float-delay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="space-y-6 md:space-y-8">
          <p className="text-lg sm:text-xl font-medium text-slate-500 animate-fadeIn">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight tracking-tight animate-fadeIn">
            Seng Chanthea
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              .
            </span>
          </h1>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight tracking-tight animate-fadeIn delay-100">
            I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              engineer
            </span>{" "}
            robust
            <br />
            cloud solutions
          </h2>

          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl mt-6 text-slate-600 leading-relaxed animate-fadeIn delay-200">
              DevOps Engineer & Backend Developer specializing in{" "}
              <span className="font-medium text-slate-700">
                cloud-native architectures
              </span>
              ,{" "}
              <span className="font-medium text-slate-700">
                infrastructure automation
              </span>
              , and{" "}
              <span className="font-medium text-slate-700">
                CI/CD optimization
              </span>
              .
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 animate-fadeIn delay-300">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              aria-label="View my projects"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              aria-label="Contact me"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => (
  <section id="career" className="w-full py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <SectionHeader title="Career Opportunities" />
      </div>
      <div className="max-w-5xl mx-auto">
        {careerItems.map((item, index) => (
          <Card key={index} className="bg-white border border-slate-200">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-md"
                  priority={index === 0}
                />
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
                <p className="mb-8 text-lg text-slate-700 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <PrimaryButton href="/contact">
                    {item.cta || "Let's Discuss"}
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

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <CareerSection />
    </main>
  );
}
