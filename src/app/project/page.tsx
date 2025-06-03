"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Web API",
      subtitle: "Serverless TypeScript",
      description: "RESTful API via Lambda",
      tags: ["Lambda", "MySQL", "RESTful API"],
    },
    {
      title: "Web App",
      subtitle: "Book GraphQL",
      description: "Book Management App",
      tags: ["React", "TS", "GraphQL API", "MongoDB"],
    },
    {
      title: "iOS, Web App",
      subtitle: "Randevoo",
      description: "Online Reservation Platform",
      tags: ["React", "TS", "Swift", "GCP", "Algolia"],
    },
    {
      title: "UX/UI Design",
      subtitle: "Blockchain",
      description: "Blockchain",
      tags: [],
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          FEATURED PROJECTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
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
  );
}
