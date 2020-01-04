<template>
     <div>
         <div class="switch">
        Показать выполненные: 
    <label>
      <input type="checkbox" checked @click="viewAll">
      <span class="lever">
      </span>
    </label>
    <hr>
  </div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            viewDoned: false
        }
    },
    methods: {
        viewAll() {
            this.$emit('todo:sort', this.viewDoned);
            this.viewDoned = ! this.viewDoned;
        }
    }
}
</script>