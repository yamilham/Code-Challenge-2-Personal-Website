import Image from "next/image";
import Link from "next/link";
import { ProjectContent } from "@/types/projects.type";

interface ProjectCardProps {
  project: ProjectContent;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.href}`}>
      <div className="py-3 md:py-4 lg:py-4">
        <div className="w-full h-full overflow-hidden rounded-t-md">
          <Image
            src={project.path}
            alt={project.alt}
            width={800}
            height={640}
            className="rounded-2xl"
          />
        </div>
        <div className="flex justify-between align-center py-1 md:py-2 lg:py-3">
          <p className="text-xl md:text-2xl font-medium leading-2">
            {project.title}
          </p>
          <p className="text-gray-700 leading-2 font-light">{project.tag}</p>
        </div>
      </div>
    </Link>
  );
}
