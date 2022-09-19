import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import messagPlugin from './message/messagPlugin';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'carshoop.firebaseapp.com',
  databaseURL:
    'https://carshoop-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'carshoop',
  storageBucket: 'carshoop.appspot.com',
  messagingSenderId: '929990967733',
  appId: '1:929990967733:web:ee32bbfff9289b7a6499fc',
  measurementId: 'G-5DM0KMT665',
};
const apps = initializeApp(firebaseConfig);
const analytics = getAnalytics(apps);
const db = getDatabase(apps);
const sg = getStorage(apps);

const auth = getAuth();
onAuthStateChanged(auth, () => {
  const app = createApp(App);
  app.use(messagPlugin);
  app.use(store);
  app.use(router);
  app.mount('#app');
});
