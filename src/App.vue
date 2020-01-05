<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <todo-header class="center">TodoApp</todo-header>
      </div>
    </nav>
    <div class="container">
      <todo-input class="todo-input" @todo:add="addTodo"/>
      <todo-sort @todo:sort="sort"/>
      <div class="content">
        <draggable v-model="todos" ghost-class="ghost" group="tasks" handle=".handle">
          <transition-group type="transition" name="flip-list">
            <todo-item
              v-for="(todo, index) in visibleTodos"
              class="sortable"
              :class="{'done': todo.done}"
              :todo="todo"
              :todoIndex="index"
              @todo:remove="removeTodo"
              @todo:done="doneTodo"
              :key="todo.id"
            />
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/TodoHeader.vue";
import todoInput from "./components/TodoInput.vue";
import todoItem from "./components/TodoItem.vue";
import draggable from "vuedraggable";
import todoSort from "./components/TodoSort.vue"

export default {
  name: "App",
  components: {
    todoHeader,
    todoInput,
    todoItem,
    draggable,
    todoSort
  },
  data() {
    return {
      todos: [],
      visibleTodos: [],
      viewAll: true,
      nextId: 1
    };
  },
  beforeMount() {
    this.getTodosFromLS();
    this.visibleTodos = this.todos;
  },
  watch: {
    todos: {
      handler(todosArr) {
        localStorage.setItem("todos", JSON.stringify(todosArr));
        localStorage.setItem("nextId", JSON.stringify(this.nextId));
        this.visibleTodos = this.viewAll ? this.todos : this.todos.filter(el => !el.done);
      },
      deep: true
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({ id: this.nextId, text: text, done: false });
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter(todo => todo.id !== id);
    },
    doneTodo(post) {
      let ind = this.todos.indexOf(post);
      let done = this.todos[ind].done;
      this.todos[ind].done = !done;
    },
    getTodosFromLS() {
      let storageTodos = localStorage.getItem("todos");
      let storageNextId = localStorage.getItem("nextId");
      if (storageTodos !== null) {
        this.todos = JSON.parse(storageTodos);
        this.nextId = JSON.parse(storageNextId);
      }
    },
    sort(status) {
      this.viewAll = status;
      if(status) {
        this.visibleTodos = this.todos;
      } else {
        this.visibleTodos = this.todos.filter(el => !el.done);
      }
    }
  }
};
</script>




<style>
.todo-input {
  margin-top: 20px;
}

.container {
  max-width: 700px;
}
.sortable:hover {
  cursor: pointer;
}

.sortable-drag {
  opacity: 0;
}

.flip-list-move {
  transition: transform 0.3s;
}
.ghost {
  cursor: pointer;
  border-left: 6px solid rgb(9, 185, 255);
  font-weight: bold;
  box-shadow: 10px 10px 5px -1px rgba(0, 0, 0, 0.25);
  opacity: 0.9;
}
.task-counter {
  text-align: right;
}
</style>


