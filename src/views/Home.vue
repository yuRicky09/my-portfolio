<template>
  <div>
    <HeroImage />
    <AboutBrief />
    <section class="section">
      <h2 class="mb-4">Recent Project</h2>
      <ProjectList />
    </section>
  </div>
</template>

<script setup>
import HeroImage from "@/components/home/HeroImage.vue";
import AboutBrief from "@/components/home/AboutBrief.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
</script>
