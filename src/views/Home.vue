<script lang="ts" setup>
import { useArticles } from "../composables/useArticles.ts";
import { onMounted, ref } from "vue";
import ArticlePreview from "../components/ArticlePreview.vue";

const articles = ref(useArticles());
const loginSuccessful = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("username") && urlParams.has("password")) {
    loginSuccessful.value = true;
  }
});
</script>

<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <span
      v-if="loginSuccessful"
      id="login-success"
      class="absolute left-1/2 top-0 mt-2 -translate-x-1/2 rounded-md bg-lime-300 bg-opacity-50 p-2"
      >Logged in successfully</span
    >
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <section>
        <h1 class="mb-2 text-xl">Latest articles</h1>
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
          <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#login-success {
  opacity: 1;
  animation: fade-out 0.5s 2s ease-out forwards;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
