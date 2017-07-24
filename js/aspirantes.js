
function mostrarAspirantes() {
  let rutaAspirantes = firebase.database().ref('aspirantes/');
  rutaAspirantes.on('value', function(snapshot) {
    let aspirantes = snapshot.val();
    let row = "";

    for(aspirante in aspirantes) {

      row += '<div class="col s12">' +
               '<div class="card horizontal">' +
                 '<div style="overflow:hidden !important; max-width: 100px !important; max-heigth: 100px !important;"  class="card-image">' +
                    '<img id="foto'+aspirante+'" style="display:none;">'+
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

      /*let storageRef = firebase.storage().ref('aspirantes/'+aspirante+'/foto');
      storageRef.getDownloadURL().then(function(url) {
        $('#foto'+aspirante).attr('src', url).show();
      });*/
    }
    $('#preloader').hide();
    $('#contenedorAspirantes').empty().append(row);
  });
}

mostrarAspirantes();
