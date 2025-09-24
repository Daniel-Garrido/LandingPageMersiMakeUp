<script>
</script>

<template>
  <!-- contenedor de pie de pagina -->
  <footer class="site-footer pt-5">

    <div class="container footer-top pb-5">
      <div class="row g-4">
        <!-- contenedor contacto -->
        <div class="col-12 col-lg-4">
          <h6 class="ft-title mb-3">Contactame</h6>
          <p class="ft-big mb-2"> 999 638 3996</p>
          <p class="ft-big mb-0">mersigarridohoil@gmail.com</p>
        </div>

        <!-- Contenedor direccion -->
        <div class="col-12 col-lg-4">
          <h6 class="ft-title mb-3">Mi dirección</h6>
          <p class="ft-big mb-2">Calle 19 x 18 y 20 </p>
          <p class="ft-big mb-0">Cuzamá, Yucatán</p>
        </div>

        <!-- Contenedor horario de trabajo -->
        <div class="col-12 col-lg-4">
          <h6 class="ft-title mb-3">Horario</h6>
          <p class="ft-big mb-2"><em>Lunes a viernes :</em> 08.00 am – 9.00 pm</p>
          <p class="ft-big mb-0"><em>Sábado:</em> 11:00 am - 7:00 pm</p>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="footer-divider"></div>

    <!-- Bottom bar -->
    <div class="container footer-bottom py-4">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
          <small> Desarrollado por &copy; Daniel Garrido</small>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
          <!-- redes sociales -->
          <nav class="footer-social d-flex align-items-center gap-3 me-3">
            <a href="https://www.facebook.com/profile.php?id=100072208549016" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mersi_browsartist/" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </nav>
        </div>

      </div>
    </div>
  </footer>

</template>

<style>


/* estilos a los iconos de redes sociales */
.footer-social{
  gap: 10px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30px;        
  height: 30px;
  border-radius: 50%;
 
  color: #ffffff;        
  font-size: 20px;  
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-social a:hover {
  transform: translateY(-3px)
}

.footer-social a:nth-child(1) {
  background-color: #1877f2; 
}

.footer-social a:nth-child(2) {
  background-color: #e4405f;
}

</style>