---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title: Erste Schritte
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Überblick {#overview}

Willkommen bei OsmAnd (OpenStreetMap Automated Navigation Directions)!

Erfahren Sie, wie Sie Karten herunterladen, die Anwendung konfigurieren, die Karte verwenden und eine Route erstellen, die Navigation starten und Points of Interest suchen. Machen Sie sich mit den wichtigsten Punkten der OsmAnd-Datenschutzrichtlinie und den erforderlichen Berechtigungen vertraut.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Navigation Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Offline-Navigation iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## OsmAnd installieren {#install-osmand}

OsmAnd ist eine mobile Anwendung für Karten und Navigation, die für **Android** und **iOS** verfügbar ist. Sie können sie in den gängigsten Stores herunterladen.

**Android-Stores**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) und [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Lesen Sie mehr](../purchases/index.md) über OsmAnd-Versionen und Käufe.


## Willkommen bei OsmAnd {#welcome-to-osmand}

Unser Ziel ist es, eine voll funktionsfähige kartenorientierte Anwendung zu entwickeln, die für verschiedene Zwecke offline und online genutzt werden kann. Die Anwendung verfügt über viele Funktionen, sodass Sie nicht zwischen verschiedenen Apps wechseln müssen und alles direkt zur Hand haben.

- Eine Weltkarte mit vielen Details, die in [verschiedenen Kartenstilen](../map/vector-maps.md) angezeigt werden.
- Anzeigen, [Suchen](../search/search-poi.md) und Speichern verschiedener [Points of Interest](../map/point-layers-on-map.md).
- [Eine Route planen](../plan-route/create-route.md) mit Auto, Fahrrad, zu Fuß und Kombination zu multimodalen Routen.
- [Sprachgeführte Navigation](../navigation/guidance/voice-navigation.md) starten, wenn Sie den Bildschirm ein- und ausschalten.
- Machen Sie Ihre touristische Reise reichhaltig mit Offline-[Wikipedia](../plugins/wikipedia.md) und [Wikivoyage](../plan-route/travel-guides.md).
- Vollständige Anpassung der [Kartenanzeige](../map/configure-map-menu.md) und der darauf angezeigten [Widgets](../widgets/index.md).
- Navigieren [nach Route](../navigation/setup/route-navigation.md), [nach einer gegebenen Strecke](../navigation/setup/gpx-navigation.md), [mit öffentlichen Verkehrsmitteln](../navigation/routing/public-transport-navigation.md) und [Offroad](../navigation/setup/markers-navigation.md).
- Alles funktioniert **offline**.
- Und vergessen Sie nicht, zu [OpenStreetMap](https://www.openstreetmap.org/) mit dem [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md) beizutragen.


## Handlungsanleitung {#actions-guide}

### Berechtigung zum Zugriff auf den Standort {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Präziser Standort Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Präziser Standort iOS](@site/static/img/steps/first_start_ios.png) ![Präziser Standort iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Wir empfehlen Ihnen, OsmAnd die Berechtigung zu erteilen, Informationen über den genauen Standort Ihres Geräts zu erhalten. Wir sammeln, verwenden oder teilen Ihre privaten Informationen nicht, daher ist der Zugriff auf die genaue Geolokalisierung für die korrekte Offline-Funktion der Suche, Navigation und anderer OsmAnd-Funktionen erforderlich.


### Karten herunterladen {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Auf der Karte anzeigen](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Auf der Karte anzeigen](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App funktioniert mit verschiedenen Kartentypen, kann aber nur vollständig mit heruntergeladenen Offline-Karten funktionieren. Daher werden Sie nach dem *<Translate android="true" ids="get_started"/>*-Bildschirm aufgefordert, die [*Karte Ihrer Region herunterzuladen*](../start-with/download-maps.md#initial-setup-screen). Sie können eine andere Region wählen, aus [OsmAnd Cloud](../personal/osmand-cloud.md) wiederherstellen oder diesen Schritt überspringen und Karten später herunterladen.
Weitere verfügbare Optionen zum Herunterladen von Karten finden Sie im [Artikel Karten herunterladen](../start-with/download-maps.md).

:::note Mit Offline-Karten arbeiten
OsmAnd kann ohne heruntergeladene Offline-Karten nicht korrekt funktionieren. Obwohl die Anwendung [Vektor-](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md) unterstützt, wird dringend empfohlen, mit Vektor-Offline-Karten zu beginnen, damit alle Funktionen wie [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md) ordnungsgemäß funktionieren.
:::


### Karten für die ganze Welt herunterladen {#how-download-maps-for-the-whole-world}

Obwohl OsmAnd es Ihnen ermöglicht, Karten für alle verfügbaren Regionen herunterzuladen, gibt es kein einzelnes Paket, um die gesamte Welt auf einmal herunterzuladen. Stattdessen können Sie einzelne Länder- oder Regionenkarten nach Ihren Bedürfnissen herunterladen.

***Wichtige Punkte:***

- **OsmAnd Pro** und **Maps+** bieten **unbegrenzte Karten-Downloads**, aber Sie müssen die Karten weiterhin Region für Region herunterladen.
- **Speicherbeschränkungen.** Stellen Sie sicher, dass Ihr Gerät über ausreichend Speicherplatz verfügt, bevor Sie mehrere Regionen herunterladen.
- **Automatische Updates.** Einmal heruntergeladen, können Karten über *Menü → Karten & Ressourcen → Updates* aktualisiert werden.


### App-Sprache ändern {#how-to-change-app-language}

Die Option *Anzeigesprache* wird verwendet, um die Sprache der gesamten App zu ändern, einschließlich Pop-up-Aufforderungen, internem Text, Nachrichten und mehr. Bis Android 12 können Sie in OsmAnd die Anzeigesprache direkt in der App an Ihre Vorlieben anpassen. Ab Android 13 und auf iOS-Geräten kann die Anzeigesprache nur in den Systemeinstellungen geändert werden (siehe wie Sie die Spracheinstellungen pro App in [Android](https://developer.android.com/guide/topics/resources/app-languages) und [iOS](https://developer.apple.com/news/?id=u2cfuj88) ändern).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Einstellungen → Apps → OsmAnd → Sprache*

![Allgemeine Einstellungen Sprache Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Einstellungen → OsmAnd Maps → Sprache*

![Allgemeine Einstellungen Sprache iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Keine Option zum Festlegen von App-Sprachen
Auf einigen Android-Geräten (Xiaomi mit Muiu 14) gibt es keine Option, App-Sprachen einzeln in den Systemeinstellungen festzulegen, sodass die Sprache von OsmAnd nur mit der Sprache des gesamten Systems geändert werden kann. Sie können die Diskussion auf [GitHub](https://github.com/osmandapp/OsmAnd/issues/16990) für weitere Informationen einsehen.
:::


### Einstellungen verwalten {#how-to-manage-your-settings}

Sie können die Anwendungseinstellungen als [Globale Einstellungen](../personal/global-settings.md) oder als [Profilkonfiguration](../personal/profiles.md) über das [Hauptmenü](../start-with/main-menu.md) verwalten. Die Anwendung wird mit einer vordefinierten Liste von Profilen geliefert, die später geändert werden können. Jedes Profil kann als eine angepasste Kartenanwendung für bestimmte Zwecke betrachtet werden. Standardmäßig dienen Profile nur als verschiedene Navigationsmodi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profil verwalten Android](@site/static/img/settings/manage_profile_android.png) ![Profil konfigurieren Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profil verwalten iOS](@site/static/img/settings/manage_profile_ios.png) ![Profil konfigurieren iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../personal/global-settings.md) über globale Einstellungen.
[Lesen Sie mehr](../personal/profiles.md) über Profileinstellungen.


### Plugins konfigurieren {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) erweitern die Anwendungsfunktionalität erheblich. Fast alle Plugins haben ihre eigenen [Kartenaktionen](../map/map-context-menu.md), [Kartenebenen](../map/configure-map-menu.md), [Karten-Downloads](../start-with/download-maps.md) und [Einstellungen](../plugins/#plugin-settings).

Sie können Plugins über das [Hauptmenü](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin) aktivieren/deaktivieren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugins aktivieren Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin-Beispiel Android](@site/static/img/settings/plugin_example_android.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Aktivieren

</TabItem>

<TabItem value="ios" label="iOS">

![Plugins aktivieren iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin-Beispiel iOS](@site/static/img/settings/plugin_example_ios.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/index.md#configure-plugin) über OsmAnd-Plugins.


### Karte verwenden {#how-to-use-a-map}

Die Karte ist ein Kernelement von OsmAnd, und es ist wichtig zu wissen, [wie man sie benutzt](../map/interact-with-map.md) (Gesten, Schaltflächen usw.). Sie können die [Karte an Ihre Bedürfnisse anpassen](../map/configure-map-menu.md): [Kartenstil ändern](../map/configure-map-menu.md#map-style-parameters), verschiedene [Kartenebenen](../map/configure-map-menu.md#map-layers) konfigurieren, wie Favoriten, POI, öffentliche Verkehrsmittel, Tracks, Höhenlinien, Schummerung und andere.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte konfigurieren Android](@site/static/img/settings/configure_map_menu_android.png) ![Karte konfigurieren Beispiel Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte konfigurieren iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Karte konfigurieren Beispiel iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/configure-map-menu.md) über die Kartenkonfiguration.


### Bildschirm konfigurieren {#how-to-configure-screen}

[Bildschirm konfigurieren](../widgets/configure-screen.md) ermöglicht es Ihnen, [Informations-](../widgets/info-widgets.md) (Höhe, Geschwindigkeit, aktuelle Zeit usw.) und [Navigations-Widgets](../widgets/nav-widgets.md) (Ziel, Peilung, Ankunftszeit usw.), [Schnellaktionen](../widgets/quick-action.md) und andere Elemente zu aktivieren, die über der Karte angezeigt werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bildschirm konfigurieren Android](@site/static/img/widgets/configure_screen_android.png) ![Bildschirm konfigurieren Beispiel Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bildschirm konfigurieren iOS](@site/static/img/settings/configure_screen_ios.png) ![Bildschirm konfigurieren Beispiel iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../widgets/configure-screen.md) über die Bildschirmkonfiguration.


### Persönliche Daten zu Karten hinzufügen {#how-to-add-personal-data-to-maps}

OsmAnd ermöglicht es Ihnen, verschiedene Markierungen auf der Karte für Ihre persönlichen Bedürfnisse zu setzen. Zum Beispiel [Favoritenpunkte](../personal/favorites.md) – persönliche Punkte mit Name, Symbol und Kategorie, [Markierungen](../personal/markers.md) – schnell hinzugefügte Punkte als Ziel, [Audio-/Video-Notizen](../plugins/audio-video-notes.md) – Mediennotizen, die an einem bestimmten Punkt aufgenommen wurden, [Tracks](../personal/tracks/manage-tracks.md) – aufgenommene und importierte Tracks & Touren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Persönliche Daten hinzufügen Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Persönliche Daten hinzufügen iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/point-layers-on-map.md) über Punkte auf der Karte.


### Points of Interest durchsuchen & finden {#how-to-browse--find-point-of-interest}

[Points of Interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sind Einrichtungen, die auf der Karte gesucht oder hervorgehoben werden können. Sie stellen interessante oder nützliche Orte dar und werden als Teil von [Vektorkarten](../map/vector-maps.md) verteilt. Sie können sie verwenden, um [auf der Karte anzuzeigen](../map/point-layers-on-map.md#points-of-interest-pois), [zu navigieren](../navigation/index.md) und [Points of Interest auf der Karte zu suchen](../search/search-poi.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mehrfach-POI-Auswahl](@site/static/img/map/multiple_selection_android.png) ![POI suchen und anzeigen Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mehrfach-POI-Auswahl](@site/static/img/settings/multiple_selection_iOS.png) ![POI suchen und anzeigen iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../search/search-poi.md) über die POI-Suche.


### Route planen {#how-to-plan-a-route}

[Routenplanung](../plan-route/create-route.md) ist ein leistungsstarkes Werkzeug, mit dem Sie eine Reise erstellen, eine vorhandene Strecke bearbeiten und Entfernungen vor Ort messen können. Sie können schnell Zwischenpunkte setzen und diese durch verschiedene Navigationslinien (Fahrrad, Fußgänger, gerade Linie usw.) verbinden. Die Ergebnisse können in einer GPX-Datei gespeichert werden, sodass sie [geteilt](../personal/tracks/index.md) oder später [für die Navigation verwendet](../navigation/setup/gpx-navigation.md) werden können.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/settings/plan_route_android.png) ![Route planen Diagramm Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plan-route/create-route.md) über die Routenplanungsfunktion.


### Nach Adresse suchen {#how-to-search-by-address}

OsmAnd bietet viele Suchfunktionen, einschließlich der Adresssuche. Standardmäßig verwendet es [OpenStreetMap-Daten](https://nominatim.openstreetmap.org/ui/search.html) und sollte in der Lage sein, alle Adressen über die Schnellsuchfunktion zu finden. Sie können auch [nach Stadt, Straße, Postleitzahl und Koordinaten suchen](../search/search-address.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adresssuche Android](@site/static/img/settings/address_search_android.png) ![Suchergebnis Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adresssuche iOS](@site/static/img/settings/address_search_ios.png) ![Suchergebnis iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Sie müssen die Karte herunterladen, bevor Sie dort nach einer Adresse suchen können. Wenn Ihr aktueller Standort zu weit von Ihrer Suchadresse entfernt ist, müssen Sie möglicherweise den Suchradius erhöhen.
:::

[Lesen Sie mehr](../search/search-address.md) über die Adresssuche.


### Navigation starten {#how-to-start-navigation}

[Navigation](../navigation/index.md) bietet Ihnen eine Schritt-für-Schritt-Anleitung zu Ihrem Ziel, indem sie die Route anzeigt, Abbiegeanweisungen, zusätzliche Straßeninformationen zu Oberfläche, Glätte usw. und optional eine Sprachführung bietet.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation starten Android](@site/static/img/settings/start_navigation_android.png) ![Routengraph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation starten iOS](@site/static/img/settings/start_navigation_ios.png) ![Routengraph iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../navigation/index.md) über Navigation.


### Reise aufzeichnen {#how-to-record-your-trip}

[Reiseaufzeichnung](../plugins/trip-recording.md) ist ein spezielles Werkzeug, das als OsmAnd-Plugin verpackt ist und es Ihnen ermöglicht, alle Bewegungen auf der Strecke mithilfe des GPS des Geräts aufzuzeichnen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reiseaufzeichnung Android](@site/static/img/settings/trip_recording_android.png) ![Übersicht Reiseaufzeichnung Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseaufzeichnung starten iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Reiseaufzeichnungsmenü iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/trip-recording.md) über die Reiseaufzeichnung.


### Karten bearbeiten {#how-to-edit-maps}

OsmAnd basiert auf [OpenStreetMap](https://www.openstreetmap.org/)-Daten. Die Karten werden von freiwilligen Mitwirkenden erstellt, sodass sie je nachdem, wie viel Arbeit an einem bestimmten Teil der Karte geleistet wurde, mehr oder weniger Details aufweisen können. Jeder kann sich als Mitwirkender registrieren und OSM-Karten hinzufügen oder bearbeiten. OsmAnd bietet ein Bearbeitungs-Plugin, das zur Verbesserung von OpenStreetMap beiträgt.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OSM-Notiz Android](@site/static/img/settings/osm_note_android.png) ![POI erstellen Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM-Notiz iOS](@site/static/img/settings/osm_note_ios.png) ![POI erstellen iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/osm-editing.md) über die OSM-Bearbeitung.


### App schließen {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Es gibt zwei verfügbare Varianten, wie man OsmAnd schließt.

1. Schließen Sie eine App, indem Sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.

2. Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, andernfalls läuft OsmAnd im Hintergrund:
    - [Navigation beenden](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Karten-Download und -Aktualisierung stoppen](../start-with/download-maps.md)
    - [Reiseaufzeichnung stoppen](../plugins/trip-recording.md#create-new-track)
    - [Audio-/Video-Notiz-Aufzeichnung stoppen](../plugins/audio-video-notes.md)

3. *Erzwingen des Stopps* Funktion:
    - Langes Tippen auf das *OsmAnd-Symbol → **i**-Taste → Stopp erzwingen*.
    - Öffnen Sie die Einstellungen und tippen Sie auf *Apps & Benachrichtigungen → OsmAnd → Stopp erzwingen*.

</TabItem>

<TabItem value="ios" label="iOS">

Schließen Sie eine App, indem Sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.

Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, andernfalls läuft OsmAnd im Hintergrund:

- [Navigation abbrechen](../navigation/setup/route-navigation.md)
- [Karten-Download und -Aktualisierung stoppen](../start-with/download-maps.md)
- [Reiseaufzeichnung stoppen](../plugins/trip-recording.md#create-new-track)
- [Audio-/Video-Notiz-Aufzeichnung stoppen](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## App-Verknüpfungen {#app-shortcuts}

<InfoAndroidOnly/>

[Anwendungsverknüpfungen](https://support.google.com/android/answer/9450271) sind für das OsmAnd-Symbol verfügbar. Tippen Sie einfach lange auf das OsmAnd-Symbol auf Ihrem Gerätebildschirm, um das Menü der Anwendungsverknüpfungen zu öffnen. Hier können Sie kurz drücken, um die folgenden Aktionen auszuwählen: *Nach Hause navigieren*, *Zur Arbeit navigieren*, *Aufzeichnung starten*, *Suchen*, *Meine Orte*, *Navigieren zu*. Langes Tippen auf eine Aktion ermöglicht es Ihnen, ein neues Aktionssymbol zu Ihrem Gerätebildschirm hinzuzufügen.

Tippen Sie auf ein Aktionssymbol, um die Anwendung sofort mit der ausgewählten Aktion zu starten.

![Verknüpfungen](@site/static/img/steps/shortcuts_3_andr.png) ![Verknüpfungen](@site/static/img/steps/shortcuts_4_andr.png)


## Offline-Hilfe {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

Im *Hilfe-Menü* finden Sie Artikel von unserer Website [www.osmand.net/docs](https://osmand.net/docs/intro/). Nach dem ersten Download (Internetverbindung erforderlich) sind die Hilfeartikel offline verfügbar.
Der erste Unterabschnitt, *Offline-Hilfe*, enthält die **meistgesehenen** (oder beliebtesten) Artikel unter unseren Benutzern. Die Abschnitte **Benutzerhandbuch** und **Fehlerbehebung** haben die gleiche Struktur wie auf der Website.
Im *Hilfe-Menü* finden Sie auch nützliche Links zu OsmAnd-Social-Media-Kanälen, Versionsinformationen zu Ihrer Anwendung, Versionshinweise und Support-Kontakte. Über die Hilfe können Sie auch [Logcat- und Absturzprotokolle](../troubleshooting/crash-logs.md#crash-and-logcat-logs) senden.

### Menü {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Absturzprotokoll senden** (*für Android*). Ermöglicht Benutzern, Berichte über App-Abstürze an Entwickler zu senden, um die Identifizierung und Behebung von Problemen zu unterstützen.
- **Logcat-Protokoll senden** (*für Android*). Bietet Benutzern die Möglichkeit, detaillierte Protokolle von App-Abstürzen an Entwickler zu senden, um eine tiefere Analyse und Fehlerbehebung zu ermöglichen.
- **Protokoll senden** (*für iOS*). Führt eine ähnliche Funktion wie die *Absturzprotokoll senden*-Funktion für Android aus und ermöglicht es Benutzern auf iOS-Geräten, App-Abstürze an Entwickler zur Fehlerbehebung zu melden.
- **Build-Version kopieren**. Ermöglicht Benutzern, die aktuelle Version der App schnell und genau an Entwickler zu übermitteln, wenn sie Probleme melden, was den Diagnose- und Lösungsprozess vereinfacht.


### Meistgesehen {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Die meistgesehenen Artikel unter unseren Nutzern beziehen sich auf die Artikel in der App oder auf der Website, die die meisten Aufrufe oder Benutzerinteraktionen erhalten haben. Diese Metrik hilft dabei, Inhalte zu identifizieren, die für Ihre Nutzer besonders interessant oder nützlich sind. Sie kann wertvolle Einblicke in die Benutzerpräferenzen und -interessen liefern, sodass Entwickler und Inhaltsersteller zukünftige Inhalte besser auf die Bedürfnisse des Publikums zuschneiden können. Darüber hinaus kann die Hervorhebung beliebter Artikel neuen Nutzern helfen, wertvolle Ressourcen innerhalb der App zu finden.


### Benutzerhandbuch {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Der Abschnitt **Benutzerhandbuch** im Hilfemenü ist ein vollständiges Handbuch, das der Struktur der OsmAnd-Website folgt und die Konsistenz der Informationen und die einfache Navigation über alle Plattformen hinweg gewährleistet. Mithilfe der Hilfe können Sie einfach von der App zur Website navigieren und dieselben Inhalte in einer vertrauten Organisation finden. Diese Konsistenz verbessert die Benutzerfreundlichkeit, indem sie eine einzige Supportressource bereitstellt, um schnell Antworten auf Fragen zu finden und Probleme zu beheben.


### Fehlerbehebung {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Lösungen und Tipps zur Behebung häufiger Probleme. Wenn Sie eine spezifische Frage haben, überprüfen Sie bitte die [Fehlerbehebung](../troubleshooting/index.md), um eine Antwort zu erhalten.

- [Einrichtung](../troubleshooting/setup.md). Dies sind die Probleme, die bei der Einrichtung einer Anwendung am häufigsten auftreten.
- [Karten & Daten](../troubleshooting/maps-data.md). Probleme im Zusammenhang mit Karten, Suche und den restlichen Daten.
- [Navigation](../troubleshooting/navigation.md). Die häufigsten Probleme, die im Navigationsmodus auftreten.
- [Track-Aufzeichnung](../troubleshooting/track-recording-issues.md). Häufige Probleme im Zusammenhang mit der Track-Aufzeichnung wie Geräusche, Lücken und Ungenauigkeiten.
- [Allgemein](../troubleshooting/general.md). Häufige Probleme im Zusammenhang mit verschiedenen OsmAnd-Funktionen.
- [Absturzprotokolle](../troubleshooting/crash-logs.md). Wie man Absturzprotokolle an das OsmAnd-Team sendet.
- [Android Auto](../troubleshooting/android_auto.md) (*nur für Android*). Probleme mit der Auto-Navigation.

### Kontaktieren Sie uns {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Ermöglicht es Ihnen, Fragen zu stellen oder Vorschläge zu machen.

### Probleme melden {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Problem auf GitHub öffnen**. [Android-Version GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS-Version GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): Fragen stellen, Fehler melden und Funktionen vorschlagen.
- **Absturzprotokoll senden** (*für Android*). Enthält nur Informationen über Abstürze.
- [Logcat-Protokoll senden](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Protokoll senden](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Detaillierte Protokolldatei.

### Über OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Sie können mehr über unser Team erfahren, die aktuelle Version der App und Neuigkeiten sehen und die Beta-Version der App herunterladen.


## Datenschutz {#privacy}

Es handelt sich um eine [Open-Source](https://github.com/osmandapp/osmand), werbefreie/trackerfreie, auf den Datenschutz ausgerichtete Anwendung. Um maximale Privatsphäre zu gewährleisten, bietet OsmAnd Offline-Karten als erste Wahl an, sodass keine Interaktionen oder Geoinformationen von Ihrem Gerät nach außen dringen. Wir achten sehr darauf, welche Daten gesammelt und welche Daten über das Netzwerk übertragen werden. Weitere Informationen finden Sie in unserer [Datenschutzrichtlinie](https://osmand.net/help-online/privacy-policy).


## Berechtigungen {#permissions}

OsmAnd benötigt keine speziellen Berechtigungen für die iOS-/Android-Version.

**Wesentlich**:

- **Internet**. Erster Download / Update von Offline-Karten. Es könnte auch erforderlich sein, auf Online-Funktionen wie [Street Level Imagery](../map/point-layers-on-map.md#-street-level-imagery), [Online-Fotos](../map/map-context-menu.md#online-photos) oder [Online-Karten](../map/raster-maps.md) zuzugreifen.
- **GPS** / **GSM-Netzwerk**. Bestimmen Sie Ihren Standort, folgen Sie Ihnen im Navigationsmodus und zeichnen Sie Ihre Reise auf (optional). Diese Berechtigung wird angefordert, wenn Sie auf die Schaltfläche [Mein Standort](../widgets/map-buttons.md#my-location-and-zoom) klicken oder wenn Sie die [Navigation starten](../navigation/setup/route-navigation.md#start--stop-navigation).

**Optional**:

- **Kamera/Sprachaufzeichnung** (*Android*). Nur von den [Audio-/Video-Notizen](../plugins/audio-video-notes.md) verwendet. Diese Funktion ist als Plugin verpackt und standardmäßig deaktiviert. Sie ermöglicht es Ihnen, während einer Reise schnell standortbezogene Audio-/Video-Notizen zu erstellen.


> *Zuletzt aktualisiert: Januar 2025*