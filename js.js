var form = document.getElementById('invertion_form')

// Tipo: success y error
// Mensaje: Mensaje a imprimir
function emitAlert(tipo, mensaje) {
  // Emite un mensaje con los parametros enviados
  Swal.fire({
    type: tipo,
    title: 'Mensaje enviado...',
    text: mensaje,
    footer: '<a href="https://www.zurichfondos.cl/" target="_blank">¿Quieres conocer más acerca de nuestros fondos?</a>'
  })
}


// Al hacer submit del formulario
form.onsubmit = function(e) {
  // Se previene la recarga de la página
  e.preventDefault()

  // Se obtienen los valores de los dos select
  var risk_type = document.getElementById('risk_type').value
  var invertion_time = document.getElementById('invertion_time').value

  // Se evalua el riesgo  y el tiempo de inversión
  if(risk_type === 'alto' && invertion_time == "corto" ){
    emitAlert('success', "Tu fondo es el A")
  } else if(risk_type === 'alto' && invertion_time == "medio") {
    emitAlert('success', "Tu fondo es el B")
  } else if(risk_type === 'alto' && invertion_time == "largo") {
    emitAlert('success', "Tu fondo es el c")
  } else if(risk_type === 'moderado' && invertion_time == "corto") {
    emitAlert('success', "Tu fondo es el D")
  } else if(risk_type === 'moderado' && invertion_time == "medio") {
    emitAlert('success', "Tu fondo es el E")
  } else if(risk_type === 'moderado' && invertion_time == "largo") {
    emitAlert('success', "Tu fondo es el F")
  } else if(risk_type === 'bajo' && invertion_time == "corto") {
    emitAlert('success', "Tu fondo es el G")
  } else if(risk_type === 'bajo' && invertion_time == "medio") {
    emitAlert('success', "Tu fondo es el H")
  } else if(risk_type === 'bajo' && invertion_time == "largo") {
    emitAlert('success', "Tu fondo es el I")
  }

}