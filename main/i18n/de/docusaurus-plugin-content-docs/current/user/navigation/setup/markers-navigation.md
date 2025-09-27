---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  Navigation mit Markern
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

[Kartenmarker](../../personal/markers.md) sind Punkte auf der Karte, die durch Fähnchen markiert sind. Sie können für verschiedene Zwecke verwendet werden, z. B. um einen Ort zu kennzeichnen, den Sie besuchen möchten, einen interessanten Punkt, an den Sie sich erinnern möchten, oder um eine benutzerdefinierte Route zu erstellen.

Sie können besonders für Wanderer, Radfahrer oder jeden, der ein neues Gebiet erkundet und interessante Orte oder Referenzpunkte auf der Karte markieren möchte, hilfreich sein. Der Hauptunterschied zu [Favoritenpunkten](../../personal/favorites.md) besteht darin, dass Marker schneller erstellt werden können, da sie keinen Namen benötigen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigationsmarker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmarker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Marker in der Navigation verwenden {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Unterschied Markernavigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Unterschied Markernavigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Unterschied Markernavigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Unterschied Markernavigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Kartenmarker* können beim Erstellen einer Route als [Ziele](./route-navigation#set-destinations) dienen. Sie sind besonders praktisch, wenn Sie eine Route mit Zwischenzielen festlegen müssen.

*Kartenmarker* bieten jedoch auch verschiedene Funktionen wie [Widgets](../../widgets/markers.md), Bewegungsrichtung und Linien auf der Karte, sodass Sie diese Werkzeuge für die Navigation verwenden können, ohne eine Routenlinie zu erstellen und die vollständige sprachgeführte Navigation zu starten.

Falls Sie eine einfache Punkt-zu-Punkt-Navigation benötigen, die als gerade Linien angezeigt wird, können Sie eine ***Routenliste*** erstellen und sortieren, die aus Markern als Zwischenzielen besteht, und Widgets für eine einfache Navigation verwenden.


### Empfehlungen {#recommendations}

Hier sind einfache Empfehlungsschritte zur *Navigation mit Markern*:

1. Marker erstellen. Suchen Sie das/die gewünschte(n) Objekt(e) auf der Karte, tippen Sie darauf und wählen Sie die Schaltfläche *[Marker](../../personal/markers.md#add--edit-markers)* im *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*. Sie können auch Marker aus [Favoriten](#add-group-of-favorite) oder [GPX-Tracks](#add-group-of-track-waypoints) erstellen.
2. [*Marker sortieren*](#sort-markers), in der bevorzugten Reihenfolge, in der Sie sie passieren möchten.
3. Passen Sie die *Kartenmarker-Ansicht* an, wenn Sie Marker ohne Starten der Navigation verwenden möchten. Aktivieren Sie die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *[Erscheinungsbild](../../personal/markers.md#appearance-on-the-map)* des *[Kartenmarker-Menüs](../../personal/markers.md#actions)*.
4. Fügen Sie *[Marker-Widgets](../../personal/markers.md#markers)* im Menü *[Bildschirm konfigurieren](../../widgets/configure-screen.md)* hinzu (optional).
5. [*Als passiert markieren*](#pass-markers) Sie bereits besuchte Marker oder stellen Sie sie aus dem Verlauf wieder her, wenn Sie sie erneut passieren möchten.

:::note
Wenn die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *Erscheinungsbild* des [Kartenmarker-Menüs](../../personal/markers.md#appearance-on-the-map) aktiviert sind, sehen Sie einen Pfeil oder eine gestrichelte Linie auf der Karte. Der Pfeil zeigt die Richtung zum aktiven Marker, wenn dieser sich außerhalb des aktuellen Kartenbildschirms befindet. Die Richtungslinie wird gezeichnet, wenn sich Ihr Standort und der Marker beide auf demselben Bildschirm befinden.
:::


## Routenliste {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Markerliste Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markerliste iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Die Routenliste stellt eine geordnete Liste von *passierbaren* Markern dar, die auf der Karte sichtbar sind. Sie können Punkte einzeln hinzufügen und löschen oder dies stapelweise tun, indem Sie eine im Voraus vorbereitete [GPX-Datei](#add-group-of-track-waypoints) oder eine [Favoritengruppe](#add-group-of-favorite) verwenden. Für lokale Wettbewerbe oder Abenteuer kann es nützlich sein, eine Liste von Punkten aus Koordinaten mit dem [Koordinateneingabe-Werkzeug](../../plan-route/coordinate-input.md) zu erstellen.


### Einzelne Marker hinzufügen {#add-single-markers}

*Marker* können durch einmaliges Tippen auf den Bildschirm an der gewünschten Stelle zur Karte hinzugefügt oder von ihr gelöscht werden. Anschließend müssen Sie den Anweisungen im Artikel *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)* folgen.


### Favoritengruppe hinzufügen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoriten zu Markern 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoriten zu Markern 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Sie können *Kartenmarker* aus *[Favoriten](../../personal/favorites.md)* erstellen, indem Sie Folgendes verwenden:

- *[Menü der Favoritengruppen](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten)*.
- &#128681;-Symbol im In-Page-Menü der Favoriten *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten→&#128681;)*.
- **'+'** (Hinzufügen)-Option im Tab *[Gruppen](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Gruppe von Track-Wegpunkten hinzufügen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX zu Markern 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-Tracks mit Wegpunkten können als *Kartenmarker* verwendet und schnell ausgeschaltet werden:

- Verwenden Sie die **'+'** (Hinzufügen)-Option im Tab *[Gruppen](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Schalten Sie den Schalter neben dem Track im Tab *[Gruppen](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü ein *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Nur Tracks mit Wegpunkten können zur *Kartenmarkerliste* hinzugefügt werden. Der Track, den Sie hinzufügen möchten, sollte ebenfalls auf der Karte sichtbar (aktiv) sein.
:::

![GPX zu Markern 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX zu Markern 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Sie können auch *Marker* aus einem Track mit Wegpunkten über das *[Track-Kontextmenü](../../map/tracks/track-context-menu.md#points--waypoints)* erstellen: *Tippen Sie auf einen sichtbaren Track auf der Karte → wählen Sie im Track-Kontextmenü Punkte → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Marker sortieren {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marker in einer Liste sortieren Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marker in einer Liste sortieren iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Durch Drücken auf die linke Ecke (*Android*) oder rechte Ecke (*iOS*) eines *Kartenmarker*-Tabs in der *[Kartenmarkerliste](../../personal/markers.md#itinerary-list)* und Verschieben nach oben oder unten können Sie dessen Reihenfolge in der *Navigationsliste* ändern (während Sie eine Markerkarte verschieben, sehen Sie eine Linie, die anzeigt, wo der Marker platziert wird).

In der Android-Version der OsmAnd-App gibt es weitere Sortieroptionen für *Kartenmarker* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sortieren nach* oder *Route planen*).


### Nach Attributen sortieren {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternative Markersortierung Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markersortierung Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Sie können *Marker* sortieren nach:

- **Name** (*alphabetisch*) — Wenn Marker beschreibende Namen haben, kann dies eine nützliche Methode sein, um den gesuchten Marker schnell zu finden.
- **Entfernung** (*nächste oder weiteste zuerst*) - Diese Option sortiert die Marker nach ihrer Entfernung von Ihrem aktuellen Standort.
- **Datum** (*kürzlich oder vor langer Zeit*) - Dies sortiert die Marker nach dem Datum, an dem sie hinzugefügt wurden. Wenn Sie im Laufe der Zeit viele Marker hinzugefügt haben, kann dies eine nützliche Methode sein, um zu sehen, welche die neuesten sind.


### Mit dem Routenplanungswerkzeug neu anordnen {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markersortierung Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markersortierung Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Mit der Funktionalität des Werkzeugs "Route planen" in der Markerliste können Sie *Marker* *von Tür zu Tür* sortieren, sie in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie auf die Option *Navigation* tippen, werden die *Marker* als [Zwischenziele](../setup/route-navigation.md#intermediate-destinations) verwendet.


## Marker passieren {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marker passieren Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Marker passieren Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marker passieren iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Marker passieren iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Ein *Marker* kann als passiert (*Android*) oder verworfen (*iOS*) markiert werden.

- Über das *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*.
- Wenn Sie sich einem *Marker* auf eine Entfernung von weniger als 40 Metern (*Android*) oder 50 Metern (*iOS*) nähern, wird ein Schalter in der Leiste des *[Marker-Widgets](../../widgets/markers.md#top-bar-widget)* aktiv.

Nach dem Passieren eines *Markers* wird dieser in den Ordner [Verlauf](../../personal/markers.md#history) verschoben, von wo er bei Bedarf wiederhergestellt werden kann. Der nächste Marker in der [Liste](#itinerary-list) wird aktiv. Abhängig von Ihren [Einstellungen](#use-markers-in-navigation) werden Sie möglicherweise mit einem Pfeil oder einer gestrichelten Linie dorthin geführt.


## Verwandte Artikel {#related-articles}

- [Über Kartenmarker](../../personal/markers.md).
- [Marker-Widget](../../widgets/markers.md).
__
- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](./route-navigation.md)
- [Routendetails](./route-details.md)
- [Navigation nach Track](./gpx-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)