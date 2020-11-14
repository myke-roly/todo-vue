<template>
  <div
    class="item flex justify-between items-center capitalize px-4 py-3 my-4 bg-white rounded"
  >
    <p>
      <b>{{ newIndex }}</b>
      <button
        v-on:click="toggleDone"
        v-bind:class="todo.done ? 'text-blue-400' : 'text-red-400'"
      >
        <i v-if="todo.done" class="fas fa-thumbs-up"></i>
        <i v-else class="fas fa-thumbs-down"></i>
      </button>
      <span v-bind:class="todo.done && 'line-through opacity-25'"
        >- {{ todo.title }}</span
      >
    </p>
    <section class="w-20">
      <button class="text-green-400" @click="showModal">
        <i class="far fa-edit"></i>
      </button>
      <button class="text-red-400" @click="deleteTodo">
        <i class="far fa-trash-alt"></i>
      </button>
    </section>
    <ModalEdit
      v-on:edit-title="editTitle"
      v-on:hidden-modal="hiddenModal"
      :title="todo.title"
      :isEditing="isEditing"
    />
  </div>
</template>

<script>
/*eslint-disable*/
import ModalEdit from "./ModalEdit";

export default {
  name: "Item",
  data() {
    return { isEditing: false };
  },
  components: {
    ModalEdit,
  },
  props: {
    todo: { type: Object },
    index: { type: Number },
  },
  computed: {
    newIndex() {
      return this.index + 1;
    },
  },
  methods: {
    toggleDone() {
      this.$emit("toggle-done");
    },
    deleteTodo() {
      this.$emit("delete-todo");
    },
    editTitle(newTitle) {
      this.$emit("edit-todo", this.todo.id, newTitle);
    },
    showModal() {
      this.isEditing = true;
    },
    hiddenModal() {
      this.isEditing = false;
    },
  },
};
</script>

<style>
.item {
  font-size: 1.1em;
  width: 100%;
  position: relative;
  animation: down 1s ease !important;
}
.item button {
  cursor: pointer;
  outline: none;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}
.item button:hover {
  transform: scale(1.2);
}
@keyframes down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
