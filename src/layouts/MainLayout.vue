<template>
    <header class="bg-slate-900 text-slate-50 p-6">
        <nav class="flex justify-center space-x-7">
          <router-link :to="{name: 'Home'}">Home</router-link>
          <router-link :to="{name: 'About'}">About</router-link>
          <router-link :to="{name: 'Skills'}">Skills</router-link>
          <router-link :to="{name: 'Projects'}">Projects</router-link>
          <router-link :to="{name: 'Contact'}">Contact</router-link>
        </nav>
    </header> 
    <router-view ></router-view>
    <!-- <footer>
      &copy; Justine Frigo
    </footer> -->
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

  