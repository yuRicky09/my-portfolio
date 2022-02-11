<template>
  <router-link
    to="#"
    class="group relative flex flex-col items-center overflow-hidden bg-amber-100/90 dark:bg-zinc-900"
  >
    <div class="overflow-hidden">
      <img
        src="../../assets/images/yustory.png"
        alt="Yustory Project Cover"
        class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="py-8 px-4 text-center">
      <h3 class="mb-5 uppercase">Yustory</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        itaque distinct.
      </p>

      <div
        class="absolute top-0 left-0 grid h-full w-full translate-y-full place-items-center bg-black/50 backdrop-blur-[2px] transition-transform group-hover:translate-y-0"
      >
        <div
          class="flex items-center justify-center bg-amber-100 p-6 text-xl uppercase dark:bg-zinc-800"
        >
          <span>View Project</span>
          <RightArrowIcon />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import RightArrowIcon from "@/assets/images/svg/bx-chevron-right.svg";
</script>
