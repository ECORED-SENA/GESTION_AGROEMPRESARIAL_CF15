<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Evaluación

    p.mb-3 Una vez levantados los datos de las mediciones de resultados, aplicando los indicadores de gestión o cualquier otro instrumento, se debe ordenar la información en conformidad con los aspectos a contrastar, es decir, en función de los objetivos a verificar que se están logrando.

    .row.justify-content-center.mb-5
      .col-lg-10-xl-5(data-aos="zoom-in-up")
        figure
          img.m-3(src='@/assets/curso/images/tema4/img_1.svg')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="zoom-in-up")
        .cajon.color-custom-4.p-4.mb-3
          p.mb-3 La evaluación es el proceso de interpretación, por contraste, de los resultados ejecutados obtenidos, respecto a los resultados esperados, respecto a la planeación aprobada para el momento cronológico de ejecución (ver tabla 3).

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4  
        .titulo-sexto.color-acento-contenido.mb-3
          p <b>Tabla 3</b> Ejemplo de evaluación en el proceso de seguimiento y control
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.color-custom-6 Indicador
                th.color-custom-6 Meta
                th.color-custom-6 Resultado obtenido
                th.color-custom-6 Evaluación
                th.color-custom-6 Logros
                th.color-custom-6 Dificultades
            tbody
              tr
                td.th-1 Ventas totales
                td.th-1 1.000 und
                td.th-1 996 und
                td.th-1 Ok
                td.th-1 Se realizó en un 98 % la ejecución
                td.th-1 Una venta no confirmada
              tr
                td Ahorro en costos de producción
                td 10%
                td 5%
                td Regular
                td Se consolidó el 50% del objetivo
                td Tendencia de alza en proveedores
              
    p.mb-5 Estas son algunas generalidades, de suma importancia, en el proceso de evaluación y que usted debe tener en cuenta:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-secundario.especial
          .row.color-custom-5(titulo='Identificación del nivel de logros' numero='1')
            .row.align-items-center
              .col-lg-12
                p.mb-0 En este proceso se busca identificar el nivel de logro y las dificultades que se presentaron para efecto del alcance obtenido de los indicadores de gestión, donde en caso de desviaciones, las dificultades serán la base de actuación para definir acciones correctivas o de ajuste.
          .row.color-custom-5(titulo='Viabilidad de los objetivos' numero='2')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Los objetivos deberán ser realizables, alcanzables y se debe contar con los recursos suficientes para su alcance. El resultado de esta interpretación será continuar con seguimiento y control o realizar acciones de ajuste para superar las desviaciones evidenciadas. Para cada uno de los aspectos de control y seguimiento se debe llevar el proceso de evaluación.

          .row.color-custom-5(titulo='Cuando hay desvío de resultados' numero='3')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Debido a cambios en los costos o en otros factores, los resultados obtenidos después de que el plan se ejecuta pueden desviarse de los resultados esperados; esto se debe a la incertidumbre y el riesgo que existe en la producción agrícola; no obstante, es necesario identificar el tipo y magnitud de las desviaciones tan pronto como sea posible, pues tiene impactos directos contra las utilidades.
          .row.color-custom-5(titulo='Control simultáneo a la ejecución' numero='4')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Esta fase del proceso de control se desarrolla de manera simultánea a su ejecución; va ligeramente después de las acciones y sus efectos, de tal manera que no sea reactiva sino que, si se dan desviaciones se puedan corregir y ajustar oportunamente.

          .row.color-custom-5(titulo='Medición del desempeño' numero='5')
            .row.align-items-center
              .col-lg-12
                p.mb-0 En esta fase se mide el desempeño y se contrasta con los indicadores de gestión establecidos previamente, a partir de allí, se procede a una interpretación y evaluación con el fin de identificar si se cumple con lo esperado, de ser así se sigue el proceso de medición en conformidad a lo programado, porque no significa que en un futuro los resultados presenten dificultades.

      .col-lg-6(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema4/img_2.svg' alt='', style="width:500px; display:block; margin:auto 0;")

   

























</template>

<script>
export default {
  components: {},
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
