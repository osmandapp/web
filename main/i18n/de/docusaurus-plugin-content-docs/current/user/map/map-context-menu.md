---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
sidebar_position: 3
title: Kartenkontextmenü
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

Das Kartenkontextmenü bietet Informationen über das ausgewählte Objekt auf der Karte. Sie können es auch verwenden, um eine Route zum ausgewählten Ort zu erstellen. Um das Kontextmenü zu öffnen, suchen Sie zuerst den gewünschten Ort auf der Karte und wählen Sie dann das Objekt mit einem kurzen Tippen oder einem langen Tippen aus, wenn Sie einen genauen Punkt auf der Karte auswählen.


### Ein Objekt auswählen (einzelnes Tippen) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontextmenü Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Das **Kontextmenü** erscheint, wenn Sie **einmal** auf ein markiertes Objekt auf der Karte tippen. Dieses Kontextmenü zeigt wesentliche Informationen über das ausgewählte Objekt an, einschließlich seines *Namens, Symbols* (wie auf der Karte dargestellt), der *Adresse, Entfernung* und *Richtung* von Ihrer aktuellen Position.

Sie können verschiedene Arten von Kartenobjekten auswählen, wie z.B. *POIs*, *Favoriten*, *Haltestellen des öffentlichen Nahverkehrs*, *Markierungen*, *Berggipfel* oder andere *Kartenobjekte*.

:::note
Ausgewählte Kartenobjekte entsprechen OpenStreetMap [**Knoten**](https://wiki.openstreetmap.org/wiki/Node) oder [**Wegen**](https://wiki.openstreetmap.org/wiki/Way).
:::

> *Die Höhe der Berggipfel wird in Metern oder Fuß angezeigt, abhängig von den in den Profileinstellungen ausgewählten [Längeneinheiten](../personal/profiles.md#units--formats).*


### Beliebigen Punkt auswählen (langes Tippen) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kontextmenü langes Tippen Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü langes Tippen iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Wenn Sie **lange** auf eine beliebige Stelle auf der Karte tippen, erscheint ein **Kontextmenü**, das Informationen über den ausgewählten Ort liefert. Dies umfasst die Adresse, Entfernung und Richtung von Ihrer aktuellen Position.

> **HINWEIS**. *Ein langes Tippen auf eine **Hausnummer** hebt deren Umriss hervor und öffnet das Kartenkontextmenü.*


### Route auswählen {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontext-Track-Menü Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistikbildschirm Track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Das Tippen auf einen [GPX-Track](../map/tracks/index.md) auf der Karte öffnet das [Track-Kontextmenü](../map/tracks/track-context-menu.md), wo Sie zusätzliche Track-bezogene Optionen aufrufen können.


### Kontextmenü ausblenden {#hide-context-menu}

Um das **Kontextmenü** zu schließen:

- Tippen Sie auf eine *leere Fläche* auf der Karte, um ein erneutes Öffnen des Menüs zu vermeiden.
- Ziehen Sie das Menü von oben *nach unten*.


## Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontextmenü Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Für detailliertere Informationen zu einem Objekt tippen Sie auf die Schaltfläche **Details** im Kontextmenü oder wischen Sie das Panel nach oben, um es zu erweitern.


### Objektinformationen {#object-info}

Das Panel **Objektinformationen** bietet zusätzliche Details zum ausgewählten Objekt. Sie können auf einen beliebigen Eintrag tippen, um die Informationen in die Zwischenablage zu kopieren.

Verfügbare Details umfassen:

- [Alternative Namen](#alternative-names)
- [Koordinaten](../map/map-context-menu.md#coordinates)
- [POIs in der Nähe / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Öffentliche Verkehrsmittelrouten](../map/map-context-menu.md#public-transport-routes) (für Haltestellen)
- [Favoriten / Trackpunkte aus derselben Gruppe](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap-Link](../map/map-context-menu.md#openstreetmap-link)
- [Artikelbild / Beschreibung](../map/map-context-menu.md#article-description-article-description)
- [Online-Fotos](../map/map-context-menu.md#online-photos)

Zusätzlich kann das Panel [OpenStreetMap-Details](https://wiki.openstreetmap.org/wiki/Map_features) enthalten, wie zum Beispiel:

- [Website](https://wiki.openstreetmap.org/wiki/Key:website)
- [Telefonnummer](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Öffnungszeiten](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Gebühr](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Barrierefreiheit](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Breite](https://wiki.openstreetmap.org/wiki/Key:width) / [Höhe](https://wiki.openstreetmap.org/wiki/Key:height)


### Alternative Namen {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternative Namen Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative Namen Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternative Namen Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative Namen Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd zeigt **zusätzliche POI-Namen** im *Kartenkontextmenü* an, wobei der Name in der *Anzeigesprache* oder der bevorzugten Systemsprache priorisiert wird. Wenn mehrere Übersetzungen verfügbar sind, werden sie in kategorisierte Tags wie *Name, Marke, Betreiber* oder *POIs in der Nähe* gruppiert.

Merkmale der Anzeige alternativer Namen:

- Zusätzliche Übersetzungen können über eine *Dropdown-Liste* aufgerufen werden.

- Namen werden in verschiedene Gruppen kategorisiert, wie z.B. die *Liste der Namen in anderen Sprachen*, *Regional*, *Lokal*, *National*, *International*, *Kurz*, *Alt*, *Offiziell* und *Alternative* Namen.

- Andere Kategorien umfassen *regionsspezifische Übersetzungen* oder *Standardeinstellungen*.

- Wenn eine bestimmte Übersetzung *nicht verfügbar* ist, greift OsmAnd auf den **lokalen** Namen zurück, um Genauigkeit und Konsistenz in mehrsprachigen Regionen zu gewährleisten.


### Polygon-Informationen {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Polygon-Informationen Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon-Informationen Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Die Funktion **Polygoninformationen** liefert detaillierte Daten zu den auf der Karte angezeigten **Polygonen**. Dies umfasst geografische Merkmale, administrative Grenzen und andere kartierte Gebiete.

**Innerhalb des Abschnitts**:

- Zeigt eine *Liste der umgebenden Polygone* an, sortiert *vom kleinsten zum größten* nach Flächengröße.

- Jeder Eintrag zeigt den *Polygontyp und -namen* an, was eine einfache Identifizierung von Regionen und Grenzen ermöglicht.

**Zusätzliche Details**:

- Wenn ein Punkt auf der Karte oder ein POI ausgewählt wird, zeigt das Panel **Polygoninformationen** eine Liste aller Polygone an, die den ausgewählten Ort enthalten.

- Einträge in der Liste umfassen **Verwaltungseinheiten, Landnutzungsgebiete, natürliche Merkmale und andere kategorisierte Regionen**.

- Das Panel ermöglicht es Benutzern, den **Namen und die Details des Polygons zu kopieren** zur Referenz.

- Um diese Informationen anzuzeigen, gehen Sie zu *Kartenkontextmenü → Details → Innerhalb*.

Diese Funktion hilft Ihnen, Ihren *aktuellen Standort* in Bezug auf kartierte Verwaltungseinheiten, Naturgebiete oder andere wichtige geografische Merkmale zu verstehen.


### Koordinaten {#coordinates}

|Koordinatenformat| |
|:------|:------|
| <ul><li>DDD.DDDDD (Dezimalgrad)</li><li>DDD.DDDDD (N/S, E/W Komma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Schweizer Gitter CH1903 und CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web Link](https://osmand.net/map)</li><li>[OpenStreetMap Web Link](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Koordinaten](@site/static/img/map/map_context_menu_Coordinates.png) |

Im Kontextmenü finden Sie [geographische Koordinaten](../search/search-coordinates.md#coordinate-format) eines Punktes in verschiedenen Formaten sowie teilbare OsmAnd- und [OpenStreetMap-Links](../map/map-context-menu.md#openstreetmap-link) (die letzte Option ist nur verfügbar, wenn das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md) aktiviert ist). Wenn Sie den Koordinatenabschnitt erweitern und lange auf eine Zeile aus der Liste tippen, werden deren Werte automatisch in die Zwischenablage kopiert (**Android**) oder die Option *Kopieren* wird in der Pop-up-Nachricht verfügbar (**iOS**).

OsmAnd Web Link kann von OsmAnd automatisch erkannt werden (Beispiel: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Sowohl OsmAnd- als auch [OpenStreetMap-Links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) werden auf den entsprechenden Seiten mit einer Stecknadelmarkierung zum interessierenden Ort geöffnet.


### POIs in der Nähe / Wikipedia {#nearby-pois--wikipedia}

![Wikipedia-Artikel in der Nähe](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Wikipedia-Artikel in der Nähe](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Diese Abschnitte zeigen [Wikipedia-Artikel](../plugins/wikipedia.md) oder [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois) in der Nähe mit *<Translate android="true" ids="shared_string_show_on_map"/>* und *<Translate android="true" ids="search_more"/>* zum Anzeigen und [Suchen](../search/search-poi.md) aller anderen POIs und Wikipedia-Artikel.

Tippen auf *POIs in der Nähe / Wikipedia-Artikel* öffnet eine Punktliste (POIs oder Wikipedia). Ein Tippen auf einen dieser Punkte aus einer Punktliste verschiebt die Karte zu diesem Punkt (POIs oder Wikipedia) und öffnet das Kontextmenü des Punktes.

> **HINWEIS**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) wird nur angezeigt, wenn Sie zuvor spezielle Karten mit [Wikipedia-Artikeln für dieses Gebiet](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) heruntergeladen haben.*


### Öffentliche Verkehrsmittelrouten {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Öffentliche Verkehrsmittelrouten Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Öffentliche Verkehrsmittelrouten iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Angezeigte Informationen zu öffentlichen Verkehrsmitteln für die gewählte Haltestelle. Informationen zum Kontextmenü der öffentlichen Verkehrsmittel und den damit verbundenen Aktionen finden Sie im [Artikel](../map/public-transport.md#transport-routes-context-menu).


### Favoriten / Trackpunkte aus der Gruppe {#favorites--track-points-from-the-group}

![Favoritenliste](@site/static/img/map/favorite_list_android.png) ![Favoritenliste vollständig](@site/static/img/map/favorite_list_full_android.png)

Dies ist eine Liste aller Punkte in einer Gruppe für einen Favoriten oder Wegpunkt. Durch Tippen wird die gesamte Liste der Punkte einer Gruppe erweitert, beim Tippen auf einen Punkt aus der Liste bewegt sich die Karte zum ausgewählten Punkt.


### Lineares Objekt {#linear-object}

![Favoritenliste](@site/static/img/map/linear_object_andr.png)

Für **lineare Objekte**, wie *Barrieren, Stufen, Tore, Bänke, Slipanlagen, Wehre, Poller oder Coupures*, zeigt das Kontextmenü zusätzliche Details an. Dazu gehören der POI-Typ und die damit verbundene Adresse oder der Objekttyp, wenn kein Name zugewiesen ist.


### Klettergebiet- und Felswanddetails {#climbing-area-and-crag-details}

![Favoritenliste](@site/static/img/map/climbing_andr.png)

Bei der Auswahl eines [Klettergebiets oder einer Felswand](../map/routes.md#climbing-routes) bietet OsmAnd eine detaillierte Zusammenfassung des Kletterorts, einschließlich: Name und Lage, Schwierigkeitsgrad (UIAA, Französisch, YDS usw.), Gesteinsart, Höhe und Routenlänge, Kletterqualität und Oberflächenbedingungen.


### Skipisten, MTB-Routen und Dirtbike-Trails {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Skipisten und MTB-Trails](@site/static/img/map/ski_mtb.png) ![Skipisten und MTB-Trails](@site/static/img/map/ski_mtb_2.png)

Sie können auf Kartenelemente wie **Skipisten**, **Mountainbike (MTB)-Routen** und **Dirtbike-Trails** tippen, um deren Kontextmenü mit detaillierten Informationen zu öffnen. Verfügbare Informationen umfassen: Routen- oder Pistenname (falls in OSM-Daten verfügbar), OSM-Objekt-ID oder Relations-ID, Schwierigkeitsgrad, Streckenlänge, Geländetyp und mehr.

**Unterstützte Tags:** `piste:type=*` (Skipisten), `route=mtb`, `route=atv` oder `route=dirt_bike` (Motorrad-Offroad-Trails)

:::note
Verwenden Sie die Kartenstile [Winter und Ski](../map/vector-maps.md#winter-and-ski) oder [Offroad](../map/vector-maps.md#offroad) für eine bessere Sichtbarkeit.
:::


### Artikelbeschreibung {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Beschreibungsliste](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Beschreibungsliste](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Dieser Teil enthält einen Teil der Beschreibung aus dem [Wikipedia-Artikel](../plugins/wikipedia.md), der [Favoriten](../personal/favorites.md) oder der Wegpunktbeschreibung. Durch Tippen können Sie die vollständige Beschreibung öffnen.


### OpenStreetMap-Link {#openstreetmap-link}

![OSM-Link](@site/static/img/map/context_menu_osm_link.png) ![OSM-Link](@site/static/img/map/context_menu_osm_link_1.png)

Der OpenStreetMap-Link bietet einen direkten Link zum OpenStreetMap-Objekt, wo Sie vollständige Informationen darüber finden können:
[Knoten](https://wiki.openstreetmap.org/wiki/Node) oder [Weg](https://wiki.openstreetmap.org/wiki/Way).


### Online-Fotos {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online-Fotos Kontextmenü Android](@site/static/img/map/images_nearby_1_andr.png)
![Galerie-Menü Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online-Fotos Kontextmenü iOS](@site/static/img/map/online_photo_ios.png)
![Galerie-Menü iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Wenn Sie auf einen beliebten Ort auf der Karte tippen, zeigt der Abschnitt **Online-Fotos** im *POI-Kontextmenü* Bildvorschauen an, die von [Wikipedia](https://www.wikipedia.org/) und [Wikimedia Commons](https://www.wikimedia.org/) stammen.

Ein Tippen auf ein Foto öffnet die **Galerieansicht**, wo Sie:

- Bis zu 100 Bilder pro Ort durchsuchen können
- Bildmetadaten (*Autor*, *Lizenz*, *Quelle*) anzeigen können
- Aktionen ausführen können: **Teilen**, **Im Browser öffnen**, **Herunterladen**

> *Auf iOS öffnet ein langes Tippen auf ein Bild ein Kontextmenü mit Schnellaktionen.*

Weitere Informationen finden Sie unter: [Online-Fotos](https://osmand.net/docs/user/map/popular_places#online-photos) und [Galerieansicht](https://osmand.net/docs/user/map/popular_places#gallery)


### Street-Level Imagery {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd unterstützt die Integration mit [Mapillary](https://www.mapillary.com/), einer globalen Plattform für Crowdsourced Street-Level Imagery. Diese Funktion ermöglicht es Ihnen, reale Fotosequenzen direkt auf der Karte anzuzeigen und zu erkunden.

Mapillary-Bilder erscheinen als gerichtete Fotosymbole, die an der Straße oder dem Weg ausgerichtet sind, wo sie aufgenommen wurden. Diese können Ihnen helfen, Ihre Umgebung besser zu verstehen, insbesondere in unbekannten Gebieten.

Sie können:

- Die Schaltfläche **Erkunden** verwenden, um den Mapillary-Viewer zu öffnen und durch nahegelegene Street-Level-Bilder zu blättern.
- Auf die Schaltfläche **Fotos hinzufügen** tippen, um Ihre eigenen Fotos zur Mapillary-Plattform beizutragen.

> *Erfahren Sie mehr darüber, wie Sie diese Funktion aktivieren und nutzen können, im [Mapillary-Plugin-Handbuch](../plugins/mapillary.md).*


### * Audio-/Video-Notiz {#-audiovideo-note}

<InfoAndroidOnly />

![Bildliste](@site/static/img/map/image_list_android.png) ![Videoliste](@site/static/img/map/video_list_android.png)

[Audio-/Video-Notizen](../plugins/audio-video-notes.md) Informationen wie Datum, Koordinaten, Vorschau und andere sind im Menü **Details** verfügbar. Sie können die Notizen in einer sekundären Software öffnen, indem Sie auf die Schaltfläche **Abspielen / Anzeigen** im Kontextmenü der Notiz tippen.


## Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktionen-Menü Android](@site/static/img/map/actions_menu_android.png) ![Zusätzliche Aktionen-Menü Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktionen-Menü iOS](@site/static/img/map/actions_menu_ios.png) ![Zusätzliche Aktionen-Menü iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Es handelt sich um eine Reihe spezifischer Manipulationen, die an einem Punkt oder Objekt durchgeführt werden können. Dieses Menü ist in zwei Teile unterteilt: Der sichtbare Bereich besteht aus maximal 3 Aktionen, und andere Aktionen sind über die Schaltfläche *Aktionen* zugänglich. Sie können die Reihenfolge der Aktionen in den [Allgemeinen Einstellungen](#customize) anpassen (*Android*).


### Favorit hinzufügen / bearbeiten {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Favorit hinzufügen/bearbeiten Aktion Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Favorit hinzufügen/bearbeiten Aktion iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Im Kontextmenü gibt es Optionen zum **Hinzufügen** oder **Bearbeiten** des ausgewählten Punktes / Objekts zur [Favoritenliste](../personal/myplaces.md).

- Zum **Hinzufügen** müssen Sie einen Punkt / ein Objekt auswählen, auf das *Stern*-Symbol (mit der Beschriftung Hinzufügen) tippen und alle notwendigen Informationen eingeben.

- Zum **Bearbeiten** von Informationen zu einem Favoritenpunkt müssen Sie *Auf der Karte anzeigen* aktivieren (*Menü → Meine Orte → Favoriten*), dann darauf drücken und im Kontextmenü anstelle des *Stern*-Symbols ein *Bleistift*-Symbol (mit der Beschriftung Bearbeiten) erscheint.

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - fügt einen ausgewählten Punkt zur Favoritenliste hinzu.


### Marker hinzufügen / bearbeiten {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marker hinzufügen/bearbeiten Aktion Android](@site/static/img/map/add_marker_android.png) ![Marker passieren Aktion Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Marker hinzufügen/bearbeiten Aktion iOS](@site/static/img/map/add_marker_ios.png) ![Marker wiederherstellen Aktion Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Navigationsplanung zu erleichtern. Sie müssen lediglich auf das **Flaggen**-Symbol im Menü (*Android*) oder den **Pfeil** (*iOS*) tippen – dieser zeigt Richtung und Entfernung zum ausgewählten Punkt von Ihrer aktuellen Position an.

Aktionen:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Setzt einen neuen Marker am ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / *Verwerfen* (*iOS*). Deaktiviert den Marker und legt ihn in den Verlauf.
- **Aktiv machen** (*Android*). Verschiebt den Marker an die oberste Position (im oberen Bereich).
- **Marker wiederherstellen** (*Android*). Verschiebt den Marker aus dem Verlauf in die aktive Liste.

Lesen Sie mehr über [Marker hier](../personal/markers.md).


### Teilen {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versionen bis Android 14 | 14+ Android |
|:------------|:---------------|
| ![Teilen-Aktion Android](@site/static/img/map/action_share_1_andr.png) | ![Teilen-Aktion Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Teilen-Aktion iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App ermöglicht es Ihnen, **<Translate android="true" ids="shared_string_share"/>** *Meinen Standort* oder jeden ausgewählten Standort auf der Karte über Messenger, E-Mails oder soziale Medien zu teilen.

Verfügbare Optionen zum Teilen des Standorts:

- ***Senden***. Sendet Text über auf Ihrem Gerät verfügbare Apps. Enthält alle Informationen zum Standort: Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolocation als Link.
- ***Kopieren***. Kopiert alle Standortinformationen (Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolocation als Link) in die Zwischenablage.
- ***Adresse kopieren***. Kopiert nur Adressinformationen in die Zwischenablage.
- ***POI-Namen kopieren***. Kopiert nur den POI-Namen oder die Adresse, falls kein Name vorhanden ist, in die Zwischenablage.
- ***Koordinaten kopieren***. Kopiert nur Koordinateninformationen in die Zwischenablage.
- ***geo***. Öffnet eine Liste der verfügbaren Anwendungen, die Geolocation unterstützen. <!-- (Info zu [Geo-URLs Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-Code*** (*Android*). Erzeugt einen Link zum ausgewählten Standort in einem QR-Code.

<!--
- ***Bild speichern*** (*iOS*) - speichert einen Screenshot mit Karte und ausgewähltem Punkt in der Bildergalerie.
- ***Kontakt zuweisen*** (*iOS*) - erstellt ein Symbol für den ausgewählten Kontakt aus dem Karten-Screenshot.
- ***Drucken*** (*iOS*) - öffnet die Druckeroptionen zum Drucken des Karten-Screenshots.
- ***In Dateien speichern*** (*iOS*) - speichert den Karten-Screenshot in iCloud Drive oder im Speicher Ihres Geräts. -->


### Wegbeschreibung nach / von {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wegbeschreibung Android](@site/static/img/map/action_directions_android.png)

![Mehrere Wegbeschreibungen Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wegbeschreibung iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Um die Navigation oder Routenplanung zu starten, müssen Sie zuerst das Ziel mit [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions) auswählen. Falls Sie bereits ein Ziel haben, schlägt das Menü vor, das Ziel zu ersetzen oder es als weiteren Zwischen- oder Startpunkt einzufügen.

Es ist auch möglich, das *Von*-Ziel zuerst über das Kartenkontextmenü (<Translate android="true" ids="context_menu_item_directions_from"/>) auszuwählen.

Lesen Sie mehr über die [Navigation hier](../navigation/setup/route-navigation.md).

:::note Navigation starten tippen
Wenn Sie auf **Navigation starten** tippen, wird der *Von*-Punkt verworfen, da die Anwendung in den Navigationsmodus wechselt. Um eine Route zu speichern, tippen Sie nicht auf *Navigation starten* und [**wischen Sie das Menü**](#hide-context-menu) *Routenvorbereitung* *nach unten*.
:::


### In der Nähe suchen {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Suchaktion Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Suchaktion iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Mit dieser Kontextmenü-Aktion ist es möglich, um einen bestimmten Ort auf der Karte herum zu suchen.

Lesen Sie mehr über die [Suchfunktion](../search/index.md).


### Straße vermeiden {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Straße auf der Karte vermeiden Android](@site/static/img/map/action_avoid_android.png) ![Vermiedene Straße entfernen Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straße auf der Karte vermeiden iOS](@site/static/img/map/avoid_route_ios_1.png) ![Vermiedene Straße entfernen iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Über das Kartenkontextmenü können Sie eine bestimmte Straße zur Liste der für die Routenführung nicht verwendeten Straßen hinzufügen. Dies wirkt sich auf die [Routenvorbereitung](../navigation/setup/route-navigation.md) aus.
Um zuvor ausgewählte Straßen aus der *[Liste der zu vermeidenden Straßen](../navigation/routing/osmand-routing.md#avoid-roads-menu)* zu löschen, tippen Sie auf ein Zeichen, wählen Sie *Entfernen* (**Android**) oder *Verwerfen* (**iOS**).

:::note
Die Funktion "Straßen vermeiden" ist global und betrifft alle *[Routing-Typen](../navigation/routing/osmand-routing.md#routing-types)* (außer *[Online-Routing](../navigation/routing/online-routing.md)*).
:::


### Objektposition ändern {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Position ändern Android](@site/static/img/map/action_change_position_android.png)

![Aktion Position ändern UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Position ändern iOS](@site/static/img/map/action_change_position_ios.png)

![Aktion Position ändern UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

Fast jedes vom Benutzer erstellte Objekt ist verschiebbar, z.B. Marker, Favorit, erstellter POI, Audio-/Video-Notiz oder Track-Wegpunkt. Wählen Sie zuerst ein Objekt auf der Karte aus und verwenden Sie dann das Menü *<Translate android="true" ids="change_markers_position"/>*, um es an einen neuen Ort zu verschieben.


### Eine Route planen {#plan-a-route}

![Aktion Route planen Android](@site/static/img/map/action_plan_route_android.png)

Sie können die Routenplanung von einem ausgewählten Punkt aus über das Objekt-Kontextmenü starten.

Lesen Sie mehr über das Tool [Route planen](../plan-route/create-route.md).


### Online-Karten aktualisieren / herunterladen {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Online-Karte herunterladen Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Online-Karte herunterladen iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Um Online-Karten (Kacheln) an einem bestimmten Ort zu aktualisieren oder herunterzuladen, können Sie das Kontextmenü des Objekts verwenden:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* und zum *Aktualisieren* gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* und *<Translate ios="true" ids="update_tile"/>*.

Bitte lesen Sie die [vollständige Anleitung](../map/raster-maps.md#download--update-tiles).


### Vektorkarten aktualisieren / herunterladen {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Vektorkarte herunterladen Android](@site/static/img/map/action_download_vector_map_android.png)

![Vektorkarte weltweit auf Android auswählen](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Vektorkarte herunterladen iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Vektorkarte auf iOS auswählen](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Falls am ausgewählten Ort keine Offline-Karte vorhanden ist, z.B. weil das Kartenobjektmenü über die Suche oder über einen bestimmten Favoriten geöffnet wurde, wird die kleinstmögliche Offline-Karte zum [Herunterladen](../start-with/download-maps.md#select-on-the-map) vorgeschlagen.

**iOS**. Wenn Sie bereits [OsmAnd-Karten (Vektor oder Gelände) heruntergeladen](../map/map-context-menu.md) haben, können diese über das Kontextmenü aktualisiert werden. Sie müssen zuerst die Region auf der Karte auswählen – tippen Sie auf eine beliebige Stelle bei einem weltweiten Zoom von 3-7.

> **HINWEIS**. *Wenn Sie das Kontextmenü für eine Kartenregion geöffnet haben (Region ist hervorgehoben), sehen Sie ***<Translate android="true" ids="rendering_category_details"/>*** dazu: Typ und Größe einer verfügbaren Karte, Link zu einer Wikipedia-Seite, Sprache, Bevölkerung und weiteres.*


### * Parkpunkt hinzufügen / löschen {#-add--delete-parking-point}

:::note
Um Parkpunkte hinzuzufügen/zu löschen, aktivieren Sie das OsmAnd [**Parkposition-Plugin**](../plugins/parking.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Parken Android](@site/static/img/map/action_parking_android.png)

![Aktion Parken löschen Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Parken iOS](@site/static/img/map/action_parking_ios.png)

![Aktion Parken löschen iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Jeder ausgewählte Ort auf der Karte kann als [Parkposition](../plugins/parking.md) markiert werden. Um eine Parkposition zu löschen, können Sie das Kontextmenü öffnen, das mit dem Parkort verknüpft ist.


### * Track-Wegpunkt hinzufügen / bearbeiten {#-add--edit-track-waypoint}

:::note
Um Trackpunkte hinzuzufügen/zu bearbeiten, aktivieren Sie das OsmAnd [**Reiseaufzeichnungs-Plugin**](../plugins/trip-recording.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Wegpunkt Android](@site/static/img/map/action_waypoint_android.png)

![Track zum Hinzufügen von Wegpunkt auswählen Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Wegpunkt iOS](@site/static/img/map/action_waypoint_ios.png)

![Track zum Hinzufügen von Wegpunkt auswählen iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Sie können Wegpunkte zu einem aufgezeichneten Track oder zur aktuellen Trackaufzeichnung über das Kartenkontextmenü hinzufügen.

- Wählen Sie einen Ort auf der Karte mit einem [langen Tippen](../map/map-context-menu.md#select-any-point-long-tap) aus.
- Im sich öffnenden *Kartenkontextmenü* wählen Sie *Aktionen → Track-Wegpunkt hinzufügen*.
- Die Liste zeigt die [Tracks](../map/tracks/index.md#display-tracks-on-the-map) an, die auf der Karte aufgezeichnet und angezeigt werden, sowie die [aktuelle Trackaufzeichnung](../plugins/trip-recording.md), zu der Sie den ausgewählten Wegpunkt hinzufügen können.
- Sie können Wegpunkte zu einem Track hinzufügen, der noch nicht zur Aufzeichnung aktiv ist. In diesem Fall wechselt der inaktive Track vom *Startzustand* in den *Fortsetzen-Zustand*.
- [Füllen Sie](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) die erforderlichen Daten aus und speichern Sie den Wegpunkt.
- Sie können die [Schnellaktionen](../widgets/quick-action.md) konfigurieren, indem Sie einen Wegpunkt zu *Track-Wegpunkt hinzufügen* hinzufügen.


### * POI erstellen / ändern {#-create--modify-poi}

:::note
Um POIs zu erstellen/zu ändern, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Mit dem OSM-Bearbeitungs-Plugin können Sie die meisten auf [OpenStreetMap](https://www.openstreetmap.org/) vorhandenen POIs erstellen und ändern.

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [erstellt einen neuen POI](../plugins/osm-editing.md#create--modify-poi) am ausgewählten Ort.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [ändert den ausgewählten POI](../plugins/osm-editing.md#create--modify-poi).


### * OSM-Notiz öffnen {#-open-osm-note}

:::note
Um eine OSM-Notiz zu öffnen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Notiz Android](@site/static/img/map/action_note_android.png)

![Aktion Notiz hinzufügen Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Notiz iOS](@site/static/img/map/action_note_ios.png)

![Aktion Notiz hinzufügen iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Sie können [Kartenfehler](https://wiki.openstreetmap.org/wiki/Join_the_community) an einem bestimmten Ort der OpenStreetMap-Community **melden**. Bitte befolgen Sie die [Richtlinien](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) und fügen Sie dem Problem entsprechende Kommentare hinzu.


### * OSM-Notiz kommentieren / schließen {#-comment--close-osm-note}

:::note
Um eine OSM-Notiz zu kommentieren/schließen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![OSM-Notiz kommentieren Android](@site/static/img/map/action_comment_note_android.png) ![OSM-Notiz wieder öffnen Android](@site/static/img/map/action_reopen_note_android.png)

Sie können OpenStreetMap-Notizen über das Kontextmenü des Objekts [kommentieren](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [lösen](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) und wieder öffnen.


### * POI / OSM-Notiz hochladen {#-upload-poi--osm-note}

:::note
Um POI / OSM-Notizen hochzuladen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![POI hochladen Android](@site/static/img/map/action_poi_upload_android.png) ![OSM-Notiz hochladen Android](@site/static/img/map/action_note_upload_android.png)

Falls Sie den *Offline-Modus* zum Hinzufügen / Bearbeiten von POIs oder OSM-Notizen verwenden, müssen Sie die Änderungen auf OpenStreetMap hochladen. Standardmäßig ist der *Offline-Modus* aktiviert, um versehentliche Änderungen an der öffentlichen Datenbank zu vermeiden. Sie können Änderungen über das Kontextmenü des erstellten Objekts hochladen oder löschen.


### * AV-Notiz aufnehmen {#-record-av-note}

<InfoAndroidOnly />

:::note
Um Audio-/Video-Notizen aufzunehmen, aktivieren Sie das OsmAnd [**Audio-/Video-Notizen-Plugin**](../plugins/audio-video-notes.md).
:::

![Aktion Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Nimmt eine Mediennotiz an einem ausgewählten Punkt auf der Karte auf oder erstellt sie.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - erstellt eine [Audio-Notiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf dem Overlay mit Audiosymbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - erstellt eine [Video-Notiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf dem Overlay mit Videosymbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - erstellt einen [Fotopunkt](../map/point-layers-on-map.md#-audio--video-points-android) auf der Karte.


## Anpassen {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_2.png) --> ![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_3.png)

Sie können die Reihenfolge ändern oder Elemente aus dem Menü *Aktionen* im *Kartenkontextmenü* ausblenden. Insgesamt werden 16 Aktionen vorgeschlagen.

- Sie können die drei nützlichsten Aktionen an den Anfang der Liste *Hauptaktionen* verschieben.
- Der Rest des Menüs kann für jedes Profil separat in den Abschnitten *Zusätzliche Aktionen* und *Versteckt* angepasst werden.

Verfügbare Aktionstypen:

- **<Translate android="true" ids="main_actions"/>**. Der Abschnitt hat nur 4 Schaltflächen, von denen drei angepasst werden können, und Aktionen, die unverändert bleiben.
- **<Translate android="true" ids="additional_actions"/>**. Sie können auf diese Aktionen zugreifen, indem Sie auf die Schaltfläche *Aktionen* tippen.
- **<Translate android="true" ids="shared_string_hidden"/>**. Das Verschieben von Aktionen in diesen Abschnitt hindert sie nicht daran, zu funktionieren. Sie erscheinen einfach nicht im Aktionsmenü.


## Verwandte Artikel {#related-articles}

- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Track-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentliche Verkehrsmittel](./public-transport.md)
- [Import / Export](../personal/import-export.md)
- [Farbpalettenschemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Juni 2025*