<template>
  <header
    class="bg-light-bg/75 dark:bg-dark-bg/75 relative z-20 flex items-center justify-between py-3 px-2 backdrop-blur-sm"
  >
    <router-link
      class="inline-block font-['Comforter'] text-2xl font-bold"
      :to="{ name: 'Home' }"
    >
      Yu Ricky
    </router-link>

    <div class="flex gap-4">
      <Transition
        enter-active-class="animate-fade-down"
        leave-active-class="animate-fade-down-reverse"
        mode="out-in"
      >
        <button v-if="isDarkMode" class="rounded-md bg-orange-400 p-2">
          <SunIcon
            class="fill-[#292929]"
            @click="setThemeMode('light', 'dark')"
          />
        </button>
        <button v-else class="rounded-md bg-indigo-800 p-2">
          <MoonIcon
            class="fill-white/90"
            @click="setThemeMode('dark', 'light')"
          />
        </button>
      </Transition>

      <Transition
        enter-active-class="animate-fade-down"
        leave-active-class="animate-fade-down-reverse"
        mode="out-in"
      >
        <button
          v-if="isMenuOpen"
          class="rounded-md border-[1px] border-current p-2"
          @click="closeMenu"
        >
          <CloseIcon />
        </button>
        <button
          v-else
          class="rounded-md border-[1px] border-current p-2"
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
        class="absolute top-full left-0 w-full origin-top-right bg-slate-100 py-8 dark:bg-zinc-900"
      >
        <ul class="flex flex-col gap-5 text-center text-xl">
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link to="#">About</router-link>
          </li>
          <li>
            <router-link to="#">Projects</router-link>
          </li>
          <li>
            <router-link to="#">Contact</router-link>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
  <BaseOverlay v-if="isMenuOpen" @click="closeMenu" />
</template>

<script setup>
import MoonIcon from "@/assets/images/svg/bxs-moon.svg";
import SunIcon from "@/assets/images/svg/bxs-sun.svg";
import CloseIcon from "@/assets/images/svg/bx-x.svg";
import MenuIcon from "@/assets/images/svg/bx-menu.svg";
import BaseOverlay from "@/components/UI/BaseOverlay.vue";
import { ref } from "vue";

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true,
  },
});

const isDarkMode = ref(props.isDarkMode);
const isMenuOpen = ref(false);

function setThemeMode(selectedMode, currentMode) {
  localStorage.setItem("theme", selectedMode);

  document.documentElement.classList.remove(currentMode);
  document.documentElement.classList.add(selectedMode);

  isDarkMode.value = selectedMode === "dark" ? true : false;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function openMenu() {
  isMenuOpen.value = true;
}
</script>
