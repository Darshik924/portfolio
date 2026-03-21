import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Pokedex Application",
      desc: "A responsive app to explore Pokémon with search and detailed views using API integration.",
      tech: ["React", "TypeScript", "API"],
      link: "https://pokedex-darshik924s-projects.vercel.app/",
      github: "https://github.com/Darshik924/Pokedex.git",
    },
    {
      title: "Student Dashboard (In Progress)",
      desc: "A productivity dashboard for managing tasks and tracking progress with a clean UI and gamified themes elements.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
    },
    {
      title: "URL Shortener (Group Project)",
      desc: "A full-stack URL shortener with authentication and analytics. Built in a team of two and explicitly worked on the frontend.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "#",
      github: "https://github.com/Darshik924/url-shortner-service.git",
    },
  ];

  return (
    <main className="relative pt-20 min-h-screen bg-linear-to-br from-teal-100 via-blue-100 to-indigo-100 flex items-center justify-center px-6">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#475569 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="text-7xl font-extrabold text-slate-800">Projects 🚀</h1>

        <p className="mt-4 text-slate-600 text-2xl">
          Here are some of the things I’ve been working on
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-md 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold text-indigo-800 font-sans">
                {proj.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600">{proj.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full text-sm font-bold bg-amber-100 text-slate-700 border border-slate-300 shadow-sm duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-110 hover:border-teal-400 cursor-default transition hover:bg-teal-950 hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-4">
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-teal-700 font-semibold hover:underline p-1 rounded-md hover:text-white hover:bg-teal-950"
                >
                  Live
                </a>

                <a
                  href={proj.github}
                  target="_blank"
                  className="text-slate-700 font-semibold hover:underline p-1 rounded-md hover:text-white hover:bg-amber-500"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
