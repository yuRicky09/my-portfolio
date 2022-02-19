<template>
  <p class="my-5">
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
