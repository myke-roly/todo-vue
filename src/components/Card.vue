<template>
  <div class="card bg-gray-200">
    <card-title title="Todo List!" />
    <input-add :add-todos="addTodos" />
    <p class="text-center text-blue-400" v-if="todos.length === 0">
      Aun no creaste ninguna tarea!
    </p>
    <ul v-for="(todo, index) in todos" v-bind:key="index">
      <item
        :todo="todo"
        v-on:toggle-done="toggleDone(todo.id)"
        v-on:delete-todo="deleteTodo(todo.id)"
        v-on:edit-todo="editTodo"
      />
    </ul>
    <button
      v-if="todos.length > 0"
      @click="deleteTodos"
      class="py-1 px-4 text-gray-200 float-right bg-red-400 rounded hove:bg-red-400"
    >
      Delete All
    </button>
  </div>
</template>

<script>
/* eslint-disable */
import CardTitle from "@/components/Title";
import InputAdd from "@/components/InputAdd";
import Item from "@/components/Item";
import { setStorage, getStorage, deleteStorage } from "@/helpers/localStorage";

export default {
  name: "Card",
  components: {
    CardTitle,
    InputAdd,
    Item,
  },
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.todos = getStorage();
  },
  methods: {
    addTodos(todo) {
      this.todos = [...this.todos, { ...todo, id: this.todos.length + 1 }];
      setStorage(this.todos);
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      setStorage(this.todos);
    },

    editTodo(id, updateTitle) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updateTitle };
        } else return todo;
      });
      setStorage(this.todos);
    },
    deleteTodos() {
      this.todos = [];
      deleteStorage();
    },
    toggleDone(id) {
      this.todos = this.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, done: !todo.done };
        } else return todo;
      });
      setStorage(this.todos);
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
