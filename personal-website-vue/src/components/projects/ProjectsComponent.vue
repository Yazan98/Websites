<template>
    <div class="ProjectsComponent">
        <ToolbarComponent />
        <ProjectsSectionComponent />
        <FooterComponent />
    </div>
</template>

<script>

import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import ProjectsSectionComponent from '@/components/projects/ProjectsSectionComponent.vue'

export default {
    components: {
        ToolbarComponent,
        ProjectsSectionComponent,
        FooterComponent
    }
}
</script>

<style scoped>

.ProjectsComponent {
  height: 700px;
  margin: 0%;
  font-family: 'Saira Semi Condensed', sans-serif;
}

</style>
