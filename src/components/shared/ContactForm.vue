<template>
  <form @submit.prevent="submitForm" class="contact-form secondary-mint-bg">
    <div class="form-group">
      <label for="name">Nombre Completo <span class="required">*</span></label>
      <input type="text" id="name" v-model="form.name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Correo Electrónico <span class="required">*</span></label>
      <input type="email" id="email" v-model="form.email" required>
    </div>

    <div class="form-group">
      <label for="phone">Teléfono de Contacto</label>
      <input type="tel" id="phone" v-model="form.phone">
    </div>

    <div class="form-group">
      <label for="service">Servicio de Interés <span class="required">*</span></label>
      <select id="service" v-model="form.service" required>
        <option value="" disabled>Selecciona un servicio</option>
        <option>Adiestramiento Canino</option>
        <option>Guardería en Casa (Dog Sitting)</option>
        <option>Paseos Caninos</option>
        <option>Charlas Educativas</option>
        <option>Terapias Asistidas Educativas (TAE)</option>
        <option>Consulta General</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">Mensaje o Consulta <span class="required">*</span></label>
      <textarea id="message" v-model="form.message" rows="5" required></textarea>
    </div>

    <button type="submit" class="cta-button submit-button">Enviar Consulta</button>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      successMessage: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí se enviaría la data a un backend o servicio de email (ej: Netlify Forms, Google Sheets, API)
      console.log('Formulario Enviado:', this.form);
      
      this.successMessage = '¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.';
      // Limpiar formulario
      this.form = { name: '', email: '', phone: '', service: '', message: '' };
    }
  }
};
</script>

<style scoped>
.contact-form {
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  color: var(--color-black);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-primary-blue);
}

.required {
    color: red;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1em;
}

.submit-button {
  width: 100%;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.success-message {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--color-accent-yellow);
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: var(--color-primary-blue);
}
</style>