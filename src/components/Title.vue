<template>
  <h1 class="text-center flex justify-center items-center">
    <img src="../assets/logo.png" class="w-8 mr-5" alt="logo" />
    <span class="text-2xl uppercase">{{ title }}</span>
  </h1>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Title",
  props: ["title"],
};
</script>
