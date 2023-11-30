<script setup></script>
<template>
  <div class="flex items-center">
    <div class="w-1/4">
      <h1 class="text-5xl dark:text-white font-bold mt-32 ml-32">Contact</h1>
    </div>
    <div class="w-3/4 flex justify-center">
      <form action="submit" class="w-1/2 flex flex-col dark:border-white border-2 p-8 mt-20 z-2">

        <label for="name" class="dark:text-white text-black">Full
          Name</label><input type="text" name="name" placeholder="please enter your first and last name"
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white" required>
        <label for="name" class="dark:text-white text-black">Email</label><input type="text" name="name"
          placeholder="please enter your email" class="border-2 dark:bg-black dark:text-white p-1 dark:border-white"
          required>

        <label for="textarea" class="dark:text-white ">What can I help you with?</label>
        <textarea name="textarea" id="message" cols="20" rows="7"
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white" placeholder="Tell me about your project"
          required></textarea>


        <button
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white mt-8 dark:hover:bg-white dark:hover:text-black">Submit</button>




      </form>


    </div>
  </div>
</template>

<style scoped>
label {
  margin-top: 1.2rem;
  margin-bottom: .4rem;
}
</style>
