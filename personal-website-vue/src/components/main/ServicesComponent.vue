<template>
    <div class="ServicesComponent">
        <h5 class="Title">What I Do</h5>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   <div class="card" id="ItemOne">
                       <img src="https://img.icons8.com/cotton/64/000000/android-os.png">
                        <p>Frontend Side</p>
                        <h5 id="Title">Android Applications</h5>
                        <p>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                   </div>
                </div>
                <div class="col-sm">
                   <div class="card" id="ItemTow">
                        <img src="https://img.icons8.com/cotton/64/000000/source-code--v2.png">
                        <p>Backend Side</p>
                        <h5>SpringBoot</h5>
                        <p>Build Backend Projects With Spring Boot Framework, Good Infastructure, Error Handling, Restful Api</p>
                   </div>
                </div>
                <div class="col-sm">
                    <div class="card" id="ItemThree">
                        <img src="https://img.icons8.com/cotton/64/000000/dating-website.png">
                        <p>Frontend Side</p>
                        <h5 id="Title">Website</h5>
                        <p>Build Websites With Vue.js , Boostrap , Javascript With Restful Api, Responsive Design , Clean Code</p>
                    </div>
                </div>
            </div>
            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card" id="ItemThree">
                        <img src="https://img.icons8.com/cotton/64/000000/bookmark-ribbon.png">
                        <p>Configuration</p>
                        <h5 id="Title">Plugins</h5>
                        <p>Design, Build (Gradle, Intellij, CLI) For Android Applications for Better Gradle Configutation</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card" id="ItemOne">
                        <img src="https://img.icons8.com/cotton/64/000000/source-code--v2.png">
                        <p>Backend Side</p>
                        <h5 id="Title">Ktor Framework</h5>
                        <p>Build Backend Projects With Ktor Framework , Restful Api</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card" id="ItemTow">
                        <img src="https://img.icons8.com/cotton/64/000000/color-palette.png">
                        <p>Frontend Side</p>
                        <h5>Design</h5>
                        <p>Design Application Interface , Logos With Adobe Photoshop, After Effects For Simple Animation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.ServicesComponent {
    height: auto;
    background-color: #ECECF4;
    color: black;
    font-family: 'Saira Semi Condensed', sans-serif;
}

.Title {
    text-align: center;
    padding: 2em;
}

p {
  margin: 0%;
  padding: 0%;
  color: black;
}

.card p, h5 {
    color: white;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: center;
  display:block;
  margin:auto;
  margin-top: 1em;
  border-radius: 0.4em;
  padding: 1em;
  text-align: start;
}

#ItemOne {
  background-color: rgb(249, 123, 139);
  color: white;
  box-shadow: 0px 5px 20px 0px rgba(249, 123, 139, 0.5);
}

#ItemTow {
    color: black;
    background-color: rgb(249, 215, 76);
    box-shadow: 0px 5px 20px 0px rgba(249, 215, 76, 0.5);
}

#ItemOne > p , h5 {
    color: white;
}

#ItemThree > p , h5 {
    color: white;
}

#ItemTow > p , h5 {
    color: black;
}

#ItemThree {
    background-color: rgb(108, 108, 229);
    box-shadow: 0px 5px 20px 0px rgba(108, 108, 229, 0.5);
    color: white;
}

#Title {
    color: white;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

#SecondItem {
    padding-top: 2em;
}

</style>