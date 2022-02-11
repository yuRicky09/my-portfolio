<template>
  <TheNavigation :is-dark-mode="isDarkMode" />
  <div class="pt-[66px]">
    <main class="px-4 py-20">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
const isDarkMode = checkThemeMode();

function checkThemeMode() {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

function setThemeMode() {
  isDarkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
}

setThemeMode();
</script>
