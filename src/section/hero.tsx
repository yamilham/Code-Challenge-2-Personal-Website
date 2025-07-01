import ButtonCTA from "@/components/buttoncta";

// import Milham from "@/components/ilham";
export default function Hero() {
  return (
    <section id="home" className="mt-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 border-b-2 pb-6 gap-12">
        <div className="text-baseline">
          <h1 className="text-4xl md:text-[60px] text-balance text-black leading-[1.05] font-normal tracking-tight">
            {/* Hi, my name is{" "} */}
            Attention! <br />
            You&apos;re about to meet a Creative Web Developer.
          </h1>
        </div>
        <div className="flex flex-col justify-between md:pl-20">
          <p className="text-xl font-mono leading-6 md:text-pretty">
            I&apos;m Muhamad Ilham, a passionate designer + developer based in
            Bandung. I design, code, and refine digital products that turn
            concepts into clean, usable interfaces.
          </p>
          <div className="flex flex-cols-1 md:flex-cols-2 gap-4 mt-6 w-full md:w-fit">
            <ButtonCTA
              icon="PhoneIcon"
              iconPosition="left"
              href="#contact"
              lable="Book a Call"
            />
            <ButtonCTA
              icon="ArrowRightIcon"
              iconPosition="right"
              href="#projects"
              lable="View Projects"
            />
            {/* <ButtonCTA lable="View Projects" /> */}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-7 gap-6 mt-8 h-96">
        <div className="col-span-2 bg-gray-400 rounded-[6px]"></div>
        <div className="col-span-3 bg-gray-400 rounded-[6px]"></div>
        <div className="col-span-2 bg-gray-400 rounded-[6px]"></div>
      </div>
    </section>
  );
}
