---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
sidebar_position: 9
title:  OpenStreetMap Bearbeitung
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Überblick {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) ist eine globale Gemeinschaft, die sich zum Ziel gesetzt hat, eine detaillierte, freie geografische Karte der Welt zu erstellen und jedem Nutzer aktuelle Open-Source-Daten zur Verfügung zu stellen. Das OpenStreetMap-Bearbeitungs-Plugin ermöglicht es Ihnen, zur Community beizutragen.

Mit OsmAnd und dem OSM-Bearbeitungs-Plugin können Sie ganz einfach eigene Informationen zu OpenStreetMap.org beitragen, z. B. [POIs](#create--modify-poi) erstellen oder ändern, [Notizen](#create--modify-osm-note) hinzufügen oder kommentieren und aufgezeichnete GPX-[Tracks](#upload-gps-track) hochladen.

## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um das Plugin *OpenStreetMap-Bearbeitung* zu verwenden, müssen Sie die folgenden Einstellungen vornehmen:

1. [Plugin aktivieren](../plugins/index.md#enable--disable).
2. OpenStreetMap-Bearbeitung in einem beliebigen [Profil](../personal/profiles.md) einstellen.
3. Die Anzeige von *OSM-Notizen (online)* oder *OSM-Bearbeitungen* auf der Karte im Menü [Karte konfigurieren](../map/configure-map-menu) aktivieren.


## Einstellungen {#settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Die Plugin-Einstellungen sind global und gelten für alle Profile.
:::

- [Bei OpenStreetMap anmelden](#authorization). Melden Sie sich an, um neue oder geänderte Änderungen hochzuladen. Verwenden Sie die sichere *OAuth 2.0-Methode* oder [melden Sie sich auf der OSM-Website an](https://www.openstreetmap.org/login). Für iOS ist die Schaltfläche für die OAuth-Methode nur für Benutzer mit einer unterstützten Version von iOS, 16.4, verfügbar.
- **<Translate android="true" ids="offline_edition"/>**. Wenn diese Einstellung aktiviert ist, werden die Änderungen zuerst lokal gespeichert (*Speichern*-Schaltfläche) und auf Anfrage hochgeladen. Wenn die Einstellung deaktiviert ist, werden die Änderungen sofort hochgeladen (*Hochladen*-Schaltfläche).
- **<Translate android="true" ids="use_dev_url"/>** *(nur Android)*. Ermöglicht die Aktivierung von [dev.openstreetmap.org](https://dev.openstreetmap.org/) anstelle von [openstreetmap.org](http://openstreetmap.org/), um das Hochladen von OSM-Notizen, POIs oder GPS-Tracks zu testen. Wenn diese Option aktiviert ist, werden Sie automatisch von OpenStreetMap.org abgemeldet. Diese Einstellung ist nur in der Liste verfügbar, wenn das *OsmAnd-Entwicklungs-Plugin* aktiviert ist.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Tippen Sie darauf, um [*Menü → Meine Orte → OSM-Bearbeitungen*](../personal/myplaces.md) zu öffnen. Diese Registerkarte listet Ihre unbearbeiteten OSM-Notizen auf. Die folgenden Aktionen sind mit der Notiz verfügbar: *Hochladen*, *Auf Karte anzeigen*, *OSM-Notiz ändern*, *Löschen*. Hochgeladene oder gelöschte Notizen werden nicht mehr in der Liste angezeigt.

:::note
Wenn Sie ein [OsmAnd Pro](../purchases/android.md#pro-features)-Abonnement haben, werden Änderungen, die an OSM vorgenommen wurden, innerhalb einer Stunde auf Ihrer OsmAnd-Karte angezeigt. Stellen Sie sicher, dass [Live-Updates](../personal/maps-resources.md#osmand-live) aktiviert sind.
:::


### Autorisierung {#authorization}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Melden Sie sich an, um Änderungen und GPX-Dateien beizutragen.

- Gehen Sie zu [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) und *melden Sie sich an* oder *registrieren Sie sich*.
- Tippen Sie in der OsmAnd-App auf das Feld *Bei OpenStreetMap anmelden* und dann auf die Schaltfläche *Mit OpenStreetMap anmelden*.


### Kostenlose Karten-Updates für Mapper {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Die Einstellung <Translate android="true" ids="map_updates_for_mappers"/> ermöglicht es Ihnen, **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** zu aktivieren, wenn Sie ein aktiver OpenStreetMap-Mitwirkender sind. Auf diese Weise können Sie kostenlose stündliche Karten-Updates genießen, im Gegensatz zu den standardmäßigen monatlichen Updates. Aktive Mitwirkende an OpenStreetMap.org haben möglicherweise Anspruch auf unbegrenzte monatliche und stündliche Karten-Updates. Melden Sie sich bei OpenStreetMap an, um Ihre Berechtigung für unbegrenzte monatliche und stündliche Karten-Updates zu überprüfen.


### OSM-Bearbeitungsebene {#osm-editing-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Sie können die Anzeige von OSM-Änderungen wie *OSM-Notizen* (online), *OSM-Bearbeitungen*, *Fixme-Tags*, *Notiz-Tags*, *Symbole bei niedrigen Zoomstufen* als separate Ebene im Abschnitt [Karte konfigurieren](../map/configure-map-menu.md) des *Hauptmenüs* aktivieren oder deaktivieren.


## POI erstellen / ändern {#create--modify-poi}

Das OpenStreetMap-Bearbeitungs-Plugin ermöglicht es Ihnen, neue Objekte auf der Karte zu erstellen, die als [Points of Interest oder POI](../map/point-layers-on-map.md#points-of-interest-pois) bezeichnet werden. Sie können ein neues Geschäft, ein Lieblingsdenkmal, eine Bank oder einen Unterstand kartieren, damit die Leute sie finden können.

1. Tippen Sie auf die Karte, um einen neuen POI zu platzieren, oder tippen Sie auf einen noch nicht geladenen POI. 2. Tippen Sie auf [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Wählen Sie [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) und fügen Sie dessen Namen und andere Informationen wie Öffnungszeiten, Website usw. hinzu. Wenn Sie einen nicht hochgeladenen POI auswählen, ändert sich *POI erstellen* in *POI ändern*.
3. Abhängig von der Einstellung [Offline-Bearbeitung](#settings) können Sie die Daten lokal speichern oder [hochladen](../map/map-context-menu#-upload-poi--osm-note).


### Tags hinzufügen {#add-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Sie können dem POI ganz einfach OSM-[Tags](https://wiki.openstreetmap.org/wiki/Tags) hinzufügen. Wenn Sie mehrere Zeichen in die Suchleiste eingeben, schlägt das Programm mögliche Tags vor.

**Offline-Änderungen.**
Sie können POIs in *Meine Orte → OSM-Bearbeitungen* anzeigen, auf OSM hochladen oder löschen. Sie können Ihre OSM-POI-Änderungen auch in eine [OSC-Datei](https://wiki.openstreetmap.org/wiki/OsmChange) exportieren und in [JOSM](https://wiki.openstreetmap.org/wiki/JOSM) importieren.

### Nicht unterstützte POI-Typen hinzufügen {#add-unsupported-poi-types}

Auf der Registerkarte *Erweitert* können Sie nicht unterstützte POI-Typen hinzufügen, die für Ihre spezifische Aufgabe nützlich sein können. Diese Option ermöglicht es Ihnen, POI-Daten manuell einzugeben und so die Funktionalität der Anwendung zu erweitern.

Ein Beispiel für nicht unterstützte POI-Typen, die Sie hinzufügen können, ist *amenity=freeshops*. Dieser Typ kann nützlich sein, wenn Sie kostenlose Geschäfte oder Orte markieren möchten, die kostenlose Produkte anbieten.

Um nicht unterstützte POI-Typen hinzuzufügen, gehen Sie wie folgt vor:

1. Öffnen Sie die Registerkarte *Erweitert*.
2. Tippen Sie auf *POI-Typ*.
3. Geben Sie den Schlüssel *amenity* und den Wert *freeshops* in die entsprechenden Felder ein.
4. Füllen Sie die restlichen erforderlichen Daten für diesen POI aus.
5. Tippen Sie auf *Tag hinzufügen*, um den neuen POI zu Ihrer Datenbank hinzuzufügen.

Denken Sie daran, dass es beim Hinzufügen nicht unterstützter POI-Typen wichtig ist, sicherzustellen, dass die Daten korrekt eingegeben werden, um die korrekte Funktion der Anwendung und die anschließende Verarbeitung der Informationen zu gewährleisten.


## OSM-Notiz erstellen / ändern {#create--modify-osm-note}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Um OSM-Notizen zu bearbeiten, zu kommentieren oder zu schließen, aktivieren Sie deren Anzeige auf der Karte im Menü [Karte konfigurieren](../map/configure-map-menu.md).

- Die Funktion OSM-Notizen ermöglicht es Ihnen, Notizen zur Karte hinzuzufügen. In diesen Notizen können Sie Fehler beschreiben oder über fehlende Informationen in den OpenStreetMap-Daten schreiben. Sie und andere Benutzer können Kommentare zu Ihren Notizen hinterlassen.
- Sie können anderen Benutzern helfen, indem Sie deren Fragen oder Probleme überprüfen, Kommentare abgeben und dann die gelösten Notizen schließen.
- Lesen Sie mehr über die OpenStreetMap-Notizen [hier](https://wiki.openstreetmap.org/wiki/Notes).

Um eine Notiz zu erstellen, müssen Sie sich nicht bei OpenStreetMap.org anmelden, Sie können sie anonym senden.

- Tippen Sie auf die Karte, wo die neue OSM-Notiz platziert werden soll (oder tippen Sie auf eine nicht hochgeladene Notiz), und wählen Sie [Aktionen](../map/map-context-menu.md#actions).
- Wenn Sie Informationen zu einer vorhandenen Notiz oder einer nicht hochgeladenen Notiz hinzufügen, einen Kommentar bearbeiten oder eine Notiz schließen möchten, tippen Sie auf die OSM-Notiz auf der Karte und wählen Sie die [erforderliche Aktion](../map/map-context-menu.md#-comment--close-osm-note).
- Sie können Änderungen hochladen, sobald Sie online verfügbar sind. Sie können Änderungen auch rückgängig machen, bevor sie hochgeladen werden.

:::info
Die hochgeladenen OSM-Notizen sind im Offline-Modus auf OsmAnd-Karten nicht sichtbar.
:::


## GPS-Track {#gps-track}

Die von Ihnen aufgezeichneten GPS-Tracks sind nützlich für:

- **Mapper**. Tracks können verwendet werden, um alle Arten von Pfaden zu kartieren.
- **Navigation**. Basierend auf den von Ihnen hochgeladenen GPX-Dateidaten können Navigationsanwendungen und spezielle Geräte Tracks berechnen.
- **Zum Teilen von Informationen** über die von Ihnen aufgezeichneten Tracks und Routen auf [OpenStreetMap-basierten Karten](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info HINWEIS
Ihre Tracks werden innerhalb einer Stunde zu [OSM-Spuren](https://www.openstreetmap.org/traces) hinzugefügt, wo sie für Sie und andere zum Anzeigen, Suchen und Verwenden verfügbar sind.
:::


### GPS-Track hochladen {#upload-gps-track}


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Um den [GPS-Track hochzuladen](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), folgen Sie den Schritten unten:

- Finden Sie den gewünschten Track in der Registerkarte [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Tippen Sie auf das *Drei-Punkte-Menü* neben dem Tracknamen und wählen Sie *Exportieren*.

**Einstellungen:**

- **<Translate android="true" ids="shared_string_description"/>**. Ermöglicht das Hinzufügen einer Beschreibung zum Track. Die Beschreibung gilt für alle ausgewählten Tracks. Wenn Sie nichts in das Feld eingeben, werden die Tracknamen für jeden einzelnen Track als Beschreibungen verwendet.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Dieser Punkt im Einstellungsbereich ermöglicht das Hinzufügen von Tags zur Identifizierung des Tracks. Der Standard-Tag ist "osmand", Sie können zusätzliche Tags durch Kommas getrennt eingeben.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Track-Sichtbarkeit für OSM-Benutzer:
   - *Öffentlich* bedeutet, dass der Track öffentlich verfügbar ist und in Rohform in Ihren GPS-Tracks, GPS-Tracklisten und zeitgestempelten Tracklisten angezeigt wird. Die über die API übertragenen Daten werden nicht mit Ihrer Track-Seite referenziert. Zeitstempel von Trace-Punkten sind über die öffentliche GPS-API nicht verfügbar und Track-Punkte sind nicht chronologisch geordnet.
   - *Identifizierbar* bedeutet, dass der Track öffentlich in Ihren GPS-Track-Punkten und öffentlichen GPS-Tracklisten angezeigt wird, was bedeutet, dass andere Benutzer den Roh-Track herunterladen und mit Ihrem Benutzernamen verknüpfen können. Öffentliche zeitgestempelte Track-Punkt-Daten aus der GPS-API, die über die Track-Punkt-API übergeben werden, verlinken zu Ihrer ursprünglichen Track-Seite.
   - *Verfolgbar* bedeutet, dass der Track nicht in öffentlichen Listen angezeigt wird, aber die verarbeiteten Track-Punkte mit Zeitstempeln daraus (die nicht direkt mit Ihnen verknüpft werden können) über die öffentliche GPS-API geladen werden.
   - *Privat* bedeutet, dass der Track nicht in öffentlichen Listen angezeigt wird, aber die Track-Punkte daraus in nicht-chronologischer Reihenfolge über die öffentliche GPS-API ohne Zeitstempel verfügbar sind.
- **<Translate android="true" ids="login_account"/>** - [OSM-Konto](https://www.openstreetmap.org/login).

:::info
Sie können mehr als einen Track zum Hochladen auf OSM auswählen. Tippen Sie dazu auf das Symbol *Auf OpenStreetMap hochladen* am unteren Bildschirmrand, wählen Sie die Tracks mit dem Kontrollkästchen aus, tippen Sie auf *Hochladen* und dann auf *Weiter*.
:::

### OBF-Datei generieren {#generate-obf-file}

Sie können eine OBF-Datei mit [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) erstellen, wenn Sie eine große GPX-Track-Datenbank haben. Dies ist eine Sammlung von Tracks von osmand.net mit dem Tag 'gpsies', eine Sammlung von heruntergeladenen Tracks von OpenStreetMap oder Ihre eigene Sammlung.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2024*