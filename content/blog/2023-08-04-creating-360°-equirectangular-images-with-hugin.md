---
title: Creating 360° Equirectangular Images with Hugin
date: 2023-08-04T11:58:40.938Z
lastmod: 2024-09-11T17:46:39.391Z
image: /images/blog/2023-08-04-creating-360°-equirectangular-images-with-hugin/ExampleEqui.jpg
description: Creating equirectangular images from 6 separate cube map images using Hugin
tags:
  - Image-Manipulation
  - Game-Dev
draft: false
slug: creating-360-equirectangular-images-hugin
---

We can use [Hugin](https://hugin.sourceforge.io/) to create an equirectangular image from a six-image cube. For ease of keeping track of things, it is recommended that you name the files back, front, left, right, down, and up.

First, start Hugin and after it starts go to the Interface menu and select Expert from there.

Next, load all six images into Hugin via the "Photos" tab by clicking the "Add Images" button. When you are asked for information about the image, the field of view of the lens should be entered as 90° and the lens type as normal (rectilinear). If required, the focal length should be entered as 15.297 and the focal length multiplier as 1x.

Next, you'll need to set the yaw, pitch, and roll for each of the six images. You can do this by double-clicking each file name in the file list in turn. The roll value for all six is 0. The yaw and pitch values are as follows:

| side  | yaw | pitch |
|:-----:|:---:|:-----:|
| back 	| 180 | 0     |
| front	| 0   | 0     |
| left	| -90 | 0     |
| right	| 90  | 0     |
| down	| 0	  | -90   |
| up	  | 0	  | 90    |

After setting those values, you can preview the equirectangular image by clicking on the icon. You can then switch back to the main interface to generate the final TIF file.

Go to the Stitcher tab and do each of the following:

 * Set the horizontal and vertical fields of view as 360 and 180 respectively.
 * Set the width to be 4 times the width of the individual images.
 * Set the height to be 2 times the height of the individual images.
 * Scroll down to where the processing options are.
   * For the Blender, you might want to try a few variations.
   * You can select "builtin" for the simplest approach, but might want to select "emblend" from the drop down list and then click on the "Options" button next to that and enter "-l  1" (dash el one) to specify minimal blending unless you want Hugin to do some blending at the seams. 
 * Finally, click the "Stitch!" button to create the TIF file (which you should then convert to JPG using your image editing program for use with VR). 

This allows us to take a six-image cube map such as:
![image showing the separate cube map images](/images/blog/2023-08-04-creating-360°-equirectangular-images-with-hugin/cube-map.png)

and convert it into an equirectangular image ready for a VR viewer such as:
![image of the resulting equirectangular image](/images/blog/2023-08-04-creating-360°-equirectangular-images-with-hugin/ExampleEqui.jpg)
