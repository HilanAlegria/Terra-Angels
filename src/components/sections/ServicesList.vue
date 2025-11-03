<template>
  <section class="services-section" id="servicios">
    <h2 class="section-title">Nuestros Servicios de <span class="text-accent">Calidad Canina</span></h2>
    <div class="container">
      <div class="services-grid">
        <ServiceCard 
          v-for="service in services" 
          :key="service.title" 
          :service="service"
        />
      </div>

      <div class="cta-location-info">
        <p class="ubicacion">Ubicación principal: Cali, Colombia</p>
        <router-link to="/contacto" class="cta-button">Ver Precios Ahora</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';
import ServiceCard from '@/components/shared/ServiceCard.vue';
import { storeToRefs } from 'pinia'; 

export default {
  name: 'ServicesList',
  components: {
    ServiceCard
  },
  setup() {
    const mainStore = useMainStore();
    
    const { services } = storeToRefs(mainStore);

    return {
      services 
    };
  }
};
</script>

<style scoped>
.services-section {
  padding: 60px 0;
  color: var(--color-black);
  
  width: 100%; 
  box-sizing: border-box; 
}

.container {
  max-width: 1100px; 
  margin: 0 auto; 
  padding: 0 20px; 
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; 
  margin-bottom: 50px;
}

.service-card {
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  word-wrap: break-word; 
}

.card-title {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 10px;
}

.service-content p {
  font-size: 1em;
  line-height: 1.5;
}

.cta-location-info {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  border-top: 2px solid var(--color-primary-blue);
}

.ubicacion {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 500;
  color: var(--color-primary-blue);
}

/* ----------------------------------- */
/* DISEÑO RESPONSIVO */
/* ----------------------------------- */

@media (max-width: 900px) {
    .container {
        max-width: 90%; 
        padding: 0 15px; 
    }
}

@media (max-width: 600px) {
    .services-grid {
        grid-template-columns: 1fr;
        gap: 20px; 
    }
    .container {
        padding: 0 10px; 
    }
}
</style>