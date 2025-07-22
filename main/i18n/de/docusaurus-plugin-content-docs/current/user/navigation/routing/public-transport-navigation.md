---
source-hash: 4555734ace3e7132cbe343a64b51b8a14b9f7d50262e566f5b87185e156e7f36
sidebar_position: 5
title:  Öffentliche Verkehrsmittel Routing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Übersicht {#overview}

Die Navigation mit öffentlichen Verkehrsmitteln in der OsmAnd-App ermöglicht es Ihnen, Routen mit öffentlichen Verkehrsmitteln zu planen, was Ihnen sicherlich helfen wird, schneller durch den "Beton-Dschungel" zu gelangen.

Daten zu öffentlichen Verkehrsrouten stammen aus dem [OpenStreetMap](http://openstreetmap.org/)-Projekt. OsmAnd verwendet das [PTv2-Schema](https://wiki.openstreetmap.org/wiki/Public_transport) für die Navigation. OsmAnd unterstützt die Navigation auf folgenden OpenStreetMap-Routen: *Bus*, *Oberleitungsbus*, *Sammeltaxi*, *Standseilbahn*, *U-Bahn*, *Stadtbahn*, *Einschienenbahn*, *Zug*, *Straßenbahn*, *Fähre*. Die Standardgeschwindigkeit für jeden Fahrzeugtyp ist in [Routing xml](../../../technical/build-osmand/routing.md) konfiguriert und wird verwendet, um die schnellsten Routen zu finden.

:::note
Das Routing mit öffentlichen Verkehrsmitteln befindet sich in der Testphase. Vorerst können Sie Ihre Route erstellen und anzeigen, jedoch ohne die vollständige Navigationsfunktion.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentliche Verkehrsmittel Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentliche Verkehrsmittel iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Wie benutzt man {#how-to-use}

Um mit der Navigation durch die Stadt mit öffentlichen Verkehrsmitteln zu beginnen, verwenden Sie [die Navigationsschaltfläche](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm oder wählen Sie die Navigationsoption im *Hauptmenü*.

**1.** Sie müssen das *Navigationsprofil für öffentliche Verkehrsmittel* sowie Start- und Zielpunkte auswählen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentliche Verkehrsmittel Routen Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentliche Verkehrsmittel Routen iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd bietet Routenoptionen mit Gehzeiten und öffentlichen Verkehrsrouten mit Routeninformationen: Zeit, Entfernung, Umsteigen und öffentliche Routen. Sie müssen den Navigationsbildschirm durchblättern, um die gewünschte Option auszuwählen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentliche Verkehrsmittel Weg Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentliche Verkehrsmittel Weg iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Sie können alle möglichen Routenvorschläge auf der Karte mit der Schaltfläche *Auf Karte anzeigen* anzeigen. Wischen Sie durch die Bildschirme, um die nächste Routenoption anzuzeigen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentliche Verkehrsmittel Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentliche Verkehrsmittel Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Tippen Sie auf die Schaltfläche "Details", um eine Beschreibung der ausgewählten Route mit allen Haltestellen und Umstiegen zu öffnen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentliche Verkehrsmittel Haltestellenliste Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentliche Verkehrsmittel Haltestellenliste iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Daten und Richtlinien {#data-and-guideline}

OsmAnd verwendet ein neues Schema für öffentliche Verkehrsmittel, auch bekannt als Public Transport Version 2 (PTv2), für den OsmAnd Public Transport Navigationsalgorithmus.

- Sie können Ihre öffentlichen Verkehrsmittel [hier](http://tools.geofabrik.de/osmi/) überprüfen.
- Eine Anleitung zum Erstellen oder Anpassen von öffentlichen Verkehrsrouten finden Sie in unserem [Blog](https://osmand.net/blog/guideline-pt).
- Die Präsentation [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Zuletzt aktualisiert: Juni 2024.*