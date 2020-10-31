<template>
  <div id="app" class="bg-blue-400">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f1f1e6;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Syne Mono", monospace;
}
</style>
