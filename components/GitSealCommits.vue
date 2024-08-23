<script setup>
import { ref, onMounted } from "vue";
import { Octokit, App } from "octokit";

const commits = ref([]);
const fetchSolarCommits = async () => {
    try {
        const octokit = new Octokit({
            auth: import.meta.env.VUE_APP_GITHUB_TOKEN, // Use environment variable for token
        });

        const response = await octokit.request(
            "GET /repos/{owner}/{repo}/commits",
            {
                owner: "gerardojgarcia",
                repo: "sealtechpro",
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            },
        );

        console.log(response.data);
        commits.value = response.data;
    } catch (error) {
        console.error("Error fetching commits:", error);
    }
};

onMounted(fetchSolarCommits);
</script>
<template>
    <div class="dark:text-white">
        <p class="text-3xl">SealTechPro</p>
        <ul>
            <li
                v-for="commit in commits.slice(0, 3)"
                :key="commit.sha"
                class="flex space-x-4"
            >
                <p>
                    {{ new Date(commit.commit.author.date).toLocaleString() }}
                </p>
                <p>{{ commit.commit.message }}</p>
            </li>
        </ul>
    </div>
</template>
<style>
h1 {
    font-size: 2rem;
}
</style>
