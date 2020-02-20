<template>
    <div class="ServicesComponent">
        <h5 class="Title">Latest Projects</h5>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   <div class="card">
                       <img :src="image" width="50" height="50" />
                        <div class="container">
                            <h4><b>Vortex</b></h4>
                            <p>Base Infastructure To Build Android , SpringBoot Applications With Kotlin Language , Latest Technologies</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png" width="70" height="70" />
                        <div class="container">
                            <h4><b>Destiny App</b></h4>
                            <p>Restaurant Android Application Built on Vortex , Kotlin</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png" width="70" height="70" />
                        <div class="container">
                            <h4><b>Destiny Api</b></h4>
                            <p>Restaurant Api With SpringBoot Built On Vortex-Spring, Kotlin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Thentrom</b></h4>
                            <p>Intellij Plugin To Change IDE Theme To Orange Color (Kotlin Apps)</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png" width="70" height="70">
                        <div class="container">
                            <h4><b>Wintrop</b></h4>
                            <p>Weather Android Application Built On Vortex , Kotlin, Mvvm</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Actor</b></h4>
                            <p>SpringBoot Annotation Processor To Generate Postman Collections From Controllers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Groupy</b></h4>
                            <p>Graduation Project For Task Managment , Chat , Kotlin, Vortex-Firebase</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Dirasati</b></h4>
                            <p>Subjects Tutorials With Chat Experience, Kotlin , Atto</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Atto</b></h4>
                            <p>Base Code To Build Android Applications With Mvp Implementation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Ktor App</b></h4>
                            <p>Api Example About Ktor Framework , Mongo Database</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Atto Gradle</b></h4>
                            <p>Gradle Plugin To Config Atto Android Dependencies</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>Bookie</b></h4>
                            <p>Simple Api With SpringBoot (Books)</p>
                        </div>
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
    height: 800px;
    background-color: #262626;
    color: white;
    font-family: 'Saira Semi Condensed', sans-serif;
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
  text-align: center;
  display:block;
  margin:auto;
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
}

</style>
