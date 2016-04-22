module.exports = function(string){
  var avos = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
  if (avos[avos.length - 1] === ".")
    avos = avos.slice(0, -1);

  avos = avos.split(",");
  console.log(avos);
  var deals = [];
  avos.forEach(function(avos) {
    deals.push(avos.split("for R"));
  });
  console.log(deals);
  var Dealprice = [];
  deals.forEach(function(avos) {
    var quantity = Number(avos[0]);
    var price = Number(avos[1]);
    var pricePerAvo = (price / quantity);

    Dealprice.push(Number(pricePerAvo.toFixed(2)));

  });
  return Dealprice;
  console.log(Dealprice);
}
