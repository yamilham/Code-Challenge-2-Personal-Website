import TitleSection from "@/components/title-section";

export default function Experience() {
  return (
    <section className="py-6 sm:py-10 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col">
        <TitleSection headingTwo="Experience" />
      </div>
      <div className="grid grid-cols-3 py-4 gap-4 md:gap-6 lg:gap-12 md:py-12">
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
        </div>
        <div>
          <p className="text-[12px] md:text-xl lg:text-2xl">
            The Agate Game Course is a game development education program
            organized by Agate Academy. Joining in Agate Game Course Batch 7,
            the program offerings with a full 3D Modeling and Animation for
            Action Adventure Games track alongside 3C Programming, AI
            Programming, and Game Design over one month. Focus is on
            genre-specific production and portfolio-ready work.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 py-4 gap-4 md:gap-6 lg:gap-12 md:py-12">
        <p className="text-[12px] md:text-2xl md:py-2 text-gray-700">
          2022-Present
        </p>
        <div>
          <p className="text-[12px] md:text-4xl md:py-2 font-semibold">
            3D Illustrator
          </p>
          <p className="text-[12px] md:text-xl">
            Founding and Managing{" "}
            <a
              href="https://iconscout.com/contributors/yacons-design"
              className="font-semibold"
            >
              Yacons Design
            </a>
          </p>
        </div>
        <div>
          <p className="text-[12px] md:text-xl lg:text-2xl">
            Focusing on product-based project to provide premium quality 3D
            Illustration in multi marketplace platform.
          </p>
        </div>
      </div>
    </section>
  );
}
