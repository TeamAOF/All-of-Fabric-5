
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const FOOD = [
    "tomato",
    "cabbage",
    "bacon",
    "cooked_bacon",
];

FOOD.forEach(function (item, index) {
  event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'croptopia:' + item, 'farmersdelight:' + item)
  event.replaceInput({type: 'minecraft:crafting_shaped'}, 'croptopia:' + item, 'farmersdelight:' + item)
});

  });
