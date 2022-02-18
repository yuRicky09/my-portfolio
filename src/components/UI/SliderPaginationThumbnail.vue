<template>
  <div
    class="xs:h-14 xs:w-14 h-11 w-11 cursor-pointer border-2 hover:opacity-80"
    :class="active"
    @click="setSlideTo(thumbnailIndex)"
  >
    <img
      :src="imgUrl"
      :alt="image"
      class="h-full w-full object-cover object-center"
    />
  </div>
</template>

<script setup>
import { useGetImageUrl } from "@/composables/useGetImageUrl";
import { useSliderStore } from "@/stores/sliderStore";
import { computed } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  thumbnailIndex: {
    type: Number,
    required: true,
  },
});

const imgUrl = useGetImageUrl(props.image);
const sliderStore = useSliderStore();
const { setSlideTo } = sliderStore;

const active = computed(() =>
  sliderStore.currentSlideIndex === props.thumbnailIndex
    ? "border-violet-500"
    : "border-transparent"
);
</script>
