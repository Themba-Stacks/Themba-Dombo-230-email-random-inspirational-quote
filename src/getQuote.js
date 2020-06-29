function quoteArray(textFile) {
    var fs = require('fs');

    try {
        var data = fs.readFileSync(textFile, 'utf8');
        return data.split("\n");
    } catch (e) {
        return ('Error:', e.stack);
    }

};

module.exports = quoteArray;
