<template>
  <div class="task-counter">
    <div
      class="task-item"
      @click="$emit('todo:show-doned', donedTodos)"
    >Завершенные задачи: {{ donedTodos.length }}</div>
    <div class="task-item" @click="$emit('todo:show-all', todos)">Все задачи: {{ todos.length }}</div>
    <div
      class="task-item"
      @click="$emit('todo:show-doned', undonedTodos)"
    >Невыполненные задачи: {{ undonedTodos.length }}</div>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    donedTodos() {
      return this.todos.filter(el => el.done);
    },
    undonedTodos() {
      return this.todos.filter(el => !el.done);
    }
  }
};
</script>

<style scoped>
.task-counter {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.task-item {
  min-width: 100x;
}
</style>
