import Vue from "vue";
import App from "./App.vue";
import drag from "v-drag";
import { store } from "./store";

Vue.use(drag);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
