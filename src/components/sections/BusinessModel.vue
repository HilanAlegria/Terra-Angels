<template>
  <section class="business-section" id="negocio">
    <h2 class="section-title">Nuestra Estructura Clave</h2>
    <div class="container">
      
      <div class="model-grid">
        
        <div class="model-card secondary-mint-bg">
          <h3 class="card-title">Socios y Actividades</h3>
          
          <h4 class="list-subtitle">Socios Clave:</h4>
          <ul>
            <li v-for="(partner, index) in businessData.partners" :key="index">
              {{ partner }}
            </li>
          </ul>

          <h4 class="list-subtitle">Actividades Clave:</h4>
          <ul>
            <li v-for="(activity, index) in businessData.activities" :key="index">
              {{ activity }}
            </li>
          </ul>
        </div>
        
        <div class="model-card primary-blue-bg">
          <h3 class="card-title">Clientes y Conexión</h3>
          
          <h4 class="list-subtitle text-yellow-override">Canales o Redes Sociales:</h4>
          <ul>
            <li v-for="(channel, index) in businessData.channels" :key="index">
              {{ channel }}
            </li>
          </ul>

          <h4 class="list-subtitle text-yellow-override">Relación y Seguimiento:</h4>
          <ul>
            <li v-for="(rel, index) in businessData.relationships" :key="index">
              {{ rel }}
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';
import { storeToRefs } from 'pinia'; // <-- Importación crucial para la reactividad

export default {
  name: 'BusinessModel',
  setup() {
    const mainStore = useMainStore();
    
    // Usamos storeToRefs para desestructurar y mantener la reactividad del objeto businessModel
    const { businessModel } = storeToRefs(mainStore);
    
    return {
      // Exponemos businessModel al template como businessData
      businessData: businessModel
    };
  }
};
</script>

<style scoped>
.business-section {
  padding: 60px 0;
  background-color: var(--color-white);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.model-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.model-card {
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  min-height: 550px; 
}

.list-subtitle {
  font-size: 1.4em;
  margin-top: 25px;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-primary-blue);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 3px;
}

.primary-blue-bg .list-subtitle {
  color: var(--color-accent-yellow); 
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.model-card ul {
  list-style: none;
  padding-left: 0;
}

.model-card ul li {
  margin-bottom: 10px;
  font-size: 1.05em;
  line-height: 1.5;
  padding-left: 25px;
  position: relative;
}

/* Estilizar la viñeta con un círculo de color */
.model-card ul li::before {
  content: ' ';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
  background-color: var(--color-accent-yellow);
}

@media (max-width: 768px) {
  .model-grid {
    grid-template-columns: 1fr;
  }
}
</style>