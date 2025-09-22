---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Fietsroutering (MTB)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

Fietsroutering houdt rekening met factoren zoals de beschikbaarheid van fietspaden, paden en wegen die veilig en legaal zijn voor fietsers. OsmAnd gebruikt altijd hoogtegegevens bij het berekenen van de geschatte aankomsttijd (tijd om de afstand af te leggen) volgens de [regel van Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Standaard wordt de snelste route aangeboden.  
Fietsroutering kan ook nuttig zijn voor [mountainbiken](#mtb-routing-particularities).  

U kunt *Fietsroutering* configureren in de sectie [Routeparameters](../guidance/navigation-settings#route-parameters) van de Navigatie-instellingen.


## Routeparameters - Fiets {#route-parameters---bicycle}

De fietsrouteringsfuncties van OsmAnd stellen fietsers in staat om een start- en eindpunt in te voeren en vervolgens een route te genereren die rekening houdt met hun voorkeuren en de lokale geografie.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Instellingen fietsroutering](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen fietsroutering iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Het routeringsmechanisme kiest directere en dus snellere wegen.  | Ondanks de toename in snelheid, neemt ook de afgelegde afstand tegelijkertijd toe. Dit leidt tot een toename van de spierinspanning. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Rijstijl* (iOS) | <details><summary> U kunt uw rijstijl kiezen voor een betere routering. </summary> ![Rijstijl fietsen Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (minder drukke wegen met tags [secundair](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) en [woonwijk](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) krijgen de voorkeur) </li><li> *Voorkeur voor [onverharde wegen](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (deze optie is een middenweg tussen *voorkeur voor landwegen* en *kortste route*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (voor routering krijgen bredere en meestal drukkere wegen de voorkeur, wat snellere routes oplevert) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie.  </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | U kunt ofwel [een weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtype(n) uit de lijst kiezen:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermijd het oversteken van een grens naar een ander land)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Vermijd kasseien](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (delen van een weg waar een waterweg overheen loopt) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Geen kinderkoppen](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Beperkingen voor privétoegang worden genegeerd bij het berekenen van de route.  | De tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten te beschrijven.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Voorkeursterrein* (iOS) | <details><summary> Hoogtegegevens worden gebruikt bij de routeberekening: er worden [straffen ingesteld voor wegen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) met een ander hoogteprofiel. </summary> ![Hoogtegegevens gebruiken Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Deze voorkeur kan helpen om steile heuvels te vermijden of juist de voorkeur te geven. Als u een *heuvelachtige* route kiest, wordt de voorkeur gegeven aan heuvels en bergen. Als u *vlak* kiest - aan vlaktes, heuvels worden vermeden. De voorkeur voor minder heuvelachtig is een middenweg tussen deze twee opties. Zonder hoogtegegevens wordt de snelste route berekend alsof het vlak terrein is. |


## Bijzonderheden MTB-routering {#mtb-routing-particularities}

Het MTB-routeringsmechanisme (mountainbiken) is hetzelfde als fietsroutering. Merk op dat er enkele straffen zijn voor het gebruik van [MTB-routes](../../map/vector-maps.md#routes), en daarom is de kans kleiner dat ze worden aangeboden voor het fietsen naar huis of naar het werk.