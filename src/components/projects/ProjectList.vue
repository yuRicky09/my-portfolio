<template>
  <div
    class="grid grid-cols-1 justify-items-center gap-14 lg:grid-cols-2 lg:gap-7"
  >
    <ProjectListItem />
    <ProjectListItem />
  </div>
</template>

<script setup>
import ProjectListItem from "@/components/projects/ProjectListItem.vue";
</script>
