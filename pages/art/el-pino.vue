<script setup>
const art = ref({
    id: 1,
    title: "El Pino",
    image: "/art/el_pino_.webp",
    link: "/art/el-pino",
});
</script>
<template>
    <div class="art-information">
        <div class="flex items-center">
            <div class="w-1/2">
                <NuxtImg :src="art.image" width="900px" />
            </div>
            <div class="w-1/2 border-2 dark:text-white border-black px-16">
                <!-- Title -->
                <h1 class="text-4xl font-bold">{{ art.title }}</h1>
                <!-- Description -->
                <p class="text-lg py-6">
                    El Pino is a community landmark in East Los Angeles. The
                    tree is located at the top of hill and is visible from many
                    parts of the city.
                </p>
                <!-- Buy button -->
                <a
                    target="_top"
                    href="https://studiogg.dpdcart.com/cart/buy?product_id=238443&amp;product_price_id=260149&amp;quantity=1&amp;use_cart=0"
                    class="border-2 border-black dark:border-white dark:hover:bg-white dark:hover:text-black p-2 text-center hover:bg-black hover:text-white"
                    >Buy</a
                >
            </div>
        </div>
    </div>
</template>
