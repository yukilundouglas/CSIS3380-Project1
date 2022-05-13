/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

// Quotes array to store famous quotes from movies, books and songs
// 'quote' and 'source' properties are Mandatory for quote object
// 'citation' and 'year' are Optional for quote object
const quotes = [
{
    quote: "Frankly, my dear, I don't give a damn.",
    source: "Rhett Butler",
    citation: "Gone With the Wind",
    year: "1939"
},
{
    quote: "I'm going to make him an offer he can't refuse.",
    source: "Don Vito Corleone",
    citation: "The Godfather",
    year: "1972"
},
{
    quote: "Go ahead, make my day.",
    source: "Harry Callahan",
    citation: "Sudden Impact",
    year: "1983"
},
{
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien",
    citation: "The Two Towers"
},
{
    quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince"
},
{
    quote: "You are the best thing, that’s ever been mine.",
    source: "Taylor Swift",
    citation: "Mine"
}
,
{
    quote: "I’m looking right at the other half of me.",
    source: "Justin Timberlake"
}
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){

    // Variable that generate a random number between 0 and quotes array length
    let randomNumber = Math.floor(Math.random() * quotes.length);

    // Return the random quote object
    return quotes[randomNumber];
}

// Variable that is used to store current quote object being shown
let currentQuote;

/***
 * `printQuote` function
***/

function printQuote(){

    // Variable that store a random quote object by calling the getRandomQuote function
    let randomQuote = getRandomQuote();

    // Check whether the random Quote object is the same as current quote object being shown
    // if they are the same, loop until the random quote object is different from the current quote object
    while(randomQuote == currentQuote){
        randomQuote = getRandomQuote();
        console.log("Same Quote");
    }

    // log the random quote object which will be shown
    console.log(randomQuote);

    // Variable that store the String for HTML inside the "quote-box"
    // the mandatory properties "quote" and "source" for quote are first being concaterated with <p> elements
    // the last closing </p> tag wll be left off at this moment
    let quoteHTML = `<p class='quote'>${randomQuote.quote}</p> <p class = 'source'>${randomQuote.source}`;

    // Check if the random quote object has the 'citation' property
    // if true, concaternate a <span> element to quoteHTML
    if(randomQuote.hasOwnProperty('citation')){
        quoteHTML += `<span class="citation">${randomQuote.citation}</span>`
    };

    // Check if the random quote object has the 'year' property
    // if true, concaternate a <span> element to quoteHTML
    if(randomQuote.hasOwnProperty('year')){
        quoteHTML += `<span class="year">${randomQuote.year}</span>`
    };

    // Concaternate the last closing </p> tag to quoteHTML
    quoteHTML += `</p>`;

    // Set the innerHTML of the 'quote-box' to the quoteHTML
    document.getElementById('quote-box').innerHTML = quoteHTML;

    // Log the HTML string
    console.log(quoteHTML);

    // Set currentQuote to the random quote obejct being shown
    currentQuote = randomQuote;
}

// Generate a random quote once the page is loaded.
printQuote();

/***
 * click event listener for the print quote button
***/

// Add a Click event listener to the button 'load-quote' and call the printQuote function to generate new random quote
document.getElementById('load-quote').addEventListener('click', printQuote);