from pathlib import Path
from os import walk
import os
import json

name = input("block name: ")

# DELETING UNNECESSARIES
path = os.getcwd() + "/" + name + "/"

filesInFolder = []
for (dirpath, dirnames, filenames) in walk(path):
    filesInFolder.extend(filenames)
    break

forbidden_keywords = ["2x2","3x3","4x4","mcmeta","ctm","-ew","-ns","0_FullBlock"]
to_be_deleted = []

for filename in filesInFolder:
    for forbid in forbidden_keywords:
        if (forbid in filename):
            to_be_deleted.append(filename)

refined = []
[refined.append(x) for x in to_be_deleted if x not in refined]

for filename in refined:
    os.remove(path + filename)
# DONE DELETING

# RENAMING

print("includes vanilla blocks:\n")
include = " "
inclusions = [name]
while(include != ""):
    include = input("")
    if(include != " " and include != ""):
        inclusions.append(include)

filesInFolder = []
for (dirpath, dirnames, filenames) in walk(os.getcwd() + "/" + name):
    filesInFolder.extend(filenames)
    break

f = open(str(Path(os.getcwd()).parent.absolute())+"/types/"+name+".json", "w")

f.write('{\n')
f.write('  "name": "' + name + '",\n')
f.write('  "settings": {\n')
f.write('    "imitate": "minecraft:' + name + '"\n')
f.write('  },\n')
f.write('  "items_to_include": [\n')

#inclusions
start = '    "minecraft:'
for i in range(len(inclusions)):
    ending = '",' if i != len(inclusions)-1 else '"'
    f.write(start + inclusions[i] + ending + '\n')

f.write('  ],\n')
f.write('  "variants": {\n')
f.write('    "new": [\n')
f.write('      {\n')
f.write('        "names": [\n')

#names
spacing = "          "
for i in range(len(filesInFolder)):
    ending = '",' if i != len(filesInFolder)-1 else '"'
    f.write(spacing + '"' + str(filesInFolder[i][0:-4]) + ending + '\n')

f.write('        ],\n')
f.write('        "transparent": false\n')
f.write('      }\n')
f.write('    ]\n')
f.write('  }\n')
f.write('}\n')

f.close()