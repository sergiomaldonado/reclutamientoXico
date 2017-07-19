var primarias = [],
    secundarias = [],
    preparatorias = [],
    universidades = [],
    otros = [],
    idiomas = [],
    puestos = [],
    experiencias = [],
    otrasref = [],
    idprim = 0,
    idsec = 0,
    idprepa = 0,
    iduniv = 0,
    idotro = 0,
    ididioma = 0,
    idpuesto = 0,
    idexp = 0,
    idotraref = 0;

function borrarPrimaria(idPrim) {
  $('#primaria-'+idPrim).remove();
  primarias.splice(idPrim, 1);
  idprim--;
}

function agregarPrimaria() {
  let nombrePrimaria = $('#nombrePrimaria').val();
  let ciudadPrimaria = $('#ciudadPrimaria').val();
  let desempeñoPrimaria = $('#desempeñoPrimaria').val();
  let fechaInicioPrimaria = $('#fechaInicioPrimaria').val();
  let fechaFinPrimaria = $('#fechaFinPrimaria').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'primaria-'+idprim});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombrePrimaria+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+ciudadPrimaria+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+desempeñoPrimaria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaInicioPrimaria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaFinPrimaria+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarPrimaria("'+idprim+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let primaria = {
    nombre: nombrePrimaria,
    ciudad: ciudadPrimaria,
    desempeño: desempeñoPrimaria,
    fechaInicio: fechaInicioPrimaria,
    fechaFin: fechaFinPrimaria
  }
  primarias.push(primaria);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorPrimarias').append(li);

  idprim++;
  $('#nombrePrimaria').val('').focus();
  $('#ciudadPrimaria').val('');
  $('#desempeñoPrimaria').val('');
  $('#fechaInicioPrimaria').val('');
  $('#fechaFinPrimaria').val('');
}

function borrarSecundaria(idSec) {
  $('#secundaria-'+idSec).remove();
  secundarias.splice(idSec, 1);
  idsec--;
}

function agregarSecundaria() {
  let nombreSecundaria = $('#nombreSecundaria').val();
  let ciudadSecundaria = $('#ciudadSecundaria').val();
  let desempeñoSecundaria = $('#desempeñoSecundaria').val();
  let fechaInicioSecundaria = $('#fechaInicioSecundaria').val();
  let fechaFinSecundaria = $('#fechaFinSecundaria').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'secundaria-'+idsec});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombreSecundaria+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+ciudadSecundaria+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+desempeñoSecundaria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaInicioSecundaria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaFinSecundaria+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarSecundaria("'+idsec+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let secundaria = {
    nombre: nombrePrimaria,
    ciudad: ciudadPrimaria,
    desempeño: desempeñoPrimaria,
    fechaInicio: fechaInicioSecundaria,
    fechaFin: fechaFinSecundaria
  }
  secundarias.push(secundaria);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorSecundarias').append(li);
  idsec++;

  $('#nombreSecundaria').val('').focus();
  $('#ciudadSecundaria').val('');
  $('#desempeñoSecundaria').val('');
  $('#fechaInicioSecundaria').val('');
  $('#fechaFinSecundaria').val('');
}

function borrarPreparatoria(idPrepa){
  $('#preparatoria-'+idPrepa).remove();
  preparatorias.splice(idPrepa, 1);
  idprepa--;
}

function agregarPreparatoria() {
  let nombrePreparatoria = $('#nombrePreparatoria').val();
  let ciudadPreparatoria = $('#ciudadPreparatoria').val();
  let especialidadPreparatoria = $('#especialidadPreparatoria').val();
  let fechaInicioPreparatoria = $('#fechaInicioPreparatoria').val();
  let fechaFinPreparatoria = $('#fechaFinPreparatoria').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'preparatoria-'+idprepa});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombrePreparatoria+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+ciudadPreparatoria+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+especialidadPreparatoria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaInicioPreparatoria+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaFinPreparatoria+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarPreparatoria("'+idprepa+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let preparatoria = {
    nombre: nombrePreparatoria,
    ciudad: ciudadPreparatoria,
    especialidad: especialidadPreparatoria,
    fechaInicio: fechaInicioPreparatoria,
    fechaFin: fechaFinPreparatoria
  }
  preparatorias.push(preparatoria);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorPreparatorias').append(li);
  idprepa++;

  $('#nombrePreparatoria').val('').focus();
  $('#ciudadPreparatoria').val('');
  $('#especialidadPreparatoria').val('');
  $('#fechaInicioPreparatoria').val('');
  $('#fechaFinPreparatoria').val('');
}

function borrarUniversidad(idUniv) {
  $('#universidad-'+idUniv).remove();
  universidades.splice(idUniv, 1);
  iduniv--;
}

function agregarUniversidad() {
  let nombreUniversidad = $('#nombreUniversidad').val();
  let licenciaturaUniversidad = $('#licenciaturaUniversidad').val();
  let ciudadUniversidad = $('#ciudadUniversidad').val();
  let desempeñoUniversidad = $('#desempeñoUniversidad').val();
  let fechaInicioUniversidad = $('#fechaInicioUniversidad').val();
  let fechaFinUniversidad = $('#fechaFinUniversidad').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'universidad-'+iduniv});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombreUniversidad+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+licenciaturaUniversidad+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+ciudadUniversidad+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaInicioUniversidad+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaFinUniversidad+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+desempeñoUniversidad+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarUniversidad("'+iduniv+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let universidad = {
    nombre: nombreUniversidad,
    licenciatura: licenciaturaUniversidad,
    ciudad: ciudadUniversidad,
    desempeño: desempeñoUniversidad,
    fechaInicio: fechaInicioUniversidad,
    fechaFin: fechaFinUniversidad
  }
  universidades.push(universidad);

  a.append(i);
  divP.append(div);
  divP.append(a);
  li.append(divP);
  $('#contenedorUniversidades').append(li);

  iduniv++;

  $('#nombreUniversidad').val('').focus();
  $('#licenciaturaUniversidad').val('');
  $('#ciudadUniversidad').val('');
  $('#desempeñoUniversidad').val('');
  $('#fechaInicioUniversidad').val('');
  $('#fechaFinUniversidad').val('');
}

function borrarOtro(idOtro) {
  $('#otro-'+idOtro).remove();
  otros.splice(idOtro, 1);
  idotro--;
}

function agregarOtro() {
  let nombreOtro = $('#nombreOtro').val();
  let nombreInstitucionOtro = $('#nombreInstitucionOtro').val();
  let ciudadOtro = $('#ciudadOtro').val();
  let fechaInicioOtro = $('#fechaInicioOtro').val();
  let fechaFinOtro = $('#fechaFinOtro').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'otro-'+idotro});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombreOtro+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+nombreInstitucionOtro+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+ciudadOtro+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaInicioOtro+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaFinOtro+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarOtro("'+idotro+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let otro = {
    nombre: nombreOtro,
    nombreInstitucion: nombreInstitucionOtro,
    ciudad: ciudadOtro,
    fechaInicio: fechaInicioOtro,
    fechaFin: fechaFinOtro
  }
  otros.push(otro);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorOtros').append(li);

  idotro++;
  $('#nombreOtro').val('').focus();
  $('#nombreInstitucionOtro').val('');
  $('#ciudadOtro').val('');
  $('#fechaInicioOtro').val('');
  $('#fechaFinOtro').val('');
}

function borrarIdioma(idIdioma) {
  $('#idioma-'+idIdioma).remove();
  idiomas.splice(idIdioma, 1);
  ididioma--;
}

function agregarIdioma() {
  let nombreIdioma = $('#nombreIdioma').val();
  let gradoDominioIdioma = $('#gradoDominioIdioma').val();
  let comoAdquiristeDominioIdioma = $('#comoAdquiristeDominioIdioma').val();
  let escuelaIdioma = $('#escuelaIdioma').val();
  let numeroNivelesCursadosIdioma = $('#numeroNivelesCursadosIdioma').val();
  let periodoIdioma = $('#periodoIdioma').val();
  let documentoObtenidoIdioma = $('#documentoObtenidoIdioma').val();
  let comentariosIdioma = $('#comentariosIdioma').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'idioma-'+ididioma});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombreIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+gradoDominioIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+comoAdquiristeDominioIdioma+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+escuelaIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+numeroNivelesCursadosIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+periodoIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+documentoObtenidoIdioma+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+comentariosIdioma+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarIdioma("'+ididioma+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let idioma = {
    nombre: nombreIdioma,
    gradoDominio: gradoDominioIdioma,
    comoAdquiristeDominio: comoAdquiristeDominioIdioma,
    escuela: escuelaIdioma,
    numeroNivelesCursados: numeroNivelesCursadosIdioma,
    periodo: periodoIdioma,
    documentoObtenido: documentoObtenidoIdioma,
    comentarios: comentariosIdioma
  }
  idiomas.push(idioma);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorIdiomas').append(li);

  ididioma++;

  $('#nombreIdioma').val('').focus();
  $('#gradoDominioIdioma').val('');
  $('#comoAdquiristeDominioIdioma').val('');
  $('#escuelaIdioma').val('');
  $('#numeroNivelesCursadosIdioma').val('');
  $('#periodoIdioma').val('');
  $('#documentoObtenidoIdioma').val('');
  $('#comentariosIdioma').val('');
}

function borrarPuesto(idPuesto) {
  $('#puesto-'+idPuesto).remove();
  puestos.splice(idPuesto, 1);
  idpuesto--;
}

function agregarPuesto() {
  let nombrePuesto = $('#nombrePuesto').val();
  let fechaInicioPuesto = $('#fechaInicioPuesto').val();
  let fechaFinPuesto = $('#fechaFinPuesto').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'puesto-'+idpuesto});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombrePuesto+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaInicioPuesto+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaFinPuesto+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarPuesto("'+idpuesto+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let puesto = {
    nombre: nombrePuesto,
    fechaInicio: fechaInicioPuesto,
    fechaFin: fechaFinPuesto
  }
  puestos.push(puesto);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorPuestos').append(li);

  idpuesto++;

  $('#nombrePuesto').val('').focus();
  $('#fechaInicioPuesto').val('');
  $('#fechaFinPuesto').val('');
}

function borrarExperiencia(idExp) {
  $('#experiencia-'+idExp).remove();
  experiencias.splice(idExp, 1);
  idexp = idexp-1;
}

function agregarExperiencia() {
  let empresa = $('#empresa').val();
  let dedicaEmpresa = $('#dedicaEmpresa').val();
  let ultimoPuestoEmpresa = $('#ultimoPuestoEmpresa').val();
  let direccionEmpresa = $('#direccionEmpresa').val();
  let ciudadEmpresa = $('#ciudadEmpresa').val();
  let estadoEmpresa = $('#estadoEmpresa').val();
  let telefonoEmpresa = $('#telefonoEmpresa').val();
  let salarioInicialEmpresa = $('#salarioInicialEmpresa').val();
  let salarioFinalEmpresa = $('#salarioFinalEmpresa').val();
  let fechaInicioEmpresa = $('#fechaInicioEmpresa').val();
  let fechaFinEmpresa = $('#fechaFinEmpresa').val();
  let nombreSupervisor = $('#nombreSupervisor').val();
  let puestoSupervisor = $('#puestoSupervisor').val();
  let queDiriaTuJefe = $('#queDiriaTuJefe').val();
  let calificariaDesempeño = $('#calificariaDesempeño').val();
  let queTeGustabaMas = $('#queTeGustabaMas').val();
  let queMenosDisfrutaba = $('#queMenosDisfrutaba').val();
  let razonPrincipalDejasteTrabajo = $('#razonPrincipalDejasteTrabajo').val();
  let otraCircunstancia = $('#otraCircunstancia').val();
  let permisoVerificarReferencia;

  if( $('#permisoVerificarReferencia').prop('checked') ) {
    permisoVerificarReferencia = true;
  }else {
    permisoVerificarReferencia = false;
  }

  let li = $('<li/>', {'class': 'collection-item', 'id':'experiencia-'+idexp});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+empresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+dedicaEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+ultimoPuestoEmpresa+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+direccionEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+ciudadEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+estadoEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+telefonoEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+salarioInicialEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+salarioFinalEmpresa+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaInicioEmpresa+'</p>' +
            '</div>' +
            '<div class="col s3">' +
              '<p>'+fechaFinEmpresa+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+nombreSupervisor+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+puestoSupervisor+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+queDiriaTuJefe+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+calificariaDesempeño+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+queTeGustabaMas+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+queMenosDisfrutaba+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+razonPrincipalDejasteTrabajo+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+otraCircunstancia+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+permisoVerificarReferencia+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+salarioInicialEmpresa+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarExperiencia("'+idexp+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let experiencia = {
    empresa: empresa,
    dedica: dedicaEmpresa,
    ultimoPuesto: ultimoPuestoEmpresa,
    direccion: direccionEmpresa,
    ciudad: ciudadEmpresa,
    estado: estadoEmpresa,
    telefono: telefonoEmpresa,
    salarioInicial: salarioInicialEmpresa,
    salarioFinal: salarioFinalEmpresa,
    fechaInicio: fechaInicioEmpresa,
    fechaFin: fechaFinEmpresa,
    nombreSupervisor: nombreSupervisor,
    puestoSupervisor: puestoSupervisor,
    queDiriaTuJefe: queDiriaTuJefe,
    calificariaDesempeño: calificariaDesempeño,
    queTeGustabaMas: queTeGustabaMas,
    queMenosDisfrutaba: queMenosDisfrutaba,
    razonPrincipalDejasteTrabajo: razonPrincipalDejasteTrabajo,
    otraCircunstancia: otraCircunstancia,
    permisoVerificarReferencia: permisoVerificarReferencia,
    otrosPuestos: puestos
  }
  experiencias.push(experiencia);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorExperiencias').append(li);

  idexp++;

  $('#empresa').val('').focus();
  $('#dedicaEmpresa').val('');
  $('#ultimoPuestoEmpresa').val('');
  $('#direccionEmpresa').val('');
  $('#ciudadEmpresa').val('');
  $('#estadoEmpresa').val('');
  $('#telefonoEmpresa').val('');
  $('#salarioInicialEmpresa').val('');
  $('#salarioFinalEmpresa').val('');
  $('#fechaInicioEmpresa').val('');
  $('#fechaFinEmpresa').val('');
  $('#nombreSupervisor').val('');
  $('#puestoSupervidor').val('');
  $('#queDiriaTuJefe').val('');
  $('#calificariaDesempeño').val('');
  $('#queTeGustabaMas').val('');
  $('#queMenosDisfrutaba').val('');
  $('#razonPrincipalDejasteTrabajo').val('');
  $('#otraCircunstancia').val('');
}

function borrarReferenciaExtra(idOtraRef) {
  $('#otrasref-'+idOtraRef).remove();
  otrasref.splice(idOtraRef, 1);
  idotraref--;
}

function agregarReferenciaExtra() {
  let nombreReferenciaExtra = $('#nombreReferenciaExtra').val();
  let direccionReferenciaExtra = $('#direccionReferenciaExtra').val();
  let telefonoReferenciaExtra = $('#telefonoReferenciaExtra').val();
  let relacionReferenciaExtra = $('#relacionReferenciaExtra').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'otrasref-'+idotraref});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+nombreReferenciaExtra+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+direccionReferenciaExtra+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+telefonoReferenciaExtra+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+relacionReferenciaExtra+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarReferenciaExtra("'+idotraref+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let otraref = {
    nombre: nombreReferenciaExtra,
    direccion: direccionReferenciaExtra,
    telefono: telefonoReferenciaExtra,
    relacion: relacionReferenciaExtra
  }
  otrasref.push(otraref);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorReferenciasExtra').append(li);

  idotraref++;

  $('#nombreReferenciaExtra').val('').focus();
  $('#direccionReferenciaExtra').val('');
  $('#telefonoReferenciaExtra').val('');
  $('#relacionReferenciaExtra').val('');
}

$('#foto').change(function(e) {
  let tgt = e.target || window.e.srcElement, archivo = tgt.files;

  if(FileReader && archivo && archivo.length) {
    let fr = new FileReader();
    fr.onload = function() {
      $('#fotoAspirante').attr('src', fr.result);
    }
    fr.readAsDataURL(archivo[0]);
  }
  else {

  }
});

$(document).ready(function(){
  //$('.modal').modal();
  $('#sexo').material_select();
  $('#calificariaDesempeño').material_select();
  $('#razonPrincipalDejasteTrabajo').material_select();
  $('#fue').material_select();
  $('.collapsible').collapsible();
  $('.modal').modal();
});

function aplicar() {
  let nombre = $('#nombre').val();
  let apellidos = $('#apellidos').val();
  let lugarNacimiento = $('#lugarNacimiento').val();
  let edad = $('#edad').val();
  let sexo = $('#sexo').val();
  let nacionalidad = $('#nacionalidad').val();
  let rfc = $('#rfc').val();
  let curp = $('#curp').val();
  let email = $('#email').val();
  let telefono = $('#telefono').val();
  let celular = $('#celular').val();
  let direccion = $('#direccion').val();
  let estadocivil = $('#estadocivil').val();
  let numhijos = $('#numhijos').val();
  let edadeshijos = $('#numhijos').val();
  let facebook = $('#facebook').val();
  let nombreConyuge = $('#nombreConyuge').val();
  let ocupacionConyuge = $('#ocupacionConyuge').val();
  let nombrePadre = $('#nombrePadre').val();
  let ocupacionPadre = $('#ocupacionPadre').val();
  let nombreMadre = $('#nombreMadre').val();
  let ocupacionMadre = $('#ocupacionMadre').val();
  let CuantoQuieresGanar = $('#CuantoQuieresGanar').val();

  let breveResumenCarrera = $('#breveResumenCarrera').val();
  let ComoTeVes = $('#ComoTeVes').val();
  let EnQueCreesDestacar = $('#EnQueCreesDestacar').val();
  let EnQueNoEresBueno = $('#EnQueNoEresBueno').val();
  let RazonesRenunciar = $('#RazonesRenunciar').val();
  let NombraNombreApellidosEmpresa = $('#NombraNombreApellidosEmpresa').val();
  let PorQueBuscasTrabajo = $('#PorQueBuscasTrabajo').val();
  let ComoHasConocido = $('#ComoHasConocido').val();
  let ValorDiferencialXico = $('#ValorDiferencialXico').val();
  let EstasFamiliarizado = $('#EstasFamiliarizado').val();
  let SiPudieseCrearTuPuesto = $('#SiPudieseCrearTuPuesto').val();
  let DescribeLoQueHaces = $('#DescribeLoQueHaces').val();
  let DescribeMayorLogro = $('#DescribeMayorLogro').val();
  let ErrorMasGrande = $('#ErrorMasGrande').val();
  let VivesZonaHoraria = $('#VivesZonaHoraria').val();

  let aspirantes = firebase.database().ref('aspirantes/');
  let datosAspirante = {
    nombre: nombre,
    apellidos: apellidos,
    lugarNacimiento: lugarNacimiento,
    edad: edad,
    sexo: sexo,
    nacionalidad: nacionalidad,
    rfc: rfc,
    curp: curp,
    email: email,
    telefono: telefono,
    celular: celular,
    direccion: direccion,
    estadocivil: estadocivil,
    numhijos: numhijos,
    edadeshijos: edadeshijos,
    facebook: facebook,
    nombreConyuge: nombreConyuge,
    ocupacionConyuge: ocupacionConyuge,
    nombrePadre: nombrePadre,
    ocupacionPadre: ocupacionPadre,
    nombreMadre: nombreMadre,
    ocupacionMadre: ocupacionMadre,
    cuantoQuieresGanar: CuantoQuieresGanar,
    educacion: {
      primaria: primarias,
      scundaria: secundarias,
      preparatoria: preparatorias,
      universidad: universidades,
      otrosEstudios: otros,
      idiomas: idiomas
    },
    historialTrabajo: {
      experienciaLaboral: experiencias,
      refextras: otrasref
    },
    resumen: {
      1: breveResumenCarrera,
      2: ComoTeVes,
      3: EnQueCreesDestacar,
      4: EnQueNoEresBueno,
      5: RazonesRenunciar,
      6: NombraNombreApellidosEmpresa,
      7: PorQueBuscasTrabajo,
      8: ComoHasConocido,
      9: ValorDiferencialXico,
      10: EstasFamiliarizado,
      11: SiPudieseCrearTuPuesto,
      12: DescribeLoQueHaces,
      13: DescribeMayorLogro,
      14: ErrorMasGrande,
      15: VivesZonaHoraria
    }
  };
  let key = aspirantes.push(datosAspirante).getKey();

  let foto = $('#foto')[0].files[0];
  let archivo = $('#curriculum')[0].files[0];
  let storageRef = firebase.storage().ref('aspirantes'+'/'+key);
  storageRef.child('curriculum').put(archivo);
  storageRef.child('foto').put(foto);


  $('#nombre').val('').focus();
  $('#apellidos').val('');
  $('#lugarNacimiento').val('');
  $('#edad').val('');
  $('#sexo').val('');
  $('#nacionalidad').val('');
  $('#rfc').val('');
  $('#curp').val('');
  $('#email').val('');
  $('#telefono').val('');
  $('#celular').val('');
  $('#direccion').val('');
  $('#estadocivil').val('');
  $('#numhijos').val('');
  $('#numhijos').val('');
  $('#facebook').val('');
  $('#nombreConyuge').val('');
  $('#ocupacionConyuge').val('');
  $('#nombrePadre').val('');
  $('#ocupacionPadre').val('');
  $('#nombreMadre').val('');
  $('#ocupacionMadre').val('');
  $('#CuantoQuieresGanar').val('');
  $('#breveResumenCarrera').val('');
  $('#ComoTeVes').val('');
  $('#EnQueCreesDestacar').val('');
  $('#EnQueNoEresBueno').val('');
  $('#RazonesRenunciar').val('');
  $('#NombraNombreApellidosEmpresa').val('');
  $('#PorQueBuscasTrabajo').val('');
  $('#ComoHasConocido').val('');
  $('#ValorDiferencialXico').val('');
  $('#EstasFamiliarizado').val('');
  $('#SiPudieseCrearTuPuesto').val('');
  $('#DescribeLoQueHaces').val('');
  $('#DescribeMayorLogro').val('');
  $('#ErrorMasGrande').val('');
  $('#VivesZonaHoraria').val('');

  $('#modalFinal').modal('open');
}

function enviarOpinion() {
  let breve = $('#breve').val();
  if(breve.length > 0) {
    let opinionesProcesoReclutamiento = firebase.database().ref('opinionesProcesoReclutamiento/');
    opinionesProcesoReclutamiento.push(breve);
  }
}
