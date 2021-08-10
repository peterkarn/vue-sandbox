import { createApp } from 'vue'
import App from './App.vue'
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faSurprise,
  faExclamationCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';


library.add(faCheckCircle);
library.add(faSurprise);
library.add(faExclamationCircle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')


