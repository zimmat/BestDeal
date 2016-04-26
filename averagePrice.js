module.exports = function(quantity,price){
  var Dealprice = [3, 3.5, 3.33, 2.9];
  var total = 0;
  var expensiveDeal = 0;
  Dealprice.forEach(function(deal){
    total += deal;
  });
  // console.log(total);
  var avg = 0;
  Dealprice.forEach(function(deal){
  avg = Number((total / Dealprice.length).toFixed(2));
  });

  console.log(avg);
  return avg;
  }
