export default function Footer() {
  return (
    <footer className="w-full border-t border-transparent py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Daniel. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="https://github.com/dantan234"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 .5C5.649.5.5 5.649.5 12c0 5.085 3.292 9.401 7.861 10.924.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.962-3.197.695-3.872-1.54-3.872-1.54-.523-1.328-1.278-1.682-1.278-1.682-1.044-.714.08-.699.08-.699 1.155.08 1.763 1.186 1.763 1.186 1.026 1.758 2.693 1.25 3.35.956.104-.743.402-1.25.731-1.538-2.552-.29-5.236-1.276-5.236-5.682 0-1.255.448-2.282 1.184-3.087-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.162 1.179a10.932 10.932 0 0 1 2.878-.387c.976.005 1.96.132 2.878.387 2.197-1.488 3.16-1.179 3.16-1.179.627 1.582.233 2.75.114 3.04.737.805 1.183 1.832 1.183 3.087 0 4.418-2.688 5.389-5.247 5.673.413.355.781 1.058.781 2.133 0 1.54-.014 2.78-.014 3.158 0 .309.207.668.79.554C20.212 21.397 23.5 17.083 23.5 12c0-6.351-5.149-11.5-11.5-11.5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/danieltan18/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.41h2.67V18ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.2V18h-2.67V9.41h2.56v1.17h.04c.36-.67 1.22-1.38 2.51-1.38 2.68 0 3.18 1.77 3.18 4.06V18Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
