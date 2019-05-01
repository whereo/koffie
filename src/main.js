import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Buefy from "buefy";

// Styles
import "./assets/scss/app.scss";

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
