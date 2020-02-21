<template>
    <div class="ToolbarComponent">
         <!--Start Toolbar-->
    <nav class="navbar navbar-expand-lg bg-light" id="MainToolbar">
      <a class="navbar-brand" id="Item" href="#">Personal Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" id="Item"><router-link to="/" class="p-2 text-white">Home</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="Item"><router-link to="/projects" class="p-2 text-white">Projects</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" id="Item"><router-link to="/skills" class="p-2 text-white">Skills</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" id="Item"><router-link to="/contact" class="p-2 text-white">Contact</router-link><span class="sr-only">(current)</span></a>
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
    </div>
</template>


<style scoped>
.MainContainer {
  background-color: #262626;
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
  color: #7F7F7F;
}

</style>
