import SkillBadge from "./skillbadge";
import { DiCss3, DiReact } from "react-icons/di";
import { FaJsSquare, FaHtml5, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiBlender, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFigma } from "react-icons/tb";

export default function SkillCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
      <SkillBadge icon={VscVscode} label="Visual Studio Code" />
      <SkillBadge icon={TbBrandFigma} label="Figma" />
      <SkillBadge icon={FaGithub} label="Github" />
      <SkillBadge icon={SiBlender} label="Blender" />
      <SkillBadge icon={FaHtml5} label="HTML 5" />
      <SkillBadge icon={DiCss3} label="CSS 3" />
      <SkillBadge icon={FaJsSquare} label="Javascript" />
      <SkillBadge icon={BiLogoTypescript} label="Typescript" />
      <SkillBadge icon={DiReact} label="ReactJS" />
      <SkillBadge icon={SiTailwindcss} label="TailwindCSS" />
      <SkillBadge icon={RiNextjsFill} label="NextJS" />
      <SkillBadge icon={SiThreedotjs} label="ThreeJS" />
    </div>
  );
}
