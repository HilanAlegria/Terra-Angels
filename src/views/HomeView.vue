<template>
  <div class="home-view-wrapper">
    <TheHeader />
    
    <div class="home-view">
      <HeroSection />

      <AboutSection id="acerca" />

      <ServicesList id="servicios" />

      <BusinessModel id="negocio" />

      <PricingTable id="precios" />
    </div>
    
    <TheFooter />

    </div>
</template>

<script>
// Importamos los componentes de layout
import TheHeader from '@/components/shared/TheHeader.vue'; // <-- AGREGAR
import TheFooter from '@/components/shared/TheFooter.vue'; // <-- AGREGAR

// Importamos los componentes de sección
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import ServicesList from '@/components/sections/ServicesList.vue';
import BusinessModel from '@/components/sections/BusinessModel.vue';
import PricingTable from '@/components/sections/PricingTable.vue';

export default {
  name: 'HomeView',
  components: {
    // Componentes de Layout
    TheHeader, // <-- AGREGAR
    TheFooter, // <-- AGREGAR
    
    // Componentes de Contenido
    HeroSection,
    AboutSection,
    ServicesList,
    BusinessModel,
    PricingTable,
  }
};
</script>

<style scoped>
.home-view-wrapper {
  /* Contenedor que puede ayudar a centrar el contenido si es necesario */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.home-view {
  /* Contenedor principal del contenido */
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1; /* Permite que el contenido ocupe el espacio restante */
}
</style>