<template>
  <section class="pricing-section" id="precios">
    <h2 class="section-title">Nuestras Tarifas de <span class="text-accent">Amor y Cuidado</span></h2>
    <p class="subtitle">Precios válidos para Cali, Colombia (Valores en USD aproximados)</p>
    <div class="container">
      <div class="pricing-grid">
        <div 
          v-for="(price, index) in prices" 
          :key="price.service" 
          class="price-card info-card"
          :class="{ 'primary-blue-bg': index % 2 === 0, 'secondary-mint-bg': index % 2 !== 0 }"
        >
          <h3 class="card-title">{{ price.service }}</h3>
          <p class="price-cop">{{ price.cop }}</p>
          <p class="price-usd">{{ price.usd }}</p>
          <p class="frequency">{{ price.frequency }}</p>
        </div>
      </div>
      
      <div class="disclaimer">
        <p> Los precios de Adiestramiento Canino varían según el nivel de personalización y duración del programa.</p>
        <p> La tarifa de USD es una estimación basada en la tasa de cambio actual.</p>
      </div>

      <div class="cute-dog-image">
        
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';

export default {
  name: 'PricingTable',
  setup() {
    const mainStore = useMainStore();
    return {
      prices: mainStore.prices 
    };
  }
};
</script>

<style scoped>
.pricing-section {
    padding: 60px 0;
    background-color: var(--color-white);
    color: var(--color-black);
    text-align: center; 
}

.container {
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 20px;
}

/* ----------------------------------- */
/* TÍTULO Y SUBTÍTULO CENTRADOS */
/* ----------------------------------- */
.section-title, .section-subtitle {
    text-align: center;
    margin-bottom: 5px;
}

/* ----------------------------------- */
/* AJUSTE DEL GRID */
/* ----------------------------------- */
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
}

/* ----------------------------------- */
/* AJUSTE DE RECUADROS (PRICE CARD) */
/* ----------------------------------- */
.price-card {
    background-color: var(--color-primary-blue); 
    color: var(--color-white);
    padding: 35px 25px; 
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    min-height: 380px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.price-card:nth-child(even) {
    background-color: var(--color-secondary-mint); 
    color: var(--color-black);
}

.price-service {
    font-size: 1.6em; 
    font-weight: 700;
    margin-bottom: 15px;
}

.price-cop {
    font-size: 2.8em;
    font-weight: 800;
    line-height: 1;
    color: var(--color-accent-yellow);
    margin: 10px 0;
}

.price-card:nth-child(even) .price-cop {
    color: var(--color-primary-blue); 
}

.price-usd {
    font-size: 1.3em;
    opacity: 0.8;
    margin-bottom: 10px;
}

.price-frequency {
    font-size: 1.1em;
    font-style: italic;
    margin-bottom: 25px;
}

.disclaimer {
    font-size: 0.9em;
    opacity: 0.7;
    margin-top: 30px;
}

/* ----------------------------------- */
/* DISEÑO RESPONSIVO */
/* ----------------------------------- */

@media (max-width: 600px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    .price-card {
        min-height: auto;
    }
}
</style>