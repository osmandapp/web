---
source-hash: fc459398704a8d2bfa0f43cc8e873a69dba20960f781c8cd3153d34ffdf7234f
sidebar_position: 4
title: Profile (Einstellungen)
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

OsmAnd bietet eine Vielzahl von Standardprofilen, die auf verschiedene Aktivitäten zugeschnitten sind, darunter Autofahren, Radfahren, Wandern und speziellere Aktivitäten wie Skifahren und Bootfahren. Diese Profile wurden entwickelt, um Ihr Navigationserlebnis entsprechend Ihrer Aktivität zu verbessern. Jedes Profil enthält konfigurierbare Optionen, mit denen Sie Einstellungen anpassen und zusätzliche Plugins integrieren können, um Ihren Präferenzen gerecht zu werden.

- Bestimmte Profile, wie *Skifahren* und *Boot*, verfügen über **zusätzliche Funktionen**, die nur verfügbar werden, wenn die entsprechenden Plugins aktiviert sind.

     - Plugins können über *Menü → Plugins → Skikartenansicht* oder *Nautische Kartenansicht* aktiviert werden.
     - Die Aktivierung der Plugins stattet die Profile mit den wesentlichen Funktionen aus, um die spezifischen Anforderungen dieser Aktivitäten zu erfüllen.

- Es ist wichtig zu beachten, dass einige Profile, wie **LKW**, **Motorrad**, **Moped**, **Zug**, **Flugzeug**, **Boot** und **Reiten**, nicht standardmäßig aktiviert sind.

     - Um auf diese Profile zugreifen und sie nutzen zu können, müssen Sie sie manuell unter *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* aktivieren.
     - Diese Methode hilft, eine organisierte und relevante Liste von Profilen zu pflegen, indem nur die für bestimmte Aktivitäten erforderlichen Profile aktiviert werden.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Karte durchsuchen oder ein anderes Profil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Profilkonfiguration {#profile-configuration}

:::caution Einstellungen nur auf ein bestimmtes Profil anwenden
Alle Einstellungen gelten ausschließlich für das aktuell ausgewählte Anwendungsprofil.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png) ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Dieser Abschnitt enthält alle Einstellungen für Aussehen, Navigationsoptionen, Kartenanzeige, Einstellungsmenü und Profilbildschirm.


### Kostenloses Cloud-Backup {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd ermöglicht es Ihnen, Ihre Anwendungsprofileinstellungen in der OsmAnd Cloud zu [sichern](../personal/osmand-cloud.md#osmand-start), um sicherzustellen, dass Ihre Konfigurationen sicher gespeichert und problemlos auf Android-, iOS- und Web-Versionen wiederhergestellt werden können. Diese Sicherungsfunktion schützt Ihre Einstellungen im Falle eines Geräteausfalls oder einer Neuinstallation der App. Sie können von diesem speziellen Plan profitieren, indem Sie [OsmAnd Start](../personal/osmand-cloud.md#osmand-start) verwenden.

Sie müssen ein [OsmAnd Cloud](../personal/osmand-cloud.md#login)-Konto haben, um das *Kostenlose Einstellungs-Backup* nutzen zu können. Wenn Sie ein *OsmAnd Pro*-Abonnement oder ein aktives *OsmAnd Cloud*-Konto haben, wird das Aktionsbanner nicht angezeigt.


## Allgemeine Einstellungen {#general-settings}

Dieser Abschnitt enthält Einstellungen für das Anwendungsthema und die Kompass-Schaltfläche, Karten- und Profildateneinheiten und -formate, externe Eingabegeräte und viele andere Einstellungen, um die optimale Konfiguration für Ihr gewähltes Profil zu erstellen.

### Erscheinungsbild {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Ermöglicht Ihnen, ein Tag- und Nachtthema für die App festzulegen, das auf ein Profil oder alle gleichzeitig angewendet werden kann. Diese Option ändert nicht die Einstellungen des [Kartenmodus](../map/vector-maps.md#map-mode).
  - *<Translate android="true" ids="dark_theme"/> Thema*
  - *<Translate android="true" ids="light_theme"/> Thema*
  - *<Translate android="true" ids="system_default_theme"/>*
      Wendet das Systemthema an. Standardmäßig und für alle neuen Benutzer entspricht der Kartenstil dem hellen oder dunklen Thema, das in den Systemeinstellungen Ihres Geräts ausgewählt ist.
- **<Translate android="true" ids="rotate_map_to"/>**. Ermöglicht Ihnen die Auswahl des [Kartenorientierungsmodus](../map/interact-with-map.md#map-orientation-modes) für das ausgewählte Profil.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Legt die Bildschirmposition in der OsmAnd-Anwendung fest und sperrt sie. Diese Funktion wird auf dem iPad nicht unterstützt.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Nur Android*). Öffnet das Bildschirmsteuerungsmenü, in dem Sie Optionen für den Gerätebildschirm während der Navigation auswählen können, um den Akkuverbrauch des Geräts zu sparen.


### Einheiten & Formate {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

Im Abschnitt **Einheiten und Formate** können Sie Maßeinheiten und Formate an Ihre persönlichen Vorlieben und regionalen Standards anpassen, um sicherzustellen, dass alle Daten bequem und vertraut angezeigt werden.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>Entsprechend dem Gerätestandort</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Beispiel: 50.12333° 19.93233° (Breitengrad Längengrad) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Beispiel: 50°7.393′ 19°55.941′ (Breitengrad Längengrad)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Beispiel: 50°7′23.6″ 19°55′56.4″ (Breitengrad Längengrad) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Nordwert Ostwert) . [<Translate android="true" ids="utm_format_descr"/>](https://de.wikipedia.org/wiki/Universale_Transversale_Mercator-Projektion) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Beispiel: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://de.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Beispiel:  9F2X4WFJ+7W ([Open Location Code](https://de.wikipedia.org/wiki/Open_Location_Code) stellt eine Fläche von 9m x 14m dar)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Nur Android-Version) | Beispiel: 2 215 227.87, 830 915.9 ([Schweizer Koordinatensystem](https://de.wikipedia.org/wiki/Schweizer_Koordinatensystem#:~:text=Das%20Schweizer%20Koordinatensystem%20(oder,Bundesamt%20f%C3%BCr%20Landestopografie%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Nur Android-Version) | Beispiel: 4 215 227.87, 1 830 915.9 ([Schweizer Koordinatensystem](https://de.wikipedia.org/wiki/Schweizer_Koordinatensystem#:~:text=Das%20Schweizer%20Koordinatensystem%20(oder,Bundesamt%20f%C3%BCr%20Landestopografie%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Grad 180° | Alle Winkelwerte haben Ablesungen von 0° bis 180° und von 0° bis -180°.  |
|          | Grad 360° | Alle Winkelwerte haben Ablesungen von 0° bis 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Alle Winkelwerte haben einen [Milliradiant-Wert](https://de.wikipedia.org/wiki/Milliradiant).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Asien, Lateinamerika, Kanada, Japan, Indien, Australien |
|  | <Translate android="true" ids="imperial_gallons"/> | UK und ähnliche |
|  | <Translate android="true" ids="us_gallons"/> | Vereinigte Staaten |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*Nur Android*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Für präzise Messungen* wählen Sie, wie Distanzinformationen in den Navigations-Widgets angezeigt werden, z.B. die Distanz zu einem Punkt, die nächste Abbiegung oder eine bestimmte Spur. |
|          | <Translate android="true" ids="round_up"/> | *Für bessere Lesbarkeit* werden die in den Navigations-Widgets (Entfernung zu einem Punkt, nächste Abbiegung oder Spur) angezeigten Zahlen abgerundet, um weniger Ziffern zu haben. <br/> Beispiele: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Sonstiges {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)

</TabItem>

</Tabs>

Der Abschnitt **Sonstiges** bietet zusätzliche Profileinstellungen zur Anpassung der OsmAnd-Benutzeroberfläche und der Eingabesteuerungen. Diese Einstellungen ermöglichen es Ihnen, externe Geräte zu konfigurieren, Animationspräferenzen anzupassen und den Vollbildmodus umzuschalten.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Verbinden Sie externe Controller wie *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>* oder *<Translate android="true" ids="sett_parrot_ext_input"/>*, um OsmAnd mit physischen Tasten zu bedienen.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Nur Android*) – Aktivieren oder deaktivieren Sie die Möglichkeit, die Lautstärketasten Ihres Geräts zum [Zoomen](../map/interact-with-map.md#my-location-and-zoom) auf der Karte zu verwenden.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Nur Android*) – Glättet die Kartenrotation mit [fließender Bewegung](https://de.wikipedia.org/wiki/Kalman-Filter), wodurch plötzliche Positionswechsel reduziert werden. Dies führt zu einer kleinen Verzögerung (*weniger als 1 Sekunde*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Nur Android*) – Verwendet den [Magnetsensor](https://de.wikipedia.org/wiki/Kalman-Filter) Ihres Geräts, um die Kartenrotation zu stabilisieren und abrupte Änderungen zu reduzieren. Dies führt ebenfalls zu einer leichten Verzögerung.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Nur Android*) – Tippen Sie auf eine leere Stelle auf der Karte, um Steuerelemente und Widgets auszublenden und die Sichtbarkeit der Karte zu maximieren.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Nur Android*) – Deaktivieren Sie Animationen im Navigationsmodus für schnellere Bildschirmübergänge.

- **<Translate android="true" ids="position_animation"/>** (*Nur Android*) – Das [Positions-Symbol](../map/interact-with-map.md#my-location-and-zoom) animiert mit jedem empfangenen GPS-Punkt (einmal pro Sekunde). Eine leichte Verzögerung in seiner Bewegung kann spürbar sein, besonders bei schneller Bewegung oder GPS-Signalstörungen. Sie können diesen Effekt mit der Einstellung *Vorhersagezeit* anpassen: höhere Werte erhöhen die Glätte, fügen aber Verzögerung hinzu, niedrigere Werte reduzieren die Verzögerung, können aber die Bewegung weniger glatt machen.


## Navigationseinstellungen {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Eine detaillierte Übersicht über die Navigationsoptionen finden Sie im Artikel [Navigationseinstellungen](../navigation/guidance/navigation-settings.md), der erklärt, wie Sie OsmAnd für ein optimales Navigationserlebnis konfigurieren.

- [Navigationstyp](../navigation/guidance/navigation-settings.md#navigation-type) - Wählen Sie den geeigneten Navigationsmodus basierend auf Ihrer Reisemethode und Internetverfügbarkeit.

- [Routenparameter](../navigation/guidance/navigation-settings.md#route-parameters) - Definieren Sie, wie OsmAnd Routen berechnet, einschließlich Präferenzen zur Vermeidung bestimmter Straßen oder zur Auswahl von Routentypen.

- [Bildschirmwarnungen](../navigation/guidance/navigation-settings.md#screen-alerts) - Aktivieren Sie das *Warnmeldungs-Widget*, um Echtzeit-Benachrichtigungen für Geschwindigkeitsbegrenzungen, Abbiegungen und andere wichtige Straßenbedingungen anzuzeigen.

- [Sprachansagen](../navigation/guidance/navigation-settings.md#voice-prompts) - Aktivieren Sie die Audioführung, um gesprochene Navigationsanweisungen während der Fahrt oder des Gehens entlang einer ausgewählten Route zu erhalten.

- [Fahrzeugparameter](../navigation/guidence/navigation-settings.md#vehicle-parameters) – Konfigurieren Sie fahrzeugspezifische Einstellungen wie Höchstgeschwindigkeit und Fahrzeughöhe, um eine genaue Routenführung zu gewährleisten und gesperrte Straßen zu vermeiden.

- [Routenlinie anpassen](../navigation/guidance/navigation-settings.md#customize-route-line) – Passen Sie Farbe, Breite und Stil der auf der Karte angezeigten Routenlinie an, um die Sichtbarkeit während der Navigation zu verbessern.

- [Karte während der Navigation](../navigation/guidance/navigation-settings.md#map-during-navigation) – Zeigen Sie die Echtzeitpositionierung auf der Karte an, verfolgen Sie den Fortschritt entlang der Route und verbessern Sie die Orientierung mithilfe von Orientierungspunkten.

- [Detaillierte Streckenführung](../navigation/guidance/navigation-settings.md) – Verbessern Sie die Turn-by-Turn-Navigation, indem Sie Ihre Route an kartierte Straßen anpassen. Verfügbare Einstellungen: *Jedes Mal fragen* oder *Immer*.

:::info
Im Profil *Karte durchsuchen* gibt es keine Navigationseinstellungen.
:::


## Karte konfigurieren {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Karte konfigurieren*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

Das Menü [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) ermöglicht Ihnen, die Anzeigeeinstellungen der Karte für das ausgewählte Profil anzupassen, um eine bessere Visualisierung wichtiger Kartenelemente zu ermöglichen.

Mit diesem Menü können Sie:

- **Wichtige Kartenelemente hervorheben**, einschließlich [Favoritenpunkten](../personal/favorites.md), [Navigationsmarkierungen](../personal/markers.md) oder speziellen [Points of Interests](../map/point-layers-on-map.md#points-of-interest-pois) auf der Karte.

- **Spezifische Routen und GPX-Dateien anzeigen**, einschließlich Drittanbieter-Tracks für Navigation oder Analyse.

- **Zusätzliche Kartenebenen überlagern**, wie z.B. [Geländeinformationen](../plugins/topography.md), **Satellitenbilder** oder andere verfügbare [Rasterkarten](../map/raster-maps.md).

- **Visualisierung des öffentlichen Nahverkehrs aktivieren**, um [Routen und Haltestellen](../map/public-transport.md) für eine bessere Reiseplanung anzuzeigen.

- **Kartenansicht anpassen**, indem Sie einen anderen [Kartenstil](../map/vector-maps.md#default-map-styles) auswählen, der Ihren Bedürfnissen entspricht.


## Bildschirm konfigurieren {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*
- Gehe zu: *Menü → Einstellungen → App-Profil → Bildschirm konfigurieren*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png) ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png) ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

Das [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) ist ein Menü, mit dem Sie die Widgets für das ausgewählte Profil konfigurieren können, die auf der Karte angezeigt werden sollen. Auf diesem Bildschirm können Sie [Informations-](../widgets/info-widgets.md) und [Navigations-Widgets](../widgets/nav-widgets.md) sowie andere Elemente aktivieren und konfigurieren.


## Profil-Erscheinungsbild {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

Die Einstellungen für das **Profil-Erscheinungsbild** ermöglichen es Ihnen, den Namen und die visuelle Darstellung Ihres Profils anzupassen. Sie können hier auch das Erscheinungsbild von [Mein Standort](#my-location-appearance) ändern. Während der *Profilname* eindeutig sein muss, können *Symbole* und *Farben* in verschiedenen Profilen gleich sein. Diese Änderungen werden in verschiedenen Teilen der Anwendung angewendet, wie z.B. im Menü [Routenvorbereitung](../navigation/setup/route-navigation.md).


### Erscheinungsbild meines Standorts {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

Die Einstellungen für das **Erscheinungsbild meines Standorts** ermöglichen es Ihnen, anzupassen, wie Ihr Standort auf der Karte angezeigt wird, sowohl im Stillstand als auch in Bewegung. Bewegung wird vom Betriebssystem erkannt, wenn die Geräteleistung **größer als Null** ist.

#### 1. Blickwinkel und Standortradius {#1-view-angle-and-location-radius}

Sie können die visuellen Elemente, die mit Ihrem Standort zusammenhängen, anpassen und separat oder zusammen für **Ruhende** und **Navigationspositionen** anwenden. Sowohl im 2D- als auch im 3D-Modus werden *Blickwinkel* und *Standortradius* in der gleichen Farbe angezeigt, die für das [Navigationsprofil](#profile-appearance) ausgewählt wurde, direkt unter dem Symbol [Mein Standort](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Zeigt einen **kegelförmigen** Bereich an, der die Richtung angibt, in die Sie gerade blicken.
- **<Translate android="true" ids="location_radius"/>** – Zeigt einen **kreisförmigen Bereich** um Ihr Symbol an, der die Genauigkeit Ihres aktuellen Standorts darstellt.


#### 2. Benutzerdefinierte 3D-Symbole {#2-custom-3d-icons}

Für ein persönlicheres Erlebnis können Sie **benutzerdefinierte 3D-Symbole** erstellen und zu OsmAnd hinzufügen.

***So fügen Sie ein benutzerdefiniertes 3D-Standortsymbol hinzu:***

1. **Erstellen Sie ein 3D-Modell**. Entwerfen Sie Ihr Symbol in den [MTL- und OBJ-Formaten](https://de.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integrieren Sie das Modell in OsmAnd:**
   - Entwickeln Sie ein [benutzerdefiniertes Plugin](../plugins/custom.md) unter Verwendung des bereitgestellten [Plugin-Beispiels](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf).
   - Platzieren Sie Ihre 3D-Symbol-Dateien in den folgenden Pfaden:

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternativ kopieren Sie die **MTL- und OBJ-Dateien** direkt in den OsmAnd-Ordner unter Verwendung derselben Verzeichnisstruktur.

#### 3. Kartenorientierungsmodi {#3-map-orientation-modes}

Sie können steuern, wie sich das Symbol **Mein Standort** in verschiedenen [Kartenorientierungsmodi](../widgets/map-buttons.md#compass) verhält.

- Wenn das Standortsymbol im Stillstand **wackelt oder sich dreht**, wechseln Sie vom **Bewegungsrichtungsmodus** ([Karte nach Peilung drehen](../map/interact-with-map.md#rotate-map-by-bearing)) zu einem anderen Modus.
- Passen Sie zusätzliche Einstellungen unter *Menü → Einstellungen → App-Profile → Profil-Erscheinungsbild → Optionen* an.
- Erfahren Sie mehr über Peilung und Richtungsverfolgung im Abschnitt [Peilungs-Widget](../widgets/nav-widgets#bearing-widget).


## UI-Anpassung {#ui-customization}

<InfoAndroidOnly />

:::note Für ungenutzte Plugins
Um alle Steuerparameter ungenutzter [Plugins](../plugins/index.md#configure-plugin) auszublenden, deaktivieren Sie diese.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)

Mit der UI-Anpassungsfunktion können Sie die Anzahl der Elemente in Aktionen wie [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) und [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md) anpassen. Informationen über die Anzahl der hinzugefügten Elemente von allen möglichen Elementen finden Sie unter dem Titel jeder Funktion.


### Schublade {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png) ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)

- **Hauptsichtbare Elemente** - Im Abschnitt *Benutzeroberfläche anpassen* können Sie Elemente aus der [Schublade](../start-with/main-menu.md#customize-advanced-use-of-android) *neu anordnen, ausblenden und wiederherstellen*, um sie an Ihre Präferenzen anzupassen.

- **<Translate android="true" ids="reset_to_default"/>** - Stellt die *ursprüngliche Liste der Elemente* in der Schublade wieder her und macht alle Anpassungen sofort rückgängig.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Ermöglicht Ihnen, das *Schubladenlayout* von einem anderen OsmAnd-Profil zu kopieren, um eine konsistente Einrichtung über Profile hinweg beizubehalten.

### Karte konfigurieren {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Kartenkonfigurationsmenü** - Im Abschnitt *Benutzeroberfläche anpassen* können Sie Elemente aus dem [Kartenkonfigurationsmenü](../map/configure-map-menu.md) *neu anordnen oder ausblenden*, um einen schnellen Zugriff auf häufig verwendete Einstellungen zu ermöglichen.

- **<Translate android="true" ids="reset_to_default"/>** - Stellt die *ursprüngliche Elementliste* im Kartenkonfigurationsmenü wieder her und entfernt alle Änderungen.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Kopiert das *Kartenkonfigurationsmenü-Layout* von einem anderen OsmAnd-Profil.


### Kontextmenü-Aktionen {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png) ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Kartenkontextmenü** - Im Abschnitt "Benutzeroberfläche anpassen" können Sie Elemente im [Kartenkontextmenü](../map/map-context-menu.md) neu anordnen oder ausblenden, um den Zugriff auf häufig verwendete Funktionen zu optimieren.

- **<Translate android="true" ids="reset_to_default"/>** – Stellt die *Standardelementliste* im Kartenkontextmenü wieder her und macht alle Änderungen sofort rückgängig.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Kopiert die *Anordnung des Kontextmenüs* von einem anderen OsmAnd-Profil, um die Konsistenz über verschiedene Profile hinweg zu gewährleisten.


## Plugin-Einstellungen {#plugin-settings}

:::caution Zugriff auf Plugin-Einstellungen
Um auf die Einstellungen des Plugins zuzugreifen, müssen Sie das Plugin zuerst im *Plugin-Bereich des Hauptmenüs* [**aktivieren**](../plugins/index.md#enable--disable).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Plugins schalten zusätzliche Funktionen der Anwendung frei und können entweder [kostenpflichtig oder kostenlos](../plugins/index.md#purchase) sein. Einige Plugins haben ihre eigenen [Einstellungen](../plugins/index.md#plugin-settings), andere nicht. OsmAnd bietet Ihnen die Möglichkeit, Plugins für jedes Profil separat zu konfigurieren.


- **Reiseaufzeichnung**. Dieser Punkt öffnet die [Reiseaufzeichnungseinstellungen](../plugins/trip-recording.md#recording-settings) für das ausgewählte Profil, wo Sie beliebige Parameter für die Aufzeichnung Ihrer Reisen auswählen können.

- **Wetter**. Interaktive [Wetterkarten-Ebenen](../plugins/weather.md#weather-settings) ermöglichen es Ihnen, Temperatur, Luftdruck, Wolkenbedeckung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an einem anderen Ort auf einer globalen Karte zu überwachen.

- **Audio-/Video-Notizen** (*Nur Android*). Dieser Punkt öffnet die [Audio-Video-Plugin-Einstellungen](../plugins/audio-video-notes.md#plugin-settings) für das ausgewählte Profil. Das *Audio-/Video-Notizen*-Plugin erweitert die Funktionalität von OsmAnd, indem es Ihnen ermöglicht, Ihre Notizen in verschiedenen Formaten wie Foto, Video oder Audio zu erstellen und diese mit einem geografischen Standort oder dem aktuellen Standort zu verknüpfen.

- **OpenStreetMap-Bearbeitung**. Dieser Punkt öffnet die [OpenStreetMap-Bearbeitungs-Plugin-Einstellungen](../plugins/osm-editing.md#settings) für das ausgewählte Profil. Mit OsmAnd und dem OSM-Bearbeitungs-Plugin können Sie zu OpenStreetMap.org beitragen, indem Sie POIs erstellen oder ändern, Notizen hinzufügen oder kommentieren und aufgezeichnete GPX-Tracks hochladen.

- **Externe Sensoren**. Wenn Sie auf einen Punkt im Abschnitt *Plugin-Einstellungen* tippen, werden die [Einstellungen der externen Sensoren](../plugins/external-sensors.md#sensors-settings) für das ausgewählte Profil geöffnet. Das Plugin für externe Sensoren ermöglicht es Ihnen, Daten von drahtlosen externen Sensoren zu lesen und aufzuzeichnen und diese mithilfe von Widgets in der OsmAnd-Anwendung anzuzeigen.

- **Barrierefreiheit** (*Nur Android*). Dieser Punkt öffnet die [Barrierefreiheits-Plugin-Einstellungen](../plugins/accessibility.md#plugin-settings) für das ausgewählte Profil. Die Barrierefreiheits-Plugin-Einstellungen ermöglichen es Ihnen, die Anwendung an Ihre Bedürfnisse anzupassen. Alle Einstellungen beziehen sich auf den Navigationsprozess und werden für jedes Profil individuell festgelegt.

- **OsmAnd-Entwicklung**. Dieses Menü öffnet die [OsmAnd-Entwicklungs-Plugin-Einstellungen](../plugins/development.md#plugin-settings), wo Sie die OsmAnd-Anwendung zu Testzwecken konfigurieren oder kommende Funktionen erkunden können. Diese Einstellungen sind für Entwickler gedacht und für den normalen Gebrauch der Anwendung nicht erforderlich.

  > ***Das Ändern der Einstellungen des OsmAnd-Entwicklungs-Plugins wirkt sich auf alle Profile aus.***

- **Wikipedia** (Nur iOS). Dieses Menü öffnet die *[Wikipedia-Plugin-Einstellungen](../plugins/wikipedia.md#wikipedia-settings)*. Sie können die Sprache auswählen, in der Artikel angezeigt werden, und entscheiden, ob Bilder von Wikipedia heruntergeladen werden sollen. Wikipedia auf Ihrer Reise verbessert Ihr Erlebnis, indem es Informationen zu den Orten liefert, die Sie besuchen. Es funktioniert offline und zeigt relevante Wikipedia-Artikel direkt auf der Karte an, die sich auf Points of Interest beziehen.

- **Fahrzeugmetriken**. Dieses Menü öffnet die *[Fahrzeugmetriken-Plugin-Einstellungen](../plugins/vehicle-metrics.md#scanner-settings)*. Es ermöglicht Ihnen, einen OBD-II-Scanner mit OsmAnd zu verbinden.

- **AIS-Schiffsverfolgung** (Nur Android). Dieses Menü öffnet die *[AIS-Schiffsverfolgungs-Plugin-Einstellungen](../plugins/ais-tracker.md#plugin-settings)*. Dieses Plugin ermöglicht es Ihnen, einen AIS-Tracker mit OsmAnd zu verbinden.


## Aktionen {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)

</TabItem>

</Tabs>

Aktionen mit ausgewähltem Profil:

- [Profil exportieren](https://osmand.net/docs/user/personal/import-export#export) - Exportiert alle Einstellungen des ausgewählten Profils im OSF-Format.

- **Von anderem Profil kopieren** - Kopiert alle Einstellungen von einem anderen bestehenden Profil in Ihrer OsmAnd-Anwendung.

- **Auf Standard zurücksetzen** - Setzt alle Einstellungen auf den ursprünglichen Zustand zurück.

- **Profil löschen**:
    - Diese Aktion ist nur für *Android* und nur für ein *benutzerdefiniertes Profil* verfügbar.
    - Standardprofile können nicht gelöscht werden.
    - Um ein Profil hinzuzufügen, gehen Sie zu *Menü → Einstellungen → App-Profile → + Neues Profil*.


## Verwandte Artikel {#related-articles}

- [Tracks verwalten](../personal/tracks/manage-tracks.md#import--export-track)
- [Suchverlauf](../search/search-history.md#export-and-share)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Februar 2025*