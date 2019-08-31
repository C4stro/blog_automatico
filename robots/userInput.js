const readline = require('readline-sync')
const Parser = require('rss-parser');
const TREND_URL = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=BR' 

async function userInput (content) {
	
	content.searchTerm = await askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	content.lang = askAndReturnLanguage()

	async function askAndReturnSearchTerm () {
		const response = readline.question('Digite o termo escolhido ou G para listar o Google Trendings: ')

		return (response.toUpperCase() === 'G') ?  await askAndReturnTrend() : response   
	}

 	async function askAndReturnTrend() {
		console.log('Aguarde por favor ...')
		const trends = await getGoogleTrends()
		const choice = readline.keyInSelect(trends, 'Escolha seu trend topic: ')

		return trends[choice] 
	}

	async function getGoogleTrends () {
		const parser = new Parser();
		const trends = await parser.parseURL(TREND_URL);
		return trends.items.map(i => i.title)
	}

	function askAndReturnPrefix () {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixIndex
	}

	function askAndReturnLanguage(){
		const language = ['pt-br','en', 'es', 'fr']
		const selectedLangIndex = readline.keyInSelect(language,'Escolha uma lingua: ')
		const selectedLangText = language[selectedLangIndex]
		return selectedLangText
	}
	console.log(JSON.stringify(content, null, 4))
}

module.exports = userInput;