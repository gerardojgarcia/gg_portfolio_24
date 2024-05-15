<script setup>
defineProps({
  title: String,
  action: String,
});
</script>

<template>
  <div class="m-4">
    <button
      id="app-btn"
      class="rounded-sm border-black border-4 p-3 duration-150 dark:text-white dark:hover:border-white hover:border-black"
    >
      {{ title }}
    </button>
  </div>
</template>
<style scoped>
#app-btn:focus {
  border: 2px solid white;
  color: rgb(211, 126, 126);
}
</style>
