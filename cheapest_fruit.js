module.exports = function(fruition) {
  var cheapest = 3;
  var cheapestFruit = [];
  for (var shop in fruition) {
    for (fruitName in fruition[shop]) {
      var fruitInAlist = fruition[shop];
      var fruitPrice = fruitInAlist[fruitName];
      if (fruitPrice < cheapest) {
        //cheapest = fruitName;
        console.log(fruitPrice);
        // cheapFruit = fruitName;
         cheapestFruit.push(fruitName);
      }

    }
  }
  console.log(cheapestFruit);
  return cheapestFruit;
}
