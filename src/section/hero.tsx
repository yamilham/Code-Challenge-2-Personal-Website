import ButtonCTA from "@/components/buttoncta";
// import { FaGithub, FaDribbbleSquare } from "react-icons/fa";
// import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-6 min-h-screen sm:mt-10 py-6 sm:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-10 border-b-2 pb-8 sm:pb-12 gap-8 sm:gap-12">
        <div className="text-baseline">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-balance text-black leading-[1.05] font-normal tracking-tight">
            Attention! <br />
            You&apos;re about to meet a Creative Web Developer.
          </h1>
        </div>
        <div className="flex flex-col justify-between lg:pl-12 xl:pl-20">
          <p className="text-xl md:text-2xl font-regular leading-relaxed md:heading-6 md:text-pretty mb-8 md:mb-10 lg:mb-0">
            I&apos;m Muhamad Ilham, a passionate designer + developer based in
            Bandung. I design, code, and refine digital products that turn
            concepts into clean, usable interfaces.
          </p>
          <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start lg:flex-row w-full lg:w-fit gap-3 sm:gap-4 mt-8 md:mt-10">
            <ButtonCTA
              icon="PhoneIcon"
              iconPosition="left"
              type="submit"
              lable="Book a Call"
            />
            <ButtonCTA
              icon="ArrowRightIcon"
              iconPosition="right"
              lable="View Projects"
            />
            {/* <ButtonCTA lable="View Projects" /> */}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 h-3/4 lg:h-fill">
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gray-400 rounded-[6px] h-3/4 lg:h-3/5"></div>
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-3 bg-gray-400 rounded-[6px] h-3/4 lg:h-3/5"></div>
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-2 bg-gray-400 rounded-[6px] h-3/4 lg:h-3/5"></div>
        </div>
      </div>
    </section>
  );
}
