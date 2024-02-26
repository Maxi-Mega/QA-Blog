<script setup lang="ts">
import {defineProps, toRefs} from "vue";
import {Article} from "../composables/useArticles.ts";
import {link} from "../composables/utils.ts";

const props = defineProps<{
  article: Article,
}>();
const {article} = toRefs(props);

const truncate = (text: string): string => {
  return text.length > 75 ? text.slice(0, 72) + "..." : text;
}
</script>

<template>
  <article class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
    <a href="#"
       class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
      <img v-bind:src="link(article.pictureURL)"
           loading="lazy" v-bind:alt="article.pictureDescription"
           class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
    </a>

    <div class="flex flex-col gap-2 p-4 lg:p-6">
      <span class="text-sm text-gray-400">{{ article.date }}</span>
      <div class="text-sm text-gray-400 flex flex-wrap items-center gap-0.5">
        <kbd v-for="tag in article.tags" :key="tag"
             class="border-gray-500 border-1 p-0.5 break-keep">{{ tag }}</kbd>
      </div>

      <h2 class="text-xl font-bold text-gray-200">
        <a v-bind:href="link('/article/' + article.slug)"
           class="transition duration-100 hover:text-indigo-400 active:text-indigo-600">{{
            article.title
          }}</a>
      </h2>

      <p class="text-gray-300">{{ truncate(article.content) }}</p>

      <div class="flex flex-row justify-between">
        <a v-bind:href="link('/article/' + article.slug)"
           class="font-semibold text-indigo-400 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
          more of this article</a>
        <p>{{ article.comments.length }} comment{{ article.comments.length == 1 ? "" : "s" }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
</style>