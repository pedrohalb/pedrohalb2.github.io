// script.js

window.addEventListener('DOMContentLoaded', function() {
  var saudacaoElement = document.getElementById('saudacao');
  var nome = prompt('Digite seu nome:');
  saudacaoElement.textContent = 'Olá, ' + nome + '! Bem-vindo(a) ao meu site pessoal.';
});