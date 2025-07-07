import { ProjectContent } from "../types/projects.type";

export const projects: ProjectContent[] = [
  {
    id: 1,
    title: "Veggies",
    path: "/assets/project-thumbnail.png",
    alt: "3D Vegetable Illustration Pack",
    description: "Playful 3D Illustration Pack for E-commerce",
    technologies: ["Blender", "Figma"],
    status: "Completed",
    tag: "3D Illustration",
  },
  {
    id: 2,
    title: "Japanese Sushi",
    path: "/assets/project-thumbnail-2.png",
    alt: "Tempting Japanese Sushi 3D Illustration",
    description: "Cute and tempting Japanese Sushi 3D Illustration",
    technologies: ["Blender", "Figma"],
    status: "In Progress",
    tag: "3D Illustration",
  },
  {
    id: 3,
    title: "Ancient Weapons",
    path: "/assets/project-thumbnail-3.png",
    alt: "Ancient Weapons ",
    description: "Stylized Ancient Weapons 3D for Game Assets",
    technologies: ["Blender"],
    status: "Completed",
    tag: "3D Illustration",
  },
];
