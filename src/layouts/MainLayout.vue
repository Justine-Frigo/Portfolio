<template>
  <header class="bg-zinc-800 text-slate-50 p-6 relative before:content-['*'] before:absolute before:bottom-0 before:w-full  before:bg-gradient-to-t before:from-zinc-950 before:to-zinc-800 before:text-transparent before:left-0">
    <nav class="flex justify-center space-x-7">
      <router-link :to="{ name: 'Home' }" class="hover:border-b-2 hover:border-indigo-600">Home</router-link>
      <router-link :to="{ name: 'Timeline' }" class="hover:border-b-2 hover:border-indigo-600">Timeline</router-link>
      <router-link :to="{ name: 'Skills' }" class="hover:border-b-2 hover:border-indigo-600">Skills</router-link>
      <router-link :to="{ name: 'Projects' }" class="hover:border-b-2 hover:border-indigo-600">Projects</router-link>
      
    </nav>
  </header>
  <main class="w-full min-h-screen flex flex-col ">
    <router-view></router-view>
  </main>
  <footer class="bg-zinc-900 text-slate-50 p-2 text-center">
      &copy; 2024 - Justine Frigo
    </footer>
</template>

<script>
export default {
  name: 'MainLayout.vue',
  data() {
    return {
    }
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>

<style>
</style>