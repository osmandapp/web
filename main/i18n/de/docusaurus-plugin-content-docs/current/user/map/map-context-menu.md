---
source-hash: 3f3b85046b389da6c840d6ec98c139f32b2f5116b6d2eb8c376445af5e4cf4bf
sidebar_position: 3
title: Karten-Kontextmenü
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



## Überblick {#overview}

Das Karten-Kontextmenü liefert Informationen über das ausgewählte Objekt auf der Karte. Sie können es auch verwenden, um eine Route zum ausgewählten Ort zu erstellen. Um das Kontextmenü zu öffnen, suchen Sie zuerst den gewünschten Ort auf der Karte und wählen Sie dann das Objekt mit einem kurzen Tippen oder einem langen Tippen aus, wenn Sie einen beliebigen genauen Punkt auf der Karte auswählen.


### Ein Objekt auswählen (einmal tippen) {#select-an-object-single-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Das **Kontextmenü** erscheint, wenn Sie ein markiertes Objekt auf der Karte **einmal antippen**. Dieses Kontextmenü zeigt wichtige Informationen über das ausgewählte Objekt an, einschließlich *Name, Symbol* (wie auf der Karte dargestellt), *Adresse, Entfernung* und *Richtung* von Ihrer aktuellen Position.

Sie können verschiedene Arten von Kartenobjekten auswählen, wie z. B. *POIs*, *Favoriten*, *Haltestellen*, *Markierungen*, *Berggipfel* oder andere *Kartenobjekte*.

:::note
Ausgewählte Kartenobjekte entsprechen OpenStreetMap [**Knoten**](https://wiki.openstreetmap.org/wiki/Node) oder [**Wegen**](https://wiki.openstreetmap.org/wiki/Way).
:::

> *Die Höhe von Berggipfeln wird in Metern oder Fuß angezeigt, abhängig von den in den Profileinstellungen ausgewählten [Längeneinheiten](../personal/profiles.md#units--formats).*


### Beliebigen Punkt auswählen (langes Tippen) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Wenn Sie **lange auf eine beliebige Stelle auf der Karte tippen**, erscheint ein **Kontextmenü**, das Informationen über den ausgewählten Ort liefert. Dazu gehören die Adresse, die Entfernung und die Richtung von Ihrer aktuellen Position.

> **HINWEIS**. *Langes Tippen auf eine **Hausnummer** hebt deren Umriss hervor und öffnet das Karten-Kontextmenü.*


### Route auswählen {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Wenn Sie auf der Karte auf eine [GPX-Route](../map/tracks/index.md) tippen, wird das [Routen-Kontextmenü](../map/tracks/track-context-menu.md) geöffnet, in dem Sie auf zusätzliche routenbezogene Optionen zugreifen können.


### Kontextmenü ausblenden {#hide-context-menu}

So schließen Sie das **Kontextmenü**:

- Tippen Sie auf eine *leere Fläche* auf der Karte, um zu vermeiden, dass das Menü erneut geöffnet wird.
- Ziehen Sie das Menü von oben nach *unten*.


## Details {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Für detailliertere Informationen zu einem Objekt tippen Sie im Kontextmenü auf die Schaltfläche **Details** oder wischen Sie das Panel nach oben, um es zu erweitern.


### Objektinfo {#object-info}

Das **Objektinfo**-Panel liefert zusätzliche Details zum ausgewählten Objekt. Sie können auf jeden Eintrag tippen, um die Informationen in die Zwischenablage zu kopieren.

Verfügbare Details sind:

- [Alternative Namen](#alternative-names)
- [Koordinaten](../map/map-context-menu.md#coordinates)
- [POIs in der Nähe / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Öffentliche Verkehrsrouten](../map/map-context-menu.md#public-transport-routes) (für Haltestellen)
- [Favoriten / Routenpunkte aus derselben Gruppe](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap-Link](../map/map-context-menu.md#openstreetmap-link)
- [Artikelbild / Beschreibung](../map/map-context-menu.md#article-description-article-description)
- [Online-Fotos](../map/map-context-menu.md#online-photos)

Zusätzlich kann das Panel [OpenStreetMap-Details](https://wiki.openstreetmap.org/wiki/Map_features) enthalten, wie z.B.:

- [Website](https://wiki.openstreetmap.org/wiki/Key:website)
- [Telefonnummer](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Öffnungszeiten](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Gebühr](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Barrierefreiheit](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Breite](https://wiki.openstreetmap.org/wiki/Key:width) / [Höhe](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternative Namen {#alternative-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Alternative names Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative names Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternative names Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative names Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd zeigt **zusätzliche POI-Namen** im *Karten-Kontextmenü* an und priorisiert den Namen in der *Anzeigesprache* oder der bevorzugten Sprachliste des Systems. Wenn mehrere Übersetzungen verfügbar sind, werden sie in kategorisierte Tags wie *Name, Marke, Betreiber* oder *POIs in der Nähe* gruppiert.

Funktionen der alternativen Namensanzeige:

- Zusätzliche Übersetzungen können über eine *Dropdown-Liste* abgerufen werden.

- Namen werden in verschiedene Gruppen kategorisiert, wie z. B. die *Liste der Namen in anderen Sprachen*, *Regional*, *Lokal*, *National*, *International*, *Kurz*, *Alt*, *Offiziell* und *Alternative* Namen.

- Weitere Kategorien sind *regionalspezifische Übersetzung* oder *Standardeinstellungen*.

- Wenn eine bestimmte Übersetzung *nicht verfügbar* ist, greift OsmAnd standardmäßig auf den **lokalen** Namen zurück, um Genauigkeit und Konsistenz in mehrsprachigen Regionen zu gewährleisten.


### Polygon-Informationen {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Polygon Information Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon Information Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Die Funktion **Polygon-Informationen** liefert detaillierte Daten zu nahegelegenen **Polygonen**, die auf der Karte angezeigt werden. Dazu gehören geografische Merkmale, administrative Grenzen und andere kartierte Gebiete.

**Innerhalb des Abschnitts**:

- Zeigt eine *Liste der umgebenden Polygone* an, sortiert *vom kleinsten zum größten* nach Flächengröße.

- Jeder Eintrag zeigt den *Polygon-Typ und -Namen* an, was eine einfache Identifizierung von Regionen und Grenzen ermöglicht.

**Zusätzliche Details**:

- Wenn Sie einen Punkt auf der Karte oder einen POI auswählen, zeigt das **Polygon-Informationen**-Panel eine Liste aller Polygone an, die den ausgewählten Ort enthalten.

- Einträge in der Liste umfassen **administrative Einteilungen, Landnutzungsgebiete, natürliche Merkmale und andere kategorisierte Regionen**.

- Das Panel ermöglicht Benutzern, den **Namen und die Details des Polygons zu kopieren** zur Referenz.

- Um diese Informationen anzuzeigen, gehen Sie zu *Karten-Kontextmenü → Details → Innerhalb*.

Diese Funktion hilft Ihnen, Ihren *aktuellen Standort* in Bezug auf kartierte administrative Einteilungen, Naturgebiete oder andere wichtige geografische Merkmale zu verstehen.


### Koordinaten {#coordinates}

|Koordinatenformat| |
|:------|:------|
| <ul><li>DDD.DDDDD (Dezimalgrad)</li><li>DDD.DDDDD (N/S, E/W Komma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 und CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web Link](https://osmand.net/map)</li><li>[OpenStreetMap Web Link](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png) |

Im Kontextmenü finden Sie [geografische Koordinaten](../search/search-coordinates.md#coordinate-format) eines Punktes in verschiedenen Formaten sowie teilbare OsmAnd- und [OpenStreetMap-Links](../map/map-context-menu.md#openstreetmap-link) (die letzte Option ist nur verfügbar, wenn das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md) aktiviert ist). Wenn Sie den Koordinatenabschnitt erweitern und lange auf eine Zeile aus der Liste tippen, werden deren Werte automatisch in die Zwischenablage kopiert (**Android**) oder die Option *Kopieren* wird in der Pop-up-Nachricht verfügbar (**iOS**).

Der OsmAnd-Weblink kann von OsmAnd automatisch erkannt werden (Beispiel: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Sowohl OsmAnd- als auch [OpenStreetMap-Links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) werden auf den entsprechenden Websites mit einer Markierung an der interessanten Stelle geöffnet.


### POIs in der Nähe / Wikipedia {#nearby-pois--wikipedia}

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Diese Abschnitte zeigen nahegelegene [Wikipedia-Artikel](../plugins/wikipedia.md) oder [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois) mit *<Translate android="true" ids="shared_string_show_on_map"/>* und *<Translate android="true" ids="search_more"/>*, um alle anderen POIs und Wikipedia-Artikel anzuzeigen und zu [suchen](../search/search-poi.md).

Tippen auf *POIs in der Nähe / Wikipedia-Artikel* öffnet eine Punkteliste (POIs oder Wikipedia). Ein Tippen auf einen dieser Punkte aus einer Punkteliste verschiebt die Karte zu diesem Punkt (POIs oder Wikipedia) mit dem Öffnen des Kontextmenüs des Punktes.

> **HINWEIS**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) wird nur angezeigt, wenn Sie zuvor spezielle Karten mit [Wikipedia-Artikeln für dieses Gebiet](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) heruntergeladen haben*.


### Öffentliche Verkehrsrouten {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Angezeigte Informationen über öffentliche Verkehrsrouten für die ausgewählte Haltestelle. Informationen zum Kontextmenü des öffentlichen Nahverkehrs und Aktionen damit finden Sie im [Artikel](../map/public-transport.md#transport-routes-context-menu).


### Favoriten / Routenpunkte aus der Gruppe {#favorites--track-points-from-the-group}

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png)

Dies ist eine Liste aller Punkte in einer Gruppe für einen Favoriten oder Wegpunkt. Durch Tippen wird die gesamte Liste der Punkte einer Gruppe erweitert. Beim Tippen auf einen Punkt aus der Liste verschiebt sich die Karte zum ausgewählten Punkt.


### Lineares Objekt {#linear-object}

![Favorite list](@site/static/img/map/linear_object_andr.png)

Für **lineare Objekte** wie *Schranken, Stufen, Tore, Bänke, Slipanlagen, Wehre, Poller oder Durchbrüche* zeigt das Kontextmenü zusätzliche Details an. Dazu gehören der POI-Typ und die damit verbundene Adresse oder der Objekttyp, wenn kein Name zugewiesen ist.


### Klettergebiet und Felswanddetails {#climbing-area-and-crag-details}

![Favorite list](@site/static/img/map/climbing_andr.png)

Bei der Auswahl eines [Klettergebiets oder einer Felswand](../map/routes.md#climbing-routes) liefert OsmAnd eine detaillierte Zusammenfassung des Kletterortes, einschließlich: Name und Lage, Schwierigkeitsgrad (UIAA, Französisch, YDS, etc.), Gesteinsart, Höhe und Routenlänge, Kletterqualität und Oberflächenbedingungen.


### Skipisten, MTB-Routen und Dirtbike-Trails {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb.png)  ![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb_2.png)

Sie können auf Kartenelemente wie **Skipisten**, **Mountainbike-Routen (MTB)** und **Dirtbike-Trails** tippen, um deren Kontextmenü mit detaillierten Informationen zu öffnen. Verfügbare Informationen umfassen: Routen- oder Pistenname (falls in OSM-Daten verfügbar), OSM-Objekt-ID oder Relations-ID, Schwierigkeitsgrad, Weglänge, Geländetyp und mehr.

**Unterstützte Tags:** `piste:type=*` (Skipisten), `route=mtb`, `route=atv` oder `route=dirt_bike` (Motorrad-Offroad-Trails)

:::note
Verwenden Sie die [Winter- und Ski-](../map/vector-maps.md#winter-and-ski) oder [Offroad-](../map/vector-maps.md#offroad) Kartenstile für bessere Sichtbarkeit.
:::


### Artikelbeschreibung {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description list](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Dieser Teil enthält einen Teil der Beschreibung aus dem [Wikipedia-Artikel](../plugins/wikipedia.md), der [Favoriten](../personal/favorites.md)- oder Wegpunktbeschreibung. Durch Tippen können Sie die vollständige Beschreibung öffnen.


### OpenStreetMap-Link {#openstreetmap-link}

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

Der OpenStreetMap-Link bietet einen direkten Link zum OpenStreetMap-Objekt, wo Sie vollständige Informationen darüber finden können:
[Knoten](https://wiki.openstreetmap.org/wiki/Node) oder [Weg](https://wiki.openstreetmap.org/wiki/Way).


### Online-Fotos {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)
![Online Photos context menu Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)
![Online Photos context menu iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Wenn Sie auf der Karte auf einen beliebten Ort tippen, zeigt der Abschnitt **Online-Fotos** im *POI-Kontextmenü* Bildvorschauen aus [Wikipedia](https://www.wikipedia.org/) und [Wikimedia Commons](https://www.wikimedia.org/) an.

Durch Tippen auf ein Foto wird die **Galerie**-Ansicht geöffnet, in der Sie:

- Bis zu 100 Bilder pro Ort durchsuchen können
- Bildmetadaten (*Autor*, *Lizenz*, *Quelle*) anzeigen können
- Aktionen durchführen können: **Teilen**, **Im Browser öffnen**, **Herunterladen**

> *Unter iOS öffnet ein langes Tippen auf ein Bild ein Kontextmenü mit Schnellaktionen.*

Weitere Informationen finden Sie unter: [Online-Fotos](https://osmand.net/docs/user/map/popular_places#online-photos) und [Galerieansicht](https://osmand.net/docs/user/map/popular_places#gallery)


### Straßenbilder {#street-level-imagery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd unterstützt die Integration mit [Mapillary](https://www.mapillary.com/), einer globalen Plattform für Crowdsourcing-Straßenbilder. Diese Funktion ermöglicht es Ihnen, reale Fotosequenzen direkt auf der Karte anzuzeigen und zu erkunden.

Mapillary-Bilder erscheinen als gerichtete Fotosymbole, die an der Straße oder dem Weg ausgerichtet sind, wo sie aufgenommen wurden. Diese können Ihnen helfen, Ihre Umgebung besser zu verstehen, insbesondere in unbekannten Gebieten.

Sie können:

- Die Schaltfläche **Erkunden** verwenden, um den Mapillary-Viewer zu öffnen und nahegelegene Straßenbilder zu durchsuchen.
- Auf die Schaltfläche **Fotos hinzufügen** tippen, um Ihre eigenen Fotos zur Mapillary-Plattform beizutragen.

> *Erfahren Sie mehr darüber, wie Sie diese Funktion aktivieren und nutzen, im [Mapillary-Plugin-Handbuch](../plugins/mapillary.md).*


### * Audio-/Video-Notiz {#-audiovideo-note}

<InfoAndroidOnly />

![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)

Informationen zu [Audio-/Video-Notizen](../plugins/audio-video-notes.md) wie Datum, Koordinaten, Vorschau und andere sind im Menü **Details** verfügbar. Sie können die Notizen in einer sekundären Software öffnen, indem Sie im Kontextmenü der Notiz auf die Schaltfläche **Wiedergabe / Anzeigen** tippen.


## Aktionen {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Es handelt sich um eine Reihe spezifischer Bearbeitungen, die an einem Punkt oder Objekt durchgeführt werden können. Dieses Menü ist in zwei Teile unterteilt: Der sichtbare Abschnitt besteht aus maximal 3 Aktionen und weitere Aktionen sind über die Schaltfläche *Aktionen* zugänglich. Sie können die Reihenfolge der Aktionen in den [Allgemeinen Einstellungen](#customize) anpassen (*Android*).


### Favorit hinzufügen / bearbeiten {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Im Kontextmenü gibt es Optionen zum **Hinzufügen** oder **Bearbeiten** des ausgewählten Punktes / Objekts zur [Favoritenliste](../personal/myplaces.md).

- Zum **Hinzufügen** müssen Sie einen Punkt/ein Objekt auswählen, auf das *Stern*-Symbol (mit Signatur Hinzufügen) tippen und alle notwendigen Informationen eingeben.

- Zum **Bearbeiten** von Informationen über einen Favoritenpunkt müssen Sie *Auf Karte anzeigen* (*Menü → Meine Orte → Favoriten*) einschalten, dann darauf drücken und im Kontextmenü erscheint anstelle des *Stern*-Symbols ein *Bleistift*-Symbol (mit Signatur Bearbeiten).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - fügt einen ausgewählten Punkt zur Favoritenliste hinzu.


### Markierung hinzufügen / bearbeiten {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Navigationsplanung zu erleichtern. Sie müssen nur auf das **Flaggen**-Symbol im Menü (*Android*), **Pfeil** (*iOS*) tippen – zeigt Richtung und Entfernung zum ausgewählten Punkt von Ihrem aktuellen Standort an.

Aktionen:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Setzt eine neue Markierung am ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / *Verwerfen* (*iOS*). Deaktiviert die Markierung und legt sie in den Verlauf.
- **Aktiv machen** (*Android*). Verschiebt die Markierung an die oberste Position (im oberen Panel).
- **Markierung wiederherstellen** (*Android*). Verschiebt die Markierung aus dem Verlauf in die aktive Liste.

Lesen Sie mehr über [Markierungen hier](../personal/markers.md).


### Teilen {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Versionen bis Android 14 | 14+ Android |
|:------------|:---------------|
| ![Share action Android](@site/static/img/map/action_share_1_andr.png) | ![Share action Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">

![Share action iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App ermöglicht es Ihnen, **<Translate android="true" ids="shared_string_share"/>** *Meinen Standort* oder jeden ausgewählten Standort auf der Karte mit Messengern, E-Mails oder sozialen Medien zu teilen.

Verfügbare Optionen zum Teilen des Standorts:

- ***Senden***. Sendet Text über auf Ihrem Gerät verfügbare Apps. Enthält alle Informationen über den Standort: Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolocation als Link.
- ***Kopieren***. Kopiert alle Standortinformationen (Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolocation als Link) in die Zwischenablage.
- ***Adresse kopieren***. Kopiert nur Adressinformationen in die Zwischenablage.
- ***POI-Namen kopieren***. Kopiert nur den POI-Namen oder die Adresse, wenn kein Name vorhanden ist, in die Zwischenablage.
- ***Koordinaten kopieren***. Kopiert nur Koordinateninformationen in die Zwischenablage.
- ***geo***. Öffnet eine Liste verfügbarer Anwendungen, die Geolocation unterstützen. <!-- (Informationen über [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-Code*** (*Android*). Generiert einen Link zum ausgewählten Standort als QR-Code.

<!--
- ***Bild speichern*** (*iOS*) - speichert einen Screenshot mit Karte und ausgewähltem Punkt in der Bildergalerie.
- ***Kontakt zuweisen*** (*iOS*) - erstellt ein Symbol für den ausgewählten Kontakt aus dem Kartenscreenshot.
- ***Drucken*** (*iOS*) - öffnet die Druckeroptionen zum Drucken des Kartenscreenshots.
- ***In Dateien speichern*** (*iOS*) - speichert den Kartenscreenshot in iCloud Drive oder im Speicher Ihres Geräts. -->


### Navigation Zu / Von {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Um die Navigation oder Routenplanung zu starten, müssen Sie zuerst das Ziel mit [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions) auswählen. Falls Sie bereits ein Ziel haben, schlägt Ihnen das Menü vor, das Ziel zu ersetzen oder als weiteren Zwischen- oder Startpunkt einzufügen.

Es ist auch möglich, zuerst das Ziel *Von* über das Karten-Kontextmenü (<Translate android="true" ids="context_menu_item_directions_from"/>) auszuwählen.

Lesen Sie mehr über [Navigation hier](../navigation/setup/route-navigation.md).

:::note Tippen Sie auf Navigation starten
Wenn Sie auf **Navigation starten** tippen, wird der *Von*-Punkt verworfen, da die Anwendung in den Navigationsmodus wechselt. Um eine Route zu speichern, tippen Sie nicht auf *Navigation starten* und [**wischen Sie das Routenvorbereitungsmenü**](#hide-context-menu) nach **unten**.
:::


### In der Nähe suchen {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Mit dieser Aktion im Kontextmenü ist es möglich, in der Nähe eines bestimmten Ortes auf der Karte zu suchen.

Lesen Sie mehr über die [Suchfunktion](../search/index.md).


### Straße vermeiden {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Avoid road on the map Android](@site/static/img/map/action_avoid_android.png) ![Dismiss avoided road Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map iOS](@site/static/img/map/avoid_route_ios_1.png) ![Dismiss avoided road iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Über das Karten-Kontextmenü können Sie eine bestimmte Straße zur Liste der für die Routenplanung nicht verwendeten Straßen hinzufügen. Dies wirkt sich auf die [Routenvorbereitung](../navigation/setup/route-navigation.md) aus.
Um zuvor ausgewählte Straßen aus der *[Liste der zu vermeidenden Straßen](../navigation/routing/osmand-routing.md#avoid-roads-menu)* zu löschen, tippen Sie auf ein Schild, wählen Sie *Entfernen* (**Android**) oder *Verwerfen* (**iOS**).

:::note
Die Funktion "Straßen vermeiden" ist global und wirkt sich auf alle *[Routing-Typen](../navigation/routing/osmand-routing.md#routing-types)* aus (außer *[Online-Routing](../navigation/routing/online-routing.md)*).
:::


### Objektposition ändern {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Change position Android](@site/static/img/map/action_change_position_android.png)

![Action Change position UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Change position iOS](@site/static/img/map/action_change_position_ios.png)

![Action Change position UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

Fast jedes vom Benutzer erstellte Objekt ist beweglich, d.h. Markierung, Favorit, erstellter POI, Audio-/Video-Notiz oder Routen-Wegpunkt. Wählen Sie zuerst ein Objekt auf der Karte aus und verwenden Sie dann das Menü *<Translate android="true" ids="change_markers_position"/>*, um es an einen neuen Ort zu verschieben.


### Route planen {#plan-a-route}

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

Sie können die Routenplanung von einem ausgewählten Punkt über das Objekt-Kontextmenü starten.

Lesen Sie mehr über das Werkzeug [Route planen](../plan-route/create-route.md).


### Online-Karten aktualisieren / herunterladen {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Um Online-Karten (Kacheln) an einem bestimmten Ort zu aktualisieren oder herunterzuladen, können Sie das Kontextmenü des Objekts verwenden:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* und für *Aktualisieren* gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* und *<Translate ios="true" ids="update_tile"/>*.

Bitte lesen Sie die [vollständige Anleitung](../map/raster-maps.md#download--update-tiles).


### Vektorkarten aktualisieren / herunterladen {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Download vector map Android](@site/static/img/map/action_download_vector_map_android.png)

![Select vector map worldwide on Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Download vector map iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Select vector map on iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Falls am ausgewählten Ort keine Offline-Karte vorhanden ist, z.B. das Kartenobjektmenü wurde über die Suche oder über einen bestimmten Favoriten geöffnet, wird die kleinstmögliche Offline-Karte zum [Herunterladen](../start-with/download-maps.md#select-on-the-map) vorgeschlagen.

**iOS**. Wenn Sie bereits OsmAnd-Karten (Vektor oder Gelände) [heruntergeladen](../map/map-context-menu.md) haben, können Sie diese über das Kontextmenü aktualisieren. Sie müssen zuerst die Region auf der Karte auswählen – tippen Sie auf eine beliebige Stelle auf der Weltkarte bei Zoomstufe 3-7.

> **HINWEIS**. *Wenn Sie das Kontextmenü für eine Kartenregion geöffnet haben (Region ist hervorgehoben), können Sie ***<Translate android="true" ids="rendering_category_details"/>*** darüber sehen: Typ und Größe einer verfügbaren Karte, Link zu einer Wikipedia-Seite, Sprache, Bevölkerung und andere.*


### * Parkpunkt hinzufügen / löschen {#-add--delete-parking-point}

:::note
Um Parkpunkte hinzuzufügen/zu löschen, aktivieren Sie das OsmAnd [**Parkpositions-Plugin**](../plugins/parking.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Parking Android](@site/static/img/map/action_parking_android.png)

![Action Delete Parking Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Parking iOS](@site/static/img/map/action_parking_ios.png)

![Action Delete Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Jeder ausgewählte Ort auf der Karte kann als [Parkposition](../plugins/parking.md) markiert werden. Um die Parkposition zu löschen, können Sie das Kontextmenü öffnen, das mit dem Parkort verknüpft ist.


### * Routen-Wegpunkt hinzufügen / bearbeiten {#-add--edit-track-waypoint}

:::note
Um Routenpunkte hinzuzufügen/zu bearbeiten, aktivieren Sie das OsmAnd [**Routenaufzeichnungs-Plugin**](../plugins/trip-recording.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Select Track to add Waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Select Track to add Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Sie können Wegpunkte zu einer aufgezeichneten Route oder zur aktuellen Routenaufzeichnung über das Kartenkontextmenü hinzufügen.

- Wählen Sie einen Ort auf der Karte mit einem [langen Tippen](../map/map-context-menu.md#select-any-point-long-tap) aus.
- Wählen Sie im sich öffnenden *Kartenkontextmenü* die Option *Aktionen → Routen-Wegpunkt hinzufügen*.
- Die Liste zeigt die aufgezeichneten und auf der Karte angezeigten [Routen](../map/tracks/index.md#display-tracks-on-the-map) sowie die [aktuelle Routenaufzeichnung](../plugins/trip-recording.md) an, zu der Sie den ausgewählten Wegpunkt hinzufügen können.
- Sie können Wegpunkte zu einer Route hinzufügen, die noch nicht aktiv für die Aufzeichnung ist. In diesem Fall wechselt die inaktive Route vom *Startzustand* in den *Fortsetzen-Zustand*.
- [Füllen Sie die erforderlichen Daten aus](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) und speichern Sie den Wegpunkt.
- Sie können die [Schnellaktionen](../widgets/quick-action.md) konfigurieren, indem Sie einen Wegpunkt zur Option *Routen-Wegpunkt hinzufügen* hinzufügen.


### * POI erstellen / ändern {#-create--modify-poi}

:::note
Um POIs zu erstellen/zu ändern, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Mit dem OSM-Bearbeitungs-Plugin können Sie die meisten auf [OpenStreetMap](https://www.openstreetmap.org/) vorhandenen POIs erstellen und ändern.

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [erstellt einen neuen POI](../plugins/osm-editing.md#create--modify-poi) am ausgewählten Ort.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [ändert den ausgewählten POI](../plugins/osm-editing.md#create--modify-poi).


### * OSM-Notiz öffnen {#-open-osm-note}

:::note
Um eine OSM-Notiz zu öffnen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Add Note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Add Note UI iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Sie können **Kartenfehler** an einem bestimmten Ort der [OpenStreetMap-Community](https://wiki.openstreetmap.org/wiki/Join_the_community) melden. Bitte befolgen Sie die [Richtlinien](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) und fügen Sie angemessene Kommentare zu einem Problem hinzu.


### * OSM-Notiz kommentieren / schließen {#-comment--close-osm-note}

:::note
Um eine OSM-Notiz zu kommentieren/schließen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

Sie können OpenStreetMap-Notizen über das Kontextmenü des Objekts [kommentieren](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [auflösen](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) und wieder öffnen.


### * POI / OSM-Notiz hochladen {#-upload-poi--osm-note}

:::note
Um POI / OSM-Notizen hochzuladen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

Wenn Sie den *Offline-Modus* zum Hinzufügen/Bearbeiten von POIs oder OSM-Notizen verwenden, müssen Sie die Änderungen auf OpenStreetMap hochladen. Standardmäßig ist der *Offline-Modus* aktiviert, um versehentliche Änderungen an der öffentlichen Datenbank zu vermeiden. Sie können Änderungen über das Kontextmenü des erstellten Objekts hochladen oder löschen.


### * AV Notiz aufnehmen {#-record-av-note}

<InfoAndroidOnly />

:::note
Um Audio-/Video-Notizen aufzunehmen, aktivieren Sie das OsmAnd [**Audio-/Video-Notizen-Plugin**](../plugins/audio-video-notes.md).
:::

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Nimmt eine Mediennotiz an einem ausgewählten Punkt auf der Karte auf.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - erstellt eine [Audio-Notiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf dem Overlay mit Audio-Symbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - erstellt eine [Video-Notiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf dem Overlay mit Video-Symbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - erstellt einen [Foto-Punkt](../map/point-layers-on-map.md#-audio--video-points-android) auf der Karte.


## Anpassen {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Map context menu Customize](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_3.png)

Sie können die Reihenfolge ändern oder Elemente aus dem Menü *Aktionen* im *Kartenkontextmenü* ausblenden. Insgesamt werden 16 Aktionen vorgeschlagen.

- Sie können die drei nützlichsten Aktionen an den Anfang der Liste der *Hauptaktionen* verschieben.
- Der Rest des Menüs kann für jedes Profil separat in den Abschnitten *Zusätzliche Aktionen* und *Ausgeblendet* angepasst werden.

Verfügbare Aktionstypen:

- **<Translate android="true" ids="main_actions"/>**. Der Abschnitt hat nur 4 Schaltflächen, von denen drei angepasst werden können, und Aktionen, die unverändert bleiben.
- **<Translate android="true" ids="additional_actions"/>**. Sie können auf diese Aktionen zugreifen, indem Sie auf die Schaltfläche *Aktionen* tippen.
- **<Translate android="true" ids="shared_string_hidden"/>**. Das Verschieben von Aktionen in diesen Abschnitt hindert sie nicht daran, zu funktionieren. Sie erscheinen einfach nicht im Menü Aktionen.


## Verwandte Artikel {#related-articles}

- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Routen-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Nahverkehr](./public-transport.md)
- [Import / Export](../personal/import-export.md)
- [Farbpalettenschemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Juni 2025*