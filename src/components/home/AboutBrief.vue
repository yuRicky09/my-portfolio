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
          class="w-36 xs:w-44 sm:w-56 xl:w-64"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p>2018-2021年期間於日本熊本、廣島、兵庫、東京等各地工作。</p>
        <p class="mb-6">
          2021下半年趟上網路開發旅程，目前除了學習HTML、CSS、JavaScript外，也持續專精前端框架Vue與Tailwind
          CSS等各項技術，使自己能開發出讓使用者於各種裝置下都有絕佳體驗的網頁應用程式。
        </p>
        <SeeMoreLink>
          <router-link :to="{ name: 'About' }" class="btn"
            >See More</router-link
          >
        </SeeMoreLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import SeeMoreLink from "@/components/home/SeeMoreLink.vue";
import BaseTitle from "@/components/UI/BaseTitle.vue";
</script>
