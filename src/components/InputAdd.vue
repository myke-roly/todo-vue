<template>
  <div class="flex gap-2 my-10">
    <input
      class="px-4 py-2 flex-auto bg-gray-300 focus:outline-none border rounded border-gray-400 focus-within:bg-gray text-gray-600"
      type="text"
      v-model="value"
      placeholder="Add new todo..."
      @keypress.enter="addTodo"
    />
    <button
      class="flex-auto rounded text-white uppercase bg-gray-800 hover:bg-gray-900 font-semibold"
      v-on:click="addTodo"
    >
      Add
    </button>
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