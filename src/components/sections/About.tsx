import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";

const highlights = [
  "17+ years experience",
  "Amazon & Booking.com",
  "AI-powered products",
  "Real-time collaboration",
  "Billing systems",
  "Remote-first",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Senior Fullstack Engineer with 17+ years building production systems at scale. 
            Currently at SOTA (AI content generation platform), previously led engineering at 
            Omneky (AI-powered ads), and worked at Amazon, Booking.com, and other high-scale environments.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Core strengths:</strong> Node.js/TypeScript backends, 
            React frontends, PostgreSQL optimization, AWS infrastructure, and shipping AI-powered 
            products from concept to production.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I take end-to-end ownership—from architecture through production—and thrive in 
            fast-moving environments where shipping matters. Strong async communicator, 
            experienced with fully remote teams across time zones.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="text-sm">
                {highlight}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>London, UK (Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>UTC+0</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Available for contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
