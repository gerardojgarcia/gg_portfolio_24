<script setup>
const eastLosAngeles = ref([
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
    id: 7,
    title: "Self Help Graphics",
    image: "/art/self_help_graphics.webp",
    link: "/art/self-help-graphics",
    alt: "Self Help Graphics",
  },
  {
    id: 11,
    title: "El Mercado",
    image: "/art/el_mercado.webp",
    link: "/art/james-dean-1",
    alt: "El Mercado",
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
]);
</script>
<template>
  <div class="mt-24">
    <AppBackButton />
    <div
      class="art-container h-screen grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white"
    >
      <NuxtLink
        :to="art.link"
        v-for="art in eastLosAngeles"
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
