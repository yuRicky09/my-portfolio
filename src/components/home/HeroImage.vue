<template>
  <section class="section grid grid-cols-1 gap-8 md:min-h-screen">
    <div class="hero-image load-hidden -mx-4">
      <img src="../../assets/images/hero-image.JPG" alt="Yu Ricky Image" />
    </div>
    <div>
      <div>
        <p>Hi there,👋 I'm</p>
        <h1>Yu Ricky</h1>
        <p>Frontend Developer</p>
        <SeeMoreLink>
          <router-link to="#" class="btn">View Projects</router-link>
        </SeeMoreLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

useScrollReveal(".hero-image", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
  easing: "ease-out",
});
</script>
