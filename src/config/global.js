export default {
  global: {
    componenteFormativo: 'Gestión de equipos informáticos',
    descripcionCurso:
      'En este componente se aborda la temática relacionada con la gestión de equipos informáticos en cuanto al mantenimiento físico y lógico, teniendo en cuenta especificaciones técnicas y procedimientos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mantenimiento de equipos informáticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de mantenimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Materiales y herramientas técnicas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manuales técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Especificaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procedimientos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos de limpieza para mantenimiento de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Productos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Usos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228147_CF03_DU.zip',
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
  complementario: [
    {
      tema: 'Windows PowerShell',
      referencia: 'Microsoft. (2023). <i>PowerShell documentation</i>.',
      tipo: 'Artículo',
      link: 'https://learn.microsoft.com/en-us/powershell/',
    },
    {
      tema: 'Metodologías de defensa contra virus informáticos',
      referencia:
        'National Institute of Standards and Technology (NIST). (2020). <i>Guide to malware incident prevention and handling for desktops and laptops (SP 800-83)</i>.',
      tipo: 'Artículo',
      link:
        'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-83r1.pdf',
    },
    {
      tema: 'Microsoft Azure',
      referencia: 'Microsoft. (2024). <i>Azure architecture center</i>.',
      tipo: 'Artículo',
      link: 'https://learn.microsoft.com/en-us/azure/architecture/',
    },
    {
      tema: 'Gestión de riesgos y ciberseguridad organizacional',
      referencia:
        'Banco Interamericano de Desarrollo (BID). (2021). <i>Gestión de riesgos cibernéticos en entornos de tecnologías operativas (OT): guía para juntas directivas</i>.',
      tipo: 'Articulo',
      link:
        'https://publications.iadb.org/publications/spanish/document/Gestion-de-riesgos-ciberneticos-en-entornos-de-tecnologias-operativas-OT-guia-para-juntas-directivas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ATX',
      significado:
        'formato de placa base bastante moderno cuyas principales características son una mejor ventilación y accesibilidad, además del uso de clavijas mini-DIN y una gran integración de componentes.',
    },
    {
      termino: 'Actualizaciones de <em>software</em>',
      significado:
        'las actualizaciones de <em>software</em> (también conocidas como parches) son fragmentos adicionales de <em>software</em> publicados por quienes producen los sistemas operativos y programas que usan nuestros equipos para mejorarlos.',
    },
    {
      termino: 'Archivos temporales',
      significado:
        'un archivo temporal es creado por el <em>software</em> con el fin de contener información de forma transitoria durante el tiempo que nos encontramos creando un archivo estándar.',
    },
    {
      termino: 'BIOS',
      significado:
        '<em> Basic Input-Output System</em>, sistema básico de entrada-salida. Programa incorporado en un chip de la placa base que se encarga de realizar las funciones básicas de manejo y configuración del ordenador.',
    },
    {
      termino: 'Caché',
      significado:
        'cualquier tipo de memoria "intermedia" entre dos aparatos, que acelera las comunicaciones y transmisiones de datos entre ellos. Por extensión, se aplica a la "caché de nivel 2", es decir, la que está en la placa base, entre el microprocesador y la memoria.',
    },
    {
      termino: 'CPU',
      significado:
        '<em> Central Processing Unit</em> o Unidad Central de Proceso. El "cerebro" de un ordenador; en general, sinónimo de microprocesador. En ocasiones se usa para referirse a toda la caja que contiene la placa base, el micro y las tarjetas de expansión.',
    },
    {
      termino: 'Desfragmentación de disco',
      significado:
        'operación que a veces es necesaria para poner orden en los discos duros mecánicos en los que sueles escribir y reescribir con asiduidad, ya que sistemas operativos como Windows tienden a ir dejando fragmentos en ellos que con el paso del tiempo pueden ralentizarlos.',
    },
    {
      termino: 'Fuente de alimentación',
      significado:
        'componente esencial de cualquier dispositivo electrónico ya que es ella quien se encarga de darle vida. ',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'parte física del ordenador (placa, micro, tarjetas, monitor, etc.).',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'tipo de <em>software</em> que tiene como objetivo dañar o infiltrar sin el consentimiento de su propietario en un sistema de información. Palabra que nace de la unión de los términos en inglés de <em>software</em> malintencionado: <em>malicious software</em>.',
    },
    {
      termino: 'Procesador',
      significado:
        'cerebro del sistema, justamente procesa todo lo que ocurre en la PC y ejecuta todas las acciones que existen.',
    },
    {
      termino: 'RAM',
      significado:
        '<em> Random Access Memory</em>, o Memoria de Acceso aleatorio. La memoria principal en la que se almacenan los datos durante el funcionamiento de un ordenador, la cual se borra al apagarlo. De diversos tipos (Fast Page, EDO, SRAM...) y conectores (SIMM, DIMM...).',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'programas de ordenador, la lógica que permite realizar tareas al <em>hardware</em> (la parte física).',
    },
  ],
  referencias: [
    {
      referencia:
        'Google.com. (s. f.). <em>Mantenimiento Preventivo 2</em>. Google.',
      link: '',
    },
    {
      referencia:
        'Incibe. (s. f.). <em>Glosario de términos de ciberseguridad. Guía de aproximación para el empresario</em>. Incibe.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_glosario_ciberseguridad_metad.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto Temático ',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional ',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador <i>Full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Diego Fernando Velasco Guiza',
          cargo: 'Desarrollador <i>Full stack</i>',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
