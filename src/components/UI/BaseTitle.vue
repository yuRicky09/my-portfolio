<template>
  <h2 ref="trigger" class="my-6 font-semibold lg:my-10 2xl:my-14">
    <span
      v-for="(character, index) in characters"
      :key="index"
      class="invisible inline-block"
      :class="className"
    >
      {{ character === " " ? "&nbsp;" : character }}
    </span>
  </h2>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onBeforeUnmount, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
});

const characters = props.title.split("");

let scrollTrigger;
const trigger = ref(null);

onMounted(() => {
  const titleFadeInAnimation = gsap.from(`.${props.className}`, {
    duration: 0.4,
    x: -20,
    stagger: 0.1,
    autoAlpha: 0,
    ease: "back.out(1.4)",
  });

  scrollTrigger = ScrollTrigger.create({
    start: "top 80%",
    trigger: trigger.value,
    toggleActions: "restart none none reverse",
    animation: titleFadeInAnimation,
  });
});

onBeforeUnmount(() => scrollTrigger.kill());
</script>
