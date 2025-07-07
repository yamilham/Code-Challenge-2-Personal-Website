import TitleSection from "@/components/title-section";

export default function Experience() {
  return (
    <section id="about" className="py-6 sm:py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <TitleSection headingTwo="Experience" />
      </div>
      <div className="flex justify-between py-4 md:py-12">
        <p className="text-[12px] md:text-2xl md:py-2 text-gray-700">
          FEB - MAR 2025
        </p>
        <div>
          <p className="text-[12px] md:text-4xl md:py-2 font-semibold">
            3D Game Art Program Participant
          </p>
          <p className="text-[12px] md:text-xl">
            <a href="https://course.agate.id/" className="font-semibold">
              Agate Game Course
            </a>{" "}
            - Online
          </p>
          <p className="text-[12px] md:text-xl md:pt-6">
            The Agate Game Course is a game development education program
            organized by Agate Academy.
          </p>
        </div>
      </div>
    </section>
  );
}
