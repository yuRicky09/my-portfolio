<template>
  <div class="pt-5">
    <BaseTitle title="Projects" class-name="projects" />
    <h3 class="my-5">Tags</h3>
    <div class="grid-cols-tags tags my-10 grid gap-3">
      <BaseTag
        v-for="(icon, tag) in tags"
        :key="tag"
        :name="tag"
        class="tag border-4 border-transparent transition-colors duration-200"
        @click="searchPorjectBy(tag, $event)"
      >
        <component :is="icon"></component>
      </BaseTag>
    </div>
    <ProjectList>
      <ProjectListItem
        v-for="project in matchedProjects"
        :key="project.name"
        :project="project"
        class="project"
      />
    </ProjectList>
  </div>
</template>

<script setup>
import BaseTitle from "@/components/UI/BaseTitle.vue";
import Vue from "@/assets/images/svg/vuejs.svg";
import JavaScript from "@/assets/images/svg/javascript.svg";
import Sass from "@/assets/images/svg/sass.svg";
import Tailwind from "@/assets/images/svg/tailwind-css.svg";
import BaseTag from "@/components/UI/BaseTag.vue";
import { projects } from "@/data";
import ProjectList from "@/components/projects/ProjectList.vue";
import ProjectListItem from "@/components/projects/ProjectListItem.vue";
import { ref, computed } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const tags = {
  Vue,
  JavaScript,
  Sass,
  Tailwind,
};
const selectedTag = ref(null);
const activeClass = "border-violet-500";

function searchPorjectBy(tag, event) {
  const tagEl = event.target.closest(".tag");
  const tagsContainer = tagEl.closest(".tags");

  // 再次點選已被選擇的tag時，取消選擇
  if (selectedTag.value === tag) {
    tagEl.classList.remove(activeClass);
    selectedTag.value = null;
    return;
  }

  // 先移除所有tag上的active class後，再對此次被選擇的tag添加active class
  Array.from(tagsContainer.children).forEach((tag) =>
    tag.classList.remove(activeClass)
  );
  tagEl.classList.add(activeClass);
  selectedTag.value = tag;
}

const matchedProjects = computed(() => {
  if (selectedTag.value) {
    return projects.filter((project) =>
      project.tags.includes(selectedTag.value)
    );
  } else {
    return projects;
  }
});

useScrollReveal(".project", {
  origin: "bottom",
  duration: 700,
  easing: "ease-out",
  distance: "50px",
  interval: 200,
});
</script>
