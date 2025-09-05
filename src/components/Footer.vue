<script>
</script>

<template>
    <footer class="site-footer pt-5">
  <div class="container footer-top pb-5">
    <div class="row g-4">
      <!-- Phone & Email -->
      <div class="col-12 col-lg-4">
        <h6 class="ft-title mb-3">Phone &amp; Email</h6>
        <p class="ft-big mb-2">+1-800-444-6666</p>
        <p class="ft-big mb-0">support@belenava.com</p>
      </div>

      <!-- Address -->
      <div class="col-12 col-lg-4">
        <h6 class="ft-title mb-3">Our Address</h6>
        <p class="ft-big mb-2">515 West Ave Norwalk</p>
        <p class="ft-big mb-0">CT 06850 USA</p>
      </div>

      <!-- Work Hours -->
      <div class="col-12 col-lg-4">
        <h6 class="ft-title mb-3">Work Hours</h6>
        <p class="ft-big mb-2"><em>Mon–Fri:</em> 08.00 – 19.00</p>
        <p class="ft-big mb-0"><em>Sunday:</em> Closed</p>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <div class="footer-divider"></div>

  <!-- Bottom bar -->
  <div class="container footer-bottom py-4">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
        <small>© 2025 Belenava. Developed by <strong>webRedox</strong></small>
      </div>

      <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
        <!-- Social -->
        <nav class="footer-social d-flex align-items-center gap-2 me-3">
          <a href="#" aria-label="Facebook" class="social-link"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="X" class="social-link"><i class="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="Instagram" class="social-link"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="Pinterest" class="social-link"><i class="bi bi-pinterest"></i></a>
        </nav>
        <!-- Terms -->
        <a href="#" class="ft-terms">Terms &amp; Conditions</a>
      </div>
    </div>
  </div>
</footer>

</template>

<style>
/* Estructura y colores de fondo */
.site-footer{
  background: #fbf6f1; /* beige claro */
  color: #2a1f1b;      /* texto principal */
  font-family: "Georgia","Times New Roman",serif;
}

/* Encabezados columna */
.ft-title{
  color: #8c4a36;      /* acento marrón */
  letter-spacing: .03em;
  font-weight: 600;
}

/* Texto grande tipo “caligráfico” */
.ft-big{
  font-size: 1.15rem;
}

/* Separadores */
.footer-divider{
  height: 1px;
  width: 100%;
  background-image: linear-gradient(90deg, rgba(0,0,0,0.08) 33%, rgba(0,0,0,0) 0);
  background-size: 8px 1px;
  background-repeat: repeat-x;
  opacity: .8;
}

/* Barra inferior */
.footer-bottom small{
  color: #6f5f57;
}

/* Social */
.footer-social .social-link{
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.08);
  background: #fff;
  color: #2a1f1b;
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;
}
.footer-social .social-link:hover{
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
}

/* Terms link */
.ft-terms{
  color: #6f5f57;
  text-decoration: none;
}
.ft-terms:hover{
  text-decoration: underline;
}

/* Sutil columna/divisor vertical en pantallas grandes (estilo maqueta) */
@media (min-width: 992px){
  .footer-top .col-lg-4{
    position: relative;
  }
  .footer-top .col-lg-4 + .col-lg-4::before{
    content: "";
    position: absolute;
    left: -1.5rem;
    top: .25rem;
    bottom: .25rem;
    width: 1px;
    background: rgba(0,0,0,.06);
  }
}

</style>