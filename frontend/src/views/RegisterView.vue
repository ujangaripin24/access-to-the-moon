<template>
  <div class="home">
    <RegisterPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterPage from '@/components/RegisterPage.vue'

export default {
  name: 'HomeView',
  components: {
    RegisterPage
  }
}
</script>
