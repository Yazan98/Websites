<template>
    <div class="SkillsContainer">
        <h3>Abilities</h3>
        <div class="container">
            <div class="row">
                <div class="col-sm">   
                   <div class="card">
                       <h4>Android Development</h4>
                        <div id="Conatiner">
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <div id="TextProgress" class="progress-value">90%</div>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                       <h4>SprignBoot Api</h4>
                        <div id="Conatiner">
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <div id="TextProgress" class="progress-value">70%</div>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                       <h4>Web Development</h4>
                        <div id="Conatiner">
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <div id="TextProgress" class="progress-value">90%</div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.SkillsContainer {
    background-color: #ECECF4;
    color: black;
    padding: 1em;
    height: auto;
    font-family: 'Saira Semi Condensed', sans-serif;
}

h3 {
    text-align: center;
    padding: 1em;
}

h4 {
    text-align: center;
}

#SecondItem {
    margin-top: 3em;
}


.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align: center;
  display:block;
  align-self: center;
  margin-top: 1em;
  margin:auto;
  border-radius: 0.4em;
  padding: 2em;
  margin-top: 1em;
  text-align: center;
}

.progress{
    width: 150px;
    height: 150px;
    line-height: 150px;
    background: none;
    margin: 0 auto;
    box-shadow: none;
    padding: 0%;
    position: relative;
}

.progress:after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 12px solid #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.progress > span{
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
}

.progress .progress-left{
    left: 0;
}

.progress .progress-bar{
    width: 100%;
    height: 100%;
    background: none;
    border-width: 12px;
    border-style: solid;
    position: absolute;
    top: 0;
}

.progress .progress-left .progress-bar{
    left: 100%;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    border-left: 0;
    -webkit-transform-origin: center left;
    transform-origin: center left;
}

.progress .progress-right{
    right: 0;
}

.progress .progress-right .progress-bar{
    left: -100%;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    border-right: 0;
    -webkit-transform-origin: center right;
    transform-origin: center right;
    animation: loading-1 1.8s linear forwards;
}

.progress .progress-value{
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: #fff;
    font-size: 24px;
    color: #fff;
    line-height: 135px;
    text-align: center;
    position: absolute;
    top: 5%;
    left: 5%;
}

#TextProgress {
    color: #000;
}

#Conatiner {
    margin: 0%;
}

.progress.blue .progress-bar{
    border-color: #049dff;
}
.progress.blue .progress-left .progress-bar{
    animation: loading-2 1.5s linear forwards 1.8s;
}
.progress.yellow .progress-bar{
    border-color: #fdba04;
}
.progress.yellow .progress-left .progress-bar{
    animation: loading-3 1s linear forwards 1.8s;
}
.progress.pink .progress-bar{
    border-color: #ed687c;
}
.progress.pink .progress-left .progress-bar{
    animation: loading-4 0.4s linear forwards 1.8s;
}
.progress.green .progress-bar{
    border-color: #1abc9c;
}
.progress.green .progress-left .progress-bar{
    animation: loading-5 1.2s linear forwards 1.8s;
}
@keyframes loading-1{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
}
@keyframes loading-2{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(144deg);
        transform: rotate(144deg);
    }
}
@keyframes loading-3{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
}
@keyframes loading-4{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(36deg);
        transform: rotate(36deg);
    }
}
@keyframes loading-5{
    0%{
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100%{
        -webkit-transform: rotate(126deg);
        transform: rotate(126deg);
    }
}
@media only screen and (max-width: 990px){
    .progress{ margin-bottom: 20px; }
}

</style>