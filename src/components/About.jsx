import Reveal from "./Reveal";

const About = () => {
  return (
    <section
  id="about"
  className="pt-32 pb-20 bg-gray-100 dark:bg-gradient-to-t dark:from-[#1e293b] dark:to-[#0f172a] 
  text-gray-900 dark:text-white text-center px-6 transition-all duration-500 w-full"
>

      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-cyan-500">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I’m a self-taught Software developer who enjoys creating functional and visually appealing websites.
          My focus is on writing clean, efficient code and delivering smooth user experiences.
        </p>
      </Reveal>
    </section>
  );
};

export default About;
