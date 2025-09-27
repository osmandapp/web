---
source-hash: 88b7bb3d18dfb693b3c6fe8a84f17bb8d80996ffd173b72307e9309445fca331
sidebar_position: 5
title:  Schemi di colori
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

Gli schemi di colori sono utilizzati come parte delle funzionalità a pagamento [Maps+](../purchases/index.md) e Pro <ProFeature />.

:::

Gli schemi di colori sono utilizzati nella [colorazione dei percorsi](#routes), nel [terreno della mappa](#terrain) e nella [mappa meteorologica](#weather), e sono rappresentati come una parte separata delle informazioni che possono essere esportate, importate e modificate per cambiare lo schema di colori della mappa e la visualizzazione dei dati.

I dati della palette di colori sono disponibili nel menu [*Mappe e Risorse*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *Menu → Mappe e Risorse → Locale → Colori*

![Palette](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *Menu → Mappe e Risorse → Locale → Colori*

![Palette di colori](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipi di schema {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palette](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Palette di colori](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

I file del terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiscono 3 [visualizzazioni del terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Ombreggiatura, Pendenza* e *Altitudine*. Per ogni tipo si possono avere più palette, ad esempio, la *pendenza da valanga* è fornita di default.

### Percorsi {#routes}

Le visualizzazioni a gradiente di linea utilizzano file di palette (`route_<type_name>_<palette_name>.txt`) per colorare le tracce GPX e i Percorsi:

- Per i [Percorsi](../navigation/guidance/map-during-navigation.md#color): *Velocità, Pendenza* e *Elevazione (Altitudine)*.
- Per le [Tracce GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocità, Pendenza* ed *Elevazione (Altitudine), o informazioni da sensori esterni*.

### Meteo {#weather}

I file della palette meteo (`weather_<type_name>.txt`) definiscono la visualizzazione per i [livelli meteo](../plugins/weather.md#weather-layers).

### Colori {#colors}

La palette di colori (`user_palette_default.txt`) è semplicemente usata per i colori predefiniti da assegnare a [Preferiti](./favorites.md), [Tracce](./tracks/).


## Legenda della palette {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="colore"/></td>
    </tr>
</table>


La legenda fornisce un modo semplice per visualizzare e comprendere i diversi segni sulla mappa. Sono state aggiunte nuove palette di colori per visualizzare la [**velocità** per le tracce](../map/tracks/appearance#track-colors-in-gpx-files), il [**tipo di linea** per i percorsi](../navigation/guidance/map-during-navigation.md#color), l'[**altitudine e la pendenza** per il terreno](../plugins/topography.md#default-color-scheme) e tutte le palette di colori dei [**livelli meteo**](../plugins/weather.md#weather-layers).


## Modificare il file della palette {#edit-palette-file}

È possibile modificare le palette per personalizzare l'aspetto di mappe e percorsi. I propri file di palette di colori possono essere aggiunti a OsmAnd utilizzando lo strumento di [importazione/esportazione](./import-export.md).

- *Percorsi*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Meteo*: `weather_<type_name>.txt`.
- *Colore*: `user_palette_default.txt`.

Ogni riga rappresenta un valore numerico (per la palette di colori, è un indice) e un colore RGB. Per esempio:

```xml
# File TXT chiamato *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 gradi RGBA {#0---90-degree-rgba}
0,46,185,0,191
# giallo {#yellow-}
100,255,222,2,227
# rosso {#red}
200,255,1,1,255
# viola {#violet}
220,130,1,255,255

```

Dopo aver spostato questo file TXT in *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, una nuova palette apparirà nel menu Schemi di colori.


## Per saperne di più {#read-more}

### Azioni rapide {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia schema colori Terreno*

![Schema colori](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → Topografia → Cambia schema colori Terreno*

![Palette di colori](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Azione Rapida** per cambiare la palette per il Terreno. Aggiunta la possibilità di passare da uno schema di colori del terreno all'altro, in modo simile al passaggio tra i livelli. Questo può essere fatto utilizzando lo strumento [Azioni Rapide](../widgets/quick-action.md#configure-map).


### Importa / Esporta Colori {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Esportazione Azioni Profili Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup locale Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Esportazione Azioni Profili iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Esportazione Azioni Profili iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

È possibile importare ed esportare tutte le palette di colori predefinite e personalizzate disponibili utilizzando lo strumento di ripristino e backup di OsmAnd.

- Aprire il *Menu* principale, *Impostazioni*, scorrere fino alla sezione **Importa/esporta** (*Android*) o **Backup locale** (*iOS*) e selezionare l'azione richiesta.
- Selezionare uno o più elementi dall'elenco *Colori* o l'opzione *Seleziona tutto*.
- Tutti i file esportati vengono salvati in formato `.osf`.
- Se la dimensione dei dati selezionati è significativa, l'applicazione impiegherà un po' di tempo per preparare il file `.osf`.
- Consultare l'articolo [*Importa / Esporta*](../personal/import-export.md) per informazioni più dettagliate.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)