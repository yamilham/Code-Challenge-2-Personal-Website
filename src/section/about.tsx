import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-10 md:px-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-medium py-4">About Me</h2>
        <p className="flex justify-center text-xl">Get to know more</p>
      </div>
      <div className="grid md:grid-cols-5 mt-32 gap-10 min-h-screen bg-blue-200">
        <div className="grid md:col-span-2 bg-red-400 h-3/4"></div>
        <div className="md:col-span-3 bg-white">
          <h3 className="text-3xl font-bold">Muhamad Ilham</h3>
          <p>
            Freelance 3D Artist, Founder{" "}
            <Link
              className="underline underline-offset-2"
              href="https://iconscout.com/contributors/yacons-design"
            >
              <strong>Yacons Design</strong>
            </Link>
          </p>
          <br></br>
          <p>
            Hello, this is me Ilham. I am a Freelance 3D artist with more than 3
            years of experience in creating 3D rendered models. I am a Bachelor
            of Electrical Engineering. I am currently pursuing Fullstack Web
            Development Bootcamp Program at{" "}
            <Link className="text-[#32b280]" href="https://purwadhika.com/">
              <strong>Purwadhika</strong>
            </Link>{" "}
            Campus Bandung. Looking for opportunities in Software Development
            especially in Front-End role.
          </p>
        </div>
      </div>
    </section>
  );
}
