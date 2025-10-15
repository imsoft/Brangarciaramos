import Link from "next/link";
import PixelCard from "@/components/pixel-card";
import HeroSection from "@/components/hero-section";
import { ThemeAwareLogo } from "@/components/theme-aware-logo";
import { projects } from "@/data/projects.data";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 pt-20 sm:pt-6 gap-8 sm:gap-12">
      <HeroSection />

      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl"
        aria-label="Digital ventures and projects"
      >
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PixelCard colors={project.colors} speed={50}>
              <div className="absolute flex flex-col items-center gap-3">
                <ThemeAwareLogo
                  logo={project.logo}
                  logoDark={project.logoDark}
                  alt={`${project.name} logo`}
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
            </PixelCard>
          </Link>
        ))}
      </section>
    </main>
  );
}

