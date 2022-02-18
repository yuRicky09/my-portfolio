import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useLightBoxStore } from "@/stores/lightBoxStore";

export const useSliderStore = defineStore("slider", () => {
  const currentSlideIndex = ref(0);
  const slideMaxIndex = ref(null);
  const animationMode = ref("right-to-left");
  let timer;
  const AUTOPLAYTIME = 5000;
  const lgihtBoxStore = useLightBoxStore();

  function autoPlay() {
    if (lgihtBoxStore.isZoomIn) return;

    timer = setInterval(nextSlide, AUTOPLAYTIME);
  }

  function stopAutoPlay() {
    clearInterval(timer);
  }

  const slideAnimation = computed(() => {
    const enterActiveClass =
      animationMode.value === "right-to-left"
        ? "animate-right-to-left-in"
        : "animate-left-to-right-in";
    const leaveActiveClass =
      animationMode.value === "right-to-left"
        ? "animate-right-to-left-out"
        : "animate-left-to-right-out";

    return {
      enterActiveClass,
      leaveActiveClass,
    };
  });

  function nextSlide() {
    currentSlideIndex.value === slideMaxIndex.value
      ? (currentSlideIndex.value = 0)
      : currentSlideIndex.value++;

    animationMode.value = "right-to-left";
  }

  function prevSlide() {
    currentSlideIndex.value === 0
      ? (currentSlideIndex.value = slideMaxIndex.value)
      : currentSlideIndex.value--;

    animationMode.value = "left-to-right";
  }

  function setSlideTo(thumbnailIndex) {
    if (thumbnailIndex === currentSlideIndex.value) return;

    thumbnailIndex > currentSlideIndex.value
      ? (animationMode.value = "right-to-left")
      : (animationMode.value = "left-to-right");

    currentSlideIndex.value = thumbnailIndex;
  }

  return {
    currentSlideIndex,
    animationMode,
    slideMaxIndex,
    slideAnimation,
    nextSlide,
    prevSlide,
    setSlideTo,
    autoPlay,
    stopAutoPlay,
  };
});