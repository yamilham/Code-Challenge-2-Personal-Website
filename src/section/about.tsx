import Link from "next/link";
import TitleSection from "@/components/title-section";
import { DiReact } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <TitleSection headingTwo="Get to Know More" description="About Me" />
      </div>
      <div className="text-center py-6 sm:py-10">
        <div className="text-center text-xl md:text-4xl lg:text-6xl font-light leading-relaxed sm:leading-loose lg:leading-16 mx-auto">
          <p className="mb-6 sm:mb-8">
            A Freelance 3D artist with more than 3 years of experience in
            creating 3D rendered models. Founded Yacons Design as a resources of
            3D illustration assets
          </p>
          <p className="mb-6 sm:mb-8">
            Currently pursuing Fullstack Web Development Bootcamp Program at{" "}
            <Link
              className="text-[#32b280] font-semibold hover:underline transition-all duration-200"
              href="https://purwadhika.com/"
              target="_blank"
            >
              Purwadhika
            </Link>{" "}
            Campus Bandung. Looking for opportunities in Software Development
            especially in Front-End role.
          </p>
          <p className="mb-6 sm:mb-8">
            Here are some of the technologies I&apos;m trying to master
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-2 py-4 md:py-6 lg:py-10">
          <DiReact className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black" />
          <BiLogoTypescript className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black" />
          <SiTailwindcss className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black" />
          <RiNextjsFill className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="mt-12">
          <h3 className="sm:text-2xl md:text-3xl">./ Core Values</h3>
        </div>
        <ul className="py-4 md:py-16 pb-2">
          <li className="grid grid-cols-5 justify-between md:flex-row gap-2 md:gap-8 py-4 md:py-4 lg:py-12 border-b-1">
            <div className="w-auto text-3xl md:text-3xl lg:text-7xl font-bold">
              01
            </div>

            <h4 className="col-span-2 text-[16px] md:text-3xl lg:text-5xl font-medium">
              🔬 Attention to Detail
            </h4>

            <p className="col-span-2 text-[14px] md:text-2xl lg:text-2xl font-light leading-tight">
              Strive for visual precision and functionality in every project —
              whether its polishing 3D visuals, refining UI interactions, or
              fine-tuning layout structure.
            </p>
          </li>
          <li className="grid grid-cols-5 justify-between md:flex-row gap-2 md:gap-8 py-4 md:py-4 lg:py-12 border-b-1">
            <div className="w-auto text-3xl md:text-3xl lg:text-7xl font-bold">
              02
            </div>

            <h4 className="col-span-2 text-[16px] md:text-3xl lg:text-5xl font-medium">
              🗓️ Consistency & Discipline
            </h4>

            <p className="col-span-2 text-[14px] md:text-2xl lg:text-2xl font-light leading-tight">
              With a structured creative routine and focused learning schedule,
              I bring reliability and steady progress to both freelance work and
              personal development.
            </p>
          </li>
          <li className="grid grid-cols-5 justify-between md:flex-row gap-2 md:gap-8 py-4 md:py-4 lg:py-12 border-b-1">
            <div className="w-auto text-3xl md:text-3xl lg:text-7xl font-bold">
              03
            </div>

            <h4 className="col-span-2 text-[16px] md:text-3xl lg:text-5xl font-medium">
              🗣️ Clear Communication
            </h4>

            <p className="col-span-2 text-[14px] md:text-2xl lg:text-2xl font-light leading-tight">
              I ask with intention and seek to understand deeply. I value
              clarity in collaboration, which helps ensure smooth workflows and
              well-informed decisions.
            </p>
          </li>
          <li className="grid grid-cols-5 justify-between md:flex-row gap-2 md:gap-8 py-4 md:py-4 lg:py-12 border-b-1">
            <div className="w-auto text-3xl md:text-3xl lg:text-7xl font-bold">
              04
            </div>

            <h4 className="col-span-2 text-[16px] md:text-3xl lg:text-5xl font-medium">
              🧩Creative Problem-Solving
            </h4>

            <p className="col-span-2 text-[14px] md:text-2xl lg:text-2xl font-light leading-tight">
              I enjoy transforming challenges into opportunities — blending
              aesthetics with usability to craft meaningful digital and visual
              experiences.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
