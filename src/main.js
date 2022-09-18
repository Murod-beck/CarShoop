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
  databaseURL: process.env.VUE_APP_URL,
  projectId: 'carshoop',
  storageBucket: 'carshoop.appspot.com',
  messagingSenderId: process.env.VUE_APP_ID,
  appId: process.env.VUE_APP_API_ID,
  measurementId: process.env.VUE_APP_MN_ID,
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
