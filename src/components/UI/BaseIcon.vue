<template>
  <component :is="res"></component>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// const icon = computed(() => {
//   const res = defineAsyncComponent(() =>
//     import(`../../assets/images/svg/${props.name}.svg`)
//   );
//   console.log(res);
//   return res;
// });

const res = defineAsyncComponent(() =>
  import(`../../assets/images/svg/${props.name}.svg`)
);

// const counter = ref(0);
// const count = computed(() => {
//   console.log(counter.value);
//   return 5;
// });
</script>
