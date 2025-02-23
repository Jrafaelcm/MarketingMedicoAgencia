const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service'; // Asegúrate de que coincide con EmailJS
   const templateID = 'template_972y3rr'; // Usa tu Template ID real

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('¡Mensaje enviado con éxito!');
      document.getElementById("form").reset(); // Limpiar el formulario después del envío
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert("Error: " + JSON.stringify(err));
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".animar-imagen");

  images.forEach((img) => {
      img.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
      img.style.opacity = "0"; // Inicia invisible
      img.style.transform = "translateY(20px)"; // Inicia un poco más abajo

      setTimeout(() => {
          img.style.opacity = "1";
          img.style.transform = "translateY(0)";
      }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elementosAnimados = document.querySelectorAll(".animar-scroll");

  function animarEnScroll() {
      elementosAnimados.forEach((elemento) => {
          const posicion = elemento.getBoundingClientRect().top;
          const alturaPantalla = window.innerHeight / 1.2;

          if (posicion < alturaPantalla) {
              elemento.style.opacity = "1";
              elemento.style.transform = "translateY(0)";
          }
      });
  }

  window.addEventListener("scroll", animarEnScroll);

  // Inicializar animaciones al cargar la página
  elementosAnimados.forEach((elemento) => {
      elemento.style.transition = "transform 0.6s ease-out, opacity 0.6s";
      elemento.style.opacity = "0";
      elemento.style.transform = "translateY(50px)";
  });
});
