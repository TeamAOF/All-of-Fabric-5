////////////////////////
/// Made by Team AOF ///
////////////////////////

onEvent('recipes', (event) => {

  // Wooden Bucket / Small Logs
  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    [
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
      "minecraft:dark_oak_log",
    ],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  // Barrels 
  var blockus_barrels = [
    "oak",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "crimson",
    "warped",
  ];

    blockus_barrels.forEach(function (item, index) {
    event.remove({
      type: "crafting_shaped",
      output: "blockus:" + item + "_barrel",
    });
  });

});
