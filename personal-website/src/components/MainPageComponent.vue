<template>
  <div class="MainContainer">
    <!--Start Toolbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent" id="MainToolbar">
      <a class="navbar-brand" id="Item" href="#">Personal Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" id="Item" href="#"><router-link to="" class="p-2 text-white">Home</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="Item" href="#"><router-link to="/projects" class="p-2 text-white">Projects</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" id="Item" href="#"><router-link to="/skills" class="p-2 text-white">Skills</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!--End Toolbar-->

    <!--Start Main Area-->
    <div class="MainArea">
      <p>Frontend Developer</p>
      <h1>Yazan Tarifi</h1>
      <p>
         I always try to build auxiliary tools to develop OOP Projects ... Likes to build and modify open source projects
          ... I have a complete passion and super fast learning when trying new technologies
         Solid Understanding of mobile and Software life cycle (SDLC) with all architectures for mobile frameworks
      </p>
    </div>
    <!--End Main Area-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.MainContainer {
  background-color: #262626;
  height: 500px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

#Item {
  color: white;
}

#MainToolbar {
  padding: 1em;
}

#MainArea {
  text-align: center;
  align-content: center;
  width: 50%; 
  padding: 2em;
  text-align: center;
  vertical-align: middle;
  line-height: 90px; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
