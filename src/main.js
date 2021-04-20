import Vue from "vue";
import App from "./App.vue";
import drag from "v-drag";

Vue.use(drag);

new Vue({
  el: "#app",
  render: h => h(App)
});
