---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title: Openbaar vervoer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

Openbaar vervoer is een extra laag waarmee u transportroutes en haltes op de kaart kunt weergeven, gedetailleerde informatie erover kunt controleren en kunt navigeren.

## Transportstops (Laag) {#transport-stops-layer}

Openbaar vervoerlaag in-/uitschakelen:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Openbaar vervoerlaag Android](@site/static/img/map/pt_layer_android.png) ![Openbaar vervoerlaag iOS](@site/static/img/map/pt_layer_ios.png)

Kies 1 of meer transportcategorieën voor weergave:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Lees meer](../map/vector-maps.md#transport) over hoe transport op de kaart wordt weergegeven.


## Transportroutes (Contextmenu) {#transport-routes-context-menu}

![Openbaar vervoer Routemenu Android](@site/static/img/map/pt_routemenu_android.png) ![Openbaar vervoer Routemenu iOS](@site/static/img/map/pt_routemenu_ios.png)

Om het Transportmenu te openen, kunt u op het transportpictogram tikken. Het toont:

- Gekleurde schilden voor openbaar vervoer (**klikbaar**)
- [Lijst van de routes](#routes) die op die halte of in de buurt (binnen 150 m) stoppen
- Naam van de halte en andere [details](#transport-stop-details)

### Details van transportstop {#transport-stop-details}

![Openbaar vervoer Routemenu details Android](@site/static/img/map/pt_routemenu_details_android.png) ![Openbaar vervoer Routemenu iOS](@site/static/img/map/pt_routemenu_details_ios.png)

De halte van het openbaar vervoer biedt extra details in vergelijking met het standaard OpenStreetMap-object [menu](../map/map-context-menu.md#details):

- Aanwezigheid van bank
- Aanwezigheid van overkapping
- Toegankelijkheid voor rolstoelen
- Naam van de operator

**Opmerking**: u kunt haltes filteren op bepaalde criteria. Vouw bijvoorbeeld "Bank" / "Ja" uit en tik erop, en u ziet de lijst met haltes met banken. Deze kunnen ook [op de kaart worden weergegeven](../map/point-layers-on-map.md#points-of-interest-pois).


### Routes {#routes}

![Openbaar vervoer Routes Android](@site/static/img/map/pt_routes_android.png) ![Openbaar vervoer Routes iOS](@site/static/img/map/pt_routes_ios.png)

Transportroutes zijn alle openbaarvervoerroutes die via de geselecteerde halte en nabijgelegen routes (binnen 150 m) naderen. Route-informatie is afkomstig van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Public_transport) zoals ref, naam, kleur en type.

**Schildkleur**:

- Metro - eigen lijnkleur
- Spoorweg - bruin
- Bus en overig - rood
- Tram - blauw
- Trolleybus - paars

### Route bekijken {#browse-route}

![Openbaar vervoer Routelijst Android](@site/static/img/map/pt_route_list_android.png) ![Openbaar vervoer Routelijst Android](@site/static/img/map/pt_route_list_ios.png)

U kunt het menu Route bekijken openen door op een schild te klikken of een route uit de routelijst te selecteren. Daarna kunt u tussen haltes bladeren door op '<Translate android="true" ids="shared_string_previous"/>' en '<Translate android="true" ids="shared_string_next"/>' te klikken. De halte-informatie wordt bijgewerkt in het menu en de halte wordt op de kaart gelokaliseerd.

U kunt de volledige lijst met haltes zien door op <Translate android="true" ids="rendering_category_details"/> te klikken. De momenteel geselecteerde halte is gemarkeerd met een 'locatie'-pictogram in de routelijst.

> **OPMERKING**: *Als u op de knop <Translate android="true" ids="get_directions"/> tikt, krijgt u een route van uw huidige locatie naar het geselecteerde openbaarvervoersstation.*


## Gerelateerde artikelen {#related-articles}

- [Vector kaarten](../map/vector-maps.md)
- [Navigatie openbaar vervoer](../navigation/routing/public-transport-navigation.md)

> *Laatst bijgewerkt: augustus 2022*