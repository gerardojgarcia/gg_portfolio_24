<script setup></script>

<template>
  <div class="md:w-1/2">
    <ul
      class="track-list-nav overflow-x-auto md:overflow-y-auto flex md:flex-col space-x-8 md:space-x-0 md:p-8 text-black dark:text-white"
    >
 <NuxtLink to="/music/northern-soul-1" class="track-item text-lg md:text-4xl text-black dark:text-white"
        >Night at Wigan Casino: Northern Soul Mix</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/adiosadiosone"
        >Adios Adios Amor Vol. 1</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/adiosadiostwo"
        >Adios Adios Amor Vol. 2</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/adiosadiosthree"
        >Adios Adios Amor Vol. 3</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/balearicone"
        >Balearic Vol. 1</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/balearicone"
        >Balearic Vol. 2</NuxtLink
      >
      <NuxtLink
        class="track-item text-lg md:text-4xl text-black dark:text-white"
        to="/music/balearicone"
        >Balearic Vol. 3</NuxtLink
      >
      <NuxtLink class="track-item text-lg md:text-4xl text-black dark:text-white"
        >Balearic Vol. 4</NuxtLink
      >
      <NuxtLink class="track-item text-lg md:text-4xl text-black dark:text-white"
        >Japanese City Pop Vol. 1</NuxtLink
      >
      <NuxtLink class="track-item text-lg md:text-4xl text-black dark:text-white"
        >Turkish Female Singers Vol. 1</NuxtLink
      >
    </ul>
  </div>
</template>

<style scoped>
.track-list-nav {
  max-width: 35rem;
  max-height: 50vh;
}

.track-item {
  margin: 1rem 0rem;
  padding: 5px;
  transition: transform 350ms;
}

.track-item:hover {
  box-shadow: 5px 10px #ff6b6b;
  border: 0.4rem solid black;
  transform: translateX(15px);
  transition: all 500ms;
}

.router-link-active {
  box-shadow: 8px 10px #ff6b6b;
  border: 0.4rem solid black;
  transform: translateX(15px);
}
</style>
