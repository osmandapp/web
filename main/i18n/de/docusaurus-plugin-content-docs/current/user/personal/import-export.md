---
source-hash: 449ba8486f8036d2bbad4837dd278ab4b240f56f3282ba8c8550a0e6a1d7cc6b
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

Die Werkzeuge **Import** und **Export** in OsmAnd ermöglichen Ihnen die Verwaltung Ihrer Daten. Sie können Ihre Profile, Favoriten, Tracks und andere Einstellungen über einen speziellen Format über die Apps auf Ihrem Gerät verschieben. Dieser Prozess vereinfacht das Speichern und Übertragen von Daten zwischen Geräten und ermöglicht es Ihnen, diese mit anderen OsmAnd-Benutzern zu teilen.

:::note Große Größe
*Wenn die Größe Ihrer ausgewählten Daten erheblich ist, benötigt die Anwendung Zeit, um die `.osf`-Datei vorzubereiten.*
:::


## Daten exportieren / importieren {#export--import-data}

Der *Import* und *Export* ermöglichen es Ihnen, Daten aus generierten `.osf`-**Dateien** zu speichern oder [Online-Quellen](../map/raster-maps.md) zu verwenden, wodurch Informationen nach einer Neuinstallation wiederhergestellt werden können.

Für Import/Export verfügbare **Datentypen**:

- **Einstellungen:**  
        [Profile](../personal/profiles.md#actions), &nbsp;[OsmAnd/Allgemeine Einstellungen](../personal/global-settings.md), &nbsp;[Farben](../personal/color-palette-schemes.md), &nbsp;[Schnellaktion](../widgets/quick-action.md), &nbsp;[POI-Typ](../map/point-layers-on-map.md#poi-types), &nbsp;[Straßen vermeiden](../map/map-context-menu.md#avoid-road).
- **Meine Orte:**  
        [Favoriten](../personal/favorites.md#export--import), &nbsp;[Tracks](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM-Notizen*, *OSM-Bearbeitungen](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V-Notizen](../plugins/audio-video-notes.md), &nbsp;[Kartenmarkierungen](../personal/markers.md), &nbsp;[Markierungsverlauf*, *Suchverlauf*, *Navigationsverlauf](../personal/global-settings.md#history), &nbsp;*Reiseplan*.
- **Ressourcen:**  
        [Rendering-Stil](../map/vector-maps.md#custom-map-style), &nbsp;[Routing](../navigation/routing/osmand-routing.md), &nbsp;[Online-Routing-Engines](../navigation/routing/online-routing.md), &nbsp;[Kartenquellen*, *Standard-/Offline-Karten](../map/raster-maps.md), &nbsp;[Wikipedia- und Reisekarten](../plan-route/travel-guides.md), &nbsp;[Seekarten](../plugins/nautical-charts.md), &nbsp;[Straßenkarten](../map/vector-maps.md#road-style), &nbsp;[Topographiekarten](../plugins/topography.md), &nbsp;[Sprachansagen (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Sprachansagen (aufgezeichnet)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Favoriten-Backup](../personal/favorites.md#automatic-favorites-backup).


### Export {#export}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Alle von Ihnen konfigurierten und erstellten Daten können über das ***Exportmenü*** exportiert werden. Das Menü besteht aus drei Gruppen: **Einstellungen**, **Meine Orte** und **Ressourcen**, die alle verfügbaren Dateiverzeichnisse enthalten. Sie können die Dateien, die Sie exportieren möchten, in jedem Verzeichnis einzeln oder alle auf einmal auswählen. **Alle exportierten Dateien werden im `.osf`-Format gespeichert**.  


### Import {#import}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Öffnet und stellt `.osf`-Dateien wieder her. Tippen Sie auf die Datei im Dateimanager des Geräts oder verwenden Sie die Aktionsschaltfläche.

- *Einige Elemente existieren bereits*. Sie können diese Funktion verwenden, um entweder beide Dateien zu speichern oder alle zu ersetzen.
- *Neustart*. Nach dem Importieren der Dateien muss die Anwendung neu gestartet werden.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) ist die alternative Ressource, die Sie benötigen, um Ihre persönlichen Einstellungen und App-Daten zu speichern. Sie können diese Daten auf jedem Gerät verwenden, auf dem die OsmAnd-App installiert werden kann, oder bei Verwendung der Desktop-App. Alle vorgenommenen Änderungen können synchronisiert werden.


## Datenverlust verhindern {#preventing-data-loss}

In den *Android*- und *iOS*-Versionen von OsmAnd wird bei einer vollständigen **Deinstallation** der App oder Auswahl von **Daten löschen** auf Ihrem Gerät im Einstellungsmenü Anwendungsinfo auch der Datenordner aus dem Dateimanager des Geräts gelöscht. Wenn Sie keine Vorsichtsmaßnahmen treffen, führt dies zum **Verlust aller heruntergeladenen Karten für OsmAnd-Daten, aller gespeicherten Favoriten, GPX-Tracks, Sprachansagen (TTS) und [anderer Daten](#export--import-data).**

Es gibt zwei Möglichkeiten, Ihre Daten vor der Neuinstallation der OsmAnd-App zu speichern:

- Verwenden Sie [OsmAnd Cloud](#osmand-cloud). Sie können Ihre Daten mit OsmAnd-Funktionen sichern, z. B. [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) als kostenlose Version oder [OsmAnd Pro](../purchases/index.md), ein kostenpflichtiges Abonnement mit mehr Funktionen.
- [Exportieren Sie eine OSF-Datei](#export) mit Ihren Daten. Kopieren Sie die `.osf`-Datei in einen Ordner auf Ihrem Gerät oder in die OsmAnd Cloud. Nach der Neuinstallation von OsmAnd [importieren Sie diese `.osf`-Datei](#import) in die OsmAnd-App.


## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpalettenschemata](../personal/color-palette-schemes.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. Wie übertrage ich Favoriten und Tracks auf ein neues Gerät? [(prüfen)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Ich habe eine GPX-Datei, wie importiere ich sie in OsmAnd? [(prüfen)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Löschen von Kartendaten nach dem App-Update (wenn „Multiuser Storage 1“ ausgewählt ist). [(prüfen)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Zuletzt aktualisiert: Januar 2025*