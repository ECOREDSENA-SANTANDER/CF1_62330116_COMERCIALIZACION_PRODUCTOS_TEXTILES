<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Textiles en el sector de la confección',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la apropiación de conceptos técnicos relacionados con fibras, hilos, textiles, acabados, calidad, normatividad y criterios comerciales del producto textil.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite reconocer el estudio técnico de los textiles en el sector de la confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La relación entre fibra, hilo, tela, uso y mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La sustitución del control técnico por criterios visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La elección de prendas sin revisar composición declarada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de fichas técnicas en procesos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál aspecto técnico incide directamente en precio, percepción de calidad y argumento de venta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre comercial asignado por cada vendedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación temporal del producto en bodega.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El origen de la fibra utilizada en el textil.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de vitrinas disponibles en tienda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se clasifican principalmente las fibras textiles según su origen?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En fibras pesadas, livianas, brillantes y opacas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En naturales, artificiales y sintéticas según procedencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'En rígidas, elásticas, estampadas y transparentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En comerciales, decorativas, funcionales y promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué diferencia técnica existe entre una fibra artificial y una fibra sintética?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La artificial siempre procede de animales y minerales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La sintética se obtiene únicamente de fibras vegetales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La artificial no requiere transformación industrial química.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La artificial transforma materias naturales y la sintética polímeros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Para qué sirve la identificación de fibras textiles en procesos comerciales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para anticipar comportamiento, cuidados y aplicación del material.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar la etiqueta por una descripción subjetiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para vender cualquier tela sin verificar su composición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para descartar fichas técnicas del proveedor textil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué fuente ofrece información inicial sobre composición, cuidado y datos básicos del producto?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La sensación táctil percibida durante la venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La observación informal del brillo superficial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La opinión general del comprador externo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La revisión de etiqueta y ficha del producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumple el hilo dentro de la elaboración de superficies y productos textiles?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define únicamente el color final del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye todas las pruebas de calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite tejer, coser, bordar o construir superficies.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de conocer fibras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué factor debe considerarse al seleccionar un hilo para confección?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el color más visible en exhibición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Correspondencia con material, aguja, máquina y puntada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La tendencia digital sin considerar el textil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El precio menor sin revisar resistencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué significa caracterizar un textil en un contexto técnico y comercial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignarle un nombre llamativo para venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionarlo únicamente por color disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Describirlo solo mediante su precio final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Describir propiedades físicas, técnicas y funcionales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué propiedad textil relaciona el peso por unidad de área con caída, grosor y resistencia?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gramaje del material textil.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Origen comercial del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Etiqueta temporal del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color dominante de temporada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué propiedad permite seleccionar textiles para prendas ajustadas, deportivas o de movimiento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La opacidad del empaque comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación del rollo en bodega.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La elasticidad y recuperación del material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de etiquetas no permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué son los acabados textiles dentro del proceso de valorización del material?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Defectos inevitables generados durante la fabricación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procesos que modifican o mejoran propiedades del textil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registros que reemplazan la información de composición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Etiquetas usadas solo para identificar proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál ejemplo corresponde a un acabado funcional aplicado a textiles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio de nombre comercial sin modificar propiedades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicación del textil en una vitrina principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ordenamiento del inventario por referencia externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repelencia al agua para prendas exteriores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuándo se construye valor agregado en un producto textil?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando una propiedad técnica se traduce en beneficio comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando se omite explicar el desempeño del material.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando el precio sustituye la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando la tendencia reemplaza toda verificación técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué verifica la calidad de conformidad en productos textiles?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La popularidad visual del color en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de personas interesadas en comprar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cumplimiento de ficha técnica, muestra o requisito.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El estilo creativo seleccionado por el vendedor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué aspecto se controla al revisar la solidez del color en una tela?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La resistencia del hilo frente al rasgado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El peso real del textil por metro cuadrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La elasticidad recuperada después del uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La resistencia del color ante lavado, frote o luz.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la diferencia central entre norma técnica y reglamento técnico?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La norma técnica es obligatoria en todo mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El reglamento técnico establece requisitos obligatorios aplicables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La norma elimina ensayos y requisitos documentales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El reglamento reemplaza completamente fichas técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué información mínima debe contener la etiqueta de una confección según el enfoque normativo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Composición, cuidados, responsable, talla y país de origen.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicidad, descuento, temporada, vitrina y tendencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color de campaña, redes sociales y fotografía final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Referencia interna, bodega, vendedor y promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Por qué las tendencias de moda influyen en la comercialización de textiles?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque eliminan la necesidad de evaluar calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reemplazan la composición y el etiquetado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque orientan colores, texturas, acabados y consumo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque impiden comparar materiales entre proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué criterio relaciona directamente el producto textil con una necesidad concreta del cliente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ubicación del proveedor en el directorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El uso final previsto para el material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de catálogos impresos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nombre creativo de la colección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>