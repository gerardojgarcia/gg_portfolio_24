<script setup></script>
<template>
  <div class="flex flex-col md:flex-row dark:text-white">
    <div class="md:w-1/3 flex flex-col px-4 text-left md:pl-40 justify-center">
      <h1 class="text-5xl dark:text-white font-bold mb-16">Contact</h1>
      <p>email: mrgerardogarcia@icloud.com</p>
      <p>phone: 213-294-8744</p>

      <p>
        github:
        <NuxtLink to="https://github.com/gerardojgarcia" class="hover:text-red-200"
          >gerardojgarcia</NuxtLink
        >
      </p>
    </div>

    <!--Form Container-->
    <div class="md:w-3/4">
      <!--Form-->
      <form
        action="https://formsubmit.io/send/8ef1bf01-e6ae-43fb-b6dd-f05c4626513a"
        class="flex flex-col dark:border-white border-2 p-4 md:p-8 mx-4 md:w-2/3 m-auto mt-10 z-2"
      >
        <label for="name" class="dark:text-white text-black">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="please enter your first and last name"
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white"
          required
        />
        <label for="name" class="dark:text-white mt-4 text-black">Email</label>
        <input
          type="text"
          name="name"
          placeholder="please enter your email"
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white"
          required
        />

        <label for="textarea" class="dark:text-white mt-4"
          >What can I help you with?</label
        >
        <textarea
          name="textarea"
          id="message"
          cols="10"
          rows="5"
          class="border-2 dark:bg-black dark:text-white p-1 dark:border-white"
          placeholder="Tell me about your project"
          required
        ></textarea>

        <!--Form Button-->

        <button
          class="border-2 dark:bg-black dark:text-white p-1 py-2 duration-120 dark:border-white mt-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  min-height: 25rem;
}
</style>
