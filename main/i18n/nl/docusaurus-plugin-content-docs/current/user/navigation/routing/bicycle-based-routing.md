---
source-hash: 5518fc70081b20221258351fc52ceac84a6e4c65f687401c6f1e219d9057dfed
sidebar_position: 3
title: Fietsroutes (MTB)
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

Fietsroutes houden rekening met factoren zoals de beschikbaarheid van fietspaden, paden en wegen die veilig en legaal zijn voor fietsers. OsmAnd gebruikt altijd hoogtegegevens bij het berekenen van de geschatte aankomsttijd (tijd om de afstand af te leggen) volgens de [regel van Naismith](https://nl.wikipedia.org/wiki/Regel_van_Naismith#Scarf's_equivalentie_tussen_afstand_en_klim). Standaard wordt de snelste route aangeboden.
Fietsroutes kunnen ook nuttig zijn voor [mountainbiken](#mtb-routing-particularities).

U kunt *Fietsroutes* configureren in de sectie [Routeparameters](../guidance/navigation-settings#route-parameters) van de Navigatie-instellingen.


## Routeparameters - Fiets {#route-parameters---bicycle}

De fietsroutefuncties van OsmAnd stellen fietsers in staat om een start- en eindpunt in te voeren en vervolgens een route te genereren die rekening houdt met hun voorkeuren en lokale geografie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen fietsroutes](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen fietsroutes iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Het routebepalingsmechanisme kiest directere en dienovereenkomstig snellere wegen. | Ondanks de toename van de bewegingssnelheid neemt de afgelegde afstand tegelijkertijd ook toe. Dit leidt tot een toename van de spierinspanning. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Rijstijl* (iOS) | <details><summary> U kunt uw rijstijl kiezen voor een betere routebepaling. </summary> ![Rijstijl fietsen Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (zal minder drukke wegen met tags [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) en [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) prefereren) </li><li> *Onverharde wegen [prefereren](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (deze optie is iets tussen *prefer byways* en *kortste route*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (voor routebepaling zullen bredere en meestal drukkere wegen worden geprefereerd, wat snellere routes oplevert) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecteer wegen die u wilt vermijden tijdens de navigatie. </summary>![Wegen vermijden Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | U kunt een [weg op de kaart selecteren](../../map/map-context-menu/#avoid-road) of wegtype(s) uit de lijst kiezen: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Vermijd het oversteken van een grens naar een ander land)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (een type watertransport, dat voertuigen over waterlichamen vervoert)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Vermijd kasseien](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (delen van een snelweg waar een waterweg overheen loopt) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Geen kasseien](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Privétoegangsbeperkingen worden genegeerd bij het berekenen van de route. | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* wordt in OSM gebruikt om beperkingen te beschrijven op het gebruik van snelwegen en andere transportroutes, evenals gebouwen, ingangen, voorzieningen en recreatieve entiteiten. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Voorkeursterrein* (iOS) | <details><summary> Hoogtegegevens worden gebruikt bij de routeberekening: [straffen voor wegen](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) met een ander hoogteprofiel worden ingesteld. </summary> ![Hoogtegegevens gebruiken Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Deze voorkeur kan helpen steile heuvels te vermijden of juist te prefereren. Als u een *heuvelachtige* route kiest, wordt de voorkeur gegeven aan heuvels en bergen. Als *vlak* - aan vlaktes, worden heuvels vermeden. Minder heuvelachtige voorkeur is iets tussen deze twee opties. Zonder hoogtegegevens wordt de snelste route berekend alsof het op vlak terrein is. |


## MTB-route bijzonderheden {#mtb-routing-particularities}

Het MTB (mountainbiken) routebepalingsmechanisme is hetzelfde als fietsroutebepaling. Merk op dat er enkele straffen zijn voor het gebruik van [MTB-routes](../../map/vector-maps.md#routes), en daarom is de kans kleiner dat ze worden aangeboden voor fietsen naar huis of naar het werk.


## Overige route-instellingen {#other-routing-settings}

- Het route-algoritme kan ook rekening houden met tijdelijke beperkingen die in OpenStreetMap zijn gespecificeerd. Dit kan worden gedaan met de optie *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Houd er rekening mee dat in sommige gevallen informatie van OSM verouderd kan zijn.

- In de sectie [*Route opnieuw berekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor het opnieuw berekenen van de route inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routefuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd-ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instelling wordt gebruikt op onbekende wegen zonder snelheidsbeperkingen. Dit is meestal het geval bij het navigeren van een track of online route. Het moet worden ingesteld volgens de parameters van uw voertuig.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen te voorkomen bij het maken van een route. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*