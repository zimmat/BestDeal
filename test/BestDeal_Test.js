var pricePerAvo = require('../pricePerAvo');
var cheapestDeal = require('../cheapestDeal');
var mostExpensiveDeal = require('../mostExpensiveDeal');
var averagePrice = require('../averagePrice');
var assert = require('assert');

describe('best deal', function() {
  it('should take an array as an input and calculate the Price Per Avo for each deal (make sure you use just two decimal points', function() {
assert.deepEqual(pricePerAvo(),[3, 3.5, 3.33, 2.9]);
  });
  it('should take an array as an input and calculate cheapest deal (make sure you use just two decimal points',function(){
    assert.deepEqual(cheapestDeal(),3);
  });
});
