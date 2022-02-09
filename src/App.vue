<template>
  <TheNavigation />
  <div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
</script>
