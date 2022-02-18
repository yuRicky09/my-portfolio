<template>
  <p class="my-5 px-2">
    {{ textContent }}
  </p>
</template>

<script setup>
defineProps({
  textContent: {
    type: String,
    required: true,
  },
});
</script>
