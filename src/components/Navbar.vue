<template>
  <nav class="flex items-center justify-between mb-10">
    <slot></slot>
    <div class="flex gap-2 items-center">
      <p
        class="py-1 size-2 font-semibold rounded-md px-5 text-gray-600 uppercase"
      >
        All todos {{ all }}
      </p>
      <p
        class="py-1 size-2 px-5 text-sm rounded-md bg-green-200 text-green-700"
      >
        <i class="fas fa-thumbs-up"></i> {{ solved }}
      </p>
      <p class="py-1 size-2 px-5 text-sm rounded-md bg-red-200 text-red-700">
        <i class="fas fa-thumbs-down"></i> {{ unsolved }}
      </p>
    </div>
  </nav>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Navbar",
  props: {
    all: { type: Number },
    solved: { type: Number },
    unsolved: { type: Number },
  },
  data() {
    return {};
  },
};
</script>
