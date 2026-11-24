/**
 * ============================================================================
 * DATOS DEL PROYECTO: PROYECTOR EDUCATIVO INTERACTIVO
 * "¿APRENDEMOS JUGANDO?"
 * ============================================================================
 * Diseñadores: Camila Romero y Cristian Cruz - DISEÑADORES INDUSTRIALES
 * Materia: Taller y procesos de fabricación
 * 
 * INSTRUCCIONES PARA PONER TU IMAGEN / RENDER:
 * 1. Guarda tu imagen en la carpeta "assets/" (por ejemplo: assets/mi-proyecto.jpg)
 * 2. Cambia abajo el valor de 'image' por "assets/mi-proyecto.jpg"
 * ============================================================================
 */

const projectDetails = {
  id: 1,
  title: "¿Aprendemos Jugando?",
  subtitle: "Proyector Educativo Interactivo",
  authors: "Camila Romero y Cristian Cruz",
  authorsRole: "Diseñadores Industriales",
  subject: "Taller y procesos de fabricación",
  quote: "“El problema no es que los niños no quieran aprender, sino que necesitan formas más dinámicas y atractivas de hacerlo.”",
  
  // Texto destacado al abrir la imagen en el modal
  porQueElegir: {
    titulo: "¿Por qué elegir nuestro proyector educativo?",
    texto: "A diferencia de un proyector convencional, nuestro producto no se limita a mostrar imágenes o videos, sino que permite que los niños interactúen directamente con las proyecciones mediante juegos y actividades educativas. Está diseñado para niños de 4 a 7 años y combina imágenes, sonidos y movimiento para crear experiencias de aprendizaje más dinámicas y divertidas. Además, busca reducir la dependencia de celulares y tablets, estimulando la curiosidad, creatividad, coordinación y participación de los pequeños.",
    slogan: "No solo lo veas, ¡vívelo!"
  },
  
  // Imagen principal del proyecto (prototipo del proyector interactivo)
  image: "/proyector.png",
  
  shortDesc: "Un proyector educativo interactivo que combina imágenes, sonido y actividades físicas para fomentar el aprendizaje activo y reducir el uso excesivo de pantallas en niños de 4 a 7 años.",
  
  problematica: {
    resumen: "Hoy en día los niños pasan horas frente a tablets, celulares o televisores, esta luz directa provoca cansancio visual, miopía a temprana edad y problemas de atención.",
    tituloSecundario: "El uso excesivo de pantallas y la falta de actividades interactivas que estimulen el aprendizaje infantil.",
    puntos: [
      "Demasiado tiempo frente a celulares y tablets.",
      "Poca interacción física durante el aprendizaje.",
      "Actividades educativas poco dinámicas."
    ]
  },

  usuario: {
    rangoEdad: "Niños de 4 a 7 años",
    etapa: "Etapa preescolar y primeros años de primaria",
    descripcion: "Aprende mediante actividades dinámicas y atractivas que estimulan su curiosidad y creatividad. Su interacción es visual, auditiva, verbal y física, y está familiarizado con tecnologías como televisores, celulares y tablets. Se desenvuelve principalmente en casa y espacios educativos, donde realiza actividades como cuentos, reconocimiento de letras, palabras, imágenes y juegos interactivos.",
    caracteristicas: [
      "Niños de 4 a 7 años en etapa preescolar y primeros años de primaria.",
      "Aprende mediante juegos y actividades visuales, auditivas y táctiles.",
      "Usuarios que necesitan estimular su curiosidad y creatividad natural.",
      "Desarrollo de habilidades en entornos familiares y escolares."
    ]
  },

  investigacion: {
    texto: "En esta problemática quise enfocarme en niños de 4 a 7 años que se encuentran en la etapa preescolar y primeros años de primaria, quienes necesitan aprender mediante actividades dinámicas, atractivas y fáciles de comprender. Actualmente, muchos niños pasan gran parte de su tiempo utilizando celulares y tablets, por lo que diseñé un proyector educativo interactivo que busca reducir el uso de estas pantallas y fomentar el aprendizaje. A diferencia de los proyectores convencionales, mi propuesta permite que los niños interactúen directamente con las proyecciones mediante juegos, cuentos, letras, palabras y ejercicios educativos, convirtiendo el aprendizaje en una experiencia más divertida, participativa y dinámica."
  },

  propuesta: {
    concepto: "Un proyector educativo interactivo que combina imágenes, sonido y actividades físicas para fomentar el aprendizaje y reducir el uso de pantallas.",
    pilares: ["Aprendizaje", "Interacción", "Diversión", "Desarrollo Infantil"],
    proyeccion: "Proyecta cuentos, letras, palabras, imágenes y juegos educativos sobre una superficie, permitiendo una experiencia visual más dinámica.",
    interaccion: "Los niños interactúan directamente con las proyecciones mediante movimientos y actividades, participando activamente en los juegos y ejercicios.",
    sistemaFisicoDigital: [
      "Proyección de imágenes sobre cualquier superficie plana.",
      "Reproducción de audio nítido para cuentos y guía por voz.",
      "Detección de movimiento e interacción física.",
      "Actividades y juegos educativos adaptados por nivel.",
      "Selección y personalización de contenido mediante una aplicación móvil."
    ]
  },

  justificacionTecnica: {
    parrafos: [
      "El diseño integra un sistema de proyección, sensores de detección, bocinas y un sistema de control que permite mostrar actividades educativas y generar respuestas visuales y auditivas.",
      "La proyección funciona como medio principal de aprendizaje, mostrando cuentos, letras, imágenes y juegos sobre una superficie, evitando que los niños dependan directamente de una pantalla con luz emitida perjudicial para su vista.",
      "Los sensores permiten detectar los movimientos y la interacción de los niños con las actividades proyectadas, haciendo posible que participen físicamente en los juegos y reciban respuestas en tiempo real.",
      "La integración de estos componentes convierte al producto en un sistema físico-digital de aprendizaje interactivo, diseñado para estimular la curiosidad, la participación y el desarrollo de habilidades en niños de 4 a 7 años."
    ],
    componentes: [
      { nombre: "Módulo Óptico", desc: "Proyección LED de bajo brillo reflejado (protección ocular)" },
      { nombre: "Sensores Ópticos / ToF", desc: "Detección de movimiento y gestos en la superficie" },
      { nombre: "Sistema Acústico", desc: "Altavoces frontales con respuesta de voz y efectos sonoros" },
      { nombre: "Carcasa Ergonómica", desc: "Formas redondeadas, seguras y cálidas para niños" }
    ]
  }
};
