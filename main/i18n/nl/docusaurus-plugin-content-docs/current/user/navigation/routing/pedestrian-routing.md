---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
sidebar_position: 4
title: Voetgangersroutering
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

Voetgangersroutering verwijst naar het proces van het vinden van de beste route voor een voetganger om van de ene locatie naar de andere te reizen, rekening houdend met factoren zoals voetgangersgebieden, trottoirs, zebrapaden en voetgangersvriendelijke kruispunten. Het kan ook rekening houden met andere factoren zoals *trappen*, wat nuttig kan zijn voor rolstoeltoegankelijkheid. OsmAnd gebruikt altijd hoogtedata bij het berekenen van de geschatte aankomsttijd (tijd om de afstand af te leggen) volgens [Naismith's regel](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Om *Voetgangersroutering* te configureren, ga naar de sectie [Routeparameters](../guidance/navigation-settings#route-parameters) van de Navigatie-instellingen.
  
### Routeparameters - Wandelen {#route-parameters---walking}

Voetgangersroutering kan niet alleen nuttig zijn in stedelijke gebieden, waar voetgangers verschillende obstakels kunnen tegenkomen wanneer ze van de ene plaats naar de andere proberen te komen. Je kunt dit routetype ook gebruiken tijdens het joggen, wandelen en Nordic walking buiten de stad of in de bergen. Pas de routeringsparameters eenvoudig aan je behoeften aan.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Instellingen voetgangersroutering Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen voetgangersroutering iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecteer wegen die je wilt vermijden tijdens de navigatie. Je kunt een weg [op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypen uit de lijst kiezen.  </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport, dat voertuigen over wateren vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Je kunt kiezen welk type ondergrond je wilt prefereren bij het opbouwen van een route. </summary> ![Hoogte voetganger Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Je kunt kiezen tussen twee opties:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Deze routes zijn typisch te vinden in natuurlijke omgevingen zoals bossen, bergen en parken. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Dit gestructureerde grondoppervlakte-indicatorsysteem kan worden geïnstalleerd op voetpaden, trappen en openbaarvervoerplatforms om blinde of slechtziende voetgangers te helpen bij het bewegen. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Privétoegangsbeperkingen worden genegeerd bij het berekenen van de route.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Hoogtedata worden gebruikt bij de routeberekening: [straffen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) worden ingesteld voor wegen die afwijken van het geselecteerde type. </summary> ![Hoogtedata gebruiken Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Deze voorkeur kan helpen steile heuvels te vermijden of juist te prefereren. Het gebruik van deze optie kan zeer nuttig zijn bij voetgangersroutering. Zonder hoogtedata wordt de snelste route berekend alsof het vlak terrein is. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Via ferrata*-routes worden gebruikt voor routering wanneer deze optie samen met *Hoogtedata gebruiken* is ingeschakeld.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) is een bergroute uitgerust met vaste kabels, stijgijzers, ladders en bruggen. |


## Overige routeringsinstellingen {#other-routing-settings}

- Het routeringsalgoritme kan ook rekening houden met tijdelijke beperkingen gespecificeerd in OpenStreetMap. Dit kan worden gedaan met de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.  

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kun je opties voor routeherberekening inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kun je nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren van een track of online route. Het moet worden ingesteld volgens de parameters van je voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt je problemen te voorkomen bij het maken van een route. Je kunt de meest geschikte route selecteren afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*