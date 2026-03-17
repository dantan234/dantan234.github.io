export default function About() {
  const paragraphs = [
    "Hi! I'm Daniel -",
    "I'm an AI Engineer with a Master's of Science in Artificial Intelligence from The University of Texas at Austin. I also have a Bachelor of Science in Mechanical Engineering from Texas A&M University.",
    "My career has been a unique journey so far. I started my career as a mechanical engineer out of college in 2018, then transitioned into a robotics engineering role in 2021. From there, I was recruited by Tesla in 2023 to work as a Manufacturing Process Automation Engineer for their Cybertruck program.",
    "At Tesla, I developed automated plasma-cutting processes using industrial robotic cells for the Cybertruck Gigacastings and owned end-to-end commissioning of equipment from design to production launch. My process was absolutely integral to the launch of the Cybertruck, with the very first production vehicles processed by the equipment that I commissioned!",
    "Since then, I have transitioned into the field of software and AI, most recently working as a Graduate Machine Learning Engineer Intern with Dell Technologies in Round Rock, TX. At Dell, I helped integrate AI into business workflows in Finance by creating applications in Python to automate business forecasting scripts. I also worked on integrating Azure AI translation into document processing pipelines, utilizing LLMs to automate detection of non-standard clauses in business contracts.",
    "A common question I get is why I decided to pursue a Master's in AI, especially coming from a mechanical engineering background. To some, the transition represents a shift from physical engineering into software, two domains that appear separate but in reality share a common foundation.",
    "To me, AI is a natural augmentation beyond traditional mechanical engineering, specifically in the form of embodied intelligence. Since I've always been interested in robotics and how software interacts with the physical world, I knew I wanted to pursue this intersection of engineering and AI - long before ChatGPT was publicly released and AI became a mainstream buzzword.",
    "I've always viewed robotics as the intersection of mechanical engineering, electrical engineering, and computer science. During my undergraduate years, I had the opportunity to focus on the mechanical and electrical, excelling in electrical circuits, mechatronics, and foundational robotics. While this gave me a solid foundation for my career, I was still missing the software side of the equation.",
    "True autonomous systems require more than just hardware; they require software that can perceive and interact with its environment. When The University of Texas at Austin announced their Master of Science in AI program, I knew it was the opportunity I had been searching for. I was fortunate to be accepted into the inaugural class in January 2024. By bridging my background in engineering with AI, I've transitioned from designing and building physical systems to developing the intelligence that drives them.",
    "Now that I have completed my Master's, I'm focused on embodying AI into physical systems through Physical AI. My current interests are in computer vision and perception for autonomous technologies. I'm currently working on a visual odometry project that can enhance driving safety via an ADAS smartphone app.",
    "Beyond my career, I enjoy being active and being outdoors. I love everything from running, bouldering, and swimming to competitive sports like pickleball or tennis. I am also a huge coffeehead and enjoy making my own espresso or matcha as a home barista, with an emphasis on latte art. You can usually find me trying out new coffeeshops and restaurants, on the pickleball court, or out for a run.",
  ];
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h1>
      <div className="space-y-8">
        <div className="float-right w-[180px] sm:w-[220px] md:w-[320px] ml-6 md:ml-8 mb-6 overflow-hidden">
          <img
            src="/profile.jpeg"
            alt="Daniel J Tan"
            className="h-full w-full object-cover object-[center_30%]"
          />
        </div>
        {paragraphs.map((text, index) => (
          <div key={index}>
            {index === 2 && (
              <h2 className="mb-8 text-2xl md:text-3xl font-bold text-white">Background</h2>
            )}
            {index === 5 && (
              <h2 className="mb-8 text-2xl md:text-3xl font-bold text-white">From Mechanical Engineering to AI</h2>
            )}
            {index === 7 && (
              <h2 className="mb-8 text-2xl md:text-3xl font-bold text-white">Bridging the Gap</h2>
            )}
            {index === 9 && (
              <h2 className="mb-8 text-2xl md:text-3xl font-bold text-white">My Current Focus</h2>
            )}
            {index === 10 && (
              <h2 className="mb-8 text-2xl md:text-3xl font-bold text-white">Beyond my Career</h2>
            )}
            {index === 3 ? (
              <div className="clear-right mt-10 md:mt-14 flex flex-row gap-6 md:gap-8 items-start">
                <div className="w-[180px] sm:w-[220px] md:w-[320px] shrink-0 overflow-hidden">
                  <img
                    src="/cybertruck.jpg"
                    alt="Daniel J Tan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-8">
                  <p className="text-base md:text-lg leading-8 text-slate-300">{text}</p>
                  <p className="text-base md:text-lg leading-8 text-slate-300">{paragraphs[4]}</p>
                </div>
              </div>
            ) : index === 4 ? null : (
              <p
                className={
                  index === 0
                    ? "text-xl md:text-2xl leading-relaxed text-slate-200"
                    : "text-base md:text-lg leading-8 text-slate-300"
                }
              >
                {index === 0 ? <strong>{text}</strong> : text}
              </p>
            )}
          </div>
        ))}
        <div className="clear-both" />
      </div>
    </div>
  );
}
