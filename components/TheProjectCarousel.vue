<script setup>
const projects = ref([
  {
    id: 1,
    name: "TaxBuddy",
    img: "./taxbuddy_1920.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://yourtaxbuddy.pro",
  },
  {
    id: 2,
    name: "EarthTutor",
    img: "./earth_tutor_thumbnail.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://earthtutor.pro",
  },
  {
    id: 3,
    name: "ELACompost",
    img: "./elacompost_thumb_1920.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://elacompost.info",
  },
  {
    id: 4,
    name: "VerifiedTransport",
    img: "./verified_1920.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
  },
  {
    id: 5,
    name: "Telos",
    img: "./telos_1920.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://drivetelos.info",
  },
  {
    id: 6,
    name: "Oranges&Lemons",
    img: "./ol_thumb_1920.webp",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://dtlaclean.com",
  },
  {
    id: 7,
    name: "snapstudio!!",
    img: "./snap_thumbnail.png",
    video: "./video.webm",
    tags: ["html", "css", "Javascript", "Vue3", "Nuxt3"],
    link: "https://snapstudio.shop",
  },
]);

function scrollLeft() {
  document.querySelector(".project-carousel").scrollLeft -= 1000;
}

function scrollRight() {
  document.querySelector(".project-carousel").scrollLeft += 1000;
}
</script>
<template>
  <section class="flex flex-col">
    <!--Project Carousel-->
    <div
      class="project-carousel flex items-center translate-y-16 min-h-xl space-x-8 overflow-x-scroll px-4 md:px-16 py-8 scroll-smooth"
    >
      <!--Project Card-->
      <a
        class="cursor-pointer"
        :href="project.link"
        target="_blank"
        v-for="project in projects"
        :key="project.id"
      >
        <div
          class="project-card flex flex-col bg-orange-100 odd:bg-blue-100 last:bg-red-100 first:bg-yellow-200 overflow-hidden hover:shadow-xl"
        >
          <div>
            <nuxt-img
              :src="project.img"
              class="max-h-80 p-8 hover:scale-110 duration-150"
              sizes="sm:100vw"
              width="600px"
              format="webp"
              preload
            ></nuxt-img>
          </div>
          <div class="bg-white dark:bg-black">
            <p class="project-name mt-3 font-bold pl-1 py-2 dark:text-white">
              {{ project.name }}
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="mt-16 w-60 space-x-8 self-end">
      <button
        @click="scrollLeft"
        class="btn-left cursor-pointer focus:scale-90 focus:bg-red-200 rounded-xl bg-white"
      >
        <Icon name="ri:arrow-left-line" color="black" class="text-5xl" /></button
      ><button
        @click="scrollRight"
        class="btn-right focus:scale-90 focus:bg-red-200 rounded-xl bg-white"
      >
        <Icon name="ri:arrow-right-line" color="black" class="text-5xl" />
      </button>
    </div>
  </section>
</template>
<style scoped>
.project-card {
  min-width: 35rem;
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
