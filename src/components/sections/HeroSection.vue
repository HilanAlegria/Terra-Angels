<template>
  <section class="hero-section">
    <div class="hero-overlay">
      <div class="hero-content">
        <img 
          src="@/assets/images/logo-terra-angels.png" 
          alt="Logo de Terra Angels" 
          class="logo-grande"
        />
        <h1 class="nombre-guarderia">
          <span class="text-accent">Terra</span> Angels
        </h1>
        <p class="eslogan">{{ slogan }}</p>
        <a href="#servicios" class="cta-button">
          Conoce Nuestros Servicios
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      slogan: 'Descanso y diversión para tu mejor amigo.'
    };
  }
};
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--color-secondary-mint);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.hero-overlay {
  width: 100%;
  padding: 80px 20px;
  background-color: rgba(255, 255, 255, 0.85);
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.logo-grande {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.nombre-guarderia {
  font-size: 4.5em;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 10px;
  color: var(--color-primary-blue); 
}

.eslogan {
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--color-black);
}
</style>