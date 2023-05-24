---
title: Create custom Travel guide
versions: '*'
---

import Translate from '@site/src/components/Translate.js';


**_This article needs to be reviewed_**

Using OsmAnd [MapCreator](../../versions/map-creator.md) you can create your own one-of-a-kind custom [Travel Guide](../../user/plan-route/travel-guides.md).  You can use text from any source (from Wikipedia to your friend's blog) as the basis for a guide and match it with the GPX track.  

### Prepare the files

Save your track with *[.GPX](../osmand-file-formats/osmand-gpx.md)* extension and the text file as *.html*. In order to create your custom *Travel guide* successfully, the names of the GPX file and the html file have to be identical. For example, *Milan.gpx* and *Milan.html*.  
The GPX tracks can be downloaded from the internet or you can create one [using OsmAnd](../../user/plan-route/create-route.md) or any other GPX creation tool (Brouter, or a simialr one).  
Add the points you'd like to visit into your route and then save that route as a GPX track.  

Choosing the source for your guide's text is completely up to you. It can be an article in a travel blog, a Wikipedia page, etc. Simply copy the text, then paste it into a text editor and save it with an *.html* extension. Make sure to make the name of the GPX track and the HTML file identical.

### Launch the tool

Download the latest version of [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) and extract the files from the archive.  

:::note
How to use this tool is described in the [Create Offline Raster & Vector Maps](./create-offline-maps-yourself.md#osmandmapcreator) article.
:::

Start your console and open the MapCreator folder.

Example: `cd /home/user/OsmAndMapCreator-main/`

For *Linux* run ./utilites.sh (*Windows*: utilities.bat file) travel-guide-creator.  

When asked to provide the path, please paste the path to the folder where you have your files prepared.

Example: `cd /home/user/MyCustomGuides/`

We do not recommend locating your files in the *OsmAnd MapCreator* folder itself. Kindly see the *Read me* file for step-by-step commands.

### Import files

Your file should be created in seconds. By default, it will be named *travel_guide.sqlite*, but you can rename it as you want. Make sure to save it with *sqlite* file extension. For example, *Milan_weekend_tour.sqlite*. After that, please transfer it to your device. Specifically, to the folder where OsmAnd travel guides are stored. You can check the path to that folder in *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Please copy the file there using any mobile file manager or by connecting your phone to computer. Restart the app.

### Use your guide

After you start the app, go to *[Travel guides](../../user/plan-route/travel-guides.md)* menu (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Use search to view new articles.