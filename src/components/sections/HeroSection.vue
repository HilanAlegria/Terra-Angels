<template>
  <section class="hero-section" id="inicio">
    <div class="hero-content">
      <h1 class="hero-title">
        Rescate, Esperanza y <br><span class="text-accent">Una Nueva Vida</span> para Caninos en Cali
      </h1>
      <p class="hero-subtitle">
        Somos una fundación que rescata, rehabilita y encuentra hogares. Financiamos nuestra misión a través de servicios premium de adiestramiento y cuidado canino.
      </p>
      
      <div class="hero-actions">
        <a href="#dona" class="cta-button primary-cta">
          Conoce el Impacto / Dona
        </a>
        
        <a href="#programas" class="cta-button secondary-cta">
          Ver Programas y Servicios
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero-section {
  background: url('@/assets/images/gallery/amistad-perros.jpg') center center no-repeat;
  background-size: cover;
  position: relative;
  height: 90vh; 
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  padding: 0 40px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: var(--color-white);
  max-width: 800px;
  text-align: left;
}

.hero-title {
  font-size: 4.5em; 
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;
}

.text-accent {
  color: var(--color-accent-yellow);
}

.hero-subtitle {
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 40px;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.primary-cta {
  background-color: var(--color-accent-yellow);
  color: var(--color-primary-blue);
  font-weight: 700;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 5px;
}

.secondary-cta {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  font-weight: 500;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.secondary-cta:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* ----------------------------------- */
/* DISEÑO RESPONSIVO */
/* ----------------------------------- */
@media (max-width: 900px) {
  .hero-section {
    height: 70vh; 
    padding: 0 20px;
    /* Centra el contenido en tablet/móvil */
    justify-content: center;
    text-align: center;
  }
  
  .hero-content {
    text-align: center;
  }

  .hero-title {
    font-size: 3em;
  }

  .hero-subtitle {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2em;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 15px;
  }
  
  .primary-cta, .secondary-cta {
    width: 100%;
    text-align: center;
  }
}
</style>