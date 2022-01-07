
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const FOOD = [
    "tomato",
    "cabbage",
    "rice",
    "onion",
    "bacon",
    "cooked_bacon",
];

// Crops & Food
FOOD.forEach(function (item, index) {
  event.replaceInput('croptopia:' + item, 'farmersdelight:' + item)
});

// Garlic
event.replaceInput('croptopia:garlic', 'bewitchment:garlic')

  });
