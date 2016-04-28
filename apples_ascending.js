module.exports = function(fruition){
  var appleSellers = {};
  var appleInAscending = [];
    for(var shop in fruition){
     if(fruition[shop].hasOwnProperty('apples')){
        appleSellers[shop] = fruition[shop].apples;

   }
   }
for(var apple in appleSellers){
   appleInAscending.push([apple, appleSellers[apple]]);
  appleInAscending.sort(function(a,b){
    return a[1] - b[1];
  });
 }
console.log(appleInAscending);
  return  appleInAscending;
  }
