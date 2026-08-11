<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            .tarjeta.bg-color-7.d-flex.align-items-center.p-3.h-100
              img(src='@/assets/curso/temas/intro/2.svg', alt='')
          .col-lg-10
            p.mb-0 El sector de la confección requiere reconocer los textiles como insumos fundamentales para el desarrollo, la selección y la comercialización de productos. Las fibras, los hilos, las estructuras textiles, los acabados y las propiedades de los materiales inciden en la calidad, el desempeño, el precio, la presentación y la aceptación de una tela en el mercado. Por esta razón, comprender sus características permite tomar decisiones más acertadas frente al uso, la compra, la venta y la recomendación de productos textiles.
        .bg-color-1.p-4
          p.mb-0 Este componente formativo aborda los conceptos necesarios para identificar productos textiles de acuerdo con su composición, comportamiento, aplicación y valor comercial. Para ello, se estudian aspectos relacionados con la clasificación e identificación de fibras, los tipos de hilos, la caracterización de las telas y los acabados que modifican o fortalecen sus propiedades de uso. Estos elementos permiten relacionar las condiciones técnicas del material con las necesidades del cliente y del sector productivo.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    p.mb-4 Asimismo, se analiza la calidad de los textiles como un criterio técnico y comercial que orienta la selección de materiales según su uso final. En este proceso se consideran propiedades como resistencia, estabilidad, apariencia, mantenimiento y correspondencia con las especificaciones requeridas. También se reconoce la importancia de la normatividad aplicable, los reglamentos técnicos, los métodos de ensayo y los requisitos de etiquetado como referentes para respaldar la información del producto y proteger al consumidor.
    
    p.mb-4 Finalmente, el componente relaciona el producto textil con las necesidades del mercado, teniendo en cuenta el uso final, el perfil del cliente, las propiedades técnicas, la disponibilidad, el valor agregado y las tendencias de moda. Esta integración favorece la presentación de textiles con argumentos claros, funcionales y comerciales, acordes con las expectativas del cliente y las condiciones actuales del sector.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
