module.exports = function(fruition){
  var appleSellers = {};
  var appleInDescending = [];
  for(var shop in fruition){
      if(fruition[shop].hasOwnProperty('apples')){
          appleSellers[shop] = fruition[shop].apples;
      }
  }
  for(var apple in appleSellers){
    appleInDescending.push([apple, appleSellers[apple]]);
  }

  appleInDescending.sort(function(a,b){
    return b[1] - a[1];
  });
  console.log(appleInDescending);
  return  appleInDescending;
  }
