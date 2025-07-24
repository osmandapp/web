---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title: Nach Markierungen navigieren
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

[Kartenmarkierungen](../../personal/markers.md) sind Punkte auf der Karte, die mit Flaggen markiert sind. Sie können für eine Vielzahl von Zwecken verwendet werden, z. B. um einen Ort anzuzeigen, den Sie besuchen möchten, einen interessanten Punkt, an den Sie sich erinnern möchten, oder um eine benutzerdefinierte Route zu erstellen.

Sie können besonders hilfreich für Wanderer, Radfahrer oder alle sein, die ein neues Gebiet erkunden und interessante Orte oder Referenzpunkte auf der Karte markieren möchten. Der Hauptunterschied zu [Favoritenpunkten](../../personal/favorites.md) besteht darin, dass Markierungen schneller erstellt werden können, da sie keinen Namen erfordern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsmarkierung Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmarkierung iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Markierungen in der Navigation verwenden {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Unterschied Markierungsnavigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Unterschied Markierungsnavigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Unterschied Markierungsnavigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Unterschied Markierungsnavigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Kartenmarkierungen* können als [Ziele](./route-navigation#set-destinations) beim Erstellen einer Route dienen. Sie sind besonders praktisch, wenn Sie eine Route mit Zwischenpunkten festlegen müssen.

*Kartenmarkierungen* bieten jedoch auch verschiedene Funktionen wie [Widgets](../../widgets/markers.md), Bewegungsrichtung, Linien auf der Karte, sodass Sie diese Tools zur Navigation verwenden können, ohne eine Routenlinie zu erstellen und eine vollständige Sprachführung zu aktivieren.

Falls Sie eine einfache Punkt-zu-Punkt-Navigation als gerade Linien benötigen, können Sie eine ***Reiseroutenliste*** aus Markierungen als Zwischenpunkte erstellen und sortieren und Widgets für eine einfache Navigation verwenden.


#### Empfehlungen {#recommendations}

Hier sind einfache Empfehlungsschritte, um *nach Markierungen zu navigieren*:

1. Markierungen erstellen. Suchen Sie das/die gewünschte(n) Objekt(e) auf der Karte, tippen Sie darauf und wählen Sie die *[Markierungsschaltfläche](../../personal/markers.md#add--edit-markers)* im *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*. Sie können Markierungen auch aus [Favoriten](#add-group-of-favorite) oder [GPX-Tracks](#add-group-of-track-waypoints) erstellen.
2. [*Markierungen sortieren*](#sort-markers) in der gewünschten Reihenfolge, in der Sie sie passieren möchten
3. Passen Sie die *Kartenmarkierungsansicht* an, wenn Sie Markierungen verwenden möchten, ohne die Navigation zu starten. Aktivieren Sie die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *[Aussehen](../../personal/markers.md#appearance-on-the-map)* des *[Kartenmarkierungsmenüs](../../personal/markers.md#actions)*.
4. Fügen Sie *[Markierungs-Widgets](../../personal/markers.md#markers)* im *[Bildschirmkonfigurationsmenü](../../widgets/configure-screen.md)* hinzu (optional).
5. Bereits besuchte Markierungen als *[Passiert markieren*](#pass-markers) oder aus dem Verlauf wiederherstellen, wenn Sie sie erneut passieren möchten.

:::note
Wenn die Optionen **Pfeile auf der Karte** und **Richtungslinie** im Abschnitt *Aussehen* des [Kartenmarkierungsmenüs](../../personal/markers.md#appearance-on-the-map) aktiviert sind, sehen Sie einen Pfeil oder eine gestrichelte Linie auf der Karte. Der Pfeil zeigt die Richtung zur aktiven Markierung an, wenn diese außerhalb des aktuellen Kartenbildschirms liegt. Eine Richtungslinie wird gezeichnet, wenn sich Ihr Geolokalisierungspunkt und die Markierung beide auf demselben Bildschirm befinden.
:::


## Reiseroutenliste {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markierungsliste Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markierungsliste iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Die Reiseroutenliste stellt eine geordnete Liste von *passierbaren* Markierungen dar, die auf der Karte sichtbar sind. Sie können Punkte einzeln hinzufügen und löschen oder dies stapelweise mit einer vorbereiteten [GPX-Datei](#add-group-of-track-waypoints) oder [Favoritengruppe](#add-group-of-favorite) tun. Für lokale Wettbewerbe oder Abenteuer kann es nützlich sein, eine Liste von Punkten aus Koordinaten mit dem [Koordinateneingabewerkzeug](../../plan-route/coordinate-input.md) zu erstellen.


### Einzelne Markierungen hinzufügen {#add-single-markers}

*Markierungen* können durch einmaliges Tippen auf den Bildschirm an der gewünschten Stelle hinzugefügt oder von der Karte gelöscht werden. Anschließend müssen Sie die Anweisungen aus dem Artikel *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)* befolgen.


### Gruppe von Favoriten hinzufügen {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoriten zu Markierungen 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoriten zu Markierungen 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Sie können *Kartenmarkierungen* aus *[Favoriten](../../personal/favorites.md)* erstellen, indem Sie Folgendes verwenden:

- *[Favoritengruppenmenü](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten)*.
- &#128681; Symbol im Favoriten-In-Page-Menü *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Meine Favoriten→&#128681;)*.
- **'+'** (Hinzufügen)-Option im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarkierungsmenü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Gruppe von Track-Wegpunkten hinzufügen {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX zu Markierungen 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-Tracks mit Wegpunkten können als *Kartenmarkierungen* verwendet und schnell deaktiviert werden:

- Verwenden Sie die Option **'+'** (Hinzufügen) im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarkierungsmenü *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Schalten Sie den Schalter neben dem Track im *[Gruppen-Tab](../../personal/markers.md#marker-groups)* im Kartenmarkierungsmenü ein *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Nur Tracks mit Wegpunkten können zur *Kartenmarkierungsliste* hinzugefügt werden. Der Track, den Sie hinzufügen möchten, sollte auch auf der Karte sichtbar (aktiv) sein.
:::

![GPX zu Markierungen 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX zu Markierungen 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Sie können auch *Markierungen* aus einem Track mit Wegpunkten über das *[Track-Kontextmenü](../../map/tracks/track-context-menu.md#points--waypoints)* erstellen: *Tippen Sie auf einen sichtbaren Track auf der Karte → wählen Sie im Track-Kontextmenü Punkte → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Markierungen sortieren {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markierungen in einer Liste sortieren Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markierungen in einer Liste iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Durch Drücken auf die linke Ecke (*Android*) oder rechte Ecke (*iOS*) eines *Kartenmarkierungs-Tabs* in der *[Kartenmarkierungsliste](../../personal/markers.md#itinerary-list)* und Verschieben nach oben oder unten können Sie die Reihenfolge in der *Navigationsliste* ändern (während Sie eine Markierungskarte verschieben, sehen Sie eine Linie, die anzeigt, wo die Markierung platziert wird).

In der Android-Version der OsmAnd-App gibt es weitere Sortieroptionen für *Kartenmarkierungen* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Sortieren nach* oder *Route planen*).


### Nach Attributen sortieren {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternative Markierungssortierung Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markierungssortierung Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Sie können *Markierungen* sortieren nach:

- **Name** (*alphabetisch*) – Wenn Markierungen aussagekräftige Namen haben, kann dies eine nützliche Möglichkeit sein, die gesuchte Markierung schnell zu finden.
- **Entfernung** (*nächste oder entfernteste zuerst*) – Diese Option sortiert die Markierungen nach ihrer Entfernung von Ihrem aktuellen Standort.
- **Datum** (*kürzlich oder vor langer Zeit*) – Dies sortiert die Markierungen nach dem Datum, an dem sie hinzugefügt wurden. Wenn Sie im Laufe der Zeit viele Markierungen hinzugefügt haben, kann dies eine nützliche Möglichkeit sein, die neuesten zu sehen.


### Neu anordnen mit dem Routenplanungs-Tool {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markierungssortierung Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markierungssortierung Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Mit der Funktionalität des Routenplanungs-Tools in der Markierungsliste können Sie *Markierungen* *Tür-zu-Tür* sortieren, in umgekehrter Reihenfolge anordnen oder eine *Rundreise* erstellen. Wenn Sie die Option *Navigation* antippen, werden *Markierungen* als [Zwischenziele](../setup/route-navigation.md#intermediate-destinations) verwendet.


## Markierungen passieren {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markierung passieren Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Markierung passieren Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markierung passieren iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Markierung passieren iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Eine *Markierung* kann als passiert (*Android*) oder verworfen (*iOS*) markiert werden.

- Über das *[Kartenkontextmenü](../../map/map-context-menu.md#add--edit-marker)*.
- Wenn Sie sich einer *Markierung* in einer Entfernung von weniger als 40 Metern (*Android*) oder 50 Metern (*iOS*) nähern, wird ein Schalter in der Leiste der *[Markierungs-Widgets](../../widgets/markers.md#top-bar-widget)* aktiv.

Nach dem Passieren einer *Markierung* wird diese in den Ordner [Verlauf](../../personal/markers.md#history) verschoben, von wo aus sie bei Bedarf wiederhergestellt werden kann. Die nächste Markierung in der [Liste](#itinerary-list) wird aktiv. Abhängig von Ihren [Einstellungen](#use-markers-in-navigation) werden Sie möglicherweise mit einem Pfeil oder einer gestrichelten Linie dorthin geführt.


## Verwandte Artikel {#related-articles}

- [Über Kartenmarkierungen](../../personal/markers.md).
- [Markierungs-Widget](../../widgets/markers.md).
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