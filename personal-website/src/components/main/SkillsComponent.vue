<template>
    <div class="SkillsContainer">
        <h3>Skills</h3>
        <div class="container">
            <div class="row">
                <div class="col-sm">   
                    <p>Android Development : 90%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-sm">
                    <p>Backend Development : 70%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-sm">
                     <p>Web Design : 50%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="SecondItem">
            <div class="row">
                <div class="col-sm">   
                    <p>JavaScript Language : 30%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-sm">
                    <p>Kotlin Language : 95%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-sm">
                     <p>Web Design : 50%</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.SkillsContainer {
    background-color: #ECECF4;
    color: black;
    padding: 1em;
    height: 400px;
    font-family: 'Saira Semi Condensed', sans-serif;
}

h3 {
    text-align: center;
    padding: 1em;
}

#SecondItem {
    margin-top: 3em;
}

</style>