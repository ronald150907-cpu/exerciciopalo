function calcularSalario() {

  var codigo = document.getElementById('codigo').value
  var salario = document.getElementById('salario').value

  var resultado = document.getElementById('resultado')

  if(codigo == '' || salario == '') {
    resultado.innerHTML = '<p style="color:red">preencha todos os campos!</p>'
    return
  }

  codigo = parseInt(codigo)
  salario = parseFloat(salario)

  if(isNaN(codigo) || isNaN(salario)) {
    resultado.innerHTML = '<p style="color:red">valores invalidos!</p>'
    return
  }

  var percentual = 0
  var cargo = ''

  if(codigo == 101) {
    cargo = 'Gerente'
    percentual = 10
  } else if(codigo == 102) {
    cargo = 'Engenheiro'
    percentual = 20
  } else if(codigo == 103) {
    cargo = 'Tecnico'
    percentual = 30
  } else {
    cargo = 'Cargo nao encontrado'
    percentual = 40
  }

  var aumento = salario * (percentual / 100)
  var novoSalario = salario + aumento

  aumento = aumento.toFixed(2)
  novoSalario = novoSalario.toFixed(2)

  resultado.innerHTML =
    '<p>Cargo: <strong>' + cargo + '</strong></p>' +
    '<p>Percentual de aumento: <strong>' + percentual + '%</strong></p>' +
    '<p>Salario antigo: <strong>R$ ' + salario.toFixed(2) + '</strong></p>' +
    '<p>Novo salario: <strong>R$ ' + novoSalario + '</strong></p>' +
    '<p style="color:green">Diferenca: <strong>R$ ' + aumento + '</strong></p>'

}