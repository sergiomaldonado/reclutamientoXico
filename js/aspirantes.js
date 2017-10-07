
function mostrarAspirantes() {
  let rutaAspirantes = firebase.database().ref('aspirantes/');
  rutaAspirantes.on('value', function(snapshot) {
    let aspirantes = snapshot.val();
    let row = "";

    for(aspirante in aspirantes) {
      let foto;
      if(aspirantes[aspirante].fotoUrl != "") {
        foto = '<img src="'+aspirantes[aspirante].fotoUrl+'">';
      } else {
        foto = '<img src="../img/recuadro-blanco.png">';
      }

      row += '<div class="col s12">' +
               '<div class="card horizontal">' +
                 '<div style="overflow:hidden !important; max-width: 100px !important; max-heigth: 100px !important;"  class="card-image">' +
                   foto +
                 '</div>' +
                 '<div class="card-stacked">' +
                   '<div class="card-content">' +
                     '<h5>'+aspirantes[aspirante].nombre +' ' + aspirantes[aspirante].apellidos +'</h5>' +
                     '<p>Correo electrónico: ' + aspirantes[aspirante].email +'</p>' +
                     '<p>Vacante a la que aplicó: Auxiliar contable</p>' +
                   '</div>' +
                   '<div class="card-action">' +
                     '<a href="perfil-completo.html?='+aspirante+'">Ver perfil completo</a>' +
                   '</div>' +
                 '</div>' +
               '</div>' +
             '</div>';
    }
    $('#preloader').hide();
    $('#contenedorAspirantes').empty().append(row);
  });
}

mostrarAspirantes();
