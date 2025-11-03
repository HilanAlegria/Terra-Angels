<template>
  <div class="home-view-wrapper">
    <TheHeader />
    
    <div class="home-view">
      <HeroSection />

      <AboutSection id="acerca" />

      <CanineGallery id="galeria" /> 

      <ProgramsList id="programas" />

      <DonationLevels id="dona" />

      <BusinessModel id="negocio" />

    </div>
    
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'; 
import TheFooter from '@/components/shared/TheFooter.vue'; 

import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';

// CAMBIO 1: Renombrar la importación de ServicesList a ProgramsList
import ProgramsList from '@/components/sections/ProgramsList.vue'; 

import BusinessModel from '@/components/sections/BusinessModel.vue'; 

// CAMBIO 2: Renombrar la importación de PricingTable a DonationLevels
import DonationLevels from '@/components/sections/DonationLevels.vue';

import CanineGallery from '@/components/sections/CanineGallery.vue'; 

export default {
  name: 'HomeView',
  components: {
    TheHeader, 
    TheFooter, 
    
    HeroSection,
    AboutSection,
    
    // CAMBIO 3: Usar el nuevo nombre en la lista de componentes
    ProgramsList, 
    
    BusinessModel, 
    
    // CAMBIO 4: Usar el nuevo nombre en la lista de componentes
    DonationLevels, 
    
    CanineGallery, 
  }
};
</script>

<style scoped>
/* Estilos sin cambios */
.home-view-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1; 
}
</style>