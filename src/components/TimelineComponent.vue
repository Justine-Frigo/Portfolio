<template>
     <div class="timeline">
       <div class="container left-container">
        <img src="../assets/images/book.png">
        <div class="text-box">
            <h2>
                Librarian-Documentalist Studies</h2>
                <small>2013 - 2017</small>
                <p>My journey began 11 years ago when I started a four-year program to become a librarian-documentalist at the Haute École de la Province de Liège. At the same time, I worked as a librarian at the Chiroux Library in Liège.</p>
                <span class="left-container-arrow"></span>
        </div>
       </div> 

       <div class="container right-container">
        <img src="../assets/images/world-book.png">
        <div class="text-box">
            <h2>
                Librarian</h2>
                <small>2017 - 2019</small>
                <p>After my studies, I started working as a librarian at Territoires de la Mémoire. I stayed there for two years and emerged greatly enriched by the experience.</p>
                <span class="right-container-arrow"></span>
        </div>
       </div> 
       <div class="container left-container">
        <img src="../assets/images/files.png">
        <div class="text-box">
            <h2>
                Administrative Assistant</h2>
                <small>2020 - 2021</small>
                <p>After my experience as a librarian, I quickly found a new job. I worked as an administrative assistant for the SPF Justice in Brussels. I stayed there for one year.</p>
                <span class="left-container-arrow"></span>
        </div>
       </div>
       <div class="container right-container">
        <img src="../assets/images/admin.png">
        <div class="text-box">
            <h2>
                Medical Secretary</h2>
                <small>2022 - 2023</small>
                <p>After my last job, I decided to change careers. After some research, I found a medical secretary training program in Charleroi. Considering my previous jobs, I thought it could be a logical continuation. I enrolled, passed the selection process, and embarked on a year of intensive training, including a one-month internship. In the end, I realized it wasn't exactly what I wanted to do, but I persevered and earned my diploma.</p>
                <span class="right-container-arrow"></span>
        </div>
       </div> 

       <div class="container left-container">
        <img src="../assets/images/web.png">
        <div class="text-box">
            <h2>
                Web Developer</h2>
                <small>03/2024 - 10/2024</small>
                <p>Here I am, back to square one. I decided to make a complete change of direction. After researching possible training programs in the tech field, I discovered BeCode. I enrolled in their web developer training, passed the selection process, and started the program in March 2024.</p>
                <span class="left-container-arrow"></span>
        </div>
       </div> 

       <div class="container right-container">
        <img src="../assets/images/search.png">
        <div class="text-box">
            <h2>
                Today</h2>
                <small>...</small>
                <p>Today, I am nearing the end of my training. I am looking for an internship of up to three months, starting around October 14th, to apply everything I have learned during these seven months of intensive training.</p>
                <span class="right-container-arrow"></span>
        </div>
       </div> 
    
    
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'TimelineComponent',
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
  
<style scoped>

.timeline{
    position: relative;
    max-width: 1200px;
    margin: 100px auto;
}

.container{
    padding: 10px 50px;
    position: relative;
    width: 50%;
   animation: movedown 1s linear forwards;
   opacity: 0;
}

@keyframes movedown{
   0%{
    opacity: 1;
    transform: translateY(-30px);
   } 

   100%{
    opacity: 1;
    transform: translateY(0px);
   } 
}

.container:nth-child(1){
    animation-delay: 0s;
}

.container:nth-child(2){
    animation-delay: 1s;
}

.container:nth-child(3){
    animation-delay: 2s;
}

.container:nth-child(4){
    animation-delay: 3s;
}

.container:nth-child(5){
    animation-delay: 4s;
}

.container:nth-child(6){
    animation-delay: 5s;
}

.text-box{
   padding: 20px 30px;
   background: #f1f5f9;
   position: relative;
   border-radius: 6px;
   font-size: 15px;
}

.left-container{
    left: 0;  
}

.right-container{
    left: 50%;
}

.container img{
    position: absolute;
    width: 40px;
    border-radius: 50%;
    right: -20px;
    top: 32px;
    z-index: 10;
}

.right-container img{
   left: -20px;
}

.timeline::after{
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    background: #f1f5f9;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 6s linear forwards;
}

@keyframes moveline {
    0%{
       height: 0; 
    }

    100%{
        height: 100%;
    }
}

.text-box h2{
   font-weight: 600; 
}

.text-box small{
    display: inline-block;
    margin-bottom: 15px;
}

.left-container-arrow{
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #f1f5f9;
    right: -15px;
}

.right-container-arrow{
    height: 0;
    width: 0;
    position: absolute;
    top: 28px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #f1f5f9;
    left: -15px;
}
 
</style>