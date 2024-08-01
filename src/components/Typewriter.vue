<template>
  <div class="flex flex-row items-center justify-around">
    <div class="container text-slate-50 m-auto">
      <span class="text first-text">Hi, </span><br>
      <span class="text first-text">I'm Justine </span><br>
      <!-- <span class="text first-text">I'm a </span> -->
      <span class="text sec-text" ref="sec_text">Web Dev</span>
    </div>

    <Logo/>
  </div>

</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Typewriter',
  components: {
    Logo,
  },
  data() {
    return {
    }
  },
  computed: {},
  mounted() {
    const text = this.$refs.sec_text;
    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Web Dev";
      }, 0);
      setTimeout(() => {
        text.textContent = "Fullstack Dev";
      }, 3000);
      setTimeout(() => {
        text.textContent = "Vue.js Dev";
      }, 6000); //1s = 1000 milliseconds
    }
    textLoad();
    setInterval(textLoad, 9000);

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
  color: #4f46e5;
  font-size: 60px;
  font-weight: 700;
}

.container .text.first-text {
  color: #f8fafc;
}

.text.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #09090b;
  border-left: 2px solid #4f46e5;
  animation: animate 3s steps(12) infinite;
}

@keyframes animate {

  40%,
  60% {
    left: calc(100% + 4px);
  }

  100% {
    left: 0%;
  }
}
</style>