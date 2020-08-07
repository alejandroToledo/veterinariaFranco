$(document).ready(
  $.ajax({
    url: `https://apipetshop.herokuapp.com/api/articulos`,
    success: function (info) {
      var data = info.response;
      miPrograma(data);
    },
  })
);

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
var boton = document.getElementById("enviar");
var desaparecer = document.getElementById("cambio");
var aparecer = document.getElementById("pata");

console.log(boton);
boton.addEventListener("click", function () {
  desaparecer.style.display = "none";
  aparecer.style.display = "flex";
});
