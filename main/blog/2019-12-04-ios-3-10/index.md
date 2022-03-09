---
slug: osmand-ios-3-10-released
title: OsmAnd 3.10 (iOS)
authors: eugene
tags: [release, ios, quick action, srtm, sql]
---
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import Translate from '@site/src/components/Translate.js';

Hi!
We are pleased to announce that the iOS version of OsmAnd has become even more convenient!
Great thanks to all iOS users for choosing OsmAnd for your adventures! You can read further what's new in Osmand 3.10 or <a href="https://itunes.apple.com/us/app/osmand-maps-travel-navigate/id934850257">update your application here</a> and try out all the changes yourself.

<!--truncate-->



##  New Redesigned Navigation preparation screen
We improved the Navigation preparation screen. Now you can add "Home", "Work" point of destination. The short way to Options menu.
When your trip is ready, you can see the altitude/slope graph, which you can scale for all your trip.
<table>
  <tr>
    <th><img src={require('./1.jpg').default} alt="Image"/></th>
    <th><img src={require('./2.jpg').default} alt="Image"/></th>
    <th><img src={require('./4.jpg').default} alt="Image"/></th>
    <th><img src={require('./3.jpg').default} alt="Image"/></th>
  </tr>
</table> 

## Added support for Online SQL maps
We added more maps to "Online maps" (General menu-> Map-> Map type-> online maps). These maps are available for Overlay/Underlay, too.
The next you can add your Online SQL maps for Overlay/Underlay. Click to file with SQL-format and "Copy to OsmAnd Maps". Now you can choose it in Overlay/Underlay menu.
You can switch on "Seekbar" on screen for showing transparency of your Overlay/Underlay on the map.

<table>
  <tr>
    <th><img src={require('./7.jpg').default} alt="Image"/></th>
    <th><img src={require('./8.jpg').default} alt="Image"/></th>
    <th><img src={require('./9.jpg').default} alt="Image"/></th>
    <th><img src={require('./10.jpg').default} alt="Image"/></th>
  </tr>
</table> 


## Combine all options to control Contour lines on the map in one new screen
You can control settings of Contour lines  in the new screen. Go to General menu-> Map-> Map style-> Contour lines.
We added more color schemes for Contour lines.

<table>
  <tr>
    <th><img src={require('./14.jpg').default} alt="Image"/></th>
    <th><img src={require('./13.jpg').default} alt="Image"/></th>
    <th><img src={require('./12.jpg').default} alt="Image"/></th>
    <th><img src={require('./11.jpg').default} alt="Image"/></th>
  </tr>
</table> 


## Added two more Quick Actions to quickly turn on/off Contour lines and Hillshades
In this release we added new actions for Quick action: Show/Hide for Contour lines and Hillshades.

<table>
  <tr>
    <th><img src={require('./15.jpg').default} alt="Image"/></th>
    <th><img src={require('./16.jpg').default} alt="Image"/></th>
  </tr>
</table> 


## Updated basemap
Now the World overview map has a more detailed road network and is smaller in size.

<table>
  <tr>
    <th><img src={require('./5.jpg').default} alt="Image"/></th>
    <th><img src={require('./6.jpg').default} alt="Image"/></th>
  </tr>
</table> 


## Fixed issue with ruler numbers disappear
As you know, there is the tool named "Radius ruler" in OsmAnd (General menu-> Configure screen-> Right Panel-> Radiuis ruler). There was a bug with a number of circles for Radius ruler tool. Now you can see all circles without this mistake.

<table>
  <tr>
    <th><img src={require('./17.jpg').default} alt="Image"/></th>
    <th><img src={require('./18.jpg').default} alt="Image"/></th>
  </tr>
</table>

## Completely deleted Firebase analytics

Since we follow our <a href="https://osmand.net/help-online/privacy-policy">Privacy Policy</a> * in this release, we have removed the Firebase analytics. Now neither of our applications collect any private information of our users.

* Fixed Open in OsmAnd bug in iOS 13
* Fixed Mapillary performance
* Fixed few UI bugs

And remember that only together we can achieve the best results!
New features are coming SOON!


<AppleStore/>