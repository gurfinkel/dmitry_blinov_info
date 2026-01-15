import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "flatorez@gmail.com",
    href: "mailto:flatorez@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/flatorez",
    href: "https://www.linkedin.com/in/flatorez/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dblinov",
    href: "https://github.com/dblinov",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Interested in working together? I am available for freelance projects, 
          contract work, and full-time opportunities.
        </p>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>London, UK • UTC+0 • Available for remote work worldwide</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <a href="mailto:flatorez@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
