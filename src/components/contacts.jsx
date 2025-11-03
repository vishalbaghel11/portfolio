import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
const web3FormKey = import.meta.env.VITE_WEB3FORM_KEY;
const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Message Sent ✅");
      e.target.reset();
      setTimeout(() => setStatus(""), 4000);
    } else {
      setStatus("Failed ❌ Try Again");
    }
  };

  return (
      
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-white text-center px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        Contact Me
      </h2>

      <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value="import.meta.env.VITE_WEB3FORM_KEY" />

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded-md bg-gray-900/60 border border-cyan-500/30 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-900/60 border border-cyan-500/30 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-900/60 border border-cyan-500/30 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-md font-semibold text-white"
          >
            Send Message 
          </button>
        </form>

        {/* Status */}
        {status && (
          <p className="text-center mt-4 text-lg font-semibold">{status}</p>
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a
            href="https://github.com/vishalbaghel11"
            target="_blank"
            className="hover:text-cyan-400 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-baghel-6a2627258/"
            target="_blank"
            className="hover:text-cyan-400 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="baghelvishal927@gmail.com"
            className="hover:text-cyan-400 transition transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
            <a
            href="https://x.com/Vishalpallll"
            className="hover:text-cyan-400 transition transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
