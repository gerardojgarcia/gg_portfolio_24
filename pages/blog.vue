<script setup>
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
    id: 6,
    title: "What is Javascript?",
    link: "/blog/post-3",
  },
]);
</script>
<template>
  <div class="p-16">
    <h1 class="text-4xl font-bold text-black dark:text-white mb-8">Let's Talk About Web Dev</h1>

    <nav v-for="post in posts" :key="posts.id" class="flex overflow-y-auto">
      <NuxtLink :to="post.link" class="focus:text-red-300 dark:text-white text-2xl">{{ post.title }}
      </NuxtLink>
    </nav>

    <NuxtPage />
  </div>
</template>
<style>
nav {
  height: 2rem;
}
</style>
