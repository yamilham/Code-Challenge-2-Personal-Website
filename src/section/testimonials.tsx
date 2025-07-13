import TitleSection from "@/components/title-section";
import TestimonialCard from "@/components/testimonialcontent";
import { testimonies } from "@/data/testimonial";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="py-4 md:py-6 lg:py-8 px-6 md:px-6 lg:px-8 h-full"
    >
      <div className="py-8">
        <TitleSection
          headingTwo="Testimonials"
          description="Hear out what they said"
        />
      </div>

      <div className="overflow-x-auto scrollbar-hide md:scrollbar-hide">
        <div className="flex gap-5 pb-4 snap-x snap-mandatory">
          {testimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="flex-shrink-0 w-80 sm:w-96 lg:w-[calc(33.333%-0.875rem)] xl:w-[calc(33.333%-0.875rem)] snap-center"
            >
              <TestimonialCard testimony={testimony} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
