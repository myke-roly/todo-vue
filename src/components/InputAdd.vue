<template>
  <div class="add">
    <input type="text" v-model="value" placeholder="Add new todo..." />
    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "InputAdd",
  props: {
    addTodos: { type: Function },
  },
  data() {
    return { value: "", todo: {} };
  },
  methods: {
    addTodo() {
      this.todo = { id: 0, title: this.value, done: false };
      this.addTodos(this.todo);
    },
  },
};
</script>

<style scoped>
.add {
  margin: 2rem 0;
}
input,
button {
  padding: 0.7rem 1rem;
  background: none;
  border: none;
  border-radius: 4px;
  border: 1px solid transparent;
}
input {
  border-color: #cccccc;
  width: 250px;
  max-width: 250px;
}
button {
  background: orangered;
  color: white;
  text-transform: uppercase;
}
</style>
