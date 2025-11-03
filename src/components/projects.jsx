import Reveal from "./Reveal";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern and responsive personal portfolio website built with React.js to showcase my skills and projects. It features clean UI, smooth animations, and fast performance. Includes contact integration and links to GitHub & LinkedIn.",
  },
  {
    title: "E- commerce Website",
    desc: "A fully functional e-commerce web application built using the MERN stack with secure user authentication, product management, shopping cart system, online orders, and an admin dashboard to manage the entire store.",
  },
  {
    title: "Food-delievery App",
    desc: " A full-stack food delivery application where users can browse restaurants, add items to cart, and place orders in real time. Features secure authentication, order tracking, and smooth UI interactions. Integrated admin panel for restaurant and menu management.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b] 
      text-center px-6 text-gray-900 dark:text-white transition-all duration-500"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-10 text-cyan-500">Projects</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform border border-cyan-400/30">
              <h3 className="text-2xl font-semibold mb-3 text-cyan-500">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
