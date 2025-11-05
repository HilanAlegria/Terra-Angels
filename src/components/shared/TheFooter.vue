<template>
  <footer class="main-footer">
    <div class="footer-container">
      
      <div class="footer-info">
        <h3 class="footer-title">Terra Angels</h3>
        <p>Rescatando, rehabilitando y promoviendo la adopción responsable de animales en Cali.</p>
        <p class="location">
          Fundación sin ánimo de lucro - Cali, Valle del Cauca, Colombia
        </p>
      </div>

      <div class="footer-links">
        <h4 class="links-title">Enlaces Rápidos</h4>
        <ul>
          <li><a href="#acerca">Nuestra Misión</a></li>
          <li><a href="#programas">Nuestros Programas</a></li>
          <li><a href="#dona">Apadrina / Dona</a></li>
          <li><a href="/adopta">Mascotas en Adopción</a></li> 
          <li><a href="#">Política de Privacidad</a></li>
        </ul>
      </div>

      <div class="footer-social">
    <h4 class="links-title">Conéctate</h4>
    <div class="social-icons">
      
      <a href="URL_TU_INSTAGRAM" target="_blank" aria-label="Instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" /> 
      </a>
      
      <a href="URL_TU_FACEBOOK" target="_blank" aria-label="Facebook">
        <font-awesome-icon :icon="['fab', 'facebook-f']" /> 
      </a>
      
      <a href="https://fundacionrunningpaws.org/" target="_blank" aria-label="Website Adicional">
        <font-awesome-icon :icon="['fas', 'paw']" /> 
      </a>

    </div>
    <p class="contact-text">¡Involúcrate o sé Voluntario!</p>
    <p class="contact-email">Email: ayuda@terraangels.org</p> 
</div>
    </div>
    
    <div class="copyright">
      &copy; {{ currentYear }} Fundación Terra Angels. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
/* Los estilos base se mantienen */
.main-footer {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  padding: 40px 0 10px;
  margin-top: 50px;
  border-top: 5px solid var(--color-accent-yellow);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-info, .footer-links, .footer-social {
  width: 30%;
  min-width: 250px;
  margin-bottom: 20px;
}

.footer-title {
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--color-accent-yellow);
}

.location {
  font-weight: 600;
  margin-top: 10px;
}

.links-title {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--color-secondary-mint);
  display: inline-block;
  padding-bottom: 3px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links a {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  line-height: 2;
}

.footer-links a:hover {
  color: var(--color-accent-yellow);
}

/* --- ESTILOS AÑADIDOS/MODIFICADOS PARA ÍCONOS SOCIALES --- */
.social-icons {
  display: flex; /* Alinea los íconos horizontalmente */
  gap: 15px;
  margin-top: 10px;
}

.social-icons a {
  color: var(--color-white);
  font-size: 1.8em; /* Tamaño del ícono */
  transition: color 0.3s ease;
  text-decoration: none;
}

.social-icons a:hover {
  color: var(--color-accent-yellow);
}

/* Si usas Font Awesome o una librería similar, estos estilos son suficientes.
   Si usas imágenes SVG, el estilo 'social-icons img' debe ser:
.social-icons img {
    width: 30px;
    height: 30px;
    filter: invert(100%); 
}
*/

/* Resto de estilos */
.contact-text {
  margin-top: 15px;
  font-style: italic;
  color: var(--color-secondary-mint);
}

.contact-email {
  margin-top: 5px;
  font-weight: 500;
}

.copyright {
  text-align: center;
  padding: 10px 0;
  font-size: 0.9em;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-info, .footer-links, .footer-social {
    width: 100%;
    min-width: auto;
    margin-bottom: 30px;
  }
  .links-title {
    /* Centra el título en móvil */
    margin: 0 auto 15px; 
  }
  .social-icons {
    /* Centra los íconos */
    justify-content: center;
  }
}
</style>