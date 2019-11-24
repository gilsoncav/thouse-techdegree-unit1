/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
var quotes = [
  {
    quote: 'A kick in the teeth may be the best thing in the World for you.',
    source: 'Walt Disney',
    citation: 'Book, Distilled Wisdom',
    year: '1644'
  },
  {
    quote: 'I would never die for my beliefs, because i might be wrong',
    source: 'Bertrand Russel',
    citation: '',
    year: '1964'
  },
  {
    quote: 'With great power comes great responsability',
    source: 'Unknown',
    citation: 'French National Convention decree',
    year: '1793'
  },
  {
    quote:
      'You should keep a safety distance from those people who knows to code',
    source: 'Gilson Cavalcanti',
    citation: 'While doing this exercise',
    year: '2019'
  },
  {
    quote: 'Consistency is the playground of dull minds',
    source: 'Yuval Noah Harari',
    citation: 'SAPIENS',
    year: '2011'
  }
];

var lastRandomQuoteIndex = -1;

console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  // loop to guarantee that we don't repeat the current quote
  do {
    var randI = Math.floor(Math.random() * quotes.length);
  } while (randI === lastRandomQuoteIndex);
  lastRandomQuoteIndex = randI;

  return quotes[randI];
}

console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/
function printQuote() {
  var randomQuote = getRandomQuote();

  if (randomQuote) {
    document.querySelector('.quote').innerHTML = randomQuote.quote;
    document.querySelector('.source-name').innerHTML = randomQuote.source;
    if (randomQuote.citation) {
      document.querySelector('.citation').innerHTML = randomQuote.citation;
    } else {
      document.querySelector('.citation').innerHTML = 'unkown citation';
    }
    if (randomQuote.year) {
      document.querySelector('.year').innerHTML = randomQuote.year;
    } else {
      document.querySelector('.year').innerHTML = 'unkown year';
    }
  } else {
    throw new Error('getRandomQuote failed');
  }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
