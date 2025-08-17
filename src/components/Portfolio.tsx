import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects showcasing my approach to solving design
            challenges through user-centered design
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover-lift border-border bg-card overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="flex gap-2">
                    {/* Removed View button */}
                    {project.visit ? (
                      <a
                        href={
                          project.visit.startsWith("http")
                            ? project.visit
                            : `https://${project.visit}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 backdrop-blur-sm hover:bg-white w-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm hover:bg-white"
                        disabled
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${project.color} text-white font-medium`}>
                    {project.category}
                  </Badge>
                </div>

                {/* Project Info */}
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
