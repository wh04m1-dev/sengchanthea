import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

function ProjectCard({ id, title, image, description }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative w-full h-48 bg-gray-100">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.images[0]}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
