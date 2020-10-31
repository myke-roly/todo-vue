<template>
  <div v-if="isEditing" class="modal-edit">
    <input
      type="text"
      v-model="newTitle"
      @keypress.enter="editTitle"
      @blur="hidden"
      ref="inputEdit"
      placeholder="Ingrese un titulo"
    />
    <button class="btn-close" @click="hidden">
      <i class="fas fa-times"></i>
    </button>
    <button class="btn-ok" @click="editTitle">
      <i class="fas fa-check"></i>
    </button>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "ModalEdit",
  props: {
    title: String,
    isEditing: Boolean,
  },
  data() {
    return { newTitle: this.title };
  },
  methods: {
    editTitle() {
      if (!this.newTitle) return;
      this.$emit("edit-title", this.newTitle);
      this.hidden();
    },
    hidden() {
      this.$emit("hidden-modal");
    },
  },
  updated() {
    if (this.$refs.inputEdit) {
      this.$refs.inputEdit.focus();
    }
  },
};
</script>

<style scoped>
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