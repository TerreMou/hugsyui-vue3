import "./lib/hugsy.scss";
import {createApp} from "vue";
import App from "./App.vue";
import "github-markdown-css";
import "./index.scss";
import {router} from "./router";
import "./lib/svg";


const app = createApp(App);
app.use(router);
app.mount("#app");
