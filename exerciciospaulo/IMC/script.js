function calcTriangulo() {

  var x = document.getElementById('x').value
  var y = document.getElementById('y').value
  var z = document.getElementById('z').value

  var resultado = document.getElementById('resultado')

  if(x == '' || y == '' || z == '') {
    resultado.innerHTML = '<p style="color:red">prencha todos os campos!</p>'
    return
  }

  x = parseFloat(x)
  y = parseFloat(y)
  z = parseFloat(z)

  if(isNaN(x) || isNaN(y) || isNaN(z)) {
    resultado.innerHTML = '<p style="color:red">valores invaldos!</p>'
    return
  }

  if(x + y > z && x + z > y && y + z > x) {

    var tipo = ''

    if(x == y && y == z) {
      tipo = 'Equilatero (tres lados iguais)'
    } else if(x == y || y == z || x == z) {
      tipo = 'Isosceles (dois lados iguais)'
    } else {
      tipo = 'Escaleno (todos lados diferentes)'
    }

    resultado.innerHTML = '<p style="color:green">E um triangulo! <br> Tipo: ' + tipo + '</p>'

  } else {
    resultado.innerHTML = '<p style="color:red">Esses valores nao formam um triangulo.</p>'
  }

}