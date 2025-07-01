import Image from "next/image";

export default function SkillCard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-16">
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/figma-brands.svg"
            alt="tools figma"
            width={16}
            height={16}
          />
          <p>Figma</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/Blender.svg"
            alt="tools Blender"
            width={20}
            height={20}
          />
          <p>Blender</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <div className="hover:text-white">
            <Image
              src="assets/github.svg"
              alt="tools figma"
              width={16}
              height={16}
            />
          </div>
          <p>Github</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/vscode.svg"
            alt="tools vscode"
            width={16}
            height={16}
          />
          <p>Visual Studio Code</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/html5.svg"
            alt="tools HTML"
            width={16}
            height={16}
          />
          <p>HTML</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image src="assets/css3.svg" alt="tools CSS" width={16} height={16} />
          <p>CSS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/js.svg"
            alt="tools JavaScript"
            width={16}
            height={16}
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/Typescript.svg"
            alt="tools TypeScript"
            width={16}
            height={16}
          />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/reactjs.svg"
            alt="tools React JS"
            width={16}
            height={16}
          />
          <p>React JS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/tailwindcss.svg"
            alt="tools Tailwind CSS"
            width={16}
            height={16}
          />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/Next.js.svg"
            alt="tools Next JS"
            width={16}
            height={16}
          />
          <p>Next JS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 py-3 px-4.5 bg-white hover:bg-black hover:text-white border-1">
          <Image
            src="assets/nodejs.svg"
            alt="tools Node JS"
            width={16}
            height={16}
          />
          <p>Node JS</p>
        </div>
      </div>
    </>
  );
}
