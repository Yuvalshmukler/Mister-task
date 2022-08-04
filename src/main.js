import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './assets/main.css'


const firebaseConfig = {
    apiKey: "AIzaSyCelphSDNGn01OFklgHkc8KO6shq1cfZtw",
    authDomain: "mister-task-b6059.firebaseapp.com",
    projectId: "mister-task-b6059",
    storageBucket: "mister-task-b6059.appspot.com",
    messagingSenderId: "471604302065",
    appId: "1:471604302065:web:cf7d02dae4e3d7b715d950",
    measurementId: "G-YST2Q6D0WP"
};
const appF = initializeApp(firebaseConfig);
const analytics = getAnalytics(appF);
const app = createApp(App)

app.use(router)

app.mount('#app')
