onEvent('item.registry', event => {

	event.create('loot_bag_common').displayName('Common Loot Bag')
	event.create('loot_bag_rare').displayName('Rare Loot Bag')
	event.create('loot_bag_epic').displayName('Epic Loot Bag')
	event.create('loot_bag_legendary').displayName('Legendary Loot Bag')
});