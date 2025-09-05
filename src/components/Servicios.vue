<script setup>
</script>

<template>
  <section id="services" class="services-section py-5">
  <div class="container">
    <!-- Encabezado -->
    <div class="row mb-4 mb-lg-5">
      <div class="col-lg-10">
        <p class="eyebrow mb-2">WHAT WE DO</p>
        <h2 class="title display-5 mb-3">Services</h2>
        <p class="subtitle">
          Our main services face makeup, eyebrow makeup, haircut makeup, facial makeup, dressing table,
          bride makeup, wedding makeup, effect makeup, occasion makeup etc.
        </p>
      </div>
    </div>

    <!-- Carrusel -->
    <div id="servicesCarousel" class="carousel slide" data-bs-ride="false">
      <div class="carousel-inner">

        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="row g-5">
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
              <article class="service-card">
                <div class="label-vertical">Occasion Makeup</div>
                <img src="/Img/Servicio1.jpg" alt="Occasion Makeup" class="img-fluid">
              </article>
            </div>
            <!-- Card 2 -->
            <div class="col-12 col-md-6 col-lg-4">
              <article class="service-card">
                <div class="label-vertical">Bridal Makeup</div>
                <img src="/Img/Servicio1.jpg" alt="Bridal Makeup" class="img-fluid">
              </article>
            </div>
            <!-- Card 3 -->
            <div class="col-12 col-md-6 col-lg-4 d-md-none d-lg-block">
              <article class="service-card">
                <div class="label-vertical">Hair Makeup</div>
                <img src="/Img/Servicio1.jpg" alt="Hair Makeup" class="img-fluid">
              </article>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="row g-5">
            <div class="col-12 col-md-6 col-lg-4">
              <article class="service-card">
                <div class="label-vertical">Eyebrow</div>
                <img src="/Img/Servicio1.jpg" alt="Eyebrow" class="img-fluid">
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <article class="service-card">
                <div class="label-vertical">Facial</div>
                <img src="/Img/Servicio1.jpg" alt="Facial" class="img-fluid">
              </article>
            </div>
            <div class="col-12 col-md-6 col-lg-4 d-md-none d-lg-block">
              <article class="service-card">
                <div class="label-vertical">Editorial</div>
                <img src="/Img/Servicio1.jpg" alt="Editorial" class="img-fluid">
              </article>
            </div>
          </div>
        </div>

      </div>

      <!-- Controles -->
      <button class="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- Indicadores (opcional) -->
      <div class="carousel-indicators mt-4">
        <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>
:root{
  --srv-text:#2a1f1b;
  --srv-muted:#7d6c64;
  --srv-accent:#c7a27b;
  --srv-card-bg:#f3e9df; /* beige suave para el bloque desfasado */
}

.services-section{
  color: var(--srv-text);
  font-family: "Georgia","Times New Roman",serif;
}
.services-section .eyebrow{
  letter-spacing:.18em;
  color: var(--srv-accent);
  text-transform: uppercase;
  font-size:.95rem;
  margin:0;
}
.services-section .title{
  letter-spacing:.01em;
  margin:0;
}
.services-section .subtitle{
  font-style: italic;
  font-size: clamp(1rem,1.2vw,1.25rem);
  color: var(--srv-text);
  line-height:1.9;
  margin:0;
}

/* ===== Tarjeta ===== */
.service-card{
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  /* Altura consistente parecida al ejemplo */
  aspect-ratio: 16/11;        /* controla el alto; ajusta si lo necesitas */
}

/* Fondo desfasado (el bloque beige detrás de la foto) */
.service-card::before{
  content:"";
  position:absolute;
  z-index:0;
  left:8%;
  top:-24px;
  width:84%;
  height:78%;
  background: var(--srv-card-bg);
  border-radius: 10px;
}

/* Imagen principal */
.service-card img{
  position:relative;
  z-index:1;
  width:100%;
  height:100%;
  object-fit: cover;
  display:block;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
}

/* Etiqueta vertical */
.label-vertical{
  position:absolute;
  right:-.5rem;
  top: 12%;
  height: 76%;
  display:flex;
  align-items:center;
  font-size: 1rem;
  color: var(--srv-text);
  writing-mode: vertical-rl;     /* texto vertical */
  text-orientation: mixed;
  background: transparent;
  z-index:2;
}

/* Carrusel: puntos más pequeños y separación superior */
#servicesCarousel .carousel-indicators [data-bs-target]{
  width: 10px; height: 10px; border-radius: 50%;
}
#servicesCarousel .carousel-control-prev,
#servicesCarousel .carousel-control-next{
  filter: drop-shadow(0 2px 4px rgba(0,0,0,.25));
}

/* Responsivo */
@media (max-width: 991.98px){
  .service-card::before{ left:6%; width:88%; }
}
@media (max-width: 575.98px){
  .services-section .subtitle{ font-size:1rem; }
  .label-vertical{ right:-.35rem; font-size:.95rem; }
}

</style>
