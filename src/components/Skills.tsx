import { Figma, Palette, Code, Users, Search, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Figma,
      title: "Design Tools",
      color: "bg-gradient-hero",
      skills: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "InVision", "Principle"]
    },
    {
      icon: Palette,
      title: "Visual Design",
      color: "bg-gradient-accent",
      skills: ["Typography", "Color Theory", "Branding", "Illustration", "Icon Design", "Layout Design"]
    },
    {
      icon: Users,
      title: "UX Research",
      color: "bg-gradient-hero",
      skills: ["User Interviews", "Persona Development", "Journey Mapping", "Usability Testing", "A/B Testing", "Analytics"]
    },
    {
      icon: Code,
      title: "Technical Skills",
      color: "bg-gradient-accent",
      skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "Design Systems", "Accessibility"]
    },
    {
      icon: Search,
      title: "Research & Strategy",
      color: "bg-gradient-hero",
      skills: ["Competitive Analysis", "Market Research", "Information Architecture", "Card Sorting", "Heuristic Evaluation"]
    },
    {
      icon: Zap,
      title: "Prototyping",
      color: "bg-gradient-accent",
      skills: ["Wireframing", "Interactive Prototypes", "High-fidelity Mockups", "Design Handoffs", "Version Control"]
    }
  ];

  const coreCompetencies = [
    { name: "UI/UX Design", level: 95 },
    { name: "Graphic Design", level: 90 },
    { name: "User Research", level: 85 },
    { name: "Prototyping", level: 92 },
    { name: "Design Systems", level: 88 },
    { name: "Front-end Development", level: 80 }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through education, practice, and passion for creating exceptional user experiences
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-border bg-card group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-4 ${category.color} rounded-xl mr-4 transition-smooth group-hover:scale-110`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Core Competencies */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
          <h3 className="font-heading text-2xl font-semibold text-center text-card-foreground mb-8">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-card-foreground">{competency.name}</span>
                  <span className="text-sm text-muted-foreground font-semibold">{competency.level}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-hero rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;