<template>
  <div>{{ projectName }}</div>
</template>

<script setup>
defineProps({
  projectName: {
    type: String,
    required: true,
  },
});
</script>
