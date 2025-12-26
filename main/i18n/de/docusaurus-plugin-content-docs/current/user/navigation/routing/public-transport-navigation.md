---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
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

## ÖPNV-Typen {#public-transport-types}

Sie können gut kuratierte ÖPNV-Routen nach Ihren Vorlieben suchen und wählen, ob Sie:

- Busse (und Oberleitungsbusse) vermeiden
- U-Bahnen vermeiden
- Züge vermeiden
- Straßenbahnen vermeiden
- Fähren vermeiden
- Share Taxis vermeiden

Standardmäßig sucht OsmAnd nach Routen, die alle unterstützten Typen des öffentlichen Verkehrs umfassen.

## Alternative Routen {#alternative-routes}

Alternative Routen sind Abschnitte einer Route, die von verschiedenen Verkehrsdiensten bedient werden und denselben Pfad und dieselben Haltestellen teilen.

Verschiedene Verkehrsdienste können unterschiedliche Routennummern (refs) oder sogar unterschiedliche Verkehrstypen verwenden.

Die Benutzeroberfläche zeigt Alternative Routen als farbige Abzeichen mit ihren refs an.

## Leistung und Ergebnisse {#performance-and-results}

**ÖPNV-Profil -> Einstellungen -> Navigations-Einstellungen -> Routenparameter**

1. **Maximale Anzahl von Umstiegen**.

Die Leistung und der Speicherverbrauch des ÖPNV-Routers hängen von der Suchtiefe ab.

Der wichtigste Parameter, der diese Tiefe beeinflusst, ist die **Maximale Anzahl von Umstiegen**.

Wir verwenden **2** als Standardwert, der für moderne ÖPNV-Netzwerke optimal erscheint.

Wenn Sie auf niedrige Leistung oder Speichermangel-Fehler stoßen, versuchen Sie, diesen Wert zu verringern.

Wenn Sie in einer kleinen Stadt sind oder kurze Routen fahren, könnte ein Wert von **1** besser funktionieren.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Daten und Richtlinien {#data-and-guideline}

OsmAnd verwendet ein neues Schema für den öffentlichen Nahverkehr, auch Public Transport Version 2 (PTv2) genannt, für den OsmAnd-Navigationsalgorithmus für den öffentlichen Nahverkehr.

- Sie können Ihren öffentlichen Nahverkehr [hier](http://tools.geofabrik.de/osmi/) überprüfen.
- Eine Anleitung zum Erstellen oder Anpassen von ÖPNV-Routen finden Sie in unserem [Blog](https://osmand.net/blog/guideline-pt).
- Die Präsentation [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).