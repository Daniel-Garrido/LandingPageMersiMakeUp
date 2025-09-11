<script setup>
import { ref } from "vue";
import Servicios from "./components/Servicios.vue";
import Precios from "./components/Precios.vue";
import PiePagina from "./components/Footer.vue";

const activeLink = ref("inicio");

function setActive(section) {
    activeLink.value = section;
}
</script>

<template>
    <div id="app">

        <!-- menú de navegación -->
        <nav>
            <div class="container menu_nav">
                <div class="logo">
                    <img src="/Logo.png" alt="Logo" />
                </div>

                <ul>
                    <li>
                        <a href="#" :class="{ active: activeLink === 'inicio' }" @click="setActive('inicio')">Inicio</a>
                    </li>
                    <li>
                        <a href="#" :class="{ active: activeLink === 'servicios' }"
                            @click="setActive('servicios')">Servicios</a>
                    </li>
                    <li>
                        <a href="#" :class="{ active: activeLink === 'precios' }"
                            @click="setActive('precios')">Precios</a>
                    </li>
                    <li>
                        <a href="#" :class="{ active: activeLink === 'contacto' }"
                            @click="setActive('contacto')">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!--seccion de hero -->
        <section class="hero vh-100">
            <div class="container hero-inner">
                <div class="container hero-contenedor">
                    <h1>
                        Mersi Garrido Makeup & Hair Stylist
                    </h1>

                    <p class="parrafo">
                        ¡Hola! Soy Mersi Garrido. Me apasiona ayudar a las personas a sentirse bellas y seguras.
                        Por eso he dedicado los últimos años a especializarme en Maquillaje Profesional, Diseño de Cejas
                        y Tratamientos de Lifting de Pestañas.
                    </p>
                    <a href="#" class="boton-contenido">Agenda tu cita</a>
                </div>
            </div>
        </section>

        <!-- sección sobre mi -->
        <section class="artist-about py-5">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Texto -->
                    <div class="col-lg-6">
                        <p class="eyebrow mb-3">MAKEUP ARTIST</p>
                        <h2 class="display-name mb-4">Mersi Garrido</h2>
                        <p class="parrafo">
                            Hello, I’m Belen Ava! I love people love to feel beautiful, which is the reason
                            I’ve spent last 10 years engulfed in doing Makeup &amp; Hair Stylist.
                        </p>
                        <p class="parrafo">
                            Makeup viverra tristique justo duis vitae diam neque nivamus aestan atueuse
                            artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie
                            suscipe no curabi elit finibus viverra nec a lacus themo the drudea seneoice
                            misuscipit non sagie the fermen.
                        </p>
                    </div>

                    <!-- Foto -->
                    <div class="col-lg-6">
                        <figure class="img-sobre-mi">
                            <img src="/Img/SobreMi.jpg" alt="Retrato de Belen Ava, maquillista" class="img-fluid" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <!-- Importación de sección Servicios -->
        <Servicios />

        <!-- Sección de precios -->
        <Precios />

        <!-- Seccion de pie de pagina -->
        <PiePagina />


    </div>
</template>

<style scoped>
nav {
    padding: 15px 0px;
    background: var(--color-primario);
}

.menu_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
}

ul li a {
    text-decoration: none;
    color: var(--color-secundario);
    font-size: 1.3rem;
    transition: all 0.3s ease;
}

ul li a:hover {
    color: var(--color-fondo);
    transition: all 0.3s ease;
}

/*********  contenedor de hero *************/
.hero {
    background-color: var(--color-primario);
    display: flex;
    align-items: center;
}

.hero-inner {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    padding: 64px 0;
}

/******** seccion sobre mi  **********/
.img-sobre-mi {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-sobre-mi img {
    width: 80%;
}
</style>
