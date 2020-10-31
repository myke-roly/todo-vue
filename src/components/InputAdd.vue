<template>
  <div class="add">
    <input
      type="text"
      v-model="value"
      placeholder="Add new todo..."
      @keypress.enter="addTodo"
    />
    <button class="btn-add" v-on:click="addTodo">Add</button>
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
    return { value: "", todo: {}, id: 0 };
  },
  methods: {
    addTodo() {
      if (!this.value) return;
      this.todo = { title: this.value, done: false };
      this.$emit("add-todos", this.todo);
      this.addTodos(this.todo);
      this.value = "";
    },
  },
};
</script>

<style scoped>
.add {
  margin: 2rem 0;
  display: flex;
  gap: 0.5rem;
}
input,
button {
  padding: 0.7rem 1rem;
  background: none;
  border: none;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 1rem;
}
input {
  border-color: #cccccc;
  width: 75%;
}
.btn-add {
  width: 25%;
  background: orangered;
  color: white;
  text-transform: uppercase;
}
</style>
