<script setup>
import projects from "/data/projects.js";
function scrollLeft() {
    document.querySelector(".project-carousel").scrollLeft -= 1000;
}

function scrollRight() {
    document.querySelector(".project-carousel").scrollLeft += 1000;
}
</script>
<template>
    <section class="flex flex-col z-10 mt-24">
        <!--Project Carousel-->
        <div
            class="project-carousel flex flex-col h-[45rem] md:grid md:grid-cols-3 gap-6 px-4 md:px-16 py-8 overflow-y-scroll scroll-smooth"
        >
            <!--Project Card-->
            <a
                class="cursor-pointer"
                :href="project.link"
                target="_blank"
                v-for="project in projects"
                :key="project.id"
            >
                <div
                    class="project-card flex flex-col bg-orange-100 odd:bg-blue-100 last:bg-red-100 first:bg-yellow-200 overflow-hidden hover:shadow-xl"
                >
                    <div>
                        <nuxt-img
                            :src="project.img"
                            class="max-h-80 p-8 hover:scale-110 duration-150"
                            sizes="sm:100vw md:100vw lg:100vw"
                            format="webp"
                            preload
                        ></nuxt-img>
                    </div>
                    <div class="bg-white dark:bg-black">
                        <p
                            class="project-name mt-3 font-bold pl-1 py-2 dark:text-white"
                        >
                            {{ project.name }}
                        </p>
                    </div>
                </div>
            </a>
        </div>

        <!---->

        <!---->
    </section>
</template>
<style scoped>
.project-card {
    max-width: 35rem;
}

.project-carousel::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.project-carousel {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
