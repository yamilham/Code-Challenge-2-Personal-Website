import * as SolidIcons from "@heroicons/react/24/solid";

export type IconName = keyof typeof SolidIcons;
type IconPosition = "left" | "right";

interface IconProps {
  icon?: IconName;
  lable?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  // href?: string;
  disabled?: boolean;
  iconPosition?: IconPosition;
}

export default function ButtonCTA(props: IconProps) {
  const {
    icon,
    lable,
    onClick,
    type = "button",
    // href,
    disabled = false,
    iconPosition = "left",
  } = props;
  const SolidIconComponent = icon ? SolidIcons[icon] : undefined;

  return (
    <>
      <button
        onClick={onClick}
        // href={href}
        type={type}
        disabled={disabled}
        className="flex justify-center md:justify-between py-3 px-4 md:py-4 md:px-6 gap-2 text-[14px] md:text-[18px] font-mono font-normal uppercase bg-black text-white hover:bg-gray-100 hover:text-gray-800 rounded-[6px] w-full md:w-fit disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {iconPosition === "left" && SolidIconComponent && (
          <SolidIconComponent className="w-5 h-5 md:h-6 md:w-6 px-1" />
        )}
        {lable}
        {iconPosition === "right" && SolidIconComponent && (
          <SolidIconComponent className="w-5 h-5 md:h-6 md:w-6 px-1" />
        )}
      </button>
    </>
  );
}
