---
source-hash: 07c0ae968b6fbc9eae5d8ad2f409109fd8923c80ddab63d2f07f3c692f96ba59
sidebar_position: 5
---

# Debug OBF Routing on a PC {#debug-obf-routing-on-a-pc}


- Go to [https://osmand.net](https://osmand.net "https://osmand.net") and download [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") from the link on the right side of the screen, and unzip it.
- Copy the OBF file from your phone or tablet into that folder.
- Start OsmandMapCreator via the bat file or sh file.
- Be sure to have an internet connection so that MapCreator can download map tiles; check all menus and settings inside MapCreator.
- Set the working directory of MapCreator to the folder where MapCreator itself and the OBF file are located.
- Pan and zoom the map to the place where you have routing issues and that is covered by the mentioned OBF file.
- Right-click on the map to set start and end points and different routing engines.

Find the place name a street is associated with in offline OBF maps
- Have a Java framework installed on your desktop computer.
- Download OsmAndMapCreator, for example from [download.osmand.net/releases](https://download.osmand.net/releases/) and unzip it to your PC.
- Take any map file with the extension OBF and put it in the same folder where all files from MapCreator are located.
- Start OsmAndMapCreator on your PC by running `OsmAndMapCreator.bat` or `OsmAndMapCreator.sh`.
- Be sure that you have internet access on your PC, and MapCreator's settings are such that tiles are downloaded when you drag and zoom the map to your location where your issue is located.
- If you have zoomed to your area, right-click with the mouse on the map and choose "show address" from the pop-up menu.
- Normally, now all the street names should be displayed from the OBF file, and the place name to which each street is associated in OsmAnd's offline search.