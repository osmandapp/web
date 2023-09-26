---
sidebar_position: 7
title:  Android Auto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>


## Location delays (ANR crashes)


## Map orientation issue

Movement direction map orientation is [flipped and jiggles](https://github.com/osmandapp/OsmAnd/issues/16041). Resolved by switching on ["Approximate bearing"](../navigation/guidance/map-during-navigation.md#map-during-navigation) option:

- Visible only if [OsmAnd Development](../plugins/development.md) is enabled.
- Placed in *Menu → Settings → Profile → Navigation settings → [Map during navigation](../navigation/guidance/map-during-navigation.md) → Approximate bearing*.


## Volume control issue

In most cases, all types of **signals** remain at constant full volume, which is not affected by the simultaneous audio playback settings. To change the volume of the OsmAnd navigation prompts when using Android Auto, go to *Setup → Voice → Voice volume* on the vehicle multimedia system screen.  

If this method does not work, there is another option. To adjust the notification volume, you need to turn on Google Assistant during a call. Hold down the button on the steering wheel that turns on Google Assistant, and during the call, adjust the volume using the dashboard or steering wheel.  
