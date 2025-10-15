---
source-hash: 88b7bb3d18dfb693b3c6fe8a84f17bb8d80996ffd173b72307e9309445fca331
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

Farbschemata sind Teil der kostenpflichtigen Funktionen [Maps+](../purchases/index.md) und Pro <ProFeature />.  

:::

Farbschemata werden bei der [Einfärbung von Routen](#routes), dem [Kartengelände](#terrain) und der [Wetterkarte](#weather) verwendet und stellen einen separaten Teil der Informationen dar, die exportiert, importiert und bearbeitet werden können, um das Farbschema der Karte und die Datenvisualisierung zu ändern.

Die Daten der Farbpalette sind im Menü [*Karten & Ressourcen*](../personal/maps-resources.md#local) verfügbar.

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Farbpalette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Gelände {#terrain}

Geländedateien (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definieren 3 [Geländedarstellungen](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Schummerung, Neigung* und *Höhe*. Für jeden Typ können Sie mehrere Paletten haben, zum Beispiel wird die *Lawinenneigung* standardmäßig bereitgestellt.

### Routen {#routes}

Visualisierungen mit Linienverlauf verwenden Palettendateien (`route_<type_name>_<palette_name>.txt`), um GPX-Tracks und Routen einzufärben:

- Für [Routen](../navigation/guidance/map-during-navigation.md#color): *Geschwindigkeit, Neigung* und *Höhe (Altitude)*.
- Für [GPX-Tracks](../map/tracks/appearance#track-colors-in-gpx-files): *Geschwindigkeit, Neigung* und *Höhe (Altitude) oder Informationen von externen Sensoren*.

### Wetter {#weather}

Wetterpalettendateien (`weather_<type_name>.txt`) definieren die Visualisierung für [Wetterschichten](../plugins/weather.md#weather-layers).

### Farben {#colors}

Die Farbpalette (`user_palette_default.txt`) wird einfach für vordefinierte Farben verwendet, die [Favoriten](./favorites.md) und [Tracks](./tracks/) zugewiesen werden.


## Palettenlegende {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="Farbe"/></td>
    </tr>
</table>


Die Legende bietet eine einfache Möglichkeit, die verschiedenen Markierungen auf der Karte anzuzeigen und zu verstehen. Neue Farbpaletten wurden hinzugefügt, um die [**Geschwindigkeit** für Tracks](../map/tracks/appearance#track-colors-in-gpx-files), den [**Linientyp** für Routen](../navigation/guidance/map-during-navigation.md#color), die [**Höhe und Neigung** für das Gelände](../plugins/topography.md#default-color-scheme) und alle Farbpaletten der [**Wetterschicht**](../plugins/weather.md#weather-layers) anzuzeigen.


## Palettendatei bearbeiten {#edit-palette-file}

Sie können Paletten bearbeiten, um das Aussehen von Karten und Routen zu personalisieren. Eigene Farbpalettendateien können mit dem [Import/Export-Werkzeug](./import-export.md) zu OsmAnd hinzugefügt werden.

- *Routen*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Gelände*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Wetter*: `weather_<type_name>.txt`.
- *Farbe*: `user_palette_default.txt`.

Jede Zeile repräsentiert einen numerischen Wert (für die Farbpalette ist es ein Index) und eine RGB-Farbe. Zum Beispiel:

```xml
# TXT-Datei mit dem Namen *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 Grad RGBA {#0---90-degree-rgba}
0,46,185,0,191
# gelb {#yellow-}
100,255,222,2,227
# rot {#red}
200,255,1,1,255
# violett {#violet}
220,130,1,255,255

```

Nachdem Sie diese TXT-Datei nach *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt* verschoben haben, erscheint eine neue Palette im Menü Farbschema.


## Mehr lesen {#read-more}

### Schnellaktionen {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aktion hinzufügen → Topographie → Geländefarbschema ändern*

![Farbschema](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aktion hinzufügen → Topographie → Geländefarbschema ändern*

![Farbpalette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Schnellaktion** zum Ändern der Palette für das Gelände. Es wurde die Möglichkeit hinzugefügt, zwischen Geländefarbschemata zu wechseln, ähnlich wie beim Wechseln zwischen Ebenen. Dies kann mit dem Werkzeug [Schnellaktionen](../widgets/quick-action.md#configure-map) erfolgen.  


### Farben importieren / exportieren {#import--export-colors}

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

Sie können alle verfügbaren Standard- und benutzerdefinierten Farbpaletten mit dem Wiederherstellungs- und Sicherungswerkzeug von OsmAnd importieren und exportieren.

- Öffnen Sie das Hauptmenü *Menü*, *Einstellungen*, scrollen Sie nach unten zum Abschnitt **Import/Export** (*Android*) oder **Lokales Backup** (*iOS*) und wählen Sie die gewünschte Aktion.
- Wählen Sie ein oder mehrere Elemente aus der Liste *Farbe* oder die Option *Alle auswählen*.
- Alle exportierten Dateien werden im `.osf`-Format gespeichert.
- Wenn die Größe Ihrer ausgewählten Daten erheblich ist, benötigt die Anwendung einige Zeit, um die `.osf`-Datei vorzubereiten.
- Sehen Sie sich den Artikel [*Import / Export*](../personal/import-export.md) für detailliertere Informationen an.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)