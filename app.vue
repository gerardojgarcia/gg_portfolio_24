<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

/* entering start */
.page-enter {
  left: -100%;
}

/* entering end */
.page-enter-to {
  left: 0;
}

/* leaving start */
.page-leave {
  opacity: 1;
}

/* leaving end */
.page-leave-to {
  opacity: 0;
}

.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
}
</style>
