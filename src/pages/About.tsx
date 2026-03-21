import React from "react";
import { Link } from "react-router-dom";
import CoolButton from "../components/CoolButton";

const About = () => {
  const skills = ["React", "TypeScript", "Express", "MongoDB", "Tailwind CSS"];

  return (
    <main className="relative pt-20 min-h-screen bg-linear-to-br from-teal-100 via-blue-100 to-indigo-100 flex items-center justify-center px-6">
      {" "}
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#475569 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-extrabold flex justify-center gap-x-3 text-slate-800 drop-shadow-sm">
          Hey, <div className="text-teal-800">Darshik Ladhe</div> here 👋
        </h1>

        <div className="max-w-250">
          <p className="mt-14 text-lg md:text-xl text-slate-600 leading-relaxed">
            I’m a student focused on building clean, and scalable software. I
            enjoy working on real-time systems and constantly improving my
            understanding of how things work under the hood.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full text-sm font-bold bg-amber-100 text-slate-700 border border-slate-300 shadow-sm duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-110 hover:border-teal-400 cursor-default transition hover:bg-teal-950 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <CoolButton>
            <Link to="/projects">View Projects</Link>
          </CoolButton>

          <CoolButton>
            <a href="mailto:yourmail@gmail.com">Contact Me</a>
          </CoolButton>
        </div>
      </div>
    </main>
  );
};

export default About;
