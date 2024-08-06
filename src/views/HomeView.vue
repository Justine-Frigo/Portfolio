<template>
  <div class="flex flex-col justify-center items-center my-24 h-[70vh]">
    <section class="w-4/5 m-auto flex flex-col justify-center">
      <Particles />
      <TypewriterComponent />
    </section>
    <AboutButton />

  </div>
  <div class="bg-zinc-950 pt-8">
    <AboutSection />
  </div>
</template>
<script>

import Particles from '@/components/Particles.vue';
import TypewriterComponent from '@/components/TypewriterComponent.vue';
import AboutButton from '@/components/AboutButton.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
  name: 'HomeView.vue',
  components: {
    Particles,
    TypewriterComponent,
    AboutButton,
    AboutSection,
  },
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {}
}
</script>

<style scoped>

@media  screen and(max-width: 600px) {
  
}

</style>