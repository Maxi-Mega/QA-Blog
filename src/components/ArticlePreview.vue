<script lang="ts" setup>
import { defineProps, toRefs } from "vue";
import { Article } from "../composables/useArticles.ts";

const props = defineProps<{
  article: Article;
}>();
const { article } = toRefs(props);

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const truncate = (text: string): string => {
  return text.length > 75 ? text.slice(0, 72) + "..." : text;
};
</script>

<template>
  <article class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
    <router-link
      class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
      :to="'/article/' + article.slug"
      aria-hidden="true"
    >
      <img
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        loading="lazy"
        v-bind:alt="article.pictureDescription"
        :src="baseUrl + '/' + article.pictureURL"
      />
    </router-link>

    <div class="flex flex-col gap-2 p-4 lg:p-6">
      <time :datetime="article.date.replace(/\//g, '-')" class="text-sm text-gray-400">{{
        article.date
      }}</time>
      <div class="flex flex-wrap items-center gap-0.5 text-sm text-gray-400">
        <pre
          v-for="tag in article.tags"
          :key="tag"
          class="border-1 break-keep border-gray-500 p-0.5"
          >{{ tag }}</pre
        >
      </div>

      <h2 class="text-xl font-bold text-gray-200">
        <router-link
          class="transition duration-100 hover:text-indigo-400 active:text-indigo-600"
          :to="'/article/' + article.slug"
          >{{ article.title }}
        </router-link>
      </h2>

      <p class="text-gray-300">{{ truncate(article.content) }}</p>

      <div class="flex flex-row justify-between">
        <router-link
          class="font-semibold text-indigo-400 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          :to="'/article/' + article.slug"
          >Read more of this article
        </router-link>
        <router-link
          :to="'/article/' + article.slug + '#comments'"
          :aria-label="`Go to article comments of article '${article.title}'`"
          >{{ article.comments.length }} comment{{
            article.comments.length == 1 ? "" : "s"
          }}</router-link
        >
      </div>
    </div>
  </article>
</template>

<style scoped></style>
