<script setup>
const art = ref({
    id: 1,
    title: "Maravilla Handball Court",
    image: "/art/maravilla.webp",
    link: "/art/maravilla-handball-court",
    price: "1",
    descr: "This is a handball court in Maravilla, East Los Angeles. The court is located in a residential neighborhood and is a popular spot for local handball players.",
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
                    {{ art.descr }}
                </p>

                <!--Buy Print Button-->
                <div class="print-sizes">
                    <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 focus:bg-black focus:text-white dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        SM
                    </button>
                    <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 focus:bg-black focus:text-white dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        MD
                    </button>
                    <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 focus:bg-black focus:text-white dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        LG
                    </button>
                    <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 focus:bg-black focus:text-white dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        X-LG
                    </button>
                </div>
                <div class="item-quantity">
                    <label for="quantity">Number of Prints</label>
                    <input
                        type="number"
                        class="border-black border-2 ml-4 p-2 rounded-full w-16"
                    />
                </div>
                <!-- Digital Download Buy button -->
                <div class="flex w-1/2 items-center mt-8">
                    <p class="price text-2xl mr-4">${{ art.price }}</p>
                    <button>Digital Download</button>
                </div>
            </div>
        </div>
    </div>
</template>
