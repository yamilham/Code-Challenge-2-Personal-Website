import React from "react";

type BadgeProps = {
  icon: React.ElementType;
  label?: string;
  category?: string;
};

export default function SkillBadge({
  icon: Icon,
  label,
  category,
}: BadgeProps) {
  return (
    <div className="group flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4 md:py-6 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-10 bg-white hover:bg-black border-1 transition-colors duration-200">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-black group-hover:text-white transition-transform duration-200 lg:group-hover:-translate-y-1" />
      <div className="flex flex-col items-center text-center relative">
        <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 group-hover:text-white transition-transform duration-200 lg:group-hover:-translate-y-1">
          {label}
        </span>
        {category && (
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-full mt-1 sm:mt-2">
            {category}
          </span>
        )}
      </div>
    </div>
  );
}
