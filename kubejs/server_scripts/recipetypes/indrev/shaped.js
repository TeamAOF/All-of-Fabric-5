////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  // MK1 Item Pipe
  event.shaped('8x indrev:item_pipe_mk1', [
    ['modern_industrialization:iron_plate', 'goldenhoppers:golden_hopper', 'modern_industrialization:iron_plate'],
  ]);

    // MK1 Fluid Pipe
    event.shaped('8x indrev:fluid_pipe_mk1', [
      ['modern_industrialization:iron_plate', 'kibe:fluid_hopper', 'modern_industrialization:iron_plate'],
    ]);

});
