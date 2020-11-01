<template>
  <div class="mt-10 mb-5">
    <section class="flex gap-2">
      <input
        class="px-4 py-2 flex-auto bg-gray-200 focus:outline-none border rounded border-gray-400 focus:bg-white text-gray-600"
        type="text"
        v-model="value"
        placeholder="Add new todo..."
        @keypress.enter="addTodo"
        @input="changeIsNotValue"
      />
      <button
        class="flex-auto rounded text-white uppercase bg-gray-800 hover:bg-gray-900 font-semibold"
        v-on:click="addTodo"
      >
        Add
      </button>
    </section>
    <small v-if="isNotValue" class="text-red-300">Ingrese un valor!</small>
  </div>
</template>

<script>
/*eslint-disable*/
import { v4 as uuid4 } from "uuid";

export default {
  name: "InputAdd",
  props: {
    addTodos: { type: Function },
  },
  data() {
    return {
      todo: {},
      value: "",
      isNotValue: false,
    };
  },
  methods: {
    addTodo() {
      if (!this.value) {
        this.isNotValue = true;
        return;
      }
      this.isNotValue = false;
      this.todo = { title: this.value, done: false, id: uuid4() };
      this.$emit("add-todos", this.todo);
      this.addTodos(this.todo);
      this.value = "";
    },
    changeIsNotValue() {
      this.isNotValue = false;
    },
  },
};
</script>