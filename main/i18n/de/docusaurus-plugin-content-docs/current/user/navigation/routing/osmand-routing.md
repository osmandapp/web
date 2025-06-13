---
source-hash: a9031adf54ea8ed9a914776a357c78ff80bb72c461c2e3286aebc8b20b4030e1
sidebar_position: 0
title: Über OsmAnd-Routing
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



## Überblick {#overview}

Das Offline-Routing von OsmAnd basiert auf OpenStreetMap Daten und bietet eine Vielzahl von Routen für verschiedene Zwecke. Dies ist eine Liste vordefinierter Routing-Typen, die erweitert werden können. Die Navigationsregeln sind in der Datei [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) enthalten und werden für das Offline-Routing verwendet. Der Routentyp ändert sich automatisch, wenn Sie Ihr Profil ändern.


## Routing-Typen {#routing-types}

Die folgenden Profile mit ihren Routing-Typen sind in OsmAnd voreingestellt: *Auto, Fahrrad, Fußgänger, LKW, Motorrad, Moped, Öffentliche Verkehrsmittel, Boot, Flugzeug, Skifahren, Zug, Reiten*. Darüber hinaus können Sie Ihre eigenen Profile mit spezifischen Routing-Regeln erstellen oder den [OsmAnd-Routing-Algorithmus ändern](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Die Profile [**LKW, Motorrad, Moped, Zug, Flugzeug, Boot und Reiten**](./osmand-routing.md) sind standardmäßig deaktiviert. Um diese Profile zu verwenden, müssen Sie sie unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.

- Der Navigationstyp [**Direkt zum Punkt**](./direct-to-point-routing.md) hat kein eigenes Profil und kann mit jedem aktivierten Profil verwendet werden.

- Das Offline-Routing von OsmAnd kann **durch Ändern der [.xml-Datei](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)** konfiguriert werden. Weitere Informationen finden Sie im Artikel [*Offline-Routing anpassen*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Kategorie | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *OsmAnd Offline-Routing*  | Der OsmAnd Offline-Routing-Mechanismus verwendet vorab heruntergeladene Karten als Datenquelle für die Routenberechnung. | Navigationstypen: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorrad](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [LKW](car-based-routing#route-parameters---truck), [Zug](./train-routing.md).            |
| *Direkt zum Punkt Routing* | Verwendet ebenfalls Offline Karten und bietet eine geradlinige Routenführung (oder *Punkt-zu-Punkt*-Navigation).  | Navigationstypen: *[Gerade Linie](./straight-line-routing.md)*,  *[Direkt zum Punkt](./direct-to-point-routing.md)*.  |
| [*BRouter* *(offline)*](./brouter.md)  | Offline-Routing, bereitgestellt von der [BRouter-App](https://brouter.de/).  | Nur für **Android** verfügbar. Die vollständige Beschreibung finden Sie [hier](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Online-Routing erstellt die Route online über Serverressourcen mit Internetverbindung. | Nur für **Android** verfügbar. Sie können [Online-Routing](./online-routing.md) konfigurieren, um eine Route von verschiedenen Online-Routing-Engines wie [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX zu erstellen.  |

- *[Auto-Routing (LKW, Motorrad)](./car-based-routing.md)* - OsmAnd bietet Fahranweisungen für Fahrer von Autos, LKWs und Motorrädern.
- *[Fahrrad-Routing (MTB)](./bicycle-based-routing.md)* - Fahrrad-Routing bietet Navigationsanweisungen speziell für Radfahrer und MTB-Enthusiasten. Es kann auch von Mopedfahrern (Roller) verwendet werden.
- *[Fußgänger-Routing](./pedestrian-routing.md)* - kann nicht nur zum Spazierengehen in der Stadt, sondern auch bei Wanderungen verwendet werden.
- *[Moped-Routing](./moped-routing.md)* - basiert auf dem Fahrrad-Routing, hat aber seine eigenen Besonderheiten.
- *[Routing für öffentliche Verkehrsmittel](./public-transport-navigation.md)* - kann Ihnen bei Reisen in der Stadt helfen.
- *[Reit-Routing](./horse-routing.md)* - bietet Reitern die Werkzeuge, die sie zur Planung und Durchführung ihrer Reitaktivitäten benötigen.
- *[Ski-Routing](./ski-routing.md)* - ermöglicht es Benutzern, Skitouren und andere Wintersportaktivitäten mit der OsmAnd Mobile App zu planen und zu navigieren.
- *[Zug-Routing](./train-routing.md)* - bietet die Möglichkeit, die Eisenbahnschienen zur Navigation zu nutzen.
- *[Boot-Routing](./boat-navigation.md)* - kann verwendet werden, um eine Route auf Flüssen, Kanälen, kleinen Seen und auf offener See zu erstellen, aber nur, wenn Fahrwasser in OpenStreetMap markiert sind.
- *[Gerade Linie Routing](./straight-line-routing.md)* - bietet eine geradlinige Routenführung (oder "Punkt-zu-Punkt"-Navigation), die neu berechnet wird, wenn sich Ihr Standort ändert.
- *[Direkt zum Punkt Routing](./direct-to-point-routing.md)* - bietet eine geradlinige Routenführung (oder "Punkt-zu-Punkt"-Navigation), die während der gesamten Navigation stabil bleibt, im Gegensatz zum **Gerade Linie** Routing (Routen-Neuberechnung ist deaktiviert).


## Offline-Routing anpassen {#customize-offline-routing}

Sie können auch Ihre **eigene routing.xml-Datei** erstellen oder die Standard-**routing.xml** ändern und für die Navigation verwenden (nur für fortgeschrittene OsmAnd-Benutzer).

- Kopieren Sie die Datei [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) auf Ihr Gerät. Lesen Sie die [Hilfeinformationen](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) sorgfältig durch. Als Beispiel sehen Sie sich die [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) Datei eines OsmAnd-Benutzers an.
- Nach den Änderungen kann die neue *routing.xml*-Datei zu OsmAnd hinzugefügt werden, indem Sie darauf tippen und auswählen, sie in der OsmAnd-App zu öffnen.
- Wählen Sie den geänderten [Navigationstyp](../../navigation/guidance/navigation-settings.md#navigation-type) für Ihr Profil.

Weitere Informationen zu dieser Funktion finden Sie in der [*Technischen Dokumentation*](../../../technical/osmand-file-formats/osmand-routing-xml.md) und auf der [*GitHub-Seite von OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Bestimmte Straßen meiden {#avoid-specific-roads}

:::caution
Die Funktion "Straßen meiden" ist global und betrifft alle **[Routing-Typen](#routing-types)** außer *[Online-Routing](../routing/online-routing.md)* und *[BRouter](../routing/brouter.md)*.
:::

Es gibt zwei mögliche Wege, um auszuwählen, welche Straßen bei der Routenberechnung gemieden werden sollen:

- Wählen Sie den Straßentyp im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der [Navigationseinstellungen](../guidance/navigation-settings.md). Die Beschreibung dieser Einstellung finden Sie in den Artikeln über die Einstellungen der [Routing-Typen](#routing-types). Als Beispiel siehe die Beschreibung des Routing-Typs [Auto / LKW / Motorrad](../routing/car-based-routing.md#route-parameters---car).
- Sie können auch bestimmte Straßen auswählen, die nicht für das Routing verwendet werden sollen, indem Sie die Option *[Straßen meiden](../../map/map-context-menu.md#avoid-road)* über das *Kartenkontextmenü* oder über das *[Menü "Straßen meiden"](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*) verwenden.

:::note

- Die Straße muss bei maximalem Zoom markiert werden, da OsmAnd das Tippen falsch interpretieren und beispielsweise die falsche Seite einer zweispurigen Straße oder eines Bürgersteigs blockieren kann.
- Die Funktion "Bestimmte Straßen meiden" funktioniert nicht korrekt mit der Option [Navigation nach Track](../setup/gpx-navigation.md) und hat keinen Einfluss auf die vereinfachte [Markierungsnavigation](../setup/markers-navigation.md#how-to-use).

:::

### Menü "Straßen meiden" {#avoid-roads-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *Navigations-Button → Einstellungen → Straßen meiden...*

![Menü "Straßen meiden" Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Navigations-Button → Einstellungen → Straßen meiden*

![Menü "Straßen meiden" iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In diesem Menü können Sie die vorherige Auswahl der zu meidenden Straße rückgängig machen. Tippen Sie dazu auf ein Kreuz (Android) oder ein rotes **"-"** gegenüber der Straße, die Sie für die Routenberechnung verwenden möchten.

Mit der Option *Auf Karte auswählen* können Sie weiterhin Straßen auf der OsmAnd Karte als ungültig für das Routing markieren.

Wenn Sie eine zu meidende Straße über das *Kartenkontextmenü* oder das *Menü "Straßen meiden"* auswählen, wird die Liste der Straßen über dem Kartenbildschirm angezeigt.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Liste der zu meidenden Straßen auf der Karte Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste der zu meidenden Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exportieren / Importieren {#export--import}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportieren der zu meidenden Straßen auf der Karte Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Exportieren der zu meidenden Straßen auf der Karte Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportieren der zu meidenden Straßen auf der Karte iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Exportieren der zu meidenden Straßen auf der Karte iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Abhängig von Ihren Geräteeinstellungen und verfügbaren Anwendungen kann Ihre gesamte Liste der zu meidenden Straßen oder nur eine davon als `.osf`-Datei an verschiedene Speicherorte [exportiert](../../personal/import-export.md#export) werden. Wählen Sie die Straßen aus, die Sie in der vorgeschlagenen Liste exportieren möchten.

Sie können zu meidende Straßen während der Routenberechnung aus anderen Quellen im `.osf`-Dateiformat [importieren](../../personal/import-export.md#import). Dies kann auch über die Option *Importieren* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*) erfolgen. Sie können wählen, ob Sie alle Daten oder nur wenige zu meidende Straßen importieren möchten (indem Sie eine Straße in der Liste mit einem Häkchen markieren).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Importieren der zu meidenden Straßen auf der Karte Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importieren der zu meidenden Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Der bequemste Weg, zu meidende Straßen zwischen Ihren Geräten zu synchronisieren, ist die Verwendung von [OsmAnd Cloud](../../personal/osmand-cloud.md) (Pro-Abonnement erforderlich).
:::


## Temporäre Einschränkungen berücksichtigen {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Die Option *Temporäre Einschränkungen berücksichtigen* ermöglicht es, temporäre Straßensperrungen bei der Routenberechnung zu berücksichtigen. Dazu gehören beispielsweise Straßenbauarbeiten oder Straßensperrungen aus anderen Gründen (Unfall, Straßenreparaturen, Naturkatastrophen). Das Aktivieren dieser Option kann Ihnen helfen, unerwartete Umwege oder Verzögerungen zu vermeiden. Bitte beachten Sie, dass diese Informationen manchmal veraltet sein können.
In OpenStreetMap werden diese Informationen normalerweise mit dem Tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions) markiert.


## Entwicklungsbereich {#development-section}

Der **Entwicklungsbereich** der Einstellungen für *Routenparameter* (Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung) ist nur sichtbar, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist. Er enthält Einstellungen wie *Routing-Typ (Android) / Routing-Algorithmus (iOS), GPX-Approximation (nur Android), Autozoom und OsmAnd Live Daten (nur Android)*. Lesen Sie den Artikel [Navigationseinstellungen](../../navigation/guidance/navigation-settings.md#development-settings) für eine detaillierte Beschreibung.


> *Zuletzt aktualisiert: Juli 2024*