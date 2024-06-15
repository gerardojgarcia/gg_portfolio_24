<script setup>
const collection = ref([
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
    image: "/art/nude_woman.webp",
    link: "/art/woman-1",
    alt: "Nude #1",
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
  {
    id: 29,
    title: "Big Dreams in Miami",
    image: "/art/bigdreamsinmiami.webp",
    link: "/art/james-dean-1",
    alt: "Big Dreams in Miami",
  },
  {
    id: 30,
    title: "Bukowski Takes a Stroll",
    image: "/art/bukowskitakesastroll.webp",
    link: "/art/james-dean-1",
    alt: "Bukowski Takes A Stroll",
  },
  {
    id: 31,
    title: "Steps ",
    image: "/art/steps.webp",
    link: "/art/james-dean-1",
    alt: "Steps",
  },
  {
    id: 32,
    title: "Waiting",
    image: "/art/waiting.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of a woman waiting in a booth, smoking a cigarette",
  },
  {
    id: 33,
    title: "Cliff House, San Francisco ",
    image: "/art/cliff-hose.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of the cliff house in san francisco",
  },
  {
    id: 34,
    title: "Eastwood #1",
    image: "/art/eastwood.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
  {
    id: 35,
    title: " Smokebreak",
    image: "/art/smokebreak.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of James Dean taking a smoke break",
  },
  {
    id: 36,
    title: "Casa del Valle",
    image: "/art/casa_garcia_del_valle.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
  {
    id: 37,
    title: "The Timewasters",
    image: "/art/timewasters.webp",
    link: "/art/james-dean-1",
    alt: "The Timewasters",
  },
  {
    id: 38,
    title: "The Big Show",
    image: "/art/thebigshow.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
  {
    id: 39,
    title: "That's Entertainment!",
    image: "/art/thatsentertainment.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of a drive in theater ",
  },
  {
    id: 40,
    title: "Fleeting",
    image: "/art/fleeting.webp",
    link: "/art/james-dean-1",
    alt: "The Afternoon",
  },
  {
    id: 41,
    title: "On the Way ",
    image: "/art/on_the_way.webp",
    link: "/art/james-dean-1",
    alt: "Illustration of a train ride",
  },
]);
</script>
<template>
  <div class="flex flex-col">
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
