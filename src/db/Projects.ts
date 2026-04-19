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
    link: "#",
    github: "https://github.com/naresh-coder123/url-shortner.git",
  },
];

export { projects };
