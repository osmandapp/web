---
source-hash: 1c2dbd1648b5f88680eb1ade2c212d6275bae4f84aadcd626344d490380768e5
sidebar_position: 5
title: Combinazioni di colori
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

:::info Funzionalità a pagamento

Le combinazioni di colori sono utilizzate come parte delle funzionalità a pagamento [Mappe+](../purchases/index.md) e Pro <ProFeature />.

:::

Le combinazioni di colori sono utilizzate nella [colorazione dei percorsi](#routes), nel [terreno della mappa](#terrain) e nella [mappa meteorologica](#weather), e sono rappresentate come una parte separata delle informazioni che possono essere esportate, importate e modificate per cambiare la combinazione di colori della mappa e la visualizzazione dei dati.

I dati della tavolozza dei colori sono disponibili nel menu [*Mappe e Risorse*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Menu → Mappe e Risorse → Locale → Colori*

![Tavolozze](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Menu → Mappe e Risorse → Locale → Colori*

![Tavolozza dei colori](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipi di combinazione {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tavolozze](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tavolozza dei colori](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

I file del terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiscono 3 [visualizzazioni del terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Rilievo ombreggiato, Pendenza* e *Altitudine*. Per ogni tipo puoi avere più tavolozze, ad esempio, *pendenza valanghe* è fornita per impostazione predefinita.

### Percorsi {#routes}

Le visualizzazioni del gradiente di linea utilizzano file di tavolozza (`route_<type_name>_<palette_name>.txt`) per colorare le tracce GPX e i Percorsi:

- Per i [Percorsi](../navigation/guidance/map-during-navigation.md#color): *Velocità, Pendenza* e *Elevazione (Altitudine)*.
- Per le [Tracce GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocità, Pendenza* e *Elevazione (Altitudine), o informazioni da sensori esterni*.

### Meteo {#weather}

I file della tavolozza meteo (`weather_<type_name>.txt`) definiscono la visualizzazione per i [livelli meteo](../plugins/weather.md#weather-layers).

### Colori {#colors}

La tavolozza dei colori (`user_palette_default.txt`) è semplicemente utilizzata per i colori predefiniti da assegnare a [Preferiti](./favorites.md), [Tracce](./tracks/).


## Legenda della tavolozza {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="colore"/></td>
    </tr>
</table>


La legenda fornisce un modo semplice per visualizzare e comprendere le diverse marcature sulla mappa. Sono state aggiunte nuove tavolozze di colori per visualizzare la [**velocità** per le tracce](../map/tracks/appearance#track-colors-in-gpx-files), il [**tipo di linea** per i percorsi](../navigation/guidance/map-during-navigation.md#color), l'[**altitudine e pendenza** per il terreno](../plugins/topography.md#default-color-scheme) e tutte le tavolozze di colori dei [**livelli meteo**](../plugins/weather.md#weather-layers).


## Modifica del file della tavolozza {#edit-palette-file}

È possibile modificare le tavolozze per personalizzare l'aspetto di mappe e percorsi. I propri file di tavolozza dei colori possono essere aggiunti a OsmAnd utilizzando lo [strumento di importazione/esportazione](./import-export.md).

- *Percorsi*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Meteo*: `weather_<type_name>.txt`.
- *Colore*: `user_palette_default.txt`.

Ogni riga rappresenta un valore numerico (per la tavolozza dei colori, è un indice) e il colore RGB. Ad esempio:

```xml
# File TXT denominato *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 gradi RGBA {#0---90-degree-rgba}
0,46,185,0,191
# giallo {#yellow-}
100,255,222,2,227
# rosso {#red}
200,255,1,1,255
# viola {#violet}
220,130,1,255,255

```

Dopo aver spostato questo file TXT in *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, una nuova tavolozza apparirà nel menu Combinazione di colori.


## Per saperne di più {#read-more}

### Azioni rapide {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia combinazione di colori del terreno*

![Combinazione di colori](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia combinazione di colori del terreno*

![Tavolozza dei colori](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Azione rapida** per cambiare la tavolozza del terreno. Aggiunta la possibilità di passare da una combinazione di colori del terreno all'altra, simile al passaggio tra i livelli. Questo può essere fatto utilizzando lo strumento [Azioni rapide](../widgets/quick-action.md#configure-map).


### Importa/Esporta colori {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Esporta azioni profili Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup locale Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Esporta azioni profili iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Esporta azioni profili iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

È possibile importare ed esportare tutte le tavolozze di colori predefinite e personalizzate disponibili utilizzando lo strumento di ripristino e backup dei file di OsmAnd.

- Aprire il *Menu* principale, *Impostazioni*, scorrere fino alla sezione **Importa/esporta** (*Android*) o **Backup locale** (*iOS*) e selezionare l'azione richiesta.
- Selezionare uno o più elementi dall'elenco *Colore* o l'opzione *Seleziona tutto*.
- Tutti i file esportati vengono salvati in formato `.osf`.
- Se la dimensione dei dati selezionati è significativa, l'applicazione impiegherà del tempo per preparare il file `.osf`.
- Consultare l'articolo [*Importa/Esporta*](../personal/import-export.md) per informazioni più dettagliate.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Gennaio 2025*