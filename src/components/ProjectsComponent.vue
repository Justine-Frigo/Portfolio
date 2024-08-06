<template>
    <section class="flex-1 flex flex-col items-center w-4/5 m-auto">
    <h2 class="text-center text-4xl font-bold text-slate-50 mt-10 mb-10">Projects</h2>
    <article
        class="w-full h-full mx-auto justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-16 flex flex-col text-center mt-10 mb-10">
        <div
            class="shadow-md shadow-zinc-900 rounded-lg w-full mx-auto bg-zinc-800 h-full flex flex-col justify-around" v-for="(project, index) in projects" :key="index">
            <h3 class="text-slate-50 text-xl font-semibold py-2">{{ project.name }}</h3>
            <img :src="project.img" class="w-full h-40 object-cover" >
            <p class="text-slate-50 font-medium py-2 px-2 text-justify">{{ project.short_description }}</p>
            <div class="grid grid-cols-2 mt-4">
                <div v-for="(techno, techIndex) in project.technos" :key="techIndex" class="text-sm m-2 bg-indigo-500 py-1 min-w-1/2 rounded-xl text-slate-50">{{ techno }}</div>
             
            </div>
            <div class="flex flex-row justify-around">
                <a class="bg-indigo-600 p-2 my-4 w-1/3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-md text-slate-50"
                    :href="project.code" target="_blank">Code</a>
                    <a v-if="project.demo" class="bg-indigo-600 p-2 my-4 w-1/3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-md text-slate-50"
                    :href="project.demo" target="_blank">Demo</a>
            </div>
        </div>
    </article>
</section>

</template>

<script>

import axios from 'axios';
export default {
    name: 'ProjectsComponent.vue',
    data() {
        return {
            projects: null,
        }
    },
    computed: {},
    async mounted() {
        this.projects = await this.getProjects()
    },
    methods: {
        async getProjects() {
            try {
                const response = await axios.get("../../mock/projects.json");
                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>


<style scoped></style>