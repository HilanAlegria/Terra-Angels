<template>
  <section class="gallery-section" id="galeria">
    <div class="container">
      <h2 class="section-title">Momentos Felices de <span class="text-accent">Terra Angels</span></h2>
      <p class="section-subtitle">Una muestra del impacto de nuestros programas: Historias de rescate, rehabilitación y adopciones exitosas.</p>
      
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index" 
          class="gallery-item"
        >
          <img :src="image.url" :alt="image.alt" class="gallery-photo">
        </div>
      </div>
      
      <div class="video-area">
  <h3>Video Destacado: Historias de Transformación y Esperanza</h3>
  
  <div class="video-placeholder responsive-video">
    <video 
      controls 
      autoplay 
      muted 
      loop 
      class="local-video-player"
    >
      <source src="@/assets/videos/recopilacion_ayuda_perros_niños.mp4" type="video/mp4">
      Tu navegador no soporta el tag de video.
    </video>
  </div>
</div>
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/images/gallery/amistad-perros.jpg'; 
import image2 from '@/assets/images/gallery/Trabajo-con-perros.jpg';
import image3 from '@/assets/images/gallery/entrenamiento-perros.jpg';
import image4 from '@/assets/images/gallery/ayuda-con-perros.jpg';

export default {
  name: 'CanineGallery',
  data() {
    return {
      galleryImages: [
        { url: image1, alt: 'Perro rescatado recibiendo cuidados' },
        { url: image2, alt: 'Momento de una adopción exitosa' },
        { url: image3, alt: 'Voluntarios de la fundación trabajando en equipo' },
        { url: image4, alt: 'Perro feliz en su nuevo hogar' },
      ]
    };
  }
};
</script>

<style scoped>
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
}

.gallery-item {
    aspect-ratio: 1 / 1; 
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gallery-section {
  padding: 80px 0;
  background-color: var(--color-light-gray); 
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  color: var(--color-primary-blue);
  font-size: 2.5em;
  margin-bottom: 5px;
}

.section-subtitle {
  font-size: 1.1em;
  color: var(--color-black);
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.video-area {
  margin: 0 auto;
  max-width: 900px;
}

.video-area h3 {
  color: var(--color-primary-blue);
  font-size: 1.8em;
  margin-bottom: 25px;
}

.video-placeholder {
  position: relative;
  padding-bottom: 56.25%; 
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.video-placeholder iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>