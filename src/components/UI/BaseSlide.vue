<template>
  <Transition
    :enter-active-class="slideAnimation.enterActiveClass"
    :leave-active-class="slideAnimation.leaveActiveClass"
  >
    <div class="absolute top-0 left-0 h-full w-full" @click="zoomInImg(imgUrl)">
      <img
        :src="imgUrl"
        :alt="image"
        class="h-full w-full object-cover object-center"
      />
    </div>
  </Transition>
</template>

<script setup>
import { useGetImageUrl } from "@/composables/useGetImageUrl";
import { useSliderStore } from "@/stores/sliderStore";
import { useLightBoxStore } from "@/stores/lightBoxStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});

const imgUrl = useGetImageUrl(props.image);

const slideStore = useSliderStore();
const { slideAnimation } = storeToRefs(slideStore);

const lightBoxStore = useLightBoxStore();
const { zoomInImg } = lightBoxStore;
</script>
