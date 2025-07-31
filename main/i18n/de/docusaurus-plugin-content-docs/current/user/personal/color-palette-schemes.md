---
source-hash: 1c2dbd1648b5f88680eb1ade2c212d6275bae4f84aadcd626344d490380768e5
sidebar_position: 5
title: Farbschemata
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

:::info Kostenpflichtige Funktion

Farbschemata werden als Teil der kostenpflichtigen [Karten+](../purchases/index.md) und Pro <ProFeature /> Funktionen verwendet.

:::

Farbschemata werden bei der [Routenfärbung](#routes), dem [Kartengelände](#terrain) und der [Wetterkarte](#weather) verwendet und stellen einen separaten Teil der Informationen dar, die exportiert, importiert und bearbeitet werden können, um das Farbschema der Karte und die Datenvisualisierung zu ändern.

Farbpalettendaten sind im Menü [*Karten & Ressourcen*](../personal/maps-resources.md#local) verfügbar.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Menü → Karten & Ressourcen → Lokal → Farben*

![Paletten](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Menü → Karten & Ressourcen → Lokal → Farben*

![Farbpalette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Schematypen {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Farbpalette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Gelände {#terrain}

Geländedateien (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definieren 3 [Geländevisualisierungen](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Schummerung, Neigung* und *Höhe*. Für jeden Typ können Sie mehrere Paletten haben, z.B. ist *Lawinenhang* standardmäßig vorhanden.

### Routen {#routes}

Linienverlaufsvisualisierungen verwenden Palettendateien (`route_<type_name>_<palette_name>.txt`), um GPX-Tracks und Routen zu färben:

- Für [Routen](../navigation/guidance/map-during-navigation.md#color): *Geschwindigkeit, Neigung* und *Höhe*.
- Für [GPX-Tracks](../map/tracks/appearance#track-colors-in-gpx-files): *Geschwindigkeit, Neigung* und *Höhe oder Informationen von externen Sensoren*.

### Wetter {#weather}

Wetterpalettendateien (`weather_<type_name>.txt`) definieren die Visualisierung für [Wetterschichten](../plugins/weather.md#weather-layers).

### Farben {#colors}

Die Farbpalette (`user_palette_default.txt`) wird einfach für vordefinierte Farben verwendet, die [Favoriten](./favorites.md) und [Tracks](./tracks/) zugewiesen werden können.


## Palettenlegende {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="Farbe"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="Farbe"/></td>
    </tr>
</table>


Die Legende bietet eine einfache Möglichkeit, die verschiedenen Markierungen auf der Karte anzuzeigen und zu verstehen. Neue Farbpaletten wurden hinzugefügt, um die [**Geschwindigkeit** für Tracks](../map/tracks/appearance#track-colors-in-gpx-files), den [**Linientyp** für Routen](../navigation/guidance/map-during-navigation.md#color), die [**Höhe und Neigung** für das Gelände](../plugins/topography.md#default-color-scheme) und alle [**Wetterschicht**](../plugins/weather.md#weather-layers) Farbpaletten anzuzeigen.


## Palettendatei bearbeiten {#edit-palette-file}

Sie können Paletten bearbeiten, um das Aussehen von Karten und Routen zu personalisieren. Eigene Farbpalettendateien können mit dem [Import-/Export-Tool](./import-export.md) zu OsmAnd hinzugefügt werden.

- *Routen*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Gelände*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Wetter*: `weather_<type_name>.txt`.
- *Farbe*: `user_palette_default.txt`.

Jede Zeile stellt einen numerischen Wert (für die Farbpalette ist es ein Index) und eine RGB-Farbe dar. Zum Beispiel:

```xml
# TXT-Datei namens *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 Grad RGBA {#0---90-degree-rgba}
0,46,185,0,191
# gelb  {#yellow-}
100,255,222,2,227
# rot {#red}
200,255,1,1,255
# violett {#violet}
220,130,1,255,255

```

Nachdem diese TXT-Datei nach *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt* verschoben wurde, erscheint eine neue Palette im Farbschema-Menü.


## Mehr lesen {#read-more}

### Schnellaktionen {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aktion hinzufügen → Topographie → Geländefarbschema ändern*

![Farbschema](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aktion hinzufügen → Topographie → Geländefarbschema ändern*

![Farbpalette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Schnellaktion** zum Ändern der Palette für das Gelände. Es wurde die Möglichkeit hinzugefügt, zwischen Geländefarbschemata zu wechseln, ähnlich dem Wechsel zwischen Ebenen. Dies kann mit dem Tool [Schnellaktionen](../widgets/quick-action.md#configure-map) erfolgen.

### Farben importieren / exportieren {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profile Aktionen Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup lokal Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profile Aktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Profile Aktionen Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Sie können alle verfügbaren Standard- und benutzerdefinierten Farbpaletten mit dem Wiederherstellungs- und Sicherungstool von OsmAnd importieren und exportieren.

- Öffnen Sie das Haupt-*Menü*, *Einstellungen*, scrollen Sie zum Abschnitt **Import/Export** (*Android*) oder **Lokales Backup** (*iOS*) und wählen Sie die gewünschte Aktion aus.
- Wählen Sie ein oder mehrere Elemente aus der Liste *Farbe* oder die Option *Alle auswählen*.
- Alle exportierten Dateien werden im `.osf`-Format gespeichert.
- Wenn die Größe Ihrer ausgewählten Daten erheblich ist, benötigt die Anwendung einige Zeit, um die `.osf`-Datei vorzubereiten.
- Weitere detaillierte Informationen finden Sie im Artikel [*Import / Export*](../personal/import-export.md).

## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Januar 2025*