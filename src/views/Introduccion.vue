<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-3 Aquí comienza el estudio del componente formativo “Control y seguimiento”; se desea que todos los participantes tengan una buena experiencia de aprendizaje. Se debe comenzar con la visualización del video que se muestra enseguida.

    p #[span.color-text <b> ¡Adelante! </b>]
    
    figure.mb-5
      .video(data-aos="zoom-in-up")
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Kad4oRhXzZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

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
