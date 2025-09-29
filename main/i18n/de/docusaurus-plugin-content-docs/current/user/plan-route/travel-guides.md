---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  Reiseführer
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

:::info Kostenpflichtige Funktion
Die Reiseführer sind eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Virtuelle Reiseführer in OsmAnd bieten Nutzern wertvolle Informationen, Empfehlungen und Tipps. Sie ermöglichen es Reisenden auch, auf umfassende Navigationsinformationen über Sehenswürdigkeiten in der App zuzugreifen.

Die OsmAnd-Reiseführer basieren auf Daten von [Wikivoyage](https://www.wikivoyage.org/), einem Gemeinschaftsprojekt ähnlich wie Wikipedia, bei dem freiwillige Autoren aktuelle Artikel erstellen.  
Die Informationen von Wikivoyage umfassen die wichtigsten Fakten über einen Ort, Transportmittel, Sehenswürdigkeiten, Einkaufsmöglichkeiten und mehr.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reiseführer-Ansicht Allgemein](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Wie man sie benutzt {#how-to-use}

- [Herunterladen](#download-articles) von *Reiseführern*.
- [Artikel](#browse-articles) über ein Land, eine Region, eine Stadt oder eine Sehenswürdigkeit durchsuchen.
    - Alternativ können Sie [Reiseführerartikel und/oder -punkte auf der Karte anzeigen](#travel-routes) lassen, indem Sie das Menü "Karte konfigurieren" verwenden.
    - Sehenswürdigkeiten auf der Karte durchsuchen und sie zu *[Kartenmarkierungen](../personal/markers.md#add--edit-markers)* oder *[Favoriten](../personal/favorites.md#favorite-group-actions)* hinzufügen.
    - Über die Schaltfläche *[Vollständig lesen](#manage-as-gpx-track)* zum *[Artikel](#travel-article)* in den *Reiseführern* wechseln.
- Artikel [mit einem Lesezeichen versehen](#explore-and-bookmark), um sie später zu lesen.
- [Punkte](#points) aus Artikeln zum Besuchen auswählen und zur OsmAnd-Karte hinzufügen.
- Weitere Informationen über zu besuchende Orte aus offline verfügbaren [Wikipedia-Artikeln](#combine-with-wikipedia) erhalten.
- Eine [Route](../navigation/setup/route-navigation.md#set-destinations) zu ausgewählten touristischen Attraktionen oder einen freien Spaziergang zwischen Punkten erstellen.

:::note
Die Artikel der *Reiseführer* werden in OsmAnd als GPX-Tracks mit Wegpunkten gespeichert. Nachdem Sie diese Tracks zur Karte hinzugefügt haben (siehe Abschnitte *[Punkte](#points)* oder *[Reiserouten](#travel-routes)* dieses Artikels), können Sie sie über das Menü *[Meine Orte](../personal/myplaces.md)* verwalten.
:::

### Artikel herunterladen {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menü zum Herunterladen von Reiseführern](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Kartenmenü iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Bevor Sie die Reiseführer verwenden können, müssen Sie sie über das Menü [Karten herunterladen](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*) herunterladen. Die Artikel sind nach Regionen gruppiert: *Afrika, Asien, Australien und Ozeanien, Mittelamerika, Europa, Nordamerika, Russland und Südamerika*, sodass Sie keine Reiseführer für eine einzelne Stadt oder ein einzelnes Land herunterladen müssen.  
Indem Sie die gewünschten Regionen auf Ihrem Gerät speichern, können Sie die Artikel mit OsmAnd auch im Ausland oder außerhalb der Reichweite Ihres Mobilfunknetzes durchsuchen.

:::note
Zusätzlich zu Führern für Länder, Regionen oder Städte finden Sie auch Führer zu Orten aus Filmen, Büchern, Computerspielen, Gedenkstätten großer Persönlichkeiten und so weiter.
Es gibt auch spezialisierte Führer, wie die Liste des UNESCO Global Geoparks Network oder die größten und komplexesten internationalen Flughäfen der Welt.
:::

## Artikel durchsuchen {#browse-articles}

Der Bildschirm *Reiseführer* besteht aus zwei Hauptteilen: einem [*Suchfeld*](#search) und einer *Reiseführer*-Liste mit zwei Registerkarten: *[<Translate android="true" ids="shared_string_explore"/> und <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Sie können durch einmaliges Tippen auf eine Registerkarte zwischen ihnen wechseln.
Wenn Sie die *Reiseführer* öffnen (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), zeigt OsmAnd Ihnen Artikel über interessante Orte in der Nähe der geografischen Koordinaten des aktuellen Kartenzentrums an. Wenn Sie auf einen Eintrag in der Liste tippen, öffnet sich der [Reiseführerartikel](#travel-article). Am unteren Bildschirmrand befindet sich ein Schalter zur Registerkarte *Lesezeichen*.

### Erkunden und Lesezeichen setzen {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hauptbildschirm Reiseführer](@site/static/img/guides/travel_guides_main_screen_1.png) ![Hauptbildschirm Reiseführer 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hauptbildschirm Reiseführer](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Hauptbildschirm Reiseführer 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Auf der Registerkarte **Erkunden** oder **<Translate android="true" ids="popular_destinations"/>** werden die 30 wichtigsten Artikel über Reiseziele in der Nähe des Bildschirmzentrums aufgelistet (unabhängig vom Standort). Durch Tippen auf einen Eintrag in der Liste mit Titel und kurzer Beschreibung des Artikels können Sie den vollständigen Text dieses Artikels anzeigen.  
Wenn Sie auf die *Lesezeichen-Schaltfläche* tippen, wird der Artikel zum späteren Lesen gespeichert und ist auf der Registerkarte "Lesezeichen" verfügbar. Auf der Registerkarte *Gespeicherte Artikel* sind die Artikel in der Reihenfolge ihrer Speicherung angeordnet, wobei die neuesten Artikel ganz oben stehen.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Öffnet den [Reiseartikel](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Verschiebt den ausgewählten Artikel zu <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Entfernt den ausgewählten Artikel aus <Translate android="true" ids="saved_articles"/>.

### Suche {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Das Suchfeld befindet sich oben auf dem Bildschirm <Translate android="true" ids="shared_string_travel_guides"/>. Wenn Sie die ersten Buchstaben eines Landes, einer Stadt oder eines berühmten Ortes eingeben, erscheint eine Liste von Artikeln unter dem Suchfeld. Durch Berühren des gewünschten Artikels können Sie mit dem Lesen beginnen.  
Neben jedem Suchergebnis werden die ersten 3 am häufigsten verwendeten Sprachen aufgeführt, in denen der ausgewählte Artikel gelesen werden kann. Beliebte Artikel sind jedoch in mehr als den 3 aufgelisteten Sprachen verfügbar.

**Zusätzliche Funktionen:**  

- Sie können nach speziellen kulturellen Attraktionen suchen, wie z.B. *Harry-Potter-Tourismus*, *Geisterstädte*, *Monarchien* und andere.
- Um den Suchverlauf zu löschen, müssen Sie die Schaltfläche [<Translate android="true" ids="shared_string_options"/>](#options) verwenden.

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Optionen {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Optionsmenü Reiseführer](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In diesem Menü können Sie das Erscheinungsbild von Artikeln für die Offline-Nutzung anpassen. BEACHTEN SIE, dass *[heruntergeladene](#download-articles)* Reiseführer keine Bilder enthalten. Sie erscheinen nur, wenn Sie Artikel mit einer aktiven Internetverbindung ansehen.  
Im Optionsmenü können Sie wählen, ob Bilder in den angesehenen Artikeln gespeichert werden sollen, um sie offline zu verwenden. Sie können auch den vorhandenen Bilder-Cache leeren oder den Suchverlauf löschen (funktioniert nur bei der Suche in *Reiseführern*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Bilder in Artikeln können für die Offline-Nutzung heruntergeladen werden.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Leert den Bilder-Cache, um Speicher freizugeben.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Löscht den [Suchverlauf](#search).

## Reiseartikel {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reiseführerartikel](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Sie können einen Artikel aus den vorgeschlagenen Optionen auf der Registerkarte *[Erkunden](#explore-and-bookmark)* oder über die Option *[Suche](#search)* öffnen. Wenn Sie touristische Attraktionen, sogenannte *[Punkte](#points)*, aus einem *Reiseführerartikel* zur OsmAnd-Karte hinzufügen, können Sie den Artikel auch über die Schaltfläche *Vollständig lesen* im [Beschreibungsabschnitt](../map/tracks/track-context-menu.md#description-and-info) des Wegpunkts öffnen.

Die folgenden Steuerelemente befinden sich oben auf dem Bildschirm:

- Schalter zum Ändern der Sprache des Artikels. Die Sprache kann aus den verfügbaren Optionen ausgewählt werden. Standardmäßig wird die Systemsprache verwendet.
- Mit der Schaltfläche &#8942; können Sie den Artikel mit Ihren Freunden teilen. Der Link öffnet sich in der OsmAnd-App, die entsprechende Reiseführerdatei sollte auf dem Gerät des Empfängers heruntergeladen werden, oder auf der [Wikivoyage](https://www.wikivoyage.org/)-Website, falls der Empfänger die OsmAnd-App nicht hat oder für iOS-Geräte.
- Durch Tippen auf die Navigationsleiste öffnet sich das *[Navigationsmenü der Reiseführer](#navigation-menu)*.

Am unteren Bildschirmrand befinden sich Schaltflächen wie:

- [Inhalt](#table-of-contents). Öffnet das Inhaltsverzeichnis des Artikels.
- [Punkte](#points). Zeigt touristische Attraktionen, die mit dem Artikel in Verbindung stehen, auf einer Karte an.
- [Lesezeichen](#explore-and-bookmark). Ermöglicht es Ihnen, einen Artikel zu den Lesezeichen für späteres Lesen hinzuzufügen.


### Navigationsmenü {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inhaltsmenü Reiseführer](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Um von einem Artikel zu einem anderen in den *Reiseführerartikeln* zu wechseln, verwenden Sie das **Navigationsmenü**. Sie können darauf zugreifen, indem Sie auf das Adressfeld über dem Bild tippen. BEACHTEN SIE, dass die Artikel in den Reiseführern wie folgt gruppiert sind: *Kontinent → Region → Land → Provinz (Region) → Stadt*.
Wenn Sie auf den Pfeil in der oberen linken Ecke des Bildschirms tippen, gelangen Sie direkt zur Registerkarte *Erkunden* oder *Gespeicherte Artikel* (je nachdem, welche Registerkarte Sie zuvor geöffnet hatten).


### Inhaltsverzeichnis {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inhaltsmenü Reiseführer](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Die meisten *Reiseführerartikel* haben die gleiche Inhaltsstruktur: *Einleitung* (Bilder und Beschreibung der Touristenattraktion) und *nachfolgende Kapitel*.

- &nbsp;*Verstehen*. Details über die lokale Kultur und Gewohnheiten.
- &nbsp;*Anreise*. Details, wie man zu bestimmten Orten gelangt und wie viel diese Route kosten wird.
- &nbsp;*Sehen*. Eine Liste von Attraktionen (Museen, historische Stätten usw.) mit vollständigen Beschreibungen: Ticketpreise, Öffnungszeiten, nützliche Links und Telefonnummern.
- &nbsp;*Aktivitäten*. Orte, an denen man Zeit verbringen kann.
- &nbsp;*Kaufen*. Einkaufsmöglichkeiten.
- &nbsp;*Essen*. Gastronomiebetriebe (unterteilt nach Budget: günstig, mittelpreisig, teuer).
- &nbsp;*Trinken*. Bars und Cafés.
- &nbsp;*Schlafen*. Unterkünfte, unterteilt nach Budget (günstig, mittelpreisig, teuer).
- &nbsp;*Nächste Ziele*. Nächstgelegene Orte aus Wikivoyage.

### Punkte {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Reiseführerartikel* enthalten oft touristische Attraktionen, die nach Themen gruppiert sind. Durch einmaliges Tippen auf die Schaltfläche *Punkte* am unteren Rand des *[Artikels](#travel-article)* werden alle zum Thema gehörenden Attraktionen (Restaurants, Unterkunftsmöglichkeiten, Flughäfen, Geschäfte, historische Denkmäler usw.) zur Karte hinzugefügt und können *[als Track verwaltet](#manage-as-gpx-track)* werden.  

Standardmäßig sind die Gruppen von Attraktionen mit bestimmten Symbolen gekennzeichnet: die Kategorien *Essen und Trinken* mit Messer und Gabel in einem roten Kreis, *Aktivitäten und Sehen* mit einer Kamera in einem grünen Kreis und andere. Sie können Punktgruppen mit &#8942; wie einen *[Wegpunktordner](../map/tracks/track-context-menu.md#points--waypoints)* verwalten.  

:::note
Punkte in *Reiseartikeln* beziehen sich auf Wegpunkte auf einem GPX-Track.  
Sie können auch *[Punkte zur Karte hinzufügen](#travel-routes)* im Menü *Karte konfigurieren*. Sie können alle anzeigen oder eine bestimmte Kategorie auswählen.  
:::


## Reiserouten {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Eine alternative Möglichkeit, *Reiseführer* zu durchsuchen, besteht darin, sie über das Menü *Karte konfigurieren* auf der Karte anzuzeigen. Diese Funktion bezieht sich nicht auf die von OsmAnd bereitgestellte Möglichkeit, Wikivoyage zu nutzen, sondern nur auf Tracks. Mehr dazu können Sie in unserem [Blog](https://osmand.net/blog/routes#generated-travel-routes) lesen.

![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Reiserouten und Artikel auf der Karte {#travel-routes-and-articles-on-the-map}

![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menü Reiseführerpunkte](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

Nachdem Sie die Anzeige von *Reiserouten* im Menü *Karte konfigurieren* aktiviert haben, erscheinen Kreise in verschiedenen Farben auf der Karte. Die orangefarbenen stehen für Routen-Tracks, Routenartikel und einige Wegpunkte. Tippen Sie auf eine bestimmte Route, einen Artikel oder einen Punkt und dann auf die Schaltfläche *Herunterladen* (&#9047;), und Sie können sie [als Track verwalten](#manage-as-gpx-track).

### Eigene Reiseführer {#custom-travel-guides}

Wir empfehlen Ihnen, neue Artikel oder Bearbeitungen zu [Wikivoyage](https://en.wikivoyage.org/) hinzuzufügen. Wir aktualisieren die Reiseführer etwa alle 6 Monate, und Sie können neue Artikel herunterladen. Sie können auch Ihr eigenes *Reisebuch* erstellen. Wie das geht, wird in der technischen Dokumentation beschrieben (siehe Artikel *[Eigenen Reiseführer erstellen](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Als GPX-Track verwalten {#manage-as-gpx-track}

![Menü Reiseführerpunkte 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menü Reiseführerpunkte 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

Nachdem Sie *Reiseführer* zur Karte hinzugefügt haben, können *Reiseartikel* als GPX-Track gespeichert und über das Menü *[Meine Orte](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*) verwaltet werden. Sie können auf der Karte angezeigt, geteilt, umbenannt, in einen anderen Ordner verschoben, exportiert oder gelöscht werden.  

- &nbsp;In der *[Übersicht](../map/tracks/track-context-menu.md#overview)* können Sie eine kurze Beschreibung lesen oder den [Reiseführerartikel](#travel-article) öffnen, indem Sie auf die Schaltfläche *Vollständig lesen* tippen. *Bearbeiten* ermöglicht es Ihnen, den Artikel zu korrigieren.
- &nbsp;Im Abschnitt *[Track](../map/tracks/track-context-menu.md#altitude--speed-graphs)* gibt es keine Informationen, da die GPX-Dateien der *Reiseführer* nur Wegpunkte enthalten.  
- &nbsp;Unter *[Punkte](../map/tracks/track-context-menu.md#points--waypoints)* sehen Sie Ordner mit Punkten, die nach Namen gruppiert sind (Kaufen, Aktivitäten, Trinken usw.).
- &nbsp;Die Schaltfläche *[Optionen](../map/tracks/track-context-menu.md#options)* hat die gleichen Funktionen wie bei einem normalen Track.

:::info
*Punkte* werden in einer [GPX-Datei](../../technical/osmand-file-formats/osmand-gpx.md) (einem gebräuchlichen Format für Tracks) als [Wegpunkte](../map/point-layers-on-map.md#track-waypoints) gespeichert. Die Anzahl der im Track enthaltenen Punkte (Wegpunkte) wird neben dem Symbol &#128681; im Track-Feld angezeigt.  
Im *[Track-Kontextmenü](../map/tracks/track-context-menu.md)* der GPX-Datei finden Sie allgemeine Informationen über den Artikel, zu dem dieser Track gehört.  
:::

## Mit Wikipedia kombinieren {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reiseführer mit Wikipedia kombinieren 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Reiseführer mit Wikipedia kombinieren 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Suchmenü Reiseführer](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

In den *Reiseführerartikeln* finden Sie nützliche Informationen über touristische Attraktionen (Kontaktinformationen, Weblinks, Preise usw.). Viele Artikel haben eine *Wikipedia*-Schaltfläche, die es ermöglicht, einen *[Wikipedia-Artikel](../plugins/wikipedia.md)* (online oder offline) über den betreffenden Ort zu öffnen.  

In einigen Fällen werden Sie auf der Registerkarte *[Lesezeichen](#explore-and-bookmark)* von OsmAnd aufgefordert, die [Wikipedia-Kartenebene](../plugins/wikipedia.md#download-wikipedia-packages) herunterzuladen, um verwandte Artikel offline zu durchsuchen.

![Reiseführer Wikipedia herunterladen](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info HINWEIS
Das [Wikipedia-Plugin](../plugins/wikipedia.md) ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)