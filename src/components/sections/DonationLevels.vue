<template>
  <section class="donation-section" id="dona">
    <h2 class="section-title">¡Sé un Héroe! <span class="text-accent">Niveles de Apadrinamiento</span></h2>
    <p class="subtitle">Tu aporte se convierte en rescate, alimento y salud para mascotas de Cali.</p>
    <div class="container">
      <div class="donation-grid">
        <div 
          v-for="(level, index) in donationLevels" 
          :key="level.level" 
          class="donation-card info-card"
          :class="{ 'primary-blue-bg': index % 2 === 0, 'secondary-mint-bg': index % 2 !== 0 }"
        >
          <h3 class="card-title">{{ level.level }}</h3>
          
          <p class="price-cop">{{ level.cop }}</p>
          <p class="price-usd">{{ level.usd }}</p>
          
          <p class="description">{{ level.description }}</p> 
          
          <a href="#" class="donate-cta">Donar Ahora</a>
        </div>
      </div>
      
      <div class="disclaimer">
        <p> Todos los fondos son destinados directamente a la atención veterinaria, alimentación y logística de adopción.</p>
        <p> Terra Angels es una fundación sin fines de lucro. ¡Tu apoyo hace la diferencia!</p>
      </div>

      <div class="cute-dog-image">
        </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';
import { storeToRefs } from 'pinia'; // Asegúrate de tener esto importado si usas storeToRefs

export default {
  // Renombre del componente
  name: 'DonationLevels', 
  setup() {
    const mainStore = useMainStore();
    
    // Cambiamos 'prices' por 'donationLevels'
    const { donationLevels } = storeToRefs(mainStore); 

    return {
      donationLevels
    };
  }
};
</script>

<style scoped>
/* Renombre de la clase principal */
.donation-section {
    padding: 60px 0;
    background-color: var(--color-white);
    color: var(--color-black);
    text-align: center; 
}

/* ----------------------------------- */
/* AJUSTE DEL GRID Y TARJETAS */
/* ----------------------------------- */
.donation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
}

.donation-card {
    /* Mantener estilos de colores */
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

/* El campo 'description' reemplaza a 'frequency' */
.description {
    font-size: 1.1em;
    margin-bottom: 25px;
    /* Estilo diferente al italic de frequency */
    font-style: normal;
    font-weight: 500;
    flex-grow: 1; /* Permite que el texto ocupe espacio y empuje el botón */
}

/* Estilos para el nuevo Botón CTA (Donar Ahora) */
.donate-cta {
    display: block;
    padding: 10px 20px;
    background-color: var(--color-accent-yellow); 
    color: var(--color-primary-blue);
    font-weight: 700;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    margin-top: 15px;
}

.donate-cta:hover {
    background-color: #ffc900; /* Tono más oscuro de amarillo */
}

/* Ajustes de color para el botón en tarjetas secundarias */
.donation-card:nth-child(even) .donate-cta {
    background-color: var(--color-primary-blue); 
    color: var(--color-white);
}

.price-cop {
    /* Mantenido */
    font-size: 2.8em;
    font-weight: 800;
    line-height: 1;
    color: var(--color-accent-yellow);
    margin: 10px 0;
}

.donation-card:nth-child(even) .price-cop {
    /* Mantenido */
    color: var(--color-primary-blue); 
}

/* ----------------------------------- */
/* DISEÑO RESPONSIVO (mantenido) */
/* ----------------------------------- */

@media (max-width: 600px) {
    .donation-grid {
        grid-template-columns: 1fr;
    }
    .donation-card {
        min-height: auto;
    }
}
</style>