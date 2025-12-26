---
source-hash: 30d9f4266ee23c8fe8ca807b128433f5d3f472e346e8671246ace43ed3c0c128
sidebar_position: 10
title:  Import / Export
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Übersicht {#overview}

Die Werkzeuge **Import** und **Export** in OsmAnd ermöglichen Ihnen die Verwaltung Ihrer Daten. Sie können Ihre Profile, Favoriten, Tracks und andere Einstellungen über ein spezielles Format zwischen den Apps auf Ihrem Gerät verschieben. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, sie mit anderen OsmAnd-Nutzern zu teilen.

:::note Große Größe
*Wenn die Größe Ihrer ausgewählten Daten erheblich ist, benötigt die Anwendung Zeit, um die `.osf`-Datei vorzubereiten.*
:::


## Export / Import data {#export--import-data}

Der *Import* und *Export* ermöglichen es Ihnen, Daten aus generierten `.osf`-**Dateien** zu speichern oder [Online-Quellen](../map/raster-maps.md) zu verwenden, was die Wiederherstellung von Informationen nach einer Neuinstallation ermöglicht.

**Für den Import/Export verfügbare Datentypen**:

- **Einstellungen:**  
        [Profile](../personal/profiles.md#actions), &nbsp;[OsmAnd/Allgemeine Einstellungen](../personal/global-settings.md), &nbsp;[Farben](../personal/color-palette-schemes.md), &nbsp;[Schnellaktion](../widgets/quick-action.md), &nbsp;[POI-Typ](../map/point-layers-on-map.md#poi-types), &nbsp;[Straße meiden](../map/map-context-menu.md#avoid-road).
- **Meine Orte:**  
        [Favoriten](../personal/favorites.md#export--import), &nbsp;[Tracks](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM-Notizen*, *OSM-Bearbeitungen](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V-Notizen](../plugins/audio-video-notes.md), &nbsp;[Kartenmarkierungen](../personal/markers.md), &nbsp;[Markierungsverlauf*, *Suchverlauf*, *Navigationsverlauf](../personal/global-settings.md#history), &nbsp;*Reiseroute*.
- **Ressourcen:**  
        [Renderstil](../map/vector-maps.md#custom-map-style), &nbsp;[Routing](../navigation/routing/osmand-routing.md), &nbsp;[Online-Routing-Engines](../navigation/routing/online-routing.md), &nbsp;[Kartenquellen*, *Standard-/Offline-Karten](../map/raster-maps.md), &nbsp;[Wikipedia- und Reisekarten](../plan-route/travel-guides.md), &nbsp;[Seekarten](../plugins/nautical-charts.md), &nbsp;[Straßenkarten](../map/vector-maps.md#road-style), &nbsp;[Topografische Karten](../plugins/topography.md), &nbsp;[Sprachansagen (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Sprachansagen (aufgezeichnet)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Favoriten-Backup](../personal/favorites.md#automatic-favorites-backup).


### Export {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profilaktionen Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Lokales Backup Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profilaktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profilaktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Alle von Ihnen konfigurierten und erstellten Daten können über das ***Export-Menü*** exportiert werden. Das Menü besteht aus drei Gruppen: **Einstellungen**, **Meine Orte** und **Ressourcen**, die alle verfügbaren Dateiordner enthalten. Zum Beispiel werden in dem Abschnitt Ressourcen Karten nach Typ in *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, und *<Translate android="true" ids="topography_maps"/>* gruppiert, um die Navigation zu erleichtern und den selektiven Export zu ermöglichen. Sie können die Dateien, die Sie exportieren möchten, in jedem Ordner einzeln oder alle auf einmal auswählen. **Alle exportierten Dateien werden im `.osf`-Format gespeichert**.  


### Import {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Profilaktionen Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Profilaktionen Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Profilaktionen Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Profilaktionen Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Öffnet und stellt `.osf`-Dateien wieder her. Tippen Sie auf die Datei im Dateimanager des Geräts oder verwenden Sie die Aktionsschaltfläche.

- *Einige Elemente sind bereits vorhanden*. Sie können diese Funktion verwenden, um beide zu behalten oder alle zu ersetzen.
- *Neustart*. Nach dem Importieren der Dateien muss die Anwendung neu gestartet werden.

Unterstützte Import-Dateitypen:
- [Tracks, Routen](https://www.osmand.net/docs/user/personal/tracks/manage-tracks/) & [Favoriten](https://osmand.net/docs/user/personal/favorites/): `.gpx`, `.kml`, `.kmz`. KML- und KMZ-Dateien werden mit Konvertierung in das GPX-Format importiert.
- [OsmAnd-Vektorkarten](https://osmand.net/docs/user/map/vector-maps): `.obf`.
- [Online-Kartenkacheln](https://www.osmand.net/docs/user/map/raster-maps/): `.sqlitedb`. 
- [Backups & Profile](#export): `.osf`.
- [Höhenkarten / 3D-Daten](https://www.osmand.net/docs/user/plugins/topography/): `.geotif`.
- [Andere](color-palette-schemes.md): `.txt`.

Für einen technischen Überblick über alle unterstützten Formate siehe [OsmAnd Dateiformate](https://www.osmand.net/docs/technical/osmand-file-formats/).


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) ist die alternative Ressource, die Sie benötigen, um Ihre persönlichen Einstellungen und App-Daten zu speichern. Sie können diese Daten auf jedem Gerät verwenden, auf dem die OsmAnd-App installiert werden kann, oder wenn Sie die Desktop-App verwenden. Alle von Ihnen vorgenommenen Änderungen können synchronisiert werden.


## Preventing Data Loss {#preventing-data-loss}

Wenn Sie in den *Android*- und *iOS*-Versionen von OsmAnd die App vollständig **deinstallieren** oder in den Einstellungen Ihres Geräts unter Anwendungsinformationen **Daten löschen** auswählen, wird der Datenordner auch aus dem Dateimanager des Geräts gelöscht. Wenn Sie keine Vorkehrungen treffen, führt dies zum **Verlust aller heruntergeladenen Karten für OsmAnd-Daten, aller gespeicherten Favoriten, GPX-Tracks, Sprachansagen (TTS) und [anderer Daten](#export--import-data).**

Es gibt zwei Möglichkeiten, Ihre Daten vor der Neuinstallation der OsmAnd-App zu sichern:

- Verwenden Sie [OsmAnd Cloud](#osmand-cloud). Sie können Ihre Daten mit OsmAnd-Funktionen wie [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) als kostenlose Version oder [OsmAnd Pro](../purchases/index.md), einem kostenpflichtigen Abonnement mit mehr Funktionen, sichern.
- [OSF-Datei exportieren](#export) mit Ihren Daten. Kopieren Sie die `.osf`-Datei in einen Ordner auf Ihrem Gerät oder in die OsmAnd Cloud. Nach der Neuinstallation von OsmAnd [importieren Sie diese `.osf`-Datei](#import) in die OsmAnd-App.


## Related Articles {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)

### Common Issues and Solutions {#common-issues-and-solutions}

1. Wie übertrage ich Favoriten und Tracks auf ein neues Gerät. [(prüfen)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Ich habe eine GPX-Datei, wie importiere ich sie in OsmAnd? [(prüfen)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Löschen von Kartendaten nach dem App-Update (wenn „Multiuser Storage 1“ ausgewählt ist). [(prüfen)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)