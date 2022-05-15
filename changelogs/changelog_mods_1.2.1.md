# all-of-fabric-5 1.2.0⟶all-of-fabric-5 1.2.1

## Added

* [Chimes](https://www.curseforge.com/minecraft/mc-mods/chimes)
* [Display Case](https://www.curseforge.com/minecraft/mc-mods/displaycase)
* [Goodall](https://www.curseforge.com/minecraft/mc-mods/goodall)
* [More Geodes](https://www.curseforge.com/minecraft/mc-mods/emerald-geodes)
* [Peripheralium](https://www.curseforge.com/minecraft/mc-mods/peripheralium)
* [Pyrotastic 🎆](https://www.curseforge.com/minecraft/mc-mods/pyrotastic)
* [TimeOutOut (Fabric)](https://www.curseforge.com/minecraft/mc-mods/timeoutout-fabric)
* [UnlimitedPeripheralWorks](https://www.curseforge.com/minecraft/mc-mods/unlimitedperipheralworks)

## Updated

### [AE2 Things](https://www.curseforge.com/minecraft/mc-mods/ae2things) ([AE2Things-1.1.0-beta.3.jar](https://www.curseforge.com/minecraft/mc-mods/ae2things/files/3770270)⟶[AE2Things-1.1.0-beta.4.jar](https://www.curseforge.com/minecraft/mc-mods/ae2things/files/3791375))

#### [AE2Things-1.1.0-beta.4.jar](https://www.curseforge.com/minecraft/mc-mods/ae2things/files/3791375)

* Remove 256k recipes because ae2 now includes this in base mod
* Fix advanced inscriber insertions

### [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) ([AE2 11.0.0-alpha.5 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3764063)⟶[AE2 11.0.0 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3791295))

#### [AE2 11.0.0 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3791295)

New features

Fluix Tools

256k Storage Tier

Number entry mathematical expression

Fluid storage monitor

Vastly improve terminal searching performance

This release vastly improves terminal searching performance by caching a few things. * Tag Search and Search Result Caching by @shartte in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6231](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6231) * Add Tooltip Cache for Better Search Efficiency by @MidCoard in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6241](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6241)

Smaller features

* Fix #5993: Add button to clear crafting terminal to player inventory by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6214](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6214)
* Fix #4340: Add a button to show hidden patterns in Pattern Access Terminal by @Azercoco in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6222](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6222)
* Fix #2929: Add option to show only pattern providers with empty pattern slots by @62832 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6226](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6226)
* Add ID search mode to terminals by @flier268 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6164](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6164)
* Fix #3890: Add indicator for craftable items when displaying quantities by @62832 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6218](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6218)
* Fix #5382: Better spatial storage energy consumption formula by @Azercoco in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6229](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6229)
* Add Dyeing of Memory Card by @Azercoco in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6234](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6234)

Bug fixes & minor changes

* Optimize Recipe Lookup in Crafting Terminal by @shartte in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6215](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6215)
* Hopefully fix #6112: remove level.hasChunkAt(pos) check by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6208](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6208)
* Fix #6209: Unloading P2Ps sending block updates by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6219](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6219)
* Fix #6221: Fix several blocks/parts not saving config changes by @shartte in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6223](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6223)
* Fix #6210: Render Spatial Anchor overlay down to bedrock again by @62832 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6228](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6228)
* Simplify P2P tunnel attunement API by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6230](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6230)
* use IConfigurableObject instead of PatternAccessTerminalPart by @Mari023 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6233](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6233)
* Switch to smithing table recipes for fluix tools by @62832 in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6236](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6236)
* Fix #74: Add warning when crafting CPU can't store items by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6238](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6238)
* Make using internal P2P stuff easier by @ramidzkh in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6239](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6239)
* Update neighbors shape when facades are attached or removed by @shartte in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6263](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6263)
* Fix #6256: ContainerItemStrategy and AEKeyType mismatch by @Technici4n in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6264](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6264)

New Contributors

* @flier268 made their first contribution in [https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6164](https://github.com/AppliedEnergistics/Applied-Energistics-2/pull/6164)

Full Changelog: [https://github.com/AppliedEnergistics/Applied-Energistics-2/compare/fabric/v11.0.0-alpha.5...fabric/v11.0.0](https://github.com/AppliedEnergistics/Applied-Energistics-2/compare/fabric/v11.0.0-alpha.5...fabric/v11.0.0)

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/all)

### [Architectury API (Fabric/Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-api) ([[Fabric 1.18.2] v4.4.58](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/3782873)⟶[[Fabric 1.18.2] v4.4.60](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/3786590))

#### [[Fabric 1.18.2] v4.4.60](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/3786590)

Architectury v4.4.60 for 1.18.2

Updated at 2022-05-10 22:52.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.18.2)

* Fix fluid testmod, add dummy init method to FluidStack (classloading 😍)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-api/files/all)

### [BLAST 💣](https://www.curseforge.com/minecraft/mc-mods/blast) ([BLAST-1.8.5.jar](https://www.curseforge.com/minecraft/mc-mods/blast/files/3782132)⟶[BLAST-1.9.jar](https://www.curseforge.com/minecraft/mc-mods/blast/files/3791213))

#### [BLAST-1.9.jar](https://www.curseforge.com/minecraft/mc-mods/blast/files/3791213)

BLAST - Changelog:

:

BLAST 1.9 - 1.18.2

* Removed bombards
* Added amethyst, frost and slime bombs, replacing the uses of the removed bombards
* Bombs now have a 1 second cooldown when used in gamemodes other than creative, the cooldown applies to all bomb items
* Reduced bomb maximum stack size to 16
* Reduced amethyst and frost bomb shrapnel count from 250 to 70
* Increased amethyst and frost bomb shrapnel speed from 0.6 to 1.4
* Removed amethyst shards bypassing invulnerability ticks
* Increased amethyst shard damage from 2 to 8
* Divided utility explosion damage (bombs, diamond bombs, golden bombs, etc...) by 3
* Reduced damage of icicles from 0.5 to 0.01
* Icicles bypass armor and no longer damage it

BLAST 1.8.5 - 1.18.2

* Added compatibility with Enchancement and other mods that may remove the Fortune enchantment from the registry

BLAST 1.8.4 - 1.18.2

* Updated to Minecraft 1.18.2

BLAST 1.8.3 - 1.18.1

* Added a recipe to allow crafting stripminers with TNT

BLAST 1.8.2 - 1.18

* Updated to Minecraft 1.18

BLAST 1.8.1 - 1.17.1

* Made the bombard recipe cheaper, now requiring iron ingots instead of iron blocks
* Made the bombard upgrade to amethyst bombard more expensive, now requiring an amethyst block instead of a single amethyst shard
* Fixed normal bombs and dirt bombs having inverted names
* Added a Romanian translation thanks to WindRat
* Added a Russian translation thanks to V972

BLAST 1.8 - 1.17.1

* Added a new item class, the bombards! These new weapons allow you to launch bombs and trigger bombs further, at the cost of disabling their destructive nature. Each bombard type is unique and will transform your bombs into something different!
* Bombard: The normal bombard, throws bombs and trigger bombs but disables their block destruction. Crafted from 6 iron blocks on the side, with a cauldron, a piston and a lever in the middle respectively from top to bottom.
* Slime Bombard: Obtained by smithing a Bombard with a slime block, this bombard covers the launched bombs in slime that will result in no damage being dealt to the entities in the explosion radius of the bombs, while giving the explosion a stronger knockback. Great for elytra and chicken launching!
* Amethyst Bombard: Obtained by smithing a Bombard with an amethyst shard, this bombard will not cause any explosion damage, but will spurt out amethyst shards with cumulative damage.
* Frost Bombard: Obtained by smithing an Amethyst Bombard with blue ice, this bombard will act similar to the amethyst bombard but will instead shatter your bombs into icicles. These icicles deal significantly less damage than amethyst shards (a quarter of a heart compared to 2 for the amethyst shard) but will cumulatively apply freezing to the hit entities!
* Added Dirt Bombs. Crafted by surrounding a bomb or trigger bomb in dirt blocks, this bomb will help you fill holes with dirt or terraform your land!
* Added Pearl Bombs. Crafted like other bombs with an ender pearl as the material, this bomb will have a silk touch effects on blocks it destroys. It doesn't explode, but still respects the same logic. All living entities inside the bomb's radius will be randomly teleported.
* Explosions from Blast will now properly be attributed to the player or entity who threw the bomb, meaning entities affected by the explosion will retaliate, and death messages will no longer hide your true intentions, like that one time when you threw a trigger bomb at your friend voluntarily and justified it as a misclick.
* Fixed an issue that caused stripminers and colddiggers to crash game clients

BLAST 1.7.1 - 1.17.1

* Fixed an issue that caused trigger bombs to explode with the player right after throwing them while running or flying
* Fixed an issue that caused bomb explosions to not always affect entities with the knockback they should

BLAST 1.7 - 1.17.1

* Added confetti bombs, exists in fuse and trigger variants
* Explodes into a burst of confetti! Perfect for all your festive needs!
* Crafted shapelessly from 7 paper, 1 gunpowder and 1 string / dust (fuse / trigger)
* Added a fuse smoking particle effect to fuse bombs
* Updated to 1.17.1

BLAST 1.6.2 - 1.17

* Fixed an issue that would cause the dry ice particles to not display properly
* Updated to 1.17, thanks to Spiralhalo!

[(41 more lines)](https://www.curseforge.com/minecraft/mc-mods/blast/files/3791213)

### [Better Ping Display [Fabric]](https://www.curseforge.com/minecraft/mc-mods/better-ping-display-fabric) ([BetterPingDisplay-Fabric-1.18.1-1.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/better-ping-display-fabric/files/3565287)⟶[BetterPingDisplay-Fabric-1.18.2-1.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/better-ping-display-fabric/files/3790832))

#### [BetterPingDisplay-Fabric-1.18.2-1.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/better-ping-display-fabric/files/3790832)

* Port this mod to Minecraft 1.18.2

### [Bewitchment](https://www.curseforge.com/minecraft/mc-mods/bewitchment) ([bewitchment-1.18-19.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3778159)⟶[bewitchment-1.18-20.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3790211))

#### [bewitchment-1.18-20.jar](https://www.curseforge.com/minecraft/mc-mods/bewitchment/files/3790211)

-merge [https://github.com/MoriyaShiine/bewitchment/pull/281](https://github.com/MoriyaShiine/bewitchment/pull/281)

### [Biome Makeover](https://www.curseforge.com/minecraft/mc-mods/biome-makeover) ([biomemakeover-FABRIC-1.18.2-1.4.19.jar](https://www.curseforge.com/minecraft/mc-mods/biome-makeover/files/3782287)⟶[biomemakeover-FABRIC-1.18.2-1.4.20.jar](https://www.curseforge.com/minecraft/mc-mods/biome-makeover/files/3788318))

#### [biomemakeover-FABRIC-1.18.2-1.4.20.jar](https://www.curseforge.com/minecraft/mc-mods/biome-makeover/files/3788318)

* Fix altar crashing under some unusual circumstances

### [Botania (Fabric)](https://www.curseforge.com/minecraft/mc-mods/botania-fabric) ([Botania-1.18.2-431-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3755268)⟶[Botania-1.18.2-432-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3789681))

#### [Botania-1.18.2-432-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/botania-fabric/files/3789681)

[https://botaniamod.net/changelog.php#1-18-2-432-fake](https://botaniamod.net/changelog.php#1-18-2-432-fake)

### [Can You Trash It?](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it) ([can-you-trash-it-1.0.3](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it/files/3598312)⟶[can-you-trash-it-1.0.5](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it/files/3788274))

#### [can-you-trash-it-1.0.5](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it/files/3788274)

Fixed the deprecated Screen Handlers!

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it/files/all)

### [Creeper Overhaul](https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul) ([[Fabric] Creeper Overhaul 1.3.0](https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul/files/3676159)⟶[[Fabric] Creeper Overhaul 1.3.1](https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul/files/3787154))

#### [[Fabric] Creeper Overhaul 1.3.1](https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul/files/3787154)

Fixed Jungle Creepers spawning in daylight

### [Deep Mob Learning: Simulacrum](https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning-simulacrum) ([simulacrum-0.5.3-beta.jar](https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning-simulacrum/files/3680470)⟶[simulacrum-0.5.4-beta.jar](https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning-simulacrum/files/3785658))

#### [simulacrum-0.5.4-beta.jar](https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning-simulacrum/files/3785658)

* Fix deprecated use of screenhandler registry

### [DeepslateCutting](https://www.curseforge.com/minecraft/mc-mods/deepslatecutting) ([[1.18.2] v1.3.2](https://www.curseforge.com/minecraft/mc-mods/deepslatecutting/files/3668296)⟶[[1.18.2] v1.3.3](https://www.curseforge.com/minecraft/mc-mods/deepslatecutting/files/3789579))

#### [[1.18.2] v1.3.3](https://www.curseforge.com/minecraft/mc-mods/deepslatecutting/files/3789579)

Version 1.3.3

* Switch dependency to maybe-data over maybe-more-data to fix server resource loading
* Update FAPI dependency to use Transitive access wideners, removing the need for DeepslateCuttingStairsBlock
* Generally update dependencies and clean code

### [Dual Riders](https://www.curseforge.com/minecraft/mc-mods/dual-riders) ([dual_riders-1.18.1-1.0.5.jar](https://www.curseforge.com/minecraft/mc-mods/dual-riders/files/3576954)⟶[dual_riders-1.18.2-1.1.1-fabric.jar](https://www.curseforge.com/minecraft/mc-mods/dual-riders/files/3783155))

#### [dual_riders-1.18.2-1.1.1-fabric.jar](https://www.curseforge.com/minecraft/mc-mods/dual-riders/files/3783155)

* -Updated icon -Uses new obfuscation system [(c8e8b7a)](https://www.flytre.net/commit/c8e8b7a)

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/dual-riders/files/all)

### [Enchancement](https://www.curseforge.com/minecraft/mc-mods/enchancement) ([enchancement-1.18-10.jar](https://www.curseforge.com/minecraft/mc-mods/enchancement/files/3782808)⟶[enchancement-1.18-15.jar](https://www.curseforge.com/minecraft/mc-mods/enchancement/files/3788303))

#### [enchancement-1.18-15.jar](https://www.curseforge.com/minecraft/mc-mods/enchancement/files/3788303)

-fix [https://github.com/MoriyaShiine/enchancement/issues/6](https://github.com/MoriyaShiine/enchancement/issues/6)

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/enchancement/files/all)

### [FTB Chunks (Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric) ([ftb-chunks-fabric-1802.3.6-build.138.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric/files/3780112)⟶[ftb-chunks-fabric-1802.3.6-build.145.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric/files/3787347))

#### [ftb-chunks-fabric-1802.3.6-build.145.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric/files/3787347)

* Merge branch '1.18/dev' into 1.18/main - Michael Hillcox
* fix: arch dep - Michael Hillcox

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric/files/all)

### [Flytre Lib (FlytreLib)](https://www.curseforge.com/minecraft/mc-mods/lib) ([flytre_lib-1.18.2-1.8.0-fabric.jar](https://www.curseforge.com/minecraft/mc-mods/lib/files/3779846)⟶[flytre_lib-1.18.2-1.8.1-fabric.jar](https://www.curseforge.com/minecraft/mc-mods/lib/files/3789249))

#### [flytre_lib-1.18.2-1.8.1-fabric.jar](https://www.curseforge.com/minecraft/mc-mods/lib/files/3789249)

* -Added PlayerSearchUtils -Fixed a bug with UpgradeHandlers missing a method -Added recipe type, particle, and sound event agnostic register methods [(519fec4)](https://github.com/flytre/flytrelib/commit/519fec4)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/lib/files/all)

### [GeckoLib](https://www.curseforge.com/minecraft/mc-mods/geckolib) ([geckolib-fabric-1.18-3.0.38.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3755162)⟶[geckolib-fabric-1.18-3.0.42.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3785825))

#### [geckolib-fabric-1.18-3.0.42.jar](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/3785825)

3.0.42

* Using proper packet system for Rocket Entity for the example mod.

#### [11 more entries](https://www.curseforge.com/minecraft/mc-mods/geckolib/files/all)

### [Grim's Transportables](https://www.curseforge.com/minecraft/mc-mods/grims-transportables) ([1.1](https://www.curseforge.com/minecraft/mc-mods/grims-transportables/files/3565219)⟶[1.2](https://www.curseforge.com/minecraft/mc-mods/grims-transportables/files/3787169))

#### [1.2](https://www.curseforge.com/minecraft/mc-mods/grims-transportables/files/3787169)

1.18.2 fixes & changes to the config, you can now uncap teleport distance for rails.

### [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs) ([kubejs-fabric-1802.5.1-build.395.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3783244)⟶[kubejs-fabric-1802.5.2-build.420.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3791255))

#### [kubejs-fabric-1802.5.2-build.420.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/3791255)

* Merge remote-tracking branch 'origin/1.18/main' into 1.18/main - LatvianModder
* Merge branch '1.18/dev' into 1.18/main - LatvianModder
* Added textLines: [] support in text Painter object, fixed offsets - LatvianModder

#### [13 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs/files/all)

### [Mod Menu](https://www.curseforge.com/minecraft/mc-mods/modmenu) ([Mod Menu v3.2.1 for 1.18.2](https://www.curseforge.com/minecraft/mc-mods/modmenu/files/3767908)⟶[Mod Menu v3.2.2 for 1.18.2](https://www.curseforge.com/minecraft/mc-mods/modmenu/files/3789482))

#### [Mod Menu v3.2.2 for 1.18.2](https://www.curseforge.com/minecraft/mc-mods/modmenu/files/3789482)

* Updated Chinese (Traditional) translation
* Updated Chinese (Simplified) translation
* Updated Chinese (Literary) translation
* Fix search terms
* Updated Thai translation
* Updated Spanish (Mexico) translation
* Updated Thai translation
* Updated Thai translation
* Updated Russian translation
* Updated Russian translation
* Updated Estonian translation
* Updated Estonian translation
* Updated Russian translation
* Updated Thai translation
* Updated Chinese (Traditional) translation
* Updated Thai translation
* Updated Thai translation
* Updated Chinese (Simplified) translation
* Added Thai translation
* Updated Chinese (Simplified) translation
* Updated Vietnamese translation
* Updated Vietnamese translation
* Updated Chinese (Simplified) translation
* Updated Chinese (Simplified) translation
* Updated Chinese (Simplified) translation
* Updated Chinese (Simplified) translation
* Updated Chinese (Simplified) translation
* Added Vietnamese translation
* Updated Chinese (Simplified) translation
* Updated Malay translation
* Updated Czech translation
* Updated Malay translation
* Updated Russian translation
* Updated Polish translation
* Updated Japanese translation
* Updated Estonian translation
* Updated German translation
* Added Czech translation
* Updated Polish translation
* Updated Polish translation

### [Probably Chests](https://www.curseforge.com/minecraft/mc-mods/probably-chests) ([Probably-Chests-0.4.2](https://www.curseforge.com/minecraft/mc-mods/probably-chests/files/3778845)⟶[Probably-Chests-0.4.3](https://www.curseforge.com/minecraft/mc-mods/probably-chests/files/3785849))

#### [Probably-Chests-0.4.3](https://www.curseforge.com/minecraft/mc-mods/probably-chests/files/3785849)

[0.4.3] - 5/9/2022

Fixed

* Fixed issue where mimics spawn in biomes they shouldn't
* Fixed issue where mimics spawn in the air
* fixed issue where mimics spawn way too frequently

### [Quests Additions (Fabric)](https://www.curseforge.com/minecraft/mc-mods/quests-additions-fabric) ([questsadditions-fabric-1.18.2-1.3.0b.jar](https://www.curseforge.com/minecraft/mc-mods/quests-additions-fabric/files/3781017)⟶[questsadditions-fabric-1.18.2-1.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/quests-additions-fabric/files/3785027))

#### [questsadditions-fabric-1.18.2-1.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/quests-additions-fabric/files/3785027)

* "Create structure" preview now shows fluids!
* New option in "Create structure" task to show the entire structure instead of layer by layer.

### [Repurposed Structures (Fabric)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric) ([Repurposed Structures v4.1.6 (1.18.2 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3759833)⟶[Repurposed Structures v4.1.7 (1.18.2 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3789696))

#### [Repurposed Structures v4.1.7 (1.18.2 MC)](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures-fabric/files/3789696)

(V.4.1.7 Changes) (1.18.2 Minecraft)

Outposts:

Fixed Warped Outposts being very rare.

Shipwrecks:

Fixed Crimson Shipwreck being very rare.

Nether Structures:

Slightly decreased the spawnrates of all Nether Outposts, Nether Pyramid, Nether Ruins, Nether Shipwrecks, Nether Temples, Nether Strongholds, Nether Mineshafts, and Nether Villages. Hopefully this helps make the Nether a little less crowded.

Villages:

Fixed Badland Village's trapdoor plant pots to have grass block/podzol inside instead of air.

Added stable_1 building to spawn in non-zombied Badlands Villages rarely.

Dark Forest Village Churches and Stable buildings has some Granite Stairs/Slabs replaced with Dark Oak Stairs/Slabs

Swamp Villages overall has their Moss Blocks on ground replaced with various terracotta blocks. Moss Block and Moss Carpet has been removed from the outside of the Swamp Village's mud igloo houses and instead, has Moss Carpet on floor inside.

Fixed Swamp Villages spawning Structure Void blocks sometimes.

Lang:

it_it.json lang file added by Zano1999! Thank you!

(V.4.1.6 Changes) (1.18.2 Minecraft)

Misc:

Fixed crash when certain features are spawned outside of worldgen. (Made some mixins safer and only apply their changes when during worldgen)

Fixed mixins that reduces amount of jungle bushes in some RS structures.

Fixed mixins that removes lava lakes from spawning in some RS structures.

(V.4.1.5 Changes) (1.18.2 Minecraft)

Map Trades:

Fixed crash with Villager mods that add Villagers with more than 5 trade tiers.

(V.4.1.4 Changes) (1.18.2 Minecraft)

Biome Tags:

Fixed "#byg:isicy" entry in repurposedstructures:collections/icy biome tag so it includes icy byg biomes properly.

(V.4.1.3 Changes) (1.18.2 Minecraft)

Biome Tags:

Fixed the biome tags that RS uses so it now spawns structures in modded/datapack biomes that are using forge's or c's namespaced tags. If you're using an RS config datapack, the new v5 of the config datapack should have the updated data/repurposed_structures/tags/worldgen/biome/collections tags that should work now.

(V.4.1.2 Changes) (1.18.2 Minecraft)

Shipwrecks:

Fixed End Shipwrecks so they now actually spawn. Was off by one in calculation for checking for land.

(V.4.1.1 Changes) (1.18.2 Minecraft)

Loot:

Fixed all structure maps in RS loot tables (chests and shulker boxes) so that the structure maps actually locates structures now. Issue was the way explorer maps gets what structure to track was changed in 1.18.2 and I did not realize it. If you downloaded a config datapack already, replace the loot table folder in it with v4 config datapack's loot table folder. (Note: structures at the edge of the map's area may not show the icon for the structure's location. This is vanilla behavior. Don't ask why)

Shipwrecks:

Fixed End Shipwrecks not spawning.

(V.4.1.0 Changes) (1.18.2 Minecraft)

Monuments:

Added Jungle, Icy, Desert, and Nether Monuments! Can be found from Cartographer's map trades too!

Tags:

Updated several biome tags so some RS structures can spawn in the correct modded/datapack biomes better.

Mod Compat:

Added dedicated compat with importing End Remastered's eyes into correct Repurposed Structures's structures.

The rsspawner json file's entries now can have "optional": true to make the entry no longer error if the mob is not present in the registry. Good for marking modded mobs as optional when overriding the rsspawner json files so that you can later remove that mod and not cause the json file to explode.

Lang:

Fixed typo in zh_cn.json file that prevented it from loading properly.

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-fabric-1801.1.9-build.135.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3742384)⟶[rhino-fabric-1802.1.10-build.155.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3789486))

#### [rhino-fabric-1802.1.10-build.155.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3789486)

* Merge branch '1.18/dev' into 1.18/main - LatvianModder
* More unit tests - LatvianModder
* Made gradlew executable - LatvianModder
* Updated build.yml again - LatvianModder
* Updated build.yml - LatvianModder
* Added scope tests - LatvianModder
* Implemented optional chaining (?. operator), made tests the same - LatvianModder
* Implemented optional chaining (?. operator) - LatvianModder
* Added editorconfig - LatvianModder

#### [7 more entries](https://www.curseforge.com/minecraft/mc-mods/rhino/files/all)

### [RightClickHarvest](https://www.curseforge.com/minecraft/mc-mods/rightclickharvest-fabric) ([V2.0.0 [1.16.x-1.18.x]](https://www.curseforge.com/minecraft/mc-mods/rightclickharvest-fabric/files/3760868)⟶[V2.0.3 [1.16.x - 1.18.x]](https://www.curseforge.com/minecraft/mc-mods/rightclickharvest-fabric/files/3787307))

#### [V2.0.3 [1.16.x - 1.18.x]](https://www.curseforge.com/minecraft/mc-mods/rightclickharvest-fabric/files/3787307)

Changelog

Features

* Update icon.

Fixes

* No bugs were fixed in this release.

Closed Issues: None

[Full Changelog](https://github.com/JamCoreModding/RightClickHarvestFabric/compare/2.0.2...2.0.3)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/rightclickharvest-fabric/files/all)

### [ShulkerBoxTooltip](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip) ([[1.18.2] ShulkerBoxTooltip-3.0.7+1.18.2](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip/files/3709224)⟶[[1.18.2] ShulkerBoxTooltip-3.0.8+1.18.2](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip/files/3790208))

#### [[1.18.2] ShulkerBoxTooltip-3.0.8+1.18.2](https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip/files/3790208)

3.0.8+1.18.2:

* (Maybe) Fixed crashes related to item stack sharing. (thanks poppy technology!)

### [ThonkUtil](https://www.curseforge.com/minecraft/mc-mods/thonkutil) ([[1.18.2] ThonkUtil 2.12.0+1.18](https://www.curseforge.com/minecraft/mc-mods/thonkutil/files/3709203)⟶[[1.18.2] ThonkUtil 2.14.1+1.18](https://www.curseforge.com/minecraft/mc-mods/thonkutil/files/3785941))

#### [[1.18.2] ThonkUtil 2.14.1+1.18](https://www.curseforge.com/minecraft/mc-mods/thonkutil/files/3785941)

* damn it (Jab125)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/thonkutil/files/all)

### [Trinkets (Fabric)](https://www.curseforge.com/minecraft/mc-mods/trinkets-fabric) ([trinkets-3.3.0.jar](https://www.curseforge.com/minecraft/mc-mods/trinkets-fabric/files/3669842)⟶[trinkets-3.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/trinkets-fabric/files/3786685))

#### [trinkets-3.3.1.jar](https://www.curseforge.com/minecraft/mc-mods/trinkets-fabric/files/3786685)

No changelog available.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/trinkets-fabric/files/all)

### [WTHIT](https://www.curseforge.com/minecraft/mc-mods/wthit) ([[1.18.2] 4.10.1](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3780925)⟶[[1.18.2] 4.10.3](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3791303))

#### [[1.18.2] 4.10.3](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3791303)

[https://github.com/badasintended/wthit/releases/tag/4.10.3](https://github.com/badasintended/wthit/releases/tag/4.10.3)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/wthit/files/all)

### [XP Obelisk](https://www.curseforge.com/minecraft/mc-mods/xp-obelisk) ([xp_obelisk-0.3.8.r_for_1.18.x_Fabric.jar](https://www.curseforge.com/minecraft/mc-mods/xp-obelisk/files/3767863)⟶[xp_obelisk-0.3.9.b_for_1.18.x_Fabric.jar](https://www.curseforge.com/minecraft/mc-mods/xp-obelisk/files/3789617))

#### [xp_obelisk-0.3.9.b_for_1.18.x_Fabric.jar](https://www.curseforge.com/minecraft/mc-mods/xp-obelisk/files/3789617)

Added:

* Patchouli book (Optional)
* XP Berrie / seed and interactions
* Particle effect on XP Storage in Vacuum Mode
* Soul Copper Nuggets
* minor Recipe changes

## Removed

* [Architectury API (UNUSED)](https://www.curseforge.com/minecraft/mc-mods/architectury-fabric)
* [KubeJS (Old)](https://www.curseforge.com/minecraft/mc-mods/kubejs-fabric)
* [Op Items Tab](https://www.curseforge.com/minecraft/mc-mods/op-items-tab)
* [project-597284](https://www.curseforge.com/minecraft/mc-mods/project-597284)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
