const ORES_TO_REMOVE = [ 'techreborn:lead_ore', 'techreborn:tin_ore', 'techreborn:silver_ore','techreborn:bauxite_ore', 'techreborn:iridium_ore' ];

onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ORES_TO_REMOVE;
    })
});