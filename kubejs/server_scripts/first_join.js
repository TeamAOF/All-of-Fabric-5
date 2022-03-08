onEvent('player.logged_in', (event) => {

        event.player.give(Item.of('ftbquests:book'));
});