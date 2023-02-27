---
sidebar_position: 2
title: Navigation types
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

### Types of routing  

Routing type determines how the route will be calculated. The OsmAnd app uses different routing types for hiking, cycling and, for example, boat trips. The navigation rules are contained in [routing.xml](../docs/technical/osmand-file-formats/osmand-routing-xml.md) file and used for offline routing. Routing type is changed when you change profile.  

The following profiles are available by default: *Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding*.  

:::note  
Truck, Motorcycle, Aircraft and Horseback riding profiles are switched off by default. You need to activate these profiles.
:::

### [Public Transport navigation](./public-transport-navigation.md)

Public Transport navigation is your help during trips in cities

### [BRouter routing](./thirdparty-routing.md)

BRouter routing for offline