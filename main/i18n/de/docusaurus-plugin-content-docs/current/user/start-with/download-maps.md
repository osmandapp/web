---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
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

Das Hochladen von Karten in die OsmAnd-App ist ein wichtiger Schritt, um einen reibungslosen Betrieb und die Nutzung der Offline-Navigation zu gewährleisten. Ohne Offline-Karten kann die App nicht voll funktionsfähig sein. Das Herunterladen von Karten ermöglicht Ihnen den Zugriff auf Karten verschiedener Regionen, sodass Sie ohne Internetverbindung navigieren können.

Sie haben zwei *Hauptmöglichkeiten*, Karten herunterzuladen: **1)** [Anzeigen der Liste der Regionen im *Hauptmenü*](#maps-and-resources) oder **2)** [Auswählen der gewünschten Region direkt auf der Karte](#select-on-the-map). Dies gibt Ihnen die Flexibilität, die gewünschten Regionen auszuwählen und stellt sicher, dass die Karten zu Ihren Plänen passen.

Obwohl OsmAnd sowohl [Vektor-](../map/vector-maps.md) als auch [Rasterkarten](../map/raster-maps.md) unterstützt, wird empfohlen, mit Vektorkarten offline zu arbeiten. Dieser Kartentyp (mehr dazu unter [OsmAnd Kartentypen](../personal/maps-resources.md#map-types)) gewährleistet die zuverlässige Funktion aller wichtigen Funktionen der Anwendung, einschließlich [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md). Dies ist besonders wichtig, wenn Ihre Reisen Ausflüge an entlegene Orte oder Orte mit begrenztem Internetzugang umfassen.


## Download {#download}

Beginnen Sie mit dem Laden von Karten über den [Bildschirm für die Ersteinrichtung](#initial-setup-screen) oder gehen Sie zum Haupt-*Seitenmenü* *→* [Karten & Ressourcen](#maps-and-resources) und wählen Sie die gewünschten Karten aus der allgemeinen Liste aus, oder [wählen Sie eine Region](#select-on-the-map) direkt auf der Karte aus, indem Sie auf die gewünschte Region tippen.


### Bildschirm für die Ersteinrichtung {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Beim ersten Start der Anwendung werden Sie aufgefordert, eine Karte herunterzuladen, die auf Ihren aktuellen Standort zugeschnitten ist, der durch Ihre Internetverbindung bestimmt wird. Dieser Schritt ist optional, sodass Sie den Download überspringen und direkt zur lokalen Kartenoberfläche für Ihre Region wechseln können.

Wenn Sie ein VPN verwenden, schlägt OsmAnd möglicherweise eine Karte basierend auf dem virtuellen Standort des VPNs vor. In solchen Fällen können Sie manuell eine Karte auswählen, die besser zu Ihrer tatsächlichen geografischen Region passt.


#### Drei-Punkte-Menü {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Standortmenü:**

- *Andere Region auswählen.* Öffnet das Menü [Karten herunterladen](#maps-and-resources).
- *Erlauben Sie uns, Ihren Standort zu bestimmen.* [Fordert die Berechtigung](../start-with/first-steps.md#permission-to-access-the-location) zum Zugriff auf den Standort an und findet die gewünschte Karte anhand dieser Daten.

**Anderes Menü:**

- *Aus OsmAnd Cloud wiederherstellen.* Öffnet den Hauptbildschirm oder den Anmeldebildschirm von [OsmAnd Cloud](../personal/osmand-cloud.md). Dies ist nützlich, wenn Sie die App neu installiert haben oder die vorherige Benutzererfahrung wiederherstellen möchten, ohne Regionen und Einstellungen neu auswählen zu müssen.
- *Aus Datei wiederherstellen.* Öffnet den Dateimanager des Geräts, um eine `.osf`-Datei auszuwählen und zu importieren.


### Karten & Ressourcen {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Der Bildschirm [Karten & Ressourcen](../personal/maps-resources.md) bietet Zugriff auf die folgenden Abschnitte:

- [Downloads](../personal/maps-resources.md#downloads). Bietet eine umfassende Auswahl an [OsmAnd Kartentypen](../personal/maps-resources.md#map-types).
- [Lokal](../personal/maps-resources.md#local). Zeigt alle Kartendaten an, die derzeit auf Ihrem Gerät gespeichert sind, einschließlich benutzerdefinierter und importierter Ressourcen.
- [Updates](../personal/maps-resources.md#updates). Ermöglicht Ihnen, Karten monatlich zu aktualisieren, um Ihre Daten auf dem neuesten Stand zu halten.

#### Karten herunterladen {#downloading-maps}

So laden Sie einen bestimmten Kartentyp für ein Land oder eine Region herunter:

- Navigieren Sie zum Ordner für die gewünschte Region, z. B. Afrika, Europa oder einen anderen Kontinent.
- Wählen Sie Ihr bevorzugtes Land oder Ihre bevorzugte Region aus der Liste aus.
- Überprüfen Sie auf dem nächsten Bildschirm die verfügbaren Kartentypen für diesen Bereich und wählen Sie sie aus.

Informationen zu anderen Kartentypen finden Sie im Abschnitt [Downloads](../personal/maps-resources.md#downloads) des Artikels **Karten**.

### Weltkartenoptionen {#world-map-options}

OsmAnd enthält zwei Weltkartenoptionen:

1. **Mini-Weltkarte** (vorinstalliert). Eine leichte Karte, die grundlegende Navigation ermöglicht und einen Überblick über die Welt bietet.
2. **Detaillierte Weltkarte** (herunterladbar). Eine globale Karte mit wichtigen Städten, Straßen, Flüssen und anderen geografischen Merkmalen.

***Wichtige Hinweise:***

- Die **Detaillierte Weltkarte ersetzt keine einzelnen Länder- oder Regionenkarten.** Sie ist nützlich für einen Überblick, enthält aber nicht denselben Detaillierungsgrad wie regionale Karten.
- Wenn Sie eine detaillierte Navigation benötigen, **laden Sie bestimmte Länder- oder Regionenkarten manuell herunter** über *Menü → Karten & Ressourcen → Karten herunterladen.*
- Benutzer mit **OsmAnd Pro oder Maps+** können eine **unbegrenzte Anzahl von Karten** herunterladen, müssen aber jede Region separat herunterladen.
- **Es gibt keine einzige Option, um alle Weltkarten auf einmal herunterzuladen.**


### Auf Karte auswählen {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Short tap the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Eine Möglichkeit, eine Karte herunterzuladen, besteht darin, auf der Weltkarte herauszuzoomen und kurz darauf zu tippen, um eine Region zum Herunterladen auszuwählen. Dieser Bereich wird gelb hervorgehoben, und unten wird ein Feld mit dem Namen der Region und einem Vorschlag zum Herunterladen oder zur Auswahl anderer Karten angezeigt.

:::tip Kartenfarbe
Auf dem kleinen Bildschirm wird die zum Herunterladen ausgewählte Karte gelb hervorgehoben, bereits heruntergeladene Karten werden grün hervorgehoben und deaktivierte Karten werden orange hervorgehoben. **Deaktivierte** Karten werden übersprungen, um das Programm zu beschleunigen, falls Sie viele geladene Karten haben.
:::

### Suche {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_3_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Die Suche erleichtert das Auffinden einer bestimmten Karte oder Region und bietet eine bequeme und schnelle Möglichkeit, die benötigten Daten herunterzuladen. Sie können die Karte mithilfe der [Suchfunktion](../search/index.md) finden und herunterladen.

- Starten Sie eine Suche, indem Sie den Namen eines Landes oder einer Region in das Suchfeld eingeben. Wählen Sie dann die gewünschte Karte aus der angezeigten Liste aus.
- Zum Herunterladen verfügbare Karten werden grau mit einem Download-Symbol angezeigt, heruntergeladene Karten haben eine grüne Farbe und eine Menüschaltfläche.
- Tippen Sie auf den Namen des gewünschten Ergebnisses, und die Liste der regionsweiten Karten wird geöffnet.
- Wählen Sie [Kartentypen](../personal/maps-resources.md#map-types): *Standardkarte, Nur-Straßen-Karte, Höhenlinien, Wikipedia*.

> *Zuletzt aktualisiert: Januar 2025*