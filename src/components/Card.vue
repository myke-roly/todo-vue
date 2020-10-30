<template>
  <div class="card">
    <Title title="Todo List VUE!" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
/* eslint-disable */
import Title from "@/components/Title";

export default {
  name: "Card",
  components: {
    Title,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  max-width: 960px;
  margin: auto;
  text-align: center;
  padding: 2rem;
  background: #fff;
  min-height: 100vh;
}
</style>
