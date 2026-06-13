function calcCredito() {

  var saldo = document.getElementById('saldo').value

  var resultado = document.getElementById('resultado')

  if(saldo == '') {
    resultado.innerHTML = '<p style="color:red">preencha o campo!</p>'
    return
  }

  saldo = parseFloat(saldo)

  if(isNaN(saldo)) {
    resultado.innerHTML = '<p style="color:red">valor invalido!</p>'
    return
  }

  var percentual = 0
  var credito = 0
  var msg = ''

  if(saldo >= 0 && saldo <= 200) {
    msg = 'Nenhum credito disponivel'
    percentual = 0
    credito = 0
  } else if(saldo >= 201 && saldo <= 400) {
    msg = 'Credito liberado!'
    percentual = 20
    credito = saldo * 0.20
  } else if(saldo >= 401 && saldo <= 600) {
    msg = 'Credito liberado!'
    percentual = 30
    credito = saldo * 0.30
  } else if(saldo >= 601) {
    msg = 'Credito liberado!'
    percentual = 40
    credito = saldo * 0.40
  }

  if(credito == 0) {
    resultado.innerHTML =
      '<p>Saldo medio: <strong>R$ ' + saldo.toFixed(2) + '</strong></p>' +
      '<p style="color:red">' + msg + '</p>'
  } else {
    resultado.innerHTML =
      '<p>Saldo medio: <strong>R$ ' + saldo.toFixed(2) + '</strong></p>' +
      '<p>Percentual: <strong>' + percentual + '%</strong></p>' +
      '<p style="color:green">' + msg + ' Valor do credito: <strong>R$ ' + credito.toFixed(2) + '</strong></p>'
  }

}