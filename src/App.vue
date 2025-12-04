<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Servicios from "./components/Servicios.vue";
import Precios from "./components/Precios.vue";
import PiePagina from "./components/Footer.vue";

const showButton = ref(false);




//menu desplegable en dispositivos moviles
function closeMenu() {
  const menu = document.getElementById("navbarNavAltMarkup");

  if (menu && window.bootstrap) {
    const bsCollapse = window.bootstrap.Collapse.getInstance(menu);
    bsCollapse?.hide();
  }
}

//Menu de navegacion 
function scrollTo(sectionId) {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });

  closeMenu(); // cerrar menú después del clic
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

    <!-- Botón flotante volver arriba -->
    <a v-if="showButton" href="#" class="back-to-top d-flex align-items-center justify-content-center"
      @click.prevent="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </a>

    <!-- Menu de navegacion -->
    <nav class="contenedor-menu-navegacion navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between">

        <!-- SECCIÓN IZQUIERDA — LOGO -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="/Logo.png" alt="Logo" style="height:40px;">
        </a>

        <!-- Menu de hamburguesa -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <!-- SECCIÓN CENTRAL — MENÚ -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" @click.prevent="scrollTo('sobre-mi')">Sobre mí</a>
            <a class="nav-link" @click.prevent="scrollTo('servicios')">Mis servicios</a>
            <a class="nav-link" @click.prevent="scrollTo('precios')">Precios</a>
          </div>
        </div>

      </div>
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
    <section id="sobre-mi" class="artist-about py-5">
      <div class="container contenedor-sobre-mi p-4">
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
          <div class="col-lg-6 text-center d-flex justify-content-center align-items-center">
            <figure class="img-sobre-mi" data-aos="fade-up">
               <img src="/Logo.png" alt="Logo" style="height:40px;">
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


  </div>
</template>

<style>
/*Menu de navegacion*/
.contenedor-menu-navegacion {
  padding: 25px;
  background-color: var(--color-primario) !important;
  border-bottom: 1px solid white;
}

.navbar-nav a {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
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


.img-sobre-mi img {
  width: 400px;
  height: 400px;
  object-fit: cover;
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
