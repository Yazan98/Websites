<template>
  <div class="MainContainer">
    <HeaderComponent />
    <SkillsComponent />
    <ServicesComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/main/MainPageHeader.vue'
import ServicesComponent from '@/components/main/ServicesComponent.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import SkillsComponent from '@/components/main/SkillsComponent.vue'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    SkillsComponent
  }
}
</script>
