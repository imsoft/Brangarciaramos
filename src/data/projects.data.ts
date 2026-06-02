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
    colors: "#d8b4fe,#a855f7,#6b21a8",
    logo: "https://www.cursumi.com/favicon.ico",
  },
  {
    name: "imSoft",
    url: "https://www.imsoft.io/",
    colors: "#93c5fd,#3b82f6,#1d4ed8",
    logo: "https://www.imsoft.io/favicon.ico",
  },
  {
    name: "Brandon by Bran",
    url: "https://www.brandonbybran.com/",
    colors: "#71717a,#27272a,#09090b",
    logo: "https://www.brandonbybran.com/favicon.ico",
  },
];
