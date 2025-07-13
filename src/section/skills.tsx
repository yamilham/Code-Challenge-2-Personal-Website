import TitleSection from "@/components/title-section";
import SkillCard from "@/components/skillcard";

export default function Skills() {
  return (
    <section id="skills" className="py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8">
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
