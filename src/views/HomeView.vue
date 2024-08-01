<template>
  <section>
    <Particles />
    <Typewriter />
  </section>
</template>
<script>

import Particles from '@/components/Particles.vue';
import Typewriter from '@/components/Typewriter.vue';

export default {
  name: 'HomeView.vue',
  components: {
    Particles,
    Typewriter,
  },
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>