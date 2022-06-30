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

onEvent('tags.blocks', event => {

    const techrebornore = [
    'indrev:nikolite_ore',
    'indrev:deepslate_nikolite_ore',
    'minecraft:shroomlight',
    'minecraft:glowstone',
    'techreborn:bauxite_ore',
    'techreborn:cinnabar_ore',
    'techreborn:galena_ore',
    'techreborn:iridium_ore',
    'techreborn:lead_ore',
    'techreborn:peridot_ore',
    'techreborn:pyrite_ore',
    'techreborn:ruby_ore',
    'techreborn:sapphire_ore',
    'techreborn:sheldonite_ore',
    'techreborn:silver_ore',
    'techreborn:sodalite_ore',
    'techreborn:sphalerite_ore',
    'techreborn:tin_ore',
    'techreborn:tungsten_ore',
    'techreborn:deepslate_bauxite_ore',
    'techreborn:deepslate_galena_ore',
    'techreborn:deepslate_iridium_ore',
    'techreborn:deepslate_lead_ore',
    'techreborn:deepslate_peridot_ore',
    'techreborn:deepslate_ruby_ore',
    'techreborn:deepslate_sapphire_ore',
    'techreborn:deepslate_sheldonite_ore',
    'techreborn:deepslate_silver_ore',
    'techreborn:deepslate_sodalite_ore',
    'techreborn:deepslate_tin_ore',
    'techreborn:deepslate_tungsten_ore'
    ];
  event.add('c:ores', techrebornore)
  event.add('c:ores_in_ground/stone', '#c:ores')

});
