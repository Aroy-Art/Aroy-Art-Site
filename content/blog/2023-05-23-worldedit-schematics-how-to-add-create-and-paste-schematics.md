---
title: "WorldEdit Schematics: How to Add, Create & Paste Schematics"
date: 2023-05-24T15:50:41.394Z
lastmod: 2024-02-18T15:06:43.140Z
image: images/blog/how-to-use-schematics/how-to-use-schematics.png
description: In this guide, you will learn what schematics are and how to use them!
tags:
  - Command-line
  - Minecraft
  - Games
draft: false
slug: worldedit-schematics-add-create-paste-schematics
---

Schematics are a specific file format that stores parts of Minecraft worlds using different software such as MCEdit, WorldEdit, Schematica, Minecraft Note Block Studio, and more. Schematics are great for storing important areas of your server and pasting areas to your already existing worlds. In this guide, you will learn how to add schematics, create schematics, and then paste those schematics!

{{< toc >}}

## Adding Schematics to Your Server Through WorldEdit

1. To start, ensure that you have the plugin or mod [WorldEdit](https://dev.bukkit.org/projects/worldedit/files) (alternative plugin: [FastASyncWorldEdit](https://www.spigotmc.org/resources/fast-async-worldedit-voxelsniper.13932/)) installed. here is the official install guide [link](https://worldedit.enginehub.org/en/latest/install/)

With WorldEdit installed, it's time to add the schematic!

2. Open the base folder of your server.

3. If you're using the WorldEdit plugin, enter the following folders: `/plugins/WorldEdit/`  
   or if you're using the WorldEdit mod, enter the following folders: `/config/worldedit/`

4. Within that WorldEdit folder, create a new folder named `schematics`.

5. It's now time to locate a schematic you wish to add to your server if you haven't already. You can find some fantastic schematics on [PlanetMinecraft!](https://www.planetminecraft.com/resources/projects/?share=schematic&order=order_hot)  
Schematics are files ending with `.schematic` or `.schem` file.  
For example, this [Medieval Hub/Lobby](https://www.planetminecraft.com/project/free-download-medieval-hub-lobby/) downloads as `medieval-hub-lobby.schem`.

6. Once downloaded, copy the files to the new created `schematics` folder.

7. Restart the server.

You have now successfully added schematics to your server!


## Creating Schematics on Your Server Through WorldEdit

1. To save a schematic, start by building the schematic on your server. This can be anything you'd like to build from a simple house, to a classroom, to towers and dungeons and so much more!

2. Once you have built your amazing creation, it's time to save it! Ensure you are an Operator on your server and then run the command `//wand`.

<!-- You can Op yourself by entering the Console area on your control panel and typing: op USERNAME -->

3. This `//wand` command adds a wooden axe to your inventory. This is the WorldEdit wand, used for selecting regions.

4. Using this wand, go to the upper-right hand corner of your build and select that block. Ensure that you select the corner is a way to select your entire build.

5. Go to the opposite side, the lower-left hand corner of your build, and select that block.

6. With your build selected, typed this command to copy that build: `//copy`

7. It's now time to save that build. With that build copied, type this command to save that build as a schematic: `//schem save mcedit <filename(without .schematic)>`  
For example: `//schem save mcedit EpicTower`

You have now successfully saved your own custom schematic!


## Pasting Schematics on Your Server Through WorldEdit

1. Start by loading the schematic that you wish to paste within your world with this command: `//schem load mcedit <filename(without .schematic)>`

2. It's now time to paste that schematic! You can paste that schematic by standing in the direction you wish to paste that and typing: `//paste`

Schematics will paste relative to how they were copied and therefore, you may need to try multiple times to get a schematic to paste in the correct spot. If you need to undo a paste, you can type: `//undo`

You have now successfully added schematics to your world!
