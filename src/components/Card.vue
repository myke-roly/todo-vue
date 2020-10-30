<template>
  <div class="card">
    <Title title="Todo List VUE!" />
    <InputAdd :addTodos="addTodos" />
    <ul v-for="(todo, index) in todos" v-bind:key="index">
      <Item :todo="todo" :toggleDone="toggleDone" />
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import Title from "@/components/Title";
import InputAdd from "@/components/InputAdd";
import Item from "@/components/Item";

export default {
  name: "Card",
  components: {
    Title,
    InputAdd,
    Item,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodos(todo) {
      this.todos = [...this.todos, { ...todo, id: this.todos.length }];
    },

    toggleDone(id) {
      const changeState = this.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, done: !todo.done };
        } else return todo;
      });

      this.todos = changeState;
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
