import TitleSection from "@/components/title-section";
import SkillCard from "@/components/skillcard";

export default function Skills() {
  return (
    <section id="skills">
      <TitleSection
        headingTwo="Technical Skills"
        description="Tools I use and what I am good at"
      />
      <div>
        <SkillCard />
      </div>
    </section>
  );
}
