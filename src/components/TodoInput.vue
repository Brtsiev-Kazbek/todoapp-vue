<template>
  <div class="row todo-input">
    <form>
      <input class="col s10 m11 l11" autofocus type="text" placeholder="Your Task" v-model="text">
      <div class="btn-container col s2 m1 l1">
        <button
          class="btn-floating btn-large waves-effect waves-light red"
          @click.prevent="addTodo"
        >
          <i class="material-icons">add</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "todo-input",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addTodo() {
      if (this.text.trim() !== "") {
        this.$emit("todo:add", this.text);
        this.text = "";
      }
    }
  }
};
</script>

<style scoped>
.btn-container {
  text-align: center;
}
</style>


