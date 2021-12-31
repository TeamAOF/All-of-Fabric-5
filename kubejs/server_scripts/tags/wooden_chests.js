////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {

event.remove('c:iron_ingots', 'betterend:thallasium_ingot')

});

onEvent('recipes', event => {

  event.replaceInput({}, '#c:wooden_chests', '#c:wooden_chests')

});
