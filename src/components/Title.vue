<template>
  <h1>{{ title }}</h1>
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
  color: rgb(77, 77, 77);
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
}
</style>
