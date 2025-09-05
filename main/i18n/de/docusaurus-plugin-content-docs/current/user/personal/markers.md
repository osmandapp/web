---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
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

Markierungen sind spezielle Punkte, die auf der Karte als Flaggen markiert sind und schnell mit einem einzigen Tipp erstellt werden können, ohne Name und andere Informationen anzugeben, im Gegensatz zu [Favoritenpunkten](./favorites.md). Markierungen bieten auch zusätzliche Funktionen mit [Widgets](../widgets/markers.md), **Pfeilen** (<Translate android="true" ids="show_arrows_on_the_map"/>) und **Entfernungsanzeige** (<Translate android="true" ids="show_direction"/>).

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

Kurz oder lang auf die Karte tippen und die gewünschte Aktion aus dem [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker) auswählen.

![Markierungsaktion hinzufügen/bearbeiten Android](@site/static/img/map/add_marker_android.png) ![Markierungsaktion übergeben Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Kurz oder lang auf die Karte tippen und die gewünschte Aktion im [Kartenkontextmenü](../map/map-context-menu.md#add--edit-marker) auswählen.

![Markierungsaktion hinzufügen/bearbeiten iOS](@site/static/img/map/add_marker_ios.png) ![Markierungsaktion wiederherstellen Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Planung der Navigation zu erleichtern. Sie müssen nur auf das *Flaggen*- (*Android*) oder *Pfeil*-Symbol (*iOS*) im Menü tippen, um Richtung und Entfernung zum ausgewählten Punkt von Ihrem aktuellen Standort (oder dem Kartenmittelpunkt / dem ursprünglichen Berührungspunkt auf der Karte, wenn der Standort ausgeschaltet ist) anzuzeigen.

***Aktionen***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Setzt eine neue Markierung auf den ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / Verwerfen (iOS). Deaktiviert die Markierung und legt sie in den Verlauf.
- **Aktivieren** (*Android*). Verschiebt die Markierung an die oberste Position (im oberen Bereich).
- **Markierung wiederherstellen** (*Android*). Verschiebt die Markierung aus dem Verlauf in die aktive Liste.

:::note
Sie können eine Markierung nicht sofort löschen, Sie müssen sie zuerst deaktivieren (als passiert markieren), damit sie in den [Verlauf](#history) verschoben wird, und dann können Sie sie dauerhaft aus dem Verlauf löschen. Sobald die Markierung deaktiviert ist, wird sie von der Karte und der Reiseroutenliste entfernt.
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

Die Reiseroutenliste stellt eine geordnete Liste von Markierungen dar, wobei die oberste 1. Markierung in Widgets für die Navigation verwendet wird. Lesen Sie mehr darüber im Artikel [Navigation nach Markierungen](../navigation/setup/markers-navigation.md#itinerary-list).

### Markierungsgruppen {#marker-groups}

<InfoAndroidOnly />

![Kartenmarkierungen Gruppen Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Markierungen können als ganze Gruppe aus der Favoritengruppe oder einer GPX-Datei mit Wegpunkten hinzugefügt und gelöscht werden. Das macht sie sehr praktisch für die Verwendung in einem speziellen Navigationsmodus - [Navigation nach Markierungen](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Verlauf {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kartenmarkierungen Verlauf Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmarkierungen Verlauf iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Der Verlauf ist eine Liste aller deaktivierten (passierten) Markierungen. Aus dieser Liste ist es möglich, eine Markierung dauerhaft zu löschen oder wiederherzustellen.


## Darstellung auf der Karte {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![Darstellung auf der Karte](@site/static/img/widgets/appearence_on_the_map-01.png) ![Darstellung auf der Karte](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Kartenmarkierungen Darstellung iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Kartenmarkierungen Darstellung iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Das Menü *Darstellung auf der Karte* ist eine allgemeine Einstellung zur Anzeige von Markierungen und zusätzlichen Zeigern darauf.
In der iOS-Version von OsmAnd ist *Darstellung auf der Karte* auch eine Einstellung zur Anzeige von Widgets. Es gibt auch zusätzliche Einstellungen zur [Konfiguration der Widgets mit Markierungen](../widgets/markers.md#configure-marker-widgets).

- **Aktive Markierungen**. Zeigt Informationen über die erste oder zweite Markierung in der Kartenmarkierungsliste an.
- **Entfernungsanzeige** *(für iOS)*. Ermöglicht die Auswahl, ob Widgets angezeigt werden sollen und wie sie erscheinen sollen: über der Karte (Obere Leiste) oder auf der rechten Seite des Bildschirms (Widgets).
- **Pfeile auf der Karte**. Zeigt die Richtung zur verfolgten Markierung (eine oder zwei) als Pfeil auf der Karte an. Befindet sich die Markierung im sichtbaren Bereich der Karte, wird kein Pfeil angezeigt.
- **Richtungslinie**. Zeigt die Richtung als gestrichelte Linie von einem bestimmten Punkt auf der Karte zur verfolgten Markierung in einer geraden Linie an.
- ***Einmal tippen*** aktiv (*für Android*). Mit einem einmaligen Tippen auf die gewünschte Markierung auf der Karte wird diese Markierung an den Anfang der Liste der aktiven Kartenmarkierungen verschoben, ohne das Kontextmenü zu öffnen.
- **Passierte Markierungen auf der Karte behalten** *(für Android)*. Markierungen, die als Gruppe von Favoriten oder GPX-Wegpunkten hinzugefügt und als passiert markiert wurden, bleiben auf der Karte. Wenn die Gruppe nicht aktiv ist, verschwinden die Markierungen von der Karte.


## Route für Markierungen planen {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Kartenmarkierungen Routenpunkte Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Kartenmarkierungen Routenoptionen Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Mit der Funktion "Route planen" in der Markierungsliste können Sie *Markierungen* *Tür-zu-Tür* sortieren, in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie die Option *Navigation* auswählen, werden die *Markierungen* als [Zwischenziele](../navigation/setup/route-navigation.md#intermediate-destinations) verwendet.


## Aktionen {#actions}

<InfoAndroidOnly />

![Kartenmarkierungen Mehr Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Markierungen können in der Liste nach Name, Nähe, Hinzufügezeit sortiert werden.
- **<Translate android="true" ids="appearance_on_the_map"/>** oder **<Translate ios="true" ids="shared_string_appearance"/>**. [Einstellungen für Kartenmarkierungen](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Fügt Markierungen durch [Koordinateneingabe](../plan-route/coordinate-input.md) hinzu.
- **<Translate android="true" ids="plan_route"/>**. Erstellt eine Route [für die Navigation](../navigation/setup/markers-navigation.md) unter Verwendung ausgewählter Markierungen.
- **<Translate android="true" ids="marker_save_as_track"/>**. Speichert aktive Markierungen in einer GPX-Datei.
- **<Translate android="true" ids="move_all_to_history"/>**. Deaktiviert alle Markierungen und verschiebt sie in den [Verlauf](#history).


## Verwandte Artikel {#related-articles}

- [Navigation nach Markierungen](../navigation/setup/markers-navigation.md)
- [Markierungs-Widgets](../widgets/markers.md)

> *Zuletzt aktualisiert: August 2024*