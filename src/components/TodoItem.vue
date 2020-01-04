<template>
  <div class="row todo-item card-panel">
    <div class="col s2 m1 l1 btn-container">
      <a
        class="btn btn-floating btn-small waves-effect waves-light"
        :class="{'white': !todo.done, 'green': todo.done}"
        @click="doneTodo"
      >
        <i class="material-icons" :class="{'done-icon': !todo.done}">done</i>
      </a>
    </div>
    <div class="valign-wrapper">
      <p class="col s10 m10 l10 todo_text"><span class="counter">{{ todoIndex+1 }}.</span> {{ todo.text }}</p>
      <div class="col s2 m1 l1 btn-container">
        <a class="btn btn-floating btn-small waves-effect waves-light red" @click="removeTodo">
          <i class="material-icons">delete</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: ["todo", "todoIndex"],
  data() {
    return {};
  },
  methods: {
    removeTodo() {
      this.$emit("todo:remove", this.todo.id);
    },
    doneTodo() {
      this.$emit("todo:done", this.todo);
    }
  }
};
</script>

<style scoped>
.todo_text {
  /* padding-left: 15px; */
  padding: 0;
  margin: 0;
}
.card-panel {
  padding: 10px;
  overflow: hidden;
}
.btn-container {
  margin: 5px;
}
[contenteditable] {
  border: 1px solid #ccc;
}
.done {
  text-decoration: line-through;
  /* background: rgba(29, 238, 10, 0.432); */
  opacity: 0.3;
}
.done-icon {
  color: black;
  transition: background-color 0.5s ease;
}

</style>
