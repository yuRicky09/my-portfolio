<template>
  <section
    class="section relative grid grid-cols-1 items-center gap-8 lg:h-[calc(100vh-66px)] lg:grid-cols-[40%_60%] lg:gap-0 xl:grid-cols-2 xl:gap-10"
  >
    <div
      class="absolute top-12 left-0 z-50 hidden font-['Press_Start_2P'] text-violet-500 lg:block"
    >
      <span ref="textEl" class="text-2xl 2xl:text-3xl"></span>
      <span ref="underscoreEl" class="invisible text-3xl font-bold">_</span>
    </div>

    <div
      class="hero-image load-hidden relative -mx-4 xs:-mx-0 lg:col-span-1 lg:col-start-2 lg:row-start-1"
    >
      <img
        src="../../assets/images/hero-cover.jpeg"
        alt="Yu Ricky Image"
        class="h-full w-full scale-[0.85] object-cover object-center lg:h-[calc(100vh-66px)]"
      />
    </div>

    <div class="intro-me load-hidden relative z-10">
      <div class="text-center lg:text-left xl:text-lg">
        <div class="mb-4 flex flex-col gap-2 lg:mb-8">
          <p>Hi there,👋 I'm</p>
          <h1
            class="underline decoration-violet-500 decoration-4 underline-offset-2 xl:text-5xl 2xl:text-[5rem]"
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
        <div class="my-8 space-y-2 text-left text-sm md:text-base xl:text-lg">
          <p>
            畢業後便前往日本就職，在日期間為了擴展自己的視野也多次輾轉各地，熱愛挑戰的我如今又踏上了一個全新的領域
            <span
              class="underline decoration-violet-500 decoration-2 underline-offset-2"
            >
              前端工程師 </span
            >。
          </p>
          <p>
            目前致力於使用Vue與TailwindCSS開發個人專案，希望能透過此網站，讓您能更快速地認識我的經歷與使用技術。
          </p>
        </div>
        <SeeMoreLink class="lg:mt-10 lg:mb-0 lg:justify-center xl:mt-14">
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
const underscoreEl = ref(null);
const words = [
  "From 'a i u e o'",
  "To 'Hello World'",
  "Not easy...",
  "But worth it!!!",
];
let underscoreAnimation;
let typingTimeline;

function createTypingAnimation() {
  if (!isDeskTop()) return;

  underscoreAnimation = gsap.fromTo(
    underscoreEl.value,
    {
      autoAlpha: 0,
    },
    {
      duration: 1,
      repeat: -1,
      autoAlpha: 1,
      ease: "power3.inOut",
    }
  );

  typingTimeline = gsap.timeline({
    repeat: -1,
  });

  words.forEach((word, index) => {
    const typingTween = gsap.to(textEl.value, {
      duration: 2,
      text: word,
      repeat: 1,
      yoyo: true,
      repeatDelay: 1,
    });
    typingTimeline.add(typingTween, setPositionParameter(index));
  });
}

function isDeskTop() {
  const innerWidth = window.innerWidth;
  return innerWidth >= 1280;
}

function setPositionParameter(index) {
  if (index === 0) {
    return 1;
  } else {
    return "+=1.5";
  }
}

function clearPrevAnimation() {
  textEl.value.innerText = "";
  underscoreAnimation?.kill();
  typingTimeline?.kill();
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
