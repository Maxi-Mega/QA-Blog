<script lang="ts" setup>
import { useRoute } from "vue-router";
import { formatDate, getArticleBySlug } from "../composables/useArticles.ts";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const route = useRoute();

const article = getArticleBySlug(route.params.slug as string);
</script>

<template>
  <article class="py-6 sm:py-8 lg:py-12">
    <div v-if="article" class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
              class="h-full w-full object-cover object-center"
              loading="lazy"
              :alt="article.pictureDescription"
              :src="baseUrl + '/' + article.pictureURL"
            />
          </div>
        </div>

        <div class="md:pt-8">
          <h1
            class="mb-2 text-center text-2xl font-bold text-gray-200 sm:text-3xl md:mb-4 md:text-left"
          >
            {{ article.title }}
          </h1>
          <time :datetime="formatDate(article.date)" class="text-sm text-gray-400">{{
            article.date
          }}</time>
          <p class="mb-6 mt-4 text-gray-300 sm:text-lg md:mb-8">{{ article.content }}</p>
          <figure class="mt-2">
            <table class="w-full">
              <thead class="text-center">
                <tr>
                  <th>Col 1</th>
                  <th>Col 2</th>
                  <th>Col 3</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="_ in [1, 2, 3, 4]">
                  <td v-for="j in [1, 2, 3]">{{ j }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="text-center text-gray-300">
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                </tr>
              </tfoot>
            </table>
            <figcaption>A table displaying some values</figcaption>
          </figure>
        </div>
        <aside id="comments">
          <h2
            class="mb-4 text-center text-xl font-bold text-gray-200 sm:text-3xl md:mb-6 md:text-left"
          >
            Comments
          </h2>
          <ul>
            <li
              v-for="comment in article.comments"
              :key="comment.content"
              class="my-3 border-b-2 border-gray-500 p-1"
            >
              <div>
                <span class="text-sm"
                  >{{ comment.author }} -
                  <time :datetime="formatDate(comment.date)">{{ comment.date }}</time></span
                >
                <p>{{ comment.content }}</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </article>
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
