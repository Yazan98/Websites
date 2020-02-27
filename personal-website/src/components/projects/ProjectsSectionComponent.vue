<template>
    <div class="ServicesComponent">
        <h5 class="SuperTitle">Projects</h5>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   <div class="card">
                        <div class="container">
                            <h4>Vortex</h4>
                            <p>Base Infastructure To Build Android , SpringBoot Applications With Kotlin Language , Latest Technologies</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Destiny App</h4>
                            <p>Restaurant Android Application Built on Vortex , Kotlin</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p><br>
                        <router-link :to="{ name: 'project', params: {ProjectName: 'Destiny'} }" id="Beta"><a>View Project</a></router-link>
                        <a id="Beta" href="https://www.github.com/Yazan98/Destiny">Github Repository</a> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Destiny Api</h4>
                            <p>Restaurant Api With SpringBoot Built On Vortex-Spring, Kotlin</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
            </div>
            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Thentrom</h4>
                            <p>Intellij Plugin To Change IDE Theme To Orange Color (Kotlin Apps)</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Wintrop</h4>
                            <p>Weather Android Application Built On Vortex , Kotlin, Mvvm</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Actor</h4>
                            <p>SpringBoot Annotation Processor To Generate Postman Collections From Controllers</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
            </div>

            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Groupy</h4>
                            <p>Graduation Project For Task Managment , Chat , Kotlin, Vortex-Firebase</p>
                        </div>
                        <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Dirasati</h4>
                            <p>Subjects Tutorials With Chat Experience, Kotlin , Atto</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Atto</h4>
                            <p>Base Code To Build Android Applications With Mvp Implementation</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
            </div>

            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <div class="container"> 
                            <h4>Ktor App</h4>
                            <p>Api Example About Ktor Framework , Mongo Database</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Atto Gradle</h4>
                            <p>Gradle Plugin To Config Atto Android Dependencies</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="container">
                            <h4>Bookie</h4>
                            <p>Simple Api With SpringBoot (Books), Java , Standered Implementation, MySql</p>
                        </div>
                        <!-- <p id="Beta">Android Infrastructure</p>
                        <p id="Beta">View Project</p>
                        <p id="Beta">Github Repository</p> -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import image from '@/assets/vortex-logo.png'
export default {
    data: function () {
        return {
            image: image
        }
    }
}
</script>

<style scoped>

.ServicesComponent {
    color: white;
    font-family: 'Saira Semi Condensed', sans-serif;
}

#Beta {
    background-color: #7F7F7F;
    color: rgb(51, 51, 51);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: rgb(240, 240, 240);
    width: 160px;
    padding: 2%;
    margin: 10px;
}

#Item {
    margin-left: 2px;
    width: 40px;
    height: 40px;
}

#GitHub {
    text-decoration : none;
    text-decoration-line: none;
}

a {
    text-decoration : none;
    text-decoration-line: none;
}

.SuperTitle {
    color: black;
    text-align: center;
    padding: 1em;
}

.Title {
    text-align: center;
    padding: 2em;
}

p {
  margin: 0%;
  padding: 0%;
  color: #7F7F7F;
}

#SecondItem {
    padding-top: 2em;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: start;
  display:block;
  margin:auto;
  margin-top: 1em;
  border-radius: 0.4em;
  padding: 1em;
  height: 300px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

h4 {
    color: black;
    margin-top: 20px;
}

.btn {
  margin: 30px auto;
  padding: 0;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #f8f9fa;
  color: black;
  transition: background-color .3s;
}

.btn:hover, .btn:focus {
  background-color: #e8e8e9;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  top: 50%;
  left: 50%;
  
  padding-top: 0;
    
  border-radius: 100%;
  
  background-color: rgba(236, 240, 241, .3);
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  padding-top: 120%;
  
  transition: width .2s ease-out, padding-top .2s ease-out;
}

#Beta {
    top: 50%;
    bottom: 80%;
    padding-left: 10px;
}

</style>
