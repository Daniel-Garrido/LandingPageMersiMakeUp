import { createApp, onMounted } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

// Inicia AOS cuando el DOM esté cargado
//inicir la libreria de AOS
AOS.init({
  duration: 800, // duración de animación (en ms)
  once: false     // si quieres que se anime solo una vez
})

