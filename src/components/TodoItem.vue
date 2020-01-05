<template>
  <div class="flex todo-item card-panel">
    <div class="btn-container-done">
      <a
        class="btn btn-floating btn-small waves-effect waves-light"
        :class="{'white': !todo.done, 'green': todo.done}"
        @click="doneTodo"
      >
        <i class="material-icons" :class="{'done-icon': !todo.done}">done</i>
      </a>
    </div>

      <div class="p-wrapper handle"><p class="col s10 m10 l10 todo_text"><span class="counter">{{ todoIndex+1 }}.</span> {{ todo.text }}</p></div>
      <div class="btn-container-del">
        <a class="btn btn-floating btn-small waves-effect waves-light red" @click="removeTodo">
          <i class="material-icons">delete</i>
        </a>

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
.flex {
	display: flex;
	align-items: center;
	box-sizing: border-box;
}
.card-panel {
  padding: 10px;
  overflow: hidden;
}
.todo-item {

}
.btn-container-done {
  margin: 5px 20px 5px 5px;
}
.btn-container-del {
  margin: 5px 5px 5px 20px;
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
.p-wrapper {
	width: 83%;
	padding: 10px 0;
}

</style>
