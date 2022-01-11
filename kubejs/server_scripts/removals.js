onEvent('recipes', (event) => {

    const id = [
    'indrev:shapeless/steel_dust',
    'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:rolling_machine/minecart',
    'vanilla-excavators:obsidian_excavator',
    'vanilla-hammers:obsidian_hammer',
    'croptopia:tomato_to_tomato_seed_shapeless',
    'croptopia:onion_to_onion_seed_shapeless',
    'croptopia:rice_to_rice_seed_shapeless',
    'croptopia:cabbage_to_cabbage_seed_shapeless',
    'techreborn:compressor/iridium_plate',
    'techreborn:compressor/iridium_plate_from_block',
    'indrev:infusing/steel_dust',
    'indrev:infusing/electrum_dust',
    'indrev:compressing/empty_upgrade',
    'techreborn:crafting_table/machine_block/basic_machine_frame_alt',

    ];

    const output = [
    'blockus:white_oak_small_logs',
    'blockus:dark_oak_small_logs',
    'blockus:acacia_small_logs',
    'blockus:jungle_small_logs',
    'blockus:birch_small_logs',
    'blockus:spruce_small_logs',
    'blockus:oak_small_logs',
    'blockus:golden_bars',
    'kibe:angel_ring',
    'kibe:light_ring',
    'chisel:chisel',
    'croptopia:bacon',
    'croptopia:cooked_bacon',
    'croptopia:knife',
    'bewitchment:raw_silver_block',
    'modern_industrialization:replicator',
    'modern_industrialization:uu_matter',
    'basicaiots:tin_aiot',
    'basicaiots:copper_aiot',
    'basicaiots:silver_aiot',
    'basicaiots:steel_aiot',
    'basicaiots:lead_aiot',
    'craftingcraft:portable_crafting',
    'kibe:pocket_crafting_table',
    'indrev:bronze_sword',
    'indrev:bronze_pickaxe',
    'indrev:bronze_axe',
    'indrev:bronze_shovel',
    'indrev:bronze_hoe',
    'indrev:item_pipe_mk1',
    'indrev:fluid_pipe_mk1',
    'kibe:big_torch',
    'dwarfcoal:dwarf_charcoal',
    'mtmechs:iron_gear_item',
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });

    const plates = [
        'tin',
        'gold',
        'iron',
        'copper',
      
        ];
      
          plates.forEach((plates) => {
              event.remove({ id: 'indrev:shapeless/' + plates + '_plate_from_hammer' });
          });
});