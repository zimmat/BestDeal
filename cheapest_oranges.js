module.exports = function(fruition){
  //  console.log(fruition);
  var cheapest = 100;
  var shopName ="";
  //loop through shops
  for(var shop in fruition){
    var fruit = fruition[shop];
    // console.log(fruit);
      if(fruit.oranges < cheapest){
        cheapest = fruit.oranges;
      shopName  = shop;
    }
  }
    console.log(shopName);
  return shopName;
  }
