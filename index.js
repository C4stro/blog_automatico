/* Biblioteca usadas */
const readline = require('readline-sync');


function start () {
	const conteudo = {}

	conteudo.termoDeBusca = RetornaTermoDeBusca();
	conteudo.prefixo = RetornaPrefixo();

	function RetornaTermoDeBusca() {
		return readline.question('Tema a ser buscado no Wikipedia: ');
	}

	function RetornaPrefixo () {
		const prefixos = ['Quem eh', 'Quem foi', 'A historia de' ];
		const prefixoIndexSelecionado = readline.keyInSelect(prefixos, 'Escolha uma opcao: ');
		const prefixoTextoSelecionado = prefixos[prefixoIndexSelecionado];
		
		return prefixoTextoSelecionado;
	}

	console.log(conteudo);
}

start();