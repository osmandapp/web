---
source-hash: 1de4c25d0b27ee47bb08a2b296acc58908656314e50dc9de490d26167117efe8
sidebar_position: 5
title:  Farbschemata
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

:::info Kostenpflichtige Funktion

Farbschemata werden als Teil der kostenpflichtigen [Maps+](../purchases/index.md) und Pro <ProFeature />-Funktionen verwendet.  

:::

Farbschemata werden bei der [Einfärbung von Tracks und Routen](#tracks-routes), dem [Kartengelände](#terrain) und der [Wetterkarte](#weather) verwendet und stellen einen separaten Teil der Informationen dar, die exportiert, importiert und bearbeitet werden können, um das Farbschema der Karte und die Datenvisualisierung zu ändern.

Die Daten der Farbpalette sind im Menü [*Karten & Ressourcen*](../personal/maps-resources.md#local-menu) verfügbar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Menü → Karten & Ressourcen → Lokal → Farben*

![Paletten](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Menü → Karten & Ressourcen → Lokal → Farben*

![Farbpalette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Schema-Typen {#scheme-types}

### Gelände {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/palette_new.png) ![Paletten](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Farbpalette](@site/static/img/personal/color-schemes/palette_ios.png) ![Farbpalette](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

Geländedateien (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definieren 3 [Geländedarstellungen](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Schummerung, Neigung* und *Höhe*. Für jeden Typ können Sie mehrere Paletten haben, zum Beispiel wird die *Lawinenneigung* standardmäßig bereitgestellt. Weitere Details finden Sie im Artikel [Topographie](../plugins/topography.md#default-color-scheme).

### Tracks & Routen {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Farbpalette](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Visualisierungen mit Linienverlauf verwenden Palettendateien (`route_<type_name>_<palette_name>.txt`), um GPX-Tracks und Routen einzufärben:

- Für [Routen](../navigation/guidance/map-during-navigation.md#color): *Geschwindigkeit (`route_speed_default.txt`), Neigung (`route_slope_default.txt`)* und *Höhe (Altitude) (`route_elevation_default.txt`)*.
- Für [GPX-Tracks](../map/tracks/appearance#track-colors-in-gpx-files): *Geschwindigkeit, Neigung, Höchstgeschwindigkeit (`route_maxspeed_default.txt`)* und *Höhe (Altitude)* oder Informationen von *externen Sensoren*.

### Favoriten & Wegpunkte {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Paletten](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Farbpalette](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

Die `user_palette_default.txt`-Palette wird für vordefinierte Farben verwendet, die [Favoriten](./favorites.md#edit--replace--delete) und [Wegpunkte](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints) zugewiesen werden.

### Wetter {#weather}

Wetterpalettendateien (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) definieren die Visualisierung für [Wetterschichten](../plugins/weather.md#weather-layers).


## Einstellungen {#settings}

### Palette bearbeiten {#palette-modify}

Sie können Paletten bearbeiten, um das Aussehen von Karten und Routen zu personalisieren. Eigene Farbpalettendateien können mit dem [Import/Export-Werkzeug](./import-export.md) zu OsmAnd hinzugefügt werden.

- *Tracks und Routen*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Gelände*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Wetter*: `weather_<type_name>.txt`.
- *Favoriten und Wegpunkte*: `user_palette_default.txt`.

Jede Zeile repräsentiert einen numerischen Wert (für die Farbpalette ist es ein Index) und RGB-Farbe. Zum Beispiel:

```xml
# TXT file named *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 degree RGBA {#0---90-degree-rgba}
0,46,185,0,191
# yellow  {#yellow-}
100,255,222,2,227
# red {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Nachdem Sie diese TXT-Datei nach *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt* verschoben haben, erscheint eine neue Palette im Menü Farbschema.

Wenn Sie eine bestehende Palettendatei in OsmAnd ändern müssen (anstatt eine neue TXT-Datei hinzuzufügen), können Sie sie über eine exportierte Sicherung (.osf) bearbeiten.
- Exportieren Sie die Palettendaten als .osf-Sicherung (siehe den Abschnitt [Import / Export](#import--export) unten).
- Entpacken Sie die exportierte .osf. Die .osf-Datei ist ein umbenanntes .zip-Archiv. Erstellen Sie eine Kopie der ursprünglichen .osf-Datei und entpacken Sie sie mit einem beliebigen Archiv-Tool.
- Finden und bearbeiten Sie die Paletten-TXT-Datei. Suchen Sie in den extrahierten Ordnern die benötigte Palettendatei (z. B. height_altitude_&lt;type_name&gt;.txt oder route_speed_&lt;type_name&gt;.txt) und bearbeiten Sie ihre Werte in einem Texteditor.
- Zurückzippen und in .osf umbenennen. Packen Sie den extrahierten Inhalt wieder in ein .zip-Archiv und benennen Sie es in .osf um. Behalten Sie die gleiche Ordnerstruktur bei.
- Importieren Sie die aktualisierte .osf in OsmAnd (siehe den Abschnitt **Import / Export** unten) und starten Sie die App neu, um die Änderungen anzuwenden.

### Import / Export {#import--export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profilaktionen Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Lokales Backup Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profilaktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profilaktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Sie können alle verfügbaren Standard- und benutzerdefinierten Farbpaletten mit dem Wiederherstellungs- und Backup-Dateien-Tool von OsmAnd importieren und exportieren.

- Öffnen Sie das Hauptmenü *Menü*, *Einstellungen*, scrollen Sie nach unten zum Abschnitt **Import/Export** (*Android*) oder **Lokales Backup** (*iOS*) und wählen Sie die gewünschte Aktion.
- Wählen Sie ein oder mehrere Elemente aus der Liste *Farbe* oder die Option *Alle auswählen*.
- Alle exportierten Dateien werden im `.osf`-Format gespeichert.
- Wenn die Größe Ihrer ausgewählten Daten erheblich ist, benötigt die Anwendung einige Zeit, um die `.osf`-Datei vorzubereiten.
- Sehen Sie sich den Artikel [*Import / Export*](../personal/import-export.md) für detailliertere Informationen an.

### Legende {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="Farbe"/></td>
    </tr>
</table>


Die Legende bietet eine einfache Möglichkeit, die verschiedenen Markierungen auf der Karte anzuzeigen und zu verstehen. Neue Farbpaletten wurden hinzugefügt, um die [**Geschwindigkeit** für Tracks](../map/tracks/appearance#track-colors-in-gpx-files), den [**Linientyp** für Routen](../navigation/guidance/map-during-navigation.md#color), die [**Höhe und Neigung** für das Gelände](../plugins/topography.md#default-color-scheme) und alle Farbpaletten der [**Wetterschicht**](../plugins/weather.md#weather-layers) anzuzeigen.

Die Legende wird automatisch basierend auf der ausgewählten Palette generiert und zeigt Gradientenschritte mit entsprechenden Einheiten (z. B. km/h für Geschwindigkeit, % für Neigung oder Meter für Höhe).

### Schnellaktionen {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aktion hinzufügen → <Translate ios="true" ids="configure_map"/> → Geländefarbschema ändern*

![Farbschema](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Farbschema](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Aktion hinzufügen → <Translate ios="true" ids="configure_map"/> → Geländefarbschema ändern*

![Farbpalette](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Farbpalette](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**Schnellaktion** zum Ändern der Palette für [Gelände](../../user/plugins/topography.md#modify-color-scheme). Es wurde die Möglichkeit hinzugefügt, zwischen Geländefarbschemata zu wechseln, ähnlich wie beim Wechseln zwischen Ebenen. Dies kann mit dem Werkzeug [Schnellaktionen](../widgets/quick-action.md#configure-map) erfolgen.  

Beim Konfigurieren dieser Aktion können Sie eine oder mehrere Geländefarbpaletten auswählen. Wenn mehrere Paletten ausgewählt sind, wechselt jeder Tipp auf die Schaltfläche durch die gewählten Paletten. Sie können auch den Zwischendialog aktivieren oder deaktivieren, um entweder die vollständige Liste der Paletten anzuzeigen oder stumm zwischen ihnen in einer vordefinierten Reihenfolge zu wechseln.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)