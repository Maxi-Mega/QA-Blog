<script lang="ts" setup>
const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h1 class="mb-4 text-center text-2xl font-bold text-gray-200 md:mb-8 lg:text-3xl">Login</h1>

      <form :action="baseUrl" class="mx-auto max-w-lg rounded-lg border border-gray-500" method="get">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div class="w-full">
            <label class="flex flex-wrap gap-1 mb-1" for="email">Email</label>
            <input id="email" autocomplete="username" autofocus class="w-full border-1 border-gray-300 rounded p-1 bg-gray-800 text-gray-100" name="username" placeholder="john.doe@mail.net"
                   required
                   type="email">
          </div>
          <div class="w-full">
            <label class="flex flex-wrap gap-1 mb-1" for="password">Password</label>
            <input id="password" autocomplete="current-password" class="w-full border-1 border-gray-300 rounded p-1 bg-gray-800 text-gray-100" minlength="8" name="password" placeholder=""
                   required
                   type="password">
          </div>
          <div class="border-t-2 border-gray-500 w-full my-3"></div>
          <div class="w-full">
            <input class="w-full cursor-pointer py-1 px-2 border-2 border-gray-200 rounded hover:rounded-xl hover:bg-gray-100 hover:bg-opacity-5 transition-all" type="submit"
                   value="Go">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
