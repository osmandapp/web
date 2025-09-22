---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Voetgangersnavigatie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Overzicht {#overview}

Voetgangersnavigatie verwijst naar het proces van het vinden van de beste route voor een voetganger om van de ene locatie naar de andere te reizen, rekening houdend met factoren zoals voetgangersgebieden, trottoirs, zebrapaden en voetgangersvriendelijke kruispunten. Het kan ook rekening houden met andere factoren zoals *trappen*, wat handig kan zijn voor rolstoeltoegankelijkheid. OsmAnd gebruikt altijd hoogtegegevens bij het berekenen van de geschatte aankomsttijd (tijd om de afstand af te leggen) volgens de [regel van Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Om *Voetgangersnavigatie* te configureren, ga naar de sectie [Routeparameters](../guidance/navigation-settings#route-parameters) van de Navigatie-instellingen.
  
### Routeparameters - Lopen {#route-parameters---walking}

Voetgangersnavigatie kan niet alleen nuttig zijn in stedelijke gebieden, waar voetgangers verschillende obstakels kunnen tegenkomen wanneer ze van de ene plaats naar de andere proberen te komen. U kunt dit type navigatie ook gebruiken tijdens het joggen, wandelen en nordic walking buiten de stad of in de bergen. Pas eenvoudig de navigatieparameters aan uw behoeften aan.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Instellingen voetgangersnavigatie Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen voetgangersnavigatie iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. U kunt ofwel [een weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypes uit de lijst kiezen.  </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> U kunt kiezen welk type ondergrond u wilt prefereren bij het uitstippelen van een route. </summary> ![Voorkeur voetganger Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | U kunt kiezen tussen twee opties:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Deze routes bevinden zich doorgaans in natuurlijke omgevingen zoals bossen, bergen en parken. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Dit systeem van getextureerde grondoppervlakindicatoren kan worden geïnstalleerd op voetpaden, trappen en perrons van het openbaar vervoer om blinde of slechtziende voetgangers te helpen bij het verplaatsen. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Beperkingen voor privétoegang worden genegeerd bij het berekenen van de route.  | De tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en vrijetijdsentiteiten te beschrijven.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Hoogtegegevens worden gebruikt bij de routeberekening: er worden [straffen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) ingesteld voor wegen die afwijken van het geselecteerde type. </summary> ![Hoogtegegevens gebruiken Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Deze voorkeur kan helpen om steile heuvels te vermijden of, omgekeerd, er de voorkeur aan te geven. Het gebruik van deze optie kan zeer nuttig zijn bij voetgangersnavigatie. Zonder hoogtegegevens wordt de snelste route berekend alsof het terrein vlak is. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Via ferrata*-routes worden gebruikt voor navigatie wanneer deze optie samen met *Hoogtegegevens gebruiken* is ingeschakeld.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) is een bergsportroute die is uitgerust met vaste kabels, beugels, ladders en bruggen. |