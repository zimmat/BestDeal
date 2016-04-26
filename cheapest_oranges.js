module.exports = function(fruition){
  //  console.log(fruition);
  var cheapest = 100;
  var cheapestSeller = "";
  //loop through shops
  for(var shops in fruition){
    var fruit = fruition[shops];
    // console.log(fruit);
      if(fruit.oranges > cheapest){
        cheapest = fruit.oranges;
      cheapestSeller  = shops;
    }
  }
    console.log(cheapestSeller);
  return cheapestSeller;
  }
