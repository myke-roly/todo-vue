<template>
  <div class="card bg-gray-100">
    <navbar :all="all" :solved="solved" :unsolved="unsolved">
      <card-title title="Todo List!" />
    </navbar>
    <input-add :add-todos="addTodos" />
    <p class="text-center text-gray-700" v-if="todos.length === 0">
      Aun no creaste ninguna tarea!
    </p>
    <ul class="list__items flex flex-col flex-col-reverse">
      <li class="list__item" v-for="(todo, index) in todos" v-bind:key="index">
        <item
          :index="index"
          :todo="todo"
          v-on:toggle-done="toggleDone(todo.id)"
          v-on:delete-todo="deleteTodo(todo.id)"
          v-on:edit-todo="editTodo"
        />
      </li>
    </ul>
    <button
      v-if="todos.length > 0"
      @click="deleteTodos"
      class="py-1 px-4 mb-10 text-gray-200 float-right bg-red-400 rounded hover:bg-red-500"
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
import Navbar from "@/components/Navbar";
import {
  setStorage,
  getStorage,
  deleteStorage,
  todosSolveds,
  todosUnsolveds,
  todosLength,
} from "@/helpers/localStorage";

export default {
  name: "Card",
  components: {
    CardTitle,
    InputAdd,
    Item,
    Navbar,
  },
  data() {
    return {
      todos: getStorage(),
      solved: todosSolveds(),
      unsolved: todosUnsolveds(),
      all: todosLength(),
    };
  },
  updated() {
    setStorage(this.todos);
    this.all = this.todos.length;
    this.solved = this.todos.filter((todo) => todo.done).length;
    this.unsolved = this.todos.filter((todo) => !todo.done).length;
  },
  computed: {
    reverseData() {
      return this.todos.reverse();
    },
  },
  methods: {
    addTodos(todo) {
      this.todos = [...this.todos, { ...todo }];
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
  min-height: 100vh;
}
@media (max-width: 480px) {
  .card {
    padding: 2rem 1rem;
  }
}
</style>
