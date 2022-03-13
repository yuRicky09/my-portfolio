<template>
  <div>
    <HeroImage />
    <AboutBrief />
    <section class="section flex flex-col">
      <BaseTitle title="Recent Projects" class-name="projects" />
      <ProjectList>
        <ProjectListItem
          v-for="project in recentProjects"
          :key="project.name"
          :project="project"
        ></ProjectListItem>
      </ProjectList>
      <SeeMoreLink class="lg:self-end">
        <router-link :to="{ name: 'Projects' }" class="btn"
          >See More</router-link
        >
      </SeeMoreLink>
    </section>
    <div
      id="contact"
      class="grid grid-cols-1 gap-10 lg:px-28 xl:grid-cols-[1fr_40%] xl:px-0"
    >
      <ContactForm />
      <GoogleMap class="xl:!h-full" />
    </div>
  </div>
</template>

<script setup>
import HeroImage from "@/components/home/HeroImage.vue";
import AboutBrief from "@/components/home/AboutBrief.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import ProjectListItem from "@/components/projects/ProjectListItem.vue";
import { projects } from "@/data";
import { computed } from "vue";
import GoogleMap from "@/components/contact/GoogleMap.vue";

const recentProjects = computed(() => projects.slice(0, 2));
</script>
