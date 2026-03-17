import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-white mb-3">Projects</h1>
      <p className="text-slate-400 mb-10">Choose a project to view details.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/30"
          >
            {project.heroVideo ? (
              <video
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={project.heroVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-slate-700/60 via-slate-600/40 to-slate-800/70" />
            )}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-200">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
