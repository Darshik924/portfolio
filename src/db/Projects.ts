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
  {
    title: "Live Upvote Gallery",
    flag: {
      text: "(Group Project)",
      color: "#00cb00",
    },
    desc: "A real-time image gallery where users can upload images and upvote their favorites — with live vote counts that update instantly across all connected devices, no refresh needed. Worked on the complete backend,frontend architecture and client sevrer communication",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
    link: "https://live-upvote-gallery.vercel.app/",
    github: "https://github.com/Darshik924/live-upvote-gallery.git",
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
    github: "https://github.com/Darshik924/shopease-e-commerce.git",
  },
];

export { projects };
