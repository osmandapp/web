---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Paardrijroute
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

*Paardrijroutes* kunnen nuttig zijn voor ruiters die hun ritten willen plannen op paden en wegen die veilig en geschikt zijn voor paarden. Met behulp van dit type routering kunt u ook nieuwe routes ontdekken die anders niet bekend zouden zijn.

*Paardrijroutes* kunnen naar wens worden geconfigureerd in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

![Paardrijden](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Routeparameters - Paard {#route-parameters---horse}

:::note
Standaard is het *Paardrijprofiel* gedeactiveerd. Om dit profiel te gebruiken voor routering, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Routering voor paardrijden is ontworpen om ruiters informatie te bieden over paardvriendelijke paden, ruiterpaden en maneges.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen paardrijroute Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen paardrijroute iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecteer wegen die u tijdens de navigatie wilt vermijden. U kunt een [weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtypes uit de lijst kiezen. </summary> ![Wegen vermijden Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport dat voertuigen over waterlichamen vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> U kunt kiezen of u de voorkeur geeft aan routes voor paarden of niet. </summary> ![Voorkeur voor paardenroutes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Een weg bedoeld voor gebruik door ruiters (voornamelijk) en voetgangers (afhankelijk van landspecifieke regelgeving). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Een [hek](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) is een soort [barrière](https://wiki.openstreetmap.org/wiki/Key:barrier) die de doorgang blokkeert. Meestal is het een sectie in een muur of omheining die kan worden geopend of gesloten om toegang toe te staan of te beperken. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | In sommige landen zijn [paardenkoetsen](https://wiki.openstreetmap.org/wiki/Key:carriage) niet toegestaan op autosnelwegen; ze zijn slechts op een zeer klein aantal andere wegen toegestaan. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Toegangsbeperkingen voor privéwegen worden genegeerd bij het berekenen van de route. | De tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en vrijetijdsentiteiten te beschrijven. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Alleen straten die speciaal voor paarden zijn bestemd, worden gebruikt voor de routebepaling. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Alleen wegen die speciaal voor paarden zijn bestemd, worden gebruikt voor de routebepaling. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> De geschatte reistijd houdt rekening met de invloed van hoogteverschillen. </summary> ![Hoogtegegevens gebruiken Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Deze voorkeur kan helpen om steile hellingen te vermijden. Zonder hoogtegegevens wordt de snelste route berekend alsof het terrein vlak is. |