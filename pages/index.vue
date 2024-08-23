<script setup></script>
<template>
    <div>
        <TheTagline />
        <div class="grid md:grid-cols-2">
            <TheProjectCarousel />
            <div class="h-1/2 mt-32 space-y-8 scroll-y-auto">
                <strong class="text-5xl dark:text-white">Latest Commits</strong>
                <GitSealCommits />
                <GitTreeCommits />
                <GitHubCommits />
                <GitGeoCommits />

                <div class="hidden md:block icon-links w-full p-6">
                    <a href="https://github.com/gerardojgarcia" target="_blank"
                        ><Icon
                            name="ri:github-line"
                            style="color: black"
                            class="text-xl w-12 h-12 bg-gray-100 rounded-full p-2 hover:shadow-2xl hover:bg-white"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
