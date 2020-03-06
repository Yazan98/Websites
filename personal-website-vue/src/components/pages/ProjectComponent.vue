<template>
    <div class="ProjectComponent">
        <ToolbarComponent />
        <div v-for="project in projects" :key="project">
            <div v-if="project.ProjectName === ProjectName">
                <ProjectDetailsComponent 
                    ProjectName = "Destiny"
                />
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import ProjectDetailsComponent from '@/components/pages/ProjectDetailsComponent.vue'

export default {
    components: {
        ToolbarComponent,
        FooterComponent,
        ProjectDetailsComponent
    },
    name: 'project',
    props: ['ProjectName'],
    data : function() {
        return {
            projects : [
                {
                    ProjectName: 'Destiny',
                    Platform: 'Android Application',
                    Description: 'Android Application For Food Delivery Built On Vortex, RxJava, Mvvm (Vortex Testing)',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png',
                    Topics: ['Kotlin', 'Mvvm', 'RxJava', 'Vortex', 'Redux', 'Work Manager', 'Clean Architecture', 'Dependency Injection (Koin, Motif)', 'Realm'],
                    License: 'Copyright (C) 2019 Destiny Android Application is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: true,
                    GithubLink: 'https://www.github.com/Yazan98/Destiny'
                },
                {
                    ProjectName: 'Destiny-Api',
                    Platform: 'Backend: SpringBoot',
                    Description: 'Backend Project With SpringBoot, Vortex, Kotlin To Build Api For Destiny Mobile App',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png',
                    Topics: ['Kotlin', 'MuSql', 'Vortex', 'GAP', 'Firebase', 'JWT', 'Security', 'Notifications', 'ErrorHandling', 'Docker'],
                    License: 'Copyright (C) 2019 Destiny Api is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: true,
                    GithubLink: 'https://www.github.com/Yazan98/Destiny-Api'
                },
                {
                    ProjectName: 'Wintrop',
                    Platform: 'Android Application',
                    Description: 'Android Application For Weather',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Kotlin', 'Mvvm', 'RxJava', 'Vortex', 'Redux', 'Work Manager', 'Clean Architecture', 'Dependency Injection (Koin, Motif)', 'Room'],                    
                    License: 'Copyright (C) 2019 Wintrop is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: true,
                    GithubLink: 'https://www.github.com/Yazan98/Wintrop'
                },
                {
                    ProjectName: 'Thentrom',
                    Platform: 'Intellij Plugin',
                    Description: 'Custom Theme To Build Kotlin Applications With Orange Theme',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Intellij Plugin', 'Custom Plugin', 'Custom Theme'],   
                    License: 'Copyright (C) 2019 Thentrom is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Thentrom'
                },
                {
                    ProjectName: 'Actor',
                    Platform: 'Backend : SpringBoot',
                    Description: 'Spring Boot Annoutation Processor To Build Postman Collection',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Postman', 'Postman Collection Generator', 'SpringBoot', 'Kotlin'],   
                    License: 'Copyright (C) 2019 Actor is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Actor'
                },
                {
                    ProjectName: 'Groupy-Student',
                    Platform: 'Android Application',
                    Description: 'Android Application Built WIth Firebase, Kotlin (Graduation Project)',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Android Application', 'Kotlin', 'Firebase', 'Mvc', 'Chat'],   
                    License: 'Copyright (C) 2019 Groupy is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Groupy'
                },
                {
                    ProjectName: 'Drasati',
                    Platform: 'Android Application',
                    Description: 'Android Application For Study',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Android Application', 'Kotlin', 'Firebase', 'Mvc', 'Chat'],   
                    License: 'Copyright (C) 2019 Drasati is An Closed Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: false,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Groupy'
                },
                {
                    ProjectName: 'Bookie',
                    Platform: 'Backend : SpringBoot',
                    Description: 'Api For Books Managment',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['SpringBoot', 'Java', 'MySql'],   
                    License: 'Copyright (C) 2019 Bookie is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/BooksServer-SpringBoot'
                },
                {
                    ProjectName: 'Atto',
                    Platform: 'Android Infastructure',
                    Description: 'Android Base Code To Build Better Applications With Mvp , RxJava',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Android', 'Kotlin', 'Mvp'],   
                    License: 'Copyright (C) 2019 Atto is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Atto'
                },
                {
                    ProjectName: 'Ktor : Reflex',
                    Platform: 'Backend: Ktor',
                    Description: 'Ktor Example With Mongo DB',
                    AppIcon: 'https://user-images.githubusercontent.com/29167110/72382065-6616dc00-3710-11ea-9958-6819483ac26d.png',
                    Topics: ['Android', 'Kotlin', 'Mvp'],   
                    License: 'Copyright (C) 2019 Atto is An Open Source Library (Licensed under the Apache License, Version 2.0)',
                    isOpenSourceProject: true,
                    isAppIconExists: false,
                    GithubLink: 'https://github.com/Yazan98/Ktor-Example'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>