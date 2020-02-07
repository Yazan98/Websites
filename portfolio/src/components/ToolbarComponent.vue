<template>
  <header>
    <div class="toolbar">
      <div class="topnav" id="myTopnav">
        <router-link to="" class="Link" id="active">Home</router-link>
        <router-link to="/projects" class="Link">Projects</router-link>
        <router-link to="/contact" class="Link">Contact</router-link>
        <router-link to="/about" class="Link">About</router-link>
      </div>
      <router-view/>
    </div>
  </header>
</template>

<style scoped>
.topnav {
  background-color: #fff;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav .Link {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav .Link:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav .Link.active {
  background-color: #4caf50;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav .Link:not(:first-child) {
    display: none;
  }
  .topnav .Link.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .Link.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive .Link {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
