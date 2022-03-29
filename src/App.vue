<template>
  <section class="topMenu shadow-primary">
    <div class="container">
      <Header />
    </div>
  </section>
  <section class="p-5">
    <router-view></router-view>
  </section>
</template>

<script>

import Header from './modules/shared/header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.topMenu{
  padding: 10px 0;
}
</style>
