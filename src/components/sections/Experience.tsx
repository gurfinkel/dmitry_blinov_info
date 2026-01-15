"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "@/content/experience";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background top-0 ${
                    index % 2 === 0 ? "left-0 md:left-auto md:-right-2" : "left-0 md:-left-2"
                  } transform -translate-x-1/2 md:translate-x-0`}
                />

                <Card
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <CardContent className="p-4">
                    <div className={`flex items-start justify-between gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <h3 className="font-semibold text-lg">{exp.company}</h3>
                        <p className="text-muted-foreground">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      {expandedIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>

                    {expandedIndex === index && (
                      <div className={`mt-4 pt-4 border-t border-border ${index % 2 === 0 ? "md:text-left" : ""}`}>
                        <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                        <ul className="text-sm space-y-2 mb-4">
                          {exp.accomplishments.map((acc, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <span>{acc}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
