<script setup>
const collection = ref([
    {
        id: 1,
        title: "Illustrations",
        link: "/art/illustrations",
        image: "/art/steps.webp",
    },
    {
        id: 2,
        title: "East Los Angeles/ Boyle Heights",
        link: "/art/east-los-angeles-illustrations",
        image: "/art/maravilla.webp",
    },
    {
        id: 3,
        title: "Architecture",
        link: "/art/architecture",
        image: "/art/falling_water_1.webp",
    },
]);
</script>
<template>
    <div
        class="art-container h-screen mt-24 grid lg:grid-cols-3 gap-2 overflow-y-auto dark:text-white"
    >
        <NuxtLink
            :to="art.link"
            v-for="art in collection"
            :key="art.id"
            class="hover:shadow-xl p-4 duration-100 dark:hover:text-red-200 group"
        >
            <div class="flex flex-col items-center justify-items-center h-auto">
                <p
                    class="art-title group-hover:text-red-400 font-bold text-2xl durtation-150"
                >
                    {{ art.title }}
                </p>
                <NuxtImg
                    :src="art.image"
                    height="900px"
                    preload
                    :alt="art.alt"
                ></NuxtImg>
            </div>
        </NuxtLink>
    </div>
</template>
<style>
.art-container {
    height: 75vh;
}
</style>
