<script setup>
const projects = ref([
  {
    id: 1,
    name: "Oranges&Lemons",
    img: "./img.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 2,
    name: "EarthTutor",
    img: "./img.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 3,
    name: "ELACompost",
    img: "./img.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
]);
</script>
<template>
  <div
    class="flex items-center translate-x-44 translate-y-72 border-2 dark:border-white w-4/5 pb-52 space-x-8 justify-center"
  >
    <div
      class="project-thumbnail w-64 border-2 border-red-300 flex"
      v-for="project in projects"
      :key="project.id"
    >
      <nuxt-img :src="project.img"></nuxt-img>
      <p class="project-name dark:text-white">{{ project.name }}</p>
    </div>
  </div>
</template>
