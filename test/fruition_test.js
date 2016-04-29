var cheapest_oranges = require('../cheapest_oranges');
var apples_ascending = require('../apples_ascending');
var apples_desceending = require('../apples_desceending');
var cheapest_fruit = require('../cheapest_fruit');
var seller_with_lowest_price = require('../seller_with_lowest_price');
var shops_that_sell_oranges = require('../shops_that_sell_oranges');
var assert = require('assert');

var fruition = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}

describe('fruition', function(){
  it('should find the seller of the cheapest oranges', function(){
    assert.equal(cheapest_oranges(fruition),"chockers");
  });
  it('should return the prices and sellers of apples, order ascending by price',function(){

    assert.deepEqual(apples_ascending(fruition),[["shopwrong", 2], ["woolingsworth", 4], ["kwakspar", 4], ["chockers", 5]]);
  });
  it('should return the prices and sellers of apples, order descending by price', function(){
    assert.deepEqual(apples_desceending(fruition),[["chockers", 5], ["woolingsworth", 4], ["kwakspar", 4], ["shopwrong", 2]]);
  });
  it('should return the cheapest fruit', function(){
    assert.deepEqual(cheapest_fruit(fruition),["bananas","apples"]);
  });
  it('should return the seller of the fruit with the lowest price', function(){
    assert.deepEqual(seller_with_lowest_price(fruition),["chockers","shopwrong"]);
  });
  it('return all the shops that sell oranges', function(){
    assert.deepEqual(shops_that_sell_oranges(fruition),["woolingsworth","chockers","pickle pay","kwakspar"]);
  });
});
