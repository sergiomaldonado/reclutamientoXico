const db = firebase.database();
const auth = firebase.auth();

function mostrarVacantes() {
  let vacantesRef = db.ref('vacantes');
  vacantesRef.on('value', function(snapshot) {
    let vacantes = snapshot.val();

    let cards = "";
    $('#loader').remove();
    for(let vacante in vacantes) {
      cards += `<div class="col s12">
                  <div class="card horizontal">
                    <div style="overflow:hidden !important;"  class="card-image">
                      <img style="max-width:200px; max-height:200px;" src="${vacantes[vacante].fotoUrl}">
                    </div>
                    <div class="card-stacked">
                      <div class="card-content">
                        <p style="padding-bottom: 5px;"><span style="background-color: #FD5200; padding: 10px; color: white; font-size: 20px; border-radius: 3px;">${vacantes[vacante].nombre}</span></p>
                        <p>Tus tareas serán apoyar el área de Contabilidad con el objetivo de clasificar, ordenar y registrar información contable. Serás una parte muy importante de la empresa, por lo que esperamos compromiso y responsabilidad.</p>
                      </div>
                      <div class="card-action">
                        <a href="vacante.html?id=${vacante}">Ver detalles</a>
                      </div>
                    </div>
                  </div>
                </div>
               `;
    }
    $('#contenedorVacantes').html(cards);
  });
}

$(document).ready(function() {
  mostrarVacantes();
});
