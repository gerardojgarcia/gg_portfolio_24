<script setup></script>
<template>
  <div class="absolute navigation-container">
    <nav class="lg:space-x-6 dark:text-white text-xl font-bold">
      <NuxtLink class="nav-link focus:text-red-300" to="/">Work</NuxtLink>
      <NuxtLink class="nav-link focus:text-red-300" to="/about">About</NuxtLink>
      <NuxtLink class="nav-link focus:text-red-300" to="/contact">Contact</NuxtLink>
      <!--<NuxtLink class="nav-link focus:text-red-300" to="/blog/post-1">Blog</NuxtLink>-->
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
