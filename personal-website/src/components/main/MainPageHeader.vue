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
    </div>
    <!--End Main Area-->
  </div>
</template>

<script>

import ToolbarComponent from '@/components/common/ToolbarComponent.vue'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    ToolbarComponent
  }
};
</script>

<style scoped>
.MainContainer {
  background-color: #262626;
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

h1 {
  margin: 0%;
  padding: 0%;
}

p {
  margin: 0%;
  padding: 0%;
  color: #7F7F7F;
}

</style>
