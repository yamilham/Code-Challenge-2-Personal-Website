import Image from "next/image";
import { TestimonialContent } from "@/types/testimonial.type";

interface TestimonialQuotes {
  testimony: TestimonialContent;
}

export default function TestimonialCard({ testimony }: TestimonialQuotes) {
  return (
    <div className="py-6 px-6 rounded-md bg-gray-200 h-full min-h-[280px] md:min-h-[360px] lg:min-h-[400px] flex flex-col">
      <div className="flex items-center gap-4 mb-4 md:mb-6 lg:mb-8">
        <Image
          src={testimony.path}
          alt={testimony.alt}
          width={64}
          height={64}
          className="rounded-full flex-shrink-0"
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-[18px]/tight md:text-xl lg:text-2xl font-medium">
            {testimony.name}
          </p>
          <p className="text-sm/tight md:text-xl lg:text-xl font-light">
            {testimony.jobTitle}
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-start">
        <p className="text-light text-xl md:text-2xl lg:text-xl xl:text-2xl text-pretty leading-relaxed">
          {testimony.testimony}
        </p>
      </div>
    </div>
  );
}
