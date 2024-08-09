<script setup lang="ts"></script>

<template>
    <div class="mt-16 w-60 space-x-8 self-end">
        <button
            @click="scrollLeft"
            class="btn-left cursor-pointer focus:scale-90 focus:bg-red-200 rounded-xl bg-white"
        >
            <Icon
                name="ri:arrow-left-line"
                color="black"
                class="text-5xl"
            /></button
        ><button
            @click="scrollRight"
            class="btn-right focus:scale-90 focus:bg-red-200 rounded-xl bg-white"
        >
            <Icon name="ri:arrow-right-line" color="black" class="text-5xl" />
        </button>
    </div>
</template>

<style scoped></style>
