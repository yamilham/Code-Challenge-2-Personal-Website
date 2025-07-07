import Image from "next/image";
import { ProjectContent } from "@/types/projects.type";

interface ProjectCardProps {
  project: ProjectContent;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="py-6">
      <div className="w-full h-full overflow-hidden rounded-t-md">
        <Image
          src={project.path}
          alt={project.alt}
          width={800}
          height={640}
          className="rounded-2xl"
        />
      </div>
      <div className="flex justify-between align-center py-2">
        <p className="text-xl md:text-2xl font-medium leading-2">
          {project.title}
        </p>
        <p className="text-gray-700 leading-2">{project.tag}</p>
      </div>
    </div>
  );
}
