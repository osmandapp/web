---
source-hash: 0e2f6c946c393607b5033a3e8d96b50750de7efd28c223841bc9d886f3ec9f2d
sidebar_position: 10
title:  Routen
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



## Überblick {#overview}

OsmAnd verfügt über viele leistungsstarke Funktionen zur Anzeige verschiedener [Routen](#type-of-routes) auf der Karte. Standardmäßig sind diese Routen Teil von [Vektorkarten](./vector-maps.md#routes) (OpenStreetMap-Daten), aber ähnliche Funktionen werden von [Tracks](./tracks/index.md) bereitgestellt, die mit [Route planen](../plan-route/create-route.md) erstellt, als [GPX-Tracks](#save-as-a-track) importiert oder mit dem [Trip Recording Plugin](../plugins/trip-recording.md) aufgezeichnet werden können.


## Routentypen {#type-of-routes}

Routen stellen verschiedene Outdoor-Aktivitäten dar, die Daten von [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) verwenden. Durch Tippen auf **das Schildsymbol mit einer Routennummer oder einem Routenflag** auf der Karte wird ein Kontextmenü geöffnet, das zusätzliche Informationen über die Route liefert und die Verwendung als Teil der Navigation ermöglicht.

Sie können die Filterung einiger Routentypen im Menü [Karte konfigurieren](../map/configure-map-menu.md) konfigurieren.

### Radrouten {#cycle-routes}

[Radrouten](https://wiki.openstreetmap.org/wiki/Cycle_routes) gibt es in drei Typen: *lokal* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Außerdem können Radrouten Teil von [Knotennetzen](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) sein. Sie können wählen, wie die Routensegmente eingefärbt werden sollen:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Weitere Informationen finden Sie im Artikel [Kartenlegende](../map-legend/index.md).


### Mountainbike-Routen {#mountain-bike-routes}

MTB-Routen haben eine spezifische Kartierung in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) und können separat von Radrouten ausgewählt werden.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Zeigt Trails entsprechend der MTB-Skala an. Weitere Informationen finden Sie im Artikel [Kartenlegende](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Zeigt MTB-Trails gemäß der International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/) an. Weitere Informationen finden Sie im Artikel [Kartenlegende](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Zeigt Trails entsprechend der MTB-Skala an. Weitere Informationen finden Sie im Artikel [Kartenlegende](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Zeigt MTB-Trails gemäß der International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/) an. Weitere Informationen finden Sie im Artikel [Kartenlegende](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Wanderrouten {#hiking--walking-routes}

[Wanderrouten](https://wiki.openstreetmap.org/wiki/Walking_Routes) gibt es in drei Typen: *lokal* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Außerdem können Wanderrouten Teil von [Knotennetzen](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network) sein. OsmAnd trennt Wander- und Wanderrouten nicht und fasst sie in einer Gruppe zusammen. Sie können wählen, wie die Routensegmente eingefärbt werden sollen:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Färbt Routen entsprechend ihrer individuellen [lokalen Farbe](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (falls in OpenStreetMap verfügbar) und dem touristischen Schildsymbol.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Färbt nach [Netzwerkzugehörigkeit](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Färbt Routen entsprechend dem Typ des [Knotennetzes](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional oder lokal).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Dirt Bike Trails {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Die Funktion **Dirt Bike Trails** ermöglicht es Ihnen, Dirtbike-spezifische Routen auf der Karte basierend auf dem Tag `dirtbike:scale` anzuzeigen. Diese Skala hebt Trails hervor, die für Dirtbiking geeignet sind, mit einer farbigen Überlagerung, die Schwierigkeitsgrade anzeigt.  

Sie können diese Funktion in *Menü → Karte konfigurieren → Routen → Dirt Bike Routen* aktivieren. Das System funktioniert ähnlich wie die MTB-Skala und bietet eine visuelle Darstellung von Routen, die auf Dirtbiking zugeschnitten sind – mehr über das [`dirtbike`-Tag finden Sie hier](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Kletterrouten {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd unterstützt *Klettergebiete* (`climbing=area`) und *Kletterfelsen* (`climbing=crag`), sodass Sie [Kletterorte](https://wiki.openstreetmap.org/wiki/Climbing) direkt auf der Karte finden können.

- **Klettergebiete** stellen **größere Zonen** dar, in denen mehrere Kletterrouten existieren.

- **Kletterfelsen** beziehen sich auf **spezifische Felsformationen** oder Wände, die zum Klettern geeignet sind.

- Diese Orte enthalten **detaillierte Attribute** wie:

    - *Klettergrad* (z. B. UIAA, Französisch, YDS).
    - *Gesteinsart* (z. B. Kalkstein, Granit).
    - *Routenlänge* (in Metern).
    - *Kletterqualität* (fest, locker, gemischt).
    - *Verfügbarkeit eines Gipfelbuchs*.

Um Kletterorte auf der Karte zu aktivieren, gehen Sie zu: *Menü → Karte konfigurieren → Routen → Kletterrouten*.


### Schwierigkeitsgrad von Wanderwegen {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Einige Straßenabschnitte können Teil vieler Routen sein, aber sie können individuell eingefärbt werden, um die Schwierigkeit des Abschnitts in Berggebieten darzustellen. Derzeit unterstützt OsmAnd italienische und schweizerische Klassifikationen, und jede hat eine spezifische Liste von Ausrüstungsanforderungen für den Zugang zu diesem Abschnitt.  

1. [SAC-Skala](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI-Skala](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Skirouten {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Skirouten sind eine spezifische Gruppe von [Routen](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typischerweise können diese Routen mit dem Kartenstil [Winter und Ski](../map/vector-maps.md#winter-and-ski) mit allen sichtbaren [Pisten](https://wiki.openstreetmap.org/wiki/Pistes) verwendet werden.  


### Reitrouten {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Reitrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) werden als farblich gekennzeichnete Routen mit Symbolen für das Reiten angezeigt.  


### Wildwassersport {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Wildwasserrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) werden zusammen mit Zugangssymbolen und Gefahrenzonen für den [Wildwassertourismus](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map) angezeigt.  


### Laufrouten {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Laufrouten](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap werden für benannte, nummerierte oder anderweitig markierte Laufrouten verwendet, hauptsächlich für die Leichtathletik.


### Fitnesspfade {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Ein [Fitnesspfad](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) ist ein Pfad oder Weg, der entlang seiner Länge mit Hindernissen oder Stationen ausgestattet ist, um den menschlichen Körper zu trainieren und die Gesundheit zu verbessern.  


### Reiserouten {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Reiserouten sind Teil benutzerdefinierter [Reiseführer](../plan-route/travel-guides.md) (`travel.obf`), die aus den [Routen des Benutzers](https://osmand.net/blog/routes#generated-travel-routes) generiert werden können oder Teil zusätzlicher [Plugins](../plugins/index.md) sein können.  

Sie können die Anzeige bestimmter ***Reiseführer*** und Arten von ***Tracks*** anpassen, Tracks als Punkte oder ***Punktgruppen*** anzeigen (z. B. für Wikivoyage-Reiseführer). Erfahren Sie hier mehr über [Reiseführer](../plan-route/travel-guides.md).


## Routen auf der Karte anzeigen {#display-routes-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Um die gewünschten Routen auf der Karte anzuzeigen, aktivieren Sie sie in der *Routenliste* des Menüs [Karte konfigurieren](../map/configure-map-menu.md).
- OsmAnd kann [in OpenStreetMap vorhandene Routen](https://wiki.openstreetmap.org/wiki/Relation:route) hervorheben. Sie können durch Tippen auf [das Symbol auf der Route](#save-as-a-track) ausgewählt werden, und wenn die sichtbare Menge an Routen korrekt konfiguriert ist, können Sie der Farbe und den Symbolen folgen.
- Sie können mit dem Werkzeug [Route planen](../plan-route/create-route.md) einen Track über den Routen erstellen.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)



## Aktionen mit Routen {#actions-with-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Auf der Karte können Sie Routen für [Wandern, Radfahren, Reisen und mehr](#type-of-routes) auswählen, die gegebenenfalls mit [OSMC-Symbolen](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) gekennzeichnet sind.

Wenn Sie auf ein **Routensymbol** auf der Karte tippen:

- Eine **Liste der nahegelegenen Routen** an diesem Ort wird angezeigt.
- Nach Auswahl einer Route aus der Liste wird ein [Kontextmenü](../map/tracks/track-context-menu.md) für diese Route geöffnet, das detaillierte Informationen und verfügbare Aktionen anzeigt.

Im **Kontextmenü** können Sie:

- [Zusätzliche Informationen](#route-info-and-elevation) über die ausgewählte Route anzeigen.
- Die Route als **GPX-Track** [speichern](#save-as-a-track).
- Die Navigation entlang der Route [starten](#start-navigation).


### Routeninfo und Höhenprofil {#route-info-and-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Die folgenden Informationen werden im Kontextmenü sichtbar sein:

- **Routeninfo**: Routenname, OSM-Link (OSM Editing Plugin erforderlich), Typ, Beschreibung, Entfernung, Richtung, Auf-/Abstieg, Höhenbereich, Netzwerk, Betreiber, Zustand, Farbe, Rundweg, Start-/Endpunkte und mehr.
- **Allgemein**: Größe, Ort, Erstellt am.
- **Zusätzliche Informationen**. Zeigt die Art der Aktivität an.
- Aktionsschaltflächen: [Speichern als](#save-as-a-track) und [Navigation starten](#start-navigation).
- [Höheninformationen](../navigation/setup/route-details.md#elevation-info). Zeigt Informationen über die Höhendaten auf der Route an.
- [Track auf Karte analysieren](../map/tracks/index.md#analyze-track-on-map). Zeigt eine detaillierte Analyse der Trackdaten mithilfe von Grafiken und Karten an.

Um ein Diagramm des Höhenprofils, der Steigung oder der Höhendetails für eine ausgewählte Route anzuzeigen, tippen Sie einfach auf einen der folgenden Werte im Kontextmenü: **Entfernung**, **Aufstieg**, **Abstieg** oder **Höhe**.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Als Track speichern {#save-as-a-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Um die Route als *GPX-Datei* zu speichern, tippen Sie auf die Schaltfläche **Speichern (Herunterladen)** unter dem [Infopanel](../map/tracks/track-context-menu.md#info-panel). Dadurch wird das Panel mit den [Schnellaktionen](../map/tracks/track-context-menu.md#track-actions) geöffnet, wo Sie Zugriff auf Track-Aktionen wie das Ändern des [Aussehens](./tracks/appearance.md), der [Navigation](../navigation/setup/route-navigation.md) oder das Bearbeiten von [Route planen](../plan-route/create-route.md) haben.


### Navigation starten {#start-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Um die Navigation entlang der ausgewählten OSM-Route zu starten, tippen Sie auf die Schaltfläche **Navigation starten** im [**Infopanel**](../map/tracks/track-context-menu.md#info-panel).

Dadurch wird der Modus [**Navigation nach Track**](../navigation/setup/gpx-navigation.md) gestartet, der es Ihnen ermöglicht, der Route mit Sprachführung und Navigationsfunktionen zu folgen.



### Schnellaktionen {#quick-actions}

Sie können anpassen, ob Routen ein- oder ausgeschaltet werden, indem Sie das Widget [Schnellaktion](../widgets/quick-action.md#configure-map) verwenden.


## Routensuche {#routes-search}

Finden Sie Routen mithilfe der [Suchfunktion](../search/index.md) nach Namen oder durch Auswahl von "Routen" im Abschnitt [Kategorien](../search/search-poi.md#).

Zum Suchen gehen Sie zum Menü *<Translate android="true" ids="search_button"/>* oder *<Translate android="true" ids="search_button,search_categories"/>* und geben Sie Ihre Aktivität ein.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Navigieren Sie zu *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, um die gewünschten Routen zu finden. Routen enthalten Name, Aktivitätstyp, Länge, Ort und Entfernung zum nächsten Punkt.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Verwenden Sie die Filterschaltfläche (oben rechts), um nur die gewünschten Routen anzuzeigen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Verwandte Artikel {#related-articles}

- [Karten Kontextmenü](./map-context-menu.md)
- [Karte konfigurieren](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Tracks Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Nahverkehr](./public-transport.md)
- [Aussehen der Navigationsroutenlinie](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Zuletzt aktualisiert: Mai 2025*