onEvent('recipes', (event) => {

  const recipes = [
    {
      output: '9x architects_palette:oak_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:oak_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:oak_railing'
    },
    {
      output: '9x architects_palette:birch_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:birch_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:birch_railing'
    },
    {
      output: '9x architects_palette:spruce_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:spruce_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:spruce_railing'
    },
    {
      output: '9x architects_palette:dark_oak_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:dark_oak_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:dark_oak_railing'
    },
    {
      output: '9x architects_palette:acacia_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:acacia_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:acacia_railing'
    },
    {
      output: '9x architects_palette:crimson_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:crimson_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:crimson_railing'
    },
    {
      output: '9x architects_palette:warped_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:warped_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:warped_railing'
    },
    {
      output: '9x architects_palette:jungle_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'minecraft:jungle_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:jungle_railing'
    },
    {
      output: '9x architects_palette:twisted_railing',
      pattern: ['ABA', 'B B'],
      key: {
        A: 'architects_palette:twisted_planks',
        B: 'minecraft:stick'
      },
      id: 'architects_palette:twisted_railing'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
