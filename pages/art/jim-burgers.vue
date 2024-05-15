<script setup>
const art = ref({
  id: 1,
  title: "Maravilla Handball Court",
  image: "/art/maravilla.png",
  link: "/art/maravilla-handball-court",
});
</script>
<template>
  <div class="art-information">
    <div>
      <NuxtImg :src="art.image" />
    </div>
  </div>
</template>
