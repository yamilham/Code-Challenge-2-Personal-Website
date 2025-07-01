import SkillCard from "@/components/skillcard";
export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-10">
      <div>
        <h2 className="text-4xl font-medium py-4">Technical Skills</h2>
        <p className="text-xl">Tools I use and what I&apos;m good at</p>
      </div>
      <div className="">
          <SkillCard />
      </div>
    </section>
  );
}

