<template>
  <div>
    <section>
      <div class="flex flex-col md:flex-row md:items-end md:gap-5 md:py-8">
        <BaseTitle
          :title="project.name"
          :class-name="project.name"
          class="md:my-0 lg:my-0 xl:my-0 2xl:my-0"
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

      <div class="hidden md:flex md:gap-10">
        <div>
          <h3>達成功能</h3>
          <ul>
            <li
              v-for="feature in project.features"
              :key="feature"
              class="before:pr-1 before:text-green-500 before:content-['✔']"
            >
              {{ feature }}
            </li>
          </ul>
        </div>

        <div>
          <h3>使用技術</h3>
          <ul>
            <li
              v-for="skill in project.skills"
              :key="skill"
              class="before:pr-1 before:text-green-500 before:content-['🔧']"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

      <div class="my-10 overflow-hidden rounded-sm">
        <img :src="cover" :alt="project.name" />
      </div>
    </section>
    <section>
      <BaseTitle title="Purpose" class-name="purpose" />
      <div>
        <p v-for="(paragraphy, index) in project.purpose" :key="index">
          {{ paragraphy }}
        </p>
      </div>
    </section>
    <section>
      <BaseTitle title="Problem" class-name="problem" />
      <div>
        <p v-for="(paragraphy, index) in project.problems" :key="index">
          {{ paragraphy }}
        </p>
      </div>
    </section>
    <section>
      <BaseTitle title="Learn" class-name="learn" />
      <div>
        <p v-for="(paragraphy, index) in project.learn" :key="index">
          {{ paragraphy }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from "@/data";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import GithubIcon from "@/assets/images/svg/github.svg";
import linkIcon from "@/assets/images/svg/link-external.svg";
import { useGetImageUrl } from "@/composables/useGetImageUrl";

const props = defineProps({
  projectName: {
    type: String,
    required: true,
  },
});

const project = projects.find((project) => project.name === props.projectName);
const cover = useGetImageUrl(project.cover);
</script>
