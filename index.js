const utf8 = require('utf8');
const readline = require('readline-sync')
const Parser = require('rss-parser');

/* Robô de texto */
const robots = {
	userInput: require('./robots/userInput.js'),
	text: require('./robots/text.js')
}

async function start () {
  const content = {
  	useFecthContentFromWikipediaAlgorithmia: false,
  	maximumSentences: 7
  }

  await robots.userInput(content);
  robots.text(content);

  console.log(content);
}

start()