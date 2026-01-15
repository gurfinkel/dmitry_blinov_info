import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.company && (
                      <p className="text-sm text-muted-foreground mt-1">{project.company}</p>
                    )}
                  </div>
                  {project.url && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <ul className="text-sm space-y-1 mb-4 flex-1">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {project.impact && (
                  <p className="text-sm font-medium text-primary mb-4">{project.impact}</p>
                )}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 6 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 6}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
