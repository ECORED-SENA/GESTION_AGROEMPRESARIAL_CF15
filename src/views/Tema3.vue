<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión y herramientas alternativas de control

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_1.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 La empresa debe obtener la información, así como hacer el seguimiento y control de las actividades y los resultados, a través de instrumentos de gestión que facilitan dicho proceso y el respectivo contraste, para obtener la evaluación de si se está cumpliendo con lo esperado o si hay desviaciones.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p La empresa debe obtener la información, así como hacer el seguimiento y control de las actividades y los resultados, a través de instrumentos de gestión que facilitan dicho proceso y el respectivo contraste, para obtener la evaluación de si se está cumpliendo con lo esperado o si hay desviaciones.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    p.mb-3 Los indicadores de gestión son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones, actividades que desarrolla y que contrasta con los resultados esperados y fijados desde una planeación.

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema3/img_2.png'  alt='')
      .col-lg-5(data-aos="fade")
        p Cuando se habla de indicadores de gestión se hace referencia a:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-angle-right
              | La medición y control que, efectivamente, son las funciones para las cuales se establecen.
            li 
              i.fas.fa-angle-right
              | Los instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a los resultados esperados.
            li
              i.fas.fa-angle-right
              | KPI (<i>Key Performance Indicator</i>).
            li 
              i.fas.fa-angle-right
              | Instrumento que representa la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio o la persona encargada, está alcanzando las metas y objetivos o, desde luego, los resultados esperados.
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-3.m-top.mb-0.cs       
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-12
        .cajon.color-custom-3.py-3.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema3/ico_1.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-11
              p.my-3 Se deben utilizar indicadores de gestión en todos los niveles empresariales para evaluar el desempeño y lo establecido como metas, en la operación de la organización.

    Separador

    #t_3_1.titulo-segundo
      .h2 3.1 Clasificación de los indicadores

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img(data-aos="fade-right")(
        :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_3.png')})`}"
      )
      .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
        p.mb-0 La clasificación de los indicadores supone, para la empresa, ampliar las posibilidades de elegirlos de manera adecuada y correcta, delimitar los aspectos o variables que se tendrán en cuenta, establecer la responsabilidad de un área o rol para su cumplimiento, fijar los plazos y mecanismos para su alcance, entre otras.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p La clasificación de los indicadores supone, para la empresa, ampliar las posibilidades de elegirlos de manera adecuada y correcta, delimitar los aspectos o variables que se tendrán en cuenta, establecer la responsabilidad de un área o rol para su cumplimiento, fijar los plazos y mecanismos para su alcance, entre otras.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_3.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    p.mb-3 En el siguiente video, se pueden identificar los tipos de indicadores y sus generalidades más importantes para las empresas; se debe procurar llevar registro de lo más destacado, en una libreta personal de apuntes:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_3_2.titulo-segundo
      .h2 3.2 Herramientas para el seguimiento y control administrativo

    p.mb-3 En las empresas, el ejercicio administrativo y gerencial es fundamental para la fijación y el desarrollo de las actividades y el logro de metas establecidas en la planeación; esto requiere que en su ejecución se obtenga información del estado de avance de las operaciones y de las condiciones para el desarrollo del plan. En síntesis, un diagnóstico de los estados actuales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema3/ico_2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .px-5.py-5
              p.mb-0 Son varias las herramientas para la gestión empresarial que permiten optimizar su desarrollo y orientar la toma de decisiones y la dirección efectiva de la empresa.
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 En cuanto a las herramientas para el seguimiento y el control en la gestión administrativa de una empresa, se debe tener presente estos aspectos clave:
  
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.m-top.mb-0.cs
    SlyderF.elemento.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            img.mb-5(src='@/assets/curso/images/tema3/img_4.svg' alt='Volver arriba' style="width:250px; display:block; margin:0 auto;")
            h3.text-center Conocimiento de los procesos
            p.mb-0.text-center Las herramientas de gestión facilitan el análisis de la organización y aumentan el control, ampliando el conocimiento de los procesos y actividades que se desarrollan.
              

      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            img.mb-3(src='@/assets/curso/images/tema3/img_5.svg' alt='Volver arriba' style="width:250px; display:block; margin:0 auto;")
            h3.text-center Alineación de acciones y procedimientos
            p.mb-0.text-center En un ejercicio compartido con los diferentes actores de áreas funcionales y haciendo uso de las distintas herramientas de gestión, se alinean en la organización: la resolución de problemas y la definición de soluciones, fijación de objetivos, entre otros.
              
      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            img.mb-3(src='@/assets/curso/images/tema3/img_6.svg' alt='Volver arriba' style="width:250px; display:block; margin:0 auto;")
            h3.text-center Revisión de variables diversas
            p.mb-0.text-center En estas herramientas se puede hacer revisiones de variables cualitativas o cuantitativas para toma de decisiones frente a alternativas empresariales.

      .tarjeta.sp1.p-3.h-100
        .row.justify-content-center.mb-3
          .col-10
            img.mb-3(src='@/assets/curso/images/tema3/img_7.svg' alt='Volver arriba' style="width:250px; display:block; margin:0 auto;")
            h3.text-center Métodos eficaces de gestión
            p.mb-0.text-center Las herramientas de análisis empresarial son, en definitiva, métodos considerados eficaces para llevar a cabo la gestión administrativa de una empresa, al facilitar la toma de decisiones.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
      
    .row.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-1.px-4.py-2
        .h4.mb-0 Diagrama de causa - efecto

    p.mb-3 Es una herramienta para identificar de manera estructurada las causas de un problema o efecto evidenciado, a partir de un esquema gráfico que se asemeja a una espina de pescado, que es como también se denomina a esta herramienta.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .cajon.color-custom-4.p-4.mb-3
          p.mb-3 Esta técnica refiere a identificar las causas principales de un problema o efecto negativo en la empresa y, posteriormente, identificar las sub causas o variables de causa, relacionadas con las principales que estén contribuyendo con el problema; estas son de carácter secundario e, inclusive, pueden ser de carácter terciario como en el caso de proveedores, por ejemplo.

    p.mb-3 Se debe analizar este diagrama e identificar en el ejemplo, los problemas evidenciados y sus probables causas (ver figura 1):

    .row.justify-content-center.aling-left
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 1. 
          span Esquema de diagrama causa-efecto

    .row.justify-content-center.mb-5
      .col-lg-10-xl-5(data-aos="fade")
        figure
          img.m-3(src='@/assets/curso/images/tema3/info.svg')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-12
        .cajon.color-custom-3.py-3.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema3/ico_1.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-11
              p.my-3 Este esquema es muy versátil para analizar y resolver problemas complicados, pues permite un análisis de los factores operativos más relevantes de la empresa.

    .row.mb-5.ps-2(data-aos="zoom-in-down")
      .col-lg-4.bg-color-2.px-4.py-2
        .h4.mb-0 Diagrama de Pareto

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_8.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 Esta herramienta es una forma particular que se basa en un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa. Los vitales son, en gran medida, los responsables de la mayor parte de los efectos negativos de los problemas en la empresa; mientras los triviales son varios o muchos inconvenientes o situaciones problemáticas con, relativamente, pocos o moderados efectos negativos para el desempeño de la organización.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Esta herramienta es una forma particular que se basa en un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa. Los vitales son, en gran medida, los responsables de la mayor parte de los efectos negativos de los problemas en la empresa; mientras los triviales son varios o muchos inconvenientes o situaciones problemáticas con, relativamente, pocos o moderados efectos negativos para el desempeño de la organización.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_8.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    p.mb-3 Por lo general, los vitales y triviales se asocian en una relación 70-30 o 80-20, esto quiere decir que:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row.color-custom-5(titulo='Pocas causas' numero='1')
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/ico_6.svg' alt='', style="width:400px; display:block; margin:auto 0 ;")
              .col-lg-10
                p Del total de los múltiples problemas que puede tener una empresa entre el 70% al 80% se concentran en pocas causas.
          .row.color-custom-5(titulo='Múltiples causas' numero='2')
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/ico_7.svg' alt='', style="width:400px; display:block; margin:auto 0 ;")
              .col-lg-10
                p El resto de problemas, con múltiples causas, representan entre el 20% al 30% de los casos.

          .row.color-custom-5(titulo='Vitales, grandes efectos' numero='3')
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/ico_9.svg' alt='', style="width:400px; display:block; margin:auto 0 ;")
              .col-lg-10
                p La empresa debe concentrar su atención en resolver esos pocos problemas que son vitales para el negocio pues tienen mucho efecto.

          .row.color-custom-5(titulo='Triviales, bajos efectos' numero='4')
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-4.mb-lg-0
                img(src='@/assets/curso/images/tema3/ico_8.svg' alt='', style="width:400px; display:block; margin:auto 0 ;")
              .col-lg-10
                p Solucionando los problemas vitales o mayores, hay una alta probabilidad de resolver eficazmente muchos de los aspectos triviales o menores.

      .col-lg-6(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema3/img_9.png' alt='', style="width:500px; display:block; margin:auto 0;")

    p.mb-3 Se debe analizar la tabla 2 y la figura 2 e identificar los aspectos clave del diagrama de Pareto, como herramienta de seguimiento y control administrativo:

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left") 
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4  
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          p <b>Tabla 2</b> Ejemplo de quejas y reclamos de clientes por artículos recibidos en un mes
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.color-custom-6 Causas
                th.color-custom-6 Quejas
                th.color-custom-6 %
                th.color-custom-6 % acumulado
            tbody
              tr
                td.th-1 Incumplimiento
                td.th-1 50
                td.th-1 32,05%
                td.th-1 32,05%
              tr
                td Sucio
                td 45
                td 28,85%
                td 60,90%
              tr
                td.th-1 Defectuoso
                td.th-1 21
                td.th-1 13,46%
                td.th-1 74,36%
              tr
                td No corresponde
                td 15
                td 9,62%
                td 83,97%
              tr
                td.th-1 Vencido
                td.th-1 10
                td.th-1 6,41%
                td.th-1 90,38%
              tr
                td Incompleto
                td 8
                td 5,13%
                td 95,51%
              tr
                td.th-1 Mal facturado
                td.th-1 7
                td.th-1 4,49%
                td.th-1 100,00%
              tr
                td Total general
                td 156
                td 100,00%
                td

    .row.justify-content-center.aling-left
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 2. 
          span  Ejemplo de un Diagrama de Pareto del comportamiento de quejas y reclamos

    .row.justify-content-center.mb-5
      .col-lg-10-xl-5(data-aos="fade")
        figure
          img.m-3(src='@/assets/curso/images/tema3/info_2.svg')


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-4.mb-3(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema3/img_10.png'  alt='')
      .col-lg-8(data-aos="fade")
        p En el ejemplo anterior, se puede observar que:
          ul.lista-ul--color.mt-3
            li 
              i.fas.fa-angle-right
              | Del total de los 156 casos de quejas y reclamos, el 74,4% de los casos corresponden a tres causas.
            li 
              i.fas.fa-angle-right
              | Mientras tanto, las otras cuatro causas de quejas solo contemplan el restante 25,6%.
            li
              i.fas.fa-angle-right
              | Por estas cifras, la empresa debería tomar decisiones relacionadas con estas causas que concentran la mayoría de las quejas de los clientes por los productos adquiridos.
            li 
              i.fas.fa-angle-right
              | En la búsqueda de solucionar estos inconvenientes y con la conciencia de lo importante que resultaría para la empresa, los demás aspectos seguramente también se corregirán.
            li 
              i.fas.fa-angle-right
              | Esta herramienta tiene muchas aplicabilidades, para el análisis en la empresa, y por ende facilitar la toma de decisiones, es un ejercicio de aplicabilidad de la administración promoverla al interior de sus diferentes áreas funcionales.

    .row.mb-5.ps-3(data-aos="zoom-in-down")
      .col-lg-6.bg-color-3.px-4.py-3
        .h4.mb-0 Herramientas de información de estadística básica


    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_11.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 Los procesos de gestión, como los procesos de diagnóstico empresarial, requieren de información y su análisis permanente, de tal manera que evidencien el estado actual, la evolución de los mismos, o la tendencia y permitan la toma de decisiones. Una de las herramientas que permite este ejercicio con la información en los procesos es la estadística.

    .bloque-texto-a.color-custom-4.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Los procesos de gestión, como los procesos de diagnóstico empresarial, requieren de información y su análisis permanente, de tal manera que evidencien el estado actual, la evolución de los mismos, o la tendencia y permitan la toma de decisiones. Una de las herramientas que permite este ejercicio con la información en los procesos es la estadística.

        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_11.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-12
        .cajon.color-custom-3.py-3.px-4
          .row.justify-content-center.align-items-center
            .col-lg-1
              img(src='@/assets/curso/images/tema3/ico_1.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-11
              p.my-3 La estadística se define como la ciencia que se dedica al ordenamiento y análisis de conjuntos de datos para obtener descripciones, explicaciones o predicciones sobre aspectos percibidos y analizados.
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-4.m-top.mb-0.cs 
    h3.text-center.my-5 La estadística se puede subdividir en dos grandes ramas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-md-5.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_3.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-5
            .p-4
              h2.text-center Estadística descriptiva
              p.text-center.mb-5 Se ocupa de los métodos para la recolección, la organización, y la presentación de resumen de un conjunto de datos analizados, buscando describir las características de los datos, para ello se suele utilizar instrumentos gráficos y de tablas.

      .col-md-5.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_4.svg'  alt='' , style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-5
            .p-4
              h2.text-center Estadística inferencial
              p.text-center.mb-4 Más allá de resumir y describir datos, lo que busca es hacer predicciones, conclusiones y generalizaciones de situaciones, obteniendo conclusiones a partir de los datos utilizados en el análisis, siempre presumiendo un grado de incertidumbre o falla.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    p.mb-3 Si bien la principal función de la estadística es aportar los medios necesarios para comprender los hechos sobre los cuales se recolecta información. La aproximación objetiva a la realidad y el entendimiento de la misma, son beneficios que la estadística trae consigo y que, para las organizaciones, representa poder describir procesos, sugerir hipótesis de estrategias, entre otras.

    p.mb-3 En definitiva, de las funcionalidades de la estadística se desprenden algunos objetivos de la misma que son de vital importancia en la operación de las empresas u organizaciones:

    .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Conocer características de una población objetivo
            p.mb-0 Y a partir de ello diseñar proyecciones. Por ejemplo, efectuar un estudio demográfico en un municipio determinado para determinar la cantidad de leche que consumen sus habitantes y con ello evaluar si es viable constituir una unidad productiva pecuaria, que venda en esa zona en específico.
          .col-lg-8
            img(src="@/assets/curso/images/tema3/img_12.png").mb-3
        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Estudiar todo tipo de eventos
            p.mb-0 Esto,  a través de la evaluación de relaciones entre dos o más variables. Por ejemplo, determinar si existe una relación entre la disminución en ventas de un producto y la llegada de uno que cumple su misma función por parte de la competencia.
          .col-lg-8
            img(src="@/assets/curso/images/tema3/img_13.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Aportar contenido suficiente para que se tomen decisiones
            p.mb-0 Esto,  a partir de la información recolectada. Un ejemplo de esto son las encuestas de satisfacción que diligencian los clientes por un producto determinado, si todos coinciden en que su precio es elevado, puede servir como elemento clave en un análisis que lleve a la disminución de sus precios de venta.  
          .col-lg-8
            img(src="@/assets/curso/images/tema3/img_14.png").mb-3

        .row.justify-content-center.align-items-star.p-5
          .col-lg-4
            h3.mb-5 Efectuar interpretaciones según datos recolectados de una muestra
            p.mb-0 Y a partir de esto, extrapolarlas a una población mayor. Este tipo de mecánicas suelen ser muy recurrentes en estudios políticos, por ejemplo cuando se busca medir la popularidad de candidatos presidenciales, se evalúan unos cuantos miles de personas, y el resultado se utiliza para estimar tendencias aplicables a todo el país.
          .col-lg-8
            img(src="@/assets/curso/images/tema3/img_15.png").mb-3

    ul.lista-ul--color.mt-3
      li 
        i.fas.fa-angle-right
        p <b>Clasificación de la estadística</b>

    p.mb-3 Las formas de ejecución de los procesos estadísticos traen consigo resultados particulares o distintos que, en función de las acciones operativas de una organización, tendrán más validez en unos casos que en otros. Esto es lo que podría denominarse clasificación de la estadística. Aplicar la estadística reconociendo su utilidad diferenciada para cada caso, traerá más y mejores aportes para el alcance de objetivos, toma de decisiones y aplicación de acciones en un proyecto empresarial.
    p (Ver figura 2).

    .row.justify-content-center
      .col-lg-6(data-aos="fade")
        .titulo-sexto.color-acento-botones
          h5 Figura 2. 
        span  Clasificación de la estadística
          figure
            img.mx-2(src='@/assets/curso/images/tema3/info_3.svg' alt='' , style="width:1000px; display:block; margin:auto 0 ;")

    ul.lista-ul--color.mt-3
      li 
        i.fas.fa-angle-right
        p <b>Variables</b>

    p.mb-3 La estadística estudia las características de los sujetos objeto de investigación, a través de la recolección de información. Estas características reciben el nombre de variables, cuando por su naturaleza, son propensas a tomar diferentes valores, bien sea en términos cuantitativos o cualitativos. La cantidad de variables de un proceso estadístico estarán determinadas según la cantidad de factores o características que se pretendan observar, analizar o investigar y que, desde luego, aporten a los objetivos del proyecto empresarial.

    p.mb-5 Las variables pueden adoptar una de estas dos vertientes y, a partir de ello, subclasificarse de la siguiente forma:  

     .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-12.col-md-12.col-lg-12.col-xl-12.mb-4
        ImagenInfografica.color-acento-botones.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema3/info_4.svg')
              
          .tarjeta.color-custom-7.p-3(x="33%" y="62%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-3 Nominal
                p.mb-0 Aquellas que no obedecen a ningún tipo de orden, como las preferencias políticas o religiosas, el color del cabello o el género.
            
          .tarjeta.color-custom-7.p-3(x="33%" y="80%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Ordinal   
                p.mb-0  Tienen un orden o jerarquía, por ejemplo, niveles de satisfacción (muy satisfecho, satisfecho, insatisfecho).

          .tarjeta.color-custom-7.p-3(x="33%" y="99%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Binaria 
                p.mb-0 La variable solo puede tomar una de dos posibilidades, las más comunes son las preguntas que llevan a un sí o no.

          .tarjeta.color-custom-7.p-3(x="67%" y="62%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Discreta
                p.mb-0 Las variables discretas solo pueden tomar números enteros como valor; es decir, 1, 2, 3… Ejemplo: la cantidad de personas que asisten a un evento o el número de empleados de una empresa.

          .tarjeta.color-custom-7.p-3(x="67%" y="80%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.mb-lg-0
                h6.mb-2 Continua     
                p.mt-5 Los valores que puede tomar este tipo de variables pueden involucrar infinidad de intervalos, que van más allá de los números enteros. Por ejemplo, los porcentajes de participación de los accionistas de una empresa (3,5 %, 22,6%).

    ul.lista-ul--color.mt-3
      li 
        i.fas.fa-angle-right
        p <b>Muestra</b>

    p.mb-3 Llevar a cabo estudios estadísticos requiere de un proceso cuidadoso de elección de los individuos o fenómenos por evaluar. Por limitaciones de recursos, tiempo y personal, suele ser inviable que se trabaje con la totalidad de una población para identificar comportamientos o preferencias. Es por eso que los trabajos sociales o económicos que evalúan un amplio número de individuos hacen uso del muestreo.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .cajon.color-custom-4.p-4.mb-3
          p.mb-3 El muestreo funciona reduciendo la cantidad de personas a las cuales indagar, para luego proyectar los resultados a una población mayor. Funciona como metodología que hace más eficiente el trabajo obteniendo resultados aceptables y con un bajo margen de error.

   
    p.mb-3 En el siguiente vídeo, se puede profundizar en los aspectos más importantes sobre el muestro en el ejercicio estadístico:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    ul.lista-ul--color.mt-3
      li 
        i.fas.fa-angle-right
        p <b> Tamaño de la muestra</b>

    p.mb-3 Elegir el tamaño necesario de la muestra para alcanzar los objetivos del estudio puede ser tan complejo y preciso como se desee. A continuación, se presentan los elementos clave a tener en cuenta:

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-botones

        .row(titulo="Población o universo (N)")
          .col-md-6.mb-4.mb-md-0
            h3 Población o universo (N)
            p Se refiere al total de individuos sobre los que se espera proyectar las conclusiones. Por ejemplo, toda la población de un municipio, los estudiantes de un colegio o los trabajadores de una empresa agropecuaria.
        
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema3/img_17.svg', alt='Texto que describa la imagen')
   


        .row(titulo="Nivel de confianza")
          .col-md-6.mb-4.mb-md-0
            h3 Nivel de confianza
            p Es un parámetro definido por el investigador, con el que se determina qué tan preciso se quiere que sea el estudio. Los valores utilizados con mayor frecuencia obedecen a un factor estimado, presentado en la tabla.
        
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema3/img_18.svg', alt='Texto que describa la imagen')
 

        .row(titulo="Margen de error (e)")
          .col-md-6.mb-4.mb-md-0
            h3 Margen de error (e)
            p Mide el rango de tolerancia que diferencia al resultado obtenido de la muestra en comparación con el de la población. Por ejemplo, un margen de error del 5 % implica que si el resultado de un estudio es una estatura promedio de las personas de la muestra en 1.80cm, este indicador en la población oscilará entre 1.71 y 1.89, es decir un 5% menor o un 5% mayor del valor obtenido.
        
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema3/img_19.svg', alt='Texto que describa la imagen')
          
        .row(titulo="Probabilidad de éxito (p)")
          .col-md-6.mb-4.mb-md-0
            h3 Probabilidad de éxito (p)
            p Este indicador puede tomarse de otros estudios previos relacionados, si no existe ninguna noción al respecto, se deduce que la probabilidad de éxito y de fracaso son equivalentes, es decir 50%.
        
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema3/img_20.svg', alt='Texto que describa la imagen')

        .row(titulo="Probabilidad de fracaso (q)")
          .col-md-6.mb-4.mb-md-0
            h3 Probabilidad de fracaso (q)
            p Al igual que el indicador anterior, obedece a evidencia de estudios previos, la suma de la probabilidad de éxito más la de fracaso debe ser igual al 100% de los eventos. Así pues, la probabilidad de fracaso será igual al 100 % menos la probabilidad de éxito, en otras palabras q = 1 - p
        
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema3/img_21.svg', alt='Texto que describa la imagen')

    .row.align-items-center.aling.my-3
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom-10.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema3/ico_5.svg",  alt='', style="width:100px; display:block; margin:auto 0 ;")
                .col.mb-3.mb-sm-0
                  h3.text-white La estadistica en la economía
                  p.mb-1.text-white Entérese de otros elementos relacionados con la Estadística, que pueden ser útiles.
                .col-md-auto
                  a.boton.color-custom-9(:href="obtenerLink('downloads/La_Estadistica_En_La_Economia.pdf')" target="_blank")
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema3/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")





















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
