---
source-hash: 608b9213c4fcb3c823354f8437ecb5956cf9ff48ee8a5806aa35db217a835164
sidebar_position: 6
title: Paardrijden routering
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

*Paardrijden routering* kan nuttig zijn voor ruiters die hun ritten willen plannen op paden en routes die veilig en geschikt zijn voor paarden. Met behulp van dit type routering kunt u ook nieuwe routes ontdekken die anders nog niet bekend waren.

*Paardrijden routering* kan worden geconfigureerd volgens uw behoeften in het gedeelte [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

![Paardrijden](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Routeparameters - Paard {#route-parameters---horse}

:::note
Standaard is het *Paardrijprofiel* gedeactiveerd. Om dit profiel voor routering te gebruiken, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Paardrijden routering is ontworpen om ruiters informatie te geven over paardvriendelijke paden, ruiterpaden en ruiterroutes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paardrijden routeringsinstellingen Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paardrijden routeringsinstellingen iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. U kunt een [weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypen uit de lijst kiezen. </summary> ![Wegen vermijden Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> U kunt kiezen of u routes voor paarden wilt verkiezen of niet. </summary> ![Paardenroutes verkiezen Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Een weg bedoeld voor gebruik door ruiters (voornamelijk) en voetgangers (afhankelijk van landspecifieke regelgeving). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Een [poort](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) is een soort [barrière](https://wiki.openstreetmap.org/wiki/Key:barrier), die beweging blokkeert. Meestal is het een gedeelte in een muur of hek dat kan worden geopend of gesloten om toegang toe te staan of te beperken. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | In sommige landen zijn [paard en wagen](https://wiki.openstreetmap.org/wiki/Key:carriage) niet toegestaan op snelwegen, ze zijn alleen toegestaan op een zeer klein aantal andere wegen. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Privé-toegangsbeperkingen worden genegeerd bij het berekenen van de route. | Tag *[privé](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Alleen straten die speciaal zijn aangewezen voor paarden worden gebruikt voor routering. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Alleen wegen die speciaal zijn aangewezen voor paarden worden gebruikt voor routering. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> De geschatte reistijd zal de invloed van hoogteverschillen weergeven. </summary> ![Hoogtegegevens gebruiken Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Deze voorkeur kan helpen steile beklimmingen te vermijden. Zonder hoogtegegevens wordt de snelste route berekend alsof het vlak terrein is. |


## Overige routeringsinstellingen {#other-routing-settings}

- Het routeringsalgoritme kan ook rekening houden met tijdelijke beperkingen die zijn gespecificeerd in OpenStreetMap. Dit kan worden gedaan met de optie [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In het gedeelte [Route herberekenen](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor routeherberekening inschakelen en aanpassen.

- In het gedeelte [Ontwikkeling](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd-ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld.

- [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) instelling in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren van een track of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). Het correct configureren van de instellingen helpt u problemen te voorkomen bij het maken van een route. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*