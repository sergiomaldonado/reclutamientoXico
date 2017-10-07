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
  mostrarFormulario();
});

function mostrarFormulario() {
  var id = getQueryVariable('id');
  var $contenedorVacante = $('#contenedorVacante');

  if(id == 'auxiliar_contable') {
    let el = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwkJJL69nkvicjA-YNYhsUggPIyZiaJebXWObCP2RGVtQFcQ/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`;
    $('#loader').remove();
    $contenedorVacante.append(el);
  }
  if(id == 'promotor') {
    let el = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVT6aAGb-61mjCq3PWTprUXGcMDPld4x3x3nR2wtTHMSGICg/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`;
    $('#loader').remove();
    $contenedorVacante.append(el);
  }
  if(id == 'capturista') {
    let el = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdk4EaCsbycERzLPdnBPXsTA4ziR7weAJPbrmvP8uw3OgCg7w/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`;
    $('#loader').remove();
    $contenedorVacante.append(el);
  }
}
