from os.path import exists
from pathlib import Path
import json
import os

f = open('input.json')
data = json.load(f)

variance = ['.array": "Array",',\
  '.bevel_skeleton": "Bevel Skeleton",',\
  '.bevel_creeper": "Bevel Creeper",',\
  '.braced_planks-side": "Braced Planks Side",',\
  '.braced_planks-top": "Braced Planks Top",',\
  '.braid": "Braid",',\
  '.bismuth": "Bismuth",',\
  '.chaotic": "Chaotic",',\
  '.chaotic_bricks": "Chaotic Bricks",',\
  '.chaotic_medium": "Chaotic Medium",',\
  '.chaotic_small": "Chaotic Small",',\
  '.circular": "Circular",',\
  '.cracked": "Cracked",',\
  '.cracked_bricks": "Cracked Bricks",',\
  '.crude_paneling": "Crude Panelling",',\
  '.crude_horizontal_planks": "Crude Horizontal Planks",',\
  '.crude_vertical_planks": "Crude Vertical Planks",',\
  '.classic": "Classic",',\
  '.cuts": "Cut",',\
  '.dent": "Dented",',\
  '.emboss": "Emboss",',\
  '.encased": "Encased",',\
  '.encased_bricks": "Encased Brick",',\
  '.encased_planks": "Encased Planks",',\
  '.encased_smooth": "Encased Smooth",',\
  '.encased_large_planks": "Encased Large Planks",',\
  '.french": "French",',\
  '.french_1": "French 1",',\
  '.french_2": "French 2",',\
  '.french_alt": "French Alternative",',\
  '.glyphs": "Glyphs",',\
  '.indent": "Indent",',\
  '.jellybean": "Jellybean",',\
  '.largeornate": "Large Ornate",',\
  '.large_planks": "Large Planks",',\
  '.layers": "Layers",',\
  '.legacy": "Legacy",',\
  '.llama": "Llama",',\
  '.log_bordered": "Log Bordered",',\
  '.marker": "Marker",',\
  '.masonry": "Masonry",',\
  '.mosaic": "Mosaic",',\
  '.neon": "Neon",',\
  '.neon_panel": "Neon Panel",',\
  '.ornate": "Ornate",',\
  '.panel": "Panel",',\
  '.panelclassic": "Panel Classic",',\
  '.paneling": "Paneling",',\
  '.pillar-side": "Side",',\
  '.pillar-top": "Top",',\
  '.poison": "Poison",',\
  '.prism": "Prism",',\
  '.raw": "Raw",',\
  '.road": "Road",',\
  '.shipping_crate": "Shipping Crate",',\
  '.slanted": "Slanted",',\
  '.small": "Small",',\
  '.small_bricks": "Small Bricks",',\
  '.large_bricks": "Large Bricks",',\
  '.smooth": "Smooth",',\
  '.soft": "Soft",',\
  '.soft_bricks": "Soft Bricks",',\
  '.solid": "Solid",',\
  '.solid_bricks": "Solid Bricks",',\
  '.stacked": "Stacked",',\
  '.sunken": "Sunken",',\
  '.tiles_med": "Medium Tiles",',\
  '.tiles_large": "Large Tiles",',\
  '.tiles_large_bismuth": "Large Tiles Bismuth",',\
  '.tiles_medium": "Medium Tiles",',\
  '.tiles_medium_bismuth": "Medium Tiles Bismuth",',\
  '.tiles_small": "Small Tiles",',\
  '.triple_bricks": "Triple Bricks",',\
  '.twisted-top": "Twisted Top",',\
  '.twisted-side": "Twisted Side",',\
  '.vertical_planks": "Vertical Planks",',\
  '.weaver": "Weaver",',\
  '.wacky": "Wacky",',\
  '.zag": "Zag",']

excess = ['.brinstar": "Brinstar",',\
  '.brinstarshale": "Brinstarshale",',\
  '.classicspatter": "Classic Spatter",',\
  '.guts": "Guts",',\
  '.gutsdark": "Guts Dark",',\
  '.gutssmall": "Guts Small",',\
  '.lavabrinstar": "Lava Brinstar",',\
  '.lavabrown": "Lava Brown",',\
  '.lavaobsidian": "Lava Obsidian",',\
  '.lavastonedark": "Lavastone Dark",',\
  '.meat": "Meat",',\
  '.meatred": "Red Meat",',\
  '.meatredsmall": "Small Red Meat",',\
  '.meatsmall": "Small Meat",',\
  '.red": "Red",',\
  '.redsmall": "Small Red",',\
  '.bricks": "Bricks",',\
  '.bricks2": "Bricks 2",',\
  '.bricks3": "Bricks 3",',\
  '.bricks4": "Bricks 4",',\
  '.brick4": "Brick 4",',\
  '.cobble": "Cobble",',\
  '.chunky": "Chunky",',\
  '.happy": "Happy",',\
  '.horizontal": "Horizontal",',\
  '.hor-top": "Horizontal Top",',\
  '.vertical": "Vertical",',\
  '.vertical-uneven_log": "Vertical Uneven Log",',\
  '.netherbricks": "Nether Bricks",',\
  '.plate": "Plate",',\
  '.reinforced": "Reinforced",',\
  '.reinforced2": "Reinforced 2",',\
  '.vert": "Vertical 2",']

terrain = ['.cells": "Cells",',\
  '.cell": "Cell",',\
  '.crushed": "Crushed",',\
  '.embossed": "Embossed",',\
  '.embossed-side": "Embossed Side",',\
  '.embossed-top": "Embossed Top",',\
  '.four": "Four",',\
  '.fourornate": "Four Ornate",',\
  '.gem-bottom": "Gem Bottom",',\
  '.gem-side": "Gem Side",',\
  '.gem-top": "Gem Top",',\
  '.ornatelayer": "Ornate Layer",',\
  '.simple-bottom": "Simple Bottom",',\
  '.simple-side": "Simple Side",',\
  '.simple-top": "Simple Top",',\
  '.brick-side": "Brick Side",',\
  '.brick-top": "Brick Top",',\
  '.brick-bottom": "Brick Bottom",',\
  '.space": "Space",',\
  '.spaceblock": "Space Block",',\
  '.coin-top": "Coin Top",',\
  '.coin-top2": "Coin Top 2",',\
  '.coin-side": "Coin Side",',\
  '.coin-bottom": "Coin Bottom",',\
  '.coin-bottom2": "Coin Bottom 2",',\
  '.gear": "Gear",',\
  '.star": "Star",',\
  '.star1": "Star 1",',\
  '.star2": "Star 2",',\
  '.star3": "Star 3",',\
  '.star4": "Star 4",',\
  '.star5": "Star 5",',\
  '.ingot-side": "Ingot Side",',\
  '.light-top": "Light Top",',\
  '.vent-side": "Vent Side",',\
  '.vent-top": "Vent Top",',\
  '.goldborder": "Gold Bordered",',\
  '.zelda": "Zelda",']

glass_variance = [\
'.bubble": "Bubble",',\
'.chinese": "Chinese",',\
'.chinese2": "Chinese 2",',\
'.chrono": "Chrono",',\
'.dungeon": "Dungeon",',\
'.frame": "Frame",',\
'.ironfence": "Iron Fence",',\
'.japanese": "Japanese",',\
'.japanese2": "Japanese 2",',\
'.light": "Light",',\
'.noborder": "No Border",',\
'.screen": "Screen",',\
'.shale": "Shale",',\
'.stone": "Stone",',\
'.streak": "Streak",',\
'.thick": "Thick",',\
'.thin": "Thin",']

obsidian_variance = [\
'.blocks": "Blocks",',\
'.chiseled-side": "Chiseled Side",',\
'.Chiseled-top": "Chiseled Top",',\
'.chunks": "Chunks",',\
'.greek-side": "Greek Side",',\
'.greek-top": "Greek Top",',\
'.growth": "Growth",',\
'.map_a": "Map A",',\
'.map_b": "Map B",',\
'.shiny": "Shiny",',\
'.noborder": "No Border",',\
'.screen": "Screen",',\
'.shale": "Shale",',\
'.stone": "Stone",',\
'.streak": "Streak",',\
'.thick": "Thick",',\
'.thin": "Thin",']

variance += excess
variance += terrain
variance += glass_variance

default_string = "block.chisel.default."
str_len = len(default_string)

# This is pretty bad, gets the job done and isn't production code
f = open("en_us.json", "w")
f.write("{\n")
for i in data:
    if exists(str(Path(os.getcwd()).parent.absolute())+"/textures/"+i[str_len:]):
        f.write('  "'+i+'\":\"' + data[i] + '\",\n')
        for j in variance:
            if exists(str(Path(os.getcwd()).parent.absolute())+"/textures/"+ i[str_len:] + '/' + j[1:j.find('"')] + '.png'):
                f.write('  "'+i+j+"\n")

f.write("}\n")
f.close()