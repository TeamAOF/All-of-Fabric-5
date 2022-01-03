# All-of-Fabric-5 0.2.5⟶All-of-Fabric-5 0.2.6

## Added

* [Auto Config Updated API](https://www.curseforge.com/minecraft/mc-mods/auto-config-updated-api)
* [BCLib](https://www.curseforge.com/minecraft/mc-mods/bclib)
* [Better Animals Plus](https://www.curseforge.com/minecraft/mc-mods/betteranimalsplus)
* [BetterEnd](https://www.curseforge.com/minecraft/mc-mods/betterend)
* [Croptopia's Chocolaterie](https://www.curseforge.com/minecraft/mc-mods/croptopias-chocolaterie)
* [Dimension Fix (Some Forge Patches Ported)](https://www.curseforge.com/minecraft/mc-mods/dimension-fix-some-forge-patches-ported)
* [Elytra Trinket (Fabric)](https://www.curseforge.com/minecraft/mc-mods/elytra-trinket-fabric)
* [FastBench for Fabric](https://www.curseforge.com/minecraft/mc-mods/fastbench-for-fabric)
* [Feature NBT Deadlock Be Gone](https://www.curseforge.com/minecraft/mc-mods/feature-nbt-deadlock-be-gone)
* [Fix Experience Bug (now with FABRIC and FORGE versions)](https://www.curseforge.com/minecraft/mc-mods/fix-experience-bug)
* [Floral Flair [Fabric]](https://www.curseforge.com/minecraft/mc-mods/floral-flair-fabric)
* [Full Slabs](https://www.curseforge.com/minecraft/mc-mods/full-slabs)
* [Improved Stations (Fabric)](https://www.curseforge.com/minecraft/mc-mods/improved-stations)
* [Industrial Revolution](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution)
* [Iron Jetpacks Fabric](https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks-fabric)
* [Nears [Fabric]](https://www.curseforge.com/minecraft/mc-mods/nears)
* [No Angled Brackets](https://www.curseforge.com/minecraft/mc-mods/no-angled-brackets)
* [No Null Processors](https://www.curseforge.com/minecraft/mc-mods/no-null-processors)
* [Wireless Networks](https://www.curseforge.com/minecraft/mc-mods/wireless-networks)
* [⚒️ On A Stick [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/onastick)

## Updated

### [Adorn](https://www.curseforge.com/minecraft/mc-mods/adorn) ([Adorn 3.0.0 for 1.18.1](https://www.curseforge.com/minecraft/mc-mods/adorn/files/3559753)⟶[Adorn 3.1.0 for 1.18.1](https://www.curseforge.com/minecraft/mc-mods/adorn/files/3584469))

#### [Adorn 3.1.0 for 1.18.1](https://www.curseforge.com/minecraft/mc-mods/adorn/files/3584469)

Parity between Fabric and Forge

All features that were previously only available on Fabric are now also available on the Forge release of Adorn:

* Guide books
* Advancements
* Coloured screen backgrounds for block screens
* Config screen

Advancements

Adorn's advancement page has been redone with 19 new advancements and changes to the old ones! Keep track of your progress with advancements for each type of decoration block, as well as the Master Decorator advancement that is unlocked once you have built using every decoration block from Adorn.

Screens

* The visual look of block screens has been improved.
* On Fabric, the colours are now more pleasant and vibrant. (Note that they're not final and I might tweak them if it looks ugly)
* On Forge, the screens now feature the same style of background colours matching the block's material as on Fabric releases of Adorn.
* The config screen is now available on Forge too and it has been redone to make it simpler.
* Technical detail: Adorn no longer uses LibGui on Fabric so that it can share the screen code between platforms.

Tags

Three new block/item tags have been added: #adorn:regular_chimneys, #adorn:prismarine_chimneys and #adorn:filled_crates.

Fixed bugs

* [Fabric] Sofas not resetting their occupied block state to false after sleeping had stopped

### [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) ([10.0.0-alpha.8 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3574359)⟶[10.0.0-beta.3 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3590131))

#### [10.0.0-beta.3 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3590131)

New Features and Other Changes

* Overhaul how fluids and amounts can be encoded for processing patterns in the pattern encoding terminal.
* Modifying the amount works for items too. Setting to 0 will clear the slot.
* Crafted from Advanced Card and Dense Energy Cell.
* Can be added to Portable Cells, Color Applicator, and the Matter Cannon in the Cell Workbench
* Added upgrade slots directly to the Wireless and Wireless Crafting Terminal user interface. The card can be added there.
* Play the appropriate emptying sound when directly emptying a bucket of fluid onto a closed portable cell in the player inventory
* [Fabric] Minimum MC version is now 1.18.1
* [API, Breaking] Upgrades have changed significantly and now allow addons to add custom upgrades. (see [API Docs](https://appliedenergistics.github.io/api.html))

Fixes

* Fix spatial storage dimension causing Minecraft version update to fail due to Vanilla incompatibility with custom dimensions during world upgrade process.
* Automatically readd the spatial storage dimension on world-load when it goes missing from level.dat for some reason.
* Fixes unlocalized advancement names.
* Fixes wireless terminal / portable cell not being able to be opened from off-hand. (#5944, #5869)
* Trigger block/neighbor updates while still generating the world-gen chunk to prevent world-gen from stalling when it tries to flow water/make obsidian after the fact. (#5939)
* Fixes crash when an interface crafting job is canceled but the requested item is subsequently inserted on the same tick (#5919)
* Correctly decode processing patterns where the same item was specified as a primary and secondary output (#5917)
* [Fabric] Fixes potential crashes with ModernIndustrialization when storage buses are too thorough while checking for extractable content. (#5930)

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/all)

### [Applied Energistics 2 Wireless Terminals](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals) ([10.0.0-alpha.8](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3574377)⟶[10.0.0-beta.3](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3591507))

#### [10.0.0-beta.3](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3591507)

update ae2

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/all)

### [Arcanus](https://www.curseforge.com/minecraft/mc-mods/arcanus) ([arcanus-1.24.jar](https://www.curseforge.com/minecraft/mc-mods/arcanus/files/3531929)⟶[arcanus-1.25.jar](https://www.curseforge.com/minecraft/mc-mods/arcanus/files/3591193))

#### [arcanus-1.25.jar](https://www.curseforge.com/minecraft/mc-mods/arcanus/files/3591193)

* fixed bug that prevented Arcane Barrier from being gotten

### [Architectury API (Fabric)](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric) ([[Fabric 1.18.x] v3.2.51](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric/files/3562469)⟶[[Fabric 1.18(.1)] v3.4.9](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric/files/3587337))

#### [[Fabric 1.18(.1)] v3.4.9](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric/files/3587337)

Architectury v3.4.9 for 1.18(.1)

Updated at 2021-12-31 22:10.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.18)

* 3.4 : License and workflow updates, deprecate NbtType, merge #159 and #160

#### [14 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric/files/all)

### [Balm (Fabric Edition)](https://www.curseforge.com/minecraft/mc-mods/balm-fabric) ([balm-fabric-2.3.0+0.jar](https://www.curseforge.com/minecraft/mc-mods/balm-fabric/files/3558752)⟶[balm-fabric-2.4.0+0.jar](https://www.curseforge.com/minecraft/mc-mods/balm-fabric/files/3584834))

#### [balm-fabric-2.4.0+0.jar](https://www.curseforge.com/minecraft/mc-mods/balm-fabric/files/3584834)

Version 2.3.1 for Minecraft 1.18

* Fixed occasional ConcurrentModificationException on startup with Forge
* Fixed custom events not being fired on Forge event bus
* Fixed LivingDamageEvent on Fabric not taking armor into account
* Fixed dedicated server crash on Forge
* Fixed final fields being included in config loading on Forge

Version 2.3.0 for Minecraft 1.18

* Fixed dedicated server crash on Fabric when accessing config dir
* Fixed local configs not reloading once leaving multiplayer
* Fixed local configs not reloading when changing them while on the main menu

Version 2.2.0 for Minecraft 1.18

* Fixed configs not loading properly on servers
* Fixed configs not syncing properly to clients
* Added support for custom farmlands
* Added support for custom damage sources
* Added support for loot modifiers on Fabric
* Added support for forced poses on Fabric
* Added support for entity APIs on Fabric
* Fixed entity registration on Forge

Version 2.1.1 for Minecraft 1.18

* Fixed unknown discriminator errors on Forge
* Fixed config not supporting negative values on Forge

Version 2.1.0 for Minecraft 1.18

* Updated world gen support for Minecraft 1.18
* Updated block entities support for Minecraft 1.18

Version 2.0.0 for Minecraft 1.18

* Updated to Minecraft 1.18

### [Basic AIOTs](https://www.curseforge.com/minecraft/mc-mods/basic-aiots) ([Basic AIOTs 1.3.2+1.18-pre1](https://www.curseforge.com/minecraft/mc-mods/basic-aiots/files/3524163)⟶[Basic AIOTs 1.3.3+1.18.1](https://www.curseforge.com/minecraft/mc-mods/basic-aiots/files/3575523))

#### [Basic AIOTs 1.3.3+1.18.1](https://www.curseforge.com/minecraft/mc-mods/basic-aiots/files/3575523)

* AIOTs added by mod compat are now hidden from the creative group and REI if the mod adding compatilibity is not present.

### [Bits And Chisels](https://www.curseforge.com/minecraft/mc-mods/bits-and-chisels) ([bitsandchisels-2.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/bits-and-chisels/files/3544729)⟶[bitsandchisels-2.6.3.jar](https://www.curseforge.com/minecraft/mc-mods/bits-and-chisels/files/3584046))

#### [bitsandchisels-2.6.3.jar](https://www.curseforge.com/minecraft/mc-mods/bits-and-chisels/files/3584046)

fix dumb canvas thing

fix dumb flan thing

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/bits-and-chisels/files/all)

### [Blockus](https://www.curseforge.com/minecraft/mc-mods/blockus) ([(1.18) blockus-2.3.3+1.18](https://www.curseforge.com/minecraft/mc-mods/blockus/files/3542960)⟶[(1.18.1) blockus-2.3.4+1.18.1](https://www.curseforge.com/minecraft/mc-mods/blockus/files/3579286))

#### [(1.18.1) blockus-2.3.4+1.18.1](https://www.curseforge.com/minecraft/mc-mods/blockus/files/3579286)

* Added Rainbow Glowstone
* Can be used to make Rainbow Lamp
* Added Framed Paper Block
* A full block Paper Wall
* Paper Wall recipe is now 4 Framed Paper Block for 8 Paper Walls
* Paper Door & Trapdoor recipes use Paper Wall instead of paper
* Important reduction in the number of Rainbow Roses naturally generated
* Rainbow Roses can now be spread using bonemeal
* Wandering Traders now sell Rainbow Roses & Petals
* Added [Promenade](https://www.curseforge.com/minecraft/mc-mods/promenade) compatibility :
* Potted Autumn Oak, Autumn Birch, Pink Cherry Oak, White Cherry Oak, Palm & Dark Amaranth
* Small Cherry Oak Logs, Small Palm Logs & Small Dark Amaranth Stems
* Autumn Oak, Autumn Birch, Pink Cherry Oak, White Cherry Oak, Palm & Dark Amaranth Small Hedges
* White Oak Leaf Pile
* Blueberries Crate
* Added White Oak Saplings to [Farming for Blockheads](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads-fabric) Market
* Log in potted trees now use small logs/stems textures
* Updated Path side texture
* Fixed some recipes
* Renamed Burned Paper Block to Burnt Paper Block
* And Happy Holidays!

### [Botania (Fabric)](https://www.curseforge.com/minecraft/mc-mods/botania-fabric) ([Botania-1.18-425-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3560009)⟶[Botania-1.18.1-427-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3578081))

#### [Botania-1.18.1-427-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3578081)

1.18.1-427

* Fix: Crash on mixin application on client
* Fix: Crash with Rod of Unstable Reservoir targetting certain entities

1.18.1-426

* Info: Update to 1.18.1
* Add: Horn of the Canopy now breaks vines
* Fix: Flower syncing
* Fix: Ender Air Cloud entity not having a name
* Fix: Ender Air Cloud entity not being pickupable by hand
* Fix: Spam from advancements with certain Discord bridge mods
* Fix: Mana blaster lens recipe voiding extra blasters or lenses
* Fix: Mod name looking ugly in creative tab
* Change: Mixin cleanups

[https://botaniamod.net/changelog.php](https://botaniamod.net/changelog.php)

### [Cammie's Wearable Backpacks](https://www.curseforge.com/minecraft/mc-mods/cammies-wearable-backpacks) ([camsbackpacks-2.6.jar](https://www.curseforge.com/minecraft/mc-mods/cammies-wearable-backpacks/files/3555101)⟶[camsbackpacks-2.7.jar](https://www.curseforge.com/minecraft/mc-mods/cammies-wearable-backpacks/files/3586315))

#### [camsbackpacks-2.7.jar](https://www.curseforge.com/minecraft/mc-mods/cammies-wearable-backpacks/files/3586315)

* Fixed issues with mouse inputs

### [Capybara [Fabric]](https://www.curseforge.com/minecraft/mc-mods/capybara-fabric) ([capybara-1.18-1.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/capybara-fabric/files/3546574)⟶[capybara-1.18-1.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/capybara-fabric/files/3591830))

#### [capybara-1.18-1.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/capybara-fabric/files/3591830)

Fixes

* Fixed missing lang keys
* Removed comments from config file in order to keep with consistent multi-lang support
* Updated the first logging message

Developer Stuff

* Supressed warnings in CapybaraModel
* Made the code more consistent with my style
* Bumped Gradle
* Updated Loom and Dependencies

### [Catwalks Inc.](https://www.curseforge.com/minecraft/mc-mods/catwalks-inc) ([catwalks-inc-1.0.10.jar](https://www.curseforge.com/minecraft/mc-mods/catwalks-inc/files/3570047)⟶[catwalks-inc-1.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/catwalks-inc/files/3574745))

#### [catwalks-inc-1.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/catwalks-inc/files/3574745)

Migrated from pure Fabric to Architectury! Which means Forge support is coming soon once it's feature complete and tested. Architectury API is now required to run the mod.

Added Korean translation by gyular ([https://github.com/Reoseah/catwalks-incorporated/issues/6](https://github.com/Reoseah/catwalks-incorporated/issues/6))

### [Chalk (Fabric)](https://www.curseforge.com/minecraft/mc-mods/chalk-fabric) ([1.2.0](https://www.curseforge.com/minecraft/mc-mods/chalk-fabric/files/3570844)⟶[1.2.1](https://www.curseforge.com/minecraft/mc-mods/chalk-fabric/files/3574647))

#### [1.2.1](https://www.curseforge.com/minecraft/mc-mods/chalk-fabric/files/3574647)

Added korean translation

### [Chisel Refabricated](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel) ([[1.18.x] 1.4.2](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3573813)⟶[[1.18.x] 1.4.4](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3578088))

#### [[1.18.x] 1.4.4](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3578088)

Java 17 and 18 now work with 1.4.4

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/all)

### [Clumps](https://www.curseforge.com/minecraft/mc-mods/clumps) ([Clumps-fabric-1.18.1-8.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3568861)⟶[Clumps-fabric-1.18.1-8.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3575673))

#### [Clumps-fabric-1.18.1-8.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3575673)

Current version: 8.0.4

* [Stop using deprecated loom APIs](https://github.com/jaredlll08/Clumps/commit/e346fcde3f92e0cb1823604eae18bcf0e8401557) - Jared - Tue Dec 21 18:15:30 2021
* [Add common maven publishing](https://github.com/jaredlll08/Clumps/commit/a95421c0875ac3f4a96028185821ad4e2c8faeeb) - Jared - Tue Dec 21 18:15:19 2021
* [don't generate gradle metadata for maven](https://github.com/jaredlll08/Clumps/commit/434280685a92f0a28feed41e92391a983c6c5484) - Jared - Thu Dec 16 19:02:01 2021
* [port to 1.18.1](https://github.com/jaredlll08/Clumps/commit/b1a179037f314130848ced4dcde1c2bd4307a8c6) - Jared - Wed Dec 15 21:00:43 2021
* [Close #91](https://github.com/jaredlll08/Clumps/commit/c03eea285cf3eb8e19838fc7cfd18807f9d41100) - Jared - Wed Dec 15 17:41:51 2021
* [port to 1.18](https://github.com/jaredlll08/Clumps/commit/11a255c1821cde7b514373d6ba12c3fbf62eecf2) - Jared - Tue Nov 30 22:12:47 2021
* [Update gradle](https://github.com/jaredlll08/Clumps/commit/804da16f1ac3caa60b56f4c8f813f3d8b88951b8) - Jared - Fri Oct 15 16:27:01 2021
* [Include dependency definitions for Forge and Minecraft in mods.toml (#82)](https://github.com/jaredlll08/Clumps/commit/afd32ad9b383f36162107dd9ddbc74bd13f87eac) - Griefed - Sat Oct 2 11:45:32 2021
* [build.gradle cleanup](https://github.com/jaredlll08/Clumps/commit/a32228f8eb2ae4cc55559e1c3b5cee2a3d011ecb) - Jared - Tue Sep 14 03:52:15 2021
* [Fixed mixins in Common project.](https://github.com/jaredlll08/Clumps/commit/7dc811efd6d1f6e6122acd5cd8070fa4c836753a) - Jared - Tue Sep 14 03:52:09 2021
* [Port to 1.17. Close #77](https://github.com/jaredlll08/Clumps/commit/1a4f65815bc2e8a13ed361b94ebe40e074042001) - Jared - Sun Sep 12 20:24:35 2021
* [Future proof Jenkinsfile](https://github.com/jaredlll08/Clumps/commit/b0d1c972f4a8da0d2b5c6c35654e0beaebb78977) - Jared - Sat Jun 12 03:53:16 2021
* [Fix published maven libs](https://github.com/jaredlll08/Clumps/commit/352a559e979c6a403f38cb9cc326229f432359d8) - Jared - Wed May 26 11:48:11 2021
* [Hopefully fix a null clumpedMap. Close #62](https://github.com/jaredlll08/Clumps/commit/2ef9b36854c18d2b0ef24a6077bdb191568f54e5) - Jared - Fri Apr 30 21:36:56 2021
* [update forge and the build.gradle](https://github.com/jaredlll08/Clumps/commit/fb6fe02c211bc21fc942fb07557f7b9d8e253557) - Jared - Fri Apr 30 21:36:34 2021
* [Rework how mending is applied](https://github.com/jaredlll08/Clumps/commit/87e9b53c60750a795dd68ee4b988aee3f88fd550) - Jared - Wed Apr 14 14:43:14 2021
* [mark mcmt as compatible for now](https://github.com/jaredlll08/Clumps/commit/1b2ea8c2abf459e4e9334fa032ee6b7b0ce6a37d) - Jared - Tue Apr 13 15:30:29 2021
* [Add discord webhook](https://github.com/jaredlll08/Clumps/commit/9ab3c9d11ad16040406f4cc672811c0dd3a056c9) - Jared - Tue Apr 13 15:27:55 2021
* [Fix mending Calculation. Thanks @TheNormMan! Fixes #60](https://github.com/jaredlll08/Clumps/commit/bbecec20f9fbc37511f050d02e05443c48b94de7) - Jared - Sat Apr 10 19:04:30 2021
* [Migrate to deferred register, safeRunWhenOn, add localization (#54)](https://github.com/jaredlll08/Clumps/commit/38896602c4081a862d25d2cbe0b648fd1d14f079) - Chloe Dawn - Tue Feb 16 04:37:37 2021
* [update to 1.16.5](https://github.com/jaredlll08/Clumps/commit/13bfd39f1be7670a5a72e53377e9c8923556df09) - Jared - Sun Feb 14 20:31:57 2021
* [Mark MCMT as incompatible](https://github.com/jaredlll08/Clumps/commit/902b3a49672c883eb1d5859ee7e7a0065b1ccba8) - Jared - Mon Feb 8 04:21:14 2021
* [Fixed Clumps and Mending close $49](https://github.com/jaredlll08/Clumps/commit/d3c3fb10543e12f15a7e6ae8c257a3971f6e6c06) - Jared - Wed Feb 3 22:02:56 2021
* [proper port to 1.16.4](https://github.com/jaredlll08/Clumps/commit/bd5b5c4cd7e0de5141e8f64fa8b39a2e7bc24faf) - Jared - Sun Dec 13 01:25:18 2020
* [Cleanup and Efficiency (#42)](https://github.com/jaredlll08/Clumps/commit/321e4bd8458ea144990daa4f1f460901cee9ff44) - ChampionAsh5357 - Sun Nov 1 23:40:27 2020
* [Implement XP orb events (#41)](https://github.com/jaredlll08/Clumps/commit/129d87d18a24972051fbb036b421e918dce700c3) - FalseHonesty - Sat Oct 3 22:25:05 2020
* [port to 1.16.3](https://github.com/jaredlll08/Clumps/commit/810f040c82d4ee818bd2cbae92a1caafbc2290a5) - Jared - Wed Sep 16 23:15:08 2020
* [1.16.2 3rd times the charm](https://github.com/jaredlll08/Clumps/commit/49fd7690a8d32d1134009670a0df750a88c37446) - Jared - Tue Aug 25 17:55:44 2020
* [fix mapping issue](https://github.com/jaredlll08/Clumps/commit/0fd50c1855ad7c20126d0382f3d32ff032825489) - Jared - Tue Aug 25 17:24:46 2020
* [Fixed xp not dropping in dims (1.16.1) Close #192](https://github.com/jaredlll08/Clumps/commit/8fc3d38208a9b9aa1f36e96b5dc95fce2e61a954) - Jared - Tue Aug 25 17:16:30 2020
* [orb improvements](https://github.com/jaredlll08/Clumps/commit/75899ddf5dcb03398bd491266e6c325b7d8e78c6) - Jared - Thu Aug 20 20:21:10 2020
* [re-fix clumps causing crashes close #35](https://github.com/jaredlll08/Clumps/commit/234a169d959f1aefb65151a4328f04e70d1c7cc4) - Jared - Sun Jul 19 21:03:52 2020
* [update version](https://github.com/jaredlll08/Clumps/commit/91b94baf80891a34d0ad95fc90f8ce05deb4cf3c) - Jared - Sat Jul 18 01:58:06 2020
* [update commit](https://github.com/jaredlll08/Clumps/commit/1228c2b85508b66799487f0b16600a35f4e34d25) - Jared - Sat Jul 18 01:54:03 2020

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/clumps/files/all)

### [Conjuring [Fabric/Forge]](https://www.curseforge.com/minecraft/mc-mods/conjuring) ([[1.18] Conjuring 2 - 1.0.17](https://www.curseforge.com/minecraft/mc-mods/conjuring/files/3545718)⟶[[1.18+] Conjuring 2 - 1.0.18](https://www.curseforge.com/minecraft/mc-mods/conjuring/files/3584343))

#### [[1.18+] Conjuring 2 - 1.0.18](https://www.curseforge.com/minecraft/mc-mods/conjuring/files/3584343)

Fix Soul Digger not vein-mining vanilla ores

### [Controlling](https://www.curseforge.com/minecraft/mc-mods/controlling) ([Controlling-fabric-1.18-9.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/controlling/files/3548954)⟶[Controlling-fabric-1.18.1-9.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/controlling/files/3590778))

#### [Controlling-fabric-1.18.1-9.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/controlling/files/3590778)

Current version: 9.0.8

* [Create ko_kr.json](https://github.com/jaredlll08/controlling/commit/e62b1f10a846944bb51159f2e62ef57a66593f80) - E. Kim - Sun Jan 2 01:01:03 2022
* [Update zh_tw.json](https://github.com/jaredlll08/controlling/commit/c33f01b0fce0fb5439145e3675b53ab0e54e4b44) - __HJ - Mon Dec 27 05:10:34 2021
* [fix maven publishing, mixins and 1.18.1. Close #105](https://github.com/jaredlll08/controlling/commit/9e9f45c2febb2ff1b5a7ad0f2da081a2b438aaea) - Jared - Sat Dec 25 06:05:39 2021
* [port to 1.18.1. Close #103](https://github.com/jaredlll08/controlling/commit/e7b9577771c4edbc94a40846cb81a4760742699f) - Jared - Thu Dec 23 03:24:28 2021
* [Fix mixins and remove FAPI dep. Close #102](https://github.com/jaredlll08/controlling/commit/1f2242aedcfb8bc137bd4cbeb805d71abcf860af) - Jared - Sat Dec 4 15:37:11 2021
* [add icon and fix side info](https://github.com/jaredlll08/controlling/commit/d864c8a7f7d2a0aca74f145cf6d51f98773832f3) - Jared - Sat Dec 4 01:39:40 2021
* [update java](https://github.com/jaredlll08/controlling/commit/bda0f8c9b9432a759a958d6090961c1ff0d3175a) - Jared - Sat Dec 4 01:25:31 2021
* [update first commit](https://github.com/jaredlll08/controlling/commit/6cd47dd8bb5527d828a5ea478b8231343a0eeb7e) - Jared - Sat Dec 4 01:24:32 2021

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/controlling/files/all)

### [Croptopia [FABRIC/FORGE]](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric) ([Croptopia-1.18-FABRIC-1.7.4.jar](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric/files/3569896)⟶[Croptopia-1.18-FABRIC-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric/files/3590391))

#### [Croptopia-1.18-FABRIC-1.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/croptopia-fabric/files/3590391)

Add recipe toasts (From Ayutac)

Add missing stripped cinnamon blocks to mineable/logs tag

Make certain recipes faster when cooked in specialized blocks

Fix some grammar issues with advancements

### [Dank Storage Fabric](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric) ([dankstorage-3.1-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3573620)⟶[dankstorage-1.18.1-3.3.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3580905))

#### [dankstorage-1.18.1-3.3.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3580905)

* Implement fabric item api
* fix weird offhand interactions

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/all)

### [Dark Enchanting](https://www.curseforge.com/minecraft/mc-mods/dark-enchanting) ([dark-enchanting-0.6.2+1.18.jar](https://www.curseforge.com/minecraft/mc-mods/dark-enchanting/files/3567045)⟶[dark-enchanting-0.6.3+1.18.jar](https://www.curseforge.com/minecraft/mc-mods/dark-enchanting/files/3580315))

#### [dark-enchanting-0.6.3+1.18.jar](https://www.curseforge.com/minecraft/mc-mods/dark-enchanting/files/3580315)

No changelog available.

### [Dark Paintings](https://www.curseforge.com/minecraft/mc-mods/dark-paintings) ([DarkPaintings-fabric-1.17.1-4.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/dark-paintings/files/3400950)⟶[DarkPaintings-Fabric-1.18.1-9.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/dark-paintings/files/3582609))

#### [DarkPaintings-Forge-1.17.1-7.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/dark-paintings/files/3582100)

* Fix incorrect project logo. [(8f61ba0)](https://github.com/Darkhax-Minecraft/dark-paintings/commit/8f61ba0)

This project is made possible by [Patreon](https://www.patreon.com/Darkhax?darkpaintings) support from players like you. Thank you!

* Rempler
* lothrazar
* SuperslowJelly
* arcanearchivesmod
* Adam Y
* Pongo Sapiens
* Darkosto

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/dark-paintings/files/all)

### [Dawn API](https://www.curseforge.com/minecraft/mc-mods/dawn) ([Dawn API v3.1.0](https://www.curseforge.com/minecraft/mc-mods/dawn/files/3543407)⟶[Dawn API v3.2.0](https://www.curseforge.com/minecraft/mc-mods/dawn/files/3575028))

#### [Dawn API v3.2.0](https://www.curseforge.com/minecraft/mc-mods/dawn/files/3575028)

* Lots of refactors... yay!
* Added RecipeTypeCreator
* Added global AppleSkin compatibility with the new DynamicFood interface
* Fixed #22: Cauldron do not give any item after interactions in survival
* Fixed #19: Leaves do not compost

### [Drink Beer (Fabric)](https://www.curseforge.com/minecraft/mc-mods/drink-beer-fabric) ([drinkbeer-v3.0.1 for 1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/drink-beer-fabric/files/3571696)⟶[drinkbeer-v3.0.2 for 1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/drink-beer-fabric/files/3575314))

#### [drinkbeer-v3.0.2 for 1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/drink-beer-fabric/files/3575314)

Add Polski translation.

### [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions) ([EnchantmentDescriptions-Fabric-1.18.1-9.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3573558)⟶[EnchantmentDescriptions-Fabric-1.18.1-9.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3586039))

#### [EnchantmentDescriptions-Fabric-1.18.1-9.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3586039)

This project is made possible by [Patreon](https://www.patreon.com/Darkhax?enchdesc) support from players like you. Thank you!

* Rempler
* lothrazar
* SuperslowJelly
* arcanearchivesmod
* Adam Y
* Pongo Sapiens
* Darkosto

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/all)

### [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) ([[1.18/1.18.1] Fabric API 0.44.0+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3546679)⟶[[1.18.1] Fabric API 0.45.1+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3591502))

#### [[1.18.1] Fabric API 0.45.1+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3591502)

* Bump versions. (modmuss50)
* Preventing END special events with dimensional api (#1938) (kohanis)
* Registry sync packet compression II (#1853) (deirn)
* Fix attribute modifiers inject limiting other mixins. (#1928) (Jared)
* Use the correct information when throwing Exceptions for failed tests. (#1927) (Jared)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all)

### [Fabric Waystones](https://www.curseforge.com/minecraft/mc-mods/fabric-waystones) ([Fabric Waystones 2.3.5](https://www.curseforge.com/minecraft/mc-mods/fabric-waystones/files/3569255)⟶[Fabric Waystones 2.4.1](https://www.curseforge.com/minecraft/mc-mods/fabric-waystones/files/3575744))

#### [Fabric Waystones 2.4.1](https://www.curseforge.com/minecraft/mc-mods/fabric-waystones/files/3575744)

* Fixed some sound effects not playing
* Fixed debug item spam when used on players

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/fabric-waystones/files/all)

### [Farming for Blockheads (Fabric Edition)](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads-fabric) ([farmingforblockheads-fabric-1.18.1-9.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads-fabric/files/3558780)⟶[farmingforblockheads-fabric-1.18.1-9.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads-fabric/files/3584857))

#### [farmingforblockheads-fabric-1.18.1-9.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads-fabric/files/3584857)

Version 9.0.2 for Minecraft 1.18.x

* Fixed crash after changing configs on Forge
* Fixed outdated Quark support resulting in errors on world join
* Fixed missing language keys for merchant entity and subtitles

Version 9.0.1 for Minecraft 1.18.x

* Fixed recipes for Green, Red and Yellow Fertilizer
* Fixed market trades displaying counts over 64 even though only 64 are supported
* Fixed market crashing when placing emeralds while no trade is selected

Version 9.0.0 for Minecraft 1.18.x

* Updated to Minecraft 1.18

### [Harvest Scythes](https://www.curseforge.com/minecraft/mc-mods/harvest-scythes) ([Harvest Scythes 2.3.2](https://www.curseforge.com/minecraft/mc-mods/harvest-scythes/files/3568995)⟶[Harvest Scythes 2.4.0](https://www.curseforge.com/minecraft/mc-mods/harvest-scythes/files/3580929))

#### [Harvest Scythes 2.4.0](https://www.curseforge.com/minecraft/mc-mods/harvest-scythes/files/3580929)

* Added config
* Config contains blacklists for Scythes and Machetes
* Fixed recipes for celestium and metallurgium tools from Mythic Metal

### [Inventory Sorting](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting) ([InventorySorter-1.8.1-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3553026)⟶[InventorySorter-1.8.3-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3591467))

#### [InventorySorter-1.8.3-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3591467)

Fix crash with some of my other mods

Thank you to TheRanker for bringing this to my attention and helping test

[https://github.com/kyrptonaught/Inventory-Sorter/issues/65](https://github.com/kyrptonaught/Inventory-Sorter/issues/65)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/all)

### [KubeJS (Fabric)](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric) ([kubejs-fabric-1801.4.0-build.249.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3574220)⟶[kubejs-fabric-1801.4.0-build.263.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3584908))

#### [kubejs-fabric-1801.4.0-build.263.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3584908)

* Merge branch '1.18/dev' into 1.18/main - Max
* ‼️ First preparations for moving from "world" to "level" - Max
* Update workflow file - Max

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/all)

### [Lithium (Fabric)](https://www.curseforge.com/minecraft/mc-mods/lithium) ([Lithium mc1.18.1-0.7.6](https://www.curseforge.com/minecraft/mc-mods/lithium/files/3565566)⟶[Lithium mc1.18.1-0.7.7](https://www.curseforge.com/minecraft/mc-mods/lithium/files/3590908))

#### [Lithium mc1.18.1-0.7.7](https://www.curseforge.com/minecraft/mc-mods/lithium/files/3590908)

This Lithium release for Minecraft 1.18.1 fixes a few bugs. A new structure storage optimization speeds up determining the spawnable mob types by location while also slightly reducing the memory usage of chunks.

Additions

* new: chunk.structure_storage: optimize structure access of entity spawn attempts
* new: collection.gamerules: store gamerules in fastutil hashmap

Fixes

* fix: collide with worldborder in positive directions (#320 )
* fix: hoppers not invalidating cached extraction inventory when removed from the world (Incompatibility with Movable Blockentities #324 )
* fix: entity.inactive_navigations: add missing null check when unloading entities (#318 )
* fix: use unambiguous mixin target and remove warnings in ai.task.goat_jump
* fix: remove outdated chunk.sectionupdatetracking after being added to vanilla

### [Modern Industrialization](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization) ([Modern Industrialization v1.0.0](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3561180)⟶[Modern Industrialization v1.0.3](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3586764))

#### [Modern Industrialization v1.0.3](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3586764)

Please visit our github repository for a changelog: [https://github.com/AztechMC/Modern-Industrialization/releases](https://github.com/AztechMC/Modern-Industrialization/releases).

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/all)

### [Mouse Tweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks) ([[1.18+] Mouse Tweaks 2.19 Fabric](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/files/3570512)⟶[[1.18+] Mouse Tweaks 2.20 Fabric](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/files/3577798))

#### [[1.18+] Mouse Tweaks 2.20 Fabric](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/files/3577798)

* Added a config menu accessible from the Mods menu in Forge and from Mod Menu in Fabric.
* RMB-dragging with a Bundle over items will now pick the items up into the Bundle.
* Adjusted inventory-position-aware scrolling type to be a bit more intuitive. In particular, scrolling down from the crafting output slot in the player inventory now moves the item into the player inventory as expected.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/files/all)

### [NinjaPhenix's Container Library](https://www.curseforge.com/minecraft/mc-mods/ninjaphenixs-container-library) ([[Fabric - 1.18] 1.2.6](https://www.curseforge.com/minecraft/mc-mods/ninjaphenixs-container-library/files/3549144)⟶[[Fabric - 1.18] 1.2.10](https://www.curseforge.com/minecraft/mc-mods/ninjaphenixs-container-library/files/3591317))

#### [[Fabric - 1.18] 1.2.10](https://www.curseforge.com/minecraft/mc-mods/ninjaphenixs-container-library/files/3591317)

* Fix error when legacy config fails to convert.

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/ninjaphenixs-container-library/files/all)

### [Patchouli (Fabric)](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric) ([Patchouli-1.18.1-61-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3565996)⟶[Patchouli-1.18.1-63-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3582351))

#### [Patchouli-1.18.1-63-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3582351)

[https://github.com/VazkiiMods/Patchouli/releases/tag/release-1.18.1-63](https://github.com/VazkiiMods/Patchouli/releases/tag/release-1.18.1-63)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/all)

### [Pehkui](https://www.curseforge.com/minecraft/mc-mods/pehkui) ([[1.14.4 - 1.18] Pehkui 3.0.0](https://www.curseforge.com/minecraft/mc-mods/pehkui/files/3542832)⟶[[1.14.4 - 1.18.1] Pehkui 3.1.0](https://www.curseforge.com/minecraft/mc-mods/pehkui/files/3577068))

#### [[1.14.4 - 1.18.1] Pehkui 3.1.0](https://www.curseforge.com/minecraft/mc-mods/pehkui/files/3577068)

Update to 1.18.1

Still compatible with 1.17.1, 1.16.5, 1.15.2, and 1.14.4

Additions:

Add scale type for mining speed

Add scale type for attack speed

Add scale modifier for division by base scale

Changes:

Tweaks to Multiconnect compatibility

Tweaks to Immersive Portals compatibility

Tweaks to Reach-Entity-Attributes compatibility

Bugfixes:

Fix more reach distance issues

Somewhat fix auto jump not taking motion scale into account

Removals:

N/A

Last successfully tested on:

Minecraft version 1.18.1

Fabric Loader 0.12.12

Yarn mappings 1.18.1+build.5

[Fabric API 0.44.0+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/all)

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/pehkui/files/all)

### [Promenade](https://www.curseforge.com/minecraft/mc-mods/promenade) ([Promenade v2.2.0](https://www.curseforge.com/minecraft/mc-mods/promenade/files/3553043)⟶[Promenade v2.4.0](https://www.curseforge.com/minecraft/mc-mods/promenade/files/3591102))

#### [Promenade v2.4.0](https://www.curseforge.com/minecraft/mc-mods/promenade/files/3591102)

* Updated textures for Blunite and Carbonite
* Re-enabled Nether biomes
* Fixed #48: Sand turns to dirt when palm saplings grow
* Added Lush Creeper
* Reworked configuration files (please check your settings again!)

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/promenade/files/all)

### [Quick Shulker](https://www.curseforge.com/minecraft/mc-mods/quick-shulker) ([quickshulker-1.3.1-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/quick-shulker/files/3543268)⟶[quickshulker-1.3.3-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/quick-shulker/files/3591885))

#### [quickshulker-1.3.3-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/quick-shulker/files/3591885)

Fix crash on servers

Also fixes being unable to split stacks of enderchest on right click

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/quick-shulker/files/all)

### [Redstone Bits](https://www.curseforge.com/minecraft/mc-mods/redstone-bits) ([redstone-bits-1.6.0+fabric-mc1.18.jar](https://www.curseforge.com/minecraft/mc-mods/redstone-bits/files/3537510)⟶[redstone-bits-1.6.2+fabric-mc1.18.jar](https://www.curseforge.com/minecraft/mc-mods/redstone-bits/files/3582861))

#### [redstone-bits-1.6.2+fabric-mc1.18.jar](https://www.curseforge.com/minecraft/mc-mods/redstone-bits/files/3582861)

Fixed registry error preventing server joining

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/redstone-bits/files/all)

### [Repurposed Structures (Fabric)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric) ([Repurposed Structures v3.1.12 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3573524)⟶[Repurposed Structures v3.2.0 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3591436))

#### [Repurposed Structures v3.2.0 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3591436)

(V.3.2.0 Changes) (1.18.1 Minecraft)

Dungeons:

Deep Dungeons are now added that spawn from -10 to -60. Will replace Vanilla Dungeons below y = 0.

Nether Dungeon's secret banner is now red colored while Deep Dungeon has the dark grey banner instead.

Mineshafts:

RS Mineshaft arches should not be broken up weirdly as much anymore.

Fixed several RS Mineshafts having 1 incorrectly rotated arch block.

Fixed some arches placing incorrect blocks in RS Mineshafts.

(V.3.1.13 Changes) (1.18.1 Minecraft)

Configs:

Changed the default config spawnrate for Mushroom Wells, Mushroom Villages, and Mushroom Pyramids to be more rare. This is because Mushroom biomes are larger in 1.18.

Mineshafts:

Tried improving Mineshafts to have a bit less broken arches. More work may be done in the future for the other RS Mineshaft arches not affected by this change.

Mineshafts will try to make certain they do not place a ton of blocks in view of the sky even in rivers and oceans.

Attempt to try and make Mineshaft pillars and chains spawn better and 4 way pieces will now replace air to look better in caves.

Fixed Birch Mineshaft stairs not closing off fluids properly.

Outposts:

Nerfed amount of loot from End Outpost's Shulker Boxes and made armor/swords more uncommon.

Pyramids:

End Pyramid chests spawns slightly less Ender Pearls.

Strongholds:

In End Strongholds, reduce amount of loot Shulker Boxes being spawn just a bit.

Misc:

Optimized structure bounds checking for my mixins that prevents some features from spawning inside my structures.

Optimized the Jigsaw Blocks attaching part of my structures layout generation a bit.

(V.3.1.12 Changes) (1.18.1 Minecraft)

Misc:

Fixed incompatibility with Cyanide mod for good. Hopefully.

Locating stuff like Locate Command or Explorer Maps will now no longer spend more than 30 seconds trying to find an RS structure. This time before aborting the locating can be increased or decreased by editing the locateMaxTime config in the Misc section of my config.

(V.3.1.11 Changes) (1.18.1 Minecraft)

Configs:

Corrected configs to say that RS Mineshafts and Dungeons will NOT replace vanilla's.

Mineshafts:

Nether Mineshafts can exposed Ancient Debris again now.

Wall blocks in Mineshafts will connect to top wall properly now.

Mineshafts will be sunken into terrain a bit better to reduce destruction of surfaces.

Lang:

With special help from others, kokr.json is added and zhcn.json is improved!

Misc:

Bumped mixin compat level to java 17.

Fixed a potential incompatibility with Cyanide mod.

(V.3.1.10 Changes) (1.18.1 Minecraft)

Misc:

Fixed issue where adding a rspiecesspawn_counts entry in a datapack that does not have a required piece would make the RS structure not fully generate. Now the 1.18.1 More Villagers Datapack works properly: [https://www.curseforge.com/minecraft/texture-packs/repurposed-structures-more-villagers-datapack](https://www.curseforge.com/minecraft/texture-packs/repurposed-structures-more-villagers-datapack)

(V.3.1.9 Changes) (1.18.1 Minecraft)

Misc:

Hard require 1.18.1 Minecraft and 0.12.9 Fabric Loader to help keep people safer.

Cities:

Fixed Nether City having some rooms with an empty chest instead of having loot.

Nerfed rate of Netherite Ingot quite a bit from Nether Cities loot.

[(101 more lines)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3591436)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/all)

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-fabric-1800.1.6-build.81.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3546070)⟶[rhino-fabric-1800.1.7-build.92.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3584287))

#### [rhino-fabric-1800.1.7-build.92.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3584287)

* Merge branch '1.18/dev' into 1.18/main - Max
* Buildscript updates, add 1.18.1 to supported versions on CF - Max

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/rhino/files/all)

### [Roughly Enough Items Fabric (REI)](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items) ([[Fabric 1.18.x] v7.1.356](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items/files/3568540)⟶[[Fabric 1.18.x] v7.1.357](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items/files/3580798))

#### [[Fabric 1.18.x] v7.1.357](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items/files/3580798)

REI v7.1.357 for 1.18.x

Updated at 2021-12-26 17:21.

[Click here for changelog](https://www.github.com/shedaniel/RoughlyEnoughItems/commits/7.x-1.18)

* Fix support for Enchantment Descriptions
* Adds EntryDefinition.cheatsAs
* Mark 1.18.1 as supported
* Fix licenses
* Add entry settings adapter
* Update deps and gradle
* Change Copy Recipe ID and Export Image Keybind
* Make Label tooltips use Components instead of Strings (#680)
* Remove REI Forge relations
* Fix some outputs being marked as inputs (#679)
* Re-add JEI Internals Workaround
* Properly build and upload to CF
* Forge 1.18
* Fix #662
* Publish to maven
* Last minute SimpleMenuInfoProvider cloneWithDisplay -> create
* Fix compile errors
* Check isEmpty before checking for filtered stacks
* Add wildcard matching
* Fix EnderStorage recipes
* Bump to 6.2
* Fix merge conflicts
* Fix license
* Fix duplicate items with CC Tweaked
* Rewrite on how TransferHandler render errors, and fix #580
* Fix weird JEI animated renderer
* Round Dispose here bounds
* Fix REIClientPlugins on servers
* Add support for custom types for JEI plugins
* Allow filtering the displays with filtering rules
* Add @REIPlugin annotation to the forge api artifact
* 1.18-pre5
* 1.18-pre4
* Add @Experimental on #659
* Waxing, Wax Scraping, Oxidizing, and Oxidation Scraping categories
* 1.18-beta.3
* Properly credit translators
* Update to 1.18-pre2
* Removed deprecated APIs, 1.18-pre1
* Add Dispose Here region, introduce ValueAnimator
* Big Visual and Functional Changes - Fix #503 - Shift Click to select page, normal click to go back to page 1 - Allow non-consuming draggable visitors - Add scale down animation when dragging a stack to the main item list to dismiss it - Make Cheat Mode not active in Display Screens - Add colors to cosmetic transfer handler errors - Implement JEI animations, fix #501 - Allow favorites dragged stacks to go back to where they are if they are ignored, instead of being at the end of the favorites - Implement favorites & entry list column and row limits - Implement display page height limit - Updated localizations
* Remove gradle module metadata
* Introduce System Favorites
* Modularize region rendering
* Fix #654
* Fix JEI slot overlay, normalize dragging stacks and fix #651
* Fix weird text for recipe ids

[(132 more lines)](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items/files/3580798)

### [Spectrum](https://www.curseforge.com/minecraft/mc-mods/spectrum) ([1.1.3-earlygame4](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3573237)⟶[1.2.1-midgame2](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3590631))

#### [1.2.1-midgame2](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3590631)

* Made the way to remove Decay Blocks a bit cheaper and earlier to get
* a fix for a cyclic dependency that blocked optional progression
* made the thing to remove decay a bit cheaper and earlier to get
* a new way to automate Anvil Crushing Recipes, like for Gemstone Powder

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/all)

### [St'ructure Tools](https://www.curseforge.com/minecraft/mc-mods/structure-tools) ([structure-tools-1.0.6.jar](https://www.curseforge.com/minecraft/mc-mods/structure-tools/files/3541408)⟶[structure-tools-1.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/structure-tools/files/3581286))

#### [structure-tools-1.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/structure-tools/files/3581286)

* Fix Config not being respected

### [Staff of Building](https://www.curseforge.com/minecraft/mc-mods/staff-of-building) ([staffofbuilding-1.4.0-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/staff-of-building/files/3565973)⟶[staffofbuilding-1.4.1-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/staff-of-building/files/3577332))

#### [staffofbuilding-1.4.1-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/staff-of-building/files/3577332)

Dupe bug fixes! 😱

### [Tool Stats](https://www.curseforge.com/minecraft/mc-mods/tool-stats) ([ToolStats-fabric-1.17.1-2.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/tool-stats/files/3401002)⟶[ToolStats-Fabric-1.18.1-8.0.1.jar](https://www.curseforge.com/minecraft/mc-mods/tool-stats/files/3586533))

### [Vanilla Hammers](https://www.curseforge.com/minecraft/mc-mods/vanilla-hammers) ([vanilla-hammers-3.1.2-1.17.jar](https://www.curseforge.com/minecraft/mc-mods/vanilla-hammers/files/3368391)⟶[vanilla-hammers-3.2.0-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/vanilla-hammers/files/3575049))

### [Visuality [Fabric]](https://www.curseforge.com/minecraft/mc-mods/visuality) ([[1.18] Visuality 0.3.3](https://www.curseforge.com/minecraft/mc-mods/visuality/files/3543841)⟶[[1.18.1] Visuality 0.4.0](https://www.curseforge.com/minecraft/mc-mods/visuality/files/3585609))

#### [[1.18.1] Visuality 0.4.0](https://www.curseforge.com/minecraft/mc-mods/visuality/files/3585609)

* soul particle for soulsand
* more shiny stuff
* more config options
* fixes
* random improvements

### [Wilder World](https://www.curseforge.com/minecraft/mc-mods/wilder-world) ([Release 1.0.0 1.18-1.18.1](https://www.curseforge.com/minecraft/mc-mods/wilder-world/files/3561816)⟶[Release 1.1.0](https://www.curseforge.com/minecraft/mc-mods/wilder-world/files/3578660))

#### [Release 1.1.0](https://www.curseforge.com/minecraft/mc-mods/wilder-world/files/3578660)

1.1.0 - Incompatibility with iris fixed (Ambience features removed) + Aspen trees can now be grown with 4 birch saplings like other large tree variants

### [Winterly](https://www.curseforge.com/minecraft/mc-mods/winterly) ([[1.18.1] Winterly 0.2.0](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3573299)⟶[[1.18.1] Winterly 0.3.1](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3579785))

#### [[1.18.1] Winterly 0.3.1](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3579785)

Technical update

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/winterly/files/all)

### [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap) ([v21.22.5 for Fabric 1.18.x](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap/files/3562419)⟶[v21.23.0 for Fabric 1.18.x](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap/files/3582979))

#### [v21.23.0 for Fabric 1.18.x](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap/files/3582979)

* Compatible with Xaero's World Map 1.11.0 or newer. Version 1.19.0 is HIGHLY recommended.
* Reworked how the teleport command options work. You can now rearrange the waypoint coordinates in the command use the waypoint name.
* Support for the improved world map waypoint creation introduced in the world map version 1.19.0.
* (Fabric) Fixed entity icons compatibility with newer versions of Iris.

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap/files/all)

### [Xaero's World Map](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map) ([v1.18.7 for Fabric 1.18](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files/3562438)⟶[v1.19.0 for Fabric 1.18.x](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files/3582991))

#### [v1.19.0 for Fabric 1.18.x](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files/3582991)

* Compatible with Xaero's Minimap / Better PVP 20.23.0 or newer. Version 21.23.0 is HIGHLY recommended.
* Added a toggle on the world map screen waypoint menu for viewing the current waypoint sub-world selected in the minimap mod instead of always displaying only the waypoints for the current world map. Enabled by default as it seems to be what most people expect.
* When using the latest minimap version, creating waypoints from the world map should now use the same "placeholder" system as in game wp creation, rather than filling in the coordinate fields. This enables you to use automatic coordinate conversion when switching the dimension in the wp creation screen.
* Fixed world map screen buttons hover animation not working in some versions.

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files/all)

### [You're in Grave Danger](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger) ([youre-in-grave-danger-1.2.8.B](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3569520)⟶[youre-in-grave-danger-1.2.10](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3585674))

#### [youre-in-grave-danger-1.2.10](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3585674)

In this update graves can use custom models!

You can customize the appearance of graves with a resource pack in assets/yigd/models/block/grave.json. This file will work as any normal block model file, except it will feature a few extra features, as well as generating its hitbox shape based on the shape defined by the json model file. The extra features included will let you customize the optional skull and/or grave text. See the wiki for [custom grave models](https://github.com/B1n-ry/Youre-in-grave-danger/wiki/Custom-Grave-Models) for info on how you can create new models.

This update has also added the feature to decide in which directions graves should generate in graveyards (customizable per block)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/all)

### [[Fabric] Expanded Storage](https://www.curseforge.com/minecraft/mc-mods/expanded-storage-fabric) ([[1.18] 7.3.3](https://www.curseforge.com/minecraft/mc-mods/expanded-storage-fabric/files/3555309)⟶[[1.18] 7.3.6](https://www.curseforge.com/minecraft/mc-mods/expanded-storage-fabric/files/3586771))

#### [[1.18] 7.3.6](https://www.curseforge.com/minecraft/mc-mods/expanded-storage-fabric/files/3586771)

Add Italian translations by maicol07.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/expanded-storage-fabric/files/all)

### [megane](https://www.curseforge.com/minecraft/mc-mods/megane) ([[1.18.1] v6.1.2](https://www.curseforge.com/minecraft/mc-mods/megane/files/3566292)⟶[[1.18.1] v6.2.0](https://www.curseforge.com/minecraft/mc-mods/megane/files/3578180))

#### [[1.18.1] v6.2.0](https://www.curseforge.com/minecraft/mc-mods/megane/files/3578180)

[https://github.com/badasintended/megane/releases/tag/6.2.0](https://github.com/badasintended/megane/releases/tag/6.2.0)

### [oωo (owo-lib)](https://www.curseforge.com/minecraft/mc-mods/owo-lib) ([[1.18] oωo - 0.3.8](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3545678)⟶[[1.18+] oωo - 0.3.13](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3587789))

#### [[1.18+] oωo - 0.3.13](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3587789)

API change in FieldProcessingSubject and its dependents - all methods that got passed ID and value now also get passed the field object

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/all)

## Removed

* [Caracal Mod](https://www.curseforge.com/minecraft/mc-mods/caracal-mod)
* [Christmas Spirit: Rewoven](https://www.curseforge.com/minecraft/mc-mods/christmas-spirit-rewoven)
* [Grizzly bear Mod](https://www.curseforge.com/minecraft/mc-mods/grizzly-bear)
* [KleeSlabs (Fabric Edition)](https://www.curseforge.com/minecraft/mc-mods/kleeslabs-fabric)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
