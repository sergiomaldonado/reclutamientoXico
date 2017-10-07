const db = firebase.database();
const auth = firebase.auth();

function mostrarDatosVacante() {
  let idVacante = getQueryVariable('id');
  let vacantesRef = db.ref('vacantes/'+idVacante);
  vacantesRef.on('value', function(snapshot) {
    let vacante = snapshot.val();
    let caracteristicas = vacante.caracteristicas,
        caracteristicasPuesto = vacante.caracteristicasPuesto,
        tareas = vacante.tareas,
        nivelMental = vacante.competencias.nivelMental,
        nivelTecnico = vacante.competencias.nivelTecnico,
        nivelTrabajo = vacante.competencias.nivelTrabajo,
        nombre = vacante.nombre,
        url = vacante.url,
        valoramos = vacante.valoramos;

    let tareasHtml = "";
    for(let tarea in tareas) {
      tareasHtml += `<p>${tareas[tarea]}</p>`;
    }

    let caracteristicasHtml = "";
    for(let caracteristica in caracteristicas) {
      caracteristicasHtml += `<li class="collection-item">${caracteristicas[caracteristica]}</li>`;
    }

    let competenciasMentalHtml = "";
    for(let i in nivelMental) {
      competenciasMentalHtml += `<li class="collection-item">${nivelMental[i]}</li>`;
    }

    let competenciasTecnicoHtml = "";
    for(let i in nivelTecnico) {
      competenciasTecnicoHtml += `<li class="collection-item">${nivelTecnico[i]}</li>`;
    }

    let competenciasTrabajoHtml = "";
    for(let i in nivelTrabajo) {
      competenciasTrabajoHtml += `<li class="collection-item">${nivelTrabajo[i]}</li>`;
    }

    let valoramosHtml = "";
    for(let i in valoramos) {
      valoramosHtml += `<li class="collection-item">${valoramos[i]}</li>`;
    }

    let caracteristicasPuestoHtml = "";
    for(let i in caracteristicasPuesto) {
      caracteristicasPuestoHtml += `<li class="collection-item">${caracteristicasPuesto[i]}</li>`;
    }

    let html = `<div class="section">
                  <h3 id="titulosBacante" class="white-text center">Puesto:
                    Auxiliar contable
                  </h3>
                  <!--   Icon Section   -->
                  <div class="row center" style="color:#757575;">
                    <div class="col s2"></div>
                    <div class="col s8 left-align">
                      <p>Tus tareas serán:</p>
                      ${tareasHtml}
                      <ul class="collection left-align with-header">
                        <li class="collection-header center-align"><h5>CARACTERÍSTICAS</h5></li>
                        ${caracteristicasHtml}
                      </ul>
                      <ul class="collection left-align with-header">
                        <li class="collection-header center-align"><h5>COMPETENCIA y HABILIDADES REQUERIDAS:</h5></li>
                        <li class="collection-header center-align"><h5>A nivel mental, buscamos a alguien:</h5></li>
                        ${competenciasMentalHtml}
                        ${competenciasTecnicoHtml}
                        <li class="collection-header center-align"><h5>A nivel del modo de trabajo:</h5></li>
                        ${competenciasTrabajoHtml}
                      </ul>
                      <ul class="collection left-align with-header">
                        <li class="collection-header center-align"><h5>VALORAMOS TAMBIÉN</h5></li>
                        ${valoramosHtml}
                      </ul>
                      <ul class="collection left-align with-header">
                        <li class="collection-header center-align"><h5>CARACTERÍSTICAS DEL PUESTO DE TRABAJO:</h5></li>
                        ${caracteristicasPuestoHtml}
                      </ul>
                      <ul class="collection left-align with-header">
                        <li class="collection-header center-align"><h5>  BENEFICIOS:</h5></li>
                        <li class="collection-item">Vas a aprender mucho y muy rápido.</li>
                        <li class="collection-item">Tenemos prestaciones superiores a la ley.</li>
                        <li class="collection-item">Crecimiento continuo y superación.</li>
                        <li class="collection-item">Altas posibilidades de ascenso.</li>
                      </ul>
                      <ul class="collection left-align with-header avatar">
                        <li class="collection-header center-align"><h5>PROCESO DE SELECCIÓN:</h5></li>
                        <li class="collection-item"> <h5>Paso 1</h5>CANDIDATURA: Envía tu candidatura para el puesto de trabajo, introduce tus datos personales y responde a las preguntas que te hacemos, respetando al pie de la letra las instrucciones que te damos. podrás ver el enlace en la parte de abajo.</li>
                        <li class="collection-item"><h5>Paso 2</h5>COMPETENCIAS: Si estás seleccionado, te invitaremos a responder un cuestionario de competencias y ejercicios prácticos. No te robará más de una hora de tu tiempo.</li>
                        <li class="collection-item"><h5>Paso 3</h5>ENTREVISTA: Los candidatos que pasen el corte serán invitados a una entrevista en Productos Alimenticios Xico, S.A. de C.V. en Carretera Y Griega Xicoténcatl km 2 en Gómez Farías, Tamaulipas.</li>
                        <li class="collection-item"><h5>Paso 4</h5>REFERENCIAS: Verificaremos las referencias laborales y personales que nos proporciones, llamando a personas que han trabajado contigo y que te conocen de antes.</li>
                        <li class="collection-item"><h5>Paso 5</h5>Recibirás una llamada, para informarte de los resultados de la entrevista.</li>
                        <li class="collection-item"><h5>Paso 6</h5>Seleccionaremos al candidato ideal. Firma del contrato.</li>
                      </ul>
                      <a class="waves-effect waves-light btn-large aling-center indigo darken-4" href="aplicar.html?=auxiliar_contable" style="width:100%;"><h5>Aplicar</h5></a>
                      <p class="center">Aviso importante: Abstenerse personas que vivan fuera de la zona. </p>
                    </div>
                  </div>
                </div>
               `;

    $('#loader').remove();
    $('#contenedorVacante').html(html);
  });
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

$(document).ready(function() {
  mostrarDatosVacante();
});
