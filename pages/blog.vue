<script setup>
definePageMeta({
  layout: 'false',
  layoutTransition: 'layout',

})
const posts = ref([
  {
    id: 1,
    title: "Getting started in Web Development",
    link: "/blog/post-1",
  },
  {
    id: 2,
    title: "What is HTML?",
    link: "/blog/post-2",
  },
  {
    id: 3,
    title: "What is CSS?",
    link: "/blog/post-3",
  },
  {
    id: 4,
    title: "What is Javascript?",
    link: "/blog/post-3",
  },
  {
    id: 5,
    title: "HTML Tags for Beginners",
    link: "/blog/html-tags-for-beginners",
  },


]);
</script>
<template>
  <div class="p-16 dark:bg-black" >
    <h1 class="text-4xl font-bold text-black dark:text-white dark:bg-black mb-8">Let's Talk About Web Dev</h1>

    <nav v-for="post in posts" :key="post.id" class="flex overflow-y-auto max-h-52">
      <NuxtLink :to="post.link" class="focus:text-red-300 dark:text-white text-2xl">{{ post.title }}
      </NuxtLink>
    </nav>

    <NuxtLink to="/" class="text-2xl font-bold text-black dark:text-white mb-8">Back to Home</NuxtLink>

    <NuxtPage />
  </div>
</template>
<style scoped>
nav {
  height: 2rem;
}
</style>
