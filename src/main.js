import Vue from "vue";
import App from "./App.vue";
import drag from "v-drag";
import moment from "moment";
import { store } from "./store";

Vue.use(drag);
Vue.use(moment);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
