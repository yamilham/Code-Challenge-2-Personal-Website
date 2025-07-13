import Navbar from "@/components/navbar";
// import Header from "@/section/header";
import Hero from "@/section/hero";
import About from "@/section/about";
import Skills from "@/section/skills";
import Projects from "@/section/project";
import Experience from "@/section/experience";
import Testimonial from "@/section/testimonials";
import Footer from "@/section/footer";
import ContactMe from "@/section/contact";

export default function Home() {
  return (
    <>
      <main className="max-h-screen max-w-screen px-4 md:px-6 lg:px-8 pb-10 md:pb-10 lg:pb-16">
        {/* <Header /> */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonial />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
