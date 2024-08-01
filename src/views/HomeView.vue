<template>
  <section>
    <Particles />
    <span class=" text-white">
      coucou
    </span>
  </section>
</template>
<script>

import Particles from '@/components/Particles.vue';

export default {
  name: 'HomeView.vue',
  components: {
    Particles,
  },
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>