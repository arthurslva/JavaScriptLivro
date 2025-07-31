function cadastrarLivro() {
	const livro = criarLivro(); // já com os dados do form
	inserirLivroNaTabela(livro); // montar a tr, tds...
	resetarCamposHTML();
}

function criarLivro() {
	// ler os valores dos inputs formulário HTML
	const livroID = document.getElementById("livroID").value; // string "12"
	const livroTitulo = document.getElementById("livroTitulo").value; // string "Java"
	const livroAno = document.getElementById("livroAno").value; // string "2001"

	// montar um objeto livro com propriedades (esq)
	const objetoLivro = {
		id: livroID,
		titulo: livroTitulo,
		ano: livroAno,
	};

	return objetoLivro;
}

function inserirLivroNaTabela(livro) {

	const tblListagemBody = document.getElementById("tblListagemBody");
	const novaLinha = criarLinhaTabela(livro); 
	tblListagemBody.appendChild(novaLinha); 
}

function criarLinhaTabela(livro) {
	const novaLinha = document.createElement("tr");
	novaLinha.innerHTML = `<td>${livro.id}</td> <td>${livro.titulo}</td> <td>${livro.ano}</td>`;
	return novaLinha; 

}

function resetarCamposHTML() {
	// apagar os valores dos campos no form HTML
	document.getElementById("livroID").value = "";
	document.getElementById("livroTitulo").value = "";
	document.getElementById("livroAno").value = "";
}
