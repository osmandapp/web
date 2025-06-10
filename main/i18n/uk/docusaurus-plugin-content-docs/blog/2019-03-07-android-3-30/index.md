---
slug: osmand-android-3-3-released
title: OsmAnd 3.3 (Android)
authors: eugene
tags: [release, android]
---
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

We will be releasing the new version patch by patch during the next two weeks, and the info about app updates will be published in this article. Here is what has been done so far.
We follow our <a href="https://osmand.net/help-online/privacy-policy">Privacy Policy</a> and now we have completely **removed Facebook and Firebase analytics from the free version (OsmAnd+ didn't include it)**.

<!--truncate-->

## Navigation on public transport: Metro, Buses, Tram and so on.

First, we would like to introduce Navigation for public transport which is currently in the beta phase. **Each of you can try to navigate in your city by public transport now with OsmAnd**. We want to receive your feedback for customization of this feature. Most importantly, we use the latest New Public Transport Schema that is also called Public Transport Version 2 (PTv2) for our Public Transport navigation algorithm. You can check your public transport <a href="http://tools.geofabrik.de/osmi/">here</a>. <a href="https://osmand.net/blog/guideline-pt">Guidelines on how to build or correct public transport routes </a>is provided in our blog.

<table class="blogimage">
  <tr>
    <th><img src={require('./pt_1_blog.png').default} alt="Image"/></th>
    <th><img src={require('./pt_2_blog.png').default} alt="Image"/></th>
    <th><img src={require('./pt_3_blog.png').default} alt="Image"/></th>
    <th><img src={require('./pt_4_blog.png').default} alt="Image"/></th>
      </tr>
</table> 

## Redesigned Directions menu

We have made a more detailed Directions menu to help you navigate to your Home and Work and see the History of your destinations. When you click “Options”, you can see Settings for Navigation like the list of active GPX and others.

<table class="blogimage">
  <tr>
    <th><img src={require('./pt_5_blog.png').default} alt="Image"/></th>
    <th><img src={require('./pt_6_blog.png').default} alt="Image"/></th>
      </tr>
</table> 

## Improve Quick action

As requested by many users, we have **added Show/Hide tracks, Day/Night mode switches in Quick action**. Quick action is a flexible menu of shortcuts providing direct access to whatever features you need to access most frequently: just select and add them to this 'toolbar'. In this way, the next time you need to add a new favorite, add a navigation destination, enable or disable voice guidance, etc, you can do it in one click using Quick action. The Quick action button can be added via the Configure screen menu. To add actions to the menu, please press 'Add action' right on its menu bar. To remove an action, go to Configure screen and tap the 'Quick action' menu, then remove any shortcuts not needed.

<table class="blogimage">
  <tr>
    <th><img src={require('./pt_7_blog.png').default} alt="Image"/></th>
      </tr>
</table> 

## Additional info in the Route details.

While building a route,  you can view information about the road itself like **road types, surface, steepness and smoothness** which will help you in understanding the road conditions of your route.

<table class="blogimage">
  <tr>
    <th><img src={require('./pt_8_blog.png').default} alt="Image"/></th>
    <th><img src={require('./pt_9_blog.png').default} alt="Image"/></th>
      </tr>
</table> 

And remember that only together we can achieve the best results!
New features are coming SOON!
____________________________ 

<LinksSocial/>
<LinksTelegram/>
<AndroidStore/>