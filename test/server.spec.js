var mocha = require("mocha");
var chai = require("chai");

var expect = chai.expect;

describe("When I run my first test", function(){
    it("should expect true", function(){
        expect(true).equal(true);     
    });
});