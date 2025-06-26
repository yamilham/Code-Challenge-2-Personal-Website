// import Milham from "@/components/ilham";
export default function Hero() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-8">
      <div className="col-span-2 text-baseline w-3/4">
        <h1 className="text-[60px] text-wrap text-black leading-[1.05] font-normal tracking-tight">
          {/* Hi, my name is{" "} */}
          Attention! <br />
          You&apos;re about to meet a Creative Developer.
        </h1>
      </div>
      <div className="col-span-1">
        <p className="text-xl font-regular text-pretty">
          I&apos;m Muhamad Ilham, a passionate designer + developer based in
          Bandung. I design, code, and refine digital products that turn
          concepts into clean, usable interfaces.
        </p>
      </div>
      <div></div>
    </section>
  );
}
