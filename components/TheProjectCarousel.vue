<script setup>
const projects = ref([
  {
    id: 1,
    name: "TaxBuddy",
    img: "./seo.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 2,
    name: "EarthTutor",
    img: "./Payment.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 3,
    name: "ELACompost",
    img: "./development.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 4,
    name: "VerifiedTransport",
    img: "./stats.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 5,
    name: "Telos",
    img: "./coding.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 6,
    name: "Monarch Construction",
    img: "./designer.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
]);
</script>
<template>
  <!--Project Carousel-->
  <div
    class="project-carousel flex items-center translate-y-16 min-h-xl space-x-8 overflow-x-scroll px-16"
  >
    <!--Project Card-->
    <div
      class="project-card flex flex-col bg-orange-100 odd:bg-blue-100 last:bg-red-100 first:bg-yellow-200"
      v-for="project in projects"
      :key="project.id"
    >
      <div>
        <nuxt-img :src="project.img" class="max-h-72 p-8" sizes="sm:100vw"></nuxt-img>
      </div>
      <div class="bg-white">
        <p class="project-name mt-3 font-bold">{{ project.name }}</p>
      </div>
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
