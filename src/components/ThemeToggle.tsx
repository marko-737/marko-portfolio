import React from "react";
import { Moon, Sun } from "lucide-react";
import useThemeMode from "../hooks/useThemeMode";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useThemeMode();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-blue-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
