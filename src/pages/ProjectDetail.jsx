import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-28 px-6 max-w-6xl mx-auto">
      <Link to="/projects" className="text-sm text-slate-400 hover:text-white transition-colors">
        ← Back to Projects
      </Link>
      {project.heroVideo && (
        <section className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
          <video
            className="h-full w-full object-cover"
            src={project.heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
            <p className="mt-3 max-w-3xl text-base md:text-xl text-slate-200">{project.subtitle}</p>
          </div>
        </section>
      )}
      {!project.heroVideo && (
        <>
          <h1 className="mt-4 text-5xl font-bold text-white">{project.title}</h1>
          <p className="mt-4 text-xl text-slate-300">{project.subtitle}</p>
        </>
      )}
      <p className="mt-8 text-lg leading-relaxed text-slate-400">{project.summary}</p>
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-slate-300">
          Replace this section with your project narrative, architecture, stack, results, and media.
        </p>
      </div>
    </div>
  );
}
