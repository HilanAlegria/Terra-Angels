import './assets/styles/variables.css'; 
import './assets/styles/global-styles.css'; 

import { createApp } from 'vue';
import { createPinia } from 'pinia'; 
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faFacebookF, faPaw); 

const pinia = createPinia(); 

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(pinia); 
app.use(router);

app.mount('#app');