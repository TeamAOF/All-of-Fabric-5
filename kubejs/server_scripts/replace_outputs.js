onEvent('recipes', (event) => {

    event.replaceOutput({}, 'crookedcrooks:ir_bronze_crook', 'crookedcrooks:tr_bronze_crook');

    // Chromium
    event.replaceOutput({}, 'techreborn:chrome_ingot', 'modern_industrialization:chromium_ingot');
    event.replaceOutput({}, 'techreborn:chrome_nugget', 'modern_industrialization:chromium_nugget');
    event.replaceOutput({}, 'techreborn:chrome_dust', 'modern_industrialization:chromium_dust');
    event.replaceOutput({}, 'techreborn:chrome_plate', 'modern_industrialization:chromium_plate');
    event.replaceOutput({}, 'techreborn:chrome_storage_block', 'modern_industrialization:chromium_block');

});