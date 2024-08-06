<template>
    <div id="about-section" class=" bg-zinc-950 w-4/5 flex flex-col items-center m-auto text-slate-50">
        <h2 class="text-center text-4xl font-bold text-indigo-600 mt-10 mb-10">Profile</h2>
        <p class="text-justify text-xl mb-10">Hi, my name is Justine Frigo, and after several years in the world of
            libraries and administration, I recently decided to switch to <span
                class="text-indigo-600 font-extrabold">web development</span>. Currently focusing on <span
                class="text-indigo-600 font-extrabold">front-end</span> development, I specialize in <span
                class="text-indigo-600 font-extrabold">VueJs</span> and <span
                class="text-indigo-600 font-extrabold">TailwindCSS</span>, but I aim to become <span
                class="text-indigo-600 font-extrabold">full-stack</span> in the future.</p>
        <h2 class="text-center text-4xl font-bold text-indigo-600 mb-10">Education</h2>
        <p class="text-justify text-xl mb-10">I completed an intensive training program at <span
                class="text-indigo-600 font-extrabold">BeCode</span>, a Belgian non-profit
            organization dedicated to training for digital professions. <span
                class="text-indigo-600 font-extrabold">BeCode</span> stands out for its active, <span
                class="text-indigo-600 font-extrabold">project-based
                pedagogy</span>, offering practical and collaborative immersion in web development and other digital
            disciplines.
        </p>
        <h2 class="text-center text-4xl font-bold text-indigo-600 mb-10">Professional Objectives</h2>
        <p class="text-justify text-xl mb-10">I am currently seeking a <span
                class="text-indigo-600 font-extrabold">3-month internship</span> starting around October 14th.
            During my time at <span class="text-indigo-600 font-extrabold">BeCode</span> and beyond, I am motivated to
            acquire all the necessary <span class="text-indigo-600 font-extrabold">skills</span> (technical or soft
            skills) to excel in this new field. However, I also strive to leverage my <span
                class="text-indigo-600 font-extrabold">previous experience</span> in my future
            new profession.</p>
           
        <h2 class="text-center text-4xl font-bold text-indigo-600 mb-10">Contact</h2>
        <div class="socials flex flex-row items-center gap-16 mb-10">
            <div class="flex flex-row items-center gap-2">
            <a href="https://github.com/Justine-Frigo" target="_blank"><img
                    src="../assets/img/github-brands-solid.svg"></a>
                    <a href="https://github.com/Justine-Frigo" target="_blank">Github</a>
                </div>
                <div class="flex flex-row items-center gap-2">
            <a href="https://www.linkedin.com/in/justine-frigo/" target="_blank"><img
                    src="../assets/img/linkedin-brands-solid.svg"></a>
                    <a href="https://www.linkedin.com/in/justine-frigo/" target="_blank">Linkedin</a>
                    </div>

            <div class="flex flex-row items-center gap-2">
                <a href="mailto:justine0912@gmail.com" target="_blank"><img src="../assets/img/envelope-solid.svg"></a>
                <a href="mailto:justine0912@gmail.com" target="_blank">justine0912@gmail.com</a>
            </div>
        </div>
    </div>


</template>

<script>

export default {
    name: 'AboutSection',
    data() {
        return {
        }
    },
    computed: {},
    mounted() {
    },
    methods: {}
}
</script>


<style scoped>
img {
    width: 46px;
    height: 46px;
}

@media screen and (max-width: 600px) {

    .socials{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
}
</style>