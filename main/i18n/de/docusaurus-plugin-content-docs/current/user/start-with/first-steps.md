---
source-hash: 621169852e7cf1c482de73c1a7a6f8f94e0ec6854fd637bd85cfb1e349897ca0
sidebar_position: 1
title:  Erste Schritte
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Übersicht {#overview}

Willkommen bei OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Erfahren Sie, wie Sie Karten herunterladen, die Anwendung konfigurieren, die Karte verwenden und eine Route erstellen, die Navigation starten und nach Sonderzielen suchen. Machen Sie sich mit den wichtigsten Punkten der OsmAnd-Datenschutzrichtlinie und den erforderlichen Berechtigungen vertraut.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Navigation Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Offline-Navigation iOS](@site/static/img/settings/itunes_screen_ios.png)

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

Unser Ziel ist es, eine voll funktionsfähige, kartenorientierte Anwendung zu schaffen, die für verschiedene Zwecke offline und online genutzt werden kann. Die Anwendung hat viele Funktionen, sodass Sie nicht zwischen verschiedenen Apps wechseln müssen und alles griffbereit haben.

- Betrachten Sie eine Weltkarte mit vielen Details, die in [verschiedenen Kartenstilen](../map/vector-maps.md) angezeigt werden.
- Zeigen Sie verschiedene [Sonderziele](../map/point-layers-on-map.md) an, [suchen](../search/search-poi.md) und speichern Sie sie.
- [Planen Sie eine Route](../plan-route/create-route.md) mit dem Auto, Fahrrad, zu Fuß und kombinieren Sie diese zu multimodalen Routen.
- Starten Sie die [sprachgeführte Navigation](../navigation/guidance/voice-navigation.md), wenn Sie den Bildschirm ein- und ausschalten.
- Bereichern Sie Ihre touristische Reise mit Offline-[Wikipedia](../plugins/wikipedia.md) und [Wikivoyage](../plan-route/travel-guides.md).
- Passen Sie die [Anzeige der Karte](../map/configure-map-menu.md) und die darauf angezeigten [Widgets](../widgets/index.md) vollständig an.
- Navigieren Sie [entlang einer Route](../navigation/setup/route-navigation.md), [entlang eines vorgegebenen Tracks](../navigation/setup/gpx-navigation.md), [mit öffentlichen Verkehrsmitteln](../navigation/routing/public-transport-navigation.md) und [im Gelände](../navigation/setup/markers-navigation.md).
- Alles funktioniert **Offline**.
- Und vergessen Sie nicht, mit dem [OSM-Bearbeitungs-Plugin](../plugins/osm-editing.md) zu [OpenStreetMap](https://www.openstreetmap.org/) beizutragen.


## Anleitung für Aktionen {#actions-guide}

### Berechtigung zum Zugriff auf den Standort {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Genauer Standort Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Genauer Standort iOS](@site/static/img/steps/first_start_ios.png) ![Genauer Standort iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Wir empfehlen Ihnen, OsmAnd die Berechtigung zu erteilen, Informationen über den genauen Standort Ihres Geräts zu erhalten. Wir sammeln, verwenden oder teilen Ihre privaten Informationen nicht, daher ist der Zugriff auf die genaue Geolokalisierung für die korrekte Offline-Arbeit der Suche, Navigation und anderer OsmAnd-Funktionen erforderlich.  


### Wie man Karten herunterlädt {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Auf der Karte anzeigen](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Auf der Karte anzeigen](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Die OsmAnd-App arbeitet mit verschiedenen Kartentypen, kann aber nur mit heruntergeladenen Offline-Karten voll funktionsfähig sein. Nach dem *<Translate android="true" ids="get_started"/>*-Bildschirm werden Sie aufgefordert, die [*Karte Ihrer Region herunterzuladen*](../start-with/download-maps.md#initial-setup-screen). Sie können eine andere Region wählen, aus der [OsmAnd Cloud](../personal/osmand-cloud.md) wiederherstellen oder diesen Schritt überspringen und die Karten später herunterladen.  
Weitere verfügbare Optionen zum Herunterladen von Karten finden Sie im Artikel [Karten herunterladen](../start-with/download-maps.md).

:::note Beginnen Sie mit Offline-Karten zu arbeiten
OsmAnd kann ohne heruntergeladene Offline-Karten nicht korrekt funktionieren. Obwohl die Anwendung [Vektor-](../map/vector-maps.md) und [Rasterkarten](../map/raster-maps.md) unterstützt, wird dringend empfohlen, mit Vektor-Offline-Karten zu beginnen, damit alle Funktionen wie [Suche](../search/index.md), [Navigation](../navigation/index.md) und [Kontextmenü](../map/map-context-menu.md) ordnungsgemäß funktionieren.
:::


### Wie man Karten für die ganze Welt herunterlädt {#how-download-maps-for-the-whole-world}

Obwohl OsmAnd es Ihnen ermöglicht, Karten für alle verfügbaren Regionen herunterzuladen, gibt es kein einzelnes Paket, um die ganze Welt auf einmal herunterzuladen. Stattdessen können Sie einzelne Länder- oder Regionalkarten je nach Bedarf herunterladen.

***Wichtige Punkte:***

- **OsmAnd Pro** und **Maps+** bieten **unbegrenzte Karten-Downloads**, aber Sie müssen die Karten immer noch Region für Region herunterladen.
- **Speicherbeschränkungen.** Stellen Sie sicher, dass Ihr Gerät über genügend Speicherplatz verfügt, bevor Sie mehrere Regionen herunterladen.
- **Automatische Updates.** Einmal heruntergeladene Karten können über *Menü → Karten & Ressourcen → Updates* aktualisiert werden.


### Wie man die App-Sprache ändert {#how-to-change-app-language}

Die Option *Anzeigesprache* wird verwendet, um die Sprache der gesamten App zu ändern, einschließlich Pop-up-Meldungen, interner Texte, Nachrichten und mehr. Bis Android 12 ermöglicht OsmAnd, die Anzeigesprache direkt in der App nach Ihren Wünschen anzupassen. Ab Android 13 und auf iOS-Geräten kann die Anzeigesprache nur in den Systemeinstellungen geändert werden (siehe, wie man die Spracheinstellungen pro App in [Android](https://developer.android.com/guide/topics/resources/app-languages) und [iOS](https://developer.apple.com/news/?id=u2cfuj88) ändert).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Einstellungen → Apps → OsmAnd → Sprache*

![Allgemeine Einstellungen Sprache Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Einstellungen → OsmAnd Maps → Sprache*

![Allgemeine Einstellungen Sprache iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Keine Option zum Einstellen der App-Sprachen
Auf einigen Android-Geräten (Xiaomi mit Muiu 14) gibt es keine Möglichkeit, die App-Sprachen einzeln in den Systemeinstellungen festzulegen, sodass die Sprache von OsmAnd nur mit der Sprache des gesamten Systems geändert werden kann. Weitere Informationen finden Sie in der Diskussion auf [GitHub](https://github.com/osmandapp/OsmAnd/issues/16990).
:::


### Wie man seine Einstellungen verwaltet {#how-to-manage-your-settings}

Sie können die Anwendungseinstellungen als [Globale Einstellungen](../personal/global-settings.md) oder als [Profilkonfiguration](../personal/profiles.md) über das [Hauptmenü](../start-with/main-menu.md) verwalten. Die Anwendung wird mit einer vordefinierten Liste von Profilen geliefert, die später geändert werden können. Jedes Profil kann als eine angepasste Kartenanwendung für bestimmte Zwecke betrachtet werden. Standardmäßig dienen die Profile nur als unterschiedliche Navigationsmodi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profil verwalten Android](@site/static/img/settings/manage_profile_android.png) ![Profil konfigurieren Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profil verwalten iOS](@site/static/img/settings/manage_profile_ios.png) ![Profil konfigurieren iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../personal/global-settings.md) über Globale Einstellungen.
[Lesen Sie mehr](../personal/profiles.md) über Profileinstellungen.


### Wie man Plugins konfiguriert {#how-to-configure-plugins}

[Plugins](../plugins/index.md#configure-plugin) erweitern die Funktionalität der Anwendung erheblich. Fast alle Plugins haben ihre eigenen [Kartenaktionen](../map/map-context-menu.md), [Kartenebenen](../map/configure-map-menu.md), [Karten-Downloads](../start-with/download-maps.md) und [Einstellungen](../plugins/#plugin-settings).  

Sie können Plugins über [Hauptmenü](../start-with/main-menu.md) → [Plugins](../plugins/index.md#configure-plugin) aktivieren/deaktivieren.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugins aktivieren Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin-Beispiel Android](@site/static/img/settings/plugin_example_android.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Aktivieren

</TabItem>

<TabItem value="ios" label="iOS">

![Plugins aktivieren iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin-Beispiel iOS](@site/static/img/settings/plugin_example_ios.png)

Um Plugins zu aktivieren/deaktivieren, gehen Sie zu:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/index.md#configure-plugin) über OsmAnd-Plugins.


### Wie man eine Karte benutzt {#how-to-use-a-map}

Die Karte ist ein zentrales Element von OsmAnd, und es ist wichtig zu wissen, [wie man sie benutzt](../map/interact-with-map.md) (Gesten, Schaltflächen usw.). Sie können die [Karte nach Ihren Bedürfnissen konfigurieren](../map/configure-map-menu.md): [den Kartenstil ändern](../map/configure-map-menu.md#map-style-parameters), verschiedene [Kartenebenen](../map/configure-map-menu.md#map-layers) wie Favoriten, POIs, öffentliche Verkehrsmittel, Tracks, Höhenlinien, Schummerung und andere konfigurieren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Karte konfigurieren Android](@site/static/img/settings/configure_map_menu_android.png) ![Beispiel für Kartenkonfiguration Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Karte konfigurieren iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Beispiel für Kartenkonfiguration iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/configure-map-menu.md) über die Kartenkonfiguration.


### Wie man den Bildschirm konfiguriert {#how-to-configure-screen}

[Bildschirm konfigurieren](../widgets/configure-screen.md) ermöglicht es Ihnen, [Informations-](../widgets/info-widgets.md) (Höhe, Geschwindigkeit, aktuelle Zeit usw.) & [Navigations-Widgets](../widgets/nav-widgets.md) (Ziel, Peilung, Ankunftszeit usw.), [Schnellaktionen](../widgets/quick-action.md) und andere Elemente zu aktivieren, die über der Karte angezeigt werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bildschirm konfigurieren Android](@site/static/img/widgets/configure_screen_android.png) ![Beispiel für Bildschirmkonfiguration Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bildschirm konfigurieren iOS](@site/static/img/settings/configure_screen_ios.png) ![Beispiel für Bildschirmkonfiguration iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../widgets/configure-screen.md) über die Bildschirmkonfiguration.


### Wie man persönliche Daten zu Karten hinzufügt {#how-to-add-personal-data-to-maps}

OsmAnd ermöglicht es Ihnen, verschiedene Markierungen auf der Karte für Ihre persönlichen Bedürfnisse zu machen. Zum Beispiel [Favoriten](../personal/favorites.md) - persönliche Punkte mit Namen, Symbol & Kategorie, [Marker](../personal/markers.md) - schnell hinzugefügte Punkte als Ziel, [Audio-/Videonotizen](../plugins/audio-video-notes.md) - Mediennotizen, die an einem bestimmten Punkt aufgenommen wurden, [Tracks](../personal/tracks/manage-tracks.md) - aufgezeichnete und importierte Tracks & Touren.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Persönliche Daten hinzufügen Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Persönliche Daten hinzufügen iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../map/point-layers-on-map.md) über Punkte auf der Karte.


### Wie man nach Sonderzielen sucht {#how-to-browse--find-point-of-interest}

[Sonderziele (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sind Einrichtungen, die auf der Karte gesucht oder hervorgehoben werden können. Sie repräsentieren interessante oder nützliche Orte und werden als Teil von [Vektorkarten](../map/vector-maps.md) verteilt. Sie können sie verwenden, um sie [auf der Karte anzuzeigen](../map/point-layers-on-map.md#points-of-interest-pois), zu [navigieren](../navigation/index.md) und die Sonderziele auf der Karte zu [suchen](../search/search-poi.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mehrfachauswahl von POIs](@site/static/img/map/multiple_selection_android.png) ![POI suchen und anzeigen Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mehrfachauswahl von POIs](@site/static/img/settings/multiple_selection_iOS.png) ![POI suchen und anzeigen iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../search/search-poi.md) über die POI-Suche.


### Wie man eine Route plant {#how-to-plan-a-route}

[Route planen](../plan-route/create-route.md) ist ein leistungsstarkes Werkzeug, mit dem Sie eine Reise erstellen, einen vorhandenen Track bearbeiten und die Entfernung vor Ort messen können. Sie können schnell Zwischenpunkte setzen und sie durch verschiedene Navigationslinien (Fahrrad, Fußgänger, gerade Linie usw.) verbinden. Die Ergebnisse können in einer GPX-Datei gespeichert werden, sodass sie später [geteilt](../personal/tracks/index.md) oder für die [Navigation verwendet](../navigation/setup/gpx-navigation.md) werden können.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route planen Android](@site/static/img/settings/plan_route_android.png) ![Routengrafik Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route planen iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plan-route/create-route.md) über die Funktion "Route planen".


### Wie man nach Adressen sucht {#how-to-search-by-address}

OsmAnd bietet viele Suchmöglichkeiten, einschließlich der Adresssuche. Standardmäßig verwendet es [OpenStreetMap-Daten](https://nominatim.openstreetmap.org/ui/search.html) und sollte in der Lage sein, alle Adressen über die Schnellsuche zu finden. Sie können auch nach [Stadt, Straße, Postleitzahl und Koordinaten suchen](../search/search-address.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adresssuche Android](@site/static/img/settings/address_search_android.png) ![Suchergebnis Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adresssuche iOS](@site/static/img/settings/address_search_ios.png) ![Suchergebnis iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Sie müssen die Karte herunterladen, bevor Sie dort nach einer Adresse suchen. Wenn Ihr aktueller Standort zu weit von der gesuchten Adresse entfernt ist, müssen Sie möglicherweise den Suchradius erhöhen.
:::

[Lesen Sie mehr](../search/search-address.md) über die Adresssuche.


### Wie man die Navigation startet {#how-to-start-navigation}

Die [Navigation](../navigation/index.md) bietet Ihnen eine Schritt-für-Schritt-Anleitung zu Ihrem Ziel, indem sie die Route anzeigt, Abbiegehinweise, zusätzliche Straßeninformationen über Oberfläche, Glätte usw. und optionale Sprachführung bietet.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation starten Android](@site/static/img/settings/start_navigation_android.png) ![Routengrafik Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation starten iOS](@site/static/img/settings/start_navigation_ios.png) ![Routengrafik iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../navigation/index.md) über die Navigation.


### Wie man seine Reise aufzeichnet {#how-to-record-your-trip}

Die [Reiseaufzeichnung](../plugins/trip-recording.md) ist ein spezielles Werkzeug, das als OsmAnd-Plugin verpackt ist und es Ihnen ermöglicht, alle Bewegungen auf einem Track mit dem GPS des Geräts aufzuzeichnen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Reiseaufzeichnung Android](@site/static/img/settings/trip_recording_android.png) ![Übersicht Reiseaufzeichnung Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Reiseaufzeichnung starten iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menü Reiseaufzeichnung iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/trip-recording.md) über die Reiseaufzeichnung.


### Wie man Karten bearbeitet {#how-to-edit-maps}

OsmAnd wird von [OpenStreetMap](https://www.openstreetmap.org/)-Daten angetrieben. Die Karten werden von freiwilligen Mitwirkenden erstellt, sodass sie je nachdem, wie viel Arbeit in einem bestimmten Teil der Karte geleistet wurde, mehr oder weniger Details aufweisen können. Jeder kann sich als Mitwirkender registrieren und OSM-Karten hinzufügen oder bearbeiten. OsmAnd bietet ein Bearbeitungs-Plugin, das hilft, OpenStreetMap zu verbessern.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OSM-Notiz Android](@site/static/img/settings/osm_note_android.png) ![POI erstellen Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OSM-Notiz iOS](@site/static/img/settings/osm_note_ios.png) ![POI erstellen iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Lesen Sie mehr](../plugins/osm-editing.md) über die OSM-Bearbeitung.


### Wie man die App schließt {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Es gibt zwei verfügbare Varianten, um OsmAnd zu schließen.

1. Schließen Sie eine App, indem Sie sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.  

2. Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, da OsmAnd sonst im Hintergrund weiterläuft:
    - [Navigation beenden](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Karten-Download und -Aktualisierung stoppen](../start-with/download-maps.md)
    - [Reiseaufzeichnung stoppen](../plugins/trip-recording.md#new-track-recording)
    - [Audio-/Videonotiz-Aufnahme stoppen](../plugins/audio-video-notes.md)

3. Funktion *Stopp erzwingen*:
    - Langes Tippen auf das *OsmAnd-Symbol → **i**-Schaltfläche → Stopp erzwingen*.
    - Öffnen Sie die Einstellungen und tippen Sie auf *Apps & Benachrichtigungen → OsmAnd → Stopp erzwingen*.

</TabItem>

<TabItem value="ios" label="iOS">

Schließen Sie eine App, indem Sie sie nach oben und vom Bildschirm wischen. Bei einer vertikalen Liste von Apps wischen Sie nach links oder rechts.  

Möglicherweise müssen Sie die folgenden Schritte ausführen, bevor Sie dies tun, da OsmAnd sonst im Hintergrund weiterläuft:

- [Navigation abbrechen](../navigation/setup/route-navigation.md)
- [Karten-Download und -Aktualisierung stoppen](../start-with/download-maps.md)
- [Reiseaufzeichnung stoppen](../plugins/trip-recording.md#new-track-recording)
- [Audio-/Videonotiz-Aufnahme stoppen](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## App-Verknüpfungen {#app-shortcuts}

<InfoAndroidOnly/>

[Anwendungsverknüpfungen](https://support.google.com/android/answer/9450271) sind für das OsmAnd-Symbol verfügbar. Tippen Sie einfach lange auf das OsmAnd-Symbol auf dem Bildschirm Ihres Geräts, um das Menü für Anwendungsverknüpfungen zu öffnen. Hier können Sie durch kurzes Drücken die folgenden Aktionen auswählen: *Nach Hause navigieren*, *Zur Arbeit navigieren*, *Aufnahme starten*, *Suchen*, *Meine Orte*, *Navigieren zu*. Ein langes Tippen auf eine Aktion ermöglicht es Ihnen, ein neues Aktionssymbol auf Ihrem Gerätebildschirm hinzuzufügen.

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

Im *Hilfemenü* finden Sie Artikel von unserer Website [www.osmand.net/docs](https://osmand.net/docs/intro/). Nach dem ersten Download (Internetverbindung erforderlich) sind die Hilfeartikel offline verfügbar.  
Der erste Unterabschnitt, *Offline-Hilfe*, enthält die **Am häufigsten angesehenen** (oder beliebtesten) Artikel unter unseren Benutzern. Die Abschnitte **Benutzerhandbuch** und **Fehlerbehebung** haben die gleiche Struktur wie auf der Website.  
Im *Hilfemenü* finden Sie auch nützliche Links zu den sozialen Netzwerken von OsmAnd, Versionsinformationen zu Ihrer Anwendung, Versionshinweise und Support-Kontakte. Über die Hilfe können Sie auch [Logcat- und Absturzprotokolle](../troubleshooting/crash-logs.md#crash-and-logcat-logs) senden.  

### Menü {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Absturzprotokoll senden** (*für Android*). Ermöglicht Benutzern, Berichte über App-Abstürze an Entwickler zu senden, was bei der Identifizierung und Lösung von Problemen hilft.
- **Logcat-Protokoll senden** (*für Android*). Bietet Benutzern die Möglichkeit, detaillierte Protokolle von App-Abstürzen an Entwickler zu senden, was eine tiefere Analyse und Fehlerbehebung erleichtert.
- **Protokoll senden** (*für iOS*). Führt eine ähnliche Funktion wie die Funktion *Absturzprotokoll senden* für Android aus und ermöglicht es Benutzern auf iOS-Geräten, App-Abstürze zu Debugging-Zwecken an Entwickler zu melden.
- **Build-Version kopieren**. Ermöglicht Benutzern, die aktuelle Version der App schnell und genau an Entwickler zu übermitteln, wenn sie Probleme melden, was den Diagnose- und Lösungsprozess vereinfacht.


### Am häufigsten angesehen {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Die am häufigsten angesehenen Artikel unter unseren Benutzern beziehen sich auf die Artikel in der App oder auf der Website, die die meisten Aufrufe oder Benutzerinteraktionen erhalten haben. Diese Metrik hilft dabei, Inhalte zu identifizieren, die für Ihre Benutzer besonders interessant oder nützlich sind. Sie kann wertvolle Einblicke in die Vorlieben und Interessen der Benutzer liefern und es Entwicklern und Inhaltserstellern ermöglichen, zukünftige Inhalte besser auf die Bedürfnisse des Publikums abzustimmen. Darüber hinaus kann das Hervorheben beliebter Artikel neuen Benutzern helfen, wertvolle Ressourcen innerhalb der App zu finden.


### Benutzerhandbuch {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Offline-Hilfe Android Screenshot](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kartenmenü iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Der Abschnitt **Benutzerhandbuch** des Hilfemenüs ist ein vollständiges Handbuch, das der Struktur der OsmAnd-Website folgt und so die Konsistenz der Informationen und die einfache Navigation über Plattformen hinweg gewährleistet. Mit der Hilfe können Sie einfach von der App zur Website navigieren und denselben Inhalt in vertrauter Weise organisiert finden. Diese Konsistenz verbessert die Benutzerfreundlichkeit, indem sie eine einzige Support-Ressource bereitstellt, um schnell Antworten auf Fragen zu finden und Probleme zu beheben.


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

- [Einrichtung](../troubleshooting/setup.md). Bei der Einrichtung einer Anwendung treten diese Probleme am häufigsten auf.
- [Karten & Daten](../troubleshooting/maps-data.md). Probleme im Zusammenhang mit Karten, Suche und den restlichen Daten.
- [Navigation](../troubleshooting/navigation.md). Die häufigsten Probleme, die im Navigationsmodus auftreten.
- [Trackaufzeichnung](../troubleshooting/track-recording-issues.md). Häufige Probleme im Zusammenhang mit der Trackaufzeichnung wie Rauschen, Lücken und Ungenauigkeiten.
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

- **Problem auf GitHub öffnen**. [Android-Version GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [iOS-Version GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): Fragen stellen, über Fehler schreiben und Funktionen vorschlagen.
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

Sie können mehr über unser Team erfahren, die aktuelle Version der App und was neu ist sehen und die Beta-Version der App herunterladen.


## Datenschutz {#privacy}

Es ist eine [Open-Source](https://github.com/osmandapp/osmand), werbefreie / trackerfreie, auf Datenschutz ausgerichtete Anwendung. Um maximale Privatsphäre zu gewährleisten, bietet OsmAnd in erster Linie Offline-Karten an, sodass keine Interaktions- oder Geoinformationen von Ihrem Gerät preisgegeben werden. Wir achten sehr darauf, welche Daten gesammelt und welche Daten über das Netzwerk übertragen werden. Mehr dazu können Sie in unserer [Datenschutzrichtlinie](https://osmand.net/help-online/privacy-policy) lesen.  


## Berechtigungen {#permissions}

OsmAnd hat keine erforderlichen Berechtigungen in der iOS-/Android-Version.

**Wesentlich**:

- **Internet**. Erstmaliges Herunterladen / Aktualisieren von Offline-Karten. Es kann auch erforderlich sein, um auf Online-Funktionen wie [Straßenansicht-Bilder](../map/point-layers-on-map.md#-street-level-imagery), [Online-Fotos](../map/map-context-menu.md#online-photos) oder [Online-Karten](../map/raster-maps.md) zuzugreifen.
- **GPS** / **GSM-Netzwerk**. Bestimmen Sie Ihren Standort, folgen Sie Ihnen im Navigationsmodus und zeichnen Sie Ihre Reise auf (optional). Diese Berechtigung wird angefordert, wenn Sie auf die [Schaltfläche "Mein Standort"](../widgets/map-buttons.md#my-location-and-zoom) klicken oder wenn Sie die [Navigation starten](../navigation/setup/route-navigation.md#start--stop-navigation).

**Optional**:

- **Kamera-/Sprachaufnahme** (*Android*). Wird nur von den [Audio-/Videonotizen](../plugins/audio-video-notes.md) verwendet. Diese Funktion ist als Plugin verpackt und standardmäßig deaktiviert. Sie ermöglicht es Ihnen, während einer Reise schnell standortbezogene Audio-/Videonotizen zu erstellen.