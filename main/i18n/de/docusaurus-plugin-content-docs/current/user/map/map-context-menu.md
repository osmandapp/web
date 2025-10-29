---
source-hash: b135d6ac31fa46429b660eb2f3ae6ef45da09abdde63b630471d719e780dd21e
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

Das Kartenkontextmenü liefert Informationen über das ausgewählte Objekt auf der Karte. Sie können es auch verwenden, um eine Route zum ausgewählten Ort zu erstellen. Um das Kontextmenü zu öffnen, suchen Sie zuerst den gewünschten Ort auf der Karte und wählen Sie dann das Objekt durch kurzes Antippen oder durch langes Antippen, wenn Sie einen beliebigen genauen Punkt auf der Karte auswählen.


### Objekt auswählen (einmaliges Antippen) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontextmenü Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

Das **Kontextmenü** erscheint, wenn Sie ein markiertes Objekt auf der Karte **einmal antippen**. Dieses Kontextmenü zeigt wesentliche Informationen über das ausgewählte Objekt an, einschließlich seines *Namens*, *Symbols* (wie es auf der Karte dargestellt wird), seiner *Adresse, Entfernung*, *Grenzen* und *Richtung* von Ihrer aktuellen Position.  

Sie können verschiedene Arten von Kartenobjekten auswählen, wie z. B. *POIs*, *Favoriten*, *Haltestellen öffentlicher Verkehrsmittel*, *Marker*, *Berggipfel* oder andere *Kartenobjekte*.

:::note
- Ausgewählte Kartenobjekte und ihre Grenzen entsprechen den OpenStreetMap [**Knoten**](https://wiki.openstreetmap.org/wiki/Node) oder [**Wegen**](https://wiki.openstreetmap.org/wiki/Way).
- *Die Höhe von Berggipfeln wird in Metern oder Fuß angezeigt, abhängig von den in den Profileinstellungen ausgewählten [Längeneinheiten](../personal/profiles.md#units--formats).*
:::



### Beliebigen Punkt auswählen (langes Antippen) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kontextmenü langes Antippen Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü langes Antippen iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Wenn Sie irgendwo auf der Karte **lange antippen**, erscheint ein **Kontextmenü**, das Informationen über den ausgewählten Ort liefert. Dazu gehören die Adresse, die Entfernung und die Richtung von Ihrer aktuellen Position.


### GPX-Route auswählen {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontext-Track-Menü Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistikbildschirm Track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Durch Antippen eines [GPX-Tracks](../map/tracks/index.md) auf der Karte wird das [Track-Kontextmenü](../map/tracks/track-context-menu.md) geöffnet, in dem Sie auf zusätzliche trackbezogene Optionen zugreifen können.



### Routen, Skipisten und Wege {#routes-and-trails}

![Skipisten und MTB-Wege](@site/static/img/map/ski_mtb.png)  ![Skipisten und MTB-Wege](@site/static/img/map/ski_mtb_2.png)

Sie können Kartenelemente wie **Skipisten**, **Mountainbike (MTB)-Routen** und **Feldwege** antippen, um deren Kontextmenü mit detaillierten Informationen zu öffnen. Weitere Informationen finden Sie im Artikel [Routen](../map/routes.md#actions-with-routes).



### Kontextmenü ausblenden {#hide-context-menu}

Um das **Kontextmenü** zu schließen:

- Tippen Sie auf einen *leeren Bereich* auf der Karte, um ein erneutes Öffnen des Menüs zu vermeiden.
- Ziehen Sie das Menü von oben nach *unten*.


## Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kontextmenü Android](@site/static/img/map/context_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Kontextmenü iOS](@site/static/img/map/context_menu_2_ios.png)

</TabItem>

</Tabs>

Für detailliertere Informationen über ein Objekt tippen Sie auf die Schaltfläche **Details** im Kontextmenü oder wischen Sie das Panel nach oben, um es zu erweitern.


### Objektinformationen {#object-info}

Das Panel **Objektinformationen** bietet zusätzliche Details zum ausgewählten Objekt. Sie können auf einen beliebigen Eintrag tippen, um die Informationen in die Zwischenablage zu kopieren.  

Verfügbare Details umfassen:

- [Alternative Namen](#alternative-names)
- [Koordinaten](#coordinates)
- [Innerhalb von Gebieten](#polygon-information)
- [Nahegelegene POIs](#nearby-pois)
- [Nahegelegene beliebte Orte](#nearby-popular-places)
- [ÖPNV-Routen für Haltestellen](#public-transport-routes)
- [Favoriten / Trackpunkte aus derselben Gruppe](#favorites--track-points-from-the-group)
- [OpenStreetMap-Link](#openstreetmap-link)
- [Online-Fotos](#online-photos)

Zusätzlich kann das Panel [OpenStreetMap-Details](https://wiki.openstreetmap.org/wiki/Map_features) enthalten, wie zum Beispiel:

- [Webseite](https://wiki.openstreetmap.org/wiki/Key:website)
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

![Alternative Namen iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative Namen iOS](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd zeigt **zusätzliche POI-Namen** im *Kartenkontextmenü* an und priorisiert dabei den Namen in der *Anzeigesprache* oder der bevorzugten Sprachenliste des Systems. Wenn mehrere Übersetzungen verfügbar sind, werden sie in kategorisierte Tags wie *Name, Marke, Betreiber* oder *nahegelegene POIs* gruppiert.  

Merkmale der Anzeige alternativer Namen:

- Zusätzliche Übersetzungen können über eine *Dropdown-Liste* aufgerufen werden.

- Namen werden in verschiedene Gruppen kategorisiert, wie z. B. die *Liste der Namen in anderen Sprachen*, *Regionale*, *Lokale*, *Nationale*, *Internationale*, *Kurze*, *Alte*, *Offizielle* und *Alternative* Namen.

- Andere Kategorien umfassen *regionsspezifische Übersetzung* oder *Standardeinstellungen*.

- Wenn eine bestimmte Übersetzung *nicht verfügbar* ist, greift OsmAnd auf den **lokalen** Namen zurück, um Genauigkeit und Konsistenz in mehrsprachigen Regionen zu gewährleisten.


### Innerhalb des Gebiets {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Polygon-Informationen Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon-Informationen iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Die Funktion **Innerhalb des Gebiets** listet die **Gebiete** auf, in denen sich ein Objekt befindet. Dazu gehören geografische Merkmale, Verwaltungsgrenzen, Landnutzungsgebiete, natürliche Merkmale und andere kategorisierte Gebiete. Eine *Liste der umgebenden Polygone*, sortiert *vom kleinsten zum größten* nach Flächengröße.

### Koordinaten {#coordinates}

|Koordinatenformat| |
|:------|:------|
| <ul><li>DDD.DDDDD (Dezimalgrad)</li><li>DDD.DDDDD (N/S, E/W Komma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM-Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Schweizer Gitter CH1903 und CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web-Link](https://osmand.net/map)</li><li>[OpenStreetMap Web-Link](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Koordinaten](@site/static/img/map/map_context_menu_Coordinates.png) |

Im Kontextmenü finden Sie [geografische Koordinaten](../search/search-coordinates.md#coordinate-format) eines Punktes in verschiedenen Formaten sowie teilbare OsmAnd- und [OpenStreetMap-Links](../map/map-context-menu.md#openstreetmap-link) (letztere Option ist nur verfügbar, wenn das [OpenStreetMap-Bearbeitungs-Plugin](../plugins/osm-editing.md) aktiviert ist). Wenn Sie den Koordinatenbereich erweitern und lange auf eine Zeile in der Liste tippen, werden deren Werte automatisch in die Zwischenablage kopiert (**Android**) oder die Option *Kopieren* wird in der Pop-up-Nachricht verfügbar (**iOS**).  

Der OsmAnd Web-Link kann von OsmAnd automatisch erkannt werden (Beispiel: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Sowohl OsmAnd- als auch [OpenStreetMap-Links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) werden auf den entsprechenden Websites mit einer Markierung am gewünschten Ort geöffnet.  


### Nahegelegene POIs {#nearby-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nahegelegene POI Android](@site/static/img/map/nearby_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nahegelegene POI iOS](@site/static/img/map/nearby_poi_ios.png)

</TabItem>

</Tabs>

Dieser Abschnitt zeigt nahegelegene [Points of Interest (POIs)](../map/point-layers-on-map.md#points-of-interest-pois) mit *<Translate android="true" ids="shared_string_show_on_map"/>* und *<Translate android="true" ids="search_more"/>* an, um alle anderen POIs in derselben Kategorie anzuzeigen und zu [suchen](../search/search-poi.md).

Ein Tippen auf *Nahegelegene POIs* öffnet eine Punkteliste. Ein Tippen auf einen dieser Punkte aus einer Punkteliste verschiebt die Karte zu diesem Punkt und öffnet das Kartenkontextmenü des Punkts.


### Nahegelegene beliebte Orte {#nearby-popular-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nahegelegene Orte Android](@site/static/img/map/nearby_places_android.png)

Dieser Abschnitt hebt beliebte Orte hervor, die Ihnen helfen, interessante Ziele und Wahrzeichen in Ihrer Umgebung zu entdecken. Verwenden Sie *<Translate android="true" ids="shared_string_show_on_map"/>* und *<Translate android="true" ids="search_more"/>* , um alle beliebten Orte zu durchsuchen und zu suchen. 

Ein Tippen auf *Nahegelegene [Beliebte Orte](https://osmand.net/docs/user/map/popular_places)* öffnet eine Liste nahegelegener Orte. Die Auswahl eines Elements zentriert die Karte auf diesem Ort und öffnet sein Kontextmenü, in dem Sie eine kurze Beschreibung lesen oder auf ***Vollständigen Artikel lesen*** tippen können, um den vollständigen Leitfaden anzuzeigen.

</TabItem>

<TabItem value="ios" label="iOS">

![Nahegelegene Orte iOS](@site/static/img/map/nearby_places_ios.png)

Dieser Abschnitt hebt beliebte Orte hervor, die Ihnen helfen, interessante Ziele und Wahrzeichen in Ihrer Umgebung zu entdecken. Verwenden Sie *<Translate android="true" ids="shared_string_show_on_map"/>* und *<Translate android="true" ids="search_more"/>* , um alle beliebten Orte zu durchsuchen und zu suchen. 

Ein Tippen auf *Nahegelegene [Beliebte Orte](https://osmand.net/docs/user/plugins/wikipedia#wikipedia-article)* öffnet eine Liste nahegelegener Orte. Die Auswahl eines Elements zentriert die Karte auf diesem Ort und öffnet sein Kontextmenü, in dem Sie eine kurze Beschreibung lesen oder auf ***Vollständigen Artikel lesen*** tippen können, um den vollständigen Leitfaden anzuzeigen.

> **HINWEIS**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) erscheint nur, wenn Sie zuvor spezielle Karten mit [Wikipedia-Artikeln für dieses Gebiet heruntergeladen haben](../plugins/wikipedia.md#download-wikipedia-packages)*.

</TabItem>

</Tabs>


### ÖPNV-Routen {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![ÖPNV-Routen Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ÖPNV-Routen iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Zeigt Informationen über ÖPNV-Routen für die gewählte Haltestelle an. Informationen über das Kontextmenü des öffentlichen Nahverkehrs und die damit verbundenen Aktionen finden Sie im [Artikel](../map/public-transport.md#transport-routes-context-menu).


### Favoriten / Trackpunkte aus der Gruppe {#favorites--track-points-from-the-group}

![Favoritenliste](@site/static/img/map/favorite_list_android.png) ![Vollständige Favoritenliste](@site/static/img/map/favorite_list_full_android.png)

Dies ist eine Liste aller Punkte in einer Gruppe für einen Favoriten oder Wegpunkt. Durch Antippen wird die gesamte Liste der Punkte einer Gruppe erweitert. Wenn Sie einen Punkt aus der Liste antippen, wird die Karte zum ausgewählten Punkt verschoben.




### Artikelbeschreibung {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Beschreibungsliste](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Beschreibungsliste](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Dieser Teil enthält einen Teil der Beschreibung aus einem [Wikipedia-Artikel](../plugins/wikipedia.md), einem [Favoriten](../personal/favorites.md) oder einer Wegpunktbeschreibung. Durch Antippen können Sie die vollständige Beschreibung öffnen.


### OpenStreetMap-Link {#openstreetmap-link}

![OSM-Link](@site/static/img/map/context_menu_osm_link.png) ![OSM-Link](@site/static/img/map/context_menu_osm_link_1.png)

Der OpenStreetMap-Link bietet einen direkten Link zum OpenStreetMap-Objekt, wo Sie vollständige Informationen darüber finden können:  
[Knoten](https://wiki.openstreetmap.org/wiki/Node) oder [Weg](https://wiki.openstreetmap.org/wiki/Way).


### Online-Fotos {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online-Fotos Kontextmenü Android](@site/static/img/map/images_nearby_1_andr.png)
![Online-Fotos Kontextmenü Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online-Fotos Kontextmenü iOS](@site/static/img/map/online_photo_ios.png)
![Online-Fotos Kontextmenü iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Wenn Sie auf einen beliebten Ort auf der Karte tippen, zeigt der Abschnitt **Online-Fotos** im *POI-Kontextmenü* Bildvorschauen an, die von [Wikipedia](https://www.wikipedia.org/) und [Wikimedia Commons](https://www.wikimedia.org/) stammen.

Durch Antippen eines Fotos wird die **Galerieansicht** geöffnet, in der Sie:

- Bis zu 100 Bilder pro Ort durchsuchen können
- Bildmetadaten anzeigen können (*Autor*, *Lizenz*, *Quelle*)
- Aktionen ausführen können: **Teilen**, **Im Browser öffnen**, **Herunterladen**

> *Unter iOS öffnet ein langes Antippen eines Bildes ein Kontextmenü mit Schnellaktionen.*

Weitere Informationen finden Sie unter: [Online-Fotos](https://osmand.net/docs/user/map/popular_places#online-photos) und [Galerieansicht](https://osmand.net/docs/user/map/popular_places#gallery)


### Bilder auf Straßenebene {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Bilder auf Straßenebene Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Bilder auf Straßenebene iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd unterstützt die Integration mit [Mapillary](https://www.mapillary.com/), einer globalen Plattform für durch Crowdsourcing erstellte Bilder auf Straßenebene. Mit dieser Funktion können Sie reale Fotosequenzen direkt auf der Karte anzeigen und erkunden.

Mapillary-Bilder erscheinen als gerichtete Fotosymbole, die an der Straße oder dem Weg ausgerichtet sind, wo sie aufgenommen wurden. Diese können Ihnen helfen, Ihre Umgebung besser zu verstehen, insbesondere in unbekannten Gebieten.

Sie können:

- Die Schaltfläche **Erkunden** verwenden, um den Mapillary-Viewer zu öffnen und durch nahegelegene Bilder auf Straßenebene zu blättern.
- Auf die Schaltfläche **Fotos hinzufügen** tippen, um Ihre eigenen Fotos zur Mapillary-Plattform beizutragen.

> *Erfahren Sie mehr darüber, wie Sie diese Funktion aktivieren und verwenden, im [Leitfaden zum Mapillary-Plugin](../plugins/mapillary.md).*


### * Audio-/Videonotiz {#-audiovideo-note}

<InfoAndroidOnly />

![Bilderliste](@site/static/img/map/image_list_android.png) ![Videoliste](@site/static/img/map/video_list_android.png)

Informationen zu [Audio-/Videonotizen](../plugins/audio-video-notes.md) wie Datum, Koordinaten, Vorschau und andere sind im Menü **Details** verfügbar. Sie können die Notizen in einer sekundären Software öffnen, indem Sie im Kontextmenü der Notiz auf die Schaltfläche **Abspielen / Anzeigen** tippen.


## Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktionsmenü Android](@site/static/img/map/actions_menu_android.png) ![Zusätzliches Aktionsmenü Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktionsmenü iOS](@site/static/img/map/actions_menu_ios.png)  ![Zusätzliches Aktionsmenü iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Dies ist eine Reihe spezifischer Manipulationen, die an einem Punkt oder Objekt durchgeführt werden können. Dieses Menü ist in zwei Teile geteilt: Der sichtbare Bereich besteht aus maximal 3 Aktionen, und weitere Aktionen sind über die Schaltfläche *Aktionen* zugänglich. Sie können die Reihenfolge der Aktionen in den [Allgemeinen Einstellungen](#customize) anpassen (*Android*).


### Favorit hinzufügen / bearbeiten {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Favorit hinzufügen/bearbeiten Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Favorit hinzufügen/bearbeiten iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

Im Kontextmenü gibt es Optionen, den ausgewählten Punkt / das ausgewählte Objekt zur [Favoritenliste](../personal/myplaces.md) **hinzuzufügen** oder zu **bearbeiten**.

- Zum **Hinzufügen** müssen Sie einen Punkt / ein Objekt auswählen, auf das *Stern*-Symbol (mit der Beschriftung Hinzufügen) tippen und alle erforderlichen Informationen eingeben.  

- Um Informationen über einen Favoritenpunkt zu **bearbeiten**, müssen Sie *Auf der Karte anzeigen* aktivieren (*Menü → Meine Orte → Favoriten*), dann darauf drücken, und im Kontextmenü erscheint anstelle des *Stern*-Symbols ein *Bleistift*-Symbol (mit der Beschriftung Bearbeiten).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - fügt einen ausgewählten Punkt zur Favoritenliste hinzu.


### Marker hinzufügen / bearbeiten {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Marker hinzufügen/bearbeiten Android](@site/static/img/map/add_marker_android.png) ![Aktion Marker passieren Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Marker hinzufügen/bearbeiten iOS](@site/static/img/map/add_marker_ios.png)  ![Aktion Marker wiederherstellen Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es ist möglich, einen Punkt oder ein Objekt zu markieren, um die Navigationsplanung zu erleichtern. Sie müssen nur auf das **Fahnen**-Symbol im Menü tippen (*Android*), **Pfeil** (*iOS*) - zeigt Richtung und Entfernung zum ausgewählten Punkt von Ihrem aktuellen Standort an.

Aktionen:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Setzt einen neuen Marker auf den ausgewählten Punkt.
- **Als passiert markieren** (*Android*) / *Verwerfen* (*iOS*). Deaktiviert den Marker und verschiebt ihn in den Verlauf.
- **Aktivieren** (*Android*). Verschiebt den Marker an die oberste Position (im oberen Panel).
- **Marker wiederherstellen** (*Android*). Verschiebt den Marker aus dem Verlauf in die aktive Liste.

Lesen Sie mehr über [Marker hier](../personal/markers.md).


### Teilen {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versionen bis Android 14 | 14+ Android |
|:------------|:---------------|
| ![Aktion Teilen Android](@site/static/img/map/action_share_1_andr.png) | ![Aktion Teilen Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Teilen iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App ermöglicht es Ihnen, **<Translate android="true" ids="shared_string_share"/>** *Meinen Standort* oder einen beliebigen ausgewählten Ort auf der Karte über Messenger, E-Mails oder soziale Medien zu teilen.  

Verfügbare Optionen zum Teilen des Standorts:

- ***Senden***. Sendet Text über auf Ihrem Gerät verfügbare Apps. Enthält alle Informationen über den Standort: Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolokalisierung als Link.
- ***Kopieren***. Kopiert alle Standortinformationen (Name meines Standorts oder Name des ausgewählten POI, Adresse, Koordinaten und Geolokalisierung als Link) in die Zwischenablage.  
- ***Adresse kopieren***. Kopiert nur die Adressinformationen in die Zwischenablage.
- ***POI-Namen kopieren***. Kopiert nur den POI-Namen oder die Adresse, falls kein Name vorhanden ist, in die Zwischenablage.
- ***Koordinaten kopieren***. Kopiert nur die Koordinateninformationen in die Zwischenablage.
- ***geo***. Öffnet eine Liste verfügbarer Anwendungen, die Geolokalisierung unterstützen. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-Code*** (*Android*). Erzeugt einen Link zum ausgewählten Standort in einem QR-Code.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Route nach / von {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Route Android](@site/static/img/map/action_directions_android.png)

![Mehrere Routen Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Route iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Um die Navigation oder Routenplanung zu starten, müssen Sie zuerst das Ziel mit [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions) auswählen. Falls Sie bereits einen Zielpunkt haben, schlägt das Menü vor, den Zielpunkt zu ersetzen oder ihn als weiteren Zwischen- oder Startpunkt einzufügen.

Es ist auch möglich, zuerst das *Von*-Ziel über das Kartenkontextmenü auszuwählen (<Translate android="true" ids="context_menu_item_directions_from"/>).

Lesen Sie mehr über die [Navigation hier](../navigation/setup/route-navigation.md).

:::note Navigation starten antippen
Wenn Sie auf **Navigation starten** tippen, wird der *Von*-Punkt verworfen, da die Anwendung in den Navigationsmodus wechselt. Um eine Route beizubehalten, tippen Sie nicht auf *Navigation starten* und [**wischen Sie das Menü**](#hide-context-menu) *Routenvorbereitung* nach unten.
:::


### In der Nähe suchen {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Aktion Suchen Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Suchen iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Mit dieser Kontextmenü-Aktion ist es möglich, um einen bestimmten Ort auf der Karte herum zu suchen.  

Lesen Sie mehr über die [Suchfunktion](../search/index.md).


### Straße meiden {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Straße auf der Karte meiden Android](@site/static/img/map/action_avoid_android.png) ![Gemiedene Straße verwerfen Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straße auf der Karte meiden iOS](@site/static/img/map/avoid_route_ios_1.png) ![Gemiedene Straße verwerfen iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Über das Kartenkontextmenü können Sie eine bestimmte Straße zur Liste der für die Routenführung nicht zu verwendenden Straßen hinzufügen. Dies wirkt sich auf die [Routenvorbereitung](../navigation/setup/route-navigation.md) aus.  
Um zuvor ausgewählte Straßen aus der *[Liste der zu meidenden Straßen](../navigation/routing/osmand-routing.md#avoid-roads-menu)* zu löschen, tippen Sie auf ein Zeichen und wählen Sie *Entfernen* (**Android**) oder *Verwerfen* (**iOS**).

:::note
Die Funktion "Straßen meiden" ist global und wirkt sich auf alle *[Routentypen](../navigation/routing/osmand-routing.md#routing-types)* aus (außer *[Online-Routing](../navigation/routing/online-routing.md)*).  
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

Fast jedes vom Benutzer erstellte Objekt ist verschiebbar, d.h. Marker, Favorit, erstellter POI, Audio-/Videonotiz oder Track-Wegpunkt. Wählen Sie zuerst ein Objekt auf der Karte aus und verwenden Sie dann den Menüpunkt *<Translate android="true" ids="change_markers_position"/>*, um es an einen neuen Ort zu verschieben.


### Route planen {#plan-a-route}

![Aktion Route planen Android](@site/static/img/map/action_plan_route_android.png)

Sie können die Routenplanung von einem ausgewählten Punkt aus über das Objektkontextmenü starten.

Lesen Sie mehr über das Werkzeug [Route planen](../plan-route/create-route.md).


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

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* und für *Aktualisieren* gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
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

Falls am ausgewählten Ort keine Offline-Karte vorhanden ist, zum Beispiel weil das Kartenobjektmenü über die Suche oder einen bestimmten Favoriten geöffnet wurde, wird die kleinstmögliche Offline-Karte zum [Herunterladen](../start-with/download-maps.md#select-on-the-map) vorgeschlagen.  

**iOS**. Wenn Sie bereits OsmAnd-Karten (Vektor oder Gelände) [heruntergeladen](../map/map-context-menu.md) haben, können Sie diese über das Kontextmenü aktualisieren. Sie müssen zuerst die Region auf der Karte auswählen - tippen Sie auf einen beliebigen Ort bei einem weltweiten Zoom von 3-7.  

> **HINWEIS**. *Wenn Sie das Kontextmenü für eine Kartenregion geöffnet haben (die Region ist hervorgehoben), können Sie ***<Translate android="true" ids="rendering_category_details"/>*** darüber sehen: Typ und Größe einer verfügbaren Karte, Link zu einer Wikipedia-Seite, Sprache, Bevölkerung und anderes.*


### * Parkposition hinzufügen / löschen {#-add--delete-parking-point}

:::note
Um Parkpositionen hinzuzufügen/zu löschen, aktivieren Sie das OsmAnd [**Parkpositions-Plugin**](../plugins/parking.md).
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

Jeder ausgewählte Ort auf der Karte kann als [Parkposition](../plugins/parking.md) markiert werden. Um eine Parkposition zu löschen, können Sie das Kontextmenü öffnen, das mit dem Parkplatz verbunden ist.


### * Track-Wegpunkt hinzufügen / bearbeiten {#-add--edit-track-waypoint}

:::note
Um Trackpunkte hinzuzufügen/zu bearbeiten, aktivieren Sie das OsmAnd [**Reiseaufzeichnungs-Plugin**](../plugins/trip-recording.md).
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Track zum Hinzufügen eines Wegpunkts auswählen Android](@site/static/img/map/tracks_tab_android.png) ![Track-Wegpunkt hinzufügen Android](@site/static/img/map/add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Aktion Wegpunkt iOS](@site/static/img/map/action_waypoint_ios.png)

![Track zum Hinzufügen eines Wegpunkts auswählen iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Sie können Wegpunkte zu einem aufgezeichneten Track oder zur aktuellen Trackaufzeichnung über das Kartenkontextmenü hinzufügen.  

- Wählen Sie einen Ort auf der Karte durch [langes Antippen](../map/map-context-menu.md#select-any-point-long-tap) aus.
- Wählen Sie im sich öffnenden *Kartenkontextmenü* *Aktionen → Track-Wegpunkt hinzufügen*.
- Die Liste zeigt die aufgezeichneten und auf der Karte angezeigten [Tracks](../map/tracks/index.md#display-tracks-on-the-map) sowie die [aktuelle Trackaufzeichnung](../plugins/trip-recording.md) an, zu der Sie den ausgewählten Wegpunkt hinzufügen können (*auf Android* wird die Liste in Registerkarten gruppiert: <Translate android="true" ids="shared_string_on_map"/> / <Translate android="true" ids="rendering_value_all_name"/> / <Translate android="true" ids="shared_string_folders"/>).
- Sie können Wegpunkte zu einem Track hinzufügen, der noch nicht für die Aufzeichnung aktiv ist. In diesem Fall wechselt der inaktive Track vom *Startzustand* in den *Fortsetzungszustand*.
- [Füllen Sie](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) die erforderlichen Daten aus und speichern Sie den Wegpunkt.
- Sie können die [Schnellaktionen](../widgets/quick-action.md) konfigurieren, indem Sie einen Wegpunkt zu *Track-Wegpunkt hinzufügen* hinzufügen.


### * POI erstellen / ändern {#-create--modify-poi}

:::note
Um POIs zu erstellen/ändern, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
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

Sie können Kartendatenfehler an einem bestimmten Ort an die [OpenStreetMap-Community](https://wiki.openstreetmap.org/wiki/Join_the_community) **melden**. Bitte befolgen Sie die [Richtlinien](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) und fügen Sie dem Problem entsprechende Kommentare hinzu.


### * OSM-Notiz kommentieren / schließen {#-comment--close-osm-note}

:::note
Um eine OSM-Notiz zu kommentieren/schließen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![OSM-Notiz kommentieren Android](@site/static/img/map/action_comment_note_android.png) ![OSM-Notiz wiedereröffnen Android](@site/static/img/map/action_reopen_note_android.png)

Sie können OpenStreetMap-Notizen über das Kontextmenü des Objekts [kommentieren](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [lösen](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) und wiedereröffnen.


### * POI / OSM-Notiz hochladen {#-upload-poi--osm-note}

:::note
Um POI / OSM-Notizen hochzuladen, aktivieren Sie das OsmAnd [**OSM-Bearbeitungs-Plugin**](../plugins/osm-editing.md).
:::

![POI hochladen Android](@site/static/img/map/action_poi_upload_android.png) ![OSM-Notiz hochladen Android](@site/static/img/map/action_note_upload_android.png)

Falls Sie den *Offline-Modus* verwenden, um POIs oder OSM-Notizen hinzuzufügen/zu bearbeiten, müssen Sie die Änderungen auf OpenStreetMap hochladen. Standardmäßig ist der *Offline-Modus* aktiviert, um versehentliche Änderungen an der öffentlichen Datenbank zu vermeiden. Sie können Änderungen über das Kontextmenü des erstellten Objekts hochladen oder löschen.


### * AV-Notiz aufnehmen {#-record-av-note}

<InfoAndroidOnly />

:::note
Um Audio-/Videonotizen aufzunehmen, aktivieren Sie das OsmAnd [**Audio-/Videonotizen-Plugin**](../plugins/audio-video-notes.md).
:::

![Aktion Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Nimmt eine Mediennotiz an einem ausgewählten Punkt auf der Karte auf oder macht ein Foto.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - erstellt eine [Audionotiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf der Überlagerung mit einem Audiosymbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - erstellt eine [Videonotiz](../map/point-layers-on-map.md#-audio--video-points-android) am ausgewählten Punkt (erstellt einen neuen Punkt auf der Überlagerung mit einem Videosymbol).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - erstellt einen [Fotopunkt](../map/point-layers-on-map.md#-audio--video-points-android) auf der Karte.


## Anpassen {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Kartenkontextmenü anpassen](@site/static/img/map/map_context_menu_customize_3.png)

Sie können die Reihenfolge der Elemente im Menü *Aktionen* im *Kartenkontextmenü* ändern oder sie ausblenden. Insgesamt werden 16 Aktionen vorgeschlagen.  

- Sie können die drei nützlichsten Aktionen an den Anfang der Liste *Hauptaktionen* verschieben.
- Der Rest des Menüs kann für jedes Profil separat in den Abschnitten *Zusätzliche Aktionen* und *Ausgeblendet* angepasst werden.  

Verfügbare Arten von Aktionen:

- **<Translate android="true" ids="main_actions"/>**. Der Abschnitt hat nur 4 Schaltflächen, von denen drei angepasst werden können, und Aktionen, die unverändert bleibt.  
- **<Translate android="true" ids="additional_actions"/>**. Sie können auf diese Aktionen zugreifen, indem Sie auf die Schaltfläche *Aktionen* tippen.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Das Verschieben von Aktionen in diesen Abschnitt verhindert nicht deren Funktion. Sie erscheinen nur nicht im Menü Aktionen.  


## Verwandte Artikel {#related-articles}

- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Track-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Nahverkehr](./public-transport.md)
- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)