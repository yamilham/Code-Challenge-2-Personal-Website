import Link from "next/link";
export default function ButtonNav(props: { lable: string }) {
  return (
    <Link
      href="#"
      className="font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-800 py-1.5 px-2.5 rounded-[32px]"
    >
      {props.lable}
    </Link>
  );
}
