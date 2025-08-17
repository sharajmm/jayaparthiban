import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
// ...existing code...

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
