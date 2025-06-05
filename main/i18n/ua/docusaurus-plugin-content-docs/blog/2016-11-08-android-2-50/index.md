---
slug: osmand-android-2-5-released
title: OsmAnd 2.5 (Android)
authors: eugene
tags: [release, android]
---
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

OsmAnd 2.5 is now available! This time, we decided to focus on polishing the features and improving general usability of the app. We also made some cool improvements in the search area. Here are some of the changes we've made:

<!--truncate-->

## Clickable icons on the map

One of the key features of 2.5 introduces clickable icons on the map, displaying POI information promptly without the necessity to enable POI Layer first. This also allows watching public transport information without any interactions with the Configure Map menu. Simply click on any icon and the information will be displayed.

<table class="blogimage">
  <tr>
    <th><img src={require('./map_icons_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./map_icons_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Very detailed POI search

Another major improvement is an upgrade in the POI search function. Now, your search can be much more detailed. For example, you can search for an Italian restaurant that's open at the moment or a Spanish one that accepts Visa cards.
To specify your search, please go to Search * Categories. Then select a category, for example, Cafe and restaurant. Press the Settings button in the left upper corner and you'll see a wide range of filters, from opening hours to specific diets (gluten free, vegetarian, etc.) to outdoor seating, takeaway options, wheelchair accessibility and even internet access type. After you set all the features you need, press 'Apply filters' button below. We've also improved the Quick search feature to let you find the places you need even more conveniently.

<table class="blogimage">
  <tr>
    <th><img src={require('./search_menu_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./search_menu_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Hiding compass

We decided to hide the compass icon from the map screen, if the map is turned to the north, for a cleaner look. If you rotate the map, you'll notice that the icon is back. However, if you need the Compass icon to stay on screen, just edit this setting in the 'Configure screen' menu.

<table class="blogimage">
  <tr>
    <th><img src={require('./compass_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./compass_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 


## Android Wear compatibility

OsmAnd has become way friendlier towards the Android Wear. Now you can get a full navigation information including next turn, distance, and ETA. You'll get two kinds of notifications: 1) navigation related 2) trip recording related.

## Topo map style

As you may have already noticed, we added a whole new map style especially helpful for cyclists and hikers. Please read the  <a href="http://osmand.net/blog?id=topo_style">detailed guide</a> to it.

<table class="blogimage">
  <tr>
    <th><img src={require('./topo_map_5.jpg').default} alt="Image"/></th>
    <th><img src={require('./topo_map_7.jpg').default} alt="Image"/></th>
      </tr>
</table> 

## Better trip recording

To control the quality of your tracks, you can now apply filters before recording trip points: Use the settings "motion detection" (i.e. minimum displacement between points), preferred minimum GPS accuracy, and minimum speed.

## And more ...

We have also made multiple improvements around turn lanes, the Configure Map menu (now a button in the top left corner of the map screen), as well as the Main menu.
We also prepared a small surprise for the Christmas season: <a href="http://osmand.net/blog?id=christmas_map">Read more about it.</a> Let's add more holiday-related points to the map &ndash; Christmas is coming!


And remember that only together we can achieve the best results!
New features are coming SOON!


____________________________ 

<LinksSocial/>




<LinksTelegram/>
<AndroidStore/>