
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  const recipes = [
    {
      output: '16x beyond_earth:iron_plating',
      pattern: ['AAA', 'AAA'],
      key: {
        A: 'modern_industrialization:iron_plate',
      },
      id: 'beyond_earth:recipes/iron_plating'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
