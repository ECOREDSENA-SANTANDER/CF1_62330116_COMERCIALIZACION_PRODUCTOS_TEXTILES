<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normatividad aplicable a los textiles
    
    .row.justify-content-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-11   
        p.mb-0 La normatividad aplicable a los textiles reúne normas técnicas, reglamentos técnicos, métodos de ensayo y requisitos de información que orientan la fabricación, verificación, comercialización y uso de telas, insumos textiles y productos confeccionados. Su función consiste en establecer criterios que permitan evaluar la calidad, declarar características del producto, evitar información engañosa para el consumidor y facilitar la comparación entre materiales dentro del mercado.
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-2.h-100.d-flex.align-items-center.p-3
          p.mb-0 En el sector textil, la normatividad no se limita a la fabricación de prendas. También interviene en la identificación de fibras, el control de composición, la medición de propiedades físicas, la evaluación de solidez del color, la resistencia del material, el comportamiento al lavado, el etiquetado, la trazabilidad comercial y la verificación de conformidad. Estos aspectos resultan relevantes para productores, importadores, comercializadores, laboratorios, empresas de confección y consumidores.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-4  
        p.mb-0 Una distinción central corresponde a la diferencia entre norma técnica y reglamento técnico. La norma técnica es un documento de aplicación voluntaria, elaborado por organismos de normalización, que establece métodos, especificaciones o criterios para evaluar productos, procesos o servicios. El reglamento técnico, en cambio, contiene requisitos obligatorios definidos por una autoridad competente o por un organismo supranacional aplicable, con el fin de proteger al consumidor, prevenir prácticas que induzcan a error y garantizar condiciones mínimas de información o seguridad.
    
    .bloque-texto-g.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La norma técnica orienta procedimientos de ensayo, medición, clasificación o control de calidad. El reglamento técnico establece requisitos obligatorios para comercializar determinados productos. En el caso de los textiles y confecciones, ambos instrumentos se complementan: las normas permiten comprobar características del material, mientras los reglamentos definen información mínima, etiquetado y obligaciones frente al consumidor. 
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Documentos aplicables a los textiles
    
    .row.tarj-con1(data-aos='fade')
      .col-lg-8.position-relative
        .avatar
          img(src='@/assets/curso/temas/t3/3.svg', alt='')
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t3/4.svg", alt="")
            .col
              h5.mb-1 Norma técnica
              p.mb-0 Generalmente es voluntaria, salvo que una regulación, contrato o requisito comercial la adopte como obligatoria. Define métodos de ensayo, clasificación, medición, composición, desempeño o control de calidad.          
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t3/5.svg", alt="")
            .col
              h5.mb-1 Reglamento técnico
              p.mb-0 Es obligatorio dentro del campo de aplicación establecido. Determina requisitos mínimos para comercialización, etiquetado, información al consumidor o seguridad del producto.          
        .crd.crd--avatarHorizontal.crd--third.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t3/6.svg", alt="")
            .col
              h5.mb-1 Método de ensayo
              p.mb-0 Corresponde a un procedimiento técnico estandarizado. Permite evaluar propiedades como masa, ancho, número de hilos, solidez del color, abrasión, #[em pilling] (formación de motas), encogimiento o resistencia.          
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t3/7.svg", alt="")
            .col
              h5.mb-1 Ficha técnica
              p.mb-0 Es un documento de control del producto. Registra composición, características, desempeño, cuidados, referencia, proveedor, lote y especificaciones comerciales. 

        
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Reglamentos, organismos y laboratorios de referencia textil
    
    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/8.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p.mb-3 El sector textil emplea referentes técnicos de organismos nacionales e internacionales que desarrollan normas, métodos de ensayo, procedimientos de evaluación y documentos de soporte para la calidad de materiales y productos. Entre los más utilizados se encuentran la Organización Internacional de Normalización (ISO), la American Society for Testing and Materials (ASTM), la Asociación Americana de Químicos Textiles y Coloristas (AATCC) y el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC).
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            .bg-color-7.d-flex.align-items-center.p-3.h-100
              img(src='@/assets/curso/temas/t3/9.svg', alt='')
          .col-lg-10
            p.mb-0 La ISO desarrolla normas internacionales aplicables a múltiples sectores productivos. En textiles, sus documentos se relacionan con métodos de ensayo, símbolos de cuidado, solidez del color, masa por unidad de área, procedimientos de lavado, análisis de construcción textil, propiedades físicas y requisitos asociados a prendas de protección.

    .row.justify-content-center.mb-4
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/10.png', alt='')
      .col-lg-5
        p La ASTM desarrolla normas de consenso voluntario aplicadas a materiales, productos, sistemas y servicios. En el campo textil, sus métodos se emplean para evaluar propiedades como masa por unidad de área, ancho de tela, resistencia a la abrasión, #[em pilling], elasticidad, resistencia al rasgado, resistencia a la rotura y permeabilidad al aire, entre otras.
        p.mb-0 La AATCC desarrolla métodos de ensayo utilizados por la industria textil para evaluar calidad, color, comportamiento al lavado, solidez al frote, solidez a la transpiración, cambio dimensional, apariencia después del lavado y otras propiedades relacionadas con desempeño y conservación del producto.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/11.svg', alt='')
    
    p.mb-5 En Colombia, ICONTEC participa en la normalización técnica y en la generación de Normas Técnicas Colombianas (NTC). Estas normas sirven como referentes para diferentes sectores, incluido el textil, y pueden emplearse en procesos de especificación, control de calidad, contratación, compra, producción y comercialización, según el alcance de cada documento y los requisitos definidos por la empresa, el cliente o la autoridad competente.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Organismos y referentes de normalización textil
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-sm-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-4
            .col-7.col-md-9.col-lg-12
              img(src='@/assets/curso/temas/t3/12.svg', alt='')
          h4.text-center ISO
          p.mb-0 Tiene alcance de normalización internacional. En textiles, se relaciona con métodos de ensayo, etiquetado de cuidado, análisis de telas, solidez del color, lavado, desempeño y prendas de protección.
      .col-sm-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-4
            .col-7.col-md-9.col-lg-12
              img(src='@/assets/curso/temas/t3/13.svg', alt='')
          h4.text-center ASTM International
          p.mb-0 Desarrolla normas de consenso voluntario. En textiles, se relaciona con ensayos físicos y de desempeño para telas, fibras, hilos, cremalleras, abrasión, #[em pilling], ancho, masa y resistencia.
      .col-sm-6.col-lg-3.mb-3.mb-sm-0
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-4
            .col-7.col-md-9.col-lg-12
              img(src='@/assets/curso/temas/t3/14.svg', alt='')
          h4.text-center AATCC
          p.mb-0 Desarrolla métodos de ensayo para química textil, color y desempeño. En textiles, se relaciona con solidez del color, lavado, frote, transpiración, apariencia, cambios dimensionales y evaluación de acabados.
      .col-sm-6.col-lg-3
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-4
            .col-7.col-md-9.col-lg-12
              img(src='@/assets/curso/temas/t3/15.svg', alt='')
          h4.text-center ICONTEC
          p.mb-0 Participa en la normalización técnica colombiana. En textiles, se relaciona con Normas Técnicas Colombianas aplicables a productos, ensayos, clasificación, requisitos y control de calidad.  
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        p.mb-3 Los laboratorios que realizan ensayos o calibraciones requieren condiciones técnicas y de gestión que permitan garantizar resultados confiables. En este contexto, la norma ISO/IEC 17025:2017 establece requisitos generales para la competencia de laboratorios de ensayo y calibración. Esta norma no es exclusiva del sector textil, pero puede aplicarse a laboratorios que realizan pruebas sobre fibras, hilos, telas, insumos o productos confeccionados.
        p.mb-0 La aplicación de la norma ISO/IEC 17025:2017 permite organizar aspectos relacionados con imparcialidad, competencia del personal, condiciones ambientales, equipos, trazabilidad metrológica, validación de métodos, manejo de muestras, aseguramiento de resultados, informes de ensayo y gestión documental. En textiles, estos elementos son relevantes cuando se requiere comprobar propiedades del material mediante resultados técnicos confiables.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/16.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/17.svg', alt='')
      .col-lg-11   
        p.mb-0 En procesos de comercialización, los resultados de laboratorio pueden respaldar la información suministrada en fichas técnicas, etiquetas, certificados de calidad, especificaciones de compra o acuerdos entre proveedor y cliente. De esta forma, el ensayo textil aporta evidencia para sustentar características como composición, estabilidad dimensional, solidez del color, resistencia, abrasión, #[em pilling], gramaje o desempeño funcional.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Aspectos asociados a ISO/IEC 17025:2017
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-9")
          .row(titulo="Competencia técnica")
            .col-md-11.mb-4.mb-md-0
              p Implica contar con personal calificado para realizar ensayos, interpretar métodos y reportar resultados.
          .row(titulo="Condiciones ambientales")
            .col-md-11.mb-4.mb-md-0
              p Incluye el control de temperatura, humedad u otras variables que puedan afectar la muestra.
          .row(titulo="Equipos de medición")
            .col-md-11.mb-4.mb-md-0
              p Considera el uso de instrumentos adecuados, calibrados y mantenidos según el método aplicado.
          .row(titulo="Métodos de ensayo")
            .col-md-11.mb-4.mb-md-0
              p Comprende la aplicación de procedimientos normalizados, validados o acordados con el cliente.
          .row(titulo="Manejo de muestras")
            .col-md-11.mb-4.mb-md-0
              p Incluye la identificación, conservación y trazabilidad de las muestras textiles evaluadas. 
          .row(titulo="Informe de resultados")
            .col-md-11.mb-4.mb-md-0
              p Presenta de manera clara los datos, el método utilizado, las condiciones de ensayo y las observaciones técnicas. 
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t2/11.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/18.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p Para la comercialización de confecciones en Colombia y en los países miembros de la Comunidad Andina, se toma como referencia el #[b Reglamento Técnico Andino para el Etiquetado de Confecciones,] aprobado mediante la #[b Resolución 2109 de 2019] de la Secretaría General de la Comunidad Andina. Este reglamento establece la información mínima que debe incluirse en la etiqueta de las confecciones fabricadas o importadas que se comercializan dentro de la subregión andina.
        p.mb-0 La Resolución 1950 de 2009, que anteriormente regulaba el etiquetado de confecciones en Colombia, fue derogada mediante la #[b Resolución 941 de 2021] del Ministerio de Comercio, Industria y Turismo, a partir de la entrada en vigor del Reglamento Técnico Andino. Por esta razón, para el desarrollo actual de la temática se toma como referencia este reglamento y no el reglamento colombiano anterior.
    
    p.mb-5 El Reglamento Técnico Andino busca prevenir prácticas que puedan inducir a error a los consumidores sobre las características reales de las confecciones. Para ello, establece la información mínima, las condiciones de presentación de la etiqueta, la declaración de composición, las instrucciones de cuidado, la identificación del fabricante o importador, la talla o dimensiones y el país de origen o fabricación.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Información mínima de etiquetado en confecciones según el Reglamento Técnico Andino
    
    .row.justify-content-center.align-items-center.bg-fondo-1.p-4.mb-5(data-aos='fade')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/19.png', alt='')
      .col-lg-8
        SlyderF.fw(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t3/20.svg' alt='')
            h5.text-center Composición de materiales
            p.mb-0 Indica la composición de los materiales que conforman la confección, expresada según las denominaciones genéricas de fibras o materiales.
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t3/21.svg' alt='')
            h5.text-center Instrucciones de cuidado y conservación
            p.mb-0 Orientan el lavado, secado, planchado, blanqueo o limpieza profesional, según corresponda.
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t3/22.svg' alt='')
            h5.text-center Identificación del fabricante o importador
            p.mb-0 Permite identificar al fabricante o importador del producto mediante su nombre o razón social y los datos de identificación exigidos por la normativa aplicable.         
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t3/23.svg' alt='')
            h5.text-center Talla o dimensiones
            p.mb-0 Informa el tamaño de la prenda o las dimensiones del producto, según aplique.         
          .tarjeta.bg-color-2.p-4
            .row.justify-content-center.mb-3
              .col-7.col-md-4.col-lg-8
                img(src='@/assets/curso/temas/t3/24.svg' alt='')
            h5.text-center País de origen o fabricación
            p.mb-0 Declara el lugar donde fue elaborado, fabricado o hecho el producto. 
    
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-1.p-4.h-100.d-flex.align-items-center
          p.mb-0 La información puede presentarse en una o más etiquetas, siempre que sea clara, visible, legible y esté en idioma español. La composición, las instrucciones de cuidado y el país de origen se consignan en etiqueta permanente, mientras que la identificación del fabricante o importador y la talla o dimensión pueden ubicarse en etiqueta permanente o no permanente, según las condiciones definidas en el reglamento.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/25.png', alt='')
      .col-lg-4  
        img.mb-3.w-80x.d-none.d-lg-block(src='@/assets/curso/temas/t3/26.svg', alt='')
        p.mb-0 En cuanto a la composición, los materiales se declaran en orden decreciente de participación. Los materiales que aportan características especiales o funcionales al producto también se declaran, incluso cuando se encuentren en proporciones menores, debido a que inciden en el desempeño o diferenciación de la confección. En productos con recubrimientos, la etiqueta identifica tanto la composición del textil como el material del recubrimiento.
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El etiquetado no cumple únicamente una función informativa. También respalda la comercialización responsable, porque permite que el consumidor reconozca composición, cuidados, talla, origen y responsable del producto. En este sentido, la etiqueta actúa como soporte de confianza entre productor, comercializador y cliente. 


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Normas técnicas, ensayos y comercialización

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/28.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p.mb-4 Las normas técnicas aplicadas al control de calidad textil permiten evaluar propiedades físicas, químicas, dimensionales y funcionales de fibras, hilos, telas y productos confeccionados. Su selección depende del tipo de material, el uso previsto, el mercado de destino, los requisitos del cliente y la capacidad del laboratorio o empresa que realiza la verificación.
        .cajon.color-secundario.bg-color-2.p-4
          p.mb-0 En el control de calidad de telas, las pruebas más frecuentes se relacionan con masa por unidad de área, número de hilos, ancho útil, estabilidad dimensional, solidez del color, resistencia al frote, resistencia a la luz, comportamiento al lavado, resistencia al rasgado, resistencia a la abrasión, formación de #[em pilling] y apariencia después del uso o mantenimiento.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Normas técnicas por ensayo o propiedad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Propiedad o ensayo
                th Referentes técnicos utilizados en el sector
            tbody
              tr
                td Masa por unidad de área o longitud.
                td ISO 3801; ASTM D3776/D3776M.
              tr
                td Número de hilos por unidad de longitud en tejidos planos.
                td ISO 7211-2:2024; ASTM D3775.
              tr
                td Procedimientos domésticos de lavado y secado para ensayos textiles.
                td ISO 6330:2021; AATCC 135; AATCC 150.
              tr
                td Etiquetado de cuidado por símbolos.
                td ISO 3758:2023 como referente internacional actualizado; el Reglamento Técnico Andino remite a ISO 3758:2012.
              tr
                td Solidez del color al frote.
                td ISO 105-X12; AATCC TM8.
              tr
                td Solidez del color al lavado.
                td AATCC TM61; serie ISO 105 correspondiente al ensayo aplicable.
              tr
                td Solidez del color a la transpiración.
                td ISO 105-E04; AATCC TM15.
              tr
                td Resistencia a la abrasión.
                td ASTM D3884, ASTM D3885 o ASTM D3886, según equipo y método.
              tr
                td Formación de #[em pilling].
                td ISO 12945-2; ASTM D4970/D4970M; ASTM D3512/D3512M, según método seleccionado.
              tr
                td Cambio dimensional después del lavado.
                td ISO 6330:2021 como procedimiento de lavado; AATCC TM135 o AATCC TM150, según tela o prenda. 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos='fade')
      .col-lg-10
        .bg-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-10
              p.mb-0.text-white #[b Nota.] Algunas normas mencionadas en documentos técnicos antiguos han sido reemplazadas, retiradas o actualizadas. Por ello, en procesos productivos o comerciales resulta necesario consultar siempre la edición vigente en el organismo correspondiente antes de aplicar un método de ensayo. Este criterio es especialmente importante cuando el resultado se usa para compra de insumos, exportación, certificación, reclamación, ficha técnica o evaluación de proveedor.

    p.mb-4 Las Normas Técnicas Colombianas se consultan a través de ICONTEC y sirven como referentes para clasificar, ensayar o verificar productos textiles dentro del contexto nacional. En el sector textil, algunas NTC han sido utilizadas tradicionalmente para establecer requisitos generales, clasificar defectos y orientar la inspección de telas de tejido plano y tejido de punto.
    
    .row.justify-content-center.mb-5(data-aos='fade')
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-1.d-flex.align-items-center.p-4.h-100
          p.mb-0 La NTC 2567 se ha empleado como referencia para la clasificación por defectos de telas de tejido plano y de tejido de punto, crudas o acabadas. Su aplicación permite identificar defectos evidentes o no evidentes, clasificar calidades y valorar el estado del material de acuerdo con su uso final. En procesos comerciales, este tipo de norma permite establecer acuerdos entre proveedor y comprador sobre aceptación, rechazo o reclasificación de rollos.
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-1.d-flex.align-items-center.p-4.h-100
          p.mb-0 La NTC 703 se ha utilizado como referencia para requisitos generales y específicos de telas de tejido plano y tejidos de punto destinadas a confección, decoración u hogar. Esta norma permite orientar la revisión de características como color, estabilidad dimensional, apariencia, comportamiento del material y requisitos pactados entre cliente y proveedor.
      .col-sm-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-1.d-flex.align-items-center.p-4.h-100
          p.mb-0 La NTC-ISO 2859, correspondiente a procedimientos de muestreo para inspección por atributos, se emplea como referente para seleccionar muestras de lotes y determinar aceptación o rechazo según planes de muestreo. En textiles, este tipo de procedimiento puede aplicarse cuando se requiere inspeccionar rollos, prendas, lotes de producción o materiales recibidos.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Información mínima de etiquetado en confecciones según el Reglamento Técnico Andino
    
    .row.mb-4
      img(src='@/assets/curso/temas/t3/29.png', alt='')
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.col-md-6.mb-3
        .tarjeta-numerada.color-primario.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5 NTC 2567
          p.mb-0 Se aplica a la clasificación por defectos en telas de tejido plano y de tejido de punto.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-numerada.color-secundario.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5 NTC 703
          p.mb-0 Se relaciona con requisitos generales y específicos para telas de tejido plano y de tejido de punto, según alcance de cada parte.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-numerada.color-acento-contenido.py-4.pe-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5 NTC-ISO 2859
          p.mb-0 Se aplica a procedimientos de muestreo para inspección por atributos en lotes. 
    
    p.mb-4 La aplicación de estas normas depende de la edición vigente, del alcance establecido por ICONTEC y de los acuerdos técnicos o comerciales definidos para cada producto. En formación técnica, su revisión permite comprender cómo se clasifican defectos, cómo se inspeccionan lotes y cómo se relacionan los requisitos del textil con la aceptación del producto en el mercado.
    
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos='fade-left')
        p.mb-3 Las pruebas textiles aportan evidencia técnica para respaldar la presentación comercial de un producto. Un textil puede describirse por su composición, color o apariencia; sin embargo, la información resulta más sólida cuando se acompaña de datos sobre resistencia, estabilidad, comportamiento al lavado, solidez del color, ancho útil, gramaje o desempeño funcional.
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            .bg-color-7.d-flex.align-items-center.p-3.h-100
              img(src='@/assets/curso/temas/t3/31.svg', alt='')
          .col-lg-10
            p.mb-0 En la comercialización de productos textiles, las pruebas permiten sustentar argumentos de venta, definir usos recomendados, establecer condiciones de cuidado y diferenciar productos frente a la competencia. También apoyan la gestión de reclamos, la evaluación de proveedores y la selección de materiales para productos específicos.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/30.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5 Pruebas textiles y decisión comercial
    
    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/32.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.bg-color-2.p-4(titulo="Gramaje o masa por unidad de área")
            p Ayuda a definir cuerpo, caída, costo, rendimiento y percepción de calidad.
          .tarjeta.bg-color-2.p-4(titulo="Ancho útil")
            p Incide en consumo de tela, rendimiento de corte y costo por producto.
          .tarjeta.bg-color-2.p-4(titulo="Solidez del color")
            p Permite recomendar usos, lavados y condiciones de exposición.
          .tarjeta.bg-color-2.p-4(titulo="Encogimiento o cambio dimensional")
            p Ayuda a prevenir alteraciones de talla o forma después del lavado.
          .tarjeta.bg-color-2.p-4(titulo="Abrasión y <em>pilling</em>")
            p Permiten estimar resistencia al desgaste y apariencia durante el uso.
          .tarjeta.bg-color-2.p-4(titulo="Resistencia al rasgado o tracción")
            p Orienta la selección de telas para productos de uso frecuente o exigente.
          .tarjeta.bg-color-2.p-4(titulo="Etiquetado de cuidado")
            p Facilita la conservación del producto y reduce riesgos por uso inadecuado. 

    p La normatividad y los métodos de ensayo fortalecen la relación entre el producto textil y las necesidades del mercado. Su adecuada interpretación permite seleccionar materiales con mayor precisión, presentar información clara al consumidor, reducir riesgos comerciales y respaldar la calidad del producto mediante criterios verificables.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
