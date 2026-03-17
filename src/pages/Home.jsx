import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
          <img
            src="/homepage-hero.jpg"
            alt=""
            className="w-full h-full object-cover object-top md:object-center opacity-45 saturate-100"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/12 via-slate-950/28 to-slate-950/45" aria-hidden="true" />

        <div className="relative z-10 mb-6 px-3 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Available for 2026 Roles</span>
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.02]">
            <span className="block">Building</span>
            <span className="block inline-block whitespace-nowrap pb-1 text-transparent bg-clip-text bg-linear-to-r from-slate-300 via-orange-300 to-rose-400">Physical AI</span>
            <span className="block">for the real world</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-100 max-w-xl mx-auto leading-relaxed font-light [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
            I&apos;m an AI engineer specializing in computer vision and LLM&apos;s. Currently working on visual odometry for driving safety.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center pt-4">
            <Link to="/projects" className="bg-white/60 text-black px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
              Explore Projects
            </Link>
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/dantan234"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-white/80 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.43 7.88 10.96.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.73-1.57-2.56-.29-5.26-1.29-5.26-5.76 0-1.27.45-2.3 1.19-3.12-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.19 1.19a10.9 10.9 0 0 1 5.8 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.63.23 2.83.11 3.13.74.82 1.18 1.85 1.18 3.12 0 4.48-2.7 5.46-5.28 5.75.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.54 11.54 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/danieltan18/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white/80 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 18.34V9.67H5.67V18.34H8.34M7 8.5A1.56 1.56 0 1 0 7 5.39A1.56 1.56 0 1 0 7 8.5M18.34 18.34V13.6C18.34 11.06 17.8 9.1 14.83 9.1C13.4 9.1 12.45 9.89 12.06 10.64H12.02V9.33H9.46V18.34H12.13V13.88C12.13 12.71 12.35 11.59 13.8 11.59C15.22 11.59 15.24 12.92 15.24 13.96V18.34H18.34Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/5">
        <div className="flex flex-row gap-6 md:gap-12 items-start">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="text-slate-400 italic">
              "I bridge the gap between mechanical engineering and artificial intelligence via Physical AI"
            </p>
            <p className="text-slate-500">
              With a background in mechanical engineering and AI,
              I build systems that understand the world. When I&apos;m not working,
              you can find me at a new coffeeshop or out on a run.
            </p>
            <Link to="/about" className="inline-block text-blue-400 font-medium hover:underline">
              Read my full story →
            </Link>
          </div>

          <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl border border-white/10 overflow-hidden shrink-0">
            <img
              src="/profile.jpeg"
              alt="Daniel J Tan"
              className="h-full w-full object-cover object-[center_30%] scale-110"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
