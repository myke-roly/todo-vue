<template>
  <h1 class="bg-blue-300 text-center">
    <img src="../assets/logo.png" alt="logo" /> {{ title }}
  </h1>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Title",
  props: ["title"],
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
}

h1 img {
  width: 30px;
}
</style>
