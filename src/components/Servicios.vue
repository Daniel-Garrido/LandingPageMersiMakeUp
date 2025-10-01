<template>
  <section id="servicios" class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-2" data-aos="fade-up">
        Servicios
      </h2>
      <p class="parrafo text-center "   data-aos="fade-up">
        Resalta tu belleza con nuestros servicios profesionales
      </p>


      <!-- Grid de 3 columnas -->
      <div class="row g-4 justify-content-center">

        <!-- Servicio 1 -->
        <div class="col-md-4 text-center"   data-aos="fade-up">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalBridal">
            <img src="/Img/ServicioCejas1.jpg" class="img-fluid rounded" alt="Bridal Makeup" />
          </div>
          <h5 class="mt-3">Cejas</h5>
        </div>

        <!-- Servicio 2 -->
        <div class="col-md-4 text-center"   data-aos="fade-up">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalHair">
            <img src="/Img/ServicioMaquillaje2.png" class="img-fluid rounded" alt="Hair Makeup" />
          </div>
          <h5 class="mt-3">Maquillaje</h5>
        </div>

        <!-- Servicio 3 -->
        <div class="col-md-4 text-center"   data-aos="fade-up">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalFace">
            <img src="/Img/ServicioLashLifting3.jpg" class="img-fluid rounded" alt="Face & Eye Makeup" />
          </div>
          <h5 class="mt-3">Lash Lifting</h5>
        </div>
      </div>
    </div>

    <!-- Modal Cejas -->
    <div class="modal fade" id="modalBridal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Bridal Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <p>
              Servicio especializado para novias, destacando la belleza natural con técnicas
              profesionales de larga duración. Ideal para tu día especial ✨.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Maquillaje -->
    <div class="modal fade" id="modalHair" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Hair Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <p>
              Peinados y estilizado profesional para eventos especiales. Desde looks elegantes
              hasta modernos, adaptados a tu estilo personal.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Lash Lifting -->
    <div class="modal fade" id="modalFace" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Face & Eye Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <p>
              Realce de rostro y ojos con técnicas avanzadas de maquillaje.
              Ideal para sesiones de fotos, eventos y ocasiones especiales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
.service-card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.service-card:hover {
  transform: scale(1.05);
}

.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
