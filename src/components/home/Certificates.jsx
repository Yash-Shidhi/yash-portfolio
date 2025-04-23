import { motion } from "framer-motion";
import { certificates } from "../../constants/certificateData.js";
import { Award, Calendar } from "lucide-react";
import { useTheme } from "../ThemeToggle";

export const Certificate = () => {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? "bg-gray-950" : "bg-white"} py-20`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          My Certifications
          <div
            className={`w-20 h-1 mx-auto mt-3 rounded-full ${
              isDark ? "bg-indigo-400" : "bg-indigo-600"
            }`}
          />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-lg border ${
                isDark
                  ? "bg-gray-900 border-indigo-500/30 text-white"
                  : "bg-white border-indigo-200 text-gray-800"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <Award className="w-6 h-6 text-indigo-500" />
              </div>

              <p className="text-sm">{cert.issuer}</p>

              <div className="flex items-center text-sm text-indigo-500 mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                {cert.date}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-indigo-400 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
