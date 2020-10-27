function quoteArray(textFile) {
    var fs = require('fs');

    try {
        var data = fs.readFileSync(textFile, 'utf8');
        return data.split("\n");
    } catch (e) {
        return ('Error:', e.stack);
    }

};
 
// quoteArray("lho");
module.exports = quoteArray;



// quotes[Math.floor(Math.random() * quotes.length)]
// const email = process.argv[2];
// let quoteArray = require("./getQuote.js")
// 