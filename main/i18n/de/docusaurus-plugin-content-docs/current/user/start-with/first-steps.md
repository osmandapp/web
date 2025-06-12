---
source-hash: 283b1a10b933b84495c848bb63483ec3d45f08c0f3f61e1a3329b1deae7cd6c3
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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline navigation Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Offline navigationiOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## OsmAnd installieren {#install-osmand}

OsmAnd ist eine mobile Anwendung für Karten und Navigation, die für **Android** und **iOS** verfügbar ist. Sie können sie von den beliebtesten Märkten herunterladen.

**Android-Märkte**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) und [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Lesen Sie mehr](../purchases/index.md) über OsmAnd-Versionen und Käufe.


## Willkommen bei OsmAnd {#welcome-to-osmand}

Wir möchten eine voll funktionsfähige kartenorientierte Anwendung erstellen, die für verschiedene Zwecke offline und online verwendet werden kann. Die Anwendung verfügt über viele Funktionen, sodass Sie nicht zwischen verschiedenen Apps wechseln müssen und alles zur Hand haben.

- Sehen Sie sich eine Weltkarte mit vielen Details an, die in [verschiedenen Kartenstilen](../map/vector-maps.md) angezeigt werden.
- Anzeigen, [Suchen](../search/search-poi.md) und Speichern verschiedener [Points of Interest](../map/point-layers-on-map.md).
- [Planen Sie eine Route](../plan-route/create-route.md) mit dem Auto, Fahrrad, zu Fuß und kombinieren Sie sie zu multimodalen Routen.
- Starten Sie die [sprachgeführte Navigation](../navigation/guidance/voice-navigation.md), wenn Sie den Bildschirm ein- und ausschalten.
- Machen Sie Ihre touristische Reise reichhaltig mit offline [Wikipedia](../plugins/wikipedia.md) und [Wikivoyage](../plan-route/travel-guides.md).
- Passen Sie vollständig an, wie [die Karte angezeigt wird](../map/configure-map-menu.md) und welche [Widgets](../widgets/index.md) darauf angezeigt werden.
- Navigieren Sie [nach Route](../navigation/setup/route-navigation.md), [nach einem bestimmten Track](../navigation/setup/gpx-navigation.md), [mit öffentlichen Verkehrsmitteln](../navigation/routing/public-transport-navigation.md) und [Off-Road](../navigation/setup/markers-navigation.md).
- Alles funktioniert **Offline**.
- Und vergessen Sie nicht, mit dem [OSM Editing Plugin](../plugins/osm-editing.md) zu [OpenStreetMap](https://www.openstreetmap.org/) beizutragen.


## Aktionsanleitung {#actions-guide}

### Berechtigung zum Zugriff auf den Standort {#permission-to-access-the-location}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Precise location android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Precise location iOS](@site/static/img/steps/first_start_ios.png) ![Precise location iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Wir empfehlen Ihnen, OsmAnd die Berechtigung zu erteilen, Informationen über den genauen Standort Ihres Geräts zu erhalten. Wir sammeln, verwenden oder teilen Ihre privaten Informationen nicht, daher ist der Zugriff auf die genaue Geolokalisierung für die korrekte Offline-Arbeit von Suche, Navigation und anderen OsmAnd-Funktionen erforderlich.


### Karten herunterladen {#how-to-download-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Show on the map](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show on the map](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App arbeitet mit verschiedenen Kartentypen, kann aber nur vollständig mit heruntergeladenen Offline-Karten funktionieren. Daher werden Sie nach dem Bildschirm *<Translate android="true" ids="get_started"/>* aufgefordert, die [*Karte herunterzuladen*](../start-with/download-maps.md#initial-setup-screen) Ihrer Region. Sie können eine andere Region auswählen, aus [OsmAnd Cloud](../personal/osmand-cloud.md) wiederherstellen oder diesen Schritt überspringen und Karten später herunterladen.
Weitere verfügbare Optionen zum Herunterladen von Karten finden Sie im [Artikel Karten herunterladen](../start-with/download-maps.md).

:::note Beginnen Sie mit Offline-Karten zu arbeiten
OsmAnd kann ohne heruntergeladene Offline-Karten nicht korrekt funktionieren. Obwohl die Anwendung [Vektor-](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md) unterstützt, wird dringend empfohlen, mit Vektor-Offline-Karten zu beginnen, damit alle Funktionen wie [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md) ordnungsgemäß funktionieren.
:::


### Karten für die ganze Welt herunterladen {#how-download-maps-for-the-whole-world}

OsmAnd ermöglicht Ihnen zwar das Herunterladen von Karten für alle verfügbaren Regionen, es gibt jedoch kein einzelnes Paket, um die gesamte Welt auf einmal herunterzuladen. Stattdessen können Sie einzelne Länder- oder Regionenkarten nach Ihren Bedürfnissen herunterladen.

***Wichtige Punkte:***

- **OsmAnd Pro** und **Maps+** bieten **unbegrenzte Karten-Downloads**, aber Sie müssen die Karten immer noch Region für Region herunterladen.
- **Speicherbeschränkungen.** Stellen Sie sicher, dass Ihr Gerät über genügend Speicherplatz verfügt, bevor Sie mehrere Regionen herunterladen.
- **Automatische Updates.** Einmal heruntergeladene Karten können über *Menü → Karten & Ressourcen → Updates* aktualisiert werden.


### App-Sprache ändern {#how-to-change-app-language}

Die Option *Anzeigesprache* wird verwendet, um die Sprache der gesamten App zu ändern, einschließlich Pop-up-Aufforderungen, internem Text, Nachrichten und mehr. Bis Android 12 können Sie in OsmAnd die Anzeigesprache direkt in der App nach Ihren Wünschen anpassen. Ab Android 13 und auf iOS-Geräten kann die Anzeigesprache nur in den Systemeinstellungen geändert werden (siehe wie Sie die Spracheinstellungen pro App in [Android](https://developer.android.com/guide/topics/resources/app-languages) und [iOS](https://developer.apple.com/news/?id=u2cfuj88) ändern).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *Einstellungen → Apps → OsmAnd → Sprache*

![General Settings Language Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Einstellungen → OsmAnd Maps → Sprache*

![General Settings Language iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Keine Option zum Festlegen von App-Sprachen
Auf einigen Android-Geräten (Xiaomi mit Muiu 14) gibt es keine Option, App-Sprachen einzeln in den Systemeinstellungen festzulegen, sodass die Sprache von OsmAnd nur mit der Sprache des gesamten Systems geändert werden kann. Weitere Informationen finden Sie in der Diskussion auf [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990).
:::


### Einstellungen verwalten {#how-to-manage-your-settings}

Sie können die Anwendungseinstellungen als [Globale Einstellungen](../personal/global-settings.md) oder als [Profilkonfiguration](../personal/profiles.md) über das [Hauptmenü](../start-with/main-menu.md) verwalten. Die Anwendung wird mit einer vordefinierten Liste von Profilen geliefert, die später geändert werden können. Jedes Profil kann als eine angepasste Kartenanwendung für bestimmte Zwecke betrachtet werden. Standardmäßig dienen Profile nur als verschiedene Navigationsmodi.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Manage profile Android](@site/static/img/settings/manage_profile_android.png) ![Configure profile Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage profile iOS](@site/static/img/settings/manage_profile_ios.png) ![Configure profile iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../personal/global-settings.md) über globale Einstellungen.
[Lesen Sie mehr](../personal/profiles.md) über Profileinstellungen.


### Plugins konfigurieren {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) erweitern die Anwendungsfunktionalität erheblich. Fast alle Plugins haben ihre eigenen [Kartenaktionen](../map/map-context-menu.md), [Kartenebenen](../map/configure-map-menu.md), [Kartendownloads](../start-with/download-maps.md) und [Einstellungen](../plugins/#plugin-settings).

Sie können Plugins über das [Hauptmenü](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin) aktivieren/deaktivieren.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Aktivieren

</TabItem>

<TabItem value="ios" label="iOS">

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/index.md#configure-plugin) über OsmAnd-Plugins.


### Karte verwenden {#how-to-use-a-map}

Die Karte ist ein Kernelement von OsmAnd, und es ist wichtig zu wissen, [wie man sie benutzt](../map/interact-with-map.md) (Gesten, Schaltflächen usw.). Sie können die [Karte nach Ihren Bedürfnissen konfigurieren](../map/configure-map-menu.md): [Kartenstil ändern](../map/configure-map-menu.md#map-style-parameters), verschiedene [Kartenebenen](../map/configure-map-menu.md#map-layers) konfigurieren, wie z. B. Favoriten, POI, öffentliche Verkehrsmittel, Tracks, Höhenlinien, Schummerung und andere.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configure map Android](@site/static/img/settings/configure_map_menu_android.png) ![Configure map example Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Configure map example iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/configure-map-menu.md) über die Kartenkonfiguration.


### Bildschirm konfigurieren {#how-to-configure-screen}

[Bildschirm konfigurieren](../widgets/configure-screen.md) ermöglicht es Ihnen, [Informations-](../widgets/info-widgets.md) (Höhe, Geschwindigkeit, aktuelle Zeit usw.) und [Navigations-Widgets](../widgets/nav-widgets.md) (Ziel, Peilung, Ankunftszeit usw.), [Schnellaktionen](../widgets/quick-action.md) und andere Elemente zu aktivieren, die über der Karte angezeigt werden.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configure screen Android](@site/static/img/widgets/configure_screen_android.png) ![Configure screen example Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure screen iOS](@site/static/img/settings/configure_screen_ios.png) ![Configure screen example iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../widgets/configure-screen.md) über die Bildschirmkonfiguration.


### Persönliche Daten zu Karten hinzufügen {#how-to-add-personal-data-to-maps}

OsmAnd ermöglicht es Ihnen, verschiedene Markierungen auf der Karte für Ihre persönlichen Bedürfnisse zu setzen. Zum Beispiel [Favoritenpunkte](../personal/favorites.md) - persönliche Punkte mit Namen, Symbol und Kategorie, [Marker](../personal/markers.md) - schnell hinzugefügte Punkte als Ziel, [Audio-/Video-Notizen](../plugins/audio-video-notes.md) - Mediennotizen, die an einem bestimmten Punkt aufgenommen wurden, [Tracks](../personal/tracks/manage-tracks.md) - aufgezeichnete und importierte Tracks & Touren.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add personal data Andoroid](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add personal data iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/point-layers-on-map.md) über Punkte auf der Karte.


### Points of Interest durchsuchen & finden {#how-to-browse--find-point-of-interest}

[Points of Interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sind Annehmlichkeiten, die gesucht oder auf der Karte hervorgehoben werden können. Sie stellen interessante oder nützliche Orte dar und werden als Teil von [Vektorkarten](../map/vector-maps.md) verteilt. Sie können sie verwenden, um sie [auf der Karte anzuzeigen](../map/point-layers-on-map.md#points-of-interest-pois), zu [navigieren](../navigation/index.md) und [Points of Interest auf der Karte zu suchen](../search/search-poi.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png) ![Search and display POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Multiple POI Selection](@site/static/img/settings/multiple_selection_iOS.png) ![Search and display POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../search/search-poi.md) über die POI-Suche.


### Route planen {#how-to-plan-a-route}

[Route planen](../plan-route/create-route.md) ist ein leistungsstarkes Werkzeug, mit dem Sie eine Reise erstellen, einen vorhandenen Track bearbeiten und die Entfernung vor Ort messen können. Sie können schnell Zwischenpunkte setzen und diese durch verschiedene Navigationslinien (Fahrrad, Fußgänger, gerade Linie usw.) verbinden. Die Ergebnisse können in einer GPX-Datei gespeichert werden, sodass sie später [geteilt](../personal/tracks/index.md) oder [von der Navigation verwendet](../navigation/setup/gpx-navigation.md) werden können.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan route Android](@site/static/img/settings/plan_route_android.png) ![Plan route graph Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan route iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plan-route/create-route.md) über die Funktion "Route planen".


### Nach Adresse suchen {#how-to-search-by-address}

OsmAnd bietet viele Suchfunktionen, einschließlich der Adresssuche. Standardmäßig verwendet es [OpenStreetMap-Daten](https://nominatim.openstreetmap.org/ui/search.html) und sollte in der Lage sein, alle Adressen über die Schnellsuchleiste zu finden. Sie können auch [nach Stadt, Straße, Postleitzahl und Koordinaten suchen](../search/search-address.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Address search Android](@site/static/img/settings/address_search_android.png) ![Search result Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Address search iOS](@site/static/img/settings/address_search_ios.png) ![Search result iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Sie müssen die Karte herunterladen, bevor Sie dort nach einer Adresse suchen. Wenn Ihr aktueller Standort zu weit von Ihrer Suchadresse entfernt ist, müssen Sie möglicherweise den Suchradius erhöhen.
:::

[Lesen Sie mehr](../search/search-address.md) über die Adresssuche.


### Navigation starten {#how-to-start-navigation}

[Navigation](../navigation/index.md) bietet Ihnen eine schrittweise Anleitung zu Ihrem Ziel, indem sie die Route anzeigt, Abbiegeanweisungen, zusätzliche Straßeninformationen über Oberfläche, Glätte usw. und optionale Sprachführung bietet.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Start navigation Android](@site/static/img/settings/start_navigation_android.png) ![Route graph Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start navigation iOS](@site/static/img/settings/start_navigation_ios.png) ![Route graph iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../navigation/index.md) über die Navigation.


### Reise aufzeichnen {#how-to-record-your-trip}

[Reiseaufzeichnung](../plugins/trip-recording.md) ist ein spezielles Werkzeug, das als OsmAnd-Plugin verpackt ist und es Ihnen ermöglicht, alle Bewegungen auf dem Track mithilfe des GPS des Geräts aufzuzeichnen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trip recording Android](@site/static/img/settings/trip_recording_android.png) ![Overview trip recording Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Start trip recording iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Trip recording menu iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/trip-recording.md) über die Reiseaufzeichnung.


### Karten bearbeiten {#how-to-edit-maps}

OsmAnd wird von [OpenStreetMap](https://www.openstreetmap.org/)-Daten betrieben. Die Karten werden von freiwilligen Mitwirkenden erstellt, sodass sie je nach Umfang der Arbeit an einem bestimmten Teil der Karte mehr oder weniger Details aufweisen können. Jeder kann sich als Mitwirkender registrieren und OSM-Karten hinzufügen oder bearbeiten. OsmAnd bietet ein Bearbeitungs-Plugin, das hilft, OpenStreetMap zu verbessern.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OSM note Android](@site/static/img/settings/osm_note_android.png) ![Create POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM note iOS](@site/static/img/settings/osm_note_ios.png) ![Create POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/osm-editing.md) über die OSM-Bearbeitung.


### App schließen {#how-to-close-the-app}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Es gibt zwei Möglichkeiten, OsmAnd zu schließen.

1. Schließen Sie eine App, indem Sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.

2. Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, da OsmAnd sonst im Hintergrund ausgeführt wird:
    - [Navigation beenden](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Karten-Download und -Aktualisierung stoppen](../start-with/download-maps.md)
    - [Reiseaufzeichnung stoppen](../plugins/trip-recording.md#create-new-track)
    - [Audio-/Video-Notiz-Aufzeichnung stoppen](../plugins/audio-video-notes.md)

3. Funktion *Erzwungen beenden*:
    - Langes Tippen auf das *OsmAnd-Symbol → **i**-Schaltfläche → Erzwingen beenden*.
    - Öffnen Sie die Einstellungen und tippen Sie auf *Apps & Benachrichtigungen → OsmAnd → Erzwingen beenden*.

</TabItem>

<TabItem value="ios" label="iOS">

Schließen Sie eine App, indem Sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.

Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, da OsmAnd sonst im Hintergrund ausgeführt wird:

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

![Shortcuts](@site/static/img/steps/shortcuts_3_andr.png) ![Shortcuts](@site/static/img/steps/shortcuts_4_andr.png)


## Offline-Hilfe {#offline-help}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

Im *Hilfemenü* finden Sie Artikel von unserer Website [www.osmand.net/docs](https://osmand.net/docs/intro/). Nach dem ersten Download (Internetverbindung erforderlich) sind die Hilfeartikel offline verfügbar.
Der erste Unterabschnitt, *Offline-Hilfe*, enthält die **Meistgesehenen** (oder beliebtesten) Artikel unter unseren Benutzern. Die Abschnitte **Benutzerhandbuch** und **Fehlerbehebung** haben die gleiche Struktur wie auf der Website.
Im *Hilfemenü* finden Sie auch nützliche Links zu OsmAnd-Social-Media, Versionsinformationen zu Ihrer Anwendung, Versionshinweise und Supportkontakte. Über die Hilfe können Sie auch [Logcat- und Absturzprotokolle senden](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Menü {#menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Absturzprotokoll senden** (*für Android*). Ermöglicht Benutzern, Berichte über App-Abstürze an Entwickler zu senden, um die Identifizierung und Behebung von Problemen zu unterstützen.
- **Logcat-Protokoll senden** (*für Android*). Bietet Benutzern die Möglichkeit, detaillierte Protokolle von App-Abstürzen an Entwickler zu senden, um eine tiefere Analyse und Fehlerbehebung zu ermöglichen.
- **Protokoll senden** (*für iOS*). Führt eine ähnliche Funktion wie die Funktion *Absturzprotokoll senden* für Android aus und ermöglicht es Benutzern auf iOS-Geräten, App-Abstürze an Entwickler zur Fehlerbehebung zu melden.
- **Build-Version kopieren**. Ermöglicht Benutzern, die aktuelle Version der App schnell und genau an Entwickler zu übermitteln, wenn sie Probleme melden, was den Diagnose- und Lösungsprozess vereinfacht.


### Meistgesehen {#most-viewed}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Die meistgesehenen Artikel unter unseren Benutzern beziehen sich auf die Artikel in der App oder auf der Website, die die meisten Aufrufe oder Benutzerinteraktionen erzielt haben. Diese Metrik hilft dabei, Inhalte zu identifizieren, die für Ihre Benutzer besonders interessant oder nützlich sind. Sie kann wertvolle Einblicke in Benutzerpräferenzen und Interessen liefern und es Entwicklern und Inhaltserstellern ermöglichen, zukünftige Inhalte besser an die Bedürfnisse des Publikums anzupassen. Darüber hinaus kann die Hervorhebung beliebter Artikel neuen Benutzern helfen, wertvolle Ressourcen innerhalb der App zu finden.


### Benutzerhandbuch {#user-guide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Der Abschnitt **Benutzerhandbuch** im Hilfemenü ist ein vollständiges Handbuch, das der Struktur der OsmAnd-Website folgt und so die Konsistenz der Informationen und die einfache Navigation über Plattformen hinweg gewährleistet. Mit der Hilfe können Sie einfach von der App zur Website navigieren und denselben Inhalt in vertrauter Organisation finden. Diese Konsistenz verbessert die Benutzerfreundlichkeit, indem sie eine einzige Supportressource bietet, um schnell Antworten auf Fragen zu finden und Probleme zu beheben.


### Fehlerbehebung {#troubleshooting}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Lösungen und Tipps zur Behebung häufiger Probleme. Wenn Sie eine spezifische Frage haben, überprüfen Sie bitte die [Fehlerbehebung](../troubleshooting/index.md), um eine Antwort zu erhalten.

- [Einrichtung](../troubleshooting/setup.md). Bei der Einrichtung einer Anwendung treten am häufigsten diese Probleme auf.
- [Karten & Daten](../troubleshooting/maps-data.md). Probleme im Zusammenhang mit Karten, Suche und den restlichen Daten.
- [Navigation](../troubleshooting/navigation.md). Die häufigsten Probleme, die im Navigationsmodus auftreten.
- [Track-Aufzeichnung](../troubleshooting/track-recording-issues.md). Häufige Probleme im Zusammenhang mit der Track-Aufzeichnung wie Rauschen, Lücken und Ungenauigkeiten.
- [Allgemein](../troubleshooting/general.md). Häufige Probleme im Zusammenhang mit verschiedenen OsmAnd-Funktionen.
- [Absturzprotokolle](../troubleshooting/crash-logs.md). So senden Sie Absturzprotokolle an das OsmAnd-Team.
- [Android Auto](../troubleshooting/android_auto.md) (*nur für Android*). Probleme bei der Auto-Navigation.

### Kontaktieren Sie uns {#contact-us}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Ermöglicht es Ihnen, Fragen zu stellen oder Vorschläge zu machen.

### Probleme melden {#report-issues}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Problem auf GitHub öffnen**. [Android-Version GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS-Version GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): Fragen stellen, über Fehler schreiben und Funktionen vorschlagen.
- **Absturzprotokoll senden** (*für Android*). Enthält nur Informationen über Abstürze.
- [Logcat-Protokoll senden](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Protokoll senden](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Detaillierte Protokolldatei.

### Über OsmAnd {#about-osmand}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Offline help Android screenshot](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Sie können mehr über unser Team erfahren, die aktuelle Version der App und Neuigkeiten sehen und die Beta-Version der App herunterladen.


## Datenschutz {#privacy}

Es handelt sich um eine [Open-Source](https://github.com/osmandapp/osmand), werbefreie / trackerfreie, auf Datenschutz ausgerichtete Anwendung. Um maximale Privatsphäre zu gewährleisten, bietet OsmAnd Offline-Karten als erste Option an, sodass keine Interaktionen oder Geo-Informationen von Ihrem Gerät nach außen gelangen. Wir achten sehr darauf, welche Daten gesammelt und welche Daten über das Netzwerk übertragen werden. Weitere Informationen finden Sie in unserer [Datenschutzrichtlinie](https://osmand.net/help-online/privacy-policy).


## Berechtigungen {#permissions}

OsmAnd benötigt keine obligatorischen Berechtigungen auf der iOS-/Android-Version.

**Wesentliche**:

- **Internet**. Erster Download / Aktualisierung von Offline-Karten. Es kann auch erforderlich sein, auf Online-Funktionen wie [Street Level Imagery](../map/point-layers-on-map.md#-street-level-imagery), [Online-Fotos](../map/map-context-menu.md#online-photos) oder [Online-Karten](../map/raster-maps.md) zuzugreifen.
- **GPS** / **GSM-Netzwerk**. Bestimmen Sie Ihren Standort, folgen Sie Ihnen im Navigationsmodus und zeichnen Sie Ihre Reise auf (optional). Diese Berechtigung wird angefordert, wenn Sie auf die [Schaltfläche "Mein Standort"](../widgets/map-buttons.md#my-location-and-zoom) klicken oder wenn Sie [die Navigation starten](../navigation/setup/route-navigation.md#start--stop-navigation).

**Optional**:

- **Kamera/Sprachaufzeichnung** (*Android*). Wird nur von den [Audio-/Video-Notizen](../plugins/audio-video-notes.md) verwendet. Diese Funktion ist als Plugin verpackt und standardmäßig deaktiviert. Sie ermöglicht es Ihnen, während einer Reise schnell standortbezogene Audio-/Video-Notizen zu erstellen.


> *Zuletzt aktualisiert: Januar 2025*