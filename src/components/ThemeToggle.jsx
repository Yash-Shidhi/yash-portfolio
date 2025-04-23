import { createContext, useState, useContext, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
      <ThemeToggle />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 left-6 p-3 rounded-full shadow-lg border transition-all bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon className="w-6 h-6 text-white" /> : <Sun className="w-6 h-6 text-yellow-500" />}
    </button>
  );
};

export default ThemeProvider;
