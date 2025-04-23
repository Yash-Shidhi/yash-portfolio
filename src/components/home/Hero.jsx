import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../ThemeToggle";
import ResumeDownloadButton from "../layout/ResumeDownloadButton"

export const Hero = () => {
  const { isDark } = useTheme();
  const themeTextColor = isDark ? "text-white" : "text-gray-900";
  const gradientClass = isDark
    ? "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
    : "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600";

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
          : "bg-gradient-to-br from-white via-slate-100 to-white"
      } overflow-hidden pt-20 pb-16 px-4`}
    >
      <motion.div
        className={`text-center max-w-4xl mx-auto ${themeTextColor}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          👋 Hello, I'm{" "}
          <span className={`${gradientClass} bg-clip-text text-transparent`}>
            Yash Shidhi
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Tech Enthusiast",
            2000,
            "UI/UX Explorer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl font-medium"
        />

        {/* CTA Button */}
        <div className="flex items-center justify-center m-6"><ResumeDownloadButton/></div>
        

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-xl">
          <a
            href="https://linkedin.com"
            className="text-gray-500 hover:text-teal-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="text-gray-500 hover:text-teal-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-gray-500 hover:text-teal-400 transition-colors duration-300"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
