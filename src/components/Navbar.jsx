import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // 1. Import the Link tool

export default function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const previewVideoRefs = useRef({});

  const openProjects = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setProjectsOpen(true);
  };

  const closeProjects = () => {
    closeTimerRef.current = setTimeout(() => {
      setProjectsOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" }, // We'll build these later
  ];

  const projectLinks = [
    {
      key: "example-2",
      name: "ClearPath AI (Hackathon Prototype)",
      path: "/projects/example-2",
      tagline: "Vision-based ADAS Collision Warning System",
      poster: "/clearpath-thumb.jpg",
      video: "/clearpath-hero.mp4",
    },
    {
      key: "example-1",
      name: "Visual Odometry",
      path: "/projects/example-1",
      tagline: "A real-time Monocular Visual Odometry system integrated with YOLO-based object tracking and Time-to-Collision (TTC) estimation for autonomous safety.",
      poster: "/visual-odometry-thumb.jpg",
      video: "/visual-odometry-hero.mov",
    },
    { key: "example-3", name: "Example 3", path: "/projects/example-3", tagline: "Example 3 subtitle" },
  ];

  const playPreview = (key) => {
    const video = previewVideoRefs.current[key];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const stopPreview = (key) => {
    const video = previewVideoRefs.current[key];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-transparent bg-[#242424]/80 backdrop-blur-md">
        <div className="w-full pl-8 pr-6 h-12 grid grid-cols-3 items-center">
          
          {/* Left: Branding */}
          <div className="flex justify-start">
            <Link to="/" className="text-white font-bold text-xl tracking-tight font-['Cormorant_Garamond']">
              Daniel J Tan
            </Link>
          </div>

          {/* Center: Tabs */}
          <div className="flex justify-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/projects"
              onMouseEnter={openProjects}
              onMouseLeave={closeProjects}
              onFocus={openProjects}
              onClick={() => setProjectsOpen(false)}
              className={`text-sm font-medium transition-colors ${projectsOpen ? "text-white" : "text-white/90 hover:text-white"}`}
            >
              Projects
            </Link>
          </div>

          {/* Right: Spacer */}
          <div className="hidden md:flex justify-end"></div>
        </div>
      </nav>

      <div
        onMouseEnter={openProjects}
        onMouseLeave={closeProjects}
        className={`fixed left-0 right-0 top-12 z-40 border-b border-white/10 bg-[#242424]/80 backdrop-blur-md shadow-2xl transition-all duration-300 ease-out ${
          projectsOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-16 px-8 py-10">
          {projectLinks.map((project) => (
            <Link
              key={project.key}
              to={project.path}
              onClick={() => setProjectsOpen(false)}
              onMouseEnter={() => playPreview(project.key)}
              onMouseLeave={() => stopPreview(project.key)}
              className="group block overflow-hidden rounded-lg transition-colors hover:bg-white/10"
            >
              <div className="relative h-32 overflow-hidden rounded-lg bg-slate-900/70">
                {project.poster && (
                  <img
                    src={project.poster}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                )}
                {project.video && (
                  <video
                    ref={(el) => {
                      previewVideoRefs.current[project.key] = el;
                    }}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <p className="text-base font-semibold text-white transition group-hover:text-blue-200">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-200 line-clamp-2">{project.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
