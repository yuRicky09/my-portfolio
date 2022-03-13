<template>
  <div ref="container" class="flex max-w-3xl justify-center gap-5">
    <div class="flex flex-col items-center">
      <div
        ref="dot"
        class="relative h-3 w-3 rounded-full bg-violet-500 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-[2] before:rounded-full before:border-2 before:border-violet-500 before:bg-transparent"
      ></div>
      <div
        ref="bar"
        class="relative -top-2 -z-10 w-1 flex-1 bg-violet-500"
      ></div>
    </div>

    <div ref="experienceEl" class="flex flex-col gap-2 py-8">
      <h3 class="mb-3 font-bold">
        {{ experience.time }} {{ experience.place }}
      </h3>
      <p class="font-bold">公司: {{ experience.company }}</p>
      <p class="font-bold">職位: {{ experience.position }}</p>
      <h4 class="font-bold">工作內容</h4>
      <ul class="list-inside list-disc">
        <li v-for="desc in experience.jobDescription" :key="desc">
          {{ desc }}
        </li>
      </ul>
      <h4 class="font-bold">特殊成就</h4>
      <ul class="list-inside list-disc">
        <li v-for="achievement in experience.achievements" :key="achievement">
          {{ achievement }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps({
  experience: {
    type: Object,
    required: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const bar = ref(null);
const dot = ref(null);
const experienceEl = ref(null);
let scrollTrigger;

onMounted(() => {
  const timeline = gsap.timeline({
    ease: "power4.out",
  });

  timeline
    .from(dot.value, {
      duration: 0.8,
      scale: 0,
      autoAlpha: 0,
    })
    .from(
      bar.value,
      {
        duration: 1,
        transformOrigin: "top",
        scaleY: 0,
        autoAlpha: 0,
      },
      "-=0.2"
    )
    .from(
      experienceEl.value,
      {
        duration: 1,
        translateY: -10,
        autoAlpha: 0,
      },
      "-=0.5"
    );

  scrollTrigger = ScrollTrigger.create({
    trigger: container.value,
    start: "center 70%",
    animation: timeline,
  });
});

onBeforeUnmount(() => scrollTrigger.kill());
</script>
