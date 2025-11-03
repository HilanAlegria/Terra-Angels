<template>
  <div class="contact-view">
    <TheHeader />
    <div class="contact-content container">
      <h2 class="section-title">¡Únete a la Misión y <span class="text-accent">Transforma Vidas</span>!</h2>
      <p class="subtitle">Estamos en Cali, Colombia. ¡Conversemos sobre cómo puedes ayudar a nuestros caninos!</p>
      
      <ContactForm />

      <div class="contact-details">
        <h3>Información Directa y Legal</h3>
        <p>Teléfono: +57 300 555 1234 (Coordinación de Voluntariado)</p>
        <p>Email: ayuda@terraangels.org (Cambio de dominio a .org para reflejar Fundación)</p>
        <p>Horario de Oficina: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
        <p class="legal-note">Para reportar un caso de rescate, por favor llame al teléfono de emergencia.</p>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue';
import TheFooter from '@/components/shared/TheFooter.vue';
import ContactForm from '@/components/shared/ContactForm.vue';

export default {
  name: 'ContactView', 
  components: {
    TheHeader,
    TheFooter,
    ContactForm,
  },
};
</script>

<style scoped>
.contact-view {
  background-color: var(--color-white);
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.5em;
  color: var(--color-primary-blue);
  margin-bottom: 5px;
  text-align: center;
}

.text-accent {
    color: var(--color-accent-yellow); 
}

.subtitle {
  font-size: 1.1em;
  margin-bottom: 40px;
  text-align: center;
}

.contact-details {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid var(--color-secondary-mint);
  text-align: center;
}

.contact-details h3 {
  color: var(--color-primary-blue);
  margin-bottom: 10px;
}

.contact-details p {
  margin: 5px 0;
}

.legal-note {
    font-size: 0.9em;
    font-style: italic;
    margin-top: 15px;
    color: #666;
}
</style>