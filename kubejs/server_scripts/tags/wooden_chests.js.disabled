////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('item.tags', event => {

 
 // Chests
 var charm_chests = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak",
  "crimson",
  "warped",
];

var be_stuff = [
  "mossy_glowshroom",
  "pythadendron",
  "end_lotus",
  "lacugrove",
  "dragon_tree",
  "tenanea",
  "helix_tree",
  "umbrella_tree",
  "jellyshroom"
];

  charm_chests.forEach(function (item, index) {
  event.get("c:wooden_chests").add("charm:" + item + "_chest")
  event.get("c:wooden_chests").add("charm:" + item + "_trapped_chest")
});

be_stuff.forEach(function (item, index) {
  event.get("c:wooden_chests").add("betterend:" + item + "_chest")
  event.get("charm:barrels").add("betterend:" + item + "_barrel")
});

event.remove('c:iron_ingots', 'betterend:thallasium_ingot')

});
