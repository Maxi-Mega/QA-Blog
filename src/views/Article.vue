<script lang="ts" setup>
import {useRoute} from "vue-router";
import {getArticleBySlug} from "../composables/useArticles.ts";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const route = useRoute();

const article = getArticleBySlug(route.params.slug as string);
</script>

<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div v-if="article" class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
                class="h-full w-full object-cover object-center"
                loading="lazy" v-bind:alt="article.pictureDescription"
                v-bind:src="baseUrl + '/'+article.pictureURL"/>
          </div>
        </div>

        <div class="md:pt-8">
          <h1 class="mb-4 text-center text-2xl font-bold text-gray-200 sm:text-3xl md:mb-6 md:text-left">
            {{ article.title }}</h1>

          <p class="mb-6 text-gray-300 sm:text-lg md:mb-8">{{ article.content }}</p>
          <br>
          <table class="w-full">
            <thead class="text-center">
            <tr>
              <td>Col 1</td>
              <td>Col 2</td>
              <td>Col 3</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            </tbody>
            <tfoot>
            <tr class="text-gray-400 text-center">
              <td>Col 1</td>
              <td>Col 2</td>
              <td>Col 3</td>
            </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <h2 class="mb-4 text-center text-xl font-bold text-gray-200 sm:text-3xl md:mb-6 md:text-left">Comments</h2>
          <ul>
            <li v-for="comment in article.comments" :key="comment"
                class="my-3 p-1 border-b-2 border-gray-500">{{ comment }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
table tr td {
  border: 1px solid gray;
  border-collapse: collapse;
}

thead {
  font-weight: bold;
}

td {
  padding: 5px;
}
</style>
