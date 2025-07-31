const corpoTabelaListagem = document.getElementById("corpoTabelaListagem"); // HTML elem

const id = document.getElementById("livroID"); // HTML elem
const título = document.getElementById("livroTitulo"); // HTML elem
const ano = document.getElementById("livroAno"); // HTML elem
const inputBuscarTitulo = document.getElementById("inputBuscarTitulo"); // HTML elem

let mensagemBusca = document.getElementById("parResultadoBusca");
let livro;
// queria ter uma lista para armazenar os livros

function efetuarCadastroLivro() {
    livro = criarLivro(id.value, título.value, ano.value);

    // queria guardar o objeto livro na lista
    incluirLivroTabelaResultadoBusca();
    apagarCamposHTMLDadosLivro();
}

function criarLivro(umId, umTítulo, umAno) {
    // criar objeto livro
    const objetoLivro = {
        id: umId,
        titulo: umTítulo,
        ano: umAno,
    };

    return objetoLivro;
}

function incluirLivroTabelaResultadoBusca() {
    const novaLinha = criarNovaLinhaComDadosLivro();
    corpoTabelaListagem.appendChild(novaLinha);
}

function criarNovaLinhaComDadosLivro() {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${livro.id}</td><td>${livro.titulo}</td><td>${livro.ano}</td>`;
    return novaLinha;
}

function apagarCamposHTMLDadosLivro() {
    // apagar os valores dos campos
    id.value = "";
    título.value = "";
    ano.value = "";
}

// a função que devemos implementar
function processarBuscaLivroPorTítulo() {}