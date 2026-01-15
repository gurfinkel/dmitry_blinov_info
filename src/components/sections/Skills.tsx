import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories, primarySkills } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        
        {/* Primary Skills Highlight */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {primarySkills.map((skill) => (
            <Badge key={skill} className="text-base px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={primarySkills.includes(skill.name) ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {skill.name}
                      {skill.years && (
                        <span className="ml-1 opacity-70">({skill.years})</span>
                      )}
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
}
