import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeToggle";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Yash-Shidhi",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yash-shidhi/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:yashshidhi36@example.com",
  },
];

export const Contact = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className={`py-20 px-6 ${
        isDark
          ? "bg-gray-950 text-white"
          : "bg-gradient-to-br from-white via-indigo-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          Let's Connect
        </motion.h2>

        <p className="mb-10 text-base sm:text-lg text-gray-500 dark:text-gray-400">
          Interested in working together or just want to say hi?
        </p>

        <div className="flex justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <social.icon className="w-6 h-6" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
