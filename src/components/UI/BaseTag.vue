<template>
  <div
    class="flex cursor-pointer items-center justify-center gap-2 bg-white py-3 px-6 shadow-lg hover:opacity-80 dark:bg-zinc-900 dark:shadow-none"
  >
    <slot></slot>
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
