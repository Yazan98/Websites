<template>
  <div class="MainContainer">
    <!--Start Main Area-->
    <ToolbarComponent />
    <div class="MainArea">
      <p>Frontend Developer</p>
      <h1>Yazan Tarifi</h1>
      <p class="Description">
         I always try to build auxiliary tools to develop OOP Projects, Likes to build and modify open source projects
          , I have a complete passion and super fast learning when trying new technologies
         Solid Understanding of mobile and Software life cycle (SDLC) with all architectures for mobile frameworks
      </p>
      <button class="btn" onclick="window.open('https://github.com/Yazan98', '_blank');">About Me</button>
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <a href="https://www.linkedin.com/in/yazan-tarifi-106282192/" class="fa fa-linkedin"></a>
        </div>
        <div class="col-sm">
            <a id="GIthub" href="https://github.com/Yazan98" class="fa fa-github"></a>
        </div>
      </div>
    </div>
    </div>
    <!--End Main Area-->
  </div>
</template>

<script>

import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import { ParticlesBg } from "particles-bg-vue";
import VueParticles from 'vue-particles'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    ToolbarComponent,
    ParticlesBg
  }
};
</script>

<style scoped>
.MainContainer {
  background-color: #ECECF4;
  height: 700px;
  color: black;
  margin: 0%;
  font-family: 'Saira Semi Condensed', sans-serif;
}

#Item {
  color: black;
}

#MainToolbar {
  padding: 1em;
}

.MainArea {
  text-align: center;
  align-content: center;
  width: 50%; 
  text-align: start;
  vertical-align: middle;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}


h1 {
  margin: 0%;
  padding: 0%;
}

p {
  margin: 0%;
  padding: 0%;
  color:black;
}

.btn {
  background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  color: black;
    background-color: rgb(249, 215, 76);
    box-shadow: 0px 5px 20px 0px rgba(249, 215, 76, 0.5);
}

.container {
  padding: 20px;
  text-align: center;
}

.fa {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
    transition: 0.3s;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
  background-color: rgb(249, 123, 139);
  color: white;
  box-shadow: 0px 5px 20px 0px rgba(249, 123, 139, 0.5);
}

#GIthub {
  background: #007bb5;
  color: white;
  background-color: rgb(108, 108, 229);
    box-shadow: 0px 5px 20px 0px rgba(108, 108, 229, 0.5);
    color: white;
}

.col-sm {
  padding: 0%;
  margin: 0%;
}

.btn:hover {opacity: 1}

</style>
