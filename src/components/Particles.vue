<template>
  <div id="particles-js" class="h-full bg-slate-950">
  </div>
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