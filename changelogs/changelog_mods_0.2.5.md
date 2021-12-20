# All-of-Fabric-5 0.2.4⟶All-of-Fabric-5 0.2.5

## Added

* [Phosphor (Fabric)](https://www.curseforge.com/minecraft/mc-mods/phosphor)

## Updated

### [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) ([10.0.0-alpha.7 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3566461)⟶[10.0.0-alpha.8 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3574359))

#### [10.0.0-alpha.8 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3574359)

WARNING

Items will not migrate over from 1.17 or before due to the mod-id changing to ae2 in this release, and fully unifying fluid/item machines.

More in-depth release notes will follow in a later release (probably in the beta).

Channel Modes

This alpha version introduces new options to change how AE2 channels behave in your world. There's a new configuration option in the general section (channels) which controls this option, and a new in-game comman for operators to change the mode and the config from inside the game. The command is /ae2 channelmode &lt;mode&gt; to change it and /ae2 channelmode to show the current mode. When the mode is changed in-game, all existing grids will reboot and use the new mode immediately.

Available modes:

* default The standard mode with the known channel capacities of cable and ad-hoc networks
* x2 All channel capacities are doubled (16 on normal cable, 64 on dense cable, ad-hoc networks support 16 channels)
* x3 All channel capacities are tripled (24 on normal cable, 92 on dense cable, ad-hoc networks support 24 channels)
* x4 All channel capacities are quadrupled (32 on normal cable, 128 on dense cable, ad-hoc networks support 32 channels)
* infinite All channel restrictions are removed. Controllers still reduce the power consumption of grids significantly. Smart cables will only toggle between completely off (no channels carried) and completely on (1 or more channels carried).

This resurrects and improves upon the option that was available before 1.15 and introduces better options for players that just want a little more laid back gameplay but don't want the mechanic to be removed entirely.

Since this option is brand new, we'd appreciate intense testing of it. Please report and issues you might find on our GitHub / Discord.

Fixes

* [Fabric] Fix potential crashes when using crafting cards in export buses (#5798)
* [Fabric] Fix crash when inserting fluids into an ME chest using pipes (#5821)
* Fix pattern provider not displaying where it is pointing if it is made directional with a wrench
* Fix disassembly of fluid cells returning an item instead of a fluid cell housing (#5808, thanks ramidzkh!)
* Fixes various ticking issues with AE2 machines, primarily machines waking up potentially preventing other machines from ticking for some time. (Use a debug card in your off-hand to see the ticking behavior of AE2 machines in WTHIT/Jade)
* Fix Import-/Export-Bus Redstone Pulse Behavior. Upon receiving a redstone pulse, the bus will now wake itself up and perform the operation on the next tick. It now correctly remembers that a pulse occured even if it doesn't get a chance to tick before the chunk/world is unloaded. Fixes that buses would mis-interpret a high redstone signal at world load as a pulse
* Fixes the charger always using its minimum tick rate and ignoring the maximum
* Fixes crafting simulation if multiple options to craft the same item exist
* Fixes the matter cannon crashing if it had no ammo when fired (#5806)
* Fixes the matter cannon crashing if fired from a dispenser (#5814)
* Fixes storage and conversion monitors not showing the stored amount and not abbreviating large amounts (#5819)
* Fixes interfaces not moving out items from their storage into the network while waiting for items to craft while using a crafting card upgrade, essentially preventing the crafted items from being inserted (#5803)
* Fixes tooltips saying "JEI" instead of "REI" on Fabric, and renamed "FE P2P Tunnel" to "Energy P2P Tunnel" (#5677)
* Fixes cables attempting to connect through cable anchors/parts to adjacent blocks if the cable anchor/part was placed before the cable (prevent needless network reboot) (#5820)
* Fixes AE2 blocks retaining their configuration when being broken/disassembled, making them unstackable. A memory card must be used instead to copy the config if needed (#5818)
* Fixes a rare problem where opening an AE2 screen would leave a zombie screen open if the block was already removed on the client before the screen actually got a chance to open. This fixes a crash when certain other mods were used (seamlessloadingscreen). AE2 will now log a message sooner and close the screen server-side. (#5642)

Changes

* Introduced more information to WTHIT/Jade when looking at smart cables. For Ad-Hoc Networks, two error states will be shown (Too Many Channels, Nested P2P Tunnel) to explain why an Ad-Hoc network has gone offline. For networks with controllers, it now shows if there are two conflicting controllers on the grid.
* Minimum boot times of networks have been reduced from 20 to 5 ticks. The increase in boot time for additional nodes is still the same.
* During a network boot, 4 steps are now taken per tick instead of 1. This is configurable now in a new config option pathfindingStepsPerTick in case you experience severe server-side tick latency when networks reboot
* "Partial Plan (Missing Ingredients)" is now shown instead of "Simulation" when auto-crafting cannot be started due to missing items
* Use correct tag for wrenches so wrenches from other mods should now be usable
* Remove spam about data fixers not being registered for AE2 entities (they still aren't, but no more log spam)
* Use the default locale to format storage amounts (mostly affects the decimal point)

API

* [Breaking, API]: Removed InteractionHand from IPart#onPlacement and IPartHost#addPart
* [API] TickingRequest now allows the initial tick rate to be specified separately (default is still (min+max)/2)
* [Breaking, API]: Removed the directionality of IPartHost#hasRedstone since it wasn't directional internally and just returns if the block the cable is in is receiving a redstone signal.
* [Breaking, API]: Some changes to IAEStackRenderHandler, AEKeyType (for custom addon storage types) related to formatting amounts. Formatting is now automatically provided based on the amount per unit (i.e. 1000 for Fluids) and the unit symbol (i.e. 'B' for fluids).
* [Internal] Allow SlotSemantic to be used by addons that target AE2's internal classes
* [API] Add #getMaxChannels and #getUsedChannels to IGridNode
* [API] Add #getChannelMode to IPathingService to retrieve the current channel mode used for a grid
* [API] PartHelper now has a getPart method to more easily get the part attached at a certain position in the world
* [Breaking, API] Various changes around IPart now being based only around an IPartItem instance, no longer around ItemStack

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/all)

### [Applied Energistics 2 Wireless Terminals](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals) ([10.0.0-alpha.7](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3566557)⟶[10.0.0-alpha.8](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3574377))

#### [10.0.0-alpha.8](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3574377)

update to latest ae2 use own names for slots instead of reusing ae2 names add Korean Translation by @gyular #100 allow tab focus for magnet card and switch terminals buttons update to use mojmap since ae2 uses them too

### [AttributeFix](https://www.curseforge.com/minecraft/mc-mods/attributefix) ([AttributeFix-Fabric-1.18.1-13.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3571697)⟶[AttributeFix-Fabric-1.18.1-13.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3573453))

#### [AttributeFix-Fabric-1.18.1-13.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/3573453)

* Fix mod not applying properly on servers. [(448a230)](https://github.com/Darkhax-Minecraft/AttributeFix/commit/448a230)

This project is made possible by [Patreon](https://www.patreon.com/Darkhax?attributefix) support from players like you. Thank you!

* Rempler
* lothrazar
* SuperslowJelly
* arcanearchivesmod
* Adam Y
* Pongo Sapiens
* Darkosto

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/attributefix/files/all)

### [Bewitchment](https://www.curseforge.com/minecraft/mc-mods/bewitchment) ([bewitchment-1.18-2.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3545405)⟶[bewitchment-1.18-4.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3574267))

#### [bewitchment-1.18-4.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3574267)

-fix Lilith not being able to be summoned in most biomes

-Athame now has -0.5 attack range

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/all)

### [Chisel Refabricated](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel) ([[1.18.x/1.17.x] 1.3.3](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3571291)⟶[[1.18.x] 1.4.2](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3573813))

#### [[1.18.x] 1.4.2](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/3573813)

Added REI support

Fixed Quartz Block Bug

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/fabric-chisel/files/all)

### [Dank Storage Fabric](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric) ([dankstorage-3.0.1-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3563818)⟶[dankstorage-3.1-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3573620))

#### [dankstorage-3.1-1.18.1.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3573620)

* More crash fixes
* fixed settings not being saved in dock.

### [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions) ([EnchantmentDescriptions-Fabric-1.18.1-9.0.2.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3566740)⟶[EnchantmentDescriptions-Fabric-1.18.1-9.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3573558))

#### [EnchantmentDescriptions-Fabric-1.18.1-9.0.3.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3573558)

* Reimplement version update checker. [(31abd25)](https://github.com/Darkhax-Minecraft/Enchantment-Descriptions/commit/31abd25)

This project is made possible by [Patreon](https://www.patreon.com/Darkhax?enchdesc) support from players like you. Thank you!

* Rempler
* lothrazar
* SuperslowJelly
* arcanearchivesmod
* Adam Y
* Pongo Sapiens
* Darkosto

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/all)

### [Fabric Language Kotlin](https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin) ([Fabric Language Kotlin 1.7.0+kotlin.1.6.0](https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin/files/3531998)⟶[Fabric Language Kotlin 1.7.1+kotlin.1.6.10](https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin/files/3573712))

#### [Fabric Language Kotlin 1.7.1+kotlin.1.6.10](https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin/files/3573712)

See [https://github.com/FabricMC/fabric-language-kotlin/commits/master](https://github.com/FabricMC/fabric-language-kotlin/commits/master) for a changelog

### [KubeJS (Fabric)](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric) ([kubejs-fabric-1801.4.0-build.247.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3573088)⟶[kubejs-fabric-1801.4.0-build.249.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3574220))

#### [kubejs-fabric-1801.4.0-build.249.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric/files/3574220)

* Merge branch '1.18/dev' into 1.18/main - Max
* 💥 breaking: Migrate fluid registry to same consumer syntax as item registry - Max

### [Repurposed Structures (Fabric)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric) ([Repurposed Structures v3.1.10 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3563841)⟶[Repurposed Structures v3.1.12 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3573524))

#### [Repurposed Structures v3.1.12 (1.18.1 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3573524)

(V.3.0.12 Changes) (1.18.1 Minecraft)

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

Fortresses:

Jungle Fortress loot now has its tools and armor slightly damaged. The extremely rare diamond tools/armor is usually heavily damaged.

Villages:

Fixed some Zombified Piglins not spawning in Zombified Crimson/Warped Villages.

Crimson/Warped Villages's tannery building now has Lava Cauldrons.

Dungeons:

Added rare chance of Otherside Music Disc to all RS Dungeons loot tables.

Strongholds:

Added rare chance of Otherside Music Disc to all RS Strongholds's hallway loot table.

Bastions:

Underground Bastion's bridge, other, and skeleton horse stable chest loot tables now has a tiny chance for Amethyst Shards.

(V.3.1.8 Changes) (1.18.0 Minecraft)

Configs:

Refined RS config default entries for Terralith compat

Misc:

Fixed issue where several structures could be placed wrong if world height is changed significantly in the dimension.

(V.3.1.7 Changes) (1.18.0 Minecraft)

Configs:

Fix the autoupdating for configs to have best compat with Terralith not working

(V.3.1.6 Changes) (1.18.0 Minecraft)

Misc:

Fixed issue with deep copying the Structure Settings in chunk generators. (This is needed to allow RS's dimension allow/disallow configs to work) This was keeping AE2 meteors from spawning.

(V.3.1.5 Changes) (1.18.0 Minecraft)

Configs:

Autoupdated configs to have best compat with Terralith.

[(76 more lines)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3573524)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/all)

### [Spectrum](https://www.curseforge.com/minecraft/mc-mods/spectrum) ([1.1.1-earlygame2](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3569726)⟶[1.1.3-earlygame4](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3573237))

#### [1.1.3-earlygame4](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3573237)

This version comes with the first new textures by azazel!

* Improvements to the manual
* Some smaller fixes
* Lots of behind the scenes work for future updates

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/all)

### [Winterly](https://www.curseforge.com/minecraft/mc-mods/winterly) ([[1.18.1] Winterly 0.1.0](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3571737)⟶[[1.18.1] Winterly 0.2.0](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3573299))

#### [[1.18.1] Winterly 0.2.0](https://www.curseforge.com/minecraft/mc-mods/winterly/files/3573299)

* snow dude
* snow bricks
* snowball wall
* icicles
* texture improvements
* bug fixes

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
