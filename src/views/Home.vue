<template>
  <div>
    <HeroImage />
    <AboutBrief />
    <section class="section flex flex-col">
      <h2 class="section-title">Recent Project</h2>
      <ProjectList />
      <SeeMoreLink>
        <router-link to="#" class="btn">See More</router-link>
      </SeeMoreLink>
    </section>
    <div>
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import HeroImage from "@/components/home/HeroImage.vue";
import AboutBrief from "@/components/home/AboutBrief.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
</script>
