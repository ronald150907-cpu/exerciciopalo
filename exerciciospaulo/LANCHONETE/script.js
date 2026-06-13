function calcPedido() {

  var codigo = document.getElementById('codigo').value
  var quantidade = document.getElementById('quantidade').value
  var resultado = document.getElementById('resultado')

  if(codigo == '' || quantidade == '') {
    resultado.innerHTML = '<p style="color:red">preencha todos os campos!</p>'
    return
  }

  codigo = parseInt(codigo)
  quantidade = parseInt(quantidade)

  if(isNaN(codigo) || isNaN(quantidade)) {
    resultado.innerHTML = '<p style="color:red">valores invalidos!</p>'
    return
  }

  if(quantidade <= 0) {
    resultado.innerHTML = '<p style="color:red">quantidade deve ser maior que zero!</p>'
    return
  }

  var produto = ''
  var preco = 0

  if(codigo == 1) {
    produto = 'Cachorro Quente'
    preco = 11.00
  } else if(codigo == 2) {
    produto = 'Bauru'
    preco = 8.50
  } else if(codigo == 3) {
    produto = 'Misto Quente'
    preco = 8.00
  } else if(codigo == 4) {
    produto = 'Hamburger'
    preco = 9.00
  } else if(codigo == 5) {
    produto = 'Cheeseburger'
    preco = 10.00
  } else if(codigo == 6) {
    produto = 'Refrigerante'
    preco = 4.50
  } else {
    resultado.innerHTML = '<p style="color:red">codigo invalido! escolha entre 1 e 6.</p>'
    return
  }

  var total = preco * quantidade

  resultado.innerHTML =
    '<p>Produto: <strong>' + produto + '</strong></p>' +
    '<p>Preco unitario: <strong>R$ ' + preco.toFixed(2) + '</strong></p>' +
    '<p>Quantidade: <strong>' + quantidade + '</strong></p>' +
    '<p style="color:green">Total: <strong>R$ ' + total.toFixed(2) + '</strong></p>'

}