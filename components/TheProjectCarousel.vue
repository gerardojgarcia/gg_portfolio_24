<script setup>
const projects = ref([
  {
    id: 1,
    name: "TaxBuddy",
    img: "./taxbuddy_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 2,
    name: "EarthTutor",
    img: "./earth_tutor_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 3,
    name: "ELACompost",
    img: "./telos_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 4,
    name: "VerifiedTransport",
    img: "./verified_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 5,
    name: "Telos",
    img: "./telos_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 6,
    name: "Oranges&Lemons",
    img: "./telos_1920.jpg",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
]);
</script>
<template>
  <!--Project Carousel-->
  <div class="project-carousel flex items-center translate-y-16 min-h-xl space-x-8 overflow-x-scroll px-16 py-8">
    <!--Project Card-->
    <div
      class="project-card flex flex-col bg-orange-100 odd:bg-blue-100 last:bg-red-100 last:hover:-translate-x-8 first:bg-yellow-200 first:hover:translate-x-8 hover:shadow-xl hover:scale-125 duration-150"
      v-for="project in projects" :key="project.id">
      <NuxtLink to="/">
        <div>
          <nuxt-img :src="project.img" class="max-h-80 p-8" sizes="sm:100vw" preload format="webp"></nuxt-img>
        </div>
        <div class="bg-white dark:bg-black">
          <p class="project-name mt-3 font-bold pl-1 py-2 dark:text-white">
            {{ project.name }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.project-card {
  min-width: 25rem;
}

.project-carousel::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.project-carousel {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
