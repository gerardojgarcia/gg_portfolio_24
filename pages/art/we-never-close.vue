<script setup>
const art = ref({
  id: 1,
  title: "Maravilla Handball Court",
  image: "/art/maravilla.webp",
  link: "/art/maravilla-handball-court",
});
</script>
<template>
  <div class="art-information">
    <div>
      <NuxtImg :src="art.image" class="w-1/2" />
    </div>
  </div>
</template>
