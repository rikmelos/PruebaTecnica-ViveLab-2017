
var expect = require('chai').expect;
var app = require('../app/controller');

describe('Math', function() {
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });
    });
});

describe('permutation of a list of numbers', () => {
  it('should return the permutation of items in a list', () => {
    const permutate = app.permute([1,2,3,4]).length;
    const result = 24;
    expect(permutate).to.equal(result);
  });
});

describe('Concatenate the elements of an array', () => {
  it('should return concatenated elements of an array', () => {
    var array = [['2','3']];
    const concat = app.concat(array);
    const result = [23];
    expect(concat).to.eql(result);
  });
});

describe('Get the Bigger number of an array', () => {
  it('should return the max number of an array', () => {
    var array = [2,3,1000];
    const max = app.max(array);
    const result = 1000;
    expect(max).to.equal(result);
  });
});

describe('Get an array from strings separated by commas', () => {
  it('should return an array of strings', () => {
    var string = "1,2,3";
    const dispart = app.dispart(string);
    const result = ['1','2','3'];
    expect(dispart).to.eql(result);
  });
});
