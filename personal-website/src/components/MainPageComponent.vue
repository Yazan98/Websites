<template>
  <div class="MainContainer">
    <HeaderComponent />
    <ServicesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/main/MainPageHeader.vue'
import ServicesComponent from '@/components/main/ServicesComponent.vue'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    ServicesComponent
  }
}
</script>
