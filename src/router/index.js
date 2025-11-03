// src/router/index.js (Código actualizado)
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
// Importa o crea esta vista:
// import AdoptionView from '../views/AdoptionView.vue'; 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Renombramos la ruta para reflejar la función de la fundación (Voluntariado/Adopción)
      path: '/involucrate', 
      name: 'involucrate',
      component: ContactView
    },
    // // Ruta futura para listar perros disponibles
    // {
    //   path: '/adopta',
    //   name: 'adopta',
    //   component: AdoptionView
    // }
  ],
  
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', 
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;