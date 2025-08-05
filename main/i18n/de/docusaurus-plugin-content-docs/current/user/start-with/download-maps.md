---
source-hash: e1ed0c38654083ff1654ec38b2f9235f0e80e91f2cdccf6bfa4e90d11da491a5
sidebar_position: 2
title: Karten herunterladen
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

Das Hochladen von Karten in die OsmAnd-App ist ein wichtiger Schritt, um einen reibungslosen Betrieb und die Nutzung der Offline-Navigation zu gewährleisten. Ohne Offline-Karten kann die App nicht vollständig funktionieren. Das Herunterladen von Karten ermöglicht Ihnen den Zugriff auf Karten verschiedener Regionen, sodass Sie ohne Internetverbindung navigieren können.

Sie haben zwei *Hauptmöglichkeiten*, Karten herunterzuladen: **1)** [die Liste der Regionen im *Hauptmenü* anzeigen](#maps-and-resources), oder **2)** [die gewünschte Region direkt auf der Karte auswählen](#select-on-the-map). Dies gibt Ihnen die Flexibilität, die gewünschten Regionen auszuwählen und stellt sicher, dass die Karten zu Ihren Plänen passen.

Obwohl OsmAnd sowohl [Vektor-](../map/vector-maps.md) als auch [Rasterkarten](../map/raster-maps.md) unterstützt, wird empfohlen, mit Vektorkarten offline zu arbeiten. Dieser Kartentyp (lesen Sie hier mehr über [OsmAnd-Kartentypen](../personal/maps-resources.md#map-types)) gewährleistet den zuverlässigen Betrieb aller wichtigen Funktionen der Anwendung, einschließlich [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md). Dies ist besonders wichtig, wenn Ihre Reisen Ausflüge in abgelegene Orte oder Orte mit begrenztem Internetzugang umfassen.


## Herunterladen {#download}

Beginnen Sie mit dem Laden von Karten über den [Ersteinrichtungsbildschirm](#initial-setup-screen), oder gehen Sie zum Haupt-*Seitenmenü* *→* [Karten & Ressourcen](#maps-and-resources) und wählen Sie die gewünschten Karten aus der allgemeinen Liste aus, oder [wählen Sie eine Region](#select-on-the-map) direkt auf der Karte aus, indem Sie auf die gewünschte Region tippen.


### Ersteinrichtungsbildschirm {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Beim ersten Start der Anwendung werden Sie aufgefordert, eine Karte herunterzuladen, die auf Ihren aktuellen Standort zugeschnitten ist, der durch Ihre Internetverbindung bestimmt wird. Dieser Schritt ist optional, sodass Sie den Download überspringen und direkt zur lokalen Kartenoberfläche für Ihre Region wechseln können.

Wenn Sie ein VPN verwenden, schlägt OsmAnd möglicherweise eine Karte vor, die auf dem virtuellen Standort des VPNs basiert. In solchen Fällen können Sie manuell eine Karte auswählen, die besser zu Ihrer tatsächlichen geografischen Region passt.


#### Drei-Punkte-Menü {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte herunterladen Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Karte herunterladen iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Standortmenü:**

- *Eine andere Region auswählen.* Öffnet das Menü [Karten herunterladen](#maps-and-resources).
- *Erlauben Sie uns, Ihren Standort zu bestimmen.* [Fordert die Berechtigung an](../start-with/first-steps.md#permission-to-access-the-location), auf den Standort zuzugreifen und die erforderliche Karte mithilfe dieser Daten zu finden.

**Anderes Menü:**

- *Aus OsmAnd Cloud wiederherstellen.* Öffnet den Hauptbildschirm oder den Anmeldebildschirm von [OsmAnd Cloud](../personal/osmand-cloud.md). Dies ist nützlich, wenn Sie die App neu installiert haben oder die vorherige Benutzererfahrung wiederherstellen möchten, ohne Regionen und Einstellungen neu auswählen zu müssen.
- *Aus Datei wiederherstellen.* Öffnet den Dateimanager des Geräts, um eine `.osf`-Datei auszuwählen und zu importieren.


### Karten und Ressourcen {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download-Kartenmenü allgemein Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download-Kartenmenü allgemein iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Der Bildschirm [Karten & Ressourcen](../personal/maps-resources.md) bietet Zugriff auf die folgenden Abschnitte:

- [Downloads](../personal/maps-resources.md#downloads). Bietet eine umfassende Auswahl an [OsmAnd-Kartentypen](../personal/maps-resources.md#map-types).
- [Lokal](../personal/maps-resources.md#local). Zeigt alle Kartendaten an, die derzeit auf Ihrem Gerät gespeichert sind, einschließlich benutzerdefinierter und importierter Ressourcen.
- [Updates](../personal/maps-resources.md#updates). Ermöglicht Ihnen, Karten monatlich zu aktualisieren, um Ihre Daten auf dem neuesten Stand zu halten.

#### Karten herunterladen {#downloading-maps}

Um einen bestimmten Kartentyp für ein Land oder eine Region herunterzuladen:

- Navigieren Sie zum Ordner für die gewünschte Region, z. B. Afrika, Europa oder einen anderen Kontinent.
- Wählen Sie Ihr bevorzugtes Land oder Ihre Region aus der Liste aus.
- Auf dem nächsten Bildschirm überprüfen und wählen Sie aus den verfügbaren Kartentypen für dieses Gebiet.

Informationen zu anderen Kartentypen finden Sie im Abschnitt [Downloads](../personal/maps-resources.md#downloads) des Artikels **Karten**.

### Weltkartenoptionen {#world-map-options}

OsmAnd enthält zwei Weltkartenoptionen:

1. **Mini-Weltkarte** (vorinstalliert). Eine leichte Karte, die grundlegende Navigation ermöglicht und einen Überblick über die Welt bietet.
2. **Detaillierte Weltkarte** (herunterladbar). Eine globale Karte mit wichtigen Städten, Straßen, Flüssen und anderen geografischen Merkmalen.

***Wichtige Hinweise:***

- Die **Detaillierte Weltkarte ersetzt keine einzelnen Länder- oder Regionalkarten.** Sie ist nützlich für einen Überblick, enthält aber nicht den gleichen Detaillierungsgrad wie Regionalkarten.
- Wenn Sie eine detaillierte Navigation benötigen, **laden Sie spezifische Länder- oder Regionalkarten manuell herunter** über *Menü → Karten & Ressourcen → Karten herunterladen.*
- Benutzer mit **OsmAnd Pro oder Maps+** können eine **unbegrenzte Anzahl von Karten herunterladen**, müssen aber jede Region weiterhin separat herunterladen.
- **Es gibt keine einzelne Option, um alle Weltkarten auf einmal herunterzuladen.**


### Auf der Karte auswählen {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kurzes Tippen auf die Weltkarte ermöglicht das Herunterladen einer Regionskarte](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kurzes Tippen auf die Weltkarte ermöglicht das Herunterladen einer Regionskarte](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Eine Möglichkeit, eine Karte herunterzuladen, besteht darin, auf der Weltkarte herauszuzoomen und kurz zu tippen, um eine Region zum Herunterladen auszuwählen. Dieser Bereich wird gelb hervorgehoben, und ein Panel erscheint unten mit dem Namen der Region und einem Vorschlag, sie herunterzuladen oder andere Karten auszuwählen.

:::tip Kartenfarbe
Auf dem kleinen Bildschirm wird die zum Herunterladen ausgewählte Karte gelb hervorgehoben, bereits heruntergeladene Karten werden grün hervorgehoben und deaktivierte Karten werden orange hervorgehoben. **Deaktivierte** Karten werden umgangen, um das Programm zu beschleunigen, falls Sie viele geladene Karten haben.
:::

### Suche {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchfunktion zum Herunterladen von Karten Android](@site/static/img/settings/search_download_map_3_andr.png) ![Suchfunktion zum Herunterladen von Karten Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchfunktion zum Herunterladen von Karten iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Suchfunktion zum Herunterladen von Karten iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Die Suche erleichtert das Auffinden einer bestimmten Karte oder Region und bietet eine bequeme und schnelle Möglichkeit, die benötigten Daten herunterzuladen. Sie können die Karte mithilfe der [Suchfunktion](../search/index.md) finden und herunterladen.

- Starten Sie eine Suche, indem Sie den Namen eines Landes oder einer Region in das Suchfeld eingeben. Wählen Sie dann die gewünschte Karte aus der angezeigten Liste aus.
- Zum Herunterladen verfügbare Karten werden grau mit einem Download-Symbol angezeigt, heruntergeladene Karten sind grün und haben eine Menüschaltfläche.
- Tippen Sie auf den Namen des gewünschten Ergebnisses, und die Liste der regionalen Karten wird geöffnet.
- Wählen Sie [Kartentypen](../personal/maps-resources.md#map-types): *Standardkarte, Nur-Straßen-Karte, Höhenlinien, Wikipedia*.

> *Zuletzt aktualisiert: Januar 2025*