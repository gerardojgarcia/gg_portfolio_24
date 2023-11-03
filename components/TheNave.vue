<script setup></script>
<template>
  <div class="absolute navigation-container">
    <nav class="lg:space-x-8 text-xl font-bold">
      <NuxtLink class="nav-link">Work</NuxtLink>
      <NuxtLink class="nav-link">About</NuxtLink>
      <NuxtLink class="nav-link">Contact</NuxtLink>
    </nav>
  </div>
</template>
<style scoped>
.navigation-container {
  margin-top: 50rem;
  margin-left: 10rem;
}

.nav-link:hover {
  color: rgb(198, 142, 142);
  transition-duration: 500ms;
  cursor: pointer;
}
</style>
