function calcVenda() {

  var preco = document.getElementById('preco').value
  var codigo = document.getElementById('codigo').value

  var resultado = document.getElementById('resultado')

  if(preco == '' || codigo == '') {
    resultado.innerHTML = '<p style="color:red">preencha todos os campos!</p>'
    return
  }

  preco = parseFloat(preco)

  if(isNaN(preco)) {
    resultado.innerHTML = '<p style="color:red">preco invalido!</p>'
    return
  }

  codigo = codigo.toUpperCase()

  var total = 0
  var parcela = 0
  var msg = ''

  if(codigo == 'A') {
    total = preco - (preco * 0.10)
    msg = 'A vista (dinheiro/cheque) com 10% de desconto'
  } else if(codigo == 'B') {
    total = preco - (preco * 0.15)
    msg = 'A vista (cartao) com 15% de desconto'
  } else if(codigo == 'C') {
    total = preco
    parcela = total / 2
    msg = 'Em 2x sem juros'
  } else if(codigo == 'D') {
    total = preco + (preco * 0.10)
    parcela = total / 2
    msg = 'Em 2x com juros de 10%'
  } else {
    resultado.innerHTML = '<p style="color:red">codigo invalido! use A, B, C ou D.</p>'
    return
  }

  var html =
    '<p>Preco original: <strong>R$ ' + preco.toFixed(2) + '</strong></p>' +
    '<p>Condicao: <strong>' + msg + '</strong></p>' +
    '<p style="color:green">Total a pagar: <strong>R$ ' + total.toFixed(2) + '</strong></p>'

  if(codigo == 'C' || codigo == 'D') {
    html += '<p>Valor de cada parcela: <strong>R$ ' + parcela.toFixed(2) + '</strong></p>'
  }

  resultado.innerHTML = html

}