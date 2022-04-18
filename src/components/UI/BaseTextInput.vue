<template>
  <div
    class="mb-12 flex gap-2"
    :class="[isTextareaTag ? 'items-start' : 'items-center']"
  >
    <slot></slot>
    <div class="relative w-full">
      <input
        v-if="!isTextareaTag"
        :id="name"
        v-model="inputValue"
        :type="type"
        class="peer border-2 dark:bg-zinc-900"
        :class="{
          'border-transparent': !meta.dirty && !meta.touched,
          ' border-green-500/90': meta.valid && meta.dirty,
          ' border-rose-500/90': errorMessage,
        }"
      />
      <textarea
        v-else
        :id="name"
        v-model="inputValue"
        rows="3"
        class="peer resize-none border-2 dark:bg-zinc-900"
        :class="{
          'border-transparent': !meta.dirty && !meta.touched,
          ' border-green-500/90': meta.valid && meta.dirty,
          ' border-rose-500/90': errorMessage,
        }"
      ></textarea>
      <label
        :for="name"
        class="absolute left-4 transition-all duration-[400ms]"
        :class="[
          labelPosition,
          {
            'text-rose-500/90': errorMessage,
            'text-green-500/90': meta.valid && meta.dirty,
          },
        ]"
        >{{ label }}</label
      >
      <small class="absolute -bottom-6 left-4 text-rose-500/90">{{
        errorMessage
      }}</small>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  initialValue: {
    type: String,
    default: "",
  },
  isTextareaTag: {
    type: Boolean,
    default: false,
  },
});

const {
  value: inputValue,
  errorMessage,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.initialValue,
});

const labelPosition = computed(() => {
  if (props.isTextareaTag) {
    return inputValue.value
      ? "-top-5 text-[0.5rem]"
      : "top-3 peer-focus:-top-5 peer-focus:text-[0.5rem]";
  } else {
    return inputValue.value
      ? "-top-3 -translate-y-1/2 text-[0.5rem]"
      : "top-1/2 -translate-y-1/2 peer-focus:-top-3 peer-focus:text-[0.5rem]";
  }
});
</script>
