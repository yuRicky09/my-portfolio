<template>
  <div class="my-6 flex items-center justify-center gap-2">
    <HandRightIcon class="animate-shake" />
    <slot></slot>
  </div>
</template>

<script setup>
import HandRightIcon from "@/assets/images/svg/bxs-hand-right.svg";
</script>
