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
    year: '1644',
    category: 'life'
  },
  {
    quote: 'I would never die for my beliefs, because i might be wrong',
    source: 'Bertrand Russell',
    citation: 'unknown',
    year: '1964',
    category: 'life'
  },
  {
    quote: 'With great power comes great responsability',
    source: 'Unknown',
    citation: 'French National Convention decree',
    year: '1793',
    category: 'life'
  },
  {
    quote:
      'You should keep a safety distance from those people who knows how to code',
    source: 'Gilson Cavalcanti',
    citation: 'While doing this exercise',
    year: '2019',
    category: 'warning'
  },
  {
    quote: 'Consistency is the playground of dull minds',
    source: 'Yuval Noah Harari',
    citation: 'SAPIENS',
    year: '2011',
    category: 'intellectual'
  },
  {
    quote:
      'Humour is one of the most serious tool we have for dealing with impossible situations',
    source: 'Erica Jong',
    citation: 'Letter to The New York Times',
    year: '1984',
    category: 'life'
  },
  {
    quote:
      'We can never run out of energy or matter. But we can easily run out of Brains',
    source: 'Arthur C Clarke',
    citation: 'Book, Profiles of the Future',
    year: '1962',
    category: 'intellectual'
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

/**
 * Auto change color mechanism
 */
var currentColor = {
  r: 58,
  g: 193,
  b: 98,
  variationAmount: 25
};

// Variates the color stored in currentColor by the amount stored
// in currentColor.variationAmount.
// It randomly chooses one of the Red Green or Blue color numbers to vary
// Updates the background color of the body and the color of the category label
function progressAndChangeColor() {
  var wichColorAxisToChange = 'rgb'[Math.floor(Math.random() * 3)];
  currentColor[wichColorAxisToChange] += currentColor.variationAmount;
  currentColor[wichColorAxisToChange] %= 256;

  var newColorText = `rgb(${currentColor.r},${currentColor.g},${currentColor.b})`;
  document.body.style.backgroundColor = newColorText;
  document.querySelector('.category').style.color = newColorText;
  console.dir(currentColor);
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  var randomQuote = getRandomQuote();
  let htmlTemplate = '';

  if (randomQuote) {
    htmlTemplate += '<p class="quote">' + randomQuote.quote + '</p>';
    htmlTemplate += '<p class="source">' + randomQuote.source;
    htmlTemplate +=
      '  <span class="citation">' + randomQuote.citation + '</span>';
    htmlTemplate += '  <span class="year">' + randomQuote.year + '</span>';
    htmlTemplate += '</p>';

    document.getElementById('quote-box').innerHTML = htmlTemplate;
    document.querySelector('.category').innerHTML = randomQuote.category;
    progressAndChangeColor();
  } else {
    throw new Error('getRandomQuote failed');
  }
}

printQuote();

/**
 * EXTRA:
 * The timer mechanism to show how much seconds is left
 * until to refresh the quote in the button caption
 */

const kWaitTime = 5;
var secondsToRefresh = kWaitTime;

// creates an anonymous function to be called each 1 second...
var timeoutID = window.setInterval(() => {
  secondsToRefresh--;
  if (secondsToRefresh === 0) {
    printQuote();
    secondsToRefresh = kWaitTime;
  }
  // updates the portion of the button text to show how many seconds until forced refresh
  document.querySelector('.timer').innerHTML = secondsToRefresh;
}, 1000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
