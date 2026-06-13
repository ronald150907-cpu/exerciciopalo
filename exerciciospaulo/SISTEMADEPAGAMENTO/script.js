function calcSalario() {

  var nivel = document.getElementById('nivel').value
  var horas = document.getElementById('horas').value

  var resultado = document.getElementById('resultado')

  if(nivel == '' || horas == '') {
    resultado.innerHTML = '<p style="color:red">prencha todos os campos!</p>'
    return
  }

  nivel = parseInt(nivel)
  horas = parseInt(horas)

  if(isNaN(nivel) || isNaN(horas)) {
    resultado.innerHTML = '<p style="color:red">valores invaldos!</p>'
    return
  }

  if(horas <= 0) {
    resultado.innerHTML = '<p style="color:red">a quantidade de horas deve ser maior que zero!</p>'
    return
  }

  var valorHora = 0
  var nomNivel = ''

  if(nivel == 1) {
    valorHora = 12.00
    nomNivel = 'Nivel 1'
  } else if(nivel == 2) {
    valorHora = 17.00
    nomNivel = 'Nivel 2'
  } else if(nivel == 3) {
    valorHora = 25.00
    nomNivel = 'Nivel 3'
  } else {
    resultado.innerHTML = '<p style="color:red">nivel invalido! escolha 1, 2 ou 3.</p>'
    return
  }

  var salario = valorHora * horas * 4.5

  resultado.innerHTML =
    '<p>Profesor: <strong>' + nomNivel + '</strong></p>' +
    '<p>Valor hora/aula: <strong>R$ ' + valorHora.toFixed(2) + '</strong></p>' +
    '<p>Horas na semana: <strong>' + horas + '</strong></p>' +
    '<p style="color:green">Salario mensal: <strong>R$ ' + salario.toFixed(2) + '</strong></p>'

}