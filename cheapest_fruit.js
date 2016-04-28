module.exports = function(fruition){
  var cheapest = 100;
      var cheapestFruit= [];
      for(var fruit in fruition){
        var fruitName = fruition[fruit];
        console.log(fruitName);
        if(fruitName < cheapest){
           cheapest = fruitName;
          fruitTypes.push(cheapest);
        }

          }
   console.log(cheapestFruit);

  return cheapestFruit;
  }
