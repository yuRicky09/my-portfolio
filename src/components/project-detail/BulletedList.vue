<template>
  <div>
    <h3 class="my-3">{{ listTitle }}</h3>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  listTitle: {
    type: String,
    required: true,
  },
});
</script>
