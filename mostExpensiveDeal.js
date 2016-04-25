module.exports = function(quantity,price){
  var Dealprice = [3, 3.5, 3.33, 2.9];
  var expensiveDeal = 0;
  Dealprice.forEach(function(deal){
    if(expensiveDeal < deal){
      expensiveDeal = deal;
    }
  });
  console.log(expensiveDeal);
return expensiveDeal;
}
