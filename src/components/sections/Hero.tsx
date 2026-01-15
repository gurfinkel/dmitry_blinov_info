"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { CldImage } from "next-cloudinary";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border">
              <CldImage
                src="IMG_0487_aufmfg"
                alt="Dmitry Blinov"
                width={256}
                height={256}
                crop="fill"
                gravity="face"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Dmitry Blinov
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              Senior Fullstack Engineer
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              Node.js • TypeScript • React • AI Products
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
