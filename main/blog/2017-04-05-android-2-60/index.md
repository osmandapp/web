---
slug: osmand-android-2-6-released
title: OsmAnd 2.6 (Android)
authors: eugene
tags: [release, OsmAnd, android]
---
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import Translate from '@site/src/components/Translate.js';

We are glad to announce the release of version 2.6! We proudly present some major improvements and new features, and hope you will enjoy them:

<!--truncate-->

## Quick Action Button

Finding the balance between of providing direct access to a multitude of features and yet keeping the user interface uncluttered has always been a challenge. In version 2.6 we introduce the Quick Action button. It is a flexible menu of shortcuts providing direct access to whatever features you need to access most frequently: You select and add them to this 'toolbar'. In this way, the next time you need to add a new favorite, add a navigation destination, enable or disable voice guidance, etc., These actions are now directly accessible. The quick action button can be added via the Configure screen menu. To add actions to the menu, please press 'Add action' right on its menu bar. To remove an action, go to Configure screen and tap the 'Quick action' menu, then remove any shortcuts not needed.

<table>
  <tr>
    <th><img src={require('./q_act_3.jpg').default} alt="Image"/></th>
    <th><img src={require('./q_act_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./q_act_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

Please see full [video guide](https://www.youtube.com/embed/doV3XLTrwpU).

## Improved Search Menu

Some users reported they liked the new simple search field, while others said they preferred the previous step-by-step search. Hence we decided to combine both approaches. Now, if you open the Search menu, you'll see three tabs: History, Categories, and Address. The third one allows you to search by address, by postcode, or by coordinates, like it was in the previous versions.

<table>
  <tr>
    <th><img src={require('./search_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./search_1.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Elevation and Slope Profile for Calculated Routes

This feature has been long requested, especially by hikers, bikers, and trekking enthusiasts. Now you can view terrain info about your navigation route. Calculate a route, then tap the information button in the navigation context menu (right where you see the information about distance and time). You will see the route's elevation profile. To view it along with the route on the map, just tap 'Analyze on map'. The graph is interactive, tap and move a slider left or right to see the data for a specific point. With more to come, you can already view altitude, slope, or a combination of both.

<table>
  <tr>
    <th><img src={require('./alt_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./alt_3.jpg').default} alt="Image"/></th>
    <th><img src={require('./alt_1.jpg').default} alt="Image"/></th>
      </tr>
</table> 


## Detailed Profile for Recorded GPX Tracks

In this release, we worked on the the interface and functionality of managing and analyzing GPX tracks. We introduced a completely new GPX analysis screen showing more details of your GPX track, like elevation, slope, and speed graphs. The graphs are interactive and by tapping on them you can correlate points and terrain data with their map representation. Numerical data is still represented on the different tabs Overview, Altitude and Speed.
On the same screen, you'll have the option allowing you to view both track info and the GPX itself on the map. To try that, press 'Analyze on map'.
To explore a track, just go to My places - My tracks and select the one you need. You can also view as many tracks on the map as you want. Simply go to My places - My tracks menu, tap the map icon and select any number of tracks.

<table>
  <tr>
    <th><img src={require('./alt_8.jpg').default} alt="Image"/></th>
    <th><img src={require('./alt_9.jpg').default} alt="Image"/></th>
      </tr>
</table> 


## Nautical Depth Contour lines

If you enter the Download maps menu, you'll notice the file named 'Nautical depth contours ' next to the 'World seamarks' map. This feature gives you access to information about the sea floor, just like the contour lines plugin does with the land terrain. To use the feature, you need to enable the Nautical map view in the Plugins menu. Then go to Configure map - Details and enable the 'Nautical depth contours' option.

<table>
  <tr>
    <th><img src={require('./depths_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./depths_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./depths_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 


## Driving Style Setting for Cyclists

We sometimes have varying preferences for the way to a destination. Maybe you are in a hurry and need the fastest route, or maybe you prefer the safest one. You can now impact how your route will be built. Go to the navigation context menu and tap the Settings button (the one with the gear wheel), then select the style you need: Favor speed, safety, or balanced.

<table>
  <tr>
    <th><img src={require('./dr_style_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./dr_style2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## New Map Style

OsmAnd now has a completely re-worked default map style. We enhanced the visibility of key elements hence improving usability.

<table>
  <tr>
    <th><img src={require('./style_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./style_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./style_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## New Map Fonts Covering More Locales

We also added new fonts to the 2.6 version covering more locales. Specifically, we replaced the default ones with Noto Font, which will eliminate display issues for many languages. In addition, users can now download additional character sets, available for simplified Chinese, traditional Chinese, Japanese, and Korean languages. As always, you can select your map language in Configure map - Map language menu.

## Support for Open Location Code (OLC)

OsmAnd now also supports the Open Location Code (OLC) way of representing coordinates. OLC coordinates are a combination of letters and numbers, and is considered to be handled easier than the traditional latitude and longitude coordinates. Please read more about OLC <a href="http://openlocationcode.com/">here</a>.
You can now also search locations via this code in the Search menu - Address - Coordinates Search, there select 'OLC' under Coordinate format. Also, the context menus of any location selected now displays OLC in addition to Latitude and longitude.

<table>
  <tr>
    <th><img src={require('./olc_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./olc_3.jpg').default} alt="Image"/></th>
    <th><img src={require('./olc_4.jpg').default} alt="Image"/></th>
      </tr>
</table> 

And remember that only together we can achieve the best results!
New features are coming SOON!


____________________________ 

<p>OsmAnd at <a href="https://www.facebook.com/osmandapp/">Facebook</a>, <a href="https://www.twitter.com/osmandapp/">Twitter</a>, and <a href="https://www.reddit.com/r/OsmAnd/">Reddit</a>!</p>
 <p>Join us at our groups of Telegram <a href="https://t.me/OsmAndMaps">(EN)</a>, <a href="https://t.me/itosmand">(IT)</a>,  <a href="https://t.me/frosmand">(FR)</a>, <a href="https://t.me/deosmand">(DE)</a>, <a href="https://t.me/ruosmand">(RU)</a>, <a href="https://t.me/uaosmand">(UA)</a>.</p>



<AndroidStore/>