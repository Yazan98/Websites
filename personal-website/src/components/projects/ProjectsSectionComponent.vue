<template>
    <div class="ServicesComponent">
        <h5 class="Title">Latest Projects</h5>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   <div class="card">
                       <img :src="image" />
                        <div class="container">
                            <h4><b>Vortex</b></h4>
                            <p>Base Infastructure To Build Android , SpringBoot Applications</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="SecondItem">
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <img src="img_avatar.png" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
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
    height: 600px;
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