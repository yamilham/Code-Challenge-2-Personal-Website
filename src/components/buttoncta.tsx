import * as SolidIcons from "@heroicons/react/24/solid";
import Link from "next/link";

export type IconName = keyof typeof SolidIcons;
type IconPosition = "left" | "right";

interface IconProps {
  icon?: IconName;
  lable?: string;
  href: string;
  target?: string;
  iconPosition?: IconPosition;
}
export default function ButtonCTA(props: IconProps) {
  const { icon, lable, href, target, iconPosition = "left" } = props;
  const SolidIconComponent = icon ? SolidIcons[icon] : undefined;
  return (
    <>
      <Link
        href={href}
        target={target}
        className="flex items-center justify-between py-3 px-4 gap-2 text-[14px] font-normal uppercase bg-black text-white hover:bg-gray-100 hover:text-gray-800 rounded-[6px] w-fit"
      >
        {iconPosition === "left" && SolidIconComponent && (
          <SolidIconComponent className="h-5 w-5 px-1" />
        )}
        {lable}
        {iconPosition === "right" && SolidIconComponent && (
          <SolidIconComponent className="h-5 w-5 px-1" />
        )}
      </Link>
    </>
  );
}
