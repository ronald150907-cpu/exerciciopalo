function calcImposto() {

  var ano = document.getElementById('ano').value
  var valor = document.getElementById('valor').value

  var resultado = document.getElementById('resultado')

  if(ano == '' || valor == '') {
    resultado.innerHTML = '<p style="color:red">preencha todos os campos!</p>'
    return
  }

  ano = parseInt(ano)
  valor = parseFloat(valor)

  if(isNaN(ano) || isNaN(valor)) {
    resultado.innerHTML = '<p style="color:red">valores invalidos!</p>'
    return
  }

  var taxa = 0
  var imposto = 0

  if(ano < 1990) {
    taxa = 1
    imposto = valor * 0.01
  } else {
    taxa = 1.5
    imposto = valor * 0.015
  }

  imposto = imposto.toFixed(2)

  resultado.innerHTML = 
    '<p>Ano: <strong>' + ano + '</strong></p>' +
    '<p>Valor do carro: <strong>R$ ' + valor.toFixed(2) + '</strong></p>' +
    '<p>Taxa aplicada: <strong>' + taxa + '%</strong></p>' +
    '<p style="color:green">Imposto a pagar: <strong>R$ ' + imposto + '</strong></p>'

}