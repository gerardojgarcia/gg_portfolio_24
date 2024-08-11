<script setup></script>
<template>
    <div class="absolute navigation-container w-full flex justify-between px-6 dark:text-white items-center">
    <strong class="text-xl">Gerardo Garcia</strong>
        <nav class="lg:space-x-6 dark:text-white  p-2 text-xl font-bold">
            <NuxtLink class="nav-link" to="/">Work</NuxtLink>
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            <NuxtLink class="nav-link" to="/art/collection">Art</NuxtLink>
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>

            <!--<NuxtLink class="nav-link" to="/music">Music</NuxtLink>-->

            <!--<NuxtLink class="nav-link focus:text-red-300" to="/blog/post-1">Blog</NuxtLink>-->
        </nav>
    </div>
</template>
<style scoped>


.nav-link:hover {
    color: rgb(198, 142, 142);
    transition-duration: 500ms;
    cursor: pointer;
}

.router-link-active {
    color: rgb(198, 142, 142);
}
</style>
