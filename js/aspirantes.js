
function mostrarAspirantes() {
  let rutaAspirantes = firebase.database().ref('aspirantes/');
  rutaAspirantes.on('value', function(snapshot) {
    let aspirantes = snapshot.val();
    let row = "";

    for(aspirante in aspirantes) {
      row += '<div class="col s12">' +
               '<div class="card horizontal">' +
                 '<div class="card-image">' +
                   '<img src="https://lorempixel.com/200/200/nature/6">' +
                 '</div>' +
                 '<div class="card-stacked">' +
                   '<div class="card-content">' +
                     '<h5>'+aspirantes[aspirante].nombre +' ' + aspirantes[aspirante].apellidos +'</h5>' +
                     '<p>Vacante a la que aplicó: Contador</p>' +
                   '</div>' +
                   '<div class="card-action">' +
                     '<a href="perfil-completo.html?='+aspirante+'">Ver perfil completo</a>' +
                   '</div>' +
                 '</div>' +
               '</div>' +
             '</div>';
    }

    $('#contenedorAspirantes').append(row);
  });
}

mostrarAspirantes();
