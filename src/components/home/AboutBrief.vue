<template>
  <section class="section">
    <h2 class="section-title">About</h2>
    <div class="grid grid-cols-1 justify-items-center gap-4">
      <div>
        <img
          src="../../assets/images/about-brief.jpg"
          alt="About Me Image"
          class="w-36 object-cover"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p>
          Lorem ipsum dolor sit voluptatibus suscipit et, autem ad, adipisci
          odit dolor inventore
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          eligendi. Repudiandae enim eos nostrum quisquam adipisci illum natus
          fuga amet tenetur voluptate laudantium vel ducimus asperiores eligendi
          dolorem, facilis ullam.
        </p>
        <p>
          sit consequuntur ipsum aut praesentium voluptatem vel amet quos ullam
          aliquam doloremque nisi nihil vero explicabo facilis sunt!
        </p>
        <SeeMoreLink>
          <router-link to="#" class="btn">See More</router-link>
        </SeeMoreLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
</script>
