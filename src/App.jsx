import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
   <div className="overflow-x-hidden">
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
</div>

  );
}

export default App;