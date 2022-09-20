<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Normatividad para el control administrativo

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_1.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 En Colombia el código de industria y comercio, en la definición de los tipos de sociedad, establece que, según el régimen, las empresas contarán con un revisor fiscal quien ejercerá, por mandato de la junta directiva, pero con autonomía e independencia, el ejercicio de validación de las buenas prácticas de uso de recursos, en cumplimiento de los preceptos contables y el reporte de las actuaciones en los estados financieros.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p En Colombia el código de industria y comercio, en la definición de los tipos de sociedad, establece que, según el régimen, las empresas contarán con un revisor fiscal quien ejercerá, por mandato de la junta directiva, pero con autonomía e independencia, el ejercicio de validación de las buenas prácticas de uso de recursos, en cumplimiento de los preceptos contables y el reporte de las actuaciones en los estados financieros.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema6/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="zoom-in-up")
        .cajon.color-custom-4.p-4.mb-3
          p.mb-3 Las gestiones gerenciales se ajustarán en conformidad a sus capacidades sin existir un estándar. Así mismo la superintendencia de industria y comercio ejerce el control de las empresas en cuento al cumplimiento de las prácticas comerciales, sin adentrarse en las prácticas administrativas propiamente dichas, solo velando por los deberes y derechos de sus clientes, en las transacciones realizadas.

    p.mb-3 En lo relacionado con la normatividad para el control administrativo, conozca los siguientes aspectos y generalidades de suma importancia:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h3.mb-5 Protección de datos
            p.mb-3 La Superintendencia de Industria y Comercio protege y da protección de los datos personales, la metrología de las cantidades de producto, a través del ejercicio de sus funciones administrativas y jurisdiccionales, pero no hace ni vela sobre el control interno de las empresas.
          .col-lg-8
            img(src="@/assets/curso/images/tema6/img_2.png").mb-3
        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h3.mb-5 Buenas prácticas de gestión
            p.mb-3 Es responsabilidad social empresarial, el cumplimiento de las buenas prácticas de gestión y del desarrollo de la competitividad, en conformidad a la práctica de la sana competencia.
          .col-lg-8
            img(src="@/assets/curso/images/tema6/img_3.png").mb-3

        .row.justify-content-center.align-items-star.p-3
          .col-lg-4
            h3.mb-5 Regulación institucional
            p.mb-3 En el sector público será la Contraloría de la República y los demás actores de control, quienes velarán por las buenas prácticas del control interno y cumplimiento de los objetivos corporativos. 
          .col-lg-8
            img(src="@/assets/curso/images/tema6/img_4.png").mb-3

       

    


















</template>

<script>
export default {
  name: 'Tema3',
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
