<template>
  <TheNavigation />
  <div class="pt-[66px]"></div>
  <div class="xs:px-6 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
  <BackToTopBtn />
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useThemeModeStore } from "@/stores/themeModeStore";
import BackToTopBtn from "@/components/UI/BackToTopBtn.vue";

const themeModeStore = useThemeModeStore();
themeModeStore.setThemeMode();
</script>
