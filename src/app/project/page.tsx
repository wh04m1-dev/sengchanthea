import Image from "next/image";

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

const CurrentJobSection = () => (
  <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Text Content */}
        <div className="p-8 md:p-10 lg:p-12 order-2 lg:order-1">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-800 bg-green-100 rounded-full mb-4 uppercase">
            Current Position
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {CURRENT_JOB.position}
          </h2>
          <h3 className="text-xl md:text-2xl text-green-600 font-medium mb-4">
            @ {CURRENT_JOB.company}
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            {CURRENT_JOB.description}
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Key Achievements:
          </h4>
          <ul className="space-y-3 mb-8">
            {CURRENT_JOB.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-600 text-base">{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-sm text-gray-500 font-medium">
              {CURRENT_JOB.startDate} — {CURRENT_JOB.endDate}
            </span>
            <button
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors group"
              aria-label="Read more about current position"
            >
              Read more
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="h-full min-h-[300px] md:min-h-[400px] relative order-1 lg:order-2">
          <Image
            src="/images/projects/p4/bg.jpg"
            alt="Server Side Development at Beniten Co., LTD"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent lg:bg-gradient-to-l" />
        </div>
      </div>
    </div>
  </section>
);

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Professional Experience
        </h1>
        <CurrentJobSection />
      </div>
    </div>
  );
}
