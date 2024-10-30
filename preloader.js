// Cria o overlay para o preloader
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #310634; /* Fundo ajustado para #310634 */
    z-index: 999;
`;

// Cria o contêiner para o Lottie
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 150px;
    height: 150px;
`;

// Cria o texto de carregamento
const loadingText = document.createElement('p');
loadingText.innerText = 'Carregando...';
loadingText.style.cssText = `
    font-size: 12px;
    color: #ffffff;
    font-family: 'Arial Rounded', Arial, sans-serif; /* Fonte Arial Rounded */
    margin-top: 20px;
`;

// Adiciona o contêiner Lottie e o texto ao overlay
overlay.appendChild(lottieContainer);
overlay.appendChild(loadingText);

// Adiciona o overlay ao corpo da página
document.body.appendChild(overlay);

// Inicializa a animação Lottie
lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg', // ou 'canvas' se preferir
    loop: true,
    autoplay: true,
    path: 'https://agenciagnsis.github.io/redessx/loading.json',
});

// Função para ocultar o overlay quando o carregamento estiver completo
function hideOverlay() {
    overlay.style.display = 'none';
}

// Ouvinte de evento para ocultar o overlay quando a página terminar de carregar
window.addEventListener('load', hideOverlay);
