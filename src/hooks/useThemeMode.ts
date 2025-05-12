import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    // Update the class on the document element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return { darkMode, toggleTheme };
};

export default useThemeMode;
