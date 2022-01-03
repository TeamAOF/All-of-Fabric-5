////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {

  event.removeAllTagsFrom('betterend:thallasium_ingot')

})

onEvent('recipes', event => {

  event.replaceInput({}, '#c:wooden_chests', '#c:wooden_chests')

});
