import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink, Sparkle } from "lucide-react";
import { projects } from "../../constants/projectData";
import { useTheme } from "../ThemeToggle";
import { twMerge } from "tailwind-merge";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectCard = ({ project, isDark, index }) => {
  const tagColors = useMemo(() => {
    const colors = {
      React: "bg-blue-100 text-blue-300",
      Node: "bg-green-100 text-green-800",
      MongoDB: "bg-emerald-100 text-emerald-800",
      Express: "bg-yellow-100 text-yellow-800",
      TailwindCSS: "bg-cyan-100 text-cyan-800",
      JWT: "bg-purple-100 text-purple-800",
    };

    return project.tech.map((tech) => {
      const match = Object.keys(colors).find((key) => tech.includes(key));
      return match ? colors[match] : "bg-blue-100 text-blue-300";
    });
  }, [project.tech]);

  const highlightText = useCallback(
    (text) =>
      text.split(" ").map((word, i) => {
        const key = `${text}-${i}-${word}`;
        if (/(developed|built|integrated|designed)/i.test(word)) {
          return (
            <span key={key} className="font-semibold text-indigo-500">
              {word}{" "}
            </span>
          );
        } else if (
          /(React|MongoDB|API|JWT|backend|frontend|AWS)/i.test(word)
        ) {
          return (
            <span key={key} className="font-medium text-blue-500">
              {word}{" "}
            </span>
          );
        }
        return <span key={key}>{word} </span>;
      }),
    []
  );

  return (
    <motion.div
      custom={index}
      variants={fadeIn}
      className={`rounded-2xl shadow-xl border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 border-gray-700"
          : "bg-white/90 border-gray-200"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Sparkle
              className={`w-6 h-6 ${
                isDark ? "text-indigo-300" : "text-indigo-600"
              }`}
            />
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-indigo-500"
              aria-label={`GitHub link for ${project.title}`}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-indigo-500"
                aria-label={`Demo link for ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          {project.description.map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5">▹</span>
              <span>{highlightText(line)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={tech}
              className={twMerge(
                "px-3 py-1 text-xs rounded-full font-medium border",
                tagColors[i],
                isDark
                  ? "bg-opacity-10 border-white/20"
                  : "border-gray-300 bg-opacity-70"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-20 px-4 ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          Featured Projects
          <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
        </motion.h2>

        <motion.div
          className="flex gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isDark={isDark}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
