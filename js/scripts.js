function calc() {

  //pega valores inseridos, e substitui virgula por ponto
  var peso = document.getElementById('peso').value.replace(/,/g, '.');;
  var altura = document.getElementById('altura').value.replace(/,/g, '.');;

  // valida se os campos não estão vazios
  if (peso == '' || altura == '') {
    document.getElementById("message").innerHTML = 'preencha os campos';
    return false;
  }

  // calcula IMC
  var resultado = (peso / (altura * altura));
  var message = '';

  // verifica situación
  if (resultado < 17) {
    message = 'Usted esta muy por debajo de su peso';
  } else if (resultado >= 17 && resultado <= 18.49) {
    message = 'Usted esta bajo de peso';
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    message = 'Su peso es normal';
  } else if (resultado >= 25 && resultado <= 29.99) {
    message = 'Usted esta encima de su peso';
  } else if (resultado >= 30 && resultado <= 34.99) {
    message = 'Usted tiene obesidad nível I';
  } else if (resultado >= 35 && resultado <= 39.99) {
    message = 'Usted tiene ebesidad nível II';
  } else if (resultado >= 40) {
    message = 'Usted tiene obesidad nível III';
  }

  // mostra resultado
  resultado = resultado.toFixed(2).replace(/\./g, ',');
  document.getElementById("message").innerHTML = 'Su IMC es : ' + resultado + '<br>' + message;
}
