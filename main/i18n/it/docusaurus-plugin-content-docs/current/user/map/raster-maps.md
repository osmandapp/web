---
source-hash: 920207bbfa1108e21a6ec98acd47b4e83730bee1cdc303a464524ab28654175f
sidebar_position: 6
title:  Mappe Raster (Online / Offline)
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

<InfoIncompleteArticle/>

## Panoramica {#overview}

Le mappe raster sono aggiunte significative e utili alle mappe vettoriali di OsmAnd. Permettono di combinare varie fonti di mappe con le mappe vettoriali. Ad esempio, le informazioni su colline e pendenze vengono visualizzate come un livello raster. È possibile visualizzare una sovrapposizione di sentieri escursionistici, mappe delle precipitazioni, dati sul traffico in tempo reale e una sovrapposizione di immagini satellitari su una mappa vettoriale di base traslucida. È anche possibile passare dalle mappe predefinite a tile raster sul web.


## Casi d'uso {#use-cases}

Le mappe raster hanno una vasta gamma di utilizzi. Ecco alcuni dei più popolari:

- Immagini satellitari come underlay (sottostrato).
- Informazioni sul traffico in tempo reale.
- Previsioni pioggia come overlay (sovrapposizione).
- Mappe topografiche con l'ombreggiatura di colline e pendenze.
- Percorsi ciclabili e di corsa attivi come overlay.
- Informazioni sulle imbarcazioni in tempo reale.
- Tile online di OpenStreetMap per la modifica di OSM.

![Panoramica delle mappe online](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
È anche possibile cambiare la fonte principale delle mappe da mappe vettoriali a tile online.
:::


## Mappe Raster {#raster-maps}

Le mappe online in OsmAnd sono composte da dati raster, che consistono in pixel (chiamati anche celle di una griglia) - essenzialmente un insieme di piccole immagini note come tile. A differenza delle mappe vettoriali, che rappresentano dati come strade, punti e poligoni utilizzando informazioni binarie, le tile delle mappe raster sono disposte in una griglia e possono apparire pixellate a livelli di zoom elevati perché ogni pixel ha un valore o una classe fissa.

### Confronto con le mappe vettoriali predefinite {#comparison-to-default-vector-maps}

**Vantaggi:**

- Poiché le mappe raster sono pre-renderizzate, si caricano più velocemente, eliminando la necessità per il dispositivo di elaborare e renderizzare i dati in tempo reale.
- Le mappe raster possono essere caricate dinamicamente durante la navigazione.
- È possibile creare una cache offline e scaricare solo le tile mancanti secondo necessità.
- È possibile utilizzare un numero illimitato di fonti web esterne per le mappe raster, rendendole flessibili per diversi tipi di mappe, come viste satellitari o mappe specializzate.
- I dati raster, come le informazioni sul traffico, possono essere aggiornati regolarmente dopo la scadenza (ad es. ogni 20-30 minuti, a seconda della configurazione).

**Svantaggi:**

- Le mappe raster occupano molto più spazio delle mappe vettoriali. Ad esempio, la mappa di una città potrebbe essere di 15 MB come mappa vettoriale, ma aumentare a 50 MB al livello di zoom 15, 200 MB al livello di zoom 16 e fino a 800 MB al livello di zoom 17.
- Non è possibile toccare luoghi o oggetti specifici sulle mappe raster per ottenere maggiori informazioni.
- Le mappe raster non possono essere stilizzate o modificate per escludere oggetti specifici.
- Ingrandendo troppo l'immagine può apparire pixellata, specialmente se non sono disponibili tile ad alta risoluzione.
- Non è possibile ruotare la mappa senza ruotare il testo, il che può rendere difficile la lettura delle etichette.


## Come usare le mappe raster {#how-to-use-raster-maps}

**Abilita plugin**.

- **iOS**. Per *iOS*, questa funzione funziona per impostazione predefinita.
- **Android**. Per *Android*, per utilizzare le mappe raster in OsmAnd è necessario abilitare il [plugin Mappe online](../plugins/online-map.md). Seguire questi passaggi: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Modifica i parametri del livello**. Per migliorare la visibilità e la combinazione dei livelli di mappe raster, è possibile regolare la trasparenza del livello utilizzando il cursore sullo schermo. Inoltre, è possibile modificare lo stile della mappa vettoriale nascondendo i poligoni, rendendo più visibili i livelli di underlay. Ciò è particolarmente utile quando si visualizzano immagini satellitari.


## Selezionare le mappe raster {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Mostra mappe](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Mostra mappe](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

In OsmAnd, le mappe raster possono fungere da fonte di mappa aggiuntiva accanto alle mappe vettoriali predefinite, ottimizzate per l'uso offline.  

Si ha la flessibilità di aggiungere uno o due livelli di tile online per completare la mappa di base. Ciò consente di visualizzare fino a tre livelli di mappa contemporaneamente sullo schermo. Ad esempio, è possibile avere la mappa vettoriale offline di OsmAnd come base, sovrapporvi una vista satellitare e posizionare una mappa delle piste ciclabili come underlay per maggiori dettagli.  

È anche possibile regolare la trasparenza della mappa di base per fonderla con i livelli. Se necessario, è possibile abilitare un cursore di trasparenza sulla schermata principale per regolazioni rapide.


### Principale {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Mostra mappe](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Mostra mappe](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

È possibile scegliere uno stile di mappa dall'elenco o [aggiungerne](#add-new-online-raster-map-source) uno proprio.


### Livello di sovrapposizione (Overlay) {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configura underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configura underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Attiva/disattiva* la mappa Underlay.
2. *Trasparenza overlay* (*Android*)/ *Trasparenza* della mappa Overlay (*iOS*).
3. *Mostra cursore trasparenza* (*Android*) / *Mostra cursore sulla mappa* (*iOS*). Accesso rapido all'impostazione della trasparenza.
4. *Fonte mappa overlay* (*Android*) / *Livelli disponibili* (*iOS*). È possibile scegliere una mappa a tile da installare o aggiornare.
5. *Mostra simboli mappa* - come testo, segnali stradali e altro.  
6. *Aggiungi fonte online* (*iOS*).
7. *Importa da documenti* (*iOS*).


### Livello di base (Underlay) {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configura underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configura underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Attiva/disattiva* la mappa Underlay.
2. *Trasparenza mappa di base*.
3. *Mostra cursore trasparenza* (*Android*) / *Mostra cursore sulla mappa* (*iOS*). Accesso rapido all'impostazione della trasparenza.
4. *Fonte mappa underlay* (*Android*) / *Livelli disponibili* (*iOS*). È possibile scegliere una mappa a tile da installare o aggiornare.
5. *Mostra/Nascondi poligoni*.
6. *Aggiungi fonte online* (*iOS*).
7. *Importa da documenti* (*iOS*).


## Ombreggiatura / Pendenza {#hillshade--slope}

![Livelli del terreno](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Ombreggiatura** e **Pendenza** sono mappe raster offline che mostrano il rilievo del terreno. Vengono visualizzate come un livello di mappa speciale, una seconda sovrapposizione sulla mappa di base. Le mappe contengono informazioni aggiuntive sull'elevazione per aiutare a comprendere più accuratamente la pendenza e le ombre del paesaggio. Le informazioni di *Ombreggiatura* e *Pendenza* si basano su dati provenienti da un'unica fonte, il *file Global planet*, e sono suddivise per regioni.  

Non è necessario passare da un livello all'altro di Ombreggiatura e Pendenza, poiché vengono uniti automaticamente. È possibile selezionare solo uno di questi livelli da visualizzare sulla mappa, ma si ha anche la possibilità di combinarli entrambi [come underlay o overlay](#select-raster-maps) su altri livelli per una rappresentazione più visiva del terreno.

Per iniziare a usare Ombreggiatura e Pendenza è necessario:

1. Acquistare il plugin Topografia:
    - [Acquisti Android](../purchases/android.md)
    - [Acquisti iOS](../purchases/ios.md)
2. Abilitare il [plugin Topografia](../plugins/topography.md):  
    *Menu → Plugin → ︙ → Abilita*
3. Selezionare la regione richiesta e scaricare **Mappa del terreno (3D)**.
4. Il processo di download potrebbe richiedere del tempo, a seconda delle dimensioni della regione selezionata e della velocità della connessione Internet.


### Ombreggiatura e Rilievo 3D {#hillshade-and-3d-relief}

| Ombreggiatura | Rilievo 3D |
|--------|---------|
| ![Livelli del terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Livelli del terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

La differenza di visualizzazione del rilievo sulla mappa quando si applicano queste impostazioni è descritta nell'articolo **Topografia** nella sezione corrispondente [Ombreggiatura e Rilievo 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Configurare le opzioni di visualizzazione {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Livelli del terreno](@site/static/img/plugins/online-maps/terrain_layers.png)

È possibile personalizzare il livello di zoom per la visualizzazione e la trasparenza per Ombreggiatura e Pendenza. Per maggiori dettagli, consultare l'[articolo Topografia](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Rilievo 3D {#3d-relief}

:::note
Il [Rilievo 3D](../plugins/topography.md#3d-relief) è una funzione a pagamento di [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Livelli del terreno](@site/static/img/plugins/online-maps/raster_maps_3d.png)

La funzione [**Rilievo 3D**](../plugins/topography.md#3d-relief) è una tecnologia di mappatura che consente la visualizzazione del terreno su una mappa utilizzando modelli tridimensionali. Questa funzione aggiunge informazioni sull'elevazione a una normale mappa bidimensionale, creando un effetto 3D e di profondità che permette di visualizzare meglio il terreno.  

*Per iniziare a usare il Rilievo 3D*:  
È necessario acquistare il [piano di acquisto OsmAnd Pro](../plugins/index.md#purchase), abilitare il [plugin Topografia](../plugins/topography.md) e attivare la voce [Rilievo 3D](../plugins/topography.md#3d-relief) in *Menu → Configura mappa*.


*Come funziona la funzione Rilievo 3D*:  
*1.* Per creare un rilievo 3D, OsmAnd riceve informazioni sull'elevazione del terreno.  
*2.* Sulla base dei dati di elevazione, viene creato un modello 3D per visualizzare montagne, colline, valli e altri elementi del terreno sulla mappa.  
*3.* OsmAnd visualizza quindi questi modelli tridimensionali su una mappa piana. La mappa può essere ingrandita, rimpicciolita e ruotata per visualizzare il terreno da diverse angolazioni e prospettive.  
*4.* La visualizzazione delle linee di contorno sulla mappa non dipende dal fatto che la fonte della mappa sia online o offline.


## Preparare/Copiare le mappe raster sul dispositivo {#preparecopy-raster-maps-to-device}

Esistono diversi modi per aggiungere una nuova mappa raster, copiarla da un altro dispositivo, prepararla su un PC e pre-scaricare le tile per l'uso offline. Ad esempio, è possibile creare il proprio pacchetto di mappe su un PC utilizzando software speciali come [MOBAC, OsmAndMapCreator, ecc.](../../technical/map-creation/index.md). Tipicamente le mappe raster sono distribuite come file con estensione `.sqlitedb`.

Ecco i metodi principali per aggiungere una nuova fonte di mappa raster non ancora definita in OsmAnd:

- Aprire un file `.sqlitedb` pronto all'uso con OsmAnd.
- Importare un pacchetto con mappe online preparate da un'altra applicazione OsmAnd come un **pacchetto** speciale `.osf` tramite la [funzionalità di Importa / esporta](../personal/import-export.md).
- Creare una nuova fonte di mappa online direttamente sul dispositivo mobile.
- Preparare un URL magico con i parametri della fonte di mappa online e aprirlo con OsmAnd.


### Aggiungere una nuova fonte di mappa raster online {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Aggiungi fonte online](@site/static/img/plugins/online-maps/add-online-source-2.png)

Per creare una fonte di mappa raster è necessario conoscere l'**URL di una tile**, che è un URL specifico che distribuisce le tile della mappa nella Proiezione di Mercatore. Ad esempio, un URL di una tile potrebbe assomigliare a questo: `https://tile.osmand.net/hd/6/55/25.png`, dove `tile.osmand.net/hd/` è l'URL di base.

Ecco i parametri chiave da configurare quando si imposta una nuova fonte di mappa online:

| Parametro | Descrizione |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Fornire un nome per la nuova fonte di mappa online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Inserire o incollare l'URL per la fonte di tile online. Assicurarsi che segua il formato dell'URL delle tile. L'URL può contenere determinati segnaposto, che OsmAnd sostituirà automaticamente in base alla tile specifica necessaria. I segnaposto più comunemente utilizzati sono basati sulla [convenzione dei nomi delle tile della mappa slippy di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` o `{0}`: Livello di zoom</li><li>`{x}` o `{1}`: Indice X della tile</li><li>`{y}` o `{2}`: Indice Y della tile</li></ul> Per esempi di segnaposto meno comuni, vedere le [fonti di mappe raster online predefinite](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Questo parametro influisce sulla visualizzazione della mappa. <br/><ul><li>Come *tipo di mappa*, la mappa sarà limitata ai livelli di zoom selezionati.</li><li>Come *overlay/underlay*, la mappa apparirà ai livelli di zoom selezionati, con upscaling o downscaling applicato al di fuori di tali livelli.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Impostare la durata (in minuti) dopo la quale le tile memorizzate nella cache verranno aggiornate. È possibile lasciare questo campo vuoto se non si desidera che le tile si ricarichino automaticamente. <br/><ul><li>1 giorno = 1440 minuti</li><li>1 settimana = 10.080 minuti</li><li>30 giorni = 43.200 minuti</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Scegliere tra *Proiezione Pseudo-Mercatore* e *Proiezione di Mercatore ellittica*, a seconda della fonte. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Selezionare come devono essere memorizzate le tile: in un *file SQLiteDB* o come *un file immagine per tile*. |


### URL magico per installare una fonte di mappa {#magic-url-to-install-map-source}

Le mappe online possono essere aggiunte con un link speciale all'elenco delle mappe raster di OsmAnd. Cliccare su questo link e scegliere OsmAnd per l'apertura:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parametro del link|Esempio|
|:--------|:---------------|
| [Parte costante]| `http://osmand.net/add-tile-source` |
|[Separatori]| ?   & |
|[Nome]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Livelli di zoom]|min_zoom=9 / max_zoom=15|

Troverete la mappa online aggiunta nell'elenco del menu [livello Principale / Underlay / Overlay](#select-raster-maps).


## Gestire le mappe raster {#manage-raster-maps}

Le mappe raster possono occupare una quantità significativa di spazio su disco, quindi potrebbe essere necessario controllarlo regolarmente. Per grandi set di dati, si consiglia di utilizzare una *fonte raster SQLite* perché memorizzerà tutte le tile in un unico grande file (database SQLite).

- [**Formato SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Formato Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Per cambiare il formato delle tile, è possibile scegliere <Translate android="true" ids="storage_format"/> nel menu di modifica delle mappe online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegliere la mappa online →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Svuotare la cache delle mappe raster {#clear-raster-map-cache}

![Elenco fonti online](@site/static/img/plugins/online-maps/online-sources-list.png)

Le tile vengono memorizzate nella cache quando si utilizzano mappe raster online come livello Principale / Overlay / Underlay. È possibile vedere la dimensione del file SQ Lite sotto il nome della mappa online nell'elenco. A volte è necessaria una pulizia regolare per accelerare la visualizzazione delle tile o per aggiornare i dati.  

Per svuotare la cache delle tile della mappa, è necessario eseguire le seguenti operazioni:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegliere la mappa online →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Scaricare / Aggiornare le tile {#download--update-tiles}

Se si desidera accedere alle mappe raster offline, potrebbe essere necessario pre-caricare le tile. Questo può essere fatto sul proprio dispositivo mobile, ma si tenga presente che alcuni servizi potrebbero bloccare il download di pacchetti di grandi dimensioni. È anche possibile utilizzare la stessa funzione per aggiornare le tile già scaricate per aree selezionate, altrimenti OsmAnd continuerà a visualizzare le tile già memorizzate nella cache.  

Affinché le mappe aggiornino automaticamente le tile dopo un po' di tempo, è possibile impostare un [Tempo di scadenza](#add-new-online-raster-map-source), dopodiché OsmAnd ricaricherà le tile non appena verranno visualizzate.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="mappe-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="mappe-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="mappe-raster"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="mappe-raster"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Scarica tile iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Per scaricare o aggiornare le tile raster, è necessario selezionare la fonte della mappa online come [Fonte mappa principale](#select-raster-maps) (**Android / iOS**). È anche possibile selezionare le tile online separatamente per la mappa [Overlay](#overlay-layer) o per l'[Underlay](#underlay-layer) (Solo per **Android**).

- Per la versione **Android** dell'app OsmAnd, è necessario selezionare un'area in base alle dimensioni dello schermo del dispositivo e fare un tocco lungo sulla mappa. Quindi selezionare [*Azioni*](../map/map-context-menu.md#update--download-online-maps) nel menu contestuale della mappa e l'opzione *Scarica mappa* o *Aggiorna mappa*. Nella schermata Scarica mappa, apportare le modifiche alle impostazioni necessarie e toccare Scarica.  

- Nella versione **iOS** dell'app OsmAnd, è necessario fare un tocco lungo sulla mappa, quindi selezionare [*Azioni*](../map/map-context-menu.md#update--download-online-maps) e l'opzione *Scarica mappa* o *Aggiorna mappa* dal menu contestuale della mappa. Nella schermata Scarica mappa, è possibile selezionare l'area richiesta e modificare le impostazioni necessarie. Dopo aver impostato tutti i parametri, è possibile vedere il numero di tile e la dimensione del download.


### Modificare i parametri della mappa raster {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegliere la mappa online →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Le mappe raster possono essere utilizzate così come sono se le tile sono già mappate. Se le mappe raster sono fornite online, c'è sempre un URL di base che deve essere configurato. Ci sono alcuni altri parametri di base che possono essere modificati per le mappe raster, di cui si può leggere in [questa sezione](#add-new-online-raster-map-source) dell'articolo. Parametri più complessi sono codificati nei componenti interni del [formato SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Articoli correlati {#related-articles}

- [Importa / Esporta](../personal/import-export.md)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)