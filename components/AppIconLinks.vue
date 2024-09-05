<script setup></script>
<template>
    <div class="space-y-4">
        <strong class="text-5xl dark:text-white">Latest Commits</strong>
        <GitSealCommits />
        <GitTreeCommits />
        <GitHubCommits />
        <GitGeoCommits />

        <div class="hidden md:block icon-links w-full p-6 space-x-4">
            <a href="https://github.com/gerardojgarcia" target="_blank"
                ><Icon
                    name="ri:github-line"
                    style="color: black"
                    class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                />
            </a>
            <a href="https://github.com/gerardojgarcia" target="_blank"
                ><Icon
                    name="ri:vuejs-line"
                    style="color: black"
                    class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                />
            </a>
            <a href="https://github.com/gerardojgarcia" target="_blank"
                ><Icon
                    name="ri:html5-line"
                    style="color: black"
                    class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                />
            </a>
            <a href="https://github.com/gerardojgarcia" target="_blank"
                ><Icon
                    name="ri:css3-line"
                    style="color: black"
                    class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                />
            </a>
            <a href="https://github.com/gerardojgarcia" target="_blank"
                ><Icon
                    name="ri:javascript-line"
                    style="color: black"
                    class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                />
            </a>
        </div>
    </div>
</template>
