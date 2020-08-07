$(document).ready(
  $.ajax({
    url: `https://apipetshop.herokuapp.com/api/articulos`,
    success: function (info) {
      var data = info.response;
      miPrograma(data);
    },
  })
);
if ("#app") {



  function miPrograma(data) {
    var app = new Vue({
      el: "#app",
      data: {
        farmacia: [],
        jugueteria: [],
      },
    });
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].tipo === "Juguete") {
        app.jugueteria.push(data[i]);
      } else {
        app.farmacia.push(data[i]);
      }
    }
  }
}
if ("#contacto") {
  var boton = document.getElementById("enviar");
  var desaparecer = document.getElementById("cambio");
  var aparecer = document.getElementById("pata");


  boton.addEventListener("click", function () {
    event.preventDefault()
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var telefono = document.getElementById("telefono").value
    var mensaje = document.getElementById("msg").value
    var perro = document.getElementById("perro").value
    var gato = document.getElementById("gato").value

    if (nombre.length > 0 && apellido.length > 0 && telefono.length > 0 && mensaje.length > 0) {
      desaparecer.style.display = "none";
      aparecer.style.display = "flex";
    } else {
      swal("Faltan completar datos!", " ", "error", {
        button: "Segui completando :)",
      })
    }

  });
}