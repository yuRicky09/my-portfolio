import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeModeStore = defineStore("themeMode", () => {
  const isDarkMode = ref(checkDarkMode());

  function checkDarkMode() {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  function setThemeMode() {
    if (isDarkMode.value) document.documentElement.classList.add("dark");
  }

  return {
    setThemeMode,
    isDarkMode,
  };
});
