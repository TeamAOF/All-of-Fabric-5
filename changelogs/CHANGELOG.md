
### All of Fabric 5 | v0.2.4

_Fabric Loader 0.12.12_ | _[Modlist](https://github.com/TeamAOF/All-of-Fabric-5/blob/dev/changelogs/modlist_0.2.4.md)_

**Changes**

- Croptopia salt ore no longer spawns in rivers.
- Farming has been unified towards Farmers Delight, this includes (Cabbage, Tomato & Bacon).
- Croptopia knife has been disabled due to slicing bacon now being done through farmers delight.

**Fixes**

- Fixed an issue where graves were deleted before checking if the player could claim the grave. Graves will now only be removed if the player can claim the grave.
- Fixed Croptopia seeds only being able to be planted on vanilla farmland.
- Chiseling blocks should now properly work.

**Added**
- Bewitchment
- Farmer's Delight
- Pehkui
- Spectrum
- Croptosis
- Harvest Scythes
  
**Removed**  
- Wild World
  
**Updated**  
- Auth Me: authme-mc1.18.1-2.2.0.jar  
- BetterCompatibilityChecker: bcc-fabric-1.0.4.jar  
- Chisel: chisel-1.3.0-1.18.1.jar  
- Towers of the Wild: Reworked: towers_of_the_wild_reworked-2.1.0.jar  
- Waystones: wraith-waystones-2.3.5.jar  
- You're in Grave Danger: youre-in-grave-danger-1.2.8B.jar  

### All of Fabric 5 | v0.2.3

_Fabric Loader 0.12.12_ | _[Modlist](https://github.com/TeamAOF/All-of-Fabric-5/blob/dev/changelogs/modlist_0.2.3.md)_

**Fixes**

- Server crash.

**Removed**

- Spectrum

---

### All of Fabric 5 | v0.2.2

_Fabric Loader 0.12.12_ | _[Modlist](https://github.com/TeamAOF/All-of-Fabric-5/blob/dev/changelogs/modlist_0.2.2.md)_

**Changes**

- TR Silver Ore now drop MI variant of raw ore.
- Added all TR ores to MI quarries.
- Hid unused ores from REI.
- Enabled autoClimbLadder.

**Fixes**

- Fixed certain items always showing in REI.
- Fixed chisel recipe.

**Added**

- AdventureZ
- Compact Status Effects
- EnchantmentDescriptions
- Guild
- Health Overlay
- Infusion Table
- Lithium
- Mo' Structures
- Deep Mob Learning: Simulacrum
- Spectrum
- Staff of Building
- Towers of the Wild: Reworked
- Transportables
- Urns
- WilderWorld
  
**Updated**  

- AE2WTLib: AE2WTLib-10.0.0-alpha.7.jar  
- Applied Energistics 2: appliedenergistics2-10.0.0-alpha.7.jar  
- Architectury: architectury-3.2.51.jar  
- Catwalks, Inc.: catwalks-inc-1.0.8.jar  
- Clumps: Clumps-fabric-1.18.1-8.0.2.jar  
- Croptopia: Croptopia-1.18-FABRIC-1.7.3.jar  
- Dank Storage: dankstorage-3.0.1-1.18.jar  
- Dark Enchanting: dark-enchanting-0.6.2+1.18.jar  
- Horse Info: hwyla-addon-horseinfo-0.4.1-1.18.jar  
- KubeJS: kubejs-fabric-1801.4.0-build.245.jar  
- megane: megane-6.1.2.jar  
- Mouse Tweaks: MouseTweaks-fabric-mc1.18-2.18.jar  
- Patchouli: Patchouli-1.18.1-61-FABRIC.jar  
- Repurposed Structures: repurposed_structures_fabric-3.1.10+1.18.1.jar  
- Roughly Enough Items: RoughlyEnoughItems-7.1.356.jar  
- WMITAF: wmitaf-fabric-mc1.18.1-2.2.0.jar  
- Xaero's Minimap: Xaeros_Minimap_21.22.5_Fabric_1.18.jar  
- You're in Grave Danger: youre-in-grave-danger-1.2.8.jar  

---

<h1>0.2.1</h1>

<h2>Be sure to always backup your world(s) before updating!</h2>


**Fixes**
- Fixed old worlds being incompatible due to dimension fix.
- Fixed crash involving security terminal during insertion into network storage (i.e. by Annihilation Planes)
- Fixed Annihilation Plane not returning to accepting items after the network refused them once
- Fixed pre-formatted cells
- Fixed parts staying connected to the grid when the cable is dismantled
- Fixed self-recursive patterns failing the crafting job simulation
- Fixed crafting card in export bus not working properly

**Added**
- Indium (Be sure to report ANY issues with this on the tracker)
- Sodium (Be sure to report ANY issues with this on the tracker)
---------------------------------------------------------------------------------------------

<h1>0.2.0</h1>

<h2>Be sure to always backup your world(s) before updating!</h2>

**Changes**
- Updated to 1.18.1
- Updated Fabric Loader to 0.12.11
- This release should HEAVILY increase overall fps & aswell lower stutters. Hours of profiling has led to this moment that I'll never be able to get back. Please help.
- Certus quartz ore gen from AE2 has been heavily nerfed.
- Nerfed entity banners (less defence % gained, less attack % gained, now needs 100 kills instead of 50.
- Re-enabled trapdoor couplings.
- Disabled the Minimap, enable with keybind (J) by default.


**Fixes**
- Fixed the Log4J2 vulnerability.
- Fixed REI searching in AE terminals (You couldnt remove text in search field).
- Fixed REI covering parts of AE terminals.
- Fixed dedicated server crash when attacking a barrel.
- Fixed MI pipe-related crashes.
- Fixed the AE2 pattern provider. Move recipes from REI to AE2 terminal as you now will.
- Fixed multiple incorrect autoremoves in unification (Some duplicates of recipes would still show up in REI between MI and TR).
- Fixed TR generated resources missing, alloys etc will now be craftable.
- Fixed entity banner crashes on lookup due to mythic mounts variants.
- Fixed huge fps drop (100 fps loss on a 4790k/980ti) due to zoom rendering.
- Fixed lower end PCs running very hot due to server/client syncing being faulty implemented.

**Added**
- Advancements Enlarger
- BetterCompatibilityChecker
- Better Mount HUD
- Catwalks, Inc.
- Chisel
- Client Tweaks
- Christmas Spirit
- Dank Storage
- Dawn API
- Deep Mob Learning: Refabricated
- Farming for Blockheads
- FastFurnace
- Gate Of Babylon
- I Know What I'm Doing
- NetherPortalFix
- Promenade
- Tool Stats
- Wolves With Armor
- You're in Grave Danger
  
**Removed**  
- Universal Graves
  
**Updated**  
- Additional Additions: AdditionalAdditions-3.0.1.jar  
- Adorn: Adorn-3.0.0+1.18.1-fabric.jar  
- AE2WTLib: AE2WTLib-10.0.0-alpha.5.jar  
- Applied Energistics 2: appliedenergistics2-10.0.0-alpha.5.jar  
- Architectury: architectury-3.2.47.jar  
- Balm: balm-fabric-2.3.0+0.jar  
- Botania: Botania-1.18-425-FABRIC.jar  
- Cammie's Wearable Backpacks: camsbackpacks-2.6.jar  
- Cloth Config v6: cloth-config-6.1.48-fabric.jar  
- Couplings: Couplings-1.7.1+1.18.jar  
- Dark Enchanting: dark-enchanting-0.6.1+1.18.jar  
- Expanded Storage: expandedstorage-7.3.3+1.18.jar  
- Geckolib: geckolib-fabric-1.18-3.0.23.jar  
- Go Fish: go-fish-1.4.1-1.18.1.jar  
- Inmis: inmis-2.4.0-1.18.jar  
- Inventory Sorter: InventorySorter-1.8.1-1.18.jar  
- KubeJS: kubejs-fabric-1800.4.0-build.238.jar  
- Magitek Mechs: magitekmechs-fabric-MC1.18-1.0.10.jar  
- megane: megane-6.1.1.jar  
- Modern Industrialization: Modern-Industrialization-1.0.0.jar  
- Plushie Mod: plushie-mod-1.1-1.18.1.jar  
- Reborn Core: RebornCore-5.1.0-beta.4.jar  
- Repurposed Structures: repurposed_structures_fabric-3.1.9+1.18.1.jar  
- Tech Reborn: TechReborn-5.1.0-beta.4.jar  
- The Graveyard: The_Graveyard_1.1_(FABRIC)_for_1.18.1.jar  
- Harvest Scythes: wraith-harvestscythes-2.3.1.jar  
- Waystones: wraith-waystones-2.3.4.jar  
---------------------------------------------------------------------------------------------

<h1>0.1.4</h1>

<h2>Be sure to always backup your world(s) before updating!</h2>

**Changes**
- WTHIT now hides when advancement popup happens.
- Lowered spawnrates of all mythic mounts.
- Added NA South default server.

**Fixes**
- Fixed rubber trees not generating.

**Added**
- Botania: Botania-1.18-424-FABRIC.jar  
- Horse Info: hwyla-addon-horseinfo-0.4.0-1.18.jar  
- KleeSlabs: kleeslabs-fabric-1.18-11.0.0.jar  
  
**Updated**  
- Expanded Storage: expandedstorage-7.3.2+1.18.jar  
- Light Overlay: light-overlay-6.0.4.jar  
- Reborn Core: RebornCore-5.1.0-beta.3.jar  
- Roughly Enough Items: RoughlyEnoughItems-7.0.346.jar  
- Tech Reborn: TechReborn-5.1.0-beta.3.jar  
- Waystones: wraith-waystones-2.3.2.jar  
- Xaero's Minimap: Xaeros_Minimap_21.22.3.1_Fabric_1.18.jar  
- Xaero's World Map: XaerosWorldMap_1.18.6.1_Fabric_1.18.jar  
---------------------------------------------------------------------------------------------

<h1>0.1.3</h1>

<h2>Be sure to always backup your world(s) before updating!</h2>

**Fixes**
- Fixed AE2 Meteors not spawning.

**Removed**  
- Paxi: Paxi-Fabric-1.17-1.2.2.jar  
- YUNG's API: YungsApi-1.17-Fabric-19.jar  
  
**Updated**  
- Modern Industrialization: Modern-Industrialization-1.0.0-alpha.04.jar  
---------------------------------------------------------------------------------------------

<h1>0.1.2</h1>

<h2>Be sure to always backup your world(s) before updating!</h2>

**Fixes**
- Fixed any entites being slower than usual.
- Fixed incorrect default options/keybinds (tab etc will now work on servers).
- Fixed waterlogged trapdoors crashing your game.

**Added**
- Default Options: defaultoptions-fabric-1.18-14.0.0.jar  
- FerriteCore: ferritecore-4.0.0-fabric.jar  
- Pling: pling-1.5.0.jar  
  
**Removed**  
- Christmas Spirit: cspirit-1.1.0-1.18.jar  
- [DefaultSettings:](https://www.curseforge.com/minecraft/mc-mods/defaultsettings-fabric) DefaultSettings-1.18.x-3.1.0.jar  
  
**Updated**  
- Cloth Config v6: cloth-config-6.0.45-fabric.jar  
- Croptopia: Croptopia-1.18-FABRIC-1.7.2.jar  
- Magitek Mechs: magitekmechs-fabric-MC1.18-1.0.9-rc.2.jar  
---------------------------------------------------------------------------------------------
