---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title: Public Transport
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overview {#overview}

Public transport is an additional layer that allows you to display transport routes and stops on the map, to check detailed information about them and to navigate.

## Transport Stops (Layer) {#transport-stops-layer}

Enable/Disable Public transport layer:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Public transport layer Android](@site/static/img/map/pt_layer_android.png) ![Public transport layer iOS](@site/static/img/map/pt_layer_ios.png)

Choose between 1 or more transport categories for displaying:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Read more](../map/vector-maps.md#transport) about how transport is displayed on the map.


## Transport Routes (Context Menu) {#transport-routes-context-menu}

![Public transport Route menu Android](@site/static/img/map/pt_routemenu_android.png) ![Public transport Route menu iOS](@site/static/img/map/pt_routemenu_ios.png)

To open Transport menu, you can tap the the transport icon. It displays:

- Public transport coloured Shields (**clickable**)
- [List of the routes](#routes) stopping on that stop or nearby (within 150 m)
- Name of the stop and other [details](#transport-stop-details)

### Transport Stop Details {#transport-stop-details}

![Public transport Route menu details Android](@site/static/img/map/pt_routemenu_details_android.png) ![Public transport Route menu iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Public transport stop provides extra details comparing to standard OpenStreetMap object [menu](../map/map-context-menu.md#details):

- Bench presence
- Cover presence
- Wheelchair accessibility
- Operator name

**Note**: you can filter stops by certain criteria. For example, expand & tap "Bench" / "Yes" and you can see the list of stops with benches. Also they could be [shown on the map](../map/point-layers-on-map.md#points-of-interest-pois).


### Routes {#routes}

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png) ![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

Transport Routes are all public transport routes that approach via selected stop and nearby routes (within 150m). Routes information is taken from [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Public_transport) such as ref, name, colour and type.

**Shield color**:

- Subway - own color line
- Railway - brown
- Bus and other - red
- Tram - blue
- Trolleybus - purple

### Browse Route {#browse-route}

![Public transport Route list Android](@site/static/img/map/pt_route_list_android.png) ![Public transport Route list Android](@site/static/img/map/pt_route_list_ios.png)

You can enter Browse Route menu by **clicking on a shield** or **selecting a route** from the routes list. After that you can browse between stops by clicking '<Translate android="true" ids="shared_string_previous"/>' and '<Translate android="true" ids="shared_string_next"/>'. Stop info will be updated in the menu and stop will be located on the map.

You can see the full list of stops by clicking <Translate android="true" ids="rendering_category_details"/>. Currently selected stop is marked with 'location' icon on the Routes list.

> **NOTE**: *If you tap <Translate android="true" ids="get_directions"/> button you will get a route from your current location to the selected Public Transport Station.*


## Related Articles {#related-articles}

- [Vector maps](../map/vector-maps.md)
- [Public transport navigation](../navigation/routing/public-transport-navigation.md)

> *Last updated: August 2022*