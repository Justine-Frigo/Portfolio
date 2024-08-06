<template>
  <div class="flex flex-row items-center justify-around">
    <div class="container text-slate-50 m-auto">
      <span class="text first-text">Hi, </span><br>
      <span class="text first-text">I'm Justine </span><br>
      <vue-writer :array="arr" :caret="underscore" :delay="1000" :typeSpeed="100" :eraseSpeed="50" />
    </div>

    <Logo />
  </div>

</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'TypewriterComponent',
  components: {
    Logo,
  },
  data() {
    return {
      arr: [
        'Web Dev', 'Frontend Dev', 'Vue.js Dev'
      ]
    }
  },
  computed: {},
  mounted() {
    
  },
  methods: {

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 33%;
  overflow: hidden;
}

.container .text {
  position: relative;
  font-size: 54px;
  font-weight: 700;
}

.is-typed {
  font-family: 'Poppins', sans-serif;
  font-size: 54px;
  font-weight: 700;
  color: #4f46e5;

}

.container .text.first-text {
  color: #f8fafc;
}
</style>