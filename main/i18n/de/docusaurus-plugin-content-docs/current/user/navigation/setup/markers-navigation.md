---
source-hash: 840895be86a2bc170c5cc62b0abac17afda6a3dcd33c15c2d2b335a1a52fa27e
sidebar_position: 3
title:  Navigation über Marker
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

[Kartenmarker](../../personal/markers.md) sind Punkte auf der Karte, die mit Flaggen markiert sind. Sie können für eine Vielzahl von Zwecken verwendet werden, z. B. um einen Ort anzuzeigen, den Sie besuchen möchten, einen interessanten Punkt, an den Sie sich erinnern möchten, oder um eine benutzerdefinierte Route zu erstellen.

Sie können besonders hilfreich für Wanderer, Radfahrer oder alle sein, die ein neues Gebiet erkunden und interessante Orte oder Referenzpunkte auf der Karte markieren möchten. Der Hauptunterschied zu [Favoritenpunkten](../../personal/favorites.md) besteht darin, dass Marker schneller erstellt werden können, da sie keinen Namen benötigen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Marker in der Navigation verwenden {#use-markers-in-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

 ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Kartenmarker* können als [Ziele](./route-navigation#set-destinations) beim Erstellen einer Route dienen. Sie sind besonders praktisch, wenn Sie eine Route mit Zwischenzielen festlegen müssen.

Allerdings bieten *Kartenmarker* auch verschiedene Funktionen wie [Widgets](../../widgets/markers.md), Bewegungsrichtung, Linien auf der Karte, sodass Sie diese Werkzeuge zur Navigation verwenden können, ohne eine Routenlinie zu erstellen und die vollständige Sprachführung zu starten.

Falls Sie eine einfache Punkt-zu-Punkt-Navigation benötigen, die als gerade Linien angezeigt wird, können Sie eine ***Wegpunktliste*** erstellen und sortieren, die aus Markern als Zwischenzielen besteht, und Widgets für eine einfache Navigation verwenden.


#### Empfehlungen {#recommendations}

Hier sind einfache Schritte zur Empfehlung, um *über Marker zu navigieren*:

1. Marker erstellen. Suchen Sie das/die gewünschte(n) Objekt(e) auf der Karte, tippen Sie darauf und wählen Sie die *[Marker-Schaltfläche](../../personal/markers.md#add--edit-markers)* im *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*. Sie können auch Marker aus [Favoriten](#add-group-of-favorite) oder [GPX-Tracks](#add-group-of-track-waypoints) erstellen.
2. [*Marker sortieren*](#sort-markers) in der bevorzugten Reihenfolge, in der Sie sie passieren möchten.
3. Passen Sie die *Kartenmarkeransicht* an, wenn Sie Marker verwenden möchten, ohne die Navigation zu starten. Aktivieren Sie die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Bereich *[Darstellung](../../personal/markers.md#appearance-on-the-map)* des *[Kartenmarker-Menüs](../../personal/markers.md#actions)*.
4. Fügen Sie *[Marker-Widgets](../../personal/markers.md#markers)* im *[Bildschirm konfigurieren-Menü](../../widgets/configure-screen.md)* hinzu (optional).
5. [*Als passiert markieren*](#pass-markers) bereits besuchte Marker oder stellen Sie sie aus dem Verlauf wieder her, wenn Sie sie erneut passieren möchten.

:::note
Wenn die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Bereich *Darstellung* des [Kartenmarker-Menüs](../../personal/markers.md#appearance-on-the-map) aktiviert sind, sehen Sie einen Pfeil oder eine gestrichelte Linie auf der Karte. Der Pfeil zeigt die Richtung zum aktiven Marker an, wenn dieser außerhalb des aktuellen Kartenbildschirms liegt. Die Richtungslinie wird gezeichnet, wenn sich Ihre Geolocation und der Marker beide auf demselben Bildschirm befinden.
:::


## Wegpunktliste {#itinerary-list}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Die Wegpunktliste stellt eine geordnete Liste von *passierbaren* Markern dar, die auf der Karte sichtbar sind. Sie können Punkte einzeln hinzufügen und löschen oder dies im Batch mit einer im Voraus vorbereiteten [GPX-Datei](#add-group-of-track-waypoints) oder [Favoritengruppe](#add-group-of-favorite) tun. Bei lokalen Wettbewerben oder Abenteuern kann es nützlich sein, eine Liste von Punkten aus Koordinaten mit dem [Koordinateneingabewerkzeug](../../plan-route/coordinate-input.md) zu erstellen.


### Einzelne Marker hinzufügen {#add-single-markers}

*Marker* können durch einmaliges Tippen auf den Bildschirm an der gewünschten Stelle zur Karte hinzugefügt oder von ihr gelöscht werden. Dann müssen Sie den Anweisungen aus dem Artikel *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)* folgen.


### Gruppe von Favoriten hinzufügen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Sie können *Kartenmarker* aus *[Favoriten](../../personal/favorites.md)* erstellen, indem Sie Folgendes verwenden:

- *[Favoritengruppen-Menü](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Orte)*.
- &#128681; Symbol im Favoriten-In-Page-Menü *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Orte→&#128681;)*.
- **'+'** (Hinzufügen)-Option im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Gruppe von Track-Wegpunkten hinzufügen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-Tracks mit Wegpunkten können als *Kartenmarker* verwendet und schnell ausgeschaltet werden:

- Verwenden Sie die Option **'+'** (Hinzufügen) im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Schalten Sie den Schalter neben dem Track im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarker-Menü ein *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Nur Tracks mit Wegpunkten können zur *Kartenmarkerliste* hinzugefügt werden. Der Track, den Sie hinzufügen möchten, sollte auch auf der Karte sichtbar (aktiv) sein.
:::

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Sie können auch *Marker* aus einem Track mit Wegpunkten erstellen, indem Sie das *[Track-Kontextmenü](../../map/tracks/track-context-menu.md#points--waypoints)* verwenden: *Tippen Sie auf einen sichtbaren Track auf der Karte → wählen Sie im Track-Kontextmenü Punkte → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Marker sortieren {#sort-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Durch Drücken auf die linke Ecke (*Android*) oder rechte Ecke (*iOS*) einer *Kartenmarker-Registerkarte* in der *[Kartenmarkerliste](../../personal/markers.md#itinerary-list)* und Bewegen nach oben oder unten können Sie die Reihenfolge in der *Navigationsliste* ändern (während Sie eine Markerkarte bewegen, sehen Sie eine Linie, die anzeigt, wo der Marker platziert wird).

In der Android-Version der OsmAnd-App gibt es weitere Sortieroptionen für *Kartenmarker* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sortieren nach* oder *Route planen*).


### Nach Attributen sortieren {#sort-by-attributes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Alternative Markers sorting Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markers sorting Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Sie können *Marker* sortieren nach:

- **Name** (*alphabetisch*) – Wenn Marker aussagekräftige Namen haben, kann dies eine nützliche Möglichkeit sein, den gesuchten Marker schnell zu finden.
- **Entfernung** (*nächste oder entfernteste zuerst*) – Diese Option sortiert die Marker nach ihrer Entfernung von Ihrem aktuellen Standort.
- **Datum** (*kürzlich oder vor langer Zeit*) – Dadurch werden die Marker nach dem Datum sortiert, an dem sie hinzugefügt wurden. Wenn Sie im Laufe der Zeit viele Marker hinzugefügt haben, kann dies eine nützliche Möglichkeit sein, die neuesten zu sehen.


### Neu anordnen mit dem Routenplanungstool {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Mit der Funktionalität der Routenplanung im Markerlistentool können Sie *Marker* *Tür-zu-Tür* sortieren, in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie die Option *Navigation* antippen, werden *Marker* als [Zwischenziele](../setup/route-navigation.md#intermediate-destinations) verwendet.


## Marker passieren {#pass-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Ein *Marker* kann als passiert markiert (*Android*) oder verworfen (*iOS*) werden.

- Über das *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*.
- Wenn Sie sich einem *Marker* auf eine Entfernung von weniger als 40 Metern (*Android*) oder 50 Metern (*iOS*) nähern, wird ein Schalter in der Leiste der *[Marker-Widgets](../../widgets/markers.md#top-bar-widget)* aktiv.

Nachdem Sie einen *Marker* passiert haben, wird er in den Ordner [Verlauf](../../personal/markers.md#history) verschoben, von wo aus er bei Bedarf wiederhergestellt werden kann. Der nächste Marker in der [Liste](#itinerary-list) wird aktiv. Abhängig von Ihren [Einstellungen](#use-markers-in-navigation) werden Sie mit einem Pfeil oder einer gestrichelten Linie dorthin geführt.


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

> *Zuletzt aktualisiert: Juni 2025*