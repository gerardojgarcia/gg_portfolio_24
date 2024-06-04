<script setup>
const collection = ref([
  {
    id: 1,
    title: "Maravilla Handball Court",
    image: "/art/maravilla.webp",
    link: "/art/maravilla-handball-court",
    alt: "Maravilla Handball Court",
  },
  {
    id: 2,
    title: "El Pino",
    image: "/art/El_Pino_.webp",
    link: "/art/el-pino",
    alt: "El Pino",
  },
  {
    id: 3,
    title: "Otomisan",
    image: "/art/Otomisan_.webp",
    link: "/art/otomisan-front",
    alt: "Otomisan",
  },
  {
    id: 4,
    title: "Jim's Burgers",
    image: "/art/Jims_.webp",
    link: "/art/jim-burgers",
    alt: "Jim's Burgers",
  },
  {
    id: 5,
    title: "Marlon Brando",
    image: "/art/Brando.webp",
    link: "/art/marlon-brando-1",
    alt: "illustration of Marlon Brando",
  },
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
    id: 8,
    title: "Nude #1",
    image: "/art/nude_woman.jpg",
    link: "/art/woman-1",
    alt: "Nude #1",
  },
  {
    id: 7,
    title: "Self Help Graphics",
    image: "/art/self_help_graphics.webp",
    link: "/art/self-help-graphics",
    alt: "Self Help Graphics",
  },
  {
    id: 8,
    title: "Tozawa",
    image: "/art/Tozawa_.webp",
    link: "/art/tozawa-1",
    alt: "Tozawa",
  },
  {
    id: 9,
    title: "Fuseinatti",
    image: "/art/fuseinatti.webp",
    link: "/art/fuseinatti-1",
    alt: "Fuseinatti",
  },
  {
    id: 10,
    title: "James Dean #1",
    image: "/art/jamesandjukebox.webp",
    link: "/art/james-dean-1",
    alt: "James Dean #1",
  },
  {
    id: 11,
    title: "El Mercado",
    image: "/art/el_mercado.webp",
    link: "/art/james-dean-1",
    alt: "El Mercado",
  },
  {
    id: 12,
    title: "Frank Frazetta",
    image: "/art/frazetta.webp",
    link: "/art/james-dean-1",
    alt: "Frank Frazetta",
  },
  {
    id: 13,
    title: "Gimme Gimme Records",
    image: "/art/gimme_gimme.webp",
    link: "/art/james-dean-1",
    alt: "Gimme Gimme Records",
  },
  {
    id: 14,
    title: "La Soldadera",
    image: "/art/la_soldadera.webp",
    link: "/art/james-dean-1",
    alt: "La Soldadera",
  },
  {
    id: 15,
    title: "The Water Carrier",
    image: "/art/cargando_agua.webp",
    link: "/art/james-dean-1",
    alt: "The Water Carrier",
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
    id: 18,
    title: "James Dean #2",
    image: "/art/james.webp",
    link: "/art/james-dean-1",
    alt: "James Dean #2",
  },
  {
    id: 19,
    title: "Wendover Will",
    image: "/art/wendover_will.webp",
    link: "/art/james-dean-1",
    alt: "Wendover Will",
  },
  {
    id: 20,
    title: "Palm Springs",
    image: "/art/palm_springs_.webp",
    link: "/art/james-dean-1",
    alt: "Palm Springs",
  },
  {
    id: 21,
    title: "Los 5 Puntos",
    image: "/art/los_5_puntos.webp",
    link: "/art/james-dean-1",
    alt: "Los 5 Puntos",
  },
  {
    id: 22,
    title: "Lento's Key Shop",
    image: "/art/lentos.webp",
    link: "/art/james-dean-1",
    alt: "Lento's Key Shop",
  },
  {
    id: 23,
    title: "Gummo Bunny",
    image: "/art/gummo_.webp",
    link: "/art/james-dean-1",
    alt: "Gummo Bunny",
  },
  {
    id: 24,
    title: "Lou Reed - Shitmakers",
    image: "/art/lou.webp",
    link: "/art/james-dean-1",
    alt: "Lou Reed - Shitmakers",
  },
  {
    id: 25,
    title: "Yabuki ",
    image: "/art/yabuki-san_.webp",
    link: "/art/james-dean-1",
    alt: "Yabuki",
  },
  {
    id: 26,
    title: "Passion ",
    image: "/art/passion.webp",
    link: "/art/passion-illustration",
    alt: "Passion",
  },
  {
    id: 27,
    title: "The Revolutionary ",
    image: "/art/revoluciónario_.webp",
    link: "/art/james-dean-1",
    alt: "The Revolutionary",
  },
  {
    id: 28,
    title: "The Afternoon",
    image: "/art/afternoon.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
  {
    id: 28,
    title: "Aimless",
    image: "/art/aimless.webp",
    link: "/art/james-dean-1",
    alt: "Aimless",
  },
]);
</script>
<template>
  <div class="art-container grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white">
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
</template>
<style>
.art-container {
  height: 75vh;
}
</style>
