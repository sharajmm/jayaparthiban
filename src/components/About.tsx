import { User, Lightbulb, Palette, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: User,
      title: "User-Centered",
      description: "Every design decision starts with understanding user needs and behaviors"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining creativity with technology to solve complex design challenges"
    },
    {
      icon: Palette,
      title: "Aesthetics",
      description: "Beautiful designs that balance form and function harmoniously"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely passionate about creating meaningful digital experiences"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Bridging Technology & Human Experience
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a Bachelor's degree in Computer Science and Cognitive Systems, I bring a unique 
                  perspective to UI/UX design that combines technical expertise with deep understanding 
                  of human cognition and behavior.
                </p>
                
                <p>
                  My journey in design began with fascination for how people interact with technology. 
                  This led me to specialize in creating intuitive, accessible, and beautiful digital 
                  experiences that truly serve users' needs.
                </p>
                
                <p>
                  I believe great design is invisible – it solves problems so elegantly that users 
                  never have to think about it. Every pixel, every interaction, and every decision 
                  is carefully crafted with the end user in mind.
                </p>
              </div>
            </div>
            
            {/* Design Philosophy */}
            <div className="p-6 bg-accent rounded-xl border border-border">
              <h4 className="font-heading text-lg font-semibold text-accent-foreground mb-3">
                My Design Philosophy
              </h4>
              <p className="text-accent-foreground/80 italic">
                "Design is not just what it looks like and feels like. Design is how it works. 
                I strive to create experiences that are not only visually stunning but also 
                functionally excellent and emotionally resonant."
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg mr-4">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-card-foreground">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;