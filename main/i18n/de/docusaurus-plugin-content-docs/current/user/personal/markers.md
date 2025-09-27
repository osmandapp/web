---
source-hash: 4a76625c2bb84dea3475d937395b2dcabeed514e2bbf68736a1f6e8649b066f9
sidebar_position: 8
title:  Markierungen
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

Markierungen sind spezielle Punkte, die auf der Karte als Fähnchen markiert werden und im Gegensatz zu [Favoriten](./favorites.md) mit einem einzigen Fingertipp schnell erstellt werden können, ohne einen Namen und andere Informationen angeben zu müssen. Markierungen bieten auch zusätzliche Funktionen mit [Widgets](../widgets/markers.md), **Pfeilen** (<Translate android="true" ids="show_arrows_on_the_map"/>) und **Entfernungsanzeige** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kartenmarkierungen Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmarkierungen iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Markierungen {#markers}

### Markierungen hinzufügen / bearbeiten {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tippen Sie kurz oder lang auf die Karte und wählen Sie die gewünschte Aktion aus dem [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker).

![Aktion Markierung hinzufügen/bearbeiten Android](@site/static/img/map/add_marker_android.png) ![Aktion Markierung passieren Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tippen Sie kurz oder lang auf die Karte und wählen Sie die gewünschte Aktion im [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker).

![Aktion Markierung hinzufügen/bearbeiten iOS](@site/static/img/map/add_marker_ios.png) ![Aktion Markierung wiederherstellen Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Navigationsplanung zu erleichtern. Sie müssen nur auf das *Fähnchen*- (*Android*) oder *Pfeil*-Symbol (*iOS*) im Menü tippen, um die Richtung und Entfernung zum ausgewählten Punkt von Ihrem aktuellen Standort (oder dem Kartenmittelpunkt / dem anfänglichen Berührungspunkt der Karte, wenn der Standort deaktiviert ist) anzuzeigen.

***Aktionen***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Setzt eine neue Markierung auf den ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / Verwerfen (iOS). Deaktiviert die Markierung und verschiebt sie in den Verlauf.
- **Aktivieren** (*Android*). Verschiebt die Markierung an die oberste Position (im oberen Bedienfeld).
- **Markierung wiederherstellen** (*Android*). Verschiebt die Markierung aus dem Verlauf in die aktive Liste.

:::note
Sie können eine Markierung nicht sofort löschen. Sie müssen sie zuerst deaktivieren (als passiert markieren), damit sie in den [Verlauf](#history) verschoben wird. Anschließend können Sie sie endgültig aus dem Verlauf löschen. Sobald eine Markierung deaktiviert ist, wird sie von der Karte und aus der Routenliste entfernt.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Routenliste {#itinerary-list}

Die Routenliste stellt eine geordnete Liste von Markierungen dar, wobei die oberste (erste) Markierung in Widgets für die Navigation verwendet wird. Lesen Sie mehr darüber im Artikel [Navigation nach Markierungen](../navigation/setup/markers-navigation.md#itinerary-list).

### Markierungsgruppen {#marker-groups}

<InfoAndroidOnly />

![Kartenmarkierungsgruppen Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Markierungen können als ganze Gruppe aus einer Favoritengruppe oder einer GPX-Datei mit Wegpunkten hinzugefügt und gelöscht werden. Das macht ihre Verwendung in einem speziellen Navigationsmodus sehr praktisch - [Navigation nach Markierungen](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Verlauf {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Verlauf der Kartenmarkierungen Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Verlauf der Kartenmarkierungen iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Der Verlauf ist eine Liste aller deaktivierten (passierten) Markierungen. Aus dieser Liste ist es möglich, eine Markierung endgültig zu löschen oder wiederherzustellen.


## Darstellung auf der Karte {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![darstellung_auf_der_karte](@site/static/img/widgets/appearence_on_the_map-01.png) ![darstellung_auf_der_karte](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Darstellung der Kartenmarkierungen iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Darstellung der Kartenmarkierungen iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Das Menü *Darstellung auf der Karte* ist eine allgemeine Einstellung für die Anzeige von Markierungen und zusätzlichen Hinweisen darauf.
In der iOS-Version von OsmAnd ist *Darstellung auf der Karte* auch eine Einstellung für die Anzeige von Widgets. Es gibt auch zusätzliche Einstellungen zur [Konfiguration der Widgets mit Markierungen](../widgets/markers.md#configure-marker-widgets).

- **Aktive Markierungen**. Zeigt Informationen über die erste oder die ersten beiden Markierungen in der Kartenmarkierungsliste an.
- **Entfernungsanzeige** *(für iOS)*. Ermöglicht Ihnen die Auswahl, ob Widgets angezeigt werden sollen und wie sie erscheinen: über der Karte (obere Leiste) oder auf der rechten Seite des Bildschirms (Widgets).
- **Pfeile auf der Karte**. Zeigt die Richtung zur verfolgten Markierung (eine oder zwei) als Pfeil auf der Karte an. Befindet sich die Markierung im sichtbaren Teil der Karte, wird kein Pfeil angezeigt.
- **Richtungslinie**. Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zur verfolgten Markierung in einer geraden Linie an.
- ***Einmaliges Tippen*** aktiv (*für Android*). Mit einem einzigen Tippen auf die gewünschte Markierung auf der Karte wird diese Markierung an den Anfang der Liste der aktiven Kartenmarkierungen verschoben, ohne das Kontextmenü zu öffnen.
- **Passierte Markierungen auf der Karte behalten** *(für Android)*. Markierungen, die als Gruppe von Favoriten oder GPX-Wegpunkten hinzugefügt und als "Passiert" markiert wurden, bleiben auf der Karte. Wenn die Gruppe nicht aktiv ist, verschwinden die Markierungen von der Karte.


## Route für Markierungen planen {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Kartenmarkierungen Routenpunkte planen Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Kartenmarkierungen Routenoptionen planen Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Mit der Funktionalität des Werkzeugs "Route planen" in der Markierungsliste können Sie *Markierungen* *von Tür zu Tür* sortieren, sie in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie auf die Option *Navigation* tippen, werden die *Markierungen* als [Zwischenziele](../navigation/setup/route-navigation.md#intermediate-destinations) verwendet.


## Aktionen {#actions}

<InfoAndroidOnly />

![Kartenmarkierungen Mehr Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Markierungen können in der Liste nach Name, Nähe oder Zeitpunkt des Hinzufügens sortiert werden.
- **<Translate android="true" ids="appearance_on_the_map"/>** oder **<Translate ios="true" ids="shared_string_appearance"/>**. [Einstellungen für Kartenmarkierungen](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Fügt Markierungen durch [Koordinateneingabe](../plan-route/coordinate-input.md) hinzu.
- **<Translate android="true" ids="plan_route"/>**. Erstellt eine Route [zur Navigation](../navigation/setup/markers-navigation.md) unter Verwendung der ausgewählten Markierungen.
- **<Translate android="true" ids="marker_save_as_track"/>**. Speichert aktive Markierungen in einer GPX-Datei.
- **<Translate android="true" ids="move_all_to_history"/>**. Deaktiviert alle Markierungen und verschiebt sie in den [Verlauf](#history).


## Verwandte Artikel {#related-articles}

- [Navigation nach Markierungen](../navigation/setup/markers-navigation.md)
- [Markierungs-Widgets](../widgets/markers.md)