---
source-hash: eb8c4b71007a1c4cfc8c26176511dd3bfc888cd65317d684c37297ecbb8d4fc3
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

Gli schemi di colori sono utilizzati nella [colorazione dei percorsi](#tracks-routes), nel [terreno della mappa](#terrain) e nella [mappa meteorologica](#weather), e sono rappresentati come una parte separata delle informazioni che possono essere esportate, importate e modificate per cambiare lo schema di colori della mappa e la visualizzazione dei dati.

I dati della palette di colori sono disponibili nel menu [*Maps & Resources*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *Menu → Maps & Resources → Local → Colors*

![Palette](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *Menu → Maps & Resources → Local → Colors*

![Palette di colori](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipi di schema {#scheme-types}

### Terreno {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palette](@site/static/img/personal/color-schemes/palette_new.png) ![Palette](@site/static/img/personal/color-schemes/palette_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Palette di colori](@site/static/img/personal/color-schemes/palette_ios.png) ![Palette di colori](@site/static/img/personal/color-schemes/palette_ios_2.png)

</TabItem>

</Tabs>

I file del terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiscono 3 [visualizzazioni del terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Ombreggiatura, Pendenza* e *Altitudine*. Per ogni tipo si possono avere più palette, ad esempio, la *pendenza da valanga* è fornita di default. Vedere l'articolo [Topografia](../plugins/topography.md#default-color-scheme) per maggiori dettagli.

### Tracce e Percorsi {#tracks-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palette](@site/static/img/personal/color-schemes/track_palette_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Palette di colori](@site/static/img/personal/color-schemes/track_palette_ios.png) 

</TabItem>

</Tabs>

Le visualizzazioni a gradiente di linea utilizzano file di palette (`route_<type_name>_<palette_name>.txt`) per colorare le tracce GPX e i Percorsi:

- Per i [Percorsi](../navigation/guidance/map-during-navigation.md#color): *Velocità (`route_speed_default.txt`), Pendenza (`route_slope_default.txt`)* e *Elevazione (Altitudine) (`route_elevation_default.txt`)*.
- Per le [Tracce GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocità, Pendenza, Velocità Massima (`route_maxspeed_default.txt`)* e *Elevazione (Altitudine)*, o info da *sensori esterni*.

### Preferiti e Waypoint {#favorites-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Palette](@site/static/img/personal/color-schemes/favorites_palette_android.png) ![Palette](@site/static/img/personal/color-schemes/favorites_palette_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Palette di colori](@site/static/img/personal/color-schemes/favorites_palette_ios.png) 

</TabItem>

</Tabs>

La palette `user_palette_default.txt` è utilizzata per i colori predefiniti assegnati a [Preferiti](./favorites.md#edit--replace--delete) e [Waypoint](https://osmand.net/docs/user/navigation/setup/gpx-navigation#waypoints).

### Meteo {#weather}

I file della palette meteo (`weather_cloud.txt`, `weather_precip.txt`, `weather_pressure.txt`, `weather_temperature.txt`, `weather_wind.txt`) definiscono la visualizzazione per i [livelli meteo](../plugins/weather.md#weather-layers).


## Impostazioni {#settings}

### Modifica palette {#palette-modify}

È possibile modificare le palette per personalizzare l'aspetto di mappe e percorsi. I propri file di palette di colori possono essere aggiunti a OsmAnd utilizzando lo strumento di [importazione/esportazione](./import-export.md).

- *Tracce e Percorsi*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_maxspeed_default.txt`, `route_elevation_default.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Meteo*: `weather_<type_name>.txt`.
- *Preferiti e Waypoint*: `user_palette_default.txt`.

Ogni riga rappresenta un valore numerico (per la palette di colori, è un indice) e un colore RGB. Per esempio:

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

Dopo aver spostato questo file TXT in *..Android/data/net.osmand/files/color-palette/height_altitude_0-200.txt*, una nuova palette apparirà nel menu Schemi di colori.

### Importa / Esporta {#import--export}

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

### Legenda {#palette}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="colore"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="colore"/></td>
    </tr>
</table>


La legenda fornisce un modo semplice per visualizzare e comprendere i diversi segni sulla mappa. Sono state aggiunte nuove palette di colori per visualizzare la [**velocità** per le tracce](../map/tracks/appearance#track-colors-in-gpx-files), il [**tipo di linea** per i percorsi](../navigation/guidance/map-during-navigation.md#color), l'[**altitudine e la pendenza** per il terreno](../plugins/topography.md#default-color-scheme) e tutte le palette di colori dei [**livelli meteo**](../plugins/weather.md#weather-layers).

La legenda viene generata automaticamente in base alla palette selezionata e mostra i passaggi di gradiente con le unità appropriate (ad esempio, km/h per la velocità, % per la pendenza o metri per l'altitudine).

### Azioni rapide {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Aggiungi azione → <Translate ios="true" ids="configure_map"/> → Cambia schema colori Terreno*

![Schema colori](@site/static/img/personal/color-schemes/color_scheme_new.png) ![Schema colori](@site/static/img/personal/color-schemes/color_scheme_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> → &nbsp;  "**＋**"  &nbsp; → <Translate ios="true" ids="add_button"/> → Aggiungi azione → <Translate ios="true" ids="configure_map"/> → Cambia schema colori Terreno*

![Palette di colori](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new.png) ![Palette di colori](@site/static/img/personal/color-schemes/color_scheme_qa_ios_new_2.png)

</TabItem>

</Tabs>

**Azione Rapida** per cambiare la palette per il [Terreno](../../user/plugins/topography.md#modify-color-scheme). Aggiunta la possibilità di passare da uno schema di colori del terreno all'altro, in modo simile al passaggio tra i livelli. Questo può essere fatto utilizzando lo strumento [Azioni Rapide](../widgets/quick-action.md#configure-map).  

Durante la configurazione di questa azione, è possibile selezionare una o più palette di colori del terreno. Se sono selezionate diverse palette, ogni tocco sul pulsante ciclerà attraverso le palette scelte. È anche possibile abilitare o disabilitare la finestra di dialogo intermedia per mostrare l'elenco completo delle palette o passare tra di esse silenziosamente in un ordine predefinito.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)