module.exports = function(fruition){
  //  console.log(fruition);
  var shops = [];
  var shopName ="";
  //loop through shops
  for(var shop in fruition){
    var fruit = fruition[shop];
    // console.log(fruit);
      if(fruition[shop].hasOwnProperty("oranges")){
      shopName  = shop;
      shops.push(shopName);
    }
  }
    console.log(shops);
  return shops;
  }
