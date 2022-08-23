<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Gestión del control
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 Se puede definir por control al conjunto de actividades que conforman la función del proceso administrativo de la empresa, para asegurar que las tareas programadas se realizan y están orientadas al logro de los objetivos, previamente establecidos por parte de la junta directiva, socios o departamentos.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Se puede definir por control al conjunto de actividades que conforman la función del proceso administrativo de la empresa, para asegurar que las tareas programadas se realizan y están orientadas al logro de los objetivos, previamente establecidos por parte de la junta directiva, socios o departamentos.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-3(data-aos="fade")
          p.mb-3 Tales objetivos, entre otros, pueden ser:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Rentabilidad.
            li 
              i.fas.fa-angle-right
              | Crecimiento.
            li 
              i.fas.fa-angle-right
              | Expansión.
            li 
              i.fas.fa-angle-right
              | Productividad.
            li 
              i.fas.fa-angle-right
              | Competitividad. 
            li 
              i.fas.fa-angle-right
              | Fortalecimiento de la identidad empresarial.
            li 
              i.fas.fa-angle-right
              | Posicionamiento en el mercado.
      .col-lg-7.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema1/img_2.png'  alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Para el cumplimiento de estos y otros posibles objetivos, la empresa cumple con lo dispuesto según la legislación empresarial que le corresponde, en materia mercantil, tributaria, régimen laboral, etc. Todo lo anterior en un marco de responsabilidad social empresarial.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-12
        .cajon.color-custom-3.py-2.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema1/ico_1.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-11
              p.my-3 La función de control no se limita, meramente, a comprobar tareas realizadas o el cumplimiento de decisiones tomadas, sino que, parte de su propósito, es servir de función orientadora e influir en el comportamiento de la empresa para que se alcancen los objetivos oportunamente y de la mejor manera posible.
    
    p.mb-5 Se debe tener en cuenta algunos aspectos clave, relacionados con la gestión del control en las empresas, que se enuncian a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-12.col-md-8.col-lg-8.col-xl-8.mb-4
        ImagenInfografica.color-acento-botones.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema1/info.svg')
              
          .tarjeta-blanca.p-3(x="50%" y="-1%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h6.mb-3 1. Exigencias siempre cambiantes
                img(src='@/assets/curso/images/tema1/img_7.svg'  alt='', style="width:180px; display:block; margin:auto 0 ;")
              .col-lg-6       
                p.my-5 El mundo empresarial exige el desarrollo de su actividad en un escenario cada vez más globalizado, competitivo y cambiante, en un marco de referencia de, cada vez, más complejidad técnica.
            
          .tarjeta-blanca.p-3(x="100%" y="40%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h6.mb-2 2. Niveles jerárquicos
                img(src='@/assets/curso/images/tema1/img_3.svg'  alt='', style="width:180px; display:block; margin:auto 0 ;")
              .col-lg-6       
                p.mt-5 No se busca (ni se trata de ello) que las organizaciones sean, necesariamente, grandes, sino que la tendencia es disminuir escalas de niveles jerárquicos, donde la complejidad a que se exponen ahora, radica en empresas de un alto volumen de operación y un alto nivel de coordinación de funciones.

          .tarjeta-blanca.p-3(x="80%" y="90%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h6.mb-2 3. Poder de decisión
                img(src='@/assets/curso/images/tema1/img_4.svg'  alt='', style="width:180px; display:block; margin:auto 0 ;")
              .col-lg-6     
                p.mt-5 En este ejercicio de coordinación el poder de decisión se aleja de los gerentes generales e inversionistas, a los cuales les corresponde confiar en la buena gestión de sus empleados, directivos, etc.; quienes toman las decisiones para el logro operativo de los objetivos establecidos.

          .tarjeta-blanca.p-3(x="20%" y="90%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h6.mb-2 4. Verificación y correspondencia
                img(src='@/assets/curso/images/tema1/img_5.svg'  alt='', style="width:180px; display:block; margin:auto 0 ;")
              .col-lg-6        
                p.mt-5 La necesidad de control surge para verificar que las decisiones y los recursos asignados corresponden a los aprobados por el gerente o inversionistas en pro de los objetivos planteados.

          .tarjeta-blanca-1.p-3(x="1%" y="40%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h6.mb-2 5. Coherencia
                img(src='@/assets/curso/images/tema1/img_6.svg'  alt='', style="width:180px; display:block; margin:auto 0 ;")
              .col-lg-6       
                p.mt-5 La gestión del control en la organización debe asegurar que las actividades de la empresa sean coherentes con el entorno que permite su operación, con sus colaboradores, con la normatividad; no solo con los objetivos.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    
    
  
  
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
