<template>
  <li
    v-for="item in items"
    :key="item"
    class="my-1 before:pr-1"
    :class="bulletedClass"
  >
    {{ item }}
  </li>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  bulletedClass: {
    type: String,
    default: "",
  },
});
</script>
