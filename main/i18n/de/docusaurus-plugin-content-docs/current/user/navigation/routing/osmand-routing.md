---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title: Über OsmAnd-Routenplanung
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

Die Offline-Routenplanung von OsmAnd basiert auf OpenStreetMap-Daten und bietet eine Vielzahl von Routen für verschiedene Zwecke. Dies ist eine Liste vordefinierter Routentypen, die erweitert werden können. Die Navigationsregeln sind in der Datei [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) enthalten und werden für die Offline-Routenplanung verwendet. Der Routentyp ändert sich automatisch, wenn Sie Ihr Profil ändern.


## Routentypen {#routing-types}

Die folgenden Profile mit ihren Routentypen sind in OsmAnd voreingestellt: *Auto, Fahrrad, Fußgänger, LKW, Motorrad, Moped, Öffentliche Verkehrsmittel, Boot, Flugzeug, Ski, Zug, Reiten*. Daneben können Sie eigene Profile mit spezifischen Routingregeln erstellen oder den [OsmAnd-Routing-Algorithmus anpassen](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Die Profile [**LKW, Motorrad, Moped, Zug, Flugzeug, Boot und Reiten**](./osmand-routing.md) sind standardmäßig deaktiviert. Um diese Profile zu verwenden, müssen Sie sie unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.

- Der Navigationstyp [**Direkt zum Punkt**](./direct-to-point-routing.md) hat kein eigenes Profil und kann mit jedem aktivierten Profil verwendet werden.

- Die Offline-Routenplanung von OsmAnd kann **durch Ändern der [.xml-Datei](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)** konfiguriert werden. Weitere Informationen finden Sie im Artikel [*Offline-Routenplanung anpassen*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Kategorie | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *OsmAnd-Offline-Routenplanung*  | Der Offline-Routing-Mechanismus von OsmAnd verwendet vorab heruntergeladene Karten als Datenquelle für die Routenberechnung. | Navigationstypen: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorrad](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [LKW](car-based-routing#route-parameters---truck), [Zug](./train-routing.md). |
| *Direkt-zum-Punkt-Routenplanung* | Verwendet ebenfalls Offline-Karten und bietet eine geradlinige Routenführung (oder *Punkt-zu-Punkt*-Navigation). | Navigationstypen: *[Gerade Linie](./straight-line-routing.md)*, *[Direkt zum Punkt](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md)  | Offline-Routenplanung durch die [BRouter-App](https://brouter.de/).  | Nur für **Android** verfügbar. Die vollständige Beschreibung lesen Sie [hier](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) |  Die Online-Routenplanung erstellt die Route mithilfe von Serverressourcen online über die Internetverbindung. | Nur für **Android** verfügbar. Sie können die [Online-Routenplanung](./online-routing.md) so konfigurieren, dass eine Route von verschiedenen Online-Routing-Engines wie [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX erstellt wird. |

- *[Auto-Routenplanung (LKW, Motorrad)](./car-based-routing.md)* - OsmAnd bietet Fahranweisungen für Fahrer von Autos, LKWs und Motorrädern.
- *[Fahrrad-Routenplanung (MTB)](./bicycle-based-routing.md)* - Die Fahrrad-Routenplanung bietet Navigationsansagen speziell für Radfahrer und MTB-Enthusiasten. Sie kann auch von Mopedfahrern (Roller) genutzt werden.
- *[Fußgänger-Routenplanung](./pedestrian-routing.md)* - kann nicht nur zum Spazierengehen in der Stadt, sondern auch bei Wandertouren verwendet werden.
- *[Moped-Routenplanung](./moped-routing.md)* - basiert auf der Fahrrad-Routenplanung, hat aber ihre eigenen Besonderheiten.
- *[Routenplanung mit öffentlichen Verkehrsmitteln](./public-transport-navigation.md)* - kann Ihnen bei Reisen durch die Stadt helfen.
- *[Reit-Routenplanung](./horse-routing.md)* - bietet Reitern die Werkzeuge, die sie benötigen, um ihre Reitaktivitäten zu planen und zu genießen.
- *[Ski-Routenplanung](./ski-routing.md)* - ermöglicht Benutzern die Planung und Navigation von Skitouren und anderen Wintersportaktivitäten mit der OsmAnd Mobile App.
- *[Zug-Routenplanung](./train-routing.md)* - bietet die Möglichkeit, Eisenbahnstrecken zur Navigation zu nutzen.
- *[Boots-Routenplanung](./boat-navigation.md)* - kann verwendet werden, um eine Route auf Flüssen, Kanälen, kleinen Seen und auf offener See zu erstellen, jedoch nur, wenn die Fahrrinnen in OpenStreetMap markiert sind.
- *[Geradlinige Routenplanung](./straight-line-routing.md)* - bietet eine geradlinige Routenführung (oder "Punkt-zu-Punkt"-Navigation), die neu berechnet wird, wenn sich Ihr Standort ändert.
- *[Direkt-zum-Punkt-Routenplanung](./direct-to-point-routing.md)* - bietet eine geradlinige Routenführung (oder "Punkt-zu-Punkt"-Navigation), die während der gesamten Navigation stabil bleibt, im Gegensatz zur **Geradlinigen** Routenplanung (Routen-Neuberechnung ist deaktiviert).


## Offline-Routenplanung anpassen {#customize-offline-routing}

Sie können auch Ihre **eigene routing.xml-Datei** erstellen oder die Standarddatei **routing.xml** ändern und für die Navigation verwenden (nur für fortgeschrittene OsmAnd-Benutzer).

- Kopieren Sie die Datei [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) auf Ihr Gerät. Lesen Sie die [Hilfeinformationen](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) sorgfältig durch. Sehen Sie sich als Beispiel die [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU)-Datei eines OsmAnd-Benutzers an.
- Nach den Änderungen kann die neue *routing.xml*-Datei zu OsmAnd hinzugefügt werden, indem Sie darauf tippen und auswählen, sie in der OsmAnd-App zu öffnen.
- Wählen Sie den geänderten [Navigationstyp](../../navigation/guidance/navigation-settings.md#navigation-type) für Ihr Profil aus.

Weitere Informationen zu dieser Funktion finden Sie in der [*Technischen Dokumentation*](../../../technical/osmand-file-formats/osmand-routing-xml.md) und auf der [*OsmAnd GitHub-Seite*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Spezifische Straßen vermeiden {#avoid-specific-roads}

:::caution
Die Funktion "Straßen vermeiden" ist global und betrifft alle **[Routentypen](#routing-types)** außer *[Online-Routenplanung](../routing/online-routing.md)* und *[BRouter](../routing/brouter.md)*.
:::

Es gibt zwei mögliche Wege, um auszuwählen, welche Straßen bei der Routenberechnung vermieden werden sollen:

- Wählen Sie den Straßentyp im Abschnitt [Routenparameter](../guidance/navigation-settings.md#route-parameters) der [Navigationseinstellungen](../guidance/navigation-settings.md) aus. Eine Beschreibung dieser Einstellung finden Sie in den Artikeln über die Einstellungen der [Routentypen](#routing-types). Sehen Sie sich als Beispiel die Beschreibung des Routentyps [Auto / LKW / Motorrad](../routing/car-based-routing.md#route-parameters---car) an.
- Sie können auch bestimmte Straßen auswählen, die nicht für die Routenplanung verwendet werden sollen, indem Sie die Option *[Straße vermeiden](../../map/map-context-menu.md#avoid-road)* über das *Kartenkontextmenü* oder das *[Menü "Straßen vermeiden"](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*) verwenden.

:::note

- Die Straße muss bei maximalem Zoom markiert sein, da OsmAnd den Tipp falsch interpretieren und beispielsweise die falsche Seite einer zweispurigen Straße oder einen Bürgersteig blockieren kann.
- Die Funktion "Spezifische Straßen vermeiden" funktioniert nicht korrekt mit der Option [Navigation nach Track](../setup/gpx-navigation.md) und hat keinen Einfluss auf die vereinfachte [Markierungsnavigation](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menü "Straßen vermeiden" {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *Navigations-Button → Einstellungen → Straßen vermeiden...*

![Menü "Straßen vermeiden" Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Navigations-Button → Einstellungen → Straßen vermeiden*

![Menü "Straßen vermeiden" iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In diesem Menü können Sie die vorherige Auswahl der zu vermeidenden Straße rückgängig machen. Tippen Sie dazu auf ein Kreuz (Android) oder ein rotes **"-"** gegenüber der Straße, die Sie für die Routenberechnung verwenden möchten.

Mit der Option *Auf Karte auswählen* können Sie weiterhin Straßen auf der OsmAnd-Karte als ungültig für die Routenplanung markieren.

Wenn Sie eine zu vermeidende Straße über das *Kartenkontextmenü* oder das *Menü "Straßen vermeiden"* auswählen, wird die Liste der Straßen über dem Kartenbildschirm angezeigt.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Liste der zu vermeidenden Straßen auf der Karte Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Liste der zu vermeidenden Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exportieren / Importieren {#export--import}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Export von zu vermeidenden Straßen auf der Karte Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Export von zu vermeidenden Straßen auf der Karte Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Export von zu vermeidenden Straßen auf der Karte iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Export von zu vermeidenden Straßen auf der Karte iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Abhängig von den Einstellungen Ihres Geräts und den verfügbaren Anwendungen kann Ihre gesamte Liste der zu vermeidenden Straßen oder nur eine davon als `.osf`-Datei an verschiedene Speicherorte [exportiert](../../personal/import-export.md#exportiert) werden. Wählen Sie die Straßen aus, die Sie in der vorgeschlagenen Liste exportieren möchten.

Sie können Straßen, die bei der Routenberechnung vermieden werden sollen, aus anderen Quellen im `.osf`-Dateiformat [importieren](../../personal/import-export.md#importieren). Dies kann auch über die Option *Importieren* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*) erfolgen. Sie können wählen, ob Sie alle Daten oder nur wenige zu vermeidende Straßen importieren möchten (indem Sie eine Straße in der Liste mit einem Häkchen markieren).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Import von zu vermeidenden Straßen auf der Karte Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Import von zu vermeidenden Straßen auf der Karte iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Der bequemste Weg, um zu vermeidende Straßen zwischen Ihren Geräten zu synchronisieren, ist die Verwendung von [OsmAnd Cloud](../../personal/osmand-cloud.md) (Pro-Abonnement erforderlich).
:::


## Vorübergehende Einschränkungen berücksichtigen {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Die Option *Vorübergehende Einschränkungen berücksichtigen* ermöglicht es, bei der Routenberechnung vorübergehende Straßeneinschränkungen zu berücksichtigen. Dazu können Dinge wie Straßenbauarbeiten oder Straßensperrungen aus bestimmten Gründen gehören (ein Unfall, Straßenreparaturen, Naturkatastrophen). Durch Aktivieren dieser Option können Sie unerwartete Umwege oder Verzögerungen vermeiden. Bitte beachten Sie, dass diese Informationen manchmal veraltet sein können.
In OpenStreetMap werden diese Informationen normalerweise mit dem Tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions) markiert.


## Entwicklungsbereich {#development-section}

Der **Entwicklungsbereich** der Einstellungen für die *Routenparameter* (*Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*) ist nur sichtbar, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist. Er enthält Einstellungen wie *Routentyp (Android) / Routing-Algorithmus (iOS), GPX-Approximation (nur Android), Autozoom und OsmAnd Live-Daten (nur Android)*. Lesen Sie den Artikel [Navigationseinstellungen](../../navigation/guidance/navigation-settings.md#development-settings) für eine detaillierte Beschreibung.


> *Zuletzt aktualisiert: Juli 2024*