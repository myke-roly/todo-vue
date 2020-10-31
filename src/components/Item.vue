<template>
  <li class="item">
    {{ todo.id }} - {{ todo.title }}
    <section>
      <button v-on:click="toggleDone" v-bind:class="todo.done && 'done'">
        {{ todo.done }}
      </button>
      <button class="edit" @click="toggleEditInput">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete" @click="deleteTodo">
        <i class="fas fa-trash"></i>
      </button>
    </section>
    <div v-if="isEdit" class="modal-edit">
      <input
        type="text"
        v-model="updateTitle"
        @keypress.enter="editTitle"
        ref="inputEdit"
        placeholder="Ingrese un titulo"
      />
      <button class="btn-close" @click="toggleEditInput">
        <i class="fas fa-times"></i>
      </button>
      <button class="btn-ok" @click="editTitle">
        <i class="fas fa-check"></i>
      </button>
    </div>
  </li>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return { isEdit: false, updateTitle: "" };
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
    editTitle() {
      if (!this.updateTitle) return;
      this.$emit("edit-todo", this.todo.id, this.updateTitle);
      this.toggleEditInput();
      this.updateTitle = "";
    },
    toggleEditInput() {
      this.isEdit = !this.isEdit;
      setTimeout(() => {
        if (this.$refs.inputEdit) {
          this.$refs.inputEdit.focus();
        }
      }, 500);
    },
  },
};
</script>

<style>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  background: rgba(233, 233, 233, 0.356);
  padding: 0.8rem 1.5rem;
  width: 75%;
  margin: 1rem auto;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
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
.modal-edit {
  position: absolute;
  right: 0;
  top: 0;
  background: rgb(245, 151, 134);
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  box-shadow: 0 0 4px rgba(139, 40, 10, 0.507);
  animation: toLeft 0.3s;
}
.modal-edit input,
.modal-edit button {
  padding: 0.4rem;
  background: transparent;
  border: none;
}
.modal-edit input {
  border-bottom: 1px solid rgb(212, 212, 212);
  color: #ffffff;
  width: 100%;
  letter-spacing: 1px;
  outline: none;
}
.modal-edit input::placeholder {
  color: rgb(212, 212, 212);
}
.modal-edit .btn-close {
  color: rgb(255, 4, 4);
}
.modal-edit .btn-ok {
  color: rgb(161, 236, 91);
}
@keyframes toLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
