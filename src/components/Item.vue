<template>
  <li class="item">
    {{ todo.id }} - {{ todo.title }}
    <section>
      <button v-on:click="toggleDone" v-bind:class="todo.done && 'done'">
        {{ todo.done }}
      </button>
      <button class="edit" @click="showModal">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete" @click="deleteTodo">
        <i class="fas fa-trash"></i>
      </button>
    </section>
    <ModalEdit
      v-on:edit-title="editTitle"
      v-on:hidden-modal="hiddenModal"
      :title="todo.title"
      :isEditing="isEditing"
    />
  </li>
</template>

<script>
/*eslint-disable*/
import ModalEdit from "./ModalEdit";

export default {
  data() {
    return { isEditing: false };
  },
  components: {
    ModalEdit,
  },
  props: {
    todo: { type: Object },
  },
  methods: {
    toggleDone() {
      this.$emit("toggle-done", this.todo.id);
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todo.id);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  text-transform: capitalize;
  background: rgba(233, 233, 233, 0.356);
  padding: 0.8rem 1.5rem;
  width: 100%;
  margin: 1rem auto;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  animation: down 0.5s ease;
}
.item button {
  padding: 0.2rem 1rem;
  border-radius: 4px;
  color: white;
  border: none;
  background: rgb(142, 133, 224);
  cursor: pointer;
  outline: none;
  margin-left: 0.5rem;
  font-size: 1em;
  transition: all 0.3s ease;
}
.item .done {
  box-shadow: 0 0 2px rgb(196, 196, 196);
  background: rgb(139, 231, 102);
}
.item .delete {
  background: transparent;
  color: rgb(236, 67, 67);
}
.item .edit {
  background: transparent;
  color: rgb(212, 204, 116);
}
.edit,
.delete {
  font-size: 1em;
}
.edit:hover,
.delete:hover {
  transform: scale(1.3);
}
@keyframes down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
