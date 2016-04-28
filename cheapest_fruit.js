module.exports = function(fruition){
  //  console.log(fruition);
  var cheapest = 100;
  //loop through shops
  for(var shop in fruition){
    var fruit = fruition[shop];
    // console.log(fruit);
      if(fruit > cheapest){
        cheapest = fruit;
    }
  }
    console.log(cheapest);
  return cheapest;
  }
