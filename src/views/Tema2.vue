<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Proceso de Control y seguimiento
      
    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_1.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 La función de control en la empresa se establece de manera particularizada y a la medida, para cada tipo de empresa, lo cual depende de la estructura organizacional y de los objetivos corporativos planteados, sin embargo, existen algunos criterios generales del proceso que definen un sistema de control de gestión.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p La función de control en la empresa se establece de manera particularizada y a la medida, para cada tipo de empresa, lo cual depende de la estructura organizacional y de los objetivos corporativos planteados, sin embargo, existen algunos criterios generales del proceso que definen un sistema de control de gestión.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .cajon.color-custom-4.p-4.mb-3
          p.mb-3 La función de control del proceso administrativo consiste en establecer resultados esperados y definidos en la planeación y compararlos con los resultados obtenidos de la ejecución, proceso de la dirección y su estilo de gerencia. En la medida en que existan diferencias o desviaciones, se realizan los ajustes necesarios para el logro de los objetivos o resultados esperados.

    p.mb-3 El control debe abarcar diferentes aspectos que intervienen en el logro de los objetivos corporativos y en el logro y alcance de su visión empresarial. A su vez, tales aspectos constituyen las variables claves del desempeño y son:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Finanzas y contabilidad
            p.mb-0 La empresa establece para el logro de objetivos fijados en la planeación, indicadores de gestión financiera que definen el comportamiento de dichos objetivos. A través de la interpretación de los estados financieros, fundamentalmente mediante la aplicación de los indicadores de gestión, se miden la rentabilidad de la inversión, el costo de los pasivos o deudas y los costos de valor (reducción de costos, etc.).
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_2.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Clientes
            p.mb-0 Uno de los aspectos que recogen los objetivos empresariales está asociado a los clientes; sobre ellos se evidencia la participación en el mercado o lo que se denomina la cuota de participación, que no es más que: aquello que se vende en el mercado o sector, en cuánto aporta la empresa. Así mismo se mide el nivel de satisfacción de los consumidores y su nivel de fidelización o recompra sobre los productos de la empresa.
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_3.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Procesos internos
            p.mb-0 Este aspecto busca establecer y medir la eficacia y eficiencia de los procesos productivos, el número de fallas, su continuidad, calidad o imperfectos, tiempo de operación o de proceso, coste por desperdicios, etc. Allí, el seguimiento busca fijar estándares de tiempo y maneras de ejecutar lo que se contempla y se establecen los manuales de procesos, procedimientos y operación, que son una gran herramienta de control, para verificar que las personas o trabajadores realizan las actividades técnicamente y como se han diseñado.  
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_4.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Procesos de aprendizaje 
            p.mb-0 Este es un aspecto o variable muy importante. Los procesos de aprendizaje deben, de manera permanentemente actualizada, hacer parte del planteamiento de objetivos empresariales, con su debido seguimiento y control, pues de ellos dependen las mejoras, cambios, modificaciones y replanteos que, sobre cualquier otro aspecto o proceso, tenga la organización.  
          .col-lg-8
            img(src="@/assets/curso/images/tema2/img_5.png").mb-3

    p.mb-3 Teniendo en cuenta los elementos mencionados hasta este punto, el proceso de implantación del sistema de control pasa por las siguientes fases:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4
        ImagenInfografica.color-acento-botones.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema2/info.svg')
              
          .tarjeta-violeta-2.p-3(x="7.5%" y="20%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-3 Determinación de variables clave    
                p.my-5 Entendidas como un conjunto de indicadores de gestión que reflejen el resultado esperado o los objetivos establecidos. Estas variables clave deben referirse a aspectos fundamentales para la continuidad de la empresa y su éxito en el mercado, dependiendo precisamente de los objetivos de la misma y su estrategia empresarial, se agrupan por los aspectos de control.
            
          .tarjeta-violeta-2.p-3(x="24.5%" y="20%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Medir desempeño a partir de indicadores             
                p.mt-5 Son las acciones para aplicar los indicadores de gestión como los instrumentos que correlacionan las variables, y obtener los resultados de desempeño, para poder contrastarlos con el resultado esperado.

          .tarjeta-violeta.p-3(x="41%" y="20%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Construir sistema de información y medición
                p.mt-5 Compila los registros de datos y resultados de las mediciones y posterior evaluación los resultados, si se está logrando la consecución de los objetivos.

          .tarjeta-violeta-1.p-3(x="58%" y="20%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Evaluación
                p.mt-5 Proceso de interpretación del contraste de los resultados obtenidos respecto a los resultados esperados, respecto a la planeación aprobada. Es decir que los objetivos son realizables, alcanzables y tienen los recursos suficientes para su logro. El resultado de esta interpretación será continuar con seguimiento y control, o realizar acciones de ajuste para superar las desviaciones evidenciadas.
    
    p.mb-3 La siguiente tabla 1 muestra un ejemplo posible de control por aspecto:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4  
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Tabla 1
          span Indicadores para el control por aspecto
        .tabla-a
          thead
            tr.th
              td <b>Aspecto</b>
              td <b>Indicador</b>
              td <b>Meta</b>
              td <b>Alcanzado</b>
              td <b>Evaluación</b>
              td <b>Logros</b>
              td <b>Dificultades</b>
              td <b>Acciones de mejora</b> 
          tbody
            tr
              <td rowspan="3"> <b>Financiero</b></td> 
              td.th-1 Mejorar los rendimientos
              td.th-1 Aumentar 10% rentabilidad
              td.th-1 
              td.th-1 
              td.th-1  
              td.th-1  
              td.th-1   
            tr
              td Ampliar la diversidad de los ingresos 
              td Mayores ventas
              td 
              td    
              td  
              td  
              td  
              
            tr
              td.th-1 Reducir la estructura de costos
              td.th-1 Disminución de costos 5%
              td.th-1 
              td.th-1  
              td.th-1 
              td.th-1  
              td.th-1   
            tr
              <td rowspan="2"><b> Clientes</b></td> 
              td Aumentar la satisfacción del cliente con nuestros productos 
              td Satisfacción al 80%
              td  
              td  
              td  
              td  
              td   
            tr
              td.th-1 Disminuir el servicio post- venta por aumento en calidad de entregas
              td.th-1 2% de solicitudes de servicio
              td.th-1 
              td.th-1  
              td.th-1  
              td.th-1  
              td.th-1           
            tr
              <td rowspan="2"> <b>Procesos</b></td> 
              td Crear productos innovadores
              td Crear 2 productos
              td 
              td  
              td  
              td  
              td   
            tr
              td.th-1 Usar canales rentables como las redes
              td.th-1 faceboock y Tweeter
              td.th-1 
              td.th-1  
              td.th-1  
              td.th-1  
              td.th-1            
            tr
              <td rowspan="2"> <b>Formación / procesos internos</b></td> 
              td Capacitación para nuevo producto
              td Entrenamiento de clnica de ventas
              td  
              td  
              td  
              td  
              td   
            tr
              td.th-1 Capacitación en <i>coaching</i>
              td.th-1 consultoría de grupo
              td.th-1 
              td.th-1  
              td.th-1  
              td.th-1  
              td.th-1  
           
       
    p.mb-3 Amplíe sus conocimientos en lo relacionado con procesos administrativos y control. Observe con atención el siguiente vídeo donde un instructor SENA profundiza lo desarrollado en este punto.

    p.mb-5 Proceso Administrativo – Fase de Control

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.mb-5 Tipos de Seguimiento y Control


  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    
    p.mb-3 El seguimiento y control debe ser una actividad permanente y continua, una vez definida la fase del proceso administrativo de planeación. Los siguientes son los tipos de seguimiento y control que se aplican en la empresa:


    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")  
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .jumbotron-1.h-100
          .p-4
            img.mx-3(src="@/assets/curso/images/tema2/img_6.png" alt='', style="width:300px; display:block; margin:auto 0 ;").my-5
            h3.text-center.mt-5 Control previo
            p.text-center.my-5 Conjunto de acciones que buscan la verificación de los recursos a intervenir en la empresa para el desarrollo de las actividades. Busca prevenir riesgos y garantizar la idoneidad de los recursos y que estos respondan eficaz y eficientemente (recursos humanos, materiales, financieros e intangibles).
      
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .jumbotron-1.h-100
          .p-5
            img(src="@/assets/curso/images/tema2/img_7.png" alt='',).mb-4
            h3.text-center.my-5 Control  operativo
            p.text-center.mb-4  Este control se lleva a cabo a lo largo del proceso operativo empresarial, es decir, de manera paralela al proceso productivo de la empresa. Busca verificar la correcta agregación de valores, el cumplimiento de procesos, la reducción de desperdicios, el correcto uso de recursos, etc.
      
      .col-sm-6.col-lg-4.mb-4.mb-xl-0
        .jumbotron-1
          .p-5
            img(src="@/assets/curso/images/tema2/img_8.png" alt='',)
            h3.text-center.mt-3 Control posterior
            p.text-center.p-3 Es el seguimiento y control que busca verificar que los valores se agregaron correctamente, se valida la funcionalidad e idoneidad del producto final, y se da de manera retrospectiva, identificando conclusiones y dificultades en el proceso, con el fin de evitar futuros errores en nuevos procesos similares.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

   
</template>

<script>
export default {
  name: 'Tema2',
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
