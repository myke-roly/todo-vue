<template>
  <div class="card bg-gray-200">
    <Title title="Todo List!" />
    <InputAdd :add-todos="addTodos" />
    <ul v-for="(todo, index) in todos" v-bind:key="index">
      <Item
        :todo="todo"
        v-on:toggle-done="toggleDone"
        v-on:delete-todo="deleteTodo"
        v-on:edit-todo="editTodo"
      />
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
      this.todos = [...this.todos, { ...todo, id: this.todos.length + 1 }];
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    editTodo(id, updateTitle) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updateTitle };
        } else return todo;
      });
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
  max-width: 860px;
  margin: auto;
  text-align: center;
  padding: 2rem 4rem;
  background: #fff;
  min-height: 100vh;
}
@media (max-width: 480px) {
  .card {
    padding: 2rem 1rem;
  }
}
</style>
