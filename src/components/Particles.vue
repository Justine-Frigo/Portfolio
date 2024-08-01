<template>
  <div id="particles-js" class="h-full bg-zinc-950 absolute left-0 top-0 -z-[5] w-full"></div>
</template>

<script>

export default {
  name: 'Particles',
  data() {
    return {
    }
  },
  computed: {},
  mounted() {
    particlesJS.load('particles-js', '../../particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>