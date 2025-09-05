<script>
</script>
<template>
    <section
  id="pricing"
  class="pricing-section py-5 py-lg-6"
>
  <div class="container">
    <!-- Encabezado -->
    <div class="row">
      <div class="col-lg-10 mx-auto text-center">
        <p class="eyebrow mb-2">OUR PRICING</p>
        <h2 class="title display-4 mb-5">Pricing Plan</h2>
      </div>
    </div>

    <!-- Lista de precios -->
    <div class="row g-5">
      <!-- Columna izquierda -->
      <div class="col-lg-6">
        <!-- Item -->
        <article class="price-item mb-5">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Bridal Makeup</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$200</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision bridal makeup.
          </p>
        </article>

        <article class="price-item mb-5">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Face Makeup</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$45</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision face makeup.
          </p>
        </article>

        <article class="price-item">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Hair Color</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$60</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision hair color.
          </p>
        </article>
      </div>

      <!-- Columna derecha -->
      <div class="col-lg-6">
        <article class="price-item mb-5">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Hair Makeup</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$50</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision hair makeup.
          </p>
        </article>

        <article class="price-item mb-5">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Event Makeup</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$100</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision event makeup.
          </p>
        </article>

        <article class="price-item">
          <div class="price-line d-flex align-items-center">
            <h3 class="service m-0">Nails</h3>
            <span class="dots flex-grow-1 mx-3"></span>
            <span class="price">$50</span>
          </div>
          <p class="desc m-0">
            Our stylist consults &amp; delivers you a precision nail color.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

</template>

<style>
/* --------- Variables --------- */
:root{
  --prx-text: #fff;          /* texto sobre fondo */
  --prx-muted: rgba(255,255,255,.8);
  --prx-accent: #f0d6b9;     /* detalle sutil */
  --prx-overlay: rgba(80,55,30,.45);  /* oscurece para legibilidad */
}

/* --------- Sección con PARALLAX --------- */
.pricing-section{
  color: var(--prx-text);
  position: relative;
  /* Parallax: imagen fija + overlay para contraste */
  background-image:
    linear-gradient(var(--prx-overlay), var(--prx-overlay)),
    url("/Img/Parallax.jpg");   /* <-- cambia a tu ruta (public/img/...) */
  background-size: cover;
  background-position: right center;
  background-attachment: fixed;    /* efecto parallax */
  background-repeat: no-repeat;
}

/* Espaciado vertical un poco mayor en desktop */
@media (min-width: 992px){
  .py-lg-6{ padding-top: 5.5rem !important; padding-bottom: 5.5rem !important; }
}

/* --------- Encabezado --------- */
.pricing-section .eyebrow{
  letter-spacing: .28em;
  text-transform: uppercase;
  color: var(--prx-accent);
  font-size: .95rem;
  margin: 0;
}
.pricing-section .title{
  font-family: "Georgia","Times New Roman",serif;
  letter-spacing: .01em;
}

/* --------- Items --------- */
.price-item .service{
  font-family: "Georgia","Times New Roman",serif;
  font-weight: 600;
  font-size: clamp(1.25rem, 2.2vw, 1.6rem);
  color: var(--prx-text);
}
.price-item .price{
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--prx-text);
  white-space: nowrap;
}

/* Línea punteada entre nombre y precio */
.price-item .dots{
  border-bottom: 2px dotted rgba(255,255,255,.6);
  height: 0;
  transform: translateY(-2px);
}

/* Descripción */
.price-item .desc{
  color: var(--prx-muted);
  font-style: italic;
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  margin-top: .85rem;
  line-height: 1.8;
}

/* Ajustes responsive */
@media (max-width: 575.98px){
  .pricing-section{
    background-position: center right;
  }
  .price-item .dots{
    border-bottom-width: 1px;
  }
}

</style>