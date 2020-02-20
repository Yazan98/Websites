<template>
  <div class="MainContainer">
    <!--Start Main Area-->
    <particles-bg color="#262626" type="random" :bg="true" />
    <ToolbarComponent />
    <div class="MainArea">
      <p>Frontend Developer</p>
      <h1>Yazan Tarifi</h1>
      <p class="Description">
         I always try to build auxiliary tools to develop OOP Projects, Likes to build and modify open source projects
          , I have a complete passion and super fast learning when trying new technologies
         Solid Understanding of mobile and Software life cycle (SDLC) with all architectures for mobile frameworks
      </p>
      <button class="btn" onclick="window.open('https://github.com/Yazan98', '_blank');">Github Account</button>
    </div>
    <!--End Main Area-->
  </div>
</template>

<script>

import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import { ParticlesBg } from "particles-bg-vue";

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
  /* background-color: #262626; */
  height: 700px;
  color: white;
  margin: 0%;
  font-family: 'Saira Semi Condensed', sans-serif;
}

#Item {
  color: white;
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

.MainArea:focus {
    border: 3px solid #cc0000;
}

h1 {
  margin: 0%;
  padding: 0%;
}

p {
  margin: 0%;
  padding: 0%;
  color: #7F7F7F;
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
}

.btn:hover {opacity: 1}

</style>
