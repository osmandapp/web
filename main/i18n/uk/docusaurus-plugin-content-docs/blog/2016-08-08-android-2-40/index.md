---
slug: osmand-android-2-4-released
title: OsmAnd 2.4 (Android)
authors: eugene
tags: [release, android]
---
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

An OsmAnd update is here. We've introduced a new search interface and many fixes. Read on to find out all the details.

<!--truncate-->

## New Quick Search

A quick search was probably one of the most requested features we've received. A first version of it is included in this release. Now, you can enter almost any type of query, be it a type of POI, an address or even a link to the map and find it using the Search button on the map screen. We kept the regular search in the main menu to help users transition comfortably from the more traditional search to the new one.

<table class="blogimage">
  <tr>
    <th><img src={require('./search_1.jpg').default} alt="Image"/></th>
    <th><img src={require('./search_2.jpg').default} alt="Image"/></th>
      </tr>
</table> 

<table class="blogimage">
  <tr>
    <th><img src={require('./search_3.jpg').default} alt="Image"/></th>
    <th><img src={require('./search_4.jpg').default} alt="Image"/></th>
      </tr>
</table>

## Car Audio System Integration

Now OsmAnd navigation can be integrated into your car audio system. Connect an Android device running OsmAnd via Bluetooth to a car stereo system which provides speakerphone functionality. If in OsmAnd you select Settings * General Settings * Voice guidance output * Phone call audio, OsmAnd will interrupt any music to play its navigation prompts.

<table class="blogimage">
  <tr>
    <th><img src={require('./voice_guidance_integration.jpg').default} alt="Image"/></th>
      </tr>
</table>

## Better Public Transport Information

In the previous OsmAnd release, we introduced transport stops information. In 2.4, this has been improved. Now, you can turn them on in Configure map * Transport * Transport stops, then tap one and see all the routes on that stop. More to come, you can tap a route to view it on the map from start to end.

<table class="blogimage">
  <tr>
    <th><img src={require('./routes_2.png').default} alt="Image"/></th>
    <th><img src={require('./routes_1.png').default} alt="Image"/></th>
      </tr>
</table>

Please remember to update your offline maps, as only the latest versions contain the transport route data needed for some of this new functionality.

## Other Improvements

We reworked route guidance, voice prompting, and added new turn lane indication. The release also includes numerous fixes like improved storage management, etc. Besides that, some local languages like Sorbian have been added to the new release. Also, you can now enjoy support of such language options as Spanish (American) and English (United Kingdom). They will be of best help as map languages in the regions to show you the geographical names in regional language. To set your chosen language as map language, please go to Configure map * Map language.


And remember that only together we can achieve the best results!
New features are coming SOON!

____________________________ 

<LinksSocial/>





<LinksTelegram/>
<AndroidStore/>