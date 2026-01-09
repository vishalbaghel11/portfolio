import { motion } from "framer-motion";
import Reveal from "./Reveal";


const Hero = () => {
  return (
   <section
  id="home"
  className="pt-24 min-h-screen w-full flex flex-col justify-center items-center text-center
bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] dark:from-[#0f172a]text-white relative overflow-hidden transition-all duration-500"

>
      <Reveal>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-cyan-500">
          Hey, I’m Vishal Baghel 👋
        </h1>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="text-lg md:text-xl max-w-xl text-gray-700 dark:text-gray-300">
          I’m a passionate Software engineer who loves building modern and creative web experiences 
          with smooth animations and responsive UI.
        </p>
      </Reveal>

     <div className="mt-10">
  <Reveal direction="up" delay={0.4}>
    <motion.a
      href="/Vishal_.pdf"
      
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-full 
      text-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition"
    >
      📄 Download Resume
    </motion.a>
  </Reveal>
</div>
    </section>
  );
};
export default Hero;
