export default {
  global: {
    componenteFormativo: 'Control y Seguimiento',
    descripcionCurso:
      'Este componente formativo desarrollará los temas relacionados con el concepto de seguimiento y control empresarial; aspectos fundamentales del proceso administrativo, los cuales se basan en metodologías sistemáticas, que facilitan y contribuyen al desarrollo y alcance de lo propuesto en la planeación, según los recursos dispuestos para ello.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de Control y seguimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión y herramientas alternativas de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación de los indicadores',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas para el seguimiento y control administrativo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Acciones correctivas y de mejora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normatividad para el control administrativo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Beltrán, A., & Anzola, O. (2013). Mejorando la Competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
    },
    {
      referencia:
        'Federación Nacional de Asociaciones de Trabajadores Autónomos (2021).Diagnóstico Empresarial en tiempos de Covid-19.',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },
    {
      referencia:
        'Garza, T. (2009). Administración Contemporáne, reto para la empresa. Ed. Alhambra Mexicana.',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad. Uji.',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html ',
    },
    {
      referencia:
        'Instituto Vasco de la Mujer (2011). Metodología para la elaboración de diagnóstico y plan para la igualdad en empresas y entidades privadas. ',
      link:
        'https://www.emakunde.euskadi.eus/u72-igualorg/es/contenidos/informacion/ig_org_enlaces/es_material/adjuntos/metodologia-definitiva-web.pdf',
    },
    {
      referencia:
        'JDelca, A. (2020). ¿Cómo iniciar el proceso del diagnóstico empresarial en mi organización? [Video]. Youtube',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. Centro Regional de Ayuda Técnica.',
    },
    {
      referencia:
        'Meza, A. (2020). El Diagnóstico Organizacional: elementos, métodos y técnicas.  Mi espacio.',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Portugal, V. (s.f.). Diagnóstico Empresarial. Fundación Universitaria del Área Andina.',
    },
    {
      referencia:
        'Rodríguez, D. (2012). Diagnóstico organizacional. Alfa Omega Grupo Editor, S.A.',
    },
    {
      referencia:
        'Tlaxcala, I.  (s.f.). Herramientas Estadísticas. [Web log post]. Alfredogutierrez.',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto o perspectiva',
      significado:
        'Conjunto de aspectos que se relacionan para el logro de objetivos con algún área o enfoque (financiera, clientes, etc.).',
    },
    {
      termino: 'Cronograma',
      significado:
        'En planeación, refiere a la determinación en función del tiempo, de las actividades a realizar y los recursos a utilizar para el desarrollo de las estrategias y acciones propiamente definidas en el plan de acción.',
    },
    {
      termino: 'Desviación',
      significado:
        'Es la cantidad de indicador u objetivo que no se logró, al momento de medición de una variable clave de un objetivo.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmersa la empresa, pero que al momento de control es la interpretación del estado de los indicadores.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones',
    },
    {
      termino: 'Factores relevantes',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, por que repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: 'Meta',
      significado:
        'Valor esperado den un indicador, el cual se fija desde la planeación y se verifica su cumplimiento en la fase de control en el proceso administrativo.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, pero a su vez pueden ser mitigar o erradicar una debilidad ya que es planamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo.',
    },
    {
      termino: 'Proceso administrativo',
      significado:
        'Serie de fases de actividades que buscan dar un eficiente uso de los recursos y facilitar la dinámica empresarial, es decir facilitar el cumplimiento de su propósito empresarial..',
    },
  ],
  complementario: [
    {
      tema: 'Gestión de control',
      referencia:
        'Terreros, D. (2021, julio 15).Indicadores de gestión empresarial: características y tipos. [Web log post]. Hubspot.  ',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/indicadores-de-gestion',
    },
    {
      tema: 'Gestión de control',
      referencia: 'Tdx (s.f.). El control de gestión en la empresa. ',
      tipo: 'Documento',
      link: 'https://www.tdx.cat/bitstream/handle/10803/6759/09CAP3V3.pdf',
    },
    {
      tema: 'Normativa relacionada',
      referencia:
        'Superintendencia de Industria y Comercio (s.f.). Normas de Control. Sic.',
      tipo: 'Página web',
      link: 'https://www.sic.gov.co/normas-de-control',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto temático',
        centro: ' Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edinson Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
