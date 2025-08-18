import { ProjectContent } from "../types/projects.type";

export const projects: ProjectContent[] = [
  {
    id: 1,
    title: "Astro Guy",
    path: "/assets/project-thumbnail1.png",
    href: "austronaut-illustration",
    alt: "3D Astronaut Illustration Pack",
    description: "Playful 3D Illustration Pack for Campaign",
    technologies: ["Blender", "Figma"],
    status: "Completed",
    tag: "3D Illustration",
  },
  {
    id: 2,
    title: "Adorable Cat",
    path: "/assets/project-thumbnail2.png",
    href: "cat-illustration",
    alt: "Cute and adorable cat 3D Illustration",
    description: "Cute and adorable cat 3D Illustration",
    technologies: ["Blender", "Figma"],
    status: "Completed",
    tag: "3D Illustration",
  },
  {
    id: 3,
    title: "Viking Warriors",
    path: "/assets/project-thumbnail3.png",
    href: "viking-illustration",
    alt: "Viking warriors",
    description: "Stylized Iconic Viking Props 3D for Game Assets",
    technologies: ["Blender"],
    status: "Completed",
    tag: "3D Illustration",
  },
];
