<template>
  <section
    class="section relative grid grid-cols-1 items-center gap-8 lg:h-[calc(100vh-66px)] lg:grid-cols-[40%_60%] lg:gap-0 xl:grid-cols-2 xl:gap-10"
  >
    <div
      class="hero-image load-hidden xs:-mx-0 -mx-4 lg:col-span-1 lg:col-start-2 lg:row-start-1"
    >
      <img
        src="../../assets/images/hero-image.JPG"
        alt="Yu Ricky Image"
        class="h-full w-full object-cover object-center lg:h-[calc(100vh-66px)]"
      />
    </div>
    <div
      class="relative z-10 before:absolute before:-top-1 before:-left-16 before:-z-10 before:hidden before:h-[1px] before:w-40 before:-rotate-45 before:bg-violet-500 lg:col-span-1 lg:col-start-1 before:lg:block before:xl:-top-12 before:xl:w-64"
    >
      <div class="text-center lg:text-left xl:text-2xl">
        <div class="mb-4 flex flex-col gap-2 lg:mb-12">
          <p>Hi there,👋 I'm</p>
          <h1
            class="underline decoration-violet-500 decoration-4 underline-offset-2 xl:text-7xl 2xl:text-8xl"
          >
            Yu Ricky
          </h1>
          <p>Frontend Developer</p>
          <div class="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/yuRicky09"
              target="_blank"
              class="hover:animate-flip"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/yuRicky09"
              target="_blank"
              class="hover:animate-flip"
            >
              <FrontendMentorIcon />
            </a>
          </div>
        </div>
        <p>
          Frontend Developer Frontend Developer Frontend Developer Frontend
          Developer Frontend Developer
        </p>
        <SeeMoreLink class="lg:mt-20 lg:mb-0 lg:justify-start">
          <router-link to="#" class="btn">View Projects</router-link>
        </SeeMoreLink>
      </div>
    </div>

    <a
      href="#about"
      class="absolute bottom-2 left-0 hidden hover:opacity-80 lg:block"
    >
      <span class="writing-vertical-rl">Scroll Down</span>
      <MouseIcon />
    </a>
  </section>
</template>

<script setup>
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";
import GithubIcon from "@/assets/images/svg/bxl-github.svg";
import FrontendMentorIcon from "@/assets/images/svg/frontendmentor.svg";
import MouseIcon from "@/assets/images/svg/bx-mouse.svg";

useScrollReveal(".hero-image", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
  easing: "ease-out",
});
</script>
