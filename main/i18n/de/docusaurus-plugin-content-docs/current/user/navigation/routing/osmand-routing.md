---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title:  Über das OsmAnd-Routing
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



## Übersicht {#overview}

Das Offline-Routing von OsmAnd basiert auf OpenStreetMap-Daten und bietet eine Vielzahl von Routen für verschiedene Zwecke. Dies ist eine Liste vordefinierter Routing-Arten, die erweitert werden kann. Die Navigationsregeln sind in der Datei [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) enthalten und werden für das Offline-Routing verwendet. Die Routing-Art ändert sich automatisch, wenn Sie Ihr Profil wechseln.


## Routing-Arten {#routing-types}

Die folgenden Profile mit ihren Routing-Arten sind in OsmAnd voreingestellt: *Auto, Fahrrad, Fußgänger, LKW, Motorrad, Moped, Öffentliche Verkehrsmittel, Boot, Flugzeug, Ski, Zug, Reiten*. Darüber hinaus können Sie Ihre eigenen Profile mit spezifischen Routing-Regeln erstellen oder den [OsmAnd-Routing-Algorithmus anpassen](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Die Profile [**LKW, Motorrad, Moped, Zug, Flugzeug, Boot und Reiten**](./osmand-routing.md) sind standardmäßig deaktiviert. Um diese Profile zu verwenden, müssen Sie sie unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.

- Die Navigationsart [**Luftlinie**](./direct-to-point-routing.md) hat kein eigenes Profil und kann mit jedem aktivierten Profil verwendet werden.

- Das Offline-Routing von OsmAnd kann durch **Ändern der [.xml-Datei](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)** konfiguriert werden. Weitere Informationen finden Sie im Artikel [*Offline-Routing anpassen*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Kategorie | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *OsmAnd Offline-Routing*  |  Der Offline-Routing-Mechanismus von OsmAnd verwendet vorab heruntergeladene Karten als Datenquelle für die Routenberechnung. |  Navigationsarten: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorrad](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [LKW](car-based-routing#route-parameters---truck), [Zug](./train-routing.md).            |
| *Luftlinien-Routing* |  Verwendet ebenfalls Offline-Karten und bietet ein geradliniges Routing (oder *Punkt-zu-Punkt*-Navigation).  | Navigationsarten: *[Geradliniges Routing](./straight-line-routing.md)*,  *[Luftlinie](./direct-to-point-routing.md)*.  |
| [*BRouter* *(offline)*](./brouter.md)  |  Offline-Routing, bereitgestellt durch die [BRouter-App](https://brouter.de/).  | Nur für **Android** verfügbar. Die vollständige Beschreibung finden Sie [hier](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) |  Online-Routing erstellt die Route über die Ressourcen von Servern online über eine Internetverbindung. | Nur für **Android** verfügbar. Sie können das [Online-Routing](./online-routing.md) konfigurieren, um eine Route von verschiedenen Online-Routing-Engines wie [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX zu erstellen.  |

- *[Auto-Routing (LKW, Motorrad)](./car-based-routing.md)* - OsmAnd bietet Fahranweisungen für Fahrer von Autos, LKWs und Motorrädern.
- *[Fahrrad-Routing (MTB)](./bicycle-based-routing.md)* - Das Fahrrad-Routing bietet Navigationsanweisungen speziell für Radfahrer und MTB-Enthusiasten. Es kann auch von Moped- (Roller-) Fahrern verwendet werden.
- *[Fußgänger-Routing](./pedestrian-routing.md)* - kann nicht nur für Spaziergänge in der Stadt, sondern auch bei Wandertouren verwendet werden.
- *[Moped-Routing](./moped-routing.md)* - basiert auf dem Fahrrad-Routing, hat aber seine eigenen Besonderheiten.
- *[ÖPNV-Routing](./public-transport-navigation.md)* - kann Ihnen bei Reisen in der Stadt helfen.
- *[Reit-Routing](./horse-routing.md)* - bietet Reitern die Werkzeuge, die sie zur Planung und zum Genuss ihrer Reitaktivitäten benötigen.
- *[Ski-Routing](./ski-routing.md)* - ermöglicht es Benutzern, Skitouren und andere Wintersportaktivitäten mit der OsmAnd-Mobil-App zu planen und zu navigieren.
- *[Zug-Routing](./train-routing.md)* - bietet die Möglichkeit, die Eisenbahnschienen für die Navigation zu nutzen.
- *[Boot-Routing](./boat-navigation.md)* - kann verwendet werden, um eine Route auf Flüssen, Kanälen, kleinen Seen und im offenen Meer zu erstellen, aber nur, wenn Fahrrinnen in OpenStreetMap markiert sind.
- *[Geradliniges Routing](./straight-line-routing.md)* - bietet ein geradliniges Routing (oder "Punkt-zu-Punkt"-Navigation), das bei jeder Änderung Ihres Standorts neu berechnet wird.
- *[Luftlinien-Routing](./direct-to-point-routing.md)* - bietet ein geradliniges Routing (oder "Punkt-zu-Punkt"-Navigation), das im Gegensatz zum **Geradlinigen Routing** während der gesamten Navigation stabil bleibt (Routen-Neuberechnung ist deaktiviert).


## Offline-Routing anpassen {#customize-offline-routing}

Sie können auch Ihre **eigene routing.xml-Datei erstellen** oder die standardmäßige **routing.xml** ändern und für die Navigation verwenden (nur für fortgeschrittene OsmAnd-Benutzer).

- Kopieren Sie die Datei [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) auf Ihr Gerät. Lesen Sie die [Hilfeinformationen](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) sorgfältig durch. Als Beispiel sehen Sie sich die [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU)-Datei eines OsmAnd-Benutzers an.
- Nach den Änderungen kann die neue *routing.xml*-Datei zu OsmAnd hinzugefügt werden, indem man darauf tippt und auswählt, sie in der OsmAnd-App zu öffnen.
- Wählen Sie die geänderte [Navigationsart](../../navigation/guidance/navigation-settings.md#navigation-type) für Ihr Profil aus.

Weitere Informationen zu dieser Funktion finden Sie in der [*Technischen Dokumentation*](../../../technical/osmand-file-formats/osmand-routing-xml.md) und auf der [*GitHub-Seite von OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Bestimmte Straßen meiden {#avoid-specific-roads}

:::caution
Die Funktion "Straßen meiden" ist global und betrifft alle **[Routing-Arten](#routing-types)** außer *[Online-Routing](../routing/online-routing.md)* und *[BRouter](../routing/brouter.md)*.
:::

Es gibt zwei Möglichkeiten, Straßen auszuwählen, die bei der Routenberechnung vermieden werden sollen:

- Wählen Sie den Straßentyp im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der [Navigationseinstellungen](../guidance/navigation-settings.md). Eine Beschreibung dieser Einstellung finden Sie in den Artikeln über die Einstellungen der [Routing-Arten](#routing-types). Sehen Sie sich als Beispiel die Beschreibung der Routing-Art [Auto / LKW / Motorrad](../routing/car-based-routing.md#route-parameters---car) an.
- Sie können auch bestimmte Straßen auswählen, die nicht für das Routing verwendet werden sollen, indem Sie die Option *[Straße meiden](../../map/map-context-menu.md#avoid-road)* über das *Kartenkontextmenü* oder das *[Menü 'Straßen meiden'](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*) verwenden.

:::note

- Die Straße muss bei maximalem Zoom markiert werden, da OsmAnd das Antippen falsch interpretieren und beispielsweise die falsche Seite einer zweispurigen Straße oder einen Gehweg blockieren könnte.
- Die Funktion "Bestimmte Straßen meiden" funktioniert nicht korrekt mit der Option [Navigation entlang eines Tracks](../setup/gpx-navigation.md) und hat keinen Einfluss auf die vereinfachte [Navigation mit Markern](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menü 'Straßen meiden' {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Navigations-Schaltfläche → Einstellungen → Straßen meiden...*

![Menü "Straßen meiden" Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Navigations-Schaltfläche → Einstellungen → Straßen meiden*

![Menü "Straßen meiden" iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In diesem Menü können Sie die vorherige Auswahl einer zu meidenden Straße aufheben. Tippen Sie dazu auf ein Kreuz (Android) oder ein rotes **"-"** gegenüber der Straße, die Sie für die Routenberechnung verwenden möchten.

Mit der Option *Auf Karte auswählen* können Sie weiterhin Straßen als für das Routing ungültig auf der OsmAnd-Karte markieren.

Wenn Sie eine zu meidende Straße über das *Kartenkontextmenü* oder das *Menü 'Straßen meiden'* auswählen, wird die Liste der Straßen über dem Kartenbildschirm angezeigt.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Liste der zu meidenden Straßen auf der Karte Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste der zu meidenden Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exportieren / Importieren {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Export zu meidender Straßen auf der Karte Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Export zu meidender Straßen auf der Karte Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Export zu meidender Straßen auf der Karte iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Export zu meidender Straßen auf der Karte iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Abhängig von Ihren Geräteeinstellungen und verfügbaren Anwendungen kann Ihre gesamte Liste der zu meidenden Straßen oder nur eine davon als `.osf`-Datei an verschiedene Orte [exportiert](../../personal/import-export.md#export) werden. Wählen Sie die Straßen, die Sie exportieren möchten, in der vorgeschlagenen Liste aus.

Sie können zu meidende Straßen für die Routenberechnung aus anderen Quellen im `.osf`-Dateiformat [importieren](../../personal/import-export.md#import). Dies kann auch über die *Import-Option* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*) erfolgen. Sie können wählen, ob Sie alle Daten importieren oder nur einige zu meidende Straßen (indem Sie eine Straße in der Liste mit einem Häkchen markieren).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Import zu meidender Straßen auf der Karte Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import zu meidender Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Der bequemste Weg, zu meidende Straßen zwischen Ihren Geräten zu synchronisieren, ist die Verwendung von [OsmAnd Cloud](../../personal/osmand-cloud.md) (Pro-Abonnement erforderlich).
:::


## Temporäre Einschränkungen berücksichtigen {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Die Option *Temporäre Einschränkungen berücksichtigen* ermöglicht es, temporäre Straßenbeschränkungen bei der Routenberechnung zu berücksichtigen. Dazu können Dinge wie Straßenbauarbeiten oder Straßensperrungen aus irgendeinem Grund (Unfall, Straßenreparaturen, Naturkatastrophen) gehören. Die Aktivierung dieser Option kann Ihnen helfen, unerwartete Umwege oder Verzögerungen zu vermeiden. Bitte beachten Sie, dass diese Informationen manchmal veraltet sein können.
In OpenStreetMap wird diese Information normalerweise mit dem Tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions) gekennzeichnet.


## Entwicklerbereich {#development-section}

Der **Entwicklerbereich** der *Routenparameter*-Einstellungen (*Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*) ist nur sichtbar, wenn das [OsmAnd-Entwickler-Plugin](../../plugins/development.md) aktiviert ist. Er enthält Einstellungen wie *Routing-Typ (Android) / Routing-Algorithmus (iOS), GPX-Annäherung (nur Android), Autozoom und Live-Updates-Daten (nur Android)*. Lesen Sie den Artikel [Navigationseinstellungen](../../navigation/guidance/navigation-settings.md#development-settings) für eine detaillierte Beschreibung.