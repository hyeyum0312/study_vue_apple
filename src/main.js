import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import store from "./store";
import './registerServiceWorker'

let app = createApp(App);
let emitter = mitt();

app.config.globalProperties.emitter = emitter;
app.use(store).mount("#app");
