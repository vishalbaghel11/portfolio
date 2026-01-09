import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-cyan-400/20 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-gray-800 dark:text-white">
       <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-xl shadow-md 
          hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
            VB
          </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0f172a] text-white font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;