---
source-hash: 0353071eeb4cc978c117068bf19a65442825b1d24cf586249b32ac62e28c929f
sidebar_position: 8
title:  Marker
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

Marker sind spezielle Punkte, die auf der Karte als Flaggen markiert sind und schnell mit einem einzigen Tippen erstellt werden können, ohne Namen und andere Informationen anzugeben, im Gegensatz zu [Favoritenpunkten](./favorites.md). Marker bieten auch zusätzliche Funktionalität mit [Widgets](../widgets/markers.md), **Pfeilen** (<Translate android="true" ids="show_arrows_on_the_map"/>) und **Entfernungsanzeige** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Kartenmarker Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmarker iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Marker {#markers}

### Marker hinzufügen / bearbeiten {#add--edit-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tippen Sie kurz oder lang auf die Karte und wählen Sie die gewünschte Aktion aus dem [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker).

![Marker hinzufügen/bearbeiten Aktion Android](@site/static/img/map/add_marker_android.png) ![Marker als passiert markieren Aktion Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tippen Sie kurz oder lang auf die Karte und wählen Sie die gewünschte Aktion im [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker).

![Marker hinzufügen/bearbeiten Aktion iOS](@site/static/img/map/add_marker_ios.png) ![Marker wiederherstellen Aktion Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Navigation zu erleichtern. Sie müssen nur auf das *Flaggen*-Symbol (*Android*) oder das *Pfeil*-Symbol (*iOS*) im Menü tippen, um Richtung und Entfernung zum ausgewählten Punkt von Ihrem aktuellen Standort (oder dem Kartenmittelpunkt / dem anfänglichen Berührungspunkt auf der Karte, wenn der Standort ausgeschaltet ist) anzuzeigen.

***Aktionen***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Setzt einen neuen Marker auf den ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / Verwerfen (iOS). Deaktiviert den Marker und verschiebt ihn in den Verlauf.
- **Aktiv machen** (*Android*). Verschiebt den Marker an die oberste Position (im oberen Bereich).
- **Marker wiederherstellen** (*Android*). Verschiebt den Marker aus dem Verlauf in die aktive Liste.

:::note
Sie können einen Marker nicht sofort löschen. Sie müssen ihn zuerst deaktivieren (als passiert markieren), damit er in den [Verlauf](#history) verschoben wird, und dann können Sie ihn dauerhaft aus dem Verlauf löschen. Sobald ein Marker deaktiviert ist, wird er von der Karte und der Reiseroutenliste entfernt.
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


### Reiseroutenliste {#itinerary-list}

Die Reiseroutenliste stellt eine geordnete Liste von Markern dar, wobei der oberste 1. Marker in Widgets für die Navigation verwendet wird. Lesen Sie mehr darüber im Artikel [Navigation nach Markern](../navigation/setup/markers-navigation.md#itinerary-list).

### Markergruppen {#marker-groups}

<InfoAndroidOnly />

![Kartenmarker Gruppen Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Marker können als ganze Gruppe aus einer Favoritengruppe oder einer GPX-Datei mit Wegpunkten hinzugefügt und gelöscht werden. Das macht sie sehr praktisch für die Verwendung in einem speziellen Navigationsmodus - [Navigation nach Markern](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Verlauf {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Kartenmarker Verlauf Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmarker Verlauf iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Der Verlauf ist eine Liste aller deaktivierten (passierten) Marker. Aus dieser Liste ist es möglich, einen Marker dauerhaft zu löschen oder ihn wiederherzustellen.


## Darstellung auf der Karte {#appearance-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![Darstellung auf der Karte](@site/static/img/widgets/appearence_on_the_map-01.png) ![Darstellung auf der Karte](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Kartenmarker Darstellung iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Kartenmarker Darstellung iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Das Menü *Darstellung auf der Karte* ist eine allgemeine Einstellung für die Anzeige von Markern und zusätzlichen Zeigern auf diese.
In der iOS-Version von OsmAnd ist *Darstellung auf der Karte* auch eine Einstellung für die Anzeige von Widgets. Es gibt auch zusätzliche Einstellungen für die [Konfiguration der Widgets mit Markern](../widgets/markers.md#configure-marker-widgets).

- **Aktive Marker**. Zeigt Informationen über den ersten oder die ersten beiden Marker in der Kartenmarkerliste an.
- **Entfernungsanzeige** *(für iOS)*. Ermöglicht die Auswahl, ob Widgets angezeigt werden sollen und wie sie erscheinen: über der Karte (Obere Leiste) oder auf der rechten Seite des Bildschirms (Widgets).
- **Pfeile auf der Karte**. Zeigt die Richtung zum verfolgten Marker (ein oder zwei) als Pfeil auf der Karte an. Wenn sich der Marker im sichtbaren Teil der Karte befindet, wird kein Pfeil angezeigt.
- **Richtungslinie**. Zeigt die Richtung, als gestrichelte Linie, von einem bestimmten Punkt auf der Karte zum verfolgten Marker in einer geraden Linie an.
- ***Einmal tippen*** aktiv (*für Android*). Mit einem einzigen Tippen auf den gewünschten Marker auf der Karte wird dieser Marker an den Anfang der Liste der aktiven Kartenmarker verschoben, ohne das Kontextmenü zu öffnen.
- **Passierte Marker auf der Karte behalten** *(für Android)*. Marker, die als Gruppe von Favoriten oder GPX-Wegpunkten hinzugefügt und als passiert markiert wurden, bleiben auf der Karte. Wenn die Gruppe nicht aktiv ist, verschwinden die Marker von der Karte.


## Route für Marker planen {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Kartenmarker Route planen Punkte Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Kartenmarker Route planen Optionen Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Mit der Funktion "Route planen" im Werkzeug "Markerliste" können Sie *Marker* *Tür-zu-Tür* sortieren, in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie die Option *Navigation* antippen, werden *Marker* als [Zwischenziele](../navigation/setup/route-navigation.md#intermediate-destinations) verwendet.


## Aktionen {#actions}

<InfoAndroidOnly />

![Kartenmarker Mehr Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Marker können in der Liste nach Name, Nähe, Hinzufügezeit sortiert werden.
- **<Translate android="true" ids="appearance_on_the_map"/>** oder **<Translate ios="true" ids="shared_string_appearance"/>**. [Einstellungen für Kartenmarker](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Fügt Marker durch [Koordinateneingabe](../plan-route/coordinate-input.md) hinzu.
- **<Translate android="true" ids="plan_route"/>**. Erstellt eine Route [für die Navigation](../navigation/setup/markers-navigation.md) unter Verwendung der ausgewählten Marker.
- **<Translate android="true" ids="marker_save_as_track"/>**. Speichert aktive Marker in einer GPX-Datei.
- **<Translate android="true" ids="move_all_to_history"/>**. Deaktiviert alle Marker und verschiebt sie in den [Verlauf](#history).


## Verwandte Artikel {#related-articles}

- [Navigation nach Markern](../navigation/setup/markers-navigation.md)
- [Marker-Widgets](../widgets/markers.md)

> *Zuletzt aktualisiert: August 2024*