const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos');
const projetos = document.querySelectorAll('.projeto');
const numProjetosEsconder = 4;

botaoEsconderProjetos.classList.add("remover");

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao(botaoMostrarProjetos);
    botaoEsconderProjetos.classList.remove("remover");
});

botaoEsconderProjetos.addEventListener('click', () => {
    esconderUltimosProjetos();
    mostrarBotao(botaoMostrarProjetos);
    botaoMostrarProjetos.classList.remove("remover");
    botaoEsconderProjetos.classList.add("remover");
});

function mostrarBotao(botao) {
    botao.classList.add("remover");
}

function esconderBotao(botao) {
    botao.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetos.forEach((projeto, index) => {
        if (index >= projetos.length - numProjetosEsconder) {
            projeto.classList.add('projeto-ativo');
        }
    });
}

function esconderUltimosProjetos() {
    projetos.forEach((projeto, index) => {
        if (index >= projetos.length - numProjetosEsconder) {
            projeto.classList.remove('projeto-ativo');
        }
    });
}
