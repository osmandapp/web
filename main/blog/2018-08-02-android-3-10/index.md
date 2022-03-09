---
slug: osmand-android-3-1-released
title: OsmAnd 3.1 (Android)
authors: eugene
tags: [release, OsmAnd, android]
---
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import Translate from '@site/src/components/Translate.js';

OsmAnd 3.1 is here! Here are some of the most important updates.

<!--truncate-->

## Wikipedia and Wikivoyage

We have significantly improved the Parsing algorithms of Wikipedia articles, fixed the problems with  French and Italian languages in which there were practically no articles.
The mistakes in the articles content processing in Wikivoyage have also been eliminated. 
The updated Wikipedia and Wikivoyage files are already available.
    
<table>
  <tr>
    <th><img src={require('./img-1-1.jpg').default} alt="Image"/></th>
    <th><img src={require('./img-1-2.jpg').default} alt="Image"/></th>
      </tr>
</table> 


## OpenStreetMap editing

Some great news for  <a href="https://www.openstreetmap.org">OpenStreetMap.org</a> contributors who use OsmAnd.
We have added synchronization of OSM Edit to Google App Backup, so now in the case of OsmAnd reinstallation, all your OSM edits that have not been uploaded yet will not be lost.
We have corrected the error in the map notes. If the author of the note was anonymous, OsmAnd did not display the names of all the commentators.
The most important innovation for contributors: we have added the ability to edit tags for non-point objects and ways.

<table>
  <tr>
    <th><img src={require('./img-2-1.jpg').default} alt="Image"/></th>
    <th><img src={require('./img-2-2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Map Makers

As requested by many users, we have added the possibility to hide the layer with markers from the map. To do this, open OsmAnd > Menu > Configure Map > Markers > Turn off. The layer will turn on as soon as you add a new marker. Also, the problems with turning off the groups of markers have been fixed.

<table>
  <tr>
    <th><img src={require('./img-3-1.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Context menu

The tables with the numbers of public transport routes in the night mode are now fixed, the numbers became readable regardless of the background color. 
Furthermore, the problems with the size of Additional options on screens with a resolution of less than 360dp are eliminated.

<table>
  <tr>
    <th><img src={require('./img-4-1.jpg').default} alt="Image"/></th>
    <th><img src={require('./img-4-2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Boat navigation

We have included support for waterway fairway as well as added navigation by polygons in the test mode.
    Boat mode for navigation can be enabled together with the <a href="http://osmand.net/features?id=nautical-charts"> Nautical plugin.</a>

<table>
  <tr>
    <th><img src={require('./img-5-1.jpg').default} alt="Image"/></th>
    <th><img src={require('./img-5-2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

And remember that only together we can achieve the best results!
New features are coming SOON!

____________________________ 

<p>OsmAnd at <a href="https://www.facebook.com/osmandapp/">Facebook</a>, <a href="https://www.twitter.com/osmandapp/">Twitter</a>, and <a href="https://www.reddit.com/r/OsmAnd/">Reddit</a>!</p>
 <p>Join us at our groups of Telegram <a href="https://t.me/OsmAndMaps">(EN)</a>, <a href="https://t.me/itosmand">(IT)</a>,  <a href="https://t.me/frosmand">(FR)</a>, <a href="https://t.me/deosmand">(DE)</a>, <a href="https://t.me/ruosmand">(RU)</a>, <a href="https://t.me/uaosmand">(UA)</a>.</p>

<AndroidStore/>