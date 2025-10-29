---
source-hash: 03882f509a8ca4795f4ea6dfab66cd17c33b043531b8429ccab85994d6199aa2
sidebar_position: 3
title:  Globale Einstellungen
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

**Globale Einstellungen** sind allgemeine [Einstellungen](../personal/profiles.md) für alle Profile in der OsmAnd-Anwendung. Dies sind die Grundeinstellungen für das OsmAnd-System, und alle vorgenommenen Änderungen wirken sich auf die gesamte Anwendung aus.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profile Allgemeine Einstellungen Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profile Allgemeine Einstellungen Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profile Allgemeine Einstellungen iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Allgemein {#general}

Dieser Abschnitt enthält die grundlegenden OsmAnd-Einstellungen, wie die Auswahl eines [Profils](#default-profile) beim Laden der Anwendung, die Auswahl der [Rendering-Engine](#map-rendering-engine) und des [Ordners](#data-storage-folder), in dem die Daten gespeichert werden.  


### Standardprofil {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Allgemeine Einstellungen Standardprofil Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Allgemeine Einstellungen Standardprofil iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd verwendet das Standardprofil *Karte durchsuchen* als erstes Profil für neue Benutzer. Wenn dieses Profil von Ihnen ausgewählt wurde, wird es bei jedem Neustart der Anwendung verwendet. Sie können jedes Profil aus der Standardliste auswählen, einschließlich *Zuletzt verwendet* und *Karte durchsuchen*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Ermöglicht die Auswahl des zuletzt verwendeten Profils.
- **<Translate android="true" ids="settings_preset"/>**. Sie wählen das Profil aus, das beim Starten von OsmAnd verwendet werden soll. Es kann in den Anwendungs-[Einstellungen](../personal/profiles.md) geändert werden.  


### CarPlay-Profil {#carplay-profile}

:::caution NUR iOS
Diese Funktion ist für die iOS-Version der OsmAnd-App verfügbar.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Allgemeine Einstellungen CarPlay-Profil iOS](@site/static/img/personal/profiles/CarPlay_ios.png)  

Das [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) wird verwendet, wenn eine Verbindung zur [CarPlay-Software](https://support.apple.com/en-gb/HT205634) Ihres Fahrzeugs besteht. Es hilft Ihnen, die optimierte Version der OsmAnd-App optimal zu nutzen, indem es die Audio- und Videosysteme zur Anzeige von Daten auf Ihrem Telefon verwendet.


### Datenspeicherordner {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profile Speichereinstellungen Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Gerätespeicher** zeigt an, wie viel freier Speicherplatz auf Ihrem Gerät verbleibt. Tippen Sie auf ein Feld, um zum Menü [*Karten und Ressourcen*](../personal/maps-resources.md#local-menu) zu gelangen, wo Sie detaillierte Informationen zu Ihren OsmAnd-Daten anzeigen und verwalten können.

2. Im **<Translate android="true" ids="change_data_storage_folder"/>** können Sie einen Ordner zum Speichern von OsmAnd-Daten auf Ihrem Gerät auswählen.  

    - *Interner App-Speicher*. Nur die OsmAnd-App hat Zugriff auf ihre Daten und keine der externen Apps.
    - *Gemeinsamer Speicher*. Nicht mehr verfügbar.
    - *Externer Speicher 1*. Nur 1 OsmAnd-App hat Zugriff sowie Admin-Apps und USB.
    - *Mehrbenutzerspeicher*. Nur 1 OsmAnd-App hat Zugriff, aber er wird von mehreren Android-Benutzern gemeinsam genutzt.
    - *Manuell angegeben*. Hängt vom Pfad ab.

:::note Android 12+ (Speicherordner ändern)
In den Android-Versionen 11-12 wurden neue Richtlinien für den Speicherzugriff implementiert. Details finden Sie im Abschnitt [**Fehlerbehebung**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *iOS-Gerät → Einstellungen → Allgemein → iPhone-Speicher → OsmAnd Maps*  

![Allgemeine Einstellungen Speicher iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

OsmAnd-Dateien sind in der Anwendung [*Dateien*](https://apps.apple.com/us/app/files/id1232058109) sichtbar. Sie können auf alle OsmAnd-Dateien zugreifen: [Tracks](../personal/tracks/manage-tracks.md), [Favoriten](../personal/favorites.md), [Karten](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Folgen Sie dazu dem folgenden Pfad:  

Gehe zu: *Dateien → Auf meinem iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Allgemeine Einstellungen Speicher iOS](@site/static/img/personal/profiles/files-1.png) ![Allgemeine Einstellungen Speicher iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Karten-Rendering-Engine {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (nur Android)*

![Allgemeine Einstellungen Engine-Rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- In der **Android**-Version der App können Sie zwischen der Karten-Rendering-Version 1, die ursprünglich in der OsmAnd-App implementiert wurde, und der Version 2 wechseln, die die Programmierschnittstelle OpenGL (Open Graphics Library) zum Rendern von zwei- und dreidimensionalen grafischen Objekten verwendet.

- Die **iOS**-Version verwendet nur OpenGL für das Karten-Rendering.


| Funktionen | Version 1 | Version 2 (OpenGL) |
|:---|:--- |:--- |
| Plattformübergreifend | Wird in der iOS-Version nicht verwendet. | Passt für beide Versionen. |
| GPU-/CPU-abhängig | Empfohlen für leistungsschwache oder veraltete Geräte. | Leistungsstarke Rendering-Engine. <br /> Nur verfügbar für [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) und spätere Versionen sowie im Testmodus für [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D-Modus | Es ist möglich, die Karte in 2D anzuzeigen, und Sie können den Betrachtungswinkel ändern, um eine [3D-Ansicht](../widgets/map-buttons.md#3d-mode) zu erhalten. | Sie können die Karte in 2D und [3D](../widgets/map-buttons.md#3d-mode) anzeigen. |
| Kartenanzeige | Die gesamte Karte wird als Satz von Kacheln gerendert, und Markierungen, Linien und Text befinden sich bereits innerhalb dieser Kacheln. | Zuerst wird das gesamte Kachelpaket gerendert, und dann werden die verfügbaren Symbole [Schicht für Schicht](../../technical/algorithms/map-rendering-layers.md) auf die Karte angewendet. |
| Transparente Symbole über/unterlagern | Unterstützt alle Einstellungen. | Unterstützt keine Rasterebene über Vektortext. |
| [3D-Gelände](../map/raster-maps.md#3d-relief) | Nicht unterstützt. | Diese Funktion visualisiert das Gelände auf der Karte, indem sie einer normalen 2D-Karte Höheninformationen hinzufügt, was einen 3D- und Tiefeneffekt erzeugt. |
| [3D-Tracks](../map/tracks/appearance.md) | Nicht unterstützt. | Diese Funktion ermöglicht es Ihnen, Tracks nach Höhe über dem Meeresspiegel anzuzeigen. |
| [Online-Karte](../plugins/online-map.md) | Unterstützt nicht die Anzeige von Höhenlinien, wenn die Kartenquelle eine beliebige Online-Kachelkarte ist. | Wenn die Kartenquelle eine Online-Karte ist, werden auch 3D-Karten verwendet, und die Anzeige von Höhenlinien auf der Karte wird unterstützt. |
| [Wetter-Plugin](../plugins/weather.md) | Sie können dieses Plugin nicht verwenden. | Bequem mit dem Plugin zu verwenden. |  

Das Bild für die 3D-Ansicht der Karte wird Kachel für Kachel geladen, dann alle Symbole. Die Rendergeschwindigkeit der Karte hängt von der Anzahl der 2D- und 3D-Grafikobjekte darauf und direkt von der Leistung Ihrer Hardware ab. Daher kann Version 2 (OpenGL) nicht auf leistungsschwachen Geräten verwendet werden.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="Rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="Rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="Rendering"/></td>
    </tr>
</table>


## Datenschutz und Sicherheit {#privacy-and-security}

OsmAnd ermöglicht es Ihnen zu wählen, ob Sie Ihre *[In-App-Aktivitäten](#analytics)* und [Identifikatoren](#identifiers) (*nur Android*) in der App teilen, Ihren *[Verlauf](#history)* bearbeiten und einen *[Proxy](#proxy)* (*nur Android*) Ihrer Wahl verwenden möchten.  

:::note
Weitere Informationen finden Sie in der [*OsmAnd Datenschutz- und Sicherheitsrichtlinie*](../../legal/privacy-policy.md)
:::

### Analytik {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Allgemeine Einstellungen Analytik Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Allgemeine Einstellungen Anonyme Daten senden iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Die Einstellung **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) oder **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) ermöglicht es Ihnen zu wählen, ob Sie anonyme Daten über *Heruntergeladene Karten* und *Besuchte Bildschirme* (*Android*) bereitstellen möchten.  

:::note
Daten über Ihren Standort oder die Orte, die Sie auf der Karte ansehen, werden nicht erfasst.
:::  

### Identifikatoren {#identifiers}

<InfoAndroidOnly />

*Menü → Einstellungen → OsmAnd-Einstellungen → Datenschutz und Sicherheit → Identifikatoren*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Eine **UUID** (*Unique User Identifier* - Eindeutige Benutzerkennung) wird für jede Installation der OsmAnd-Anwendung generiert und während des Ladens der Karte an die Server gesendet.

- Eine zufällige UUID wird verwendet, um Offline-Karten von OsmAnd-Servern herunterzuladen, um die rationelle Nutzung von Serverressourcen zu steuern, die Verkehrsnutzung vorherzusagen und allgemeine monatliche Berichte über Karten-Downloads bereitzustellen.
- Die UUID ändert sich alle 3 Monate.  
- Ab der OsmAnd-Version 4.3 können Sie die Erfassung von Benutzerdaten bei der Nutzung der OsmAnd-App deaktivieren. Dann wird die UUID bei keiner Download-Anfrage gesendet.  
- Weitere Informationen finden Sie in den [Nutzungsbedingungen (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Verlauf {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Allgemeine Einstellungen Verlauf Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Allgemeine Einstellungen Verlauf Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Allgemeine Einstellungen Verlauf iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Allgemeine Einstellungen Verlauf iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Die Anwendung zeichnet den Verlauf zuvor eingegebener Daten (Verlauf) in den folgenden Kategorien auf: [Suche](../search/search-history.md), [Navigation](../navigation/setup/route-navigation.md#history-of-previous-routes), [Kartenmarkierungen](../personal/markers.md#history). Mit dem Schalter auf der entsprechenden Registerkarte können Sie die Protokollierung für bestimmte Kategorien von Einträgen *Aktivieren / Deaktivieren*. Sie können auch zuvor aufgezeichnete Daten [verwalten](#history) (anzeigen, löschen und teilen).  

- ***Als Datei sichern*** (*Android*) oder ***Exportieren*** (*iOS*) wird verwendet, um [eine Sicherungsdatei](../personal/import-export.md#export) Ihres Verlaufs zu erstellen.
- ***Gesamten Verlauf löschen*** (*Android*) oder ***Gesamten Verlauf löschen*** (*iOS*) wird verwendet, um alle bis zum Zeitpunkt des Löschens aufgezeichneten Verlaufseinträge zu löschen.

<br/>

**Verlauf teilen und löschen.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Allgemeine Einstellungen Verlauf Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Allgemeine Einstellungen Verlauf iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Allgemeine Einstellungen Verlauf iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Sie können einen oder mehrere Einträge aus der Verlaufsliste löschen oder als Datei teilen (um auf diese Funktionen *in iOS* zuzugreifen, tippen Sie auf die Schaltfläche ***Bearbeiten***).  
- Um mehrere Einträge gleichzeitig zu löschen oder zu exportieren, aktivieren Sie die Kontrollkästchen neben den gewünschten Einträgen und tippen Sie auf die Schaltflächen **Exportieren** oder **Löschen**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Allgemeine Einstellungen Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Die Einstellung **<Translate android="true" ids="proxy_pref_title"/>** ermöglicht es Ihnen, einen [HTTP-Proxy](https://en.wikipedia.org/wiki/Proxy_server) für alle Netzwerkanfragen zu konfigurieren. Sie können den *Proxy-Host* und den *Proxy-Port* einstellen.  


## Sonstiges {#other}

In diesem Abschnitt der OsmAnd-Einstellungen können Sie die Benachrichtigungen, die Sie erhalten, den Ortungsdienst und die Art und Weise, wie Ihre Anwendungseinstellungen gespeichert werden, konfigurieren.

### Dialoge und Benachrichtigungen {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Allgemeine Einstellungen Benachrichtigungen Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Allgemeine Einstellungen Dialoge iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Die Einstellung **<Translate android="true" ids="dialogs_and_notifications_title"/>** ermöglicht es Ihnen, Pop-ups, Dialoge und Benachrichtigungen zu aktivieren/deaktivieren.  

- *Startmeldung* enthält Werbeaktionen, Quizze, Veranstaltungen und mehr.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) unterdrückt die Anzeige von App-Rabatten und Nachrichten zu speziellen lokalen Ereignissen.
- Der [*Karten-Download-Dialog*](../start-with/download-maps.md#downloading-maps) informiert Sie darüber, dass bestimmte Karten heruntergeladen werden können.


### Standortquelle {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (nur Android)

![Standortquelle](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd bietet Ihnen eine Auswahl an Diensten zur Bestimmung Ihres Standorts. Es wird empfohlen, weitere Informationen zur [Standortberechtigung](../start-with/first-steps.md#permission-to-access-the-location) und zur [Fehlerbehebung](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) für diesen Abschnitt zu lesen.

***Android***:

- Sie können wählen, welche *Google Play*- oder *Android API*-Dienste OsmAnd zur Bestimmung Ihres Standorts verwenden soll. Dies kann für Geräte ohne *Google Play Services* oder bei ungenauen Standort- oder Höhendaten während der Aufzeichnung von Tracks nützlich sein.
- OsmAnd empfängt Daten von den Ressourcen *Google Fused Location Providers* und *Android GPS and Network Providers*. Sie können **<Translate android="true" id="location_source" />** umschalten in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Das iOS-System verwendet die *iOS API* zur Standortbestimmung.  
- Alle Einstellungen für den OsmAnd-Standort finden Sie in den iOS-Geräteeinstellungen: *Einstellungen → OsmAnd Maps → Standort*  
- Datenschutz der Ortungsdienste: *Einstellungen → Datenschutz → Ortungsdienste*


### Automatische Sicherung {#auto-backup}

<InfoAndroidOnly />

![Allgemeine Einstellungen Automatische Sicherung Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android oder OsmAnd Cloud können Ihre Daten und App-Einstellungen speichern.

- Standardmäßig werden Ihre *OsmAnd-Einstellungen* und [*Favoriten*](../personal/favorites.md#automatic-favorites-backup)-Kartenmarkierungen automatisch vom Android-System gesichert. Dies ermöglicht es Ihnen, sie auf neuen Geräten oder nach einer Neuinstallation der App wiederherzustellen.

- Bitte beachten Sie, dass die Sicherungsgröße auf *25 MB* beschränkt ist.

- Um die Sicherungsdateien zu finden, verwenden Sie eine Dateimanager-App von Drittanbietern.  
    *HINWEIS: Sie können die Sicherungsdateien mit dem Android-Dateimanager finden: Android → data → net.osmand → files → backup, aber beachten Sie, dass in neueren Android-Versionen der Zugriff auf Systemverzeichnisse eingeschränkt ist.*  

**Wenn Sie [*OsmAnd Cloud*](../personal/osmand-cloud.md) verwenden, wird empfohlen, diese standardmäßige Sicherungsoption zu deaktivieren, um Verwirrung bei der Neuinstallation zu vermeiden.**


## Rechtliches {#legal}

OsmAnd kann Sie [vor Radarkameras warnen](../navigation/guidance/navigation-settings.md#screen-alerts), aber nur, wenn die Gesetze in Ihrem Land dies erlauben.


### Radarkameras deinstallieren {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Allgemeine Einstellungen Kameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Allgemeine Einstellungen Kameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Allgemeine Einstellungen Kameras iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Allgemeine Einstellungen Kameras iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Mit dieser Einstellung können Sie POIs mit Radarkameras aktivieren oder deaktivieren. Sie müssen die OsmAnd-Anwendung neu starten, damit die Änderungen wirksam werden.
  
In einigen Ländern oder Regionen ist die Verwendung von Anwendungen zur Warnung vor Radarkameras illegal. Sie müssen eine Wahl treffen, die von den Gesetzen in Ihrem Land abhängt. Wählen Sie **Aktiv lassen**, und Sie erhalten Warnungen und Benachrichtigungen zu Radarkameras. Wählen Sie **Deinstallieren**, und alle Daten im Zusammenhang mit Radarkameras, wie Warnungen, Benachrichtigungen und POIs, werden gelöscht, bis Sie OsmAnd vollständig neu installieren.  

Lesen Sie mehr über Warnungen vor Radarkameras auf Ihrer Route im Artikel Navigations-Widgets im Abschnitt *[Warn-Widget](../widgets/nav-widgets.md#alert-widget)*.


## Verwandte Artikel {#related-articles}

- [Profile (Einstellungen)](./profiles.md)
- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)

### Fehlerbehebung {#troubleshooting}

- **Android 12+ (Speicherordner ändern)**. In den Android-Versionen 11-12 wurden neue Richtlinien für den Speicherzugriff implementiert. Diese Änderungen betreffen insbesondere die Speicherung von Karten auf SD-Karten, was zu einer deutlich langsameren Dateizugriffsleistung und strengeren Zugriffsbeschränkungen auf SD-Kartenordner auf Android 11 und 12 führt. Wie Sie dieses Problem lösen können, erfahren Sie im Abschnitt [**Fehlerbehebung**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Standortquelle für Höhenprobleme**. Google Play hat seine Richtlinien geändert, und um diesen zu entsprechen, muss OsmAnd ab Version 3.9 Google Play Services verwenden, um Standortkorrekturen im Hintergrund zu erhalten. Lesen Sie weitere Informationen im Abschnitt [Fehlerbehebung](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).