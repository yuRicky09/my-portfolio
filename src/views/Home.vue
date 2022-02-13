<template>
  <div>
    <HeroImage />
    <AboutBrief />
    <section class="section flex flex-col">
      <SectionTitle title="Recent Projects" class-name="projects" />
      <ProjectList />
      <SeeMoreLink class="lg:self-end">
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
import SectionTitle from "@/components/UI/SectionTitle.vue";
</script>
