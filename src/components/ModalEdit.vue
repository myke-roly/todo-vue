<template>
  <div v-if="isEditing" class="modal-edit bg-gray-800">
    <input
      type="text"
      v-model="newTitle"
      @keypress.enter="editTitle"
      @keyup.esc="editTitle"
      @blur="hidden"
      ref="inputEdit"
      placeholder="Ingrese un titulo"
    />
    <button class="text-red-400" @click="hidden">
      <i class="fas fa-times"></i>
    </button>
    <!-- <button class="btn-ok" @click="editTitle">
      <i class="fas fa-check"></i>
    </button> -->
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  padding: 0.7rem;
  /* box-shadow: 0 0 4px rgb(27, 27, 27); */
  animation: toLeft 0.3s;
}
.modal-edit input,
.modal-edit button {
  background: transparent;
  padding: 0 0.5rem;
  border: none;
}
.modal-edit input {
  border-bottom: 1px solid rgb(128, 128, 128);
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
    opacity: 0;
    width: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>