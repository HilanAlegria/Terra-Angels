<template>
  <div 
    class="service-card info-card"
    :class="{'primary-blue-bg': service.id % 2 !== 0, 'secondary-mint-bg': service.id % 2 === 0 }"
  >
    <div class="service-content">
      <h3 class="card-title">{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </div>
    <div class="dog-image-placeholder">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style scoped>

.service-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  min-height: 250px;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.primary-blue-bg {
  color: var(--color-white);
}

.primary-blue-bg .card-title {
  color: var(--color-accent-yellow);
}

.service-content p {
    font-size: 1.1em;
}

.dog-image-placeholder {
  text-align: center;
  margin-top: 15px;
  font-style: italic;
  font-size: 0.9em;
  opacity: 0.7;
}
</style>