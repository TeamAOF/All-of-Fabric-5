onEvent('recipes', (event) => {

    const id = [
    'indrev:shapeless/steel_dust',
    'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
    'techreborn:rolling_machine/minecart',
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
    'techreborn:crafting_table/machine/iron_furnace',
    'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores',
    'techreborn:blasting/platinum_ingot_from_c_sheldonite_ores',
    'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores_exported_mi_furnace',
    'modern_industrialization:compat/indrev/quarry_nikolite',
    'modern_industrialization:compat/ae2/quarry_ae2',
//    'createplus:architects_palette/mixing/sunstone',
//    'createplus:biomemakeover/cutting/ancient_log/stripped_wood',
//    'spectrum:enchantment_upgrade/spectrum/disarming',
//    'createplus:biomemakeover/mixing/mesmerite',
//    'createplus:biomemakeover/cutting/ancient_log/wood',
//    'createplus:biomemakeover/cutting/ancient_log/log',
//    'createplus:modern_industrialization/mixer/limestone',
//    'createplus:biomemakeover/cutting/ancient_log/stripped_log',
    'createplus:ae2/sequenced_assembly/mixing/calculation_processor',
    'createplus:ae2/sequenced_assembly/mixing/engineering_processor',
    'createplus:ae2/sequenced_assembly/mixing/logic_processor',

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
    'vanilla-excavators:obsidian_excavator',
    'vanilla-hammers:obsidian_hammer',
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
    'indrev:hammer',
    'techreborn:iron_alloy_furnace',
    'additionaladditions:gilded_netherite_helmet',
    'additionaladditions:gilded_netherite_chestplate',
    'additionaladditions:gilded_netherite_leggings',
    'additionaladditions:gilded_netherite_boots',
    'extragenerators:gluttony_generator',
    'extragenerators:brew_generator',
    'extragenerators:redstone_generator',
    'extragenerators:blast_generator',
    'extragenerators:demise_generator',
    'extragenerators:icy_generator',
    'extragenerators:teleport_generator',
    'extragenerators:heavenly_generator',
    'extragenerators:infernal_generator',
    'campanion:mre',
    'additionaladditions:fried_egg',
    'twilightforest:uncrafting_table',
//    'fabricaeexnihilo:end_cake',
//    'yigd:death_scroll',
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
 
    event.remove({input:"twilightforest:uncrafting_table"});
});

onEvent('block.right_click', event => {
  if (event.block.id == "twilightforest:uncrafting_table") {
    event.cancel()
  }
});
