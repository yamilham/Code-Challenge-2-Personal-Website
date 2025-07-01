import Navbar from "@/components/navbar";
// import Header from "@/section/header";
import Hero from "@/section/hero";
import About from "@/section/about";
import Skills from "@/section/skills";
import MyProjects from "@/section/project";
import Footer from "@/section/footer";
import ContactMe from "@/section/contact";

export default function Home() {
  return (
    <>
      <main className="min-h-[400vh]">
        {/* <Header /> */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <MyProjects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
