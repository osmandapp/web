---
source-hash: bab12328af45f00a956e158c8d6bee3b7aacbe467620bd689e46113f152cec39
sidebar_position: 2
title: Reiseführer
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

:::info Bezahlte Funktion
Die Reiseführer sind eine [bezahlte Funktion](../purchases/index.md) der OsmAnd-App.
:::

Virtuelle Reiseführer in OsmAnd bieten Nutzern wertvolle Informationen, Empfehlungen und Tipps. Sie ermöglichen Reisenden auch den Zugriff auf umfassende Navigationsinformationen zu Sehenswürdigkeiten in der App.

OsmAnd-Reiseführer basieren auf Daten von [Wikivoyage](https://www.wikivoyage.org/), einem Gemeinschaftsprojekt ähnlich Wikipedia, bei dem ehrenamtliche Autoren aktuelle Artikel erstellen.
Wikivoyage-Informationen umfassen die wichtigsten Fakten über einen Ort, Transport, Sehenswürdigkeiten, Einkaufsmöglichkeiten und mehr.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Ansicht Allgemein](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Verwendung {#how-to-use}

- [Reiseführer](#download-articles) herunterladen.
- [Artikel](#browse-articles) über ein Land, eine Region, eine Stadt, eine Sehenswürdigkeit durchsuchen.
    - Alternativ können Sie Reiseführer-Artikel und/oder Punkte auf der Karte anzeigen lassen, indem Sie das Menü Karte konfigurieren verwenden.
    - Sehenswürdigkeiten auf der Karte durchsuchen, sie zu *[Kartenmarkierungen](../personal/markers.md#add-marker-on-the-map)* oder *[Favoriten](../personal/favorites.md#add-to-map-markers)* hinzufügen.
    - Mit der Schaltfläche *[Vollständig lesen](#manage-as-gpx-track)* zum *[Artikel](#travel-article)* innerhalb der *Reiseführer* wechseln.
- Artikel [als Lesezeichen speichern](#explore-and-bookmark), um sie später zu lesen.
- [Punkte](#points) aus Artikeln auswählen, die Sie besuchen möchten, und sie zur OsmAnd-Karte hinzufügen.
- Weitere Informationen zu sehenswerten Orten aus Offline-[Wikipedia-Artikeln](#combine-with-wikipedia) erhalten.
- Eine [Route erstellen](../navigation/setup/route-navigation.md#set-destinations) zu ausgewählten touristischen Attraktionen oder einen freien Spaziergang zwischen Punkten.

:::note
*Reiseführer*-Artikel werden in OsmAnd als GPX-Tracks mit Wegpunkten gespeichert. Nachdem Sie diese Tracks zur Karte hinzugefügt haben (siehe Abschnitte *[Punkte](#points)* oder *[Reiserouten](#travel-routes)* dieses Artikels), können Sie sie über das Menü *[Meine Orte](../personal/myplaces.md)* verwalten.
:::

### Artikel herunterladen {#download-articles}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Reiseführer-Download-Menü](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Kartenmenü iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Bevor Sie Reiseführer verwenden, müssen Sie diese über das Menü [Karte herunterladen](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*) herunterladen. Die Artikel sind nach Regionen gruppiert: *Afrika, Asien, Australien und Ozeanien, Mittelamerika, Europa, Nordamerika, Russland und Südamerika*, sodass Sie keine Reiseführer für eine einzelne Stadt oder ein einzelnes Land herunterladen müssen.
Durch das Speichern der benötigten Regionen auf Ihrem Gerät können Sie die Artikel mit OsmAnd durchsuchen, auch wenn Sie im Ausland oder außerhalb der Reichweite Ihres Mobilfunknetzes sind.

:::note
Neben Führern zu Ländern, Regionen oder Städten finden Sie auch Führer zu Orten aus Filmen, Büchern, Computerspielen, Gedenkstätten großer Persönlichkeiten und so weiter.
Es gibt auch spezialisierte Führer, wie die Liste des UNESCO Global Geoparks Network oder die größten und komplexesten internationalen Flughäfen der Welt.
:::

## Artikel durchsuchen {#browse-articles}

Der Bildschirm *Reiseführer* besteht aus zwei allgemeinen Teilen: einem [*Suchfeld*](#search) und einer *Reiseführer*-Liste mit zwei Registerkarten: *[<Translate android="true" ids="shared_string_explore"/> und <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Sie können mit einem einzigen Tippen auf eine Registerkarte zwischen ihnen wechseln.
Wenn Sie *Reiseführer* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*) öffnen, zeigt Ihnen OsmAnd Artikel über interessante Orte in der Nähe der geografischen Koordinaten des aktuellen Kartenmittelpunkts an. Wenn Sie auf ein Element aus der Liste tippen, öffnet sich der [Reiseführer-Artikel](#travel-article). Am unteren Bildschirmrand befindet sich ein Schalter zur Registerkarte *Lesezeichen*.

### Erkunden und Lesezeichen setzen {#explore-and-bookmark}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Hauptbildschirm](@site/static/img/guides/travel_guides_main_screen_1.png) ![Reiseführer-Hauptbildschirm 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Hauptbildschirm](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Reiseführer-Hauptbildschirm 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Auf der Registerkarte **Erkunden** oder **<Translate android="true" ids="popular_destinations"/>** werden die Top 30 Artikel über Reiseziele in der Nähe des Bildschirmmittelpunkts (außerhalb des Standorts) aufgelistet. Durch Tippen auf ein Element aus der Liste mit einem Titel und einer kurzen Beschreibung des Artikels können Sie den vollständigen Text dieses Artikels anzeigen.
Wenn Sie auf die Schaltfläche *Lesezeichen* tippen, wird der Artikel zum späteren Lesen gespeichert und ist auf der Registerkarte Lesezeichen verfügbar. Auf der Registerkarte *Gespeicherte Artikel* sind die Artikel so angeordnet, wie sie gespeichert wurden, wobei die neuesten Artikel oben stehen.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Öffnet [Reiseartikel](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Verschiebt den ausgewählten Artikel nach <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Entfernt den ausgewählten Artikel aus <Translate android="true" ids="saved_articles"/>.

### Suche {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Das Suchfeld befindet sich oben auf dem Bildschirm <Translate android="true" ids="shared_string_travel_guides"/>. Wenn Sie die ersten Buchstaben eines Landes, einer Stadt oder eines berühmten Ortes eingeben, erscheint eine Liste von Artikeln unter dem Suchfeld. Durch Berühren des benötigten Artikels können Sie mit dem Lesen beginnen.
Neben jedem Suchergebnis werden die 3 am häufigsten verwendeten Sprachen aufgelistet, in denen der ausgewählte Artikel gelesen werden kann. Beliebte Artikel sind jedoch in mehr Sprachen als den 3 aufgelisteten verfügbar.

**Zusätzliche Funktionen:**

- Sie können nach besonderen kulturellen Attraktionen suchen, wie z. B. *Harry Potter Tourismus*, *Geisterstädte*, *Monarchien* und andere.
- Um den Suchverlauf zu löschen, müssen Sie die Schaltfläche [<Translate android="true" ids="shared_string_options"/>](#options) verwenden.

<!--
- Die Suche ist erst abgeschlossen, wenn Sie &#128269; oder ein Leerzeichen am Ende des Wortes eingeben. - funktioniert nicht wie es sollte
-->

### Optionen {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Optionsmenü](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In diesem Menü können Sie das Erscheinungsbild von Artikeln anpassen, wenn Sie offline arbeiten. BEACHTEN SIE, dass *[heruntergeladene](#download-articles)* Reiseführer keine Bilder enthalten. Sie erscheinen nur, wenn Sie Artikel mit einer aktiven Internetverbindung anzeigen.
Im Optionsmenü können Sie wählen, ob Bilder in den angezeigten Artikeln gespeichert werden sollen, um sie offline verwenden zu können. Sie können auch den vorhandenen Bild-Cache leeren oder den Suchverlauf löschen (funktioniert nur bei der Suche in *Reiseführern*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Bilder in Artikeln können für die Offline-Nutzung heruntergeladen werden.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Leert den Bild-Cache, um Speicherplatz freizugeben.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Löscht den [Suchverlauf](#search).

## Reiseartikel {#travel-article}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Artikel](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Sie können einen Artikel aus den vorgeschlagenen Optionen auf der Registerkarte *[Erkunden](#explore-and-bookmark)* oder über die Option *[Suche](#search)* öffnen. Wenn Sie touristische Attraktionen, sogenannte *[Punkte](#points)*, aus einem *Reiseführer-Artikel* zur OsmAnd-Karte hinzufügen, können Sie den Artikel auch über die Schaltfläche *Vollständig lesen* im [Beschreibungsabschnitt](../map/tracks/track-context-menu.md#description-and-info) des Wegpunkts öffnen.

Die folgenden Steuerelemente befinden sich oben auf dem Bildschirm:

- Schalter zum Ändern der Sprache des Artikels. Die Sprache kann aus den verfügbaren Optionen ausgewählt werden. Standardmäßig wird die Systemsprache verwendet.
- Mit der Schaltfläche &#8942; können Sie den Artikel mit Ihren Freunden teilen. Der Link öffnet sich in der OsmAnd-App, die entsprechende Reiseführer-Datei sollte auf dem Gerät des Empfängers heruntergeladen werden oder die [Wikivoyage](https://www.wikivoyage.org/)-Website, wenn der Empfänger die OsmAnd-App nicht hat oder für iOS-Geräte.
- Durch Tippen auf die Navigationsleiste wird das *[Reiseführer-Navigationsmenü](#navigation-menu)* geöffnet.

Am unteren Bildschirmrand befinden sich Schaltflächen wie:

- [Inhaltsverzeichnis](#table-of-contents). Öffnet das Inhaltsverzeichnis des Artikels.
- [Punkte](#points). Zeigt touristische Attraktionen, die mit dem Artikel zusammenhängen, auf einer Karte an.
- [Lesezeichen](#explore-and-bookmark). Ermöglicht das Hinzufügen eines Artikels zu den Lesezeichen zum späteren Lesen.


### Navigationsmenü {#navigation-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Inhaltsmenü](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Um in den *Reiseführer-Artikeln* von einem Artikel zum anderen zu wechseln, verwenden Sie das **Navigationsmenü**. Sie können darauf zugreifen, indem Sie auf das Adressfeld über dem Bild tippen. BEACHTEN SIE, dass die Artikel in den Reiseführern wie folgt gruppiert sind: *Kontinent → Region → Land → Provinz (Region) → Stadt*.
Wenn Sie auf den Pfeil in der oberen linken Ecke des Bildschirms tippen, gelangen Sie direkt zur Registerkarte *Erkunden* oder *Gespeicherte Artikel* (je nachdem, welche Registerkarte Sie zuvor geöffnet haben).


### Inhaltsverzeichnis {#table-of-contents}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Inhaltsmenü](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Die meisten *Reiseführer-Artikel* haben die gleiche Inhaltsstruktur: *Einleitung* (Bilder und Beschreibung der touristischen Stätte) und *nachfolgende Kapitel*.

- &nbsp;*Verstehen*. Details zur lokalen Kultur und Gewohnheiten.
- &nbsp;*Anreise*. Details zur Anreise zu bestimmten Orten und wie viel diese Route kosten wird.
- &nbsp;*Sehen*. Eine Liste von Attraktionen (Museen, historische Stätten usw.) mit vollständigen Beschreibungen: Ticketpreise, Öffnungszeiten, nützliche Links und Telefonnummern.
- &nbsp;*Tun*. Orte, an denen man Zeit verbringen kann.
- &nbsp;*Kaufen*. Einkaufsstätten.
- &nbsp;*Essen*. Gastronomiebetriebe (unterteilt nach Budget: Budget, Mittelklasse, Luxus).
- &nbsp;*Trinken*. Bars und Cafés.
- &nbsp;*Schlafen*. Unterkünfte sind nach Budget unterteilt (Budget, Mittelklasse, Luxus).
- &nbsp;*Weiterreise*. Nächste Orte von Wikivoyage.

### Punkte {#points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Reiseführer-Artikel* enthalten oft touristische Attraktionen, die nach Themen gruppiert sind. Durch einmaliges Tippen auf die Schaltfläche *Punkte* am unteren Rand des *[Artikels](#travel-article)* werden alle Attraktionen, die mit dem Thema zusammenhängen (Essenslokale, Unterkunftsmöglichkeiten, Flughäfen, Geschäfte, historische Denkmäler usw.), zur Karte hinzugefügt und können *[als Track verwaltet werden](#manage-as-gpx-track)*.

Standardmäßig sind Attraktionsgruppen mit bestimmten Symbolen gekennzeichnet: Kategorien *Essen und Trinken* mit Messer und Gabel in einem roten Kreis, *Tun und Sehen* mit einer Kamera in einem grünen Kreis und andere. Sie können Punktgruppen mit &#8942; wie einen *[Wegpunktordner](../map/tracks/track-context-menu.md#waypoints-folder)* verwalten.

:::note
Punkte in *Reiseartikeln* beziehen sich auf Wegpunkte auf einem GPX-Track.
Sie können auch *[Punkte zur Karte hinzufügen](#travel-routes)* im Menü *Karte konfigurieren*. Sie können alle anzeigen oder eine bestimmte Kategorie auswählen.
:::


## Reiserouten {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Eine alternative Möglichkeit, *Reiseführer* zu durchsuchen, besteht darin, sie auf der Karte über das Menü *Karte konfigurieren* anzuzeigen. Diese Funktion bezieht sich nicht auf die von OsmAnd bereitgestellte Möglichkeit, Wikivoyage zu verwenden, sondern nur auf Tracks. Mehr dazu können Sie in unserem [Blog](https://osmand.net/blog/routes#generated-travel-routes) lesen.

![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Reiserouten und Artikel auf der Karte {#travel-routes-and-articles-on-the-map}

![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Reiseführer-Punkte-Menü](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Nachdem Sie die Anzeige von *Reiserouten* im Menü *Karte konfigurieren* aktiviert haben, erscheinen Kreise unterschiedlicher Farbe auf der Karte. Die orangefarbenen stellen Routen-Tracks, Routen-Artikel und einige Wegpunkte dar. Tippen Sie auf eine bestimmte Route, einen Artikel oder einen Punkt und dann auf die Schaltfläche *Herunterladen* (&#9047;), und Sie können [sie als Track verwalten](#manage-as-gpx-track).

### Eigene Reiseführer {#custom-travel-guides}

Wir empfehlen Ihnen, neue Artikel oder Bearbeitungen zu [Wikivoyage](https://en.wikivoyage.org/) hinzuzufügen. Wir aktualisieren die Reiseführer etwa alle 6 Monate, und Sie können neue Artikel herunterladen. Sie können auch Ihr eigenes *Reisebuch* erstellen. Wie das geht, wird in der technischen Dokumentation beschrieben (siehe Artikel *[Eigene Reiseführer erstellen](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Sammlungen von Tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Als GPX-Track verwalten {#manage-as-gpx-track}

![Reiseführer-Punkte-Menü 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Reiseführer-Punkte-Menü 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Nachdem Sie *Reiseführer* zur Karte hinzugefügt haben, können *Reiseartikel* als GPX-Track gespeichert und über das Menü *[Meine Orte](../personal/myplaces.md)* verwaltet werden (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Sie können auf der Karte angezeigt, geteilt, umbenannt, in einen anderen Ordner verschoben, exportiert oder gelöscht werden.

- &nbsp;In der *[Übersicht](../map/tracks/track-context-menu.md#overview)* können Sie eine kurze Beschreibung lesen oder den [Reiseführer-Artikel](#travel-article) durch Tippen auf die Schaltfläche *Vollständig lesen* öffnen. *Bearbeiten* ermöglicht die Korrektur des Artikels.
- &nbsp;Im Abschnitt *[Track](../map/tracks/track-context-menu.md#altitude--speed-graphs)* gibt es keine Informationen, die GPX-Dateien der *Reiseführer* enthalten nur Wegpunkte.
- &nbsp;Unter *[Punkte](../map/tracks/track-context-menu.md#points--waypoints)* sehen Sie Ordner mit Punkten, die nach Namen gruppiert sind (Kaufen, Tun, Trinken usw.).
- &nbsp;Die Schaltfläche *[Optionen](../map/tracks/track-context-menu.md#options)* führt die gleichen Funktionen aus wie bei einem normalen Track.

:::info HINWEIS
*Punkte* werden in einer [GPX-Datei](../../technical/osmand-file-formats/osmand-gpx.md) (einem häufig verwendeten Format für Tracks) als [Wegpunkte](../map/point-layers-on-map.md#track-waypoints) gespeichert. Die Anzahl der Punkte (Wegpunkte) im Track ist neben dem Symbol &#128681; im Track-Feld markiert.
Im *[Track-Kontextmenü](../map/tracks/track-context-menu.md)* der GPX-Datei finden Sie allgemeine Informationen über den Artikel, zu dem dieser Track gehört.
:::

## Mit Wikipedia kombinieren {#combine-with-wikipedia}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Reiseführer mit Wikipedia kombinieren 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Reiseführer mit Wikipedia kombinieren 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Reiseführer-Suchmenü](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

In den *Reiseführer-Artikeln* finden Sie nützliche Informationen zu touristischen Attraktionen (Kontaktinformationen, Weblinks, Preise usw.). Viele Artikel haben eine *Wikipedia*-Schaltfläche, die das Öffnen eines *[Wikipedia-Artikels](../plugins/wikipedia.md)* (online oder offline) über den interessierenden Ort ermöglicht.

In einigen Fällen fordert Sie die Registerkarte *[Lesezeichen](#explore-and-bookmark)* von OsmAnd auf, die [Wikipedia-Kartenebene](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) herunterzuladen, um verwandte Artikel offline zu durchsuchen.

![Reiseführer Wikipedia herunterladen](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info HINWEIS
Das [Wikipedia-Plugin](../plugins/wikipedia.md) ist eine [bezahlte Funktion](../purchases/index.md) der OsmAnd-App.
:::

## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Januar 2025*