// capabilities.ts
export interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const capabilities: CapabilityItem[] = [
  {
    title: "Frontend",
    description:
      "Creating responsive web apps with Next.js and Tailwind CSS to deliver modern and accessible user experiences.",
    icon: "/images/capabilities/frontend.jpg",
    alt: "Frontend Development Icon",
  },
  {
    title: "Mobile",
    description:
      "Building mobile-friendly and cross-platform solutions that work seamlessly on any device.",
    icon: "/images/capabilities/mobile.png",
    alt: "Mobile Development Icon",
  },
  {
    title: "Backend",
    description:
      "Designing robust backend services, RESTful APIs, and secure systems for scalable and performant applications.",
    icon: "/images/capabilities/backend.png",
    alt: "Backend Development Icon",
  },
  {
    title: "DevOps",
    description:
      "Specializing in Docker, Infrastructure as Code, and CI/CD pipelines for automated deployments and reliable systems.",
    icon: "/images/capabilities/devops.png",
    alt: "DevOps Icon",
  },
];
