"use client";

import Link from "next/link";

type CardItem = {
  description: string;
  img: string;
};

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

const careerItems: CardItem[] = [
  {
    description:
      "I'm currently open to internship or junior opportunities. If you have a project, job opportunity, or just want to connect, feel free to reach out. I'd love to hear from you!",
    img: "/images/career/job.jpg",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg sm:text-xl font-medium mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Seng Chanthea.
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            I build & deploy digital solutions.
          </h2>

          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl mt-6">
              I&apos;m a DevOps Engineer and Software Developer specializing in
              creating and optimizing scalable, efficient systems and
              applications.
            </p>
          </div>

          <div className="pt-8">
            <Link
              href="/about"
              className="inline-block px-8 py-3 text-lg font-medium rounded-md transition duration-300 bg-sky-800 text-white"
            >
              Keep walking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareerSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Career Alignment" />
      <div className="max-w-4xl mx-auto">
        {careerItems.map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="mb-6 text-center md:text-left">
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

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <CareerSection />
    </main>
  );
}
