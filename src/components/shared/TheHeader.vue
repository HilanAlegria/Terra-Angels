<template>
  <header class="main-header">
    <div class="header-container">
      <div class="logo-area">
        <img 
          :src="logoUrl" 
          alt="Logo Terra Angels" 
          class="header-logo"
        />
        <router-link to="/" class="site-title">
          Terra <span class="text-accent">Angels</span>
        </router-link>
      </div>
      
      <button 
        class="hamburger-button" 
        @click="isMenuOpen = !isMenuOpen" 
        :class="{ 'is-open': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>

      <nav 
        class="main-nav" 
        :class="{ 'is-open': isMenuOpen }"
        id="main-navigation"
      >
        <ul>
          <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
          <li><a href="#acerca" @click="closeMenu">Nosotros</a></li>
          
          <li><a href="#galeria" @click="closeMenu">Momentos Felices</a></li> 
          
          <li><a href="#programas" @click="closeMenu">Programas y Servicios</a></li> 
          
          <li><a href="#dona" @click="closeMenu">Dona</a></li> 
          
          <li><router-link to="/involucrate" class="nav-cta cta-button" @click="closeMenu">¡Involúcrate!</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImage from '@/assets/images/LOGO-TERRA-ANGELS-02.png';

export default {
  name: 'TheHeader',
  data() {
    return {
      logoUrl: logoImage,
      isMenuOpen: false 
    };
  },
  methods: {
    closeMenu() {
      if (window.innerWidth <= 768) {
          this.isMenuOpen = false;
      }
    }
  }
};
</script>

<style scoped>
.main-header {
  background-color: var(--color-primary-blue);
  color: var(--color-white);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;
}

.header-logo {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.site-title {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.main-nav ul li {
  margin-left: 25px;
}

.main-nav a {
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: var(--color-accent-yellow);
}

.nav-cta {
  padding: 8px 15px !important; 
  font-size: 1em !important;
  margin-left: 20px;
}

/* ----------------------------------- */
/* HAMBURGUESA Y MÓVIL */
/* ----------------------------------- */

.hamburger-button {
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--color-white);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .hamburger-button {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    background-color: var(--color-primary-blue);
    height: 0; 
    overflow: hidden; 
    transition: height 0.4s ease-in-out;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .main-nav.is-open {
    height: 280px; 
  }

  .main-nav ul {
    flex-direction: column; 
    padding: 10px 0;
  }

  .main-nav ul li {
    margin: 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .main-nav a {
    display: block;
    padding: 10px 0;
    margin: 5px 0;
  }
  
  .hamburger-button.is-open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger-button.is-open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger-button.is-open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>