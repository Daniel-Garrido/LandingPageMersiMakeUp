<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Servicios from "./components/Servicios.vue";
import Precios from "./components/Precios.vue";
import PiePagina from "./components/Footer.vue";

const activeLink = ref("inicio");
const showButton = ref(false);
const isOpen = ref(false);

function setActive(section) {
  activeLink.value = section;
  isOpen.value = false; // cerrar menú al dar clic en móvil
}

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// Mostrar/ocultar botón según scroll
function handleScroll() {
  showButton.value = window.scrollY > 300;
}

// Regresar arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div id="app">
    <!-- Menú de navegación -->
    <nav class="menu_nav shadow-sm">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <div class="logo">
          <img src="/Logo.png" alt="Logo" width="120" class="logo-img" />
        </div>

        <!-- Links en escritorio -->
        <ul class="nav-links d-none d-lg-flex">
          <li>
            <a href="#"
               :class="{ active: activeLink === 'inicio' }"
               @click="setActive('inicio')">Inicio</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'servicios' }"
               @click="setActive('servicios')">Servicios</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'precios' }"
               @click="setActive('precios')">Precios</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'contacto' }"
               @click="setActive('contacto')">Contacto</a>
          </li>
        </ul>

        <!-- Botón hamburguesa en móvil -->
        <button class="hamburger d-lg-none" @click="toggleMenu">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>
      </div>

      <!-- Menú desplegable solo en móvil -->
      <transition name="slide">
        <ul v-if="isOpen" class="nav-menu d-lg-none">
          <li>
            <a href="#"
               :class="{ active: activeLink === 'inicio' }"
               @click="setActive('inicio')">Inicio</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'servicios' }"
               @click="setActive('servicios')">Servicios</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'precios' }"
               @click="setActive('precios')">Precios</a>
          </li>
          <li>
            <a href="#"
               :class="{ active: activeLink === 'contacto' }"
               @click="setActive('contacto')">Contacto</a>
          </li>
        </ul>
      </transition>
    </nav>

    <!-- Hero -->
    <section class="hero_content hero vh-100 d-flex align-items-center">
      <div class="container text-center">
        <h1 class="mb-4" data-aos="fade-up">Mersi Garrido Makeup & Hair Stylist</h1>
        <p class="parrafo mb-4" data-aos="fade-up">
          ¡Hola! Soy Mersi Garrido. Me apasiona ayudar a las personas a sentirse bellas y seguras.
          Por eso he dedicado los últimos años a especializarme en Maquillaje Profesional,
          Diseño de Cejas y Tratamientos de Lifting de Pestañas.
        </p>
        <a href="#" class="boton-contenido px-4" data-aos="fade-up">Agenda tu cita</a>
      </div>
    </section>

    <!-- Sobre mí -->
    <section class="artist-about py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <p class="text-uppercase text-muted small mb-2" data-aos="fade-up">Makeup Artist</p>
            <h2 class="fw-bold mb-4" data-aos="fade-up">Mersi Garrido</h2>
            <p class="parrafo mb-3" data-aos="fade-up">
              ¡Hola! Soy Mersi Garrido, y si estás aquí, es porque sabes que un buen look no solo se
              lleva, ¡se siente!.
            </p>
            <p class="parrafo" data-aos="fade-up">
              Mi propósito es simple pero poderoso: que te mires al espejo y digas, "¡Wow!".
              He dedicado mis últimos 2 años a perfeccionar el arte del Maquillaje y Estilismo
              de Cabello porque amo la transformación y la confianza que solo un buen trabajo puede dar.
              ¿Mi especialidad? Capturar tu belleza más luminosa.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <figure class="img-sobre-mi" data-aos="fade-up">
              <img src="/Img/SobreMi.jpg" alt="Retrato de Mersi Garrido" class="img-fluid rounded shadow" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Servicios -->
    <Servicios />

    <!-- Sección Precios -->
    <Precios />

    <!-- Pie de página -->
    <PiePagina />

    <!-- Botón flotante volver arriba -->
    <a v-if="showButton"
       href="#"
       class="back-to-top d-flex align-items-center justify-content-center"
       @click.prevent="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>

<style>
/* NAVBAR */
.menu_nav {
  background-color: var(--color-primario);
  padding: 1rem;
  position: relative;
  z-index: 1000;
}

.logo-img {
  max-height: 50px;
  object-fit: contain;
}

/* Links escritorio */
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
}

.nav-links a {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--color-secundario);
}

/* Botón hamburguesa */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}
.hamburger span {
  display: block;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Menú móvil */
.nav-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-primario);
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}
.nav-menu li {
  list-style: none;
}
.nav-menu a {
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
}
.nav-menu a:hover,
.nav-menu a.active {
  color: var(--color-secundario);
}

/* Animación de slide */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* HERO */
.hero_content {
  background-color: var(--color-primario);
}
.hero_content h1 {
  font-size: 45px;
  font-family: "Didact Gothic", sans-serif;
  font-weight: 400;
  color: var(--color-secundario);
}
.img-sobre-mi img{
  width: 80%;
}
/* Botón volver arriba */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--color-secundario);
  text-decoration: none;
  padding: 0;
  font-size: 1.5rem;
  line-height: 1;
  z-index: 1000;
}
.back-to-top:hover {
  background-color: var(--color-secundario);
}
.back-to-top i {
  color: white;
  text-decoration: none;
}
</style>

