import type { projectsType } from "./Types";

const projects: projectsType = [
  {
    title: "Pokedex Application",
    desc: "A responsive app to explore Pokémon with search and detailed views using API integration.",
    tech: ["React", "JavaScript", "Poke-API"],
    link: "https://pokedex-darshik924s-projects.vercel.app/",
    github: "https://github.com/Darshik924/Pokedex.git",
  },
  {
    title: "URL Shortener",
    flag: {
      text: "(Group Project)",
      color: "#00cb00",
    },
    desc: "A full-stack URL shortener with authentication and analytics. Built in a team of two and explicitly worked on the frontend.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://url-shortner-1.vercel.app/",
    github: "https://github.com/naresh-coder123/url-shortner.git",
  },
  {
    title: "Student Dashboard",
    flag: {
      text: "(In Progress)",
      color: "#ed0000",
    },
    desc: "A productivity dashboard for managing tasks and tracking progress with a clean UI and gamified themes elements.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScirpt"],
    link: "#",
    github: "https://github.com/Darshik924/student-dashboard.git",
  },
  {
    title: "ShopEase: E-commerce App",
    flag: {
      text: "(In Progress)",
      color: "#ed0000",
    },
    desc: "A complete stack E-commerce website that has admin roles and customer roles for buyers and sellers",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScirpt"],
    link: "#",
    github: "#",
  },
];

export { projects };
