

////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {

  // Cobweb
  event.shaped("minecraft:cobweb", [
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
  event.shaped("16x minecraft:stick", [
    ["#minecraft:logs"],
    ["#minecraft:logs"],
  ]);

    // Flint
    event.shaped("minecraft:flint", [
      ["minecraft:gravel", "minecraft:gravel", null],
      ["minecraft:gravel", null, null],
      [null, null, null],
    ]);


  // Hopper
  event.remove({ id: "charm:variant_chests/hopper" });
    event.shaped("minecraft:hopper", [
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      ["minecraft:iron_ingot", "#minecraft:logs",     "minecraft:iron_ingot"],
      [null,                   "minecraft:iron_ingot", null],
    ]);
  
});
