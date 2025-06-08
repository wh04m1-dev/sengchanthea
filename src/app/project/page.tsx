type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
};

const projects: ProjectItem[] = [
  {
    title: "Microservices API with Kubernetes",
    subtitle: "Serverless TypeScript",
    description: "RESTful API via Lambda",
    tags: ["Lambda", "MySQL", "RESTful API"],
    githubUrl: "https://github.com/yourusername/web-api",
  },
  {
    title: "CI/CD Pipeline Automation",
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
    title: "Infrastructure as Code (IaC)",
    subtitle: "Blockchain",
    description: "Blockchain",
    tags: [],
    githubUrl: "https://github.com/yourusername/blockchain-design",
  },
];

const ProjectsSection = () => (
  <section className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Projects" />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-6 relative">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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

export default function Projects() {
  return (
    <main className="min-h-screen w-full">
      <ProjectsSection />
    </main>
  );
}

// Assuming you have a SectionHeader component somewhere
const SectionHeader = ({ title }: { title: string }) => (
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
  </div>
);
