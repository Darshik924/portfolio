import { contacts } from "../projects/Contacts";

const Contact = () => {
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

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-7xl font-extrabold text-slate-800">
          Get in Touch 📬
        </h1>

        <p className="mt-8 text-xl text-slate-600">
          Whether you want to collaborate, chat, or just say hi — feel free to
          reach out
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-linear-to-br ${item.color} text-white flex items-center justify-center text-red font-bold text-lg transition-transform duration-300 group-hover:scale-110`}
              >
                →
              </div>

              <h2 className="mt-4 text-lg font-bold text-amber-800">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-slate-900">{item.desc}</p>

              <p className="mt-4 text-sm font-medium text-teal-700 inline-block px-4 py-1.5 rounded-md transition-all duration-50 group-hover:underline hover:text-white hover:bg-teal-950 hover:scale-105">
                {item.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;
