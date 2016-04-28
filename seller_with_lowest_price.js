module.exports = function(fruition){
  module.exports = function(fruition){
    var cheapest = 100;
    var shopName = "";
        var cheapestFruit= [];
        for(var shop in fruition){
          console.log(shop);
          var fruitName = fruition[shop];
          console.log(fruitName);
          if(fruitName < cheapest){
             cheapest = fruitName;
            fruitTypes.push(cheapest);
            shopName = shop;
          }

            }
     console.log(shopName);

    return shopName;
    }
}
