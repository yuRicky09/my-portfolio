<template>
  <div
    class="group relative mx-auto h-80 max-w-4xl select-none overflow-hidden sm:h-96 lg:h-[30rem] xl:cursor-pointer"
    @mouseenter="stopAutoPlay"
    @mouseleave="autoPlay"
  >
    <slot></slot>
    <PrevSlideBtn
      class="absolute top-1/2 left-1 h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 fill-white/90 lg:h-12 lg:w-12 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100"
      @click="prevSlide"
    />
    <NextSlideBtn
      class="absolute top-1/2 right-1 h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-black/70 fill-white/90 lg:h-12 lg:w-12 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100"
      @click="nextSlide"
    />
  </div>
</template>

<script setup>
import PrevSlideBtn from "@/assets/images/svg/chevron-left.svg";
import NextSlideBtn from "@/assets/images/svg/chevron-right.svg";
import { onMounted, onBeforeUnmount } from "vue";
import { useSliderStore } from "@/stores/sliderStore";

const sliderStore = useSliderStore();
const { nextSlide, prevSlide, autoPlay, stopAutoPlay } = sliderStore;

onMounted(autoPlay);
onBeforeUnmount(stopAutoPlay);
</script>
