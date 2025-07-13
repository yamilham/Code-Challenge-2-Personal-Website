"use client";

import { useForm } from "react-hook-form";
import ButtonCTA from "./buttoncta";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-medium">
          Contact Me
        </h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-xl md:text-2xl lg:text-2xl text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="py-2 md:py-4 lg:py-4">
          <label
            htmlFor="name"
            className="block text-xl md:text-2xl lg:text-3xl font-medium mb-1"
          >
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className="w-full text-xl md:text-2xl lg:text-2xl font-light py-2 border-b-2"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-xl md:text-2xl lg:text-2xl">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="py-2 md:py-4 lg:py-4">
          <label
            htmlFor="email"
            className="block text-xl md:text-2xl lg:text-3xl font-medium mb-1"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full text-xl md:text-2xl lg:text-2xl font-light py-2 border-b-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xl md:text-2xl lg:text-2xl">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="py-2 md:py-4 lg:py-4">
          <label
            htmlFor="message"
            className="block text-xl md:text-2xl lg:text-3xl font-medium mb-1"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            placeholder="Type your Goals"
            rows={1}
            className="w-full text-xl md:text-2xl lg:text-2xl font-light py-2 border-b-2"
          />
          {errors.message && (
            <p className="text-red-500 text-xl md:text-2xl lg:text-2xl">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <ButtonCTA
            type="submit"
            lable="Submit"
            iconPosition="right"
            icon="EnvelopeIcon"
          />
        </div>
      </form>
    </div>
  );
}
