import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeToggle";
import techStacks from "../../constants/techStacks";

const SkillItem = ({ name, index, isDark }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`rounded-xl p-4 text-sm font-medium shadow-md transition-all duration-300 ${
        isDark ? "bg-gray-800 text-indigo-300" : "bg-indigo-100 text-indigo-700"
      }`}
    >
      {name}
    </motion.div>
  );
};

const CategoryTabs = ({ activeCategory, setActiveCategory, isDark }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {techStacks.map((category) => (
        <button
          key={category.title}
          onClick={() => setActiveCategory(category.title)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
            activeCategory === category.title
              ? isDark
                ? "bg-indigo-600 text-white border-indigo-500"
                : "bg-indigo-500 text-white border-indigo-500"
              : isDark
              ? "bg-gray-900 text-indigo-300 border-gray-700 hover:border-indigo-500"
              : "bg-white text-indigo-700 border-indigo-300 hover:border-indigo-500"
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export const TechStackShowcase = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const activeData = techStacks.find(
    (category) => category.title === activeCategory
  );

  return (
    <section
      id="tech-stack"
      className={`py-16 px-4 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Tech Stack Showcase
          <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
        </motion.h2>

        <CategoryTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isDark={isDark}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${
            isDark
              ? "bg-gray-900 border border-indigo-700"
              : "bg-white border border-indigo-200"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`p-3 rounded-lg ${
                isDark ? "bg-indigo-600/20" : "bg-indigo-100"
              }`}
            >
              <activeData.icon
                className={`w-6 h-6 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{activeData.title}</h3>
              <p className="text-sm opacity-70">{activeData.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {activeData.skills.map((skill, index) => (
              <SkillItem
                key={skill}
                name={skill}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
