<template>
  <div class="pt-5">
    <section class="section">
      <div
        class="flex flex-col gap-2 py-6 md:flex-row md:items-end md:gap-5 md:py-8 lg:py-6"
      >
        <BaseTitle
          :title="project.name"
          :class-name="project.name"
          class="!my-0"
        />
        <div class="flex items-center gap-5">
          <a
            :href="project.repositoryUrl"
            target="_blank"
            class="group flex gap-2 hover:opacity-80"
            ><GithubIcon class="group-hover:animate-flip" />View Repository</a
          >
          <a
            :href="project.siteUrl"
            target="_blank"
            class="group flex gap-2 hover:opacity-80"
            ><linkIcon class="group-hover:animate-flip" />View Site</a
          >
        </div>
      </div>

      <div class="my-5">
        <p>{{ project.description }}</p>
      </div>

      <div class="hidden md:flex md:gap-10 lg:gap-20 xl:gap-28">
        <BulletedList list-title="Features">
          <BulletedListItem
            :items="project.features"
            bulleted-class="before:text-green-500 before:content-['✔']"
          />
        </BulletedList>

        <BulletedList list-title="Skills">
          <BulletedListItem
            :items="project.skills"
            bulleted-class="before:text-green-500 before:content-['🔧']"
          />
        </BulletedList>
      </div>

      <div class="project-cover load-hidden my-10 overflow-hidden rounded-sm">
        <img :src="cover" :alt="project.name" />
      </div>
    </section>

    <section class="section">
      <BaseTitle title="Project Purpose" class-name="purpose" />
      <div>
        <BaseParagraph
          v-for="(textContent, index) in project.purpose"
          :key="index"
          :text-content="textContent"
        />
      </div>
    </section>

    <section class="section">
      <BaseTitle title="Layout" class-name="layout" />
      <BaseSlider>
        <BaseSlide
          v-for="(image, index) in project.images"
          v-show="index === currentSlideIndex"
          :key="image"
          :image="image"
        />
      </BaseSlider>
      <SliderPagination>
        <SliderPaginationThumbnail
          v-for="(image, index) in project.images"
          :key="image"
          :image="image"
          :thumbnail-index="index"
        />
      </SliderPagination>
      <Teleport to="body">
        <BaseOverlay
          v-if="isZoomIn"
          class="!z-30 backdrop-blur-sm"
          @click.self="zoomOutImg"
        >
          <BaseLightBox />
        </BaseOverlay>
      </Teleport>
    </section>

    <section class="section">
      <BaseTitle title="Problems and Solutions" class-name="problem" />
      <div>
        <BaseParagraph
          v-for="(textContent, index) in project.problems"
          :key="index"
          :text-content="textContent"
        />
      </div>
    </section>

    <section class="section">
      <BaseTitle title="What I Learned" class-name="learn" />
      <div>
        <BaseParagraph
          v-for="(textContent, index) in project.learn"
          :key="index"
          :text-content="textContent"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from "@/data";
import GithubIcon from "@/assets/images/svg/github.svg";
import linkIcon from "@/assets/images/svg/link-external.svg";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import BaseParagraph from "@/components/UI/BaseParagraph.vue";
import BulletedList from "@/components/project-detail/BulletedList.vue";
import BulletedListItem from "@/components/project-detail/BulletedListItem.vue";
import BaseSlider from "@/components/UI/BaseSlider.vue";
import BaseSlide from "@/components/UI/BaseSlide.vue";
import SliderPagination from "@/components/UI/SliderPagination.vue";
import SliderPaginationThumbnail from "@/components/UI/SliderPaginationThumbnail.vue";
import { useGetImageUrl } from "@/composables/useGetImageUrl";
import { useSliderStore } from "@/stores/sliderStore";
import { useLightBoxStore } from "@/stores/lightBoxStore";
import { storeToRefs } from "pinia";
import { defineAsyncComponent } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const BaseOverlay = defineAsyncComponent(() =>
  import("@/components/UI/BaseOverlay.vue")
);
const BaseLightBox = defineAsyncComponent(() =>
  import("@/components/UI/BaseLightBox.vue")
);

const props = defineProps({
  projectName: {
    type: String,
    required: true,
  },
});

const project = projects.find((project) => project.name === props.projectName);
const cover = useGetImageUrl(project.cover);

const sliderStore = useSliderStore();
const { currentSlideIndex, slideMaxIndex } = storeToRefs(sliderStore);
slideMaxIndex.value = project.images.length - 1;

const lightBoxStore = useLightBoxStore();
const { isZoomIn } = storeToRefs(lightBoxStore);
const { zoomOutImg } = lightBoxStore;

useScrollReveal(".project-cover", {
  origin: "bottom",
  distance: "50px",
  duration: 600,
  easing: "ease-out",
  delay: 400,
});
</script>
