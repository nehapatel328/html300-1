<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/grid.vue">Grid</router-link>
    <router-link to="/image.vue">Images</router-link>
    <router-link to="/lp.vue">Landing Page</router-link>
    <router-link to="/accordion.vue">Accordion</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
