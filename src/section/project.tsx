import ProjectCard from "@/components/projectcard";
import TitleSection from "@/components/title-section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-6 lg:px-8">
      <div className="py-6 sm:py-10">
        <TitleSection
          headingTwo="Curated Projects"
          description="Project with Case Study"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
