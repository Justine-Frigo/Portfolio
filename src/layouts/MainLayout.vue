<template>
  <header class="bg-indigo-950 text-slate-50 p-6 relative before:content-['*'] before:absolute before:bottom-0 before:w-full  before:bg-gradient-to-t before:from-slate-950 before:to-indigo-950 before:text-transparent before:left-0">
    <nav class="flex justify-center space-x-7">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Skills' }">Skills</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </nav>
  </header>
  <main class="flex-1">
    <router-view></router-view>
  </main>
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

<style>
#meskoyes {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #0a2a43, transparent);
  z-index: 10000;
}
</style>