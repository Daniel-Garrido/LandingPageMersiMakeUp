<template>
  <section id="servicios" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5" style="font-family: 'PP Gosha Sans', sans-serif; color:#DC702D;">
        Servicios
      </h2>

      <!-- Grid de 3 columnas -->
      <div class="row g-4 justify-content-center">
        
        <!-- Servicio 1 -->
        <div class="col-md-4 text-center">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalBridal">
            <img src="/Img/Servicio.jpg" class="img-fluid rounded" alt="Bridal Makeup" />
          </div>
          <h5 class="mt-3">Bridal Makeup</h5>
        </div>

        <!-- Servicio 2 -->
        <div class="col-md-4 text-center">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalHair">
            <img src="/Img/Servicio3.jpg" class="img-fluid rounded" alt="Hair Makeup" />
          </div>
          <h5 class="mt-3">Hair Makeup</h5>
        </div>

        <!-- Servicio 3 -->
        <div class="col-md-4 text-center">
          <div class="service-card" data-bs-toggle="modal" data-bs-target="#modalFace">
            <img src="/Img/Servicio2.jpg" class="img-fluid rounded" alt="Face & Eye Makeup" />
          </div>
          <h5 class="mt-3">Face & Eye Makeup</h5>
        </div>
      </div>
    </div>

    <!-- Modal Bridal -->
    <div class="modal fade" id="modalBridal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Bridal Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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

    <!-- Modal Hair -->
    <div class="modal fade" id="modalHair" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Hair Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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

    <!-- Modal Face -->
    <div class="modal fade" id="modalFace" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title">Face & Eye Makeup</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
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

<style scoped>
.service-card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.service-card:hover {
  transform: scale(1.05);
}

</style>
