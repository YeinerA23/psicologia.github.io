// PRIMERA PARTE


document.addEventListener("DOMContentLoaded", function () {
  const frases = [
      "EQUILIBRIO ",
      "CUIDADO ",
      "BIENESTAR ",
      "EVOLUCIÓN ",
  ];

  const fraseElemento = document.getElementById("fr");
  let indiceActual = 0;

  function cambiarFrase() {
      fraseElemento.style.opacity = 0;

      setTimeout(() => {
          fraseElemento.innerText = frases[indiceActual];
          fraseElemento.style.opacity = 1;

          indiceActual = (indiceActual + 1) % frases.length;
      }, 1000);
  }

  setInterval(cambiarFrase, 3000); // ✅ dentro del bloque
});

// CUARTA PARTE


document.addEventListener("DOMContentLoaded", function () {
  const frases = [
      "La paz comienza con una sonrisa.",
      "Hoy es un buen día para empezar de nuevo.",
      "Cada día es una nueva oportunidad.",
      "Confía en ti mismo y todo será posible.",
      "No puedes detener las olas, pero puedes aprender a surfear.",
      "Respira, todo estará bien.",
      "Eres más fuerte de lo que crees.",
      "Nunca es tarde para ser quien quieres ser.",
      "Haz lo que puedas, con lo que tengas, donde estés.",
      "Sonríe, porque la vida es bella."
  ];

  const fraseElemento = document.getElementById("frase");

  function cambiarFrase() {
      let indiceAleatorio = Math.floor(Math.random() * frases.length);
      fraseElemento.style.opacity = 0; // Efecto de desvanecimiento
      setTimeout(() => {
          fraseElemento.innerText = frases[indiceAleatorio];
          fraseElemento.style.opacity = 1; // Vuelve a aparecer
      }, 1000);
  }

  // Cambia la frase cada 5 segundos
  setInterval(cambiarFrase, 5000);
});






// secta PARTE





document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir envío tradicional
  
    // Obtener los valores
    const nombre = document.querySelector('input[placeholder="Nombre (*)"]').value;
    const telefono = document.querySelector('input[placeholder="Teléfono (*)"]').value;
    const email = document.querySelector('input[placeholder="Email (*)"]').value;
    const mensaje = document.querySelector("textarea").value;
  
    // Armar el texto para enviar por WhatsApp
    const texto = `Hola, me gustaría consultar:\n\n*Nombre:* ${nombre}\n*Teléfono:* ${telefono}\n*Email:* ${email}\n*Mensaje:* ${mensaje}`;
  
    // Número de WhatsApp (sin + ni guiones)
    const numero = "573122442181";
  
    // Armar la URL
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
    // Redirigir
    window.open(url, "_blank");
  });
  

  //sectima parte
  function calcularResultado() {
    const respuestas = [
        document.querySelector('input[name="p1"]:checked'),
        document.querySelector('input[name="p2"]:checked'),
        document.querySelector('input[name="p3"]:checked')
    ];

    if (respuestas.includes(null)) {
        alert("Por favor responde todas las preguntas.");
        return;
    }

    const puntaje = respuestas.reduce((total, actual) => total + parseInt(actual.value), 0);

    let mensaje = "";

    if (puntaje <= 4) {
        mensaje = "¡Excelente! Manejas el estrés de forma muy saludable.";
    } else if (puntaje <= 6) {
        mensaje = "Tienes un manejo moderado del estrés. Hay oportunidades de mejora.";
    } else {
        mensaje = "Parece que estás bajo mucho estrés. Considera buscar apoyo o técnicas de relajación.";
    }

    document.getElementById("resultado").textContent = mensaje;
}
