---
slug: osmand-android-2-8-released
title: OsmAnd 2.8 (Android)
authors: eugene
tags: [release, OsmAnd, android]
---
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import Translate from '@site/src/components/Translate.js';

OsmAnd 2.8 has been released! We're glad to share all the improvements so let's get started.

<!--truncate-->

## Map marker menu

The map marker menu has been completely reworked with a whole list of new features and a convenient intuitive user interface.
Quick reminder: map markers are points on the map you need short-term. A shop you've planned to visit today, an event location you'll only need once, etc. While favorites are the points you'll need in a long run, map markers are created and removed on the go.
To start using them, just make a long tap on the map and select the flag icon in the context menu. Done. Now, this point is your map marker. All of them are stored in the 'Map markers' menu in OsmAnd.  You can manage them in many ways. Press 'Options' menu to try the following:

* 'Sort by'. Sort your markers by name, by distance or by date added. Also, creating a route from map markers has become even easier. Just press 'Plan route' and check the markers you need. You can also use the 'Sort' button in this submenu to list them in a particular way.
* Export all your markers at once as a GPX track. Simply select 'Save as new GPX track'. 
* When you do not need the markers anymore, press 'Move all to history' to discard them all at once.

<table>
  <tr>
    <th><img src={require('./marker_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./marker_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./marker_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 

### Plan route

Now you can plan the route using your markers. Open Map markers > Options > Plan route. Select the markers that you need. You can also start a route from your current location. Drag markers up or down the list to change their order. Here you can also choose the route mode: map overview, car profile, cycling or pedestrian mode.
Then press 'Options' again. Here you'll have several alternatives:

* **Make round trip**. Use this option if you'd like to return to your initial location.
* **Sort by**. Here you can pick where you'd like to create the most optimal route using 'Sort door-to-door' option or 'Reverse order' if you'd like to reverse the order of waypoints on your list.

Now you're ready to press 'Navigate'.

<table>
  <tr>
    <th><img src={require('./plan_route_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./plan_route_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

### Markers from favorites

Create markers from your groups of favorites easily! Simply go to My places > Favorites > choose your group > press the 'flag' button > select which points to add and press 'flag' again.  Your favorites have been added as map markers. You can also add GPX waypoints as markers. Just go to My places > My tracks > choose a track > Points > press the '⋮' button > Add to map markers.

<table>
  <tr>
    <th><img src={require('./markers-f-1.jpg').default} alt="Image"/></th>
    <th><img src={require('./markers-f-2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

### Indication

There are 3 ways to view information about your map markers' location in distance to them: a widget on the top of the screen, arrows pointing to the direction of your markers or guidelines.
To manage these options, please go to Map markers > Options > Distance indication.
You can also pick how you'd like to view the information: as a top bar on the map screen or a compact widgets in the upper-right corner. If you do not need this info, you can disable it by choosing 'None'.
To change the order of your map markers, you can drag them using the '≡' button.

<table>
  <tr>
    <th><img src={require('./indic_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./indic_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./indic_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Measure distance

Measuring distances on the map has never been easier. Now you can add several points and view the distance between them. To use this feature, simply go to 'Measure distance' menu, place a point on the map and keep adding them one by one. You'll see the overall distance in the menu below. It is also possible to undo and redo every step or open the menu with details using the arrow icon. Press on a point on the map or on the list to move or delete it, add points before or after.

<table>
  <tr>
    <th><img src={require('./dist_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./dist_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./dist_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## OsmAnd Live

The feature offering you frequent (up to once an hour) map updates has finally come out of the beta-testing phase and is fully ready for use. Extra improvement: now the map updates on the server will occur every 30 minutes. They'll be available for download once an hour, as usual.

<table>
  <tr>
    <th><img src={require('./osm_live_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./osm_live_2.jpg').default} alt="Image"/></th>
    <th><img src={require('./osm_live_3.jpg').default} alt="Image"/></th>
      </tr>
</table> 

Besides these changes, we've also made a range of fixes, including the Android O issue.


And remember that only together we can achieve the best results!
New features are coming SOON!


____________________________ 

<p>OsmAnd at <a href="https://www.facebook.com/osmandapp/">Facebook</a>, <a href="https://www.twitter.com/osmandapp/">Twitter</a>, and <a href="https://www.reddit.com/r/OsmAnd/">Reddit</a>!</p>
 <p>Join us at our groups of Telegram <a href="https://t.me/OsmAndMaps">(EN)</a>, <a href="https://t.me/itosmand">(IT)</a>,  <a href="https://t.me/frosmand">(FR)</a>, <a href="https://t.me/deosmand">(DE)</a>, <a href="https://t.me/ruosmand">(RU)</a>, <a href="https://t.me/uaosmand">(UA)</a>.</p>



<AndroidStore/>