module.exports = function(fruition){
  var cheapest = 3;
  var cheapestSeller = [];
  for (var shop in fruition) {
    for (fruitName in fruition[shop]) {
      var fruitInAlist = fruition[shop];
      var fruitPrice = fruitInAlist[fruitName];
      if (fruitPrice < cheapest) {
        //cheapest = fruitName;
        console.log(fruitPrice);
        // cheapFruit = fruitName;
         cheapestSeller.push(shop);
      }

    }
  }
  console.log(cheapestSeller);
  return cheapestSeller;
}
