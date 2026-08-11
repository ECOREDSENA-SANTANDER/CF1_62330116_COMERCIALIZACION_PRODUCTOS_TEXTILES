export default {
  global: {
    Name: 'Textiles en el sector de la confección',
    Description:
      'El componente formativo “Textiles en el sector de la confección” aborda los fundamentos técnicos necesarios para identificar insumos y productos textiles de acuerdo con las necesidades del mercado. Sus contenidos integran la clasificación e identificación de fibras, la clasificación de hilos, la caracterización de textiles, los acabados, la calidad, la normatividad aplicable y la relación entre producto textil, valor agregado, tendencias de moda y decisión comercial.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Fundamentos técnicos de los materiales textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fibras e hilos textiles',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caracterización y acabados textiles',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad de los textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Enfoques y elementos de la calidad textil',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Control de calidad, pruebas y lista de chequeo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad aplicable a los textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Reglamentos, organismos y laboratorios de referencia textil',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normas técnicas, ensayos y comercialización',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Producto textil y necesidades del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Relación del producto textil con el mercado',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tendencias, valor agregado y decisión de compra',
            hash: 't_4_2',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Acabado textil',
      significado:
        'proceso aplicado a un textil para modificar o mejorar propiedades como tacto, apariencia, estabilidad, resistencia, suavidad, repelencia, brillo o comportamiento frente al lavado.',
    },
    {
      termino: 'Ancho útil',
      significado:
        'medida aprovechable de una tela para procesos de corte, confección o transformación, sin considerar partes no funcionales cuando estas no se emplean en el producto final.',
    },
    {
      termino: 'Calidad de conformidad',
      significado:
        'verificación que permite establecer si un textil cumple con las especificaciones previamente definidas en ficha técnica, muestra, etiqueta, pedido o requisito comercial.',
    },
    {
      termino: 'Calidad de diseño',
      significado:
        'conjunto de características planeadas para que un textil responda a una función, uso final, necesidad del mercado o condición de desempeño determinada.',
    },
    {
      termino: 'Caracterización textil',
      significado:
        'descripción de las propiedades físicas, técnicas y funcionales de un textil, como composición, gramaje, elasticidad, caída, resistencia, textura y mantenimiento.',
    },
    {
      termino: 'Composición textil',
      significado:
        'identificación de las fibras o mezclas presentes en una tela, hilo, prenda o producto textil, expresada según los materiales que la conforman.',
    },
    {
      termino: 'Etiquetado textil',
      significado:
        'información incluida en una confección o producto textil para declarar composición, instrucciones de cuidado, talla, origen y datos del fabricante o importador, según el reglamento aplicable.',
    },
    {
      termino: 'Fibra artificial',
      significado:
        'fibra obtenida mediante procesos industriales a partir de materias primas de origen natural transformadas químicamente, como viscosa, modal, <em>lyocell</em> o acetato.',
    },
    {
      termino: 'Fibra natural',
      significado:
        'fibra procedente de fuentes vegetales, animales o minerales, utilizada para la elaboración de hilos, telas y productos textiles.',
    },
    {
      termino: 'Fibra sintética',
      significado:
        'fibra producida a partir de polímeros industriales, empleada en textiles por propiedades como resistencia, estabilidad, elasticidad, secado rápido o facilidad de cuidado.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que registra información del producto textil, como composición, características, medidas, acabados, desempeño, proveedor, lote, cuidados y especificaciones comerciales.',
    },
    {
      termino: 'Gramaje',
      significado:
        'masa del textil por unidad de área, generalmente expresado en gramos por metro cuadrado, y relacionado con caída, grosor, resistencia, cuerpo y percepción de calidad.',
    },
    {
      termino: 'Hilo',
      significado:
        'material continuo formado por fibras o filamentos, utilizado para tejer, coser, bordar o elaborar superficies textiles.',
    },
    {
      termino: 'Norma técnica',
      significado:
        'documento de referencia que establece criterios, métodos, requisitos o procedimientos para evaluar productos, procesos o servicios, generalmente de aplicación voluntaria, salvo incorporación en reglamentos, contratos o requisitos obligatorios.',
    },
    {
      termino: 'Producto textil',
      significado:
        'material, insumo o artículo elaborado a partir de fibras, hilos, telas o estructuras textiles, destinado a usos en vestuario, hogar, decoración, dotación, industria o moda.',
    },
    {
      termino: 'Reglamento técnico',
      significado:
        'documento de cumplimiento obligatorio que establece requisitos mínimos para comercializar determinados productos, proteger al consumidor y evitar información engañosa.',
    },
    {
      termino: 'Solidez del color',
      significado:
        'resistencia del color de un textil frente a factores como lavado, frote, sudor, luz, calor, agua o agentes de limpieza.',
    },
    {
      termino: 'Tendencia de moda',
      significado:
        'orientación de cambio en colores, texturas, acabados, materiales, estilos o comportamientos de consumo que influye en la selección y comercialización de textiles.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'característica adicional que incrementa la utilidad, diferenciación, desempeño o aceptación comercial de un producto textil.',
    },
  ],
  referencias: [
    {
      referencia:
        'AATCC. (s. f.). AATCC standard test methods and procedures. American Association of Textile Chemists and Colorists.',
      link: '',
    },
    {
      referencia:
        'ASTM International. (2020). ASTM D3776/D3776M-20: Standard test methods for mass per unit area (weight) of fabric.',
      link: '',
    },
    {
      referencia:
        'ASTM International. (2016). ASTM D4970/D4970M-16e3: Standard test method for pilling resistance and other related surface changes of textile fabrics: Martindale tester.',
      link: '',
    },
    {
      referencia:
        'Comunidad Andina. (2019). Resolucion 2109 de 2019: Reglamento Tecnico Andino para el etiquetado de confecciones. Secretaria General de la Comunidad Andina.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Tecnicas y Certificacion. (1998). NTC 2567: Textiles. Telas de tejido plano y de tejido de punto. Clasificacion por defectos.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Tecnicas y Certificacion. (2001). NTC 703-1: Textiles. Telas de tejido plano y telas de tejido de punto. Requisitos generales.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Tecnicas y Certificacion. (2002). NTC-ISO 2859-1: Procedimientos de muestreo para inspeccion por atributos. Parte 1: Planes de muestreo determinados por el nivel aceptable de calidad para inspeccion lote por lote.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Tecnicas y Certificacion. (s. f.). Servicio de normalizacion tecnica. ICONTEC.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (1977). ISO 3801:1977: Textiles --- Woven fabrics --- Determination of mass per unit length and mass per unit area.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2016). ISO 105-X12:2016: Textiles --- Tests for colour fastness --- Part X12: Colour fastness to rubbing.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2017). ISO/IEC 17025:2017: General requirements for the competence of testing and calibration laboratories.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2020). ISO 12945-2:2020: Textiles --- Determination of fabric propensity to surface pilling, fuzzing or matting --- Part 2: Modified Martindale method.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2021). ISO 6330:2021: Textiles --- Domestic washing and drying procedures for textile testing.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). ISO 3758:2023: Textiles --- Care labelling code using symbols.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2024). ISO 7211-2:2024: Textiles --- Methods for analysis of woven fabrics construction --- Part 2: Determination of number of threads per unit length.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2021). Resolucion 941 de 2021: Por la cual se deroga la Resolucion 1950 de 2009 y sus resoluciones modificatorias. Republica de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
