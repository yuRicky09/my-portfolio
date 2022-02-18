<template>
  <div
    class="flex cursor-pointer items-center justify-center gap-2 bg-slate-200 py-3 px-6 hover:opacity-80 dark:bg-zinc-900"
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
