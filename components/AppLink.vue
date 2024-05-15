<script setup>

defineProps({
    title: String,
    link: String,

}) 


</script>

<template>
    <div class="m-4">
        <NuxtLink :to="link" id="app-btn" class="rounded-sm border-black border-4 p-3 duration-500 ">{{ title }} </NuxtLink>
    </div>




</template>
<style scoped>

#app-btn {
    background-color: #F8D6B3;
}

#app-btn:hover {
    box-shadow: 4px 6px black;
    
} 



</style>
