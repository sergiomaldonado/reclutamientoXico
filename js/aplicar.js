var experiencias = [];
var primarias = [];
var secundarias = [];
var preparatorias = [];
var universidades = [];
var idiomas = [];
var otros = [];
var idexp = 0;
var idprim = 0;
var idsec = 0;
var idprepa = 0;
var iduniv = 0;
var idotro = 0;
var ididioma = 0;

function borrarExperiencia(idExp) {
  $('#experiencia-'+idExp).remove();
  experiencias.splice(idExp, 1);
  idexp = idexp-1;
}

function agregarExperiencia() {
  let empresa = $('#empresa').val();
  let titulo = $('#titulo').val();
  let descripcion = $('#descripcion').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'experiencia-'+idexp});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+empresa+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+titulo+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+descripcion+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarExperiencia("'+idexp+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let experiencia = {
    empresa: empresa,
    titulo: titulo,
    descripcion: descripcion
  }
  experiencias.push(experiencia);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorHistorial').append(li);

  idexp++;
}

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
    fechaInicio: fechaInicioSePreparatoria,
    fechaFin: fechaFinSePreparatoria
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
            '<div class="col s12">' +
              '<p>'+desempeñoUniversidad+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaInicioUniversidad+'</p>' +
            '</div>' +
            '<div class="col s6">' +
              '<p>'+fechaFinUniversidad+'</p>' +
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
  divP.append(div).append(a);
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
            '<div class="col s6">' +
              '<p>'+fechaInicioOtro+'</p>' +
            '</div>' +
            '<div class="col s6">' +
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

function agregarIdioma() {
  let nombreIdioma = $('#nombreIdioma').val();
  let gradoDominioIdioma = $('#gradoDominioIdioma').val();
  let comoAdquiristeDominioIdioma = $('#comoAdquiristeDominioIdioma').val();
  let escuelaIdioma = $('#escuelaIdioma').val();
  let numeroNivelesCursadosIdioma = $('#numeroNivelesCursadosIdioma').val();
  let periodoIdioma = $('#periodoIdioma').val();
  let documentoObtenidoIdioma = $('#documentoObtenidoIdioma').val();
  let comentariosIdioma = $('#comentariosIdioma').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'otro-'+ididioma});
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
  let a = $('<a/>', {'onclick': 'borrarOtro("'+ididioma+'")'});
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

  ididoma++;

  $('#nombreIdioma').val('').focus();
  $('#gradoDominioIdioma').val('');
  $('#comoAdquiristeDominioIdioma').val('');
  $('#escuelaIdioma').val('');
  $('#numeroNivelesCursadosIdioma').val('');
  $('#periodoIdioma').val('');
  $('#documentoObtenidoIdioma').val('');
  $('#comentariosIdioma').val('');
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
  $('.collapsible').collapsible();
});

function aplicar() {
  let nombre = $('#nombre').val();
  let apellidos = $('#apellidos').val();
  let lugarNacimiento = $('#lugarNacimiento').val();
  let edad = $('#edad').val();
  let sexo = $('#sexo').val();
  let email = $('#email').val();
  let telefono = $('#telefono').val();

  let breveResumenCarrera = $('#breveResumenCarrera').val();
  let ComoTeVes = $('#ComoTeVes').val();
  let EnQueCreesDestacar = $('#EnQueCreesDestacar').val();
  let EnQueNoEresBueno = $('#EnQueNoEresBueno').val();
  let NombraNombreApellidosEmpresa = $('#NombraNombreApellidosEmpresa').val();
  let PorQueBuscasTrabajo = $('#PorQueBuscasTrabajo').val();
  let ComoHasConocido = $('#ComoHasConocido').val();
  let ValorDiferencialXico = $('#ValorDiferencialXico').val();
  let EstasFamiliarizado = $('#EstasFamiliarizado').val();
  let SiPudieseCrearTuPuesto = $('#SiPudieseCrearTuPuesto').val();
  let DescribeLoQueHaces = $('#DescribeLoQueHaces').val();
  let DescribeMayorLogro = $('#DescribeMayorLogro').val();
  let ErrorMasGrande = $('#ErrorMasGrande').val();
  let CuantoQuieresGanar = $('#CuantoQuieresGanar').val();

  let aspirantes = firebase.database().ref('aspirantes/');
  let datosAspirante = {
    nombre: nombre,
    apellidos: apellidos,
    email: email,
    telefono: telefono,
    expericiencias: experiencias,
    estudios: estudios,
    cuestionario: {
      1: breveResumenCarrera,
      2: ComoTeVes,
      3: EnQueCreesDestacar,
      4: EnQueNoEresBueno,
      5: NombraNombreApellidosEmpresa,
      6: PorQueBuscasTrabajo,
      7: ComoHasConocido,
      8: ValorDiferencialXico,
      9: EstasFamiliarizado,
      10: SiPudieseCrearTuPuesto,
      11: DescribeLoQueHaces,
      12: DescribeMayorLogro,
      13: ErrorMasGrande,
      14: CuantoQuieresGanar
    }
  };
  let key = aspirantes.push(datosAspirante).getKey();

  let archivo = $('#curriculum')[0].files[0];
  let storageRef = firebase.storage().ref('aspirantes'+'/'+key);
  storageRef.child('curriculum').put(archivo);
}
