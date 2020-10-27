const quoteArray = require("../src/getQuote.js");
const randomGenerator = require("../src/randomizer.js");
var emailer = require("../src/send.js");

describe("getQuote function", ()=>{
    it("should read a file and return a array", ()=> { //try mock the actual file used
        expect(quoteArray("inspirationalQuote.txt")).toBeInstanceOf(Array);
    })
});

describe("randomGenerator function", ()=>{ //mock the inputs that you would use to run these test
    it("should return a randomly selected item from a array", ()=> {
        expect(randomGenerator([0,1,2,3])).not.toBeNull();
    })
});

describe("senEmailAPI function", ()=>{
    it("should send message", ()=> {
        var email = emailer;
        email.sendEmailAPI = jasmine.createSpy("sendEmailAPI spy")
        //spyOn(email,"sendEmailAPI");
        email.sendEmailAPI('themba@gmail.com','hello')
        expect(email.sendEmailAPI).toHaveBeenCalled();
    })
});

//google on how to ask the proper question when building a test suit for a program