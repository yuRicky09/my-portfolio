<template>
  <div class="relative mx-auto h-[70vh] w-[80rem]">
    <img :src="zoomInImgUrl" class="h-full w-full object-cover object-center" />
    <CloseIcon
      class="absolute right-0 top-0 h-12 w-12 -translate-y-full cursor-pointer fill-white/90 hover:opacity-80"
      @click="zoomOutImg"
    />
  </div>
</template>

<script setup>
import CloseIcon from "@/assets/images/svg/x.svg";
import { useLightBoxStore } from "@/stores/lightBoxStore";
import { storeToRefs } from "pinia";

const lightBoxStore = useLightBoxStore();
const { zoomInImgUrl } = storeToRefs(lightBoxStore);
const { zoomOutImg } = lightBoxStore;
</script>
