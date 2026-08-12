<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos técnicos de los materiales textiles

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-2.p-3
          p.mb-0 Este componente formativo aborda los conceptos necesarios para identificar productos textiles de acuerdo con su composición, comportamiento, aplicación y valor comercial. Para ello, se estudian aspectos relacionados con la clasificación e identificación de fibras, los tipos de hilos, la caracterización de las telas y los acabados que modifican o fortalecen sus propiedades de uso. Estos elementos permiten relacionar las condiciones técnicas del material con las necesidades del cliente y del sector productivo.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-3  
        p.mb-0 La comprensión de los textiles integra aspectos técnicos relacionados con el origen de las fibras, la estructura de los hilos, el tipo de tejido, el comportamiento del material, los acabados aplicados y la función final del producto. Cada uno de estos factores permite diferenciar textiles para vestuario, hogar, uso industrial, deportivo, institucional o especializado, de acuerdo con los requerimientos del consumidor y las condiciones de uso.
    
    p.mb-5 En la cadena textil, el material no se valora únicamente por su apariencia. También se analiza por su composición, resistencia, textura, capacidad de absorción, elasticidad, caída, estabilidad dimensional, facilidad de mantenimiento y respuesta frente a procesos de confección o transformación. Estos elementos aportan criterios para seleccionar productos textiles de manera coherente con las necesidades del mercado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Aspectos técnicos de los textiles
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-d5.col-md-6.mb-3
        .tarjeta-numerada.color-primario.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5 Origen de la fibra
          p.mb-0 Define la composición natural, artificial o sintética del textil. Este aspecto influye en el precio, la percepción de calidad y los argumentos de venta.
      .col-lg-d5.col-md-6.mb-3
        .tarjeta-numerada.color-secundario.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5 Tipo de hilo
          p.mb-0 Determina la resistencia, el grosor, la regularidad y la apariencia del material. También afecta la durabilidad, la textura y el desempeño del producto.
      .col-lg-d5.col-md-6.mb-3
        .tarjeta-numerada.color-acento-contenido.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5 Estructura textil
          p.mb-0 Permite reconocer si el material corresponde a tejido plano, tejido de punto, no tejido u otra estructura. Este aspecto orienta su uso en vestuario, hogar, dotación, decoración o productos técnicos.
      .col-lg-d5.col-md-6.mb-3
        .tarjeta-numerada.color-acento-botones.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5 Acabado aplicado
          p.mb-0 Modifica la superficie, el tacto, la protección o el desempeño del textil. Además, aporta valor agregado y diferenciación frente a otros productos.
      .col-lg-d5.col-md-6.mb-3
        .tarjeta-numerada.color-adicional-1.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 5
          h5 Comportamiento de uso
          p.mb-0 Relaciona resistencia, caída, elasticidad, absorción y mantenimiento. Esta información permite responder a necesidades funcionales del consumidor. 
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El conocimiento de los textiles permite reconocer qué material responde mejor a una necesidad específica de uso. Una tela liviana, una fibra absorbente, un hilo resistente o un acabado impermeable no tienen el mismo comportamiento ni el mismo valor comercial. Por esta razón, la identificación técnica del textil fortalece la selección, presentación y comercialización de productos acordes con el cliente y el mercado.
    

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Fibras e hilos textiles
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p.mb-4 La fibra textil es la unidad básica a partir de la cual se elaboran hilos, telas y productos textiles. Su clasificación se establece principalmente según el origen del material, lo que permite diferenciar fibras naturales, artificiales y sintéticas. Esta clasificación orienta las selección del textil según comportamiento, aplicación, costo, mantenimiento y valor percibido en el mercado.
        .cajon.color-secundario.bg-color-2.p-4
          p.mb-0 Las fibras naturales proceden de fuentes vegetales, animales o minerales. Entre las más reconocidas se encuentran el algodón, el lino, la lana y la seda. Estas fibras suelen valorarse por sus propiedades de confort, absorción, transpirabilidad o tacto, aunque su comportamiento puede variar según el proceso de hilatura, tejido y acabado.
    
    p.mb-4 Las fibras artificiales se obtienen mediante procesos industriales a partir de materias primas de origen natural transformadas químicamente, como ocurre con la viscosa, el modal o el acetato. En cambio, las fibras sintéticas se producen a partir de polímeros generados industrialmente, como poliéster, poliamida, acrílico o elastano. Estas últimas se emplean con frecuencia por su resistencia, estabilidad, facilidad de cuidado y adaptación a usos funcionales.
    
    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Clasificación de las fibras textiles
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th Clasificación de la fibra
              th Origen
              th Ejemplos frecuentes
              th Características generales
          tbody
            tr
              td Natural vegetal
              td Procede de semillas, tallos, hojas o frutos.
              td Algodón, lino, cáñamo, yute.
              td Buena absorción, tacto confortable y relación directa con fibras de origen orgánico.
            tr
              td Natural animal
              td Procede de pelo, lana o filamentos de origen animal.
              td Lana, seda, alpaca, cachemir.
              td Aislamiento térmico, suavidad, brillo o elasticidad según la fibra.
            tr
              td Artificial
              td Se obtiene de materias naturales transformadas mediante procesos industriales.
              td Viscosa, modal, #[em lyocell], acetato.
              td Buena caída, suavidad y apariencia similar a fibras naturales en algunos casos.
            tr
              td Sintética
              td Se produce a partir de polímeros industriales.
              td Poliéster, nailon, acrílico, elastano.
              td Alta resistencia, estabilidad, secado rápido o elasticidad según composición.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-8
        .bg-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-10
              p.mb-0.text-white #[b Nota.] La clasificación de la fibra no determina por sí sola la calidad final del textil. El desempeño también depende del tipo de hilo, la estructura de la tela, los acabados aplicados y las condiciones de uso del producto.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Identificación de fibras textiles
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.bg-color-3.p-4
        .row.justify-content-center.mb-3
          .col-7.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t1/5.svg' alt='')
        h4.text-center Revisión de etiqueta
        p.text-center Permite reconocer composición, instrucciones de cuidado y datos del producto. Esta información sirve para verificar características básicas antes de presentar o vender el textil.
      .tarjeta.bg-color-3.p-4
        .row.justify-content-center.mb-3
          .col-7.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t1/6.svg' alt='')
        h4.text-center Revisión táctil
        p.text-center Permite reconocer suavidad, rigidez, textura, grosor o sensación al contacto. Esta revisión ayuda a relacionar el material con confort, uso y percepción del cliente.      
      .tarjeta.bg-color-3.p-4
        .row.justify-content-center.mb-3
          .col-7.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t1/7.svg' alt='')
        h4.text-center Revisión de apariencia
        p.text-center Permite identificar brillo, opacidad, estructura, uniformidad o apariencia superficial. Estos atributos inciden en la presentación comercial del producto.      
      .tarjeta.bg-color-3.p-4
        .row.justify-content-center.mb-3
          .col-7.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t1/8.svg' alt='')
        h4.text-center Prueba de comportamiento
        p.text-center Permite analizar elasticidad, recuperación, absorción o caída del material. Esta información orienta la selección de textiles según función y necesidad de mercado.      
      .tarjeta.bg-color-3.p-4
        .row.justify-content-center.mb-3
          .col-7.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t1/9.svg' alt='')
        h4.text-center Ficha técnica del proveedor
        p.text-center Presenta datos de composición, ancho, gramaje, acabado y uso recomendado. Su revisión sustenta argumentos de venta y clasificación del producto. 
    
    p La identificación de fibras permite explicar por qué un producto textil puede ser más fresco, resistente, elástico, liviano, abrigado o fácil de cuidar. Esta información fortalece la relación entre las características técnicas del material y las expectativas del cliente. 
    p.mb-4 Reconozca la clasificación de las fibras textiles y su relación con la selección de materiales para productos de confección.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zjp1OL2DCug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Sesión 1. Clasificación de las fibras textiles
    
    p Para continuar, identifique métodos básicos para reconocer fibras textiles y relacionarlas con el comportamiento del producto durante el uso, el cuidado y la comercialización.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xL89_BMN61I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Sesión 3. Identificación de fibras 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        p.mb-3 El hilo es el material continuo formado por fibras o filamentos que se utiliza para tejer, coser, bordar o elaborar superficies textiles. Su clasificación responde a criterios como origen de la fibra, estructura, torsión, número de cabos, grosor, uso y acabado. En la comercialización de productos textiles, el hilo incide en la resistencia, apariencia, textura y desempeño del producto final.
        .cajon.color-primario.bg-color-1.p-4
          p.mb-0 Los hilos pueden elaborarse a partir de fibras cortas o filamentos continuos. Los hilos de fibra corta se forman mediante procesos de hilatura que agrupan fibras de longitud limitada, como algodón, lana o mezclas. Los hilos de filamento se componen de fibras largas y continuas, frecuentes en materiales sintéticos o en fibras como la seda. Esta diferencia influye en la regularidad, brillo, suavidad y resistencia del hilo.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/10.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/11.svg', alt='')
      .col-lg-11   
        p También pueden clasificarse según su uso. Los hilos para tejido participan en la elaboración de telas planas o de punto; los hilos de coser se emplean en el ensamble de prendas; los hilos de bordar aportan detalles gráficos o decorativos; los hilos técnicos se destinan a aplicaciones con mayores exigencias de resistencia, elasticidad, protección o desempeño.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Tipos de hilos
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-9")
          .row(titulo="Hilo de fibra corta")
            .col-md-11.mb-4.mb-md-0
              p Está formado por fibras discontinuas unidas mediante torsión. Se utiliza en tejidos de algodón, lana, mezclas y productos de apariencia natural.
          .row(titulo="Hilo de filamento")
            .col-md-11.mb-4.mb-md-0
              p Está compuesto por filamentos continuos. Se emplea en telas de brillo, suavidad, resistencia o apariencia uniforme.
          .row(titulo="Hilo de coser")
            .col-md-11.mb-4.mb-md-0
              p Está diseñado para unir piezas textiles mediante puntadas. Se utiliza en la confección de prendas, accesorios textiles y productos de hogar.
          .row(titulo="Hilo de bordar")
            .col-md-11.mb-4.mb-md-0
              p Presenta brillo, color y regularidad para aplicaciones decorativas. Se emplea en logotipos, detalles ornamentales, iniciales y marcación textil.
          .row(titulo="Hilo técnico")
            .col-md-11.mb-4.mb-md-0
              p Responde a requerimientos específicos de resistencia o desempeño. Se utiliza en productos industriales, deportivos, de protección o de uso especializado. 
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/12.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-8
        .bg-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-10
              p.mb-0.text-white #[b Nota técnica:] la selección del hilo requiere correspondencia con el material textil, la aguja, la máquina, el tipo de puntada y la función del producto. Un hilo inadecuado puede afectar la resistencia de la costura, la apariencia del acabado o el comportamiento durante el uso.
    
    p.mb-4 Reconozca los tipos de hilos y su incidencia en la resistencia, apariencia, textura y desempeño del producto textil.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qUdbl6B18Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Sesión 4. Clasificación de los hilos 

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Caracterización y acabados textiles

    .row.justify-content-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/13.svg', alt='')
      .col-lg-11
        p.mb-0 Caracterizar un textil implica describir sus propiedades físicas, técnicas y funcionales para determinar su comportamiento y posible aplicación. Esta caracterización permite diferenciar materiales según composición, estructura, peso, ancho, textura, elasticidad, caída, resistencia, absorción, transparencia, tacto y facilidad de mantenimiento.
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-4.p-4.h-100
          p.mb-0 En el mercado textil, la caracterización aporta información clave para seleccionar materiales según el producto final. Un textil destinado a prendas deportivas requiere condiciones diferentes a uno usado en camisería, lencería de hogar, uniformes o decoración. El análisis de sus propiedades favorece decisiones más precisas en compra, venta, clasificación y recomendación de uso.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/14.png', alt='')
      .col-lg-4  
        img.mb-3.mb-lg-5.w-80x(src='@/assets/curso/temas/t1/15.svg', alt='')
        p.mb-0 El proceso de caracterización puede realizarse mediante revisión, medición básica, consulta de ficha técnica y comparación con muestras. En contextos productivos, esta información se registra para asegurar que el textil cumpla con los requisitos de diseño, confección, calidad y comercialización.
    
    ImagenInfografica.color-acento-botones.mb-5(data-aos='fade')
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/16.jpg', alt='')
      .tarjeta.bg-color-9.p-3(x="29%" y="63%" numero="1")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/17.svg', alt='')
          .col-lg-9
            h5.mb-0 Composición
            p.mb-0 Tipo de fibra o mezcla presente en el material. Define comportamiento, cuidado y argumento comercial.
      .tarjeta.bg-color-5.p-3(x="53%" y="42%" numero="2")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/18.svg', alt='')
          .col-lg-9
            h5.mb-0 Gramaje
            p.mb-0 Peso del textil por unidad de área. Incide en caída, grosor, resistencia y sensación de abrigo.      
      .tarjeta.bg-color-6.p-3(x="64%" y="37%" numero="3")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/19.svg', alt='')
          .col-lg-9
            h5.mb-0 Ancho útil
            p.mb-0 Medida disponible para corte o aprovechamiento. Afecta consumo de material y rendimiento comercial.
      .tarjeta.bg-color-7.p-3(x="63%" y="52%" numero="4")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/20.svg', alt='')
          .col-lg-9
            h5.mb-0 Elasticidad
            p.mb-0 Capacidad de estirarse y recuperar su forma. Es relevante en prendas ajustadas, deportivas o de movimiento.      
      .tarjeta.bg-color-9.p-3(x="39%" y="86%" numero="5")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/21.svg', alt='')
          .col-lg-9
            h5.mb-0 Caída
            p.mb-0 Forma en que el textil se comporta al suspenderse o adaptarse al cuerpo. Incide en silueta, fluidez y apariencia del producto.      
      .tarjeta.bg-color-5.p-3(x="48%" y="67%" numero="6")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/22.svg', alt='')
          .col-lg-9
            h5.mb-0 Textura
            p.mb-0 Sensación superficial del material al contacto. Se relaciona con confort, estética y percepción de calidad.      
      .tarjeta.color-acento-contenido.p-3(x="75%" y="46%" numero="7")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/23.svg', alt='')
          .col-lg-9
            h5.mb-0 Resistencia
            p.mb-0 Capacidad para soportar uso, tensión, fricción o lavado. Es fundamental en dotaciones, uniformes, productos de alto uso y textiles técnicos.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.bg-color-2.p-4
          p.mb-0 La caracterización textil permite relacionar el material con una necesidad concreta del mercado. Un producto puede seleccionarse por suavidad, durabilidad, elasticidad, precio, apariencia o facilidad de cuidado. Cuando estas propiedades se identifican correctamente, la recomendación comercial resulta más coherente con el uso esperado. 

    p.mb-4 Para complementar este tema, identifique las propiedades físicas, técnicas y funcionales que permiten caracterizar un textil según su uso y aplicación comercial.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kL9UYOzJD3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Caracterización de los textiles 
    
    p.mb-4 Los acabados textiles son procesos aplicados a las telas para modificar, mejorar o complementar sus propiedades. Pueden influir en el tacto, apariencia, resistencia, brillo, caída, color, estabilidad, impermeabilidad, suavidad, facilidad de planchado o comportamiento frente al lavado. Estos procesos aportan valor agregado y permiten diferenciar productos textiles en el mercado.
    
    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/24.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p.mb-3 Algunos acabados tienen finalidad estética, como el perchado, el estampado, el gofrado o los efectos de brillo. Otros responden a funciones técnicas, como repelencia al agua, antiarrugas, suavizado, control de encogimiento, resistencia al fuego o protección antimanchas. La elección del acabado depende del uso final del textil, del segmento de mercado y de las características que se buscan destacar en el producto.
        .row.justify-content-center
          .col-lg-10
            p.mb-0 Desde el punto de vista comercial, los acabados permiten ampliar los argumentos de venta. Una tela con acabado suave puede dirigirse a prendas de contacto directo con la piel; un textil con repelencia al agua puede emplearse en prendas exteriores; un material con control de encogimiento puede ofrecer mayor estabilidad después del lavado. Esta información ayuda a vincular el producto con beneficios concretos para el cliente.
          .col-lg-2.d-none.d-lg-block
            .bg-color-7.d-flex.align-items-center.p-3.h-100
              img(src='@/assets/curso/temas/t1/25.svg', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Procesos y acabados textiles    

    .row.justify-content-center.align-items-center.bg-fondo-1.p-4.mb-5(data-aos='fade')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/26.png', alt='')
      .col-lg-8
        SlyderF.fw(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/27.svg' alt='')
            h5.text-center Suavizado
            p.mb-0 Mejora el tacto y la sensación al contacto. Se aplica en prendas interiores, camisetas, ropa infantil o textiles de descanso.
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/28.svg' alt='')
            h5.text-center Antiencogimiento
            p.mb-0 Reduce la variación dimensional después del lavado. Se aplica en camisería, pantalonería, uniformes y prendas de uso frecuente.
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/29.svg' alt='')
            h5.text-center Repelente al agua
            p.mb-0 Disminuye la absorción superficial de líquidos. Se aplica en chaquetas, prendas exteriores, bolsos o textiles funcionales.          
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/27.svg' alt='')
            h5.text-center Perchado
            p.mb-0 Levanta fibras superficiales para aportar volumen o abrigo. Se aplica en sudaderas, cobijas, forros y prendas térmicas          
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/28.svg' alt='')
            h5.text-center Estampado
            p.mb-0 Incorpora motivos gráficos, patrones o diseños sobre la superficie. Se aplica en moda casual, decoración, textiles promocionales o colecciones de temporada.          
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t1/27.svg' alt='')
            h5.text-center Antiarrugas
            p.mb-0 Reduce la formación de arrugas y mejora la recuperación de la apariencia durante el uso y después del lavado. Se aplica en camisas, uniformes, prendas de oficina o textiles de viaje. 

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-8
        .bg-color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-10
              p.mb-0 #[b Nota técnica:] el acabado textil modifica la manera en que el material se percibe, se usa y se comercializa. Su identificación permite reconocer beneficios, cuidados y aplicaciones, evitando presentar el producto únicamente por su apariencia externa.
    
    p Reconozca los acabados textiles y su relación con el desempeño, la apariencia, el cuidado y la diferenciación comercial del producto.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ijJexxkGI98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Los acabados textiles 
      




     
          

              



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
