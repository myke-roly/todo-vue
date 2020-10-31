<template>
  <li class="item">
    <span>
      <button
        v-on:click="toggleDone"
        v-bind:class="todo.done && 'done-ok'"
        class="done"
      >
        <i
          v-bind:class="todo.done ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down'"
        ></i>
      </button>
      {{ todo.title }}
    </span>
    <section>
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
  background: rgb(241, 241, 241);
  padding: 0.8rem 1.5rem;
  width: 100%;
  margin: 1rem auto;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  animation: down 0.5s ease;
}
.item button {
  padding: 0.2rem 0.5rem;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}
.item .done {
  border-radius: 4px;
  font-size: 0.8em;
  background: rgb(165, 154, 214);
  margin-right: 0.5rem;
}
.item .done-ok {
  font-size: 0.8em;
  background: rgb(150, 212, 125);
}
.item .delete {
  color: rgb(240, 133, 133);
}
.item .edit {
  color: rgb(78, 162, 167);
}
.edit,
.delete {
  background: transparent !important;
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
