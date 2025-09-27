---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Openbaar Vervoer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

Openbaar vervoer is een extra laag waarmee u vervoersroutes en -haltes op de kaart kunt weergeven, gedetailleerde informatie hierover kunt bekijken en kunt navigeren.

## Vervoershaltes (Laag) {#transport-stops-layer}

Laag Openbaar Vervoer in-/uitschakelen:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Laag Openbaar Vervoer Android](@site/static/img/map/pt_layer_android.png) ![Laag Openbaar Vervoer iOS](@site/static/img/map/pt_layer_ios.png)

Kies 1 of meer vervoerscategorieën om weer te geven:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Lees meer](../map/vector-maps.md#transport) over hoe vervoer op de kaart wordt weergegeven.


## Vervoersroutes (Contextmenu) {#transport-routes-context-menu}

![Menu Vervoersroute Android](@site/static/img/map/pt_routemenu_android.png) ![Menu Vervoersroute iOS](@site/static/img/map/pt_routemenu_ios.png)

Om het Vervoersmenu te openen, kunt u op het vervoersicoon tikken. Het toont:

- Gekleurde schilden voor openbaar vervoer (**klikbaar**)
- [Lijst van de routes](#routes) die bij die halte of in de buurt (binnen 150 m) stoppen
- Naam van de halte en andere [details](#transport-stop-details)

### Details Vervoershalte {#transport-stop-details}

![Details menu Vervoersroute Android](@site/static/img/map/pt_routemenu_details_android.png) ![Details menu Vervoersroute iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Een halte van het openbaar vervoer biedt extra details in vergelijking met het standaard OpenStreetMap-object [menu](../map/map-context-menu.md#details):

- Aanwezigheid van een bank
- Aanwezigheid van een overkapping
- Rolstoeltoegankelijkheid
- Naam van de exploitant

**Opmerking**: u kunt haltes filteren op bepaalde criteria. Vouw bijvoorbeeld "Bank" uit en tik op "Ja" om de lijst met haltes met banken te zien. Ze kunnen ook [op de kaart worden getoond](../map/point-layers-on-map.md#points-of-interest-pois).


### Routes {#routes}

![Vervoersroutes Android](@site/static/img/map/pt_routes_android.png) ![Vervoersroutes iOS](@site/static/img/map/pt_routes_ios.png)

Vervoersroutes zijn alle openbaarvervoerroutes die via de geselecteerde halte en nabijgelegen routes (binnen 150m) naderen. Route-informatie is afkomstig van [OpenStreetMap-gegevens](https://wiki.openstreetmap.org/wiki/Public_transport) zoals ref, naam, kleur en type.

**Kleur van het schild**:

- Metro - eigen kleur lijn
- Spoorweg - bruin
- Bus en overig - rood
- Tram - blauw
- Trolleybus - paars

### Route bekijken {#browse-route}

![Lijst Vervoersroute Android](@site/static/img/map/pt_route_list_android.png)  ![Lijst Vervoersroute iOS](@site/static/img/map/pt_route_list_ios.png)

U kunt het menu Route bekijken openen door **op een schild te klikken** of **een route te selecteren** uit de routelijst. Daarna kunt u tussen haltes bladeren door op '<Translate android="true" ids="shared_string_previous"/>' en '<Translate android="true" ids="shared_string_next"/>' te klikken. De halte-info wordt bijgewerkt in het menu en de halte wordt op de kaart geplaatst.

U kunt de volledige lijst met haltes zien door op <Translate android="true" ids="rendering_category_details"/> te klikken. De momenteel geselecteerde halte is gemarkeerd met een 'locatie'-icoon in de routelijst.

> **OPMERKING**: *Als u op de knop <Translate android="true" ids="get_directions"/> tikt, krijgt u een route van uw huidige locatie naar het geselecteerde openbaarvervoerstation.*


## Gerelateerde artikelen {#related-articles}

- [Vectorkaarten](../map/vector-maps.md)
- [Navigatie met openbaar vervoer](../navigation/routing/public-transport-navigation.md)