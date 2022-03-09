////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {

  event.removeAllTagsFrom('betterend:thallasium_ingot')
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  event.add('fabric:milk', 'croptopia:milk_bottle')
  event.add('fabric:milk', 'croptopia:soy_milk')
  event.add('c:milks', 'farmersdelight:milk_bottle')

});
