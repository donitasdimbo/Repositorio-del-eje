var hydra = new Hydra({
    canvas: document.getElementById("odisea01"),
    detectAudio: false
  })


  // link de catbox al video original
  
  //link del video para pasar por hydra
  s0.initVideo('https://files.catbox.moe/qwe77f.mp4')

  //los efectos de hydra que se aplican al video
 
  osc(10,0.1,1.5).color(0.6,0,0.8).thresh(0.1,0).modulate(src(s0),0.5).out(o1)
  
  src(o0).saturate(1.5)
  .modulate(osc(5,0,1.5)
  .brightness(1.2)
  .modulate(noise(2.5)
  .sub(gradient()),1),0.050)
  .layer(
  src(s0).mask(o1))
  .scrollX(0.05, 0.02)
  .luma(0.2).out(o0)


    //para la desplegacion del panel

    function togglePanel() {
      const panel = document.getElementById("panel");
      if (panel.style.right === "0px") {
          panel.style.right = "-250px"; // Ocultar el panel
      } else {
          panel.style.right = "0px"; // Mostrar el panel
      }
    }
  
  //para los mensajes aleatorios de las zonas seleccionadad

  const mensajes =[
    "Ya es tarde ",
    "Hace demasiado calor",
    "Ojala pase el camion",
    "Espero que no vaya lleno el camion",
    "El sol esta muy fuerte",
    "Hay mucha gente",
    "El semaforo esta en rojo", 
    "Esta tardando en cambiar el semaforo",
    "Ya es hora pico",
    "Estara el señor de las flores",
    "Tengo que avanzarle al eje",
    "Que lecturas debo de leer para mañana",
    "Tengo hambre",
    "Todavia tendre agua en la botella",
    "Tengo la boca seca",
    "Ese es el sonido del tren",
    "El tren va a pasar"

  ]

  function obtenerMensajeAleatorio() {
      const indice = Math.floor(Math.random() * mensajes.length);
      return mensajes[indice];
  }

    function mostrarPopup(event) {
      const mensaje = obtenerMensajeAleatorio();
      let popup = document.getElementById("popup");
      popup.innerText = mensaje;
      popup.style.left = event.clientX + "px";
      popup.style.top = event.clientY + "px";
      popup.style.display = "block";
  
      setTimeout(() => {
          popup.style.display = "none";
      }, 2000); // Se oculta después de 2 segundos
  }
  
//codigo para la aletoriedad de las paginas 

// Lista de páginas a las que puede redirigir
const paginas = [
  "../Odisea2/odisea2.html", // Página 1
  "../Odisea3/odisea3.html" // Página 2
];

// Selecciona el enlace por su ID
const enlaceRegreso = document.getElementById("regreso");

// Función para asignar un enlace aleatorio
function asignarEnlaceAleatorio() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  enlaceRegreso.setAttribute("href", paginaAleatoria);
}

// Llama a la función al cargar la página
asignarEnlaceAleatorio();