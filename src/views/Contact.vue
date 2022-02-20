<template>
  <div
    class="my-6 grid grid-cols-1 gap-10 lg:my-10 lg:px-28 xl:my-14 xl:h-[calc(100vh-284px)] xl:grid-cols-[1fr_40%] xl:items-center xl:px-0"
  >
    <ContactForm />
    <GoogleMap />
  </div>
</template>

<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";
import GoogleMap from "@/components/contact/GoogleMap.vue";
</script>
