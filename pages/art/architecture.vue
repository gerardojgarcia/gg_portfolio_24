<script setup>
const collection = ref([
  {
    id: 6,
    title: "Fallingwater #1",
    image: "/art/Falling_Water_1.webp",
    link: "/art/fallingwater-1",
    alt: "Fallingwater #1",
  },
  {
    id: 7,
    title: "We Never Close",
    image: "/art/We_Never_Close.webp",
    link: "/art/we-never-close",
    alt: "We Never Close",
  },

  {
    id: 13,
    title: "Gimme Gimme Records",
    image: "/art/gimme_gimme.webp",
    link: "/art/james-dean-1",
    alt: "Gimme Gimme Records",
  },

  {
    id: 16,
    title: "New York 1970",
    image: "/art/new_york_1970.webp",
    link: "/art/james-dean-1",
    alt: "New York 1970",
  },
  {
    id: 17,
    title: "Waffle House",
    image: "/art/waffle_house.webp",
    link: "/art/james-dean-1",
    alt: "Waffle House",
  },

  {
    id: 33,
    title: "Cliff House, San Francisco ",
    image: "/art/cliff-hose.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of the cliff house in san francisco",
  },

  {
    id: 36,
    title: "Casa del Valle",
    image: "/art/casa_garcia_del_valle.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
]);
</script>
<template>
  <div class="flex flex-col mt-24">
    <AppBackButton />
    <div
      class="art-container h-screen grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white"
    >
      <NuxtLink
        :to="art.link"
        v-for="art in collection"
        :key="art.id"
        class="hover:shadow-xl p-4 duration-100 dark:hover:text-red-200"
      >
        <div class="grid place-content-center">
          <p class="art-title font-bold text-2xl">{{ art.title }}</p>
          <NuxtImg :src="art.image" height="900px" preload :alt="art.alt"></NuxtImg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<style>
.art-container {
  height: 75vh;
}
</style>
