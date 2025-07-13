import ButtonCTA from "@/components/buttoncta";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="mt-6 min-h-screen sm:mt-10 py-6 px-4 md:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-10 border-b-2 pb-8 sm:pb-12 gap-8 sm:gap-12">
        <div className="text-baseline">
          <h1 className="text-5xl md:text-5xl lg:text-7xl text-balance text-black leading-[1.05] font-normal tracking-tight">
            Attention! <br />
            You&apos;re about to meet a Creative Web Developer.
          </h1>
        </div>
        <div className="flex flex-col justify-between lg:gap-6 lg:pl-12">
          <p className="text-xl md:text-2xl font-regular leading-relaxed md:heading-6 md:text-pretty mb-8 md:mb-10 lg:mb-0">
            I&apos;m Muhamad Ilham, a passionate designer + developer based in
            Bandung. I design, code, and refine digital products that turn
            concepts into clean, usable interfaces.
          </p>
          <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start lg:flex-row w-full lg:w-fit gap-3 sm:gap-4 mt-8 md:mt-10">
            <a href="#contact">
              <ButtonCTA
                icon="PhoneIcon"
                iconPosition="left"
                type="submit"
                lable="Book a Call"
              />
            </a>
            <a href="#projects">
              <ButtonCTA
                icon="ArrowRightIcon"
                iconPosition="right"
                lable="View Projects"
              />
            </a>
            {/* <ButtonCTA lable="View Projects" /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-9">
        <Image
          src="/assets/img-banner.png"
          alt="banner image"
          width={600}
          height={400}
          className="w-full max-w-sm md:max-w-[1024px] lg:max-w-[1360px] h-[256px] md:h-[464px] lg:h-[560px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
