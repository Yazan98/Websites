<template>
    <div class="ToolsContainer">
        <h5>Tools</h5>
        <div class="scrollmenu">
            <img :src="AndroidIcon" />
            <img :src="DockerImage" />
            <img :src="JsLogo" />
            <img :src="Java" />
            <img :src="Kotlin" />
            <img :src="Gradle" />
            <img :src="Spring"/>
             <img :src="VueLogo"/>
            ...
        </div>
    </div>
</template>

<script>

import DockerLogo from '@/assets/docker.png'
import JavaScriptLogo from '@/assets/jsLogo.png'
import AndroidLogo from '@/assets/android-logo.svg'
import JavaLogo from '@/assets/java-logo.png'
import KotlinLogo from '@/assets/kotlin_logo.png'
import GradleLogo from '@/assets/gradle.png'
import SpringLogo from '@/assets/spring.png'
import Logo from '@/assets/logo.png'

export default {
     data: function () {
        return {
            DockerImage: DockerLogo,
            JsLogo: JavaScriptLogo,
            AndroidIcon: AndroidLogo,
            Java: JavaLogo,
            Kotlin: KotlinLogo,
            Gradle: GradleLogo,
            Spring: SpringLogo,
            VueLogo: Logo
        }
    }
}
</script>

<style scoped>

.ToolsContainer {
    background-color: #ECECF4;
    color: black;
    padding: 1em;
    height: 250px;
    font-family: 'Saira Semi Condensed', sans-serif;
}

div.scrollmenu {
  background-color: #ECECF4;
  overflow: auto;
  padding: 1em;
  white-space: nowrap;
}

h5 {
    text-align: center;
}

div.scrollmenu img {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  width: 110px;
  height: auto;
  margin-left: 1em;
  text-align: center;
  align-content: center;
  scale: initial;
}

.scrollmenu {
    width: auto;
    text-align: center;
}

</style>