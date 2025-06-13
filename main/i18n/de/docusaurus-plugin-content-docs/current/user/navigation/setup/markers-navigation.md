---
source-hash: 61e8443d4e54a4ec273975c3ee5b519c6d4ef71bc9d4c0412f0a23d7875da923
sidebar_position: 3
title:  Navigation nach Markern
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

[Kartenmarker](../../personal/markers.md) sind Punkte auf der Karte, die mit Flaggen markiert sind. Sie können für eine Vielzahl von Zwecken verwendet werden, z. B. zur Kennzeichnung eines Ortes, den Sie besuchen möchten, eines interessanten Punktes, an den Sie sich erinnern möchten, oder zur Erstellung einer benutzerdefinierten Route.

Sie können besonders hilfreich für Wanderer, Radfahrer oder alle sein, die ein neues Gebiet erkunden und interessante Orte oder Bezugspunkte auf der Karte markieren möchten. Der Hauptunterschied zu [Favoritenpunkten](../../personal/favorites.md) besteht darin, dass Marker schneller erstellt werden können, da sie keinen Namen benötigen.

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

*Kartenmarker* können als [Ziele](./route-navigation#set-destinations) beim Erstellen einer Route dienen. Sie sind besonders praktisch, wenn Sie eine Route mit Zwischenpunkten festlegen müssen.

*Kartenmarker* bieten jedoch auch verschiedene Funktionen wie [Widgets](../../widgets/markers.md), Bewegungsrichtung, Linien auf der Karte, sodass Sie diese Werkzeuge zur Navigation verwenden können, ohne eine Routenlinie zu erstellen und die vollständige Sprachführung zu aktivieren.

Falls Sie eine einfache Punkt-zu-Punkt-Navigation benötigen, die als gerade Linien angezeigt wird, können Sie eine ***Reiseroutenliste*** erstellen und sortieren, die aus Markern als Zwischenpunkten besteht, und Widgets für eine einfache Navigation verwenden.


#### Empfehlungen {#recommendations}

Hier sind einfache Empfehlungsschritte zur *Navigation nach Markern*:

1. Marker erstellen. Suchen Sie das/die gewünschte(n) Objekt(e) auf der Karte, tippen Sie darauf und wählen Sie die *[Marker-Schaltfläche](../../personal/markers.md#add-marker-on-the-map)* im *[Karten Kontextmenü](../../map/map-context-menu.md#add--edit-marker)*. Sie können auch Marker aus [Favoriten](#add-group-of-favorite) oder [GPX-Tracks](#add-group-of-track-waypoints) erstellen.
2. [*Marker sortieren*](#sort-markers) in der bevorzugten Reihenfolge, in der Sie sie passieren möchten.
3. Passen Sie die *Kartenmarker-Ansicht* an, wenn Sie Marker verwenden möchten, ohne die Navigation zu starten. Aktivieren Sie die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *[Aussehen](../../personal/markers.md#appearance-on-the-map)* des *[Kartenmarker-Menüs](../../personal/markers.md#map-markers-menu)*.
4. Fügen Sie *[Marker-Widgets](../../personal/markers.md#marker-widgets)* im *[Bildschirm konfigurieren-Menü](../../widgets/configure-screen.md)* hinzu (optional).
5. [*Als passiert markieren*](#pass-markers) bereits besuchte Marker oder stellen Sie sie aus dem Verlauf wieder her, wenn Sie sie erneut passieren möchten.

:::note
Wenn die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *Aussehen* des [Kartenmarker-Menüs](../../personal/markers.md#appearance-on-the-map) aktiviert sind, sehen Sie einen Pfeil oder eine gestrichelte Linie auf der Karte. Der Pfeil zeigt die Richtung zum aktiven Marker an, wenn dieser außerhalb des aktuellen Kartenbildschirms liegt. Eine Richtungslinie wird gezeichnet, wenn sich Ihre Geolocation und der Marker beide auf demselben Bildschirm befinden.
:::


## Reiseroutenliste {#itinerary-list}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Die Reiseroutenliste stellt eine geordnete Liste von *passierbaren* Markern dar, die auf der Karte sichtbar sind. Sie können Punkte einzeln hinzufügen und löschen oder dies in einem Rutsch mit einer vorbereiteten [GPX-Datei](#add-group-of-track-waypoints) oder einer [Favoritengruppe](#add-group-of-favorite) tun. Für lokale Wettbewerbe oder Abenteuer kann es nützlich sein, eine Liste von Punkten aus Koordinaten mit dem [Koordinateneingabe-Tool](../../plan-route/coordinate-input.md) zu erstellen.


### Einzelne Marker hinzufügen {#add-single-markers}

*Marker* können durch einmaliges Tippen auf den Bildschirm an der gewünschten Stelle auf der Karte hinzugefügt oder gelöscht werden. Anschließend müssen Sie die Anweisungen aus dem Artikel *[Karten Kontextmenü](../../map/map-context-menu.md#add--edit-marker)* befolgen.


### Gruppe von Favoriten hinzufügen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Sie können *Kartenmarker* aus *[Favoriten](../../personal/favorites.md)* erstellen, indem Sie Folgendes verwenden:

- *[Favoritengruppen-Menü](../../personal/favorites.md#add-to-map-markers)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten)*.
- &#128681; Symbol im Favoriten-In-Page-Menü *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten→&#128681;)*.
- **'+'** (Hinzufügen) Option im *[Gruppen-Tab](../../personal/markers.md#groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Gruppe von Track-Wegpunkten hinzufügen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-Tracks mit Wegpunkten können als *Kartenmarker* verwendet und schnell ausgeschaltet werden:

- Verwenden Sie die Option **'+'** (Hinzufügen) im *[Gruppen-Tab](../../personal/markers.md#groups)* im Kartenmarker-Menü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Schalten Sie den Schalter neben dem Track im *[Gruppen-Tab](../../personal/markers.md#groups)* im Kartenmarker-Menü ein *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Nur Tracks mit Wegpunkten können zur *Kartenmarkerliste* hinzugefügt werden. Der Track, den Sie hinzufügen möchten, sollte auch auf der Karte sichtbar (aktiv) sein.
:::

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Sie können auch *Marker* aus einem Track mit Wegpunkten über das *[Track Kontextmenü](../../map/tracks/track-context-menu.md#waypoints-folder)* erstellen: *Tippen Sie auf einen sichtbaren Track auf der Karte → wählen Sie im Track Kontextmenü Punkte → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Marker sortieren {#sort-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Durch Drücken auf die linke Ecke (Android) oder rechte Ecke (iOS) einer *Kartenmarker*-Registerkarte in der *[Kartenmarkerliste](../../personal/markers.md#list)* und Bewegen nach oben oder unten können Sie die Reihenfolge in der *Navigationsliste* ändern (während Sie eine Markerkarte bewegen, sehen Sie eine Linie, die anzeigt, wo der Marker platziert wird).

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

- **Name** (*alphabetisch*). Wenn Marker aussagekräftige Namen haben, kann dies eine nützliche Möglichkeit sein, den gesuchten Marker schnell zu finden.
- **Entfernung** (*nächster oder entferntester zuerst*). Diese Option sortiert die Marker nach ihrer Entfernung von Ihrem aktuellen Standort.
- **Datum** (*kürzlich oder vor langer Zeit*). Dies sortiert die Marker nach dem Datum, an dem sie hinzugefügt wurden. Wenn Sie im Laufe der Zeit viele Marker hinzugefügt haben, kann dies eine nützliche Möglichkeit sein, die neuesten zu sehen.


### Neu anordnen mit dem Routenplanungs-Tool {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Mit der Funktionalität des Routenplanungs-Tools in der Markerliste können Sie *Marker* *Tür-zu-Tür* sortieren, in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie die Option *Navigation* antippen, werden *Marker* als [Zwischenziele](../setup/route-navigation.md#intermediate-destinations) verwendet.


## Marker passieren {#pass-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Ein *Marker* kann als passiert (*Android*) oder verworfen (*iOS*) markiert werden.

- Über das *[Karten Kontextmenü](../../map/map-context-menu.md#add--edit-marker)*.
- Wenn Sie sich dem *Marker* auf eine Entfernung von weniger als 40 Metern (Android) oder 50 Metern (iOS) nähern, wird ein Schalter in der *[Marker-Widgets](../../widgets/markers.md#top-bar-widget)*-Leiste aktiv.

Nachdem der *Marker* passiert wurde, gelangt er in den Ordner [Verlauf](../../personal/markers.md#history), von wo er bei Bedarf wiederhergestellt werden kann. Der nächste Marker in der [Liste](#itinerary-list) wird aktiv. Abhängig von Ihren [Einstellungen](#use-markers-in-navigation) werden Sie möglicherweise mit einem Pfeil oder einer gestrichelten Linie dorthin geführt.


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

> *Zuletzt aktualisiert: Juni 2024.*