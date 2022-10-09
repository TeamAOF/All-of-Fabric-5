
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const recipes = [
    {
      output: 'twigs:paper_lantern',
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: 'minecraft:paper',
        B: 'minecraft:torch',
      },
      id: 'twigs:paper_lantern'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
