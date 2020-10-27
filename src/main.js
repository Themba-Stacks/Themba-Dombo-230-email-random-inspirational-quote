const quoteArray = require("./getQuote.js")
const randomGenerator = require("./randomizer.js")
const sendEmailAPI = require("./send.js")

function sendMail(){
    const email = process.argv[2];
    const quotes = quoteArray("inspirationalQuote.txt");
    const randomQuote = randomGenerator(quotes);
    setTimeout( ()=>{sendEmailAPI(email, randomQuote)},0)
};

sendMail();