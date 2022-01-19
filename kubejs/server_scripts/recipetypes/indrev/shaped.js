////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  const recipes = [
    {
      output: 'indrev:machine_block',
      pattern: ['BAB', 'BCB', 'BAB'],
      key: {
        A: 'indrev:nikolite_dust',
        B: '#c:iron_plates',
        C: 'indrev:battery',
    },
      id: 'indrev:shaped/machine_block'
    },
    {
      output: '8x indrev:item_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'goldenhoppers:golden_hopper',
        B: '#c:iron_plates',
    },
      id: 'indrev:shaped/item_pipe_mk1'
    },
     {
      output: '8x indrev:fluid_pipe_mk1',
      pattern: ['BAB'],
      key: {
        A: 'kibe:fluid_hopper',
        B: '#c:iron_plates',
    },
      id: 'indrev:shaped/fluid_pipe_mk1'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
