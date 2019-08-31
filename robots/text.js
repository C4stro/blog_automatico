const algorithmia = require('algorithmia');
const algorithmiaKey = require('../credentials/algorithmia.json').apiKey;

function robot (content) {
	fetchContentFromWikipedia(content);
	//sanitizeContent(content);
	//breakContentIntoSentences(content);
	console.log(`Recebi com sucesso o content: ${content.searchTerm}`);

	async function fetchContentFromWikipedia(content) {
		/* INSTANCIA AUTENTICADA DO ALGORITHMIA */
		const algorithmiaAuthenticated = algorithmia(algorithmiaKey);
		/* DEFINE O ALGORITMO A SER USADO */
		const wikipediaAlgorithm = algorithmiaAuthenticated.algo(`web/WikipediaParser/0.1.2`);
		/*EXECUTA O ALGORITHMIA */
		const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm);
		/*CAPTURA O RESULTADO */
		const wikipediaContent = wikipediaResponde.get();

		console.log(wikipediaContent);

	}
}

module.exports = robot;