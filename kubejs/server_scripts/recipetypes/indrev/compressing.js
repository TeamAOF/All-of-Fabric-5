////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const plates = [
    "aluminum",
    "battery_alloy",
    "blastproof_alloy",
    "bronze",
    "copper",
    "gold",
    "iridium",
    "stainless_steel",
    "steel",
    "tin",
    "titanium",
  ];

  plates.forEach((item) => {
event.recipes.indrev.compress({
  

  "type": "indrev:compress",
  "ingredients": {
    "item": "modern_industrialization:" + item + "_plate",
    "count": 1
  },
  "output": {
    "item": "modern_industrialization:" + item + "_curved_plate",
    "count": 1
  },
  "processTime": 400


  });
 });
});