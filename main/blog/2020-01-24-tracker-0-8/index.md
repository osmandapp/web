---
slug: osmand-tracker-0-8-released
title: Online GPS Tracker 0.8
authors: eugene
tags: [release, android, tracker]
---

Hi!
It's been a long time without our Online Tracker updates.
We prepared new features for you!
<img src={require('./Release08.png').default} alt="Image"/>

<!--truncate-->


## Suggested list of contacts
In this release, we add Suggested list of contacts. What is it? It's your last five contacts who you shared your location with. Now you can click only once to continue sharing your location with these contacts.
Sharing time is your last chosen sharing time for the contact.
When you start sharing, you can see in the "My location" screen your Suggested list and a "Back to OsmAnd" button.

<table class="blogimage">
  <tr>
    <th><img src={require('./8.jpg').default} alt="Image"/></th>
    <th><img src={require('./9.jpg').default} alt="Image"/></th>
  </tr>
</table> 

## Online Tracker Widget in OsmAnd
We added Online Tracker Widget to OsmAnd. For viewing the Widget you should turn OsmAnd Tracker plugin on first. After that, the Widget will be in the upper-right corner of the OsmAnd screen with the signature "Start".

To switch it off, you can go to the General menu-> Configure screen (OsmAnd version 3.6).

<table class="blogimage">
  <tr>
    <th><img src={require('./10.jpg').default} alt="Image"/></th>
    <th><img src={require('./14.jpg').default} alt="Image"/></th>
  </tr>
</table>

The Widget has a few appearances. At first, it is "Start". When you click "Start" you go to Online OsmAnd Tracker, where you can choose any contacts or click to Suggested contacts.
When you start sharing your location the Widget changes appearance.
The green smile "OK" means that your location is being shared now.
 It's mean that everything is ok. The sharing does not have any issues.
The orange smile "OK" means that your location cannot be sent. There are issues with the Internet connection or with GPS reception.

<table class="blogimage">
  <tr>
    <th><img src={require('./11.jpg').default} alt="Image"/></th>
    <th><img src={require('./13.jpg').default} alt="Image"/></th>
  </tr>
</table>


If you don't have an internet connection for a long time, your buffer in OsmAnd Tracker saves points of your location. The Widget in OsmAnd changes its appearance. It starts to show the time of the buffer filling how long the buffer is keeping points of your location.

<table class="blogimage">
  <tr>
    <th><img src={require('./15.jpg').default} alt="Image"/></th>
    <th><img src={require('./16.jpg').default} alt="Image"/></th>
  </tr>
</table>


As soon as your internet connection is restored, points from the buffer are sent. The Widget in OsmAnd changes its appearance and minutes in the Widget are reduced. When all points from the buffer are sent to Telegram, the Widget is displayed as a green smile.
<table class="blogimage">
  <tr>
    <th><img src={require('./18.jpg').default} alt="Image"/></th>
    <th><img src={require('./23.jpg').default} alt="Image"/></th>
  </tr>
</table>


In OsmAnd, you can see that the Widget has a green smile. It's mean that everything is ok. The sharing process does not have any issues.

## Added "Back to OsmAnd" button
This button appears in "My location" screen, when the sharing location starts. Now only one click is enough to return to OsmAnd.

## Buffer Settings
Now you can choose time to keep saved points in the buffer. To do so, go to Settings → Position → Buffer expiration time.

<table class="blogimage">
  <tr>
    <th><img src={require('./17.jpg').default} alt="Image" width="200px"/></th>
  </tr>
</table>

## Units and formats Settings
We added settings for units and formats. Now you can choose your comfortable values for Telegram messages during sharing location. For changing its values, go to Settings → Units & formats.

<table class="blogimage">
  <tr>
    <th><img src={require('./22.jpg').default} alt="Image"/></th>
    <th><img src={require('./20.jpg').default} alt="Image"/></th>
  </tr>
</table>


## Bug fixes

Further instructions and helpful advice can be found <a href="https://osmand.net/features/tracker">here</a>.


import TrackerGooglePlay from '@site/src/components/_buttonTrackerGooglePlay.mdx';

<TrackerGooglePlay/>