<template>
  <li class="item">
    {{ todo.id }} - {{ todo.title }}
    <section>
      <button v-on:click="toggle" v-bind:class="todo.done && 'done'">
        {{ todo.done }}
      </button>
      <button class="delete">Delete</button>
      <button class="edit">Edit</button>
    </section>
  </li>
</template>

<script>
/*eslint-disable*/
export default {
  props: {
    todo: { type: Object },
    toggleDone: { type: Function },
  },
  methods: {
    toggle() {
      this.toggleDone(this.todo.id);
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
  background: rgba(218, 218, 218, 0.356);
  padding: 0.8rem 1.5rem;
  width: 80%;
  margin: 0.7rem auto;
  border-radius: 7px;
}
.item button {
  padding: 0.2rem 1rem;
  border-radius: 4px;
  color: white;
  border: none;
  background: rgb(142, 133, 224);
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 2px rgb(196, 196, 196);
  margin-left: 0.5rem;
}
.item .done {
  background: rgb(139, 231, 102);
}
.item .delete {
  background: rgb(236, 67, 67);
}
.item .edit {
  background: rgb(212, 204, 116);
}
</style>
