

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  // Cobweb
  event.shaped(item.of("minecraft:cobweb"), [
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
    ["minecraft:string", "minecraft:string", "minecraft:string"],
  ]);

    // Oak Sign
  event.replaceInput(
    { id: "minecraft:oak_sign" },
    "minecraft:oak_planks",
    "#minecraft:planks"
  );

    // Sticks
  event.shaped(item.of("minecraft:stick", 16), [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);


  // Hopper
  event.remove({ id: "charm:variant_chests/hopper" });
    event.shaped(item.of("minecraft:hopper"), [
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      [null,                   "minecraft:iron_ingot", null],
    ]);
  
});
