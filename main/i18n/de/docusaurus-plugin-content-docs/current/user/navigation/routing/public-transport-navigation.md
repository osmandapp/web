---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
sidebar_position: 5
title:  ÖPNV-Routenführung
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

Die ÖPNV-Navigation in der OsmAnd-App ermöglicht es Ihnen, Routen mit öffentlichen Verkehrsmitteln zu erstellen, was Ihnen sicherlich helfen wird, sich im "Betondschungel" schneller fortzubewegen.

Die Daten zu den ÖPNV-Routen stammen aus dem [OpenStreetMap](http://openstreetmap.org/)-Projekt. OsmAnd verwendet das [PTv2-Schema](https://wiki.openstreetmap.org/wiki/Public_transport) für die Navigation. OsmAnd unterstützt die folgenden OpenStreetMap-Routen für die Navigation: *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. Die Standardgeschwindigkeit für jeden Fahrzeugtyp ist in der [Routing-XML](../../../technical/build-osmand/routing.md) konfiguriert und wird verwendet, um die schnellsten Routen zu finden.

:::note
Die ÖPNV-Routenführung befindet sich in der Testphase. Vorerst können Sie Ihre Route erstellen und anzeigen, ohne die vollständige Navigationsfunktion zu nutzen.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentlicher Verkehr Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentlicher Verkehr iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Wie man es benutzt {#how-to-use}

Um die Navigation mit öffentlichen Verkehrsmitteln in der Stadt zu starten, verwenden Sie die [Schaltfläche "Navigation"](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm oder wählen Sie die Navigationsoption im *Hauptmenü*.  

**1.** Sie müssen das *Navigationsprofil für öffentliche Verkehrsmittel*, den Start- und den Zielpunkt auswählen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentlicher Verkehr Routen Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentlicher Verkehr Routen iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd bietet Routenoptionen mit Gehzeiten und Routen mit öffentlichen Verkehrsmitteln mit Routeninformationen: Zeit, Entfernung, Umstiege und öffentliche Routen. Sie müssen durch den Navigationsbildschirm scrollen, um die gewünschte Option auszuwählen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentlicher Verkehr Weg Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentlicher Verkehr Weg iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Sie können alle möglichen Routenvorschläge auf der Karte mit der Schaltfläche *Auf Karte anzeigen* ansehen. Wischen Sie durch die Bildschirme, um die nächste Routenoption anzuzeigen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentlicher Verkehr Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentlicher Verkehr Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Tippen Sie auf die Schaltfläche "Details", um eine Beschreibung der ausgewählten Route mit allen Haltestellen und Umstiegen zu öffnen.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation öffentlicher Verkehr Haltestellenliste Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation öffentlicher Verkehr Haltestellenliste iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Daten und Richtlinien {#data-and-guideline}

OsmAnd verwendet ein neues Schema für den öffentlichen Nahverkehr, auch Public Transport Version 2 (PTv2) genannt, für den OsmAnd-Navigationsalgorithmus für den öffentlichen Nahverkehr.

- Sie können Ihren öffentlichen Nahverkehr [hier](http://tools.geofabrik.de/osmi/) überprüfen.
- Eine Anleitung zum Erstellen oder Anpassen von ÖPNV-Routen finden Sie in unserem [Blog](https://osmand.net/blog/guideline-pt).
- Die Präsentation [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).