"use client";

import { useState } from "react";
import ButtonCTA from "@/components/buttoncta";
import TitleSection from "@/components/title-section";
import ContactForm from "@/components/contact-form";

export default function ContactMe() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section
      id="contact"
      className="flex flex-col py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8"
    >
      <div className="bg-gray-300 p-8 rounded-md">
        <div className="pb-16">
          <TitleSection
            headingTwo="What are you waiting for..."
            description="Let's bring your idea, we craft and we build together"
          />
        </div>

        {!showForm ? (
          <div className="flex justify-end">
            <div onClick={handleButtonClick}>
              <ButtonCTA
                icon="ArrowUpRightIcon"
                iconPosition="right"
                lable="Book a Call"
              />
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <ContactForm onClose={handleCloseForm} />
          </div>
        )}
      </div>
    </section>
  );
}
