onEvent('recipes', (event) => {

    event.replaceOutput({}, 'crookedcrooks:ir_bronze_crook', 'crookedcrooks:tr_bronze_crook');

    // Chromium
    event.replaceOutput({}, 'techreborn:chrome_ingot', 'modern_industrialization:chromium_ingot');
    event.replaceOutput({}, 'techreborn:chrome_nugget', 'modern_industrialization:chromium_nugget');
    event.replaceOutput({}, 'techreborn:chrome_dust', 'modern_industrialization:chromium_dust');
    event.replaceOutput({}, 'techreborn:chrome_plate', 'modern_industrialization:chromium_plate');
    event.replaceOutput({}, 'techreborn:chrome_storage_block', 'modern_industrialization:chromium_block');

    event.replaceOutput({}, '#c:steel_helmets', 'techreborn:steel_helmet');
    event.replaceOutput({}, '#c:steel_chestplates', 'techreborn:steel_chestplate');
    event.replaceOutput({}, '#c:steel_leggings', 'techreborn:steel_leggings');
    event.replaceOutput({}, '#c:steel_boots', 'techreborn:steel_boots');

    event.replaceOutput({}, '#c:silver_helmets', 'techreborn:silver_helmet');
    event.replaceOutput({}, '#c:silver_chestplates', 'techreborn:silver_chestplate');
    event.replaceOutput({}, '#c:silver_leggings', 'techreborn:silver_leggings');
    event.replaceOutput({}, '#c:silver_boots', 'techreborn:silver_boots');

});