<template>
  <div>
    <section>
      <BaseTitle title="About" class-name="about" />
      <div
        class="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-8 xl:gap-10"
      >
        <div class="h-[20rem] xl:h-[25rem]">
          <img
            ref="aboutCover"
            :src="aboutCoverImg"
            alt="about cover"
            class="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3>嗨👋 我是Yu Ricky~~~~</h3>
          <BaseParagraph
            text-content="接觸到前端的起因: consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
          />
          <BaseParagraph
            text-content="自學經歷: dolor sit, amet consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
          />
        </div>
      </div>
    </section>

    <section>
      <BaseTitle title="My Skills" class-name="my-skill" />
      <div class="grid-cols-tags grid place-content-center gap-5">
        <BaseTag
          v-for="(icon, skillName) in skills"
          :key="skillName"
          :name="skillName"
        >
          <component :is="icon"></component>
        </BaseTag>
      </div>
      <BaseParagraph
        text-content="目前專精於: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
      />
      <BaseParagraph
        text-content="未來規劃: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
      />
    </section>

    <section>
      <div class="mb-4">
        <BaseTitle title="Experience In Japan" class-name="Experience" />
        <p class="mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel velit
          dicta harum nisi veniam labore possimus tempore quae cumque blanditiis
          distinctio, optio atque perferendis explicabo animi. Dignissimos
          voluptatum temporibus nisi?
        </p>
      </div>
      <div class="flex flex-col items-center">
        <MyExperience />
        <MyExperience />
        <MyExperience />
      </div>
    </section>

    <section>
      <BaseTitle title="My Hobby" class-name="hobby" />
      <div
        class="grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 xl:grid-cols-[1fr_40%]"
      >
        <div>
          <BaseParagraph
            text-content="平常喜歡: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
          />
          <BaseParagraph
            text-content="熱愛: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni beatae quasi maxime. Laudantium distinctio dolor ratione. Officia voluptate odit ipsum accusantium mollitia incidunt. Ratione consequuntur rerum labore. Perferendis, dolor cum."
          />
        </div>
        <div class="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <img
            ref="img1"
            :src="aboutImgOne"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
          <img
            ref="img2"
            :src="aboutImgTwo"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
          <img
            ref="img3"
            :src="aboutImgThree"
            alt="me"
            class="absolute top-0 left-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import aboutCoverImg from "@/assets/images/about-cover.jpg";
import aboutImgOne from "@/assets/images/about-1.jpg";
import aboutImgTwo from "@/assets/images/about-2.jpg";
import aboutImgThree from "@/assets/images/about-3.jpg";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import BaseParagraph from "@/components/UI/BaseParagraph.vue";
import BaseTag from "@/components/UI/BaseTag.vue";
import CSS from "@/assets/images/svg/css3.svg";
import HTML from "@/assets/images/svg/html5.svg";
import JavaScript from "@/assets/images/svg/javascript.svg";
import SCSS from "@/assets/images/svg/sass.svg";
import Tailwind from "@/assets/images/svg/tailwind-css.svg";
import Vue from "@/assets/images/svg/vuejs.svg";
import Firebase from "@/assets/images/svg/firebase.svg";
import Git from "@/assets/images/svg/git.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
import MyExperience from "@/components/about/MyExperience.vue";

gsap.registerPlugin(ScrollTrigger);

const skills = {
  CSS,
  HTML,
  JavaScript,
  Vue,
  SCSS,
  Tailwind,
  Firebase,
  Git,
};

const aboutCover = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);

onMounted(() => {
  // cover animation
  gsap.from(aboutCover.value, {
    duration: 0.8,
    autoAlpha: 0,
    transformOrigin: "top",
    scaleY: 0,
    ease: "bounce.out",
  });

  // image slide animation
  const timeline = gsap.timeline({ repeat: -1 });

  timeline
    .to(img1.value, { duration: 2, translateY: "-100%" }, 4)
    .from(img2.value, { duration: 2, translateY: "100%" }, "<")
    .to(img2.value, { duration: 2, translateX: "100%" }, "+=4")
    .from(img3.value, { duration: 2, translateX: "-100%" }, "<")
    .to(img3.value, { duration: 2, translateY: "100%" }, "+=4")
    .to(img1.value, { duration: 2, translateY: "0%" }, "<");
});
</script>
