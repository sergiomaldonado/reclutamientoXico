
function mostrarAspirantes() {
  let rutaAspirantes = firebase.database().ref('aspirantes/');
  rutaAspirantes.on('value', function(snapshot) {
    let aspirantes = snapshot.val();
    let row = "";

    for(aspirante in aspirantes) {

      row += '<div class="col s12">' +
               '<div class="card horizontal">' +
                 '<div class="card-image">' +
                   '<img id="foto'+aspirante+'">' +
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
      let storageRef = firebase.storage().ref('aspirantes/' + aspirante + '/foto');
      storageRef.getDownloadURL().then(function(url) {
        console.log(url);
        $('#foto'+aspirante).attr('src', url).show();
      });
    }
    $('#preloader').hide();
    $('#contenedorAspirantes').empty().append(row);
  });
}

mostrarAspirantes();
