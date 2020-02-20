<template>
    <div class="ServicesComponent">
        <h5 class="Title">What I Do</h5>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   <div class="card">
                        <img src="https://img.icons8.com/cotton/64/000000/android-os.png">
                    <p>Frontend Side</p>
                    <h5>Android Applications</h5>
                    <p>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                   </div>
                </div>
                <div class="col-sm">
                   <div class="card">
                        <img src="https://img.icons8.com/cotton/64/000000/source-code--v2.png">
                    <p>Backend Side</p>
                    <h5>SpringBoot</h5>
                    <p>Build Backend Projects With Spring Boot Framework, Good Infastructure, Error Handling, Restful Api</p>
                   </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="https://img.icons8.com/cotton/64/000000/dating-website.png">
                    <p>Frontend Side</p>
                    <h5>Website</h5>
                    <p>Build Websites With Vue.js , Boostrap , Javascript With Restful Api, Responsive Design , Clean Code</p>
                    </div>
                </div>
            </div>
            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <img src="https://img.icons8.com/cotton/64/000000/bookmark-ribbon.png">
                    <p>Configuration</p>
                    <h5>Plugins</h5>
                    <p>Design, Build (Gradle, Intellij, CLI) For Android Applications for Better Gradle Configutation</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="https://img.icons8.com/cotton/64/000000/source-code--v2.png">
                    <p>Backend Side</p>
                    <h5>Ktor Framework</h5>
                    <p>Build Backend Projects With Ktor Framework , Restful Api</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
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
    height: 600px;
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


.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: center;
  display:block;
  margin:auto;
  border-radius: 0.4em;
  padding: 1em;
  text-align: start;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

#SecondItem {
    padding-top: 2em;
}

</style>