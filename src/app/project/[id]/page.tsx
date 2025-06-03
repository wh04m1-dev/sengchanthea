import { notFound } from "next/navigation";
import ProjectSwiper from "@/components/ProjectSwiper";
import { projects } from "@/data/projects";

interface ProjectDetailProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ProjectSwiper images={project.images} title={project.title} />

      <div className="mt-8 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-700">{project.description}</p>
        </section>

        {project.features.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.technologies.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.resources.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              {project.resources.map(({ label, url }, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
