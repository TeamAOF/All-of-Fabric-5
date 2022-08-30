////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.blocks', event => {

    const ultimine_blacklist = [
        'moderndynamics:item_pipe',
		'moderndynamics:fluid_pipe',
    ];

    ultimine_blacklist.forEach((block) => {
        event.add('ftbultimine:excluded_blocks', block)
    });

});
