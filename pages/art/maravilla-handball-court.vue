<script setup>
const art = ref({
  id: 1,
  title: "Maravilla Handball Court",
  image: "/art/maravilla.webp",
  link: "/art/maravilla-handball-court",
  price: "1",
});
</script>
<template>
  <div class="art-information dark:text-white">
    <div class="flex items-center">
      <div class="w-1/2">
        <NuxtImg :src="art.image" height="900px" />
      </div>
      <div class="w-1/2 border-2 border-black p-16">
        <!-- Title -->
        <h1 class="text-4xl font-bold mb-3">{{ art.title }}</h1>

        <!-- Description -->
        <p class="text-lg py-8">
          This is a handball court in Maravilla, East Los Angeles. The court is located in
          a residential neighborhood and is a popular spot for local handball players.
        </p>

        <!--Buy Print Button-->

        <!-- Digital Download Buy button -->
        <div class="space-y-4 flex flex-col w-1/2">
          <p class="price text-2xl">${{ art.price }}</p>
          <a
            target="_top"
            href="https://studiogg.dpdcart.com/cart/buy?product_id=238443&amp;product_price_id=260149&amp;quantity=1&amp;use_cart=0"
            class="border-2 border-black p-2 text-center hover:bg-black hover:text-white dark:text-white"
            >Full-Size Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
