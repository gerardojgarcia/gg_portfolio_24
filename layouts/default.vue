<script setup></script>
<template>
  <div class="dark:bg-black h-screen overflow-hidden grid grid-cols-1 grid-rows-2">
    <slot class="row-start-1" />
    <TheHero class="col-span-1 row-start-2" />
    <TheNave class="col-span-1 row-start-2" />
  </div>
</template>
