# All-of-Fabric-5 0.2.7⟶All-of-Fabric-5 0.2.8

## Added

* [AE2 Things](https://www.curseforge.com/minecraft/mc-mods/ae2things)
* [Artifality](https://www.curseforge.com/minecraft/mc-mods/artifality)
* [Basic Shields [Fabric]](https://www.curseforge.com/minecraft/mc-mods/basic-shields-fabric)
* [Can You Trash It?](https://www.curseforge.com/minecraft/mc-mods/can-you-trash-it)
* [Decorative Blocks](https://www.curseforge.com/minecraft/mc-mods/decorative-blocks)
* [Dwarf Coal (Fabric)](https://www.curseforge.com/minecraft/mc-mods/dwarf-coal-fabric)
* [FTB Chunks (Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-fabric)
* [FTB Library (Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-library-fabric)
* [FTB Ranks (Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-ranks-fabric)
* [FTB Teams (Fabric)](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-fabric)
* [Fabric Shield Lib](https://www.curseforge.com/minecraft/mc-mods/fabric-shield-lib)

## Updated

### [AdventureZ](https://www.curseforge.com/minecraft/mc-mods/adventurez) ([adventurez-1.4.6.jar](https://www.curseforge.com/minecraft/mc-mods/adventurez/files/3571849)⟶[adventurez-1.4.7.jar](https://www.curseforge.com/minecraft/mc-mods/adventurez/files/3595812))

#### [adventurez-1.4.7.jar](https://www.curseforge.com/minecraft/mc-mods/adventurez/files/3595812)

* Updated russian lang by Shelbikk
* Changed iris compat
* Fixed blaze guardian crash

### [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) ([10.0.0-beta.3 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3590131)⟶[10.0.0-beta.4 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3595465))

#### [10.0.0-beta.4 [FABRIC]](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/3595465)

What's Changed

* Internal overhaul of recipe transfer. It should now work for all relevant recipe types and correctly import amounts for items/fluids. It also uses better prioritization when encoding items into patterns.
* NOTE: Recipe transfer refers to pressing the "+" button in a JEI or REI recipe while an AE screen is open
* Recipe transfer will now use Vanilla ingredient rules when being used in a crafting terminal (this should now work a lot better with damaged items or items with NBT)
* The pattern encoder will now switch modes automatically based on the recipe being transfered (crafting table recipes -> crafting mode, everything else -> processing mode)
* For processing patterns, recipe transfer will now group together multiple copies of the same ingredient and sum their amounts

Fixes

* Fix middle mouse button not opening the "set amount" screen in the pattern encoder in survival mode (#5968)
* Fix unpowered drives/chests not showing the black cell LEDs (#5949)
* Fix network tool not saving its contents when existing items were being split/stacked in the UI (#5955)
* Fix that storage bus/formation plane would not show the contents of the config slots below the second row when being opened for the first time after being loaded (#5969)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2/files/all)

### [Applied Energistics 2 Wireless Terminals](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals) ([10.0.0-beta.3](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3591507)⟶[10.0.0-beta.4](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3595632))

#### [10.0.0-beta.4](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals/files/3595632)

update ae2 rework wireless Universal Terminal: upgrade count and power capacity is now based on the amount of installed terminals the infinity booster card is now an actual upgrade card (magnet card will follow in a later update) correctly align cycle terminals button (it will no longer clip with another button) correctly align upgrades so they don't clip with viewcells some rework to how stuff is stored internally

### [BCLib](https://www.curseforge.com/minecraft/mc-mods/bclib) ([bclib-1.2.1-1.18/1.18.1](https://www.curseforge.com/minecraft/mc-mods/bclib/files/3585514)⟶[bclib-1.2.2-1.18/1.18.1](https://www.curseforge.com/minecraft/mc-mods/bclib/files/3594436))

#### [bclib-1.2.2-1.18/1.18.1](https://www.curseforge.com/minecraft/mc-mods/bclib/files/3594436)

Features:

* Enhanced biome source fixer.

Fixes:

* Fixed possible null biome key in BCLib biomes.

### [Dank Storage Fabric](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric) ([dankstorage-1.18.1-3.3.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3580905)⟶[dankstorage-1.18.1-3.4.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3594342))

#### [dankstorage-1.18.1-3.4.jar](https://www.curseforge.com/minecraft/mc-mods/dank-storage-fabric/files/3594342)

* Fixed upgrading message
* Fixed upgrading docks taking the dank out
* made dock upgrades stackable
* added command for setting frequency tiers
* Fix docks upgraded with cards having the name of the previous tier
* Added tooltips for what the buttons do
* Add item preview
* Readd pickup mode keybind
* change slot locking to a keybind instead of being hardcoded to ctrl + click
* Changed "Normal" pickup mode to "None"

### [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions) ([EnchantmentDescriptions-Fabric-1.18.1-9.0.7.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3586039)⟶[EnchantmentDescriptions-Fabric-1.18.1-9.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3595253))

#### [EnchantmentDescriptions-Fabric-1.18.1-9.0.8.jar](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3595253)

* Added config options to only display tooltips on books or when in the enchantment table gui. [(1bf95af)](https://github.com/Darkhax-Minecraft/Enchantment-Descriptions/commit/1bf95af)
* Compiled against newer Forge,JEI,Catalogue, and Fabric,REI,ModMenu. [(162fcdb)](https://github.com/Darkhax-Minecraft/Enchantment-Descriptions/commit/162fcdb)

This project is made possible by [Patreon](https://www.patreon.com/Darkhax?enchdesc) support from players like you. Thank you!

* Rempler
* lothrazar
* SuperslowJelly
* Spencer Gilbert
* Adam Y
* Pongo Sapiens
* Darkosto

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/all)

### [Equipment Compare [Fabric]](https://www.curseforge.com/minecraft/mc-mods/equipment-compare-fabric) ([EquipmentCompare-1.18-fabric-1.2.9.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare-fabric/files/3548173)⟶[EquipmentCompare-1.18.1-fabric-1.2.11.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare-fabric/files/3595493))

#### [EquipmentCompare-1.18.1-fabric-1.2.11.jar](https://www.curseforge.com/minecraft/mc-mods/equipment-compare-fabric/files/3595493)

1.2.11

* Fixed a bug where the equipped badge's background color did not match custom Legendary Tooltips background colors.
* Updated mod icon.
* Improved support for new 1.18 tooltip components.
* Fixed a server crash when attempting to install Equipment Compare on a dedicated server.

1.2.10

* Added support for Legendary Tooltips 1.2 features.
* Fixed a bug where comparison tooltips sometimes rendered improperly.

### [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) ([[1.18.1] Fabric API 0.45.1+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3591502)⟶[[1.18.1] Fabric API 0.45.2+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3595229))

#### [[1.18.1] Fabric API 0.45.2+1.18](https://www.curseforge.com/minecraft/mc-mods/fabric-api/files/3595229)

* Bump version. (modmuss50)
* Fix returning from the end always going to world spawn (#1946) (KosmX)

### [Iceberg [Fabric]](https://www.curseforge.com/minecraft/mc-mods/iceberg-fabric) ([Iceberg-1.18-fabric-1.0.27.jar](https://www.curseforge.com/minecraft/mc-mods/iceberg-fabric/files/3546762)⟶[Iceberg-1.18.1-fabric-1.0.37.jar](https://www.curseforge.com/minecraft/mc-mods/iceberg-fabric/files/3596567))

#### [Iceberg-1.18.1-fabric-1.0.37.jar](https://www.curseforge.com/minecraft/mc-mods/iceberg-fabric/files/3596567)

1.0.37

* Reverted first change from 1.0.35, as it was causing conflicts with other mod's tooltips.

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/iceberg-fabric/files/all)

### [Industrial Revolution](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution) ([Industrial Revolution 1.13.2-BETA](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution/files/3579919)⟶[Industrial Revolution 1.13.4-BETA](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution/files/3596488))

#### [Industrial Revolution 1.13.4-BETA](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution/files/3596488)

* Fix init crashes

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/industrial-revolution/files/all)

### [Inventory Sorting](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting) ([InventorySorter-1.8.3-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3591467)⟶[InventorySorter-1.8.4-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3595625))

#### [InventorySorter-1.8.4-1.18.jar](https://www.curseforge.com/minecraft/mc-mods/inventory-sorting/files/3595625)

Fix keybind not sorting inventories if "Sorting sorts mouse hovered inv is set to false". Setting this to false should sort the opened inventory by default.

Blacklist the Guild's quest screen by default [https://github.com/kyrptonaught/Inventory-Sorter/issues/66](https://github.com/kyrptonaught/Inventory-Sorter/issues/66)

Bumps dependendcies.

### [Modern Industrialization](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization) ([Modern Industrialization v1.0.3](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3586764)⟶[Modern Industrialization v1.0.4](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3595287))

#### [Modern Industrialization v1.0.4](https://www.curseforge.com/minecraft/mc-mods/modern-industrialization/files/3595287)

Please visit our github repository for a changelog: [https://github.com/AztechMC/Modern-Industrialization/releases](https://github.com/AztechMC/Modern-Industrialization/releases).

### [Patchouli (Fabric)](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric) ([Patchouli-1.18.1-63-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3582351)⟶[Patchouli-1.18.1-64-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3594392))

#### [Patchouli-1.18.1-64-FABRIC.jar](https://www.curseforge.com/minecraft/mc-mods/patchouli-fabric/files/3594392)

[https://github.com/VazkiiMods/Patchouli/releases/tag/release-1.18.1-64](https://github.com/VazkiiMods/Patchouli/releases/tag/release-1.18.1-64)

### [Spectrum](https://www.curseforge.com/minecraft/mc-mods/spectrum) ([1.2.1-midgame2](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3590631)⟶[1.2.2-midgame3](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3592655))

#### [1.2.2-midgame3](https://www.curseforge.com/minecraft/mc-mods/spectrum/files/3592655)

Moved lots of blocks and items into tags, simplifying and unifying recipes

Fixed a bug

### [The Guild](https://www.curseforge.com/minecraft/mc-mods/guild) ([[Fabric 1.18.1] The Guild 0.3.6](https://www.curseforge.com/minecraft/mc-mods/guild/files/3562405)⟶[[Fabric 1.18.1] The Guild 0.3.7](https://www.curseforge.com/minecraft/mc-mods/guild/files/3592726))

#### [[Fabric 1.18.1] The Guild 0.3.7](https://www.curseforge.com/minecraft/mc-mods/guild/files/3592726)

0.3.7

* Added new configurable values maxProfessions and maxQuestsPerProfession that limit the max acceptable Professions and the max available quest for said Professions. Both of these values are capped at 7.
* Updated russian translations thanks to Shelbikk [#12](https://github.com/Fulmineo64/Guild/issues/12)!
* Updated the textures for the Guild Master and the Guild Master Table thanks to Alexander210806!

0.3.6

* Updated to Minecraft 1.18.1
* Update the textures of the Guild Master and the Guild Master's Table thanks to Alexander210806!

0.3.5

* Updated to Minecraft 1.18

0.3.4

* Updated Chinese translations thanks to 103sakamoto!

0.3.3

* Added missing title to The Guild's configuration screen

0.3.2

* Added configuration for the following values: "Available quests expiration ticks", "Quest generation ticks", "Max quests per generation" and "Display unlocked tasks and rewards"
* Added ModMenu integration

0.3.1

* Changed Beekeeper Guild Master's trade level from 2 to 3
* Added workaround for mods that call readCustomDataFromNbt on ServerPlayerEntity multiple times

0.3.0

* Added Beekeeper profession
* Added nbt support for entities, useful to specify a subset of entities or even players
* Added support for nbt tags for icons with the property "icon_tag"
* Reworked the Quests Screen to greatly improve performance and to better handle stack's custom names

0.2.0

* Changed "entity" task type to "slay".
* Cleaned up accesswideners
* Added new "nbt" property to Quest Professions useful to request (or reward) items with custom nbt
* Updated Russian translations (thanks to M1XB0X)
* Added new quests to the Guard Profession involving illagers
* Added new rewards exclusive to the Guard Profession: Steak starting at lvl 5 and Regeneration Potion starting at lvl 10

0.1.2

* Added new Profession, the Chef
* Added cooked variants of foods to their respective professions (meat for hunters, fishes and kelp for fisherman)
* Improved translation system for Professions
* Buffed exps and rewards for most Professions
* Revisited the level distribution of tasks for all the Professions
* Now Professions with the same Identifier placed in different namespaces will be merged instead of overridden

0.1.1

* Changed the commands introduced in 0.1.0 to be available only to operators and above
* Added example datapack
* Added back "label" property to Professions as now it works properly on servers

0.1.0

* Removed "label" property from Professions as it doesn't work properly in multiplayer
* Updated to Fabric API 0.40.1+1.17
* Added over-complicated Profession Requirements system, useful to limit early access to professions
* Added /guild licence <profession> command to generate profession licences
* Added /guild exp <profession> <exp> command to change the player's profession exp
* Added /guild quest <profession> command to generate a new quest for the specified profession
* Centered the level text on Quests Screen

[(35 more lines)](https://www.curseforge.com/minecraft/mc-mods/guild/files/3592726)

### [WTHIT](https://www.curseforge.com/minecraft/mc-mods/wthit) ([[1.18.1] 4.4.0](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3569820)⟶[[1.18.1] 4.4.1](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3594970))

#### [[1.18.1] 4.4.1](https://www.curseforge.com/minecraft/mc-mods/wthit/files/3594970)

[https://github.com/badasintended/wthit/releases/tag/4.4.1](https://github.com/badasintended/wthit/releases/tag/4.4.1)

### [You're in Grave Danger](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger) ([youre-in-grave-danger-1.2.10](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3585674)⟶[youre-in-grave-danger-1.2.11](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3594863))

#### [youre-in-grave-danger-1.2.11](https://www.curseforge.com/minecraft/mc-mods/youre-in-grave-danger/files/3594863)

Custom hitboxes/voxelshapes can now use values with decimal points. Cubes smaller than one cubic pixel can be used.

If a requiem player shell dies, their graves will now be the same as the shell user.

Fixed an issue where `/reload` did not work

Added a config for changing the glowing effect render distance

### [oωo (owo-lib)](https://www.curseforge.com/minecraft/mc-mods/owo-lib) ([[1.18+] oωo - 0.3.13](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3587789)⟶[[1.18+] oωo - 0.3.14](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3591891))

#### [[1.18+] oωo - 0.3.14](https://www.curseforge.com/minecraft/mc-mods/owo-lib/files/3591891)

Fix crash caused by an action registered via the RegistryHelper registering a new entry into its registry, make KawaiiUtil part of the public API

## Removed

* [FastBench for Fabric](https://www.curseforge.com/minecraft/mc-mods/fastbench-for-fabric)
* [Wilder World](https://www.curseforge.com/minecraft/mc-mods/wilder-world)
* [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap)
* [Xaero's World Map](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
