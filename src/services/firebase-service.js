import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
    updateDoc,
} from 'firebase/firestore'

export const firbaseService = {
    query,
    remove
}


const firebaseConfig = {
    apiKey: "AIzaSyCelphSDNGn01OFklgHkc8KO6shq1cfZtw",
    authDomain: "mister-task-b6059.firebaseapp.com",
    projectId: "mister-task-b6059",
    storageBucket: "mister-task-b6059.appspot.com",
    messagingSenderId: "471604302065",
    appId: "1:471604302065:web:cf7d02dae4e3d7b715d950",
    measurementId: "G-YST2Q6D0WP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//const analytics = getAnalytics(app);
//const colRef = collection(db, 'task')

async function query() {
    try {
        const taskSnapshot = await getDocs(collection(db, 'task'))
        return taskSnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
    } catch (err) {
        console.log('faild to get collection', err);
    }
}
async function remove(taskId) {
    try {
        console.log('before removed');
        const docRef = await doc(db, 'task', taskId)
        console.log('docRef',docRef);
         await deleteDoc(docRef)
        
      
        //await deleteDoc(collection(db, 'task', taskId))
        console.log('removed');

    } catch (err) {
        console.log('faild to get collection', err);
    }
}

