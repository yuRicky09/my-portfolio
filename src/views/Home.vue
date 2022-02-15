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
import BaseTitle from "@/components/UI/BaseTitle.vue";
import ProjectListItem from "@/components/projects/ProjectListItem.vue";
import { projects } from "@/data";
import { computed } from "vue";

const recentProjects = computed(() => projects.slice(-2));
</script>
