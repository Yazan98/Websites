<template>
    <div class="AboutContainer">
        <ToolbarComponent />
        <div class="AboutMeContent">
            <h4><strong>About Me</strong></h4>
            <p>Hi, my name is Yazan Tarifi, I'm a Developer, Designer</p>
            <p>
                <strong>
                    I'm a Frontend, Backend Developer With +4 Years of Experience To Maintain , Build, Design Responsive Layout 
                     also Love Opensource Projects 
                </strong>
            </p>
            <p><em>What I can DO</em></p>
            <p><strong>Build Android Applications With Latest Technologies, Best Performance</strong></p>
            <p><strong>Build , Design Restful Api With Java, Kotlin, Javascript</strong></p>
            <p><strong>Familiar With Gradle, Maven, Yaml, Json Project Configuration</strong></p>
            <p><strong>Deploy Backend Projects With Docker, Google App Engine , Heroku</strong></p>
            <p><strong>Design, Edit (Icons, Images) With Adobe Photoshop</strong></p>
            <p><strong>Design Simple Websites With Vue.js</strong></p>
            <p><strong>Design Custom Plugins For Intellij , Gradle</strong></p>
            <p><strong>I Love Open Source (My Open Source Projects in Github Account)</strong></p>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'

export default {
    components: {
        ToolbarComponent,
        FooterComponent
    }
}
</script>

<style scoped>

.AboutContainer {
    /* background-color: #262626; */
  height: 700px;
  margin: 0%;
  font-family: 'Saira Semi Condensed', sans-serif;
}


.AboutMeContent {
    padding: 2em;
    text-align: start;
}

h4 {
    text-align: center;
}

</style>