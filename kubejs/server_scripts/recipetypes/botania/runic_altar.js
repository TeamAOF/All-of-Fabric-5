////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  
    event.custom({
    "type": "botania:runic_altar",
    "output": {
      "item": 'kibe:angel_ring',
      "count": 1
    },
    "mana": 25000,
    "ingredients": [
      {"item": 'botania:gaia_ingot'},
      {"item": 'conjuring:stabilized_conjuring_focus'},
      {"item": 'botania:gaia_ingot'},
      {"item": 'modern_industrialization:gravichestplate'},
      {"item": 'conjuring:stabilized_conjuring_focus'},
      {"item": 'kibe:diamond_ring'},
      {"item": 'minecraft:end_crystal'},
      {"item": 'minecraft:elytra'},
      {"item": 'bewitchment:heaven_extract'},
    ]
    });
})