<template>
  <section id="about" class="section">
    <BaseTitle title="About" class-name="about" />
    <div
      class="grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-[40%_60%]"
    >
      <div>
        <img
          src="../../assets/images/about-brief.jpg"
          alt="About Me Image"
          class="xs:w-44 w-36 sm:w-56 xl:w-64"
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
import BaseTitle from "@/components/UI/BaseTitle.vue";
</script>
