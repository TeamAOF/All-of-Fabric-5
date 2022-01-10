////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {

  event.removeAllTagsFrom('betterend:thallasium_ingot')
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

});
