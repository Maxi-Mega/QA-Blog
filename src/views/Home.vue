<script lang="ts" setup>
import { useArticles } from "../composables/useArticles.ts";
import { ref } from "vue";
import ArticlePreview from "../components/ArticlePreview.vue";

const articles = ref(useArticles());
</script>

<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <section>
        <h2 class="mb-2 text-xl">Latest articles</h2>
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
          <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
