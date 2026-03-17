export default function Resume() {
  const resumePdfPath = "/resume.pdf";

  const skillSections = [
    {
      heading: "Languages/Frameworks",
      items: ["Python", "SQL", "PyTorch", "OpenCV", "YOLO", "SciKit-learn", "NumPy", "Pandas", "HuggingFace", "FastAPI"],
    },
    {
      heading: "DevOps/Tools",
      items: ["Docker", "Kubernetes", "AWS S3", "Azure AI", "GitLab", "Git", "JIRA"],
    },
    {
      heading: "Machine Learning/Robotics",
      items: ["NLP", "LLMs", "RAG", "Generative AI", "Computer Vision", "SacreBLEU", "FANUC", "Roboguide", "Arduino"],
    },
  ];

  return (
    <div className="min-h-screen pt-28 px-6 pb-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-5xl font-bold text-white">Resume</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={resumePdfPath}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            View PDF
          </a>
          <a
            href={resumePdfPath}
            download
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-slate-200 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-300 font-['Cormorant_Garamond']">Work Experience</h2>
          <div className="mt-6 space-y-6">
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">Graduate Machine Learning Engineer Intern</h3>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">June 2025 - August 2025</p>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-sm italic text-slate-300">Dell Technologies - Customer &amp; Finance Services Applied AI Research &amp; Engineering</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Round Rock, TX</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-200 leading-relaxed">
                <li>
                  Designed and implemented a full-stack financial forecasting system using a FastAPI backend and web-based
                  UI, enabling automated retrieval from Amazon S3 and direct reporting to SharePoint.
                </li>
                <li>
                  Transformed a manual 4-day forecasting process into a self-service tool by deploying a Dockerized app
                  on Kubernetes via Freelens, enabling scalable business-wide access.
                </li>
                <li>
                  Reduced compliance review time by 99% with 90% accuracy by integrating an Azure AI translation layer into
                  a multi-stage pipeline for LLM-based detection of non-standard clauses in contracts.
                </li>
                <li>
                  Developed an end-to-end evaluation pipeline for LLM translation using parallel corpora, utilizing
                  SacreBLEU to benchmark quality and quantify long-context degradation.
                </li>
                <li>
                  Implemented scalable deployment workflows by containerizing applications with Docker and hosting services
                  on Kubernetes, while maintaining version control and code integrity via GitLab.
                </li>
              </ul>
            </article>
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">Manufacturing Process Automation Engineer</h3>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">January 2023 - July 2024</p>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-sm italic text-slate-300">Tesla</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Austin, TX</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-200 leading-relaxed">
                <li>
                  Engineered control logic and system integration for an automated FANUC plasma-cutting robot cell for
                  Cybertruck castings production, leading the full lifecycle from simulation-based design to production
                  launch on a compressed timeline.
                </li>
                <li>
                  Reduced total part scrap by 10% by implementing an adaptive control algorithm that used sensor feedback
                  to compensate for manufacturing variance in real time.
                </li>
                <li>
                  Executed statistical data validation workflows to ensure process accuracy within +/- 2.5mm tolerance,
                  maintaining quality control for downstream processes.
                </li>
                <li>
                  Leveraged the Roboguide 3D simulation environment to model complex kinematic paths and optimize
                  throughput, achieving production targets of 3.4k casting sets/week while minimizing cycle time.
                </li>
              </ul>
            </article>
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">Robotics Engineer</h3>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">October 2021 - January 2023</p>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-sm italic text-slate-300">Vitesco Technologies</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Seguin, TX</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-200 leading-relaxed">
                <li>
                  Improved line cycle time by up to 15s by utilizing AOI vision camera on Techman cobots to locate PCB
                  fiducials prior to destacking PCBs and placing into PCB routers.
                </li>
                <li>
                  Expanded production volume by implementing and deploying additional UR/Techman cobots for new line
                  installs.
                </li>
                <li>
                  Increased accuracy and precision of dispense applications by testing and implementing CAD-to-path URCap
                  functionality on UR cobots, effectively reducing engineering overhead costs.
                </li>
                <li>
                  Troubleshot and recovered from PLC/robot faults, diagnosing root causes to prevent future occurrences.
                </li>
                <li>
                  Applied continuous improvements by troubleshooting, debugging issues, and retrofitting old equipment on
                  production lines.
                </li>
              </ul>
            </article>
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold text-white">Mechanical Engineer</h3>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">August 2018 - September 2021</p>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-sm italic text-slate-300">Bently Nevada, a Baker Hughes Business</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Minden, NV</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-200 leading-relaxed">
                <li>
                  Led the mechanical redesign effort of an existing product by coordinating with multidisciplinary team
                  members on PCB board and housing design for manufacturability.
                </li>
                <li>
                  Designed and tested custom sheet metal brackets to mount RFID panels for tracking facility personnel.
                </li>
                <li>
                  Designed a custom shaker table mounting fixture for PCBA vibration testing.
                </li>
                <li>
                  Conducted environmental testing on proximity probes and investigated potential defects introduced in
                  manufacturing.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-300 font-['Cormorant_Garamond']">Education</h2>
            <div className="mt-5 space-y-7">
              <article>
                <h3 className="text-2xl font-semibold text-white">University of Texas at Austin</h3>
                <p className="mt-1 text-sm italic leading-relaxed text-slate-200">Master of Science in Artificial Intelligence</p>
                <p className="mt-1 text-sm text-slate-200">GPA: 3.73/4.0</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Austin, TX • January 2024 - December 2025</p>
              </article>
              <article>
                <h3 className="text-2xl font-semibold text-white">Texas A&amp;M University</h3>
                <p className="mt-1 text-sm italic leading-relaxed text-slate-200">Bachelor of Science in Mechanical Engineering</p>
                <p className="mt-1 text-sm text-slate-200">GPA: 3.51/4.0 - Cum Laude</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">College Station, TX • August 2014 - May 2018</p>
              </article>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-300 font-['Cormorant_Garamond']">Skills</h2>
            <div className="mt-4 space-y-4">
              {skillSections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-sm font-semibold text-slate-200">{section.heading}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
