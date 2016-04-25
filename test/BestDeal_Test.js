var pricePerAvo = require('../pricePerAvo');
var cheapestDeal = require('../cheapestDeal');
var mostExpensiveDeal = require('../mostExpensiveDeal');
var averagePrice = require('../averagePrice');
var assert = require('assert');
var Dealprice = [3, 3.5, 3.33, 2.9];

describe('Best deal',function(){
  it('should return price per deal',function(){
    assert.deepEqual(pricePerAvo(), [3, 3.5, 3.33, 2.9]);
  });
  it('should return the cheapest deal',function(){
    assert.equal(cheapestDeal(),2.9);
  });
  it('should return the mostExpensiveDeal deal',function(){
    assert.equal(mostExpensiveDeal(),3.5);
  });
  it('should return the average price deal',function(){
    assert.equal(averagePrice(),6.37);
  });
});
