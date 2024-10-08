// Função para verificar se o nome já foi armazenado no sessionStorage
function saudacao() {
  let nome = sessionStorage.getItem('nome');

  if (!nome) {
    // Se o nome não estiver no sessionStorage, solicitar ao usuário
    nome = prompt("Qual é o seu nome?");
    if (nome) {
      sessionStorage.setItem('nome', nome); // Armazenar o nome no sessionStorage
    }
  }

  // Exibir a saudação
  const saudacaoElement = document.getElementById('saudacao');
  if (nome) {
    saudacaoElement.textContent = `Olá, ${nome}! Seja bem-vindo ao meu site.`;
  }
}

// Função para adicionar animação aos elementos ao carregar a página
function animateOnLoad() {
  // Seleciona todos os elementos com a classe 'fade-in'
  const fadeInElements = document.querySelectorAll('.fade-in');

  // Aplica a classe 'active' para ativar a animação
  fadeInElements.forEach((element) => {
    element.classList.add('active');
  });
}

// Função para pré-visualizar a imagem ao passar o mouse sobre o link
function setupImagePreview() {
  const link = document.querySelector('a'); // Seleciona o link (pode adaptar para outros links se necessário)
  const imagePreview = document.querySelector('.image-preview'); // Seleciona a imagem de pré-visualização

  // Exibe a imagem no centro ao passar o mouse no link
  link.addEventListener('mouseenter', function () {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = imagePreview.offsetWidth;
    const imageHeight = imagePreview.offsetHeight;

    // Calcula a posição para centralizar a imagem
    const leftPosition = (windowWidth / 2) - (imageWidth / 2);
    const topPosition = (windowHeight / 2) - (imageHeight / 2);

    imagePreview.style.top = `${topPosition}px`;
    imagePreview.style.left = `${leftPosition}px`;
    imagePreview.style.display = 'block'; // Exibe a imagem
  });

  // Esconde a imagem quando o mouse sai do link
  link.addEventListener('mouseleave', function () {
    imagePreview.style.display = 'none'; // Oculta a imagem
  });
}

// Chamar a função de saudação, animação e pré-visualização da imagem quando a página carregar
window.onload = function() {
  saudacao();
  setTimeout(animateOnLoad, 100); // Atraso de 100ms
  setupImagePreview(); // Ativa a função de pré-visualização da imagem
};
