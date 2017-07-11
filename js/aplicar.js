var experiencias = [];
var estudios = [];
var idexp = 0;
var idest = 0;

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

function borrarEstudio(idEst) {
  $('#estudio-'+idEst).remove();
  estudios.splice(idEst, 1);
  idest = idest-1;
}

function agregarEstudio() {
  let escuela = $('#escuela').val();
  let areaEstudio = $('#areaEstudio').val();
  let resumen = $('#resumen').val();

  let li = $('<li/>', {'class': 'collection-item', 'id':'estudio-'+idest});
  let divP = $('<div/>');
  let div = '<div class="col s6">' +
              '<p>'+escuela+'</p>' +
            '</div>' +
            '<div class=" col s6">' +
              '<p>'+areaEstudio+'</p>' +
            '</div>' +
            '<div class="col s12">' +
              '<p>'+resumen+'</p>' +
            '</div>';
  let a = $('<a/>', {'onclick': 'borrarExperiencia("'+idest+'")'});
  let i = $('<i/>', {'class': 'material-icons', 'html': 'close'});

  let estudio = {
    escuela: escuela,
    areaEstudio: areaEstudio,
    resumen: resumen
  }
  estudios.push(estudio);

  a.append(i);
  divP.append(div).append(a);
  li.append(divP);
  $('#contenedorEstudios').append(li);

  idest++;
}

/*$(document).ready(function(){
  $('.modal').modal();
});*/

function aplicar() {
  let nombre = $('#nombre').val();
  let apellidos = $('#apellidos').val();
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
