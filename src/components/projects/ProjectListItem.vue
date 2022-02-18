<template>
  <router-link
    :to="{ name: 'ProjectDetail', params: { projectName: project.name } }"
    class="group relative flex flex-col items-center overflow-hidden bg-white/60 shadow-xl dark:bg-zinc-900"
  >
    <div class="overflow-hidden">
      <img
        :src="cover"
        alt="Yustory Project Cover"
        class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="py-8 px-4 text-center">
      <h3 class="mb-5 uppercase">{{ project.name }}</h3>
      <p>
        {{ project.brief }}
      </p>
    </div>

    <div
      class="absolute top-0 left-0 grid h-full w-full translate-y-full place-items-center bg-black/50 backdrop-blur-[2px] transition-transform duration-1000 group-hover:translate-y-0 group-hover:duration-200"
    >
      <div
        class="flex items-center justify-center bg-orange-50 p-6 text-xl uppercase dark:bg-zinc-800"
      >
        <span>View Project</span>
        <RightArrowIcon class="h-6 w-6" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import RightArrowIcon from "@/assets/images/svg/chevron-right.svg";
import { useGetImageUrl } from "@/composables/useGetImageUrl";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const cover = useGetImageUrl(props.project.cover);
</script>
