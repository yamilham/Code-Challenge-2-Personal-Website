import Navbar from "@/components/navbar";
import Header from "@/section/header";
import Hero from "@/section/hero";
import About from "@/section/about";
import Skills from "@/section/skills";
import MyProjects from "@/section/project";
import Footer from "@/section/footer";

export default function Home() {
  return (
    <main className="min-h-[400vh]">
      <Header />
      <body>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <MyProjects />
        <Footer />
      </body>
      
    </main>
  );
}
