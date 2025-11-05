<template>
  <section class="programs-section" id="programas">
    <h2 class="section-title">Nuestros <span class="text-accent">Programas de Impacto y Servicios</span></h2>
    
    <div class="container">
      
      <p class="section-description">El ingreso generado por nuestros servicios financia directamente nuestros programas de rescate y adopción.</p>

      <h3 class="subsection-title">Programas de Rescate y Apoyo Social</h3>
      <div class="programs-grid">
        <ServiceCard 
          v-for="program in impactPrograms" 
          :key="'p-' + program.id" 
          :service="program"
        />
      </div>

      <h3 class="subsection-title">Servicios Comerciales</h3>
      <div class="programs-grid">
        <ServiceCard 
          v-for="service in services" 
          :key="'s-' + service.id" 
          :service="service"
        />
      </div>

      <div class="cta-location-info">
        <p class="ubicacion">Trabajamos en Cali, Colombia, para transformar vidas caninas.</p>
        <router-link to="/involucrate" class="cta-button">¡Pide un Servicio o Hazte Voluntario!</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';
import ServiceCard from '@/components/shared/ServiceCard.vue';
import { storeToRefs } from 'pinia'; 

export default {
  name: 'ProgramsList', 
  components: {
    ServiceCard
  },
  setup() {
    const mainStore = useMainStore();
    
    const { impactPrograms, services } = storeToRefs(mainStore);

    return {
      impactPrograms, 
      services   
    };
  }
};
</script>

<style scoped>
/* Añadir estilos para los nuevos subtítulos */
.subsection-title {
    font-size: 1.8em;
    color: var(--color-primary-blue);
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
}
.section-description {
    font-size: 1.1em;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 30px;
    color: #555;
}
.programs-section {
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

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; 
  margin-bottom: 50px;
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
/* DISEÑO RESPONSIVO (mantenido) */
/* ----------------------------------- */

@media (max-width: 900px) {
    .container {
        max-width: 90%; 
        padding: 0 15px; 
    }
}

@media (max-width: 600px) {
    .programs-grid {
        grid-template-columns: 1fr;
        gap: 20px; 
    }
    .container {
        padding: 0 10px; 
    }
}
</style>