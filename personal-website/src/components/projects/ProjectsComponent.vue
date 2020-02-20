<template>
    <div class="ProjectsComponent">
        <ToolbarComponent />
        <ProjectsSectionComponent />
    </div>
</template>

<script>

import ToolbarComponent from '@/components/common/ToolbarComponent.vue'
import ProjectsSectionComponent from '@/components/projects/ProjectsSectionComponent.vue'

export default {
    components: {
        ToolbarComponent,
        ProjectsSectionComponent
    }
}
</script>

<style scoped>

.ProjectsComponent {
    background-color: #262626;
  height: 700px;
  color: white;
  margin: 0%;
  font-family: 'Saira Semi Condensed', sans-serif;
}

</style>
