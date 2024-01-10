<script setup></script>
<template>
  <section class="dark:text-white">
    <div class="ml-60">
      <h1 class="text-5xl dark:text-white font-bold mt-16 pb-8">About</h1>
      <div class="about-me flex space-x-16">
        <div class="w-1/4">
          <NuxtImg
            src="/profile_pic_2.png"
            lazy
            format="webp"
            alt="Black and white photograph of Gerardo Garcia"
          />
        </div>
        <div class="personal-bio w-1/2">
          <div class="space-y-4 space-y-auto z-10">
            <strong class="text-3xl">Hi!</strong>
            <p>
              My name is Gerardo! I am a full stack developer specializing in SSR
              frameworks like Nuxt.js and Laravel.
            </p>
            <p>
              I began my development career by establishing an online presence for a small
              cleaning business, Oranges and Lemons, using "no-code" solutions like Weebly
              and Zapier. Our innovative website design and features, including SMS
              notifications and live tracking, contributed to over $1 million USD in sales
              by offering clients a modern and hassle-free cleaning service experience.
            </p>
            <p>
              Since then, I've taken the initiative to teach myself coding, mastering
              HTML, CSS, and JavaScript. Progressing further, I've expanded my skills to
              build diverse websites using frameworks like Vue.js and Laravel, showcasing
              a versatile proficiency in web development.
            </p>
          </div>
          <div class="pt-6 h-52 mt-4 overflow-y-auto">
            <div class="flex space-x-6">
              <ul class="mt-1 mb-6">
                <strong class="text-2xl">UI/UX Design</strong>
                <li>Research</li>
                <li>UX Design</li>
                <li>Prototyping</li>
                <li>Web/App Design</li>
                <li>Development support</li>
              </ul>
              <ul class="mt-1">
                <strong class="text-2xl">Development</strong>
                <li>Product Architecture</li>
                <li>Full Stack</li>
                <li>Mockup to HTML</li>
                <li>CMS</li>
                <li>Maintenance & Updating</li>
              </ul>
              <ul class="mt-1 mb-6">
                <strong class="text-2xl">Languages</strong>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
              <ul class="mt-1">
                <strong class="text-2xl">Frameworks</strong>
                <li>TailwindCSS</li>
                <li>Vue.js</li>
                <li>Nuxt.js</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div>
              <strong class="text-4xl">Experience</strong>
              <strong>Telos Truck</strong>
              <p class="experience-dates">Example</p>
              <p class="experience-title">Example</p>
              <ul class="experience-descriptiion">
                <li class="experience-description-details">example</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.personal-bio p {
  font-size: 90%;
}
</style>
