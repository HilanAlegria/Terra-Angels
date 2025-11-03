<template>
  <section class="about-section" id="acerca">
    <h2 class="section-title">Acerca de <span class="text-accent">Terra Angels</span></h2>
    <div class="container">
      
      <div class="mission-vision-grid">
        <div class="info-card primary-blue-bg">
          <h3 class="card-title">Nuestra Misión</h3>
          <p>{{ mission }}</p>
        </div>
        <div class="info-card secondary-mint-bg">
          <h3 class="card-title">Nuestra Visión</h3>
          <p>{{ vision }}</p>
        </div>
      </div>

      <h3 class="section-subtitle">Conoce al Equipo</h3>
      <div class="team-grid">
        <div v-for="member in team" :key="member.name" class="team-member-card">
          
          <img 
            :src="member.imageUrl" 
            :alt="`Foto de ${member.name}`" 
            class="member-photo"
          />
          
          <h4 class="member-name">{{ member.name }}</h4>
          <p class="member-role">{{ member.role }}</p>
        </div>
      </div>
      <div class="cute-dog-image">
        
      </div>
    </div>
  </section>
</template>

<script>
import { useMainStore } from '@/stores/mainStore';
import { storeToRefs } from 'pinia'; 

import rosaImage from '@/assets/images/team/rosa.jpeg';
import davidImage from '@/assets/images/team/david.jpeg';
import valeriaImage from '@/assets/images/team/valeria.png';

export default {
  name: 'AboutSection',
  setup() {
    const mainStore = useMainStore();
    const { team, mission, vision } = storeToRefs(mainStore);

    const teamWithImages = team.value.map(member => {
        let imageUrl;
        if (member.name.includes("Rosa")) {
            imageUrl = rosaImage;
        } else if (member.name.includes("David")) {
            imageUrl = davidImage;
        } else {
            imageUrl = valeriaImage;
        }
        return { ...member, imageUrl };
    });

    return {
      mission: mission,
      vision: vision,
      team: teamWithImages 
    };
  }
};
</script>

<style scoped>
.about-section {
  padding: 60px 0;
  background-color: var(--color-white); 
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.team-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.team-member-card {
  width: 280px;
  padding: 20px;
  text-align: center;
  border: 2px solid var(--color-secondary-mint);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.member-photo {
  width: 100px;
  height: 100px;
  object-fit: cover; 
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 3px solid var(--color-primary-blue); 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.member-name {
  font-size: 1.4em;
  color: var(--color-primary-blue);
  margin-bottom: 5px;
}

.member-role {
  font-size: 1em;
  color: var(--color-black);
  min-height: 40px;
}

.cute-dog-image {
  text-align: center;
  margin-top: 50px;
  font-style: italic;
  color: #777;
}

@media (max-width: 768px) {
  .mission-vision-grid {
    grid-template-columns: 1fr;
  }
  .team-member-card {
    width: 90%; 
    margin: 10px auto; 
  }
}
</style>