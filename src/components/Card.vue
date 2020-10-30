<template>
  <div class="card">
    <Title title="Todo List VUE!" />
    <InputAdd :addTodos="addTodos" />
    <p v-for="(todo, index) in todos" v-bind:key="index">
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
/* eslint-disable */
import Title from "@/components/Title";
import InputAdd from "@/components/InputAdd";

export default {
  name: "Card",
  components: {
    Title,
    InputAdd,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodos(todo) {
      this.todos = [...this.todos, todo];
    },
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
