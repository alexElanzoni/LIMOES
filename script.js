function mostrarImagem(index) {
  const imagens = document.querySelectorAll(".img");
  const nome = document.querySelector(".nome-limao");

  imagens.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active");
      nome.textContent = img.dataset.nome;
    } else {
      img.classList.remove("active");
    }
  });
}

// Mostra o nome do primeiro limão ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const primeiraImg = document.querySelector(".img.active");
  const nome = document.querySelector(".nome-limao");
  if (primeiraImg) {
    nome.textContent = primeiraImg.dataset.nome;
  }
});

const container = document.querySelector('.container');
const tabsArea = document.querySelector('.tabs');

tabsArea.addEventListener('mouseenter', () => {
  container.classList.add('diminuida');
});

tabsArea.addEventListener('mouseleave', () => {
  container.classList.remove('diminuida');
});
