module.exports = function(price) {
  var Dealprice = [3, 3.5, 3.33, 2.9];
  var cheapest = 200;
  Dealprice.forEach(function(deal){
    if(cheapest > deal){
      cheapest = deal;
    }
  });
  console.log(cheapest);
return cheapest;
    }
