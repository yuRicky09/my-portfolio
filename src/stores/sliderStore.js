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

  const slideAnimation = computed(() => {
    let enterActiveClass;
    let leaveActiveClass;

    if (animationMode.value === "right-to-left") {
      enterActiveClass = "animate-right-to-left-in";
      leaveActiveClass = "animate-right-to-left-out";
    } else if (animationMode.value === "left-to-right") {
      enterActiveClass = "animate-left-to-right-in";
      leaveActiveClass = "animate-left-to-right-out";
    }

    return {
      enterActiveClass,
      leaveActiveClass,
    };
  });

  function nextSlide() {
    animationMode.value = "right-to-left";

    currentSlideIndex.value === slideMaxIndex.value
      ? (currentSlideIndex.value = 0)
      : currentSlideIndex.value++;
  }

  function prevSlide() {
    animationMode.value = "left-to-right";

    currentSlideIndex.value === 0
      ? (currentSlideIndex.value = slideMaxIndex.value)
      : currentSlideIndex.value--;
  }

  function setSlideTo(thumbnailIndex) {
    resetAutoPlay();

    if (thumbnailIndex === currentSlideIndex.value) return;

    thumbnailIndex > currentSlideIndex.value
      ? (animationMode.value = "right-to-left")
      : (animationMode.value = "left-to-right");

    currentSlideIndex.value = thumbnailIndex;
  }

  function autoPlay() {
    if (lgihtBoxStore.isZoomIn) return;

    timer = setInterval(nextSlide, AUTOPLAYTIME);
  }

  function stopAutoPlay() {
    clearInterval(timer);
  }

  function resetAutoPlay() {
    if (timer) {
      stopAutoPlay(timer);
      autoPlay();
    }
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
