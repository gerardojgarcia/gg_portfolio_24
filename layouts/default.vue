<script setup></script>
<template>
    <div class="dark:bg-black h-screen overflow-hidden relative flex flex-col">
        <slot />
        <TheHero class="-z-10" />
        <TheNave />
    </div>
</template>
