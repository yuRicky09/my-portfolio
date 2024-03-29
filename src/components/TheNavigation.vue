<template>
  <header
    class="fixed z-20 flex w-full items-center justify-between bg-orange-100/50 py-3 px-4 dark:bg-zinc-800/50 xs:px-6 md:px-8 lg:px-12"
  >
    <router-link
      class="inline-block whitespace-nowrap font-['Comforter'] text-2xl font-bold"
      :to="{ name: 'Home' }"
    >
      Yu Ricky
    </router-link>

    <nav class="hidden md:block">
      <ul class="flex items-center gap-10 text-xl">
        <li>
          <router-link :to="{ name: 'About' }" class="router-link"
            >About</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Projects' }" class="router-link"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" class="router-link"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="flex gap-4">
      <Transition
        enter-active-class="animate-fade-down"
        leave-active-class="animate-fade-down-reverse"
        mode="out-in"
      >
        <button
          v-if="isDarkMode"
          class="rounded-md bg-orange-400 p-2"
          @click="setThemeMode('light', 'dark')"
        >
          <SunIcon class="fill-neutral-800" />
        </button>
        <button
          v-else
          class="rounded-md bg-indigo-800 p-2"
          @click="setThemeMode('dark', 'light')"
        >
          <MoonIcon class="fill-white/90" />
        </button>
      </Transition>

      <Transition
        enter-active-class="animate-fade-down"
        leave-active-class="animate-fade-down-reverse"
        mode="out-in"
      >
        <button
          v-if="isMenuOpen"
          class="rounded-md border-[1px] border-current p-2 md:hidden"
          @click="closeMenu"
        >
          <CloseIcon class="h-6 w-6" />
        </button>
        <button
          v-else
          class="rounded-md border-[1px] border-current p-2 md:hidden"
          @click="openMenu"
        >
          <MenuIcon />
        </button>
      </Transition>
    </div>

    <Transition
      enter-active-class="animate-pop-up"
      leave-active-class="animate-pop-up-reverse"
    >
      <nav
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full origin-top-right bg-slate-100 py-8 dark:bg-zinc-900 md:hidden"
      >
        <ul class="flex flex-col gap-5 text-center text-xl">
          <li>
            <router-link
              :to="{ name: 'About' }"
              class="mobile-link"
              @click="closeMenu"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Projects' }"
              class="mobile-link"
              @click="closeMenu"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Contact' }"
              class="mobile-link"
              @click="closeMenu"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
  <BaseOverlay v-if="isMenuOpen" @click="closeMenu" />
</template>

<script setup>
import MoonIcon from "@/assets/images/svg/moon.svg";
import SunIcon from "@/assets/images/svg/sun.svg";
import CloseIcon from "@/assets/images/svg/x.svg";
import MenuIcon from "@/assets/images/svg/menu.svg";
import { ref, defineAsyncComponent } from "vue";
import { useThemeModeStore } from "@/stores/themeModeStore";
import { storeToRefs } from "pinia";

const BaseOverlay = defineAsyncComponent(() =>
  import("@/components/UI/BaseOverlay.vue")
);

const isMenuOpen = ref(false);
const themeModeStore = useThemeModeStore();
const { isDarkMode } = storeToRefs(themeModeStore);

function setThemeMode(selectedMode, currentMode) {
  localStorage.setItem("theme", selectedMode);

  document.documentElement.classList.remove(currentMode);
  document.documentElement.classList.add(selectedMode);

  isDarkMode.value = selectedMode === "dark";
}

function closeMenu() {
  isMenuOpen.value = false;
}

function openMenu() {
  isMenuOpen.value = true;
}
</script>
