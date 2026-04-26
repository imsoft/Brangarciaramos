export interface Project {
  name: string;
  url: string;
  colors: string;
  logo: string;
  logoDark?: string;
}

export const projects: Project[] = [
  {
    name: "Cursumi",
    url: "https://www.cursumi.com/",
    colors: "#22d3ee,#06b6d4,#0e7490",
    logo: "https://www.cursumi.com/favicon.ico",
  },
  {
    name: "Aduvanta",
    url: "https://aduvanta.com/",
    colors: "#93c5fd,#3b82f6,#1d4ed8",
    logo: "https://aduvanta.com/favicon.ico",
  },
  {
    name: "imSoft",
    url: "https://www.imsoft.io/",
    colors: "#fda4af,#fb7185,#e11d48",
    logo: "https://www.imsoft.io/favicon.ico",
  },
  {
    name: "Brandon by Bran",
    url: "https://www.brandonbybran.com/",
    colors: "#fcd34d,#f59e0b,#b45309",
    logo: "https://www.brandonbybran.com/favicon.ico",
  },
];
