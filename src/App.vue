<template>
  <TheNavigation :is-dark-mode="isDarkMode" />
  <div class="pt-[66px]"></div>
  <div class="xs:px-6 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

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
