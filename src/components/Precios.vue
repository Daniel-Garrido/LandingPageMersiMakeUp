<script>
</script>

<template>

  <section id="precios" class="pricingSection_Hijo py-5 py-lg-6">
    <div class="container contenedor-precios">

      <!-- Encabezado -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="display-5 fw-bold text-white">Plan de precios</h2>
        </div>
      </div>

      <div class="row g-5">

        <!-- Columna izquierda -->
        <div class="col-lg-6">

          <article class="priceItem_Hijo mb-5">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Lash Lifting clásico</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$100.00 mxn</span>
            </div>
          
          </article>

          <article class="priceItem_Hijo mb-5">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Lash Lifting efecto rimel</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$150.00 mxn</span>
            </div>
          
          </article>

          <article class="priceItem_Hijo">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Planchado de cejas</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$100.00 mxn</span>
            </div>
          
          </article>

        </div>

        <!-- Columna derecha -->
        <div class="col-lg-6">

          <article class="priceItem_Hijo mb-5">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Cejas HD</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$150.00 mxn</span>
            </div>
            
          </article>

          <article class="priceItem_Hijo mb-5">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Cejas 4K</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$180.00 mxn</span>
            </div>
           
          </article>

          <article class="priceItem_Hijo">
            <div class="d-flex align-items-center">
              <h3 class="h5 mb-0">Maquillaje</h3>
              <span class="dotsLine_Hijo flex-grow-1 mx-3"></span>
              <span class="h6 mb-0">$200.00 mxn </span>
            </div>
          
          </article>

        </div>
      </div>

    </div>
  </section>
</template>


<style>

.contenedor-precios span{
  color: white;
}

.contenedor-precios h2{
  font-size: 3em;
  font-family: "Cormorant Garamond", serif;
}
  

.contenedor-precios h3{
  font-size: 30px !important;
  color: white;
  font-family: "Cormorant Garamond", serif;
}

/* Fondo parallax */
.pricingSection_Hijo {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/Img/Parallax.jpg");
  background-size: cover;
  background-position: center right;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

/* Línea punteada entre texto y precio */
.dotsLine_Hijo {
  border-bottom: 2px dotted currentColor;
  height: 0;
  transform: translateY(-2px);
}

/* Separación y diseño base del item */
.priceItem_Hijo h3,
.priceItem_Hijo span {
  white-space: nowrap;
}

</style>