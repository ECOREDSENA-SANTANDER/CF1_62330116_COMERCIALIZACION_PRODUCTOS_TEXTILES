<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo reconoce los textiles como insumos fundamentales para la confección y la comercialización de productos, a partir del análisis de fibras, hilos, caracterización, acabados y propiedades de uso. Asimismo, aborda la calidad textil como criterio técnico y comercial para valorar el desempeño, la conformidad, las pruebas de control y la pertinencia del material según su aplicación. También integra la normatividad aplicable, los reglamentos, organismos, laboratorios y normas técnicas que orientan la verificación y el etiquetado de productos textiles. Finalmente, relaciona el producto textil con las necesidades del mercado, las tendencias de moda, el valor agregado y la decisión de compra, con el fin de fortalecer la selección, presentación y comercialización de materiales acordes con las expectativas del cliente y las condiciones del sector. -
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual de textiles en confección: fundamentos técnicos, calidad, normatividad y producto textil y mercado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
