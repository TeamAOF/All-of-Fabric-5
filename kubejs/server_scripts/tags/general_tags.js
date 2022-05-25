////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Create / Tech Reborn

  event.add('c:zinc_plates', 'techreborn:zinc_plate')
  event.add('c:brass_plates', 'techreborn:brass_plate')

  event.add('c:gold_plates', 'create:golden_sheet')
  event.add('c:iron_plates', 'create:iron_sheet')
  event.add('c:copper_plates', 'create:copper_sheet')



});
