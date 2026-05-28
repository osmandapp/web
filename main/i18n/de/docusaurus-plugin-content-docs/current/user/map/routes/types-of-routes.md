---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title:  Routenarten
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Übersicht {#overview}

Routen repräsentieren verschiedene Outdoor-Aktivitäten unter Verwendung von Daten aus [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Durch Tippen auf **das Schildsymbol mit einer Routennummer oder Routenflagge** auf der Karte wird ein Kontextmenü geöffnet, das zusätzliche Informationen über die Route bereitstellt und ermöglicht, sie als Teil der Navigation zu verwenden.

Sie können die Filterung einiger Routentypen im Menü [Karte konfigurieren](../../map/configure-map-menu.md) konfigurieren.

## Radfahren {#cycle}

[Fahrradrouten](https://wiki.openstreetmap.org/wiki/Cycle_routes) sind in drei Typen vorhanden: *lokal* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Fahrradrouten können auch Teil von [Knotennetzwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) sein. Sie können auswählen, wie die Farbe den Routensegmenten zugewiesen wird:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Weitere Informationen finden Sie im Artikel [Kartenzeichenerklärung](../../map-legend/index.md).


## Mountainbike {#mountain-bike}

MTB-Routen haben eine spezifische Zuordnung in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) und können separat von Fahrradrouten ausgewählt werden.

- ***<Translate android="true" ids="mtb_scale"/>***.  Zeigt Trails gemäß der MTB-Skala an. Weitere Informationen finden Sie im Artikel [Kartenzeichenerklärung](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Zeigt MTB-Trails gemäß der International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Weitere Informationen finden Sie im Artikel [Kartenzeichenerklärung](../../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Wandern / Gehen {#hiking--walking}

[Wanderwege](https://wiki.openstreetmap.org/wiki/Walking_Routes) sind in drei Typen vorhanden: *lokal* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Wanderwege können auch Teil von [Knotennetzwerken](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) sein. OsmAnd trennt Wander- und Hiking-Routen nicht und fasst sie in einer Gruppe zusammen. Sie können auswählen, wie die Farbe den Routensegmenten zugewiesen wird:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Färbt Routen entsprechend ihrer individuellen [lokalen Farbe](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (falls in OpenStreetMap verfügbar) und dem touristischen Schildsymbol.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Färbt nach [Netzwerkzugehörigkeit](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Färbt Routen entsprechend dem Typ des [Knotennetzwerks](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional oder lokal).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Dirt-Bike-Trails {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Die Funktion **Dirt-Bike-Trails** ermöglicht die Anzeige von Dirt-Bike-spezifischen Routen auf der Karte basierend auf dem Tag `dirtbike:scale`. Diese Skala hebt Trails hervor, die für Dirt-Biking geeignet sind, mit einer farbigen Überlagerung, die Schwierigkeitsgrade anzeigt ([Kartenzeichenerklärung](../../map-legend/osmand.md#routes)).  

Sie können diese Funktion unter *Menü → Karte konfigurieren → Routen → Dirt-Bike-Routen* aktivieren. Das System funktioniert ähnlich wie die MTB-Skala und bietet eine visuelle Darstellung von Routen, die auf Dirt-Biking zugeschnitten sind — mehr über den [`dirtbike`-Tag finden Sie hier](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Kletterrouten {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd unterstützt *Klettergebiete* (`climbing=area`) und *Kletterfelsen* (`climbing=crag`), sodass Sie [Kletterstandorte](https://wiki.openstreetmap.org/wiki/Climbing) direkt auf der Karte finden können.

- **Klettergebiete** stellen **größere Zonen** dar, in denen mehrere Kletterrouten existieren.

- **Kletterfelsen** beziehen sich auf **spezifische Felsformationen** oder Wände, die zum Klettern geeignet sind.

- Diese Standorte enthalten **detaillierte Attribute** wie:

    - *Kletterschwierigkeitsgrad* (z. B. UIAA, Französisch, YDS).
    - *Gesteinsart* (z. B. Kalkstein, Granit).
    - *Routenlänge* (in Metern).
    - *Kletterqualität* (fest, lose, gemischt).
    - *Verfügbarkeit eines Gipfelbuchs*.

Um Kletterstandorte auf der Karte zu aktivieren, gehen Sie zu: *Menü → Karte konfigurieren → Routen → Kletterrouten*.


## Schwierigkeitsgrad von Wanderwegen {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Einige Straßenabschnitte können Teil vieler Routen sein, aber sie können individuell gefärbt werden, um die Schwierigkeit des Abschnitts in Bergregionen darzustellen. Derzeit unterstützt OsmAnd italienische und schweizerische Klassifikationen, und jede hat eine spezifische Liste von Ausrüstungsanforderungen für den Zugang zu diesem Abschnitt.  

1. [SAC-Skala](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI-Skala](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Skipisten und Routen {#ski-slopes-and-routes}

- _Skipisten und Routen_ im Kartenstil _Winter und Ski_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Skipisten und Routen_ im Kartenstil _OsmAnd Standard_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Skipisten und Routen sind eine spezifische Gruppe von [Routen](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typischerweise können diese Routen mit dem Kartenstil [Winter und Ski](../../map/map-styles.md#winter-and-ski) verwendet werden, bei dem alle sichtbaren [Pisten](https://wiki.openstreetmap.org/wiki/Pistes) angezeigt werden. Wenn ein anderer Kartenstil aktiv ist, wird ein Banner angezeigt, das einen Wechsel zu [Winter und Ski](../../map/map-styles.md#winter-and-ski) vorschlägt (*nur Android*) und nur Pisten angezeigt werden. Tippen Sie auf ***Wechseln***, um den Kartenstil zu ändern, ohne den aktuellen Bildschirm zu verlassen, oder auf ***Später***, um das Banner auszublenden.


## Schneemobil-Trails {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Schneemobil-Trails werden in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) als `route=snowmobile` erfasst. Sie werden für Winterfreizeit und zur Verbindung entlegener Gebiete während der Schneesaison genutzt. In OsmAnd sind Schneemobil-Trails anklickbar, siehe Abschnitt [Aktionen mit Routen](./index.md#actions-with-routes).


## Reitrouten {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Reitrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) werden als farblich gekennzeichnete Routen mit Symbolen für Reiten angezeigt.  


## Wildwassersport {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Wildwasserrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) werden zusammen mit Zugangssymbolen, Gefahrenbereichen und nahegelegenen Stromschnellen für [Wildwassertourismus](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map) angezeigt. Siehe [Wildwasserfunktionen](../../map-legend/osmand.md#whitewater-features) in der Kartenzeichenerklärung für Stromschnellengrade, Flussabschnittsgrade und zugehörige Symbole.


## Laufen {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Laufrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap werden für benannte, nummerierte oder anderweitig markierte Laufrouten verwendet, hauptsächlich für Leichtathletik.


## Fitness-Trails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Ein [Fitnesstrail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) ist ein Trail oder Pfad, der mit Hindernissen oder Stationen entlang seiner Länge ausgestattet ist, um den menschlichen Körper zu trainieren und die Gesundheit zu verbessern.  


## Reisen {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Reiserouten sind Teil benutzerdefinierter [Reisebücher](../../plan-route/travel-guides.md) (`travel.obf`)-Dateien, die aus den [Benutzerrouten](https://osmand.net/blog/routes#generated-travel-routes) generiert oder Teil zusätzlicher [Plugins](../../plugins/index.md) sein können.  

Sie können die Anzeige bestimmter ***Reisebücher*** und Arten von ***Tracks*** anpassen, Tracks als Punkte oder ***Punktgruppen*** anzeigen (z. B. für Wikivoyage-Reisebücher). Erfahren Sie mehr über [Reiseführer hier](../../plan-route/travel-guides.md).


## Verwandte Artikel {#related-articles}

- [Karte konfigurieren](../../map/configure-map-menu.md)
- [Kartenzeichenerklärung](../../map-legend/osmand.md)
- [Routen](./index.md)