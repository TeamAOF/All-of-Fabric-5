const DELETED_ITEMS = ['kibe:light_ring', 'bewitchment:salt_ore', 'bewitchment:deepslate_salt_ore', 'croptopia:salt_ore', 'basicaiots:tin_aiot','basicaiots:copper_aiot', 'basicaiots:silver_aiot', 'basicaiots:steel_aiot', 'basicaiots:lead_aiot', 'croptosis:fertilized_sand', 'croptosis:fertilized_farmland', 'croptosis:fertilized_dirt', 'croptosis:potash_ore', 'croptosis:apatite_ore', 'croptosis:deepslate_apatite_ore', 'croptosis:potash_block', 'croptosis:apatite_block', 'croptosis:feather_meal', 'croptosis:rotten_pile', 'croptosis:apatite', 'croptosis:potash', 'croptosis:potash_pieces', 'croptopia:garlic', 'bewitchment:salt_block', 'bewitchment:salt', 'bewitchment:raw_silver', 'bewitchment:silver_ingot', 'bewitchment:silver_nugget', 'bewitchment:silver_block', 'croptopia:tomato', 'croptopia:cabbage', 'croptopia:cabbage_seed', 'croptopia:tomato_seed', 'croptopia:knife', 'croptopia:cooked_bacon', 'croptopia:bacon', 'techreborn:peridot_ore', 'techreborn:sheldonite_ore', 'techreborn:sodalite_ore', 'techreborn:deepslate_sodalite_ore', 'techreborn:deepslate_sheldonite_ore', 'techreborn:deepslate_silver_ore', 'techreborn:deepslate_galena_ore', 'techreborn:deepslate_peridot_ore', 'techreborn:deepslate_ruby_ore', 'techreborn:deepslate_sapphire_ore', "techreborn:aluminum_storage_block", "techreborn:aluminum_dust", "techreborn:aluminum_ingot", "techreborn:aluminum_nugget", "techreborn:aluminum_plate", "techreborn:bauxite_dust", "techreborn:bronze_storage_block", "techreborn:bronze_dust", "techreborn:bronze_ingot", "techreborn:bronze_nugget", "techreborn:bronze_plate", "techreborn:coal_dust", "techreborn:copper_nugget", "techreborn:copper_plate", "techreborn:diamond_dust", "techreborn:diamond_plate", "techreborn:electrum_storage_block", "techreborn:electrum_dust", "techreborn:electrum_ingot", "techreborn:electrum_nugget", "techreborn:electrum_plate", "techreborn:emerald_dust", "techreborn:emerald_plate", "techreborn:gold_plate", "techreborn:invar_storage_block", "techreborn:invar_dust", "techreborn:invar_ingot", "techreborn:invar_nugget", "techreborn:invar_plate", "techreborn:iridium_storage_block", "techreborn:iridium_ingot", "techreborn:iridium_nugget", "techreborn:iridium_plate", "techreborn:raw_iridium", "techreborn:iron_plate", "techreborn:lapis_plate", "techreborn:lead_storage_block", "techreborn:lead_ingot", "techreborn:lead_nugget", "techreborn:lead_plate", "techreborn:raw_lead", "techreborn:manganese_dust", "techreborn:nickel_storage_block", "techreborn:nickel_dust", "techreborn:nickel_ingot", "techreborn:nickel_nugget", "techreborn:nickel_plate", "techreborn:platinum_storage_block", "techreborn:platinum_dust", "techreborn:platinum_ingot", "techreborn:platinum_nugget", "techreborn:platinum_plate", "techreborn:quartz_dust", "techreborn:ruby_dust", "techreborn:silicon_plate", "techreborn:silver_storage_block", "techreborn:silver_ingot", "techreborn:silver_nugget", "techreborn:silver_plate", "techreborn:raw_silver", "techreborn:steel_storage_block", "techreborn:steel_dust", "techreborn:steel_ingot", "techreborn:steel_nugget", "techreborn:steel_plate", "techreborn:sulfur_dust", "techreborn:tin_storage_block", "techreborn:tin_ingot", "techreborn:tin_nugget", "techreborn:tin_plate", "techreborn:raw_tin", "techreborn:titanium_storage_block", "techreborn:titanium_dust", "techreborn:titanium_ingot", "techreborn:titanium_nugget", "techreborn:titanium_plate", "techreborn:tungsten_storage_block", "techreborn:tungsten_ingot", "techreborn:tungsten_nugget", "techreborn:tungsten_plate", "techreborn:raw_tungsten", "techreborn:bauxite_ore", "techreborn:deepslate_bauxite_ore", "techreborn:iridium_ore", "techreborn:deepslate_iridium_ore", "techreborn:lead_ore", "techreborn:deepslate_lead_ore", "techreborn:tin_ore", "techreborn:deepslate_tin_ore", "techreborn:deepslate_tungsten_ore", "techreborn:tungsten_ore"];
onEvent("kjsextras_rei", event => {
    DELETED_ITEMS.forEach(id => event.remove(id));
});