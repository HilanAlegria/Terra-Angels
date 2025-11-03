<template>
  <footer class="main-footer">
    <div class="footer-container">
      
      <div class="footer-info">
        <h3 class="footer-title">Terra Angels</h3>
        <p>Rescatando, rehabilitando y promoviendo la adopción responsable de caninos en Cali.</p>
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
          <li><a href="/adopta">Perros en Adopción</a></li> 
          <li><a href="#">Política de Privacidad</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h4 class="links-title">Conéctate</h4>
        <div class="social-icons">
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
/* Los estilos se mantienen, pero añadimos el estilo para el email en el área social */
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

.social-icons img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  filter: invert(100%); 
}

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
    margin: 0 auto 15px;
  }
}
</style>