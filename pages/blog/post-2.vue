<script setup>

const blog = ref([{

    title: 'Getting Started in Web Development'
}
])



</script>
<template>
    <div>
        <h1>{{ blog.title }}</h1>

        <section class="text-black">
            <strong></strong>
            <p>The Foundation: HTML, CSS, and JavaScript
                HTML - The Architect of the Web

                HTML, or HyperText Markup Language, serves as the fundamental building block of any web page. It provides
                the structure, defining elements such as headings, paragraphs, and images. Learning HTML is akin to
                understanding the blueprint of a house — an essential foundation on which the entire structure is built.
                CSS - Adding Style and Elegance

                Cascading Style Sheets (CSS) is the designer's toolkit, allowing you to enhance the visual appeal of your
                web pages. With CSS, you can control layout, colors, and fonts, transforming a simple HTML structure into a
                visually stunning and user-friendly interface.
                JavaScript - Bringing Interactivity to Life

                JavaScript breathes life into the static world of HTML and CSS. As a scripting language, it enables dynamic
                content, interactivity, and responsiveness. From form validations to creating dynamic elements, JavaScript
                is the magic wand that turns a static website into a dynamic, engaging experience.</p>



        </section>
    </div>
</template>