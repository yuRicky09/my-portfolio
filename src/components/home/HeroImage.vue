<template>
  <section
    class="section relative grid grid-cols-1 items-center gap-8 lg:h-[calc(100vh-66px)] lg:grid-cols-[40%_60%] lg:gap-0 xl:grid-cols-2 xl:gap-10"
  >
    <div
      class="absolute top-12 left-0 z-50 hidden font-['Press_Start_2P'] text-violet-500 lg:block"
    >
      <span ref="textEl" class="text text-3xl"></span>
      <span class="underscore text-3xl font-bold">_</span>
    </div>

    <div
      class="hero-image load-hidden xs:-mx-0 -mx-4 lg:col-span-1 lg:col-start-2 lg:row-start-1"
    >
      <img
        src="../../assets/images/hero-image.jpg"
        alt="Yu Ricky Image"
        class="h-full w-full object-cover object-center lg:h-[calc(100vh-66px)]"
      />
    </div>

    <div class="intro-me load-hidden relative z-10">
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
              class="group"
            >
              <GithubIcon class="group-hover:animate-flip" />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/yuRicky09"
              target="_blank"
              class="group"
            >
              <FrontendMentorIcon class="group-hover:animate-flip" />
            </a>
          </div>
        </div>
        <p>
          Frontend Developer Frontend Developer Frontend Developer Frontend
          Developer Frontend Developer
        </p>
        <SeeMoreLink class="lg:mt-20 lg:mb-0 lg:justify-start">
          <router-link :to="{ name: 'Projects' }" class="btn"
            >View Projects</router-link
          >
        </SeeMoreLink>
      </div>
    </div>
    <router-link
      to="#about"
      class="absolute bottom-2 left-0 hidden hover:opacity-80 lg:block"
    >
      <span class="writing-vertical-rl">Scroll Down</span>
      <MouseIcon />
    </router-link>
  </section>
</template>

<script setup>
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";
import GithubIcon from "@/assets/images/svg/github.svg";
import FrontendMentorIcon from "@/assets/images/svg/frontendmentor.svg";
import MouseIcon from "@/assets/images/svg/mouse.svg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, onBeforeUnmount, ref } from "vue";

gsap.registerPlugin(TextPlugin);

// Typing Animation
// 只用於desktop, mobile下清除animation。
const textEl = ref(null);
const words = ["Welcome", "My Firend"];
let underscoreAnimation;
let typingTimeline;

function createTypingAnimation() {
  if (isDeskTop()) {
    underscoreAnimation = gsap.from(".underscore", {
      duration: 1,
      autoAlpha: 0,
      repeat: -1,
      ease: "power3.inOut",
    });

    typingTimeline = gsap.timeline({
      repeat: -1,
    });

    words.forEach((word, index) => {
      const timeline = gsap.to(".text", {
        duration: 2,
        text: word,
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
      });
      typingTimeline.add(timeline, setPositionParameter(index));
    });
  }
}

function clearPrevAnimation() {
  textEl.value.innerText = "";
  underscoreAnimation?.kill();
  typingTimeline?.kill();
}

function isDeskTop() {
  const innerWidth = window.innerWidth;
  return innerWidth > 1024;
}

function setPositionParameter(index) {
  if (index === 0) {
    return 1;
  } else {
    return "+=1.5";
  }
}

function clearPrevAndCreateNewAnimation() {
  clearPrevAnimation();
  createTypingAnimation();
}

onMounted(() => {
  createTypingAnimation();
  window.addEventListener("resize", clearPrevAndCreateNewAnimation);
});

onBeforeUnmount(() => {
  clearPrevAnimation();
  window.removeEventListener("resize", clearPrevAndCreateNewAnimation);
});

useScrollReveal(".hero-image", {
  duration: 700,
  origin: "bottom",
  distance: "40px",
  easing: "ease-out",
  delay: 500,
});

useScrollReveal(".intro-me", {
  duration: 700,
  origin: "left",
  distance: "40px",
  easing: "ease-out",
});
</script>
