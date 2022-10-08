onEvent('player.logged_in', (event) => {
        if (!event.player.stages.has('first_join')) {

        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of('tconstruct:materials_and_you'));

        event.player.stages.add('first_join')
  }
});