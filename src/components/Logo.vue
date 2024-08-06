<template>
   
    <div>
      <img class="hex" src="../assets/img/Logo.png" alt="Logo">
    </div> 
   
  </template>
  
  <script>
  
  export default {
    name: 'Logo',
    data() {
      return {
      }
    },
    computed: {},
    mounted() {
    },
    methods: {}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hex {
  display: flex;
  position: relative;
  width: 310px;
  height: 335px;
  background-color: #424242;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

@media screen and (max-width: 600px) {
  .hex{
    width: 280px;
    height: 305px;
    margin-bottom: 30px;
  }
}
</style>