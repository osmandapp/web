---
source-hash: 3c0537caba10d048fc41eb1aafbf2fad61dfc855cb8b7c403db89f081990b44f
sidebar_position: 5
title:  Combinazioni di colori
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



## Panoramica {#overview}

:::info Funzione a pagamento

Le combinazioni di colori sono utilizzate come parte delle funzionalità a pagamento [Maps+](../purchases/index.md) e Pro <ProFeature />.

:::

Le combinazioni di colori sono utilizzate nella [colorazione dei percorsi](#routes), nel [terreno della mappa](#terrain) e nella [mappa meteo](#weather), e sono rappresentate come una parte separata delle informazioni che possono essere esportate, importate e modificate per cambiare la combinazione di colori della mappa e la visualizzazione dei dati.

I dati della tavolozza dei colori sono disponibili nel menu [*Mappe e risorse*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *Menu → Mappe e risorse → Locale → Colori*

![Palettes](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Menu → Mappe e risorse → Locale → Colori*

![Color palette](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipi di schema {#scheme-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Palettes](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Color palette](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

I file del terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiscono 3 [visualizzazioni del terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Hillshade, Pendenza* e *Altitudine*. Per ogni tipo è possibile avere più tavolozze, ad esempio, la *pendenza valanghe* è fornita per impostazione predefinita.

### Percorsi {#routes}

Le visualizzazioni del gradiente di linea utilizzano file di tavolozza (`route_<type_name>_<palette_name>.txt`) per colorare tracce GPX e percorsi:

- Per i [Percorsi](../navigation/guidance/map-during-navigation.md#color): *Velocità, Pendenza* e *Altitudine*.
- Per le [Tracce GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocità, Pendenza* e *Altitudine, o informazioni da sensori esterni*.

### Meteo {#weather}

I file della tavolozza meteo (`weather_<type_name>.txt`) definiscono la visualizzazione per i [livelli meteo](../plugins/weather.md#weather-layers).

### Colori {#colors}

La tavolozza dei colori (`user_palette_default.txt`) viene semplicemente utilizzata per i colori predefiniti da assegnare a [Preferiti](./favorites.md), [Tracce](./tracks/).


## Legenda tavolozza {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="color"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="color"/></td>
    </tr>
</table>


La legenda fornisce un modo semplice per visualizzare e comprendere le diverse marcature sulla mappa. Sono state aggiunte nuove tavolozze di colori per visualizzare la [**velocità** per le tracce](../map/tracks/appearance#track-colors-in-gpx-files), il [**tipo di linea** per i percorsi](../navigation/guidance/map-during-navigation.md#color), l'[**altitudine e la pendenza** per il terreno](../plugins/topography.md#default-color-scheme) e tutte le tavolozze di colori per i [**livelli meteo**](../plugins/weather.md#weather-layers).


## Modifica file tavolozza {#edit-palette-file}

È possibile modificare le tavolozze per personalizzare l'aspetto di mappe e percorsi. I propri file di tavolozza dei colori possono essere aggiunti a OsmAnd utilizzando lo [strumento di importazione/esportazione](./import-export.md).

- *Percorsi*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Meteo*: `weather_<type_name>.txt`.
- *Colore*: `user_palette_default.txt`.

Ogni riga rappresenta un valore numerico (per la tavolozza dei colori, è un indice) e un colore RGB. Ad esempio:

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

Dopo aver spostato questo file TXT in *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, una nuova tavolozza apparirà nel menu Combinazione di colori.


## Leggi di più {#read-more}

### Azioni rapide {#quick-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia combinazione colori terreno*

![Color Scheme](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia combinazione colori terreno*

![Color palette](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Azione rapida** per cambiare la tavolozza del terreno. Aggiunta la possibilità di passare da una combinazione di colori del terreno all'altra, in modo simile al passaggio tra i livelli. Ciò può essere fatto utilizzando lo strumento [Azioni rapide](../widgets/quick-action.md#configure-map).


### Importa / Esporta colori {#import--export-colors}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

È possibile importare ed esportare tutte le tavolozze di colori predefinite e personalizzate disponibili utilizzando lo strumento di ripristino e backup dei file di OsmAnd.

- Apri il *Menu* principale, *Impostazioni*, scorri verso il basso fino alla sezione **Importa/esporta** (*Android*) o **Backup locale** (*iOS*) e seleziona l'azione richiesta.
- Seleziona uno o più elementi dall'elenco *Colore* o l'opzione *Seleziona tutto*.
- Tutti i file esportati vengono salvati in formato `.osf`.
- Se la dimensione dei dati selezionati è significativa, l'applicazione impiegherà del tempo per preparare il file `.osf`.
- Consulta l'articolo [*Importa / Esporta*](../personal/import-export.md) per informazioni più dettagliate.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Gennaio 2025*