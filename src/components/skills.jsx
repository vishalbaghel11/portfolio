import Reveal from "./Reveal";

const skills = ["MongoDB", "Express","React","Node.js"  ];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-[#0f172a] text-center text-gray-800 dark:text-white px-6 transition-all duration-500"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-8 text-cyan-500">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 0.1}>
              <span className="px-5 py-2 bg-white dark:bg-gray-800 rounded-full border border-cyan-400 shadow-md hover:scale-105 transition-transform cursor-default">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
