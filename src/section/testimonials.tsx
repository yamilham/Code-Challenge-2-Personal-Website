import TitleSection from "@/components/title-section";
import TestimonialCard from "@/components/testimonialcontent";
import { testimonies } from "@/data/testimonial";

export default function Testimonial() {
  return (
    <section id="testimonial" className="min-h-screen py-10">
      <div className="py-8">
        <TitleSection
          headingTwo="Testimonials"
          description="Hear out what they said"
        />
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
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

      {/* Optional: Add scroll indicators
      <div className="flex justify-center mt-4 space-x-2">
        {testimonies.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 opacity-50"
          />
        ))}
      </div> */}
    </section>
  );
}
