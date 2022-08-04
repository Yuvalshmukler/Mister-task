import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.scss'

const app = createApp(App)




<<<<<<< HEAD
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
=======
>>>>>>> 35c1988fca47e7a4698dac336566f52e8c8a51b2

app.use(router)
app.use(store)
app.mount('#app')
