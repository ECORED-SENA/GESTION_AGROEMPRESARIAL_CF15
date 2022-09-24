<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Acciones correctivas y de mejora

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema5/img_1.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 El último paso del control, cuando se evidencian niveles de desviaciones, es aplicar medidas de ajuste, conociendo las causas y razones del por qué no se alcanzan los objetivos, estableciendo acciones que ayuden a corregirlas o a solucionar el problema, retomando la ruta de desempeño de la empresa.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p El último paso del control, cuando se evidencian niveles de desviaciones, es aplicar medidas de ajuste, conociendo las causas y razones del por qué no se alcanzan los objetivos, estableciendo acciones que ayuden a corregirlas o a solucionar el problema, retomando la ruta de desempeño de la empresa.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema5/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-5.m-top.mb-0.cs
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema5/img_2.png'  alt='')
      .col-lg-6(data-aos="fade-left")
        p Las posibles acciones correctivas (ver tabla 4) y de mejora, provendrán de aspectos tales como:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-angle-right
              | Fallas operativas,  en ese caso se debe hacer el reajuste de capacitación y entrenamiento.
            li 
              i.fas.fa-angle-right
              | Fallas por implicación de recursos lo que se corrige con asignación de más recursos y programación de su uso para armonizar con la desviación en tiempo.
            li 
              i.fas.fa-angle-right
              | Fallas por mala definición de procesos, maquinaria, etc., lo que implica su corrección.
            li
              i.fas.fa-angle-right
              | Fallas por mala medición, es decir que no se supo medir el desempeño, lo que implica nuevas lecturas, pero regularmente se acompaña de interrupciones o bajas de productividad, por lo cual hay que validar la confianza y el nuevo indicador para la captura de información.
              
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-up")
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4  
        .titulo-sexto.color-acento-contenido.mb-3
          p <b>Tabla 4</b> Ejemplo de acciones de mejora en el proceso de seguimiento y control
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
                th.color-custom-6 Acciones de mejora
            tbody
              tr
                td.th-1.text-center Ahorro en costos de producción
                td.th-1.text-center  10%
                td.th-1.text-center  5%
                td.th-1.text-center  Regular
                td.th-1.text-center  Se consolidó el 50% del objetivo
                td.th-1.text-center  Tendencia de alza en proveedores
                td.th-1.text-center  Buscar nuevos proveedores, o materias primas insumos o suministros sustitutos para el siguiente período

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-8(data-aos="fade-right") 
        p.mb-3 El fin de esta fase es realizar un plan de ajuste, determinando cómo, cuándo, y dónde deben aplicarse las medidas correctivas. Así mismo identificar y asignar los recursos adicionales para alcanzar el nivel de desempeño esperado y el logro de los objetivos.

        p.mb-3 Esto implica determinar las acciones propiamente dichas para superar las acciones a desarrollar para cerrar la brecha de desventaja.

        p.mb-3 Amplíe sus conocimientos en lo relacionado con Acciones correctivas y de mejora. Observe con atención el siguiente vídeo donde un instructor SENA profundiza lo desarrollado en este punto.
        
        p <b> Lista de cumplimiento de objetivos y verificación acciones correctivas.</b>
      .col-lg-4.mb-3(data-aos="fade-left")
        img(src='@/assets/curso/images/tema5/img_3.png'  alt='')   

    figure.mb-5
      .video(data-aos="zoom-in-up")
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jXKPmZ6-NZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    


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
