<template>
  <div class="MainContainer">
    <HeaderComponent />
    <AboutMeComponent />
    <!-- <SkillsComponent /> -->
    <ServicesComponent />
    <ToolsMenuComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/main/MainPageHeader.vue'
import ServicesComponent from '@/components/main/ServicesComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import SkillsComponent from '@/components/main/SkillsComponent.vue'
import ToolsMenuComponent from '@/components/main/ToolsMenu.vue'
import AboutMeComponent from '@/components/main/AboutMeComponent.vue'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    SkillsComponent,
    ToolsMenuComponent,
    AboutMeComponent
  }
}
</script>
