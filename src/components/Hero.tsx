import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Professional Designer Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>

      {/* Geometric Design Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Luxury Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-coral/10 to-primary/10 rotate-12 animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-coral/20 rounded-full animate-pulse"></div>

        {/* Luxury Accent Lines */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-coral/20 to-transparent"></div>
      </div>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-luxury"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight luxury-text drop-shadow-2xl">
              Jayaparthiban
            </h1>
            <div className="inline-block relative">
              <span className="bg-gradient-hero bg-clip-text text-transparent font-heading text-xl md:text-2xl font-semibold">
                UI/UX & Graphic Designer
              </span>
              {/* Elegant underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            B.Sc. in Computer Science with Cognitive Systems
            <br />
            <span className="text-foreground font-medium">
              Creating user-centered designs that bridge technology and human
              experience
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-hero hover:shadow-luxury transition-smooth font-heading font-semibold px-8 hover-lift"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayaparthiban2006@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover-lift border-border hover:border-primary hover:shadow-elegant backdrop-blur-sm"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/jaya-parthiban-a9a95b284/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover-lift border-border hover:border-primary hover:shadow-elegant backdrop-blur-sm"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://github.com/jayaparthiban"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="hover-lift border-border hover:border-primary hover:shadow-elegant backdrop-blur-sm"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-primary"></div>
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
