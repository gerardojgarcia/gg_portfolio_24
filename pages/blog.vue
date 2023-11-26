<script setup>
const posts = ref([
    {
        id: 1,
        title: "Getting started in Web Development",
        link: '/blog/post-1',
    },
    {
        id: 2,
        title: "What is HTML?",
        link: '/blog/post-2',
    },


])


</script>
<template>
    <div>
        <h1 class="text-4xl text-black dark:text-white">Let's Talk About Web Dev</h1>

        <nav v-for="post in  posts " :key="posts.id">
            <NuxtLink :to="post.link" class="focus:text-red-300">{{ post.title }} </NuxtLink>

        </nav>

        <NuxtPage />

    </div>
</template>