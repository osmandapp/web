---
source-hash: 02488ffc13aed2fc0d33253f071c8dbb2d3bc8a182a496a94f4a68885929b5dd
sidebar_position: 2
title:  Karten herunterladen
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

Das Herunterladen von Karten in die OsmAnd-App ist ein wichtiger Schritt, um einen reibungslosen Betrieb und die Nutzung der Offline-Navigation zu gewährleisten. Ohne Offline-Karten kann die App nicht voll funktionsfähig sein. Das Herunterladen von Karten ermöglicht Ihnen den Zugriff auf Karten verschiedener Regionen, sodass Sie ohne Internetverbindung navigieren können.  

Sie haben zwei *Hauptmöglichkeiten*, Karten herunterzuladen: **1)** Beginnen Sie auf dem [Bildschirm für die Ersteinrichtung](#initial-setup-screen) oder sehen Sie sich die Liste der Regionen im *Hauptmenü* an ([Karten & Ressourcen](#maps-and-resources)), oder **2)** [wählen Sie die gewünschte Region direkt auf der Karte aus](#select-on-the-map). Dies gibt Ihnen die Flexibilität, die gewünschten Regionen auszuwählen und sicherzustellen, dass die Karten zu Ihren Plänen passen.  

Obwohl OsmAnd sowohl [Vektor-](../map/vector-maps.md) als auch [Rasterkarten](../map/raster-maps.md) unterstützt, wird empfohlen, mit Vektorkarten offline zu arbeiten. Dieser Kartentyp (lesen Sie hier mehr über [OsmAnd-Kartentypen](../personal/maps-resources.md#map-types)) gewährleistet den zuverlässigen Betrieb aller Schlüsselfunktionen der Anwendung, einschließlich [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md). Dies ist besonders wichtig, wenn Ihre Reisen Ausflüge zu entlegenen Orten oder Orten mit eingeschränktem Internetzugang beinhalten.


## Bildschirm für die Ersteinrichtung {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Beim ersten Start der Anwendung werden Sie aufgefordert, eine auf Ihren aktuellen Standort zugeschnittene Karte herunterzuladen, die über Ihre Internetverbindung ermittelt wird. Dieser Schritt ist optional, sodass Sie den Download überspringen und direkt zur lokalen Kartenoberfläche für Ihre Region wechseln können.  

Wenn Sie ein VPN verwenden, schlägt OsmAnd möglicherweise eine Karte vor, die auf dem virtuellen Standort des VPNs basiert. In solchen Fällen können Sie manuell eine Karte auswählen, die besser zu Ihrer tatsächlichen geografischen Region passt.  


### Drei-Punkte-Menü {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Standortmenü:**

- *Eine andere Region auswählen.* Öffnet das [Karten herunterladen](#maps-and-resources) Menü.
- *Erlauben Sie uns, Ihren Standort zu bestimmen.* [Fordert die Berechtigung](../start-with/first-steps.md#permission-to-access-the-location) zum Zugriff auf den Standort an und findet die erforderliche Karte anhand dieser Daten.

**Anderes Menü:**

- *Aus OsmAnd Cloud wiederherstellen.* Öffnet den Hauptbildschirm oder den Anmeldebildschirm von [OsmAnd Cloud](../personal/osmand-cloud.md). Dies ist nützlich, wenn Sie die App neu installiert haben oder die vorherige Benutzererfahrung wiederherstellen möchten, ohne Regionen und Einstellungen erneut auszuwählen.
- *Aus Datei wiederherstellen.* Öffnet den Dateimanager des Geräts, um eine `.osf`-Datei auszuwählen und zu importieren.  


## Karten & Ressourcen {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Karten-Download-Menü allgemein Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Karten-Download-Menü allgemein iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Der [Karten & Ressourcen](../personal/maps-resources.md)-Bildschirm bietet Zugriff auf die folgenden Abschnitte:

- [Downloads](../personal/maps-resources.md#downloads-menu). Bietet eine umfassende Auswahl an [OsmAnd-Kartentypen](../personal/maps-resources.md#map-types).
- [Lokal](../personal/maps-resources.md#local-menu). Zeigt alle Kartendaten an, die derzeit auf Ihrem Gerät gespeichert sind, einschließlich benutzerdefinierter und importierter Ressourcen.
- [Aktualisierungen](../personal/maps-resources.md#updates-menu). Ermöglicht es Ihnen, Karten monatlich zu aktualisieren, um Ihre Daten auf dem neuesten Stand zu halten.

### Karten herunterladen {#downloading-maps}

So laden Sie einen bestimmten Kartentyp für ein Land oder eine Region herunter:

- Navigieren Sie zum Ordner der gewünschten Region, z. B. Afrika, Europa oder ein anderer Kontinent.
- Wählen Sie Ihr bevorzugtes Land oder Ihre bevorzugte Region aus der Liste aus.
- Überprüfen und wählen Sie auf dem nächsten Bildschirm aus den verfügbaren Kartentypen für dieses Gebiet.

Informationen zu anderen Kartentypen finden Sie im Abschnitt [Downloads](../personal/maps-resources.md#downloads-menu) des Artikels **Karten**.

## Weltkarten-Optionen {#world-map-options}

OsmAnd enthält zwei Weltkartenoptionen:  

1. **Mini-Weltkarte** (vorinstalliert). Eine schlanke Karte, die eine grundlegende Navigation ermöglicht und einen Überblick über die Welt bietet.  
2. **Detaillierte Weltkarte** (herunterladbar). Eine globale Karte mit den wichtigsten Städten, Straßen, Flüssen und anderen geografischen Merkmalen.

***Wichtige Hinweise:***

- Die **detaillierte Weltkarte ersetzt keine einzelnen Länder- oder Regionalkarten.** Sie ist nützlich für einen Überblick, enthält aber nicht den gleichen Detaillierungsgrad wie Regionalkarten.  
- Wenn Sie eine detaillierte Navigation benötigen, **laden Sie bestimmte Länder- oder Regionalkarten manuell herunter** über *Menü → Karten & Ressourcen → Karten herunterladen.*
- Benutzer mit **OsmAnd Pro oder Maps+** können eine **unbegrenzte Anzahl von Karten** herunterladen, müssen aber dennoch jede Region separat herunterladen.  
- **Es gibt keine einzelne Option, um alle Weltkarten auf einmal herunterzuladen.**


## Auf der Karte auswählen {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kurzes Tippen auf die Weltkarte ermöglicht das Herunterladen der Regionskarte](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kurzes Tippen auf die Weltkarte ermöglicht das Herunterladen der Regionskarte](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Eine Möglichkeit, eine Karte herunterzuladen, besteht darin, auf der Weltkarte herauszuzoomen und kurz zu tippen, um eine Region zum Herunterladen auszuwählen. Dieser Bereich wird gelb hervorgehoben, und am unteren Rand erscheint ein Panel mit dem Namen der Region und einem Vorschlag, sie herunterzuladen oder andere Karten auszuwählen.  

:::tip Kartenfarbe  
Auf dem kleinen Bildschirm wird die zum Herunterladen ausgewählte Karte gelb hervorgehoben, bereits heruntergeladene Karten werden grün und deaktivierte Karten orange hervorgehoben. **Deaktivierte** Karten werden übergangen, um das Programm zu beschleunigen, falls Sie viele geladene Karten haben.
:::

## Suche {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchfunktion zum Herunterladen der Karte Android](@site/static/img/settings/search_download_map_3_andr.png) ![Suchfunktion zum Herunterladen der Karte Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchfunktion zum Herunterladen der Karte iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Suchfunktion zum Herunterladen der Karte iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Die Suche erleichtert das Finden einer bestimmten Karte oder Region und bietet eine bequeme und schnelle Möglichkeit, die benötigten Daten herunterzuladen. Sie können die Karte über die [Suchfunktion](../search/index.md) finden und herunterladen.

- Starten Sie eine Suche, indem Sie den Namen eines Landes oder einer Region in das Suchfeld eingeben. Wählen Sie dann die gewünschte Karte aus der erscheinenden Liste aus.
- Zum Download verfügbare Karten werden grau mit einem Download-Symbol angezeigt, heruntergeladene Karten haben eine grüne Farbe und eine Menüschaltfläche.
- Tippen Sie auf den Namen des gewünschten Ergebnisses und die regionsweite Kartenliste wird geöffnet.
- Wählen Sie [Kartentypen](../personal/maps-resources.md#map-types): *Standardkarte, Nur-Straßen-Karte, Höhenlinien, Wikipedia*.