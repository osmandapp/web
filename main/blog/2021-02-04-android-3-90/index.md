---
slug: osmand-android-3-9-released
title: OsmAnd 3.9 (Android)
authors: eugene
tags: [release, android]
---
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import Translate from '@site/src/components/Translate.js';


We are glad to announce the release of version 3.9! We proudly present some major improvements and new features, and hope you will enjoy them.

<!--truncate-->

## Option export/import

We added the option to export and import all data including settings, resources, my places. It's a big step to the backup feature, which we will plan to add in the next release.
Go to menu → <Translate android="yes" id="configure_profile" /> → Actions (Export profile). Select the data to be exported to the obf-file. Next, click to "Continue" button and send it.

<table class="blogimage">
  <tr>
    <th><img src={require('./1.jpg').default} alt="Image"/></th>
    <th><img src={require('./2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Improved "Plan a route" tool

Our Android team added graphs for segments with the route, added the ability to create and edit multiply segment tracks in the <a href="https://osmand.net/features/plan-route">"Plan a route"</a> feature.

<table class="blogimage">
  <tr>
    <th><img src={require('./3.jpg').default} alt="Image"/></th>
    <th><img src={require('./5.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Improved OSM editing Plugin

You can log in using the safe OAuth method for <a href="https://osmand.net/features/osm-editing-plugin">OpenStreetMap editing plugin</a>. Menu → Plugins → OpenStreetMap editing → Settings.

<table class="blogimage">
  <tr>
    <th><img src={require('./5.jpg').default} alt="Image"/></th>
    <th><img src={require('./6.jpg').default} alt="Image"/></th>
    <th><img src={require('./7.jpg').default} alt="Image"/></th>
    <th><img src={require('./8.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Favorites and track waypoints custom color

We added custom color for favorites and track waypoints.

<table class="blogimage">
  <tr>
    <th><img src={require('./9.jpg').default} alt="Image"/></th>
    <th><img src={require('./10.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## What else is in this release?

* Introduced subscription on-hold/pause. Read more about it <a href="https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en">here</a>.
* Added large "Dismiss" button for Navigation.

<table class="blogimage">
  <tr>
    <th><img src={require('./11.jpg').default} alt="Image"/></th>
      </tr>
</table> 

* Fixed description pole of OSM editing.
* Fixed different distance: Plan Route vs GPX Overview.
* Fixed crash when taping on A/V notes widget.
* Added "Snowmobile" map style. Menu → Configure map → Map style. You can see snowmobile trails on the map.

<table class="blogimage">
  <tr>
    <th><img src={require('./12.jpg').default} alt="Image"/></th>
    <th><img src={require('./13.jpg').default} alt="Image"/></th>
      </tr>
</table> 

* Added <a href="https://en.wikipedia.org/wiki/Ski_touring">Skitour trails</a> for "Winter and ski" map style. Menu → Configure map → Map style.

<table class="blogimage">
  <tr>
    <th><img src={require('./14.jpg').default} alt="Image"/></th>
    <th><img src={require('./15.jpg').default} alt="Image"/></th>
      </tr>
</table> 

And remember that only together we can achieve the best results!
New features are coming SOON!

____________________________ 

OsmAnd at <a href="https://www.facebook.com/osmandapp/">Facebook</a>, <a href="https://www.twitter.com/osmandapp/">Twitter</a>, and <a href="https://www.reddit.com/r/OsmAnd/">Reddit</a>!

<LinksTelegram/>
<AndroidStore/>
