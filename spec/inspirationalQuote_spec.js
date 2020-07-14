const quoteArray = require("../src/getQuote.js");
const randomGenerator = require("../src/randomizer.js");
const sendEmailAPI = require("../src/send.js");

describe("getQuote", ()=>{
    xit("should check that a file has been read and a array has been returned", ()=> {
        expect(quoteArray("inspirationalQuote.txt")).toBeInstanceOf(Array);
    })
});

//google on how to ask the proper question when building a test suit for a program