import Vue from "vue";
import App from "./App.vue";
import Draggable from "vuedraggable";

Vue.config.productionTip = false;

Vue.use(Draggable);

new Vue({
  render: h => h(App)
}).$mount("#app");
