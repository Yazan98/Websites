<template>
  <div class="hello">
    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div>
          <div id="NavBar" class="navbar navbar-transparent">
            <h5 class="my-0 mr-md-auto font-weight-normal">Destiny Admin</h5>
            <nav class="my-2 my-md-0 mr-md-3">
              <router-link to class="p-2 text-white">Home</router-link>
              <router-link to="/profiles" class="p-2 text-white">Profiles</router-link>
              <router-link to="/about" class="p-2 text-white">About</router-link>
              <router-link to="/profiles/register" class="btn btn-outline-primary">Register</router-link>
            </nav>
          </div>
        </div>
        <div class="container">
          <h1 class="display-3">Destiny Restaurant</h1>
          <p>Million Recipe At The System Register Now To Get Recipes, Create Orders, etc</p>
          <p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>
          </p>
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2019 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot;
          <a href="#">Terms</a>
        </p>
      </footer>
    </main>
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
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

img {
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  max-height: 250px;
  margin-bottom: 1rem;
}

.jumbotron {
  background-image: url("https://urbandine.templates.editmysite.com/uploads/8/9/5/0/89502725/background-images/39374136.png");
  height: 800px;
  vertical-align: middle;
  padding: 0%;
  background-repeat: no-repeat;
  background-position: undefined undefined;
  background-size: 100%;
  background-color: transparent;
  background-size: cover;
}

.container {
  padding-top: 5em;
  color: white;
}

#NavBar {
  color: white;
  padding: 20px;
}
</style>
