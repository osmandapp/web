---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
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

Le mappe raster sono aggiunte significative e utili alle mappe vettoriali di OsmAnd. Consentono di combinare varie fonti di mappe con mappe vettoriali. Ad esempio, le informazioni su colline e pendii vengono visualizzate come un livello raster. È possibile visualizzare una sovrapposizione di sentieri escursionistici, mappe della pioggia, dati sul traffico in tempo reale e una sovrapposizione di immagini satellitari su una mappa vettoriale di base traslucida. È inoltre possibile cambiare le mappe predefinite in tessere raster sul web.

## Casi d'uso {#use-cases}

Le mappe raster hanno una vasta gamma di usi. Eccone alcuni dei più popolari:

- Immagini satellitari come sottofondo.
- Informazioni sul traffico in tempo reale.
- Previsioni della pioggia come sovrapposizione.
- Mappe topografiche con ombreggiatura di colline e pendii.
- Percorsi attivi per ciclismo e corsa come sovrapposizione.
- Informazioni sulle navi in tempo reale.
- Tessere OpenStreetMap online per l'editing di OSM.

![Panoramica delle mappe online](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
È inoltre possibile cambiare la fonte principale delle mappe da mappe vettoriali a tessere online.
:::

## Mappe Raster {#raster-maps}

Le mappe online in OsmAnd sono composte da dati raster, che consistono in pixel (chiamati anche celle di griglia) - essenzialmente un insieme di piccole immagini note come tessere. A differenza delle mappe vettoriali, che rappresentano dati come strade, punti e poligoni utilizzando informazioni binarie, le tessere delle mappe raster sono disposte in una griglia e possono apparire pixelate a livelli di zoom elevati perché ogni pixel ha un valore o una classe fissa.

#### Confronto con le mappe vettoriali predefinite {#comparison-to-default-vector-maps}

**Vantaggi:**

- Poiché le mappe raster sono pre-renderizzate, si caricano più velocemente, eliminando la necessità per il dispositivo di elaborare e renderizzare i dati in tempo reale.
- Le mappe raster possono essere caricate dinamicamente durante la navigazione.
- È possibile creare una cache offline e scaricare solo le tessere mancanti secondo necessità.
- È possibile utilizzare un numero illimitato di fonti web esterne per le mappe raster, rendendole flessibili per diversi tipi di mappe, come viste satellitari o mappe specializzate.
- I dati raster, come le informazioni sul traffico, possono essere aggiornati regolarmente dopo la scadenza (ad esempio, ogni 20-30 minuti, a seconda della configurazione).

**Svantaggi:**

- Le mappe raster occupano significativamente più spazio delle mappe vettoriali. Ad esempio, una mappa cittadina potrebbe essere di 15 MB come mappa vettoriale, ma aumentare a 50 MB al livello di zoom 15, 200 MB al livello di zoom 16 e fino a 800 MB al livello di zoom 17.
- Non è possibile toccare luoghi o oggetti specifici sulle mappe raster per ottenere maggiori informazioni.
- Le mappe raster non possono essere stilizzate o modificate per escludere oggetti specifici.
- Uno zoom eccessivo può far apparire l'immagine pixelata, soprattutto se non sono disponibili tessere ad alta risoluzione.
- Non è possibile ruotare la mappa senza ruotare il testo, il che può rendere difficile la lettura delle etichette.

## Come utilizzare le mappe raster {#how-to-use-raster-maps}

**Abilita plugin**.

- **iOS**. Per *iOS*, questa funzione funziona per impostazione predefinita.
- **Android**. Per *Android*, per utilizzare le mappe raster in OsmAnd è necessario abilitare il [plugin Mappe online](../plugins/online-map.md). Segui questi passaggi: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Modifica parametri livello**. Per migliorare la visibilità e la miscelazione dei livelli di mappe raster, puoi regolare la trasparenza del livello utilizzando il cursore sullo schermo. Inoltre, puoi modificare lo stile della mappa vettoriale nascondendo i poligoni, rendendo più visibili i livelli sottostanti. Questo è particolarmente utile quando si visualizzano immagini satellitari.

## Seleziona mappe raster {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Mostra mappe](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostra mappe](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

In OsmAnd, le mappe raster possono fungere da fonte di mappe aggiuntiva accanto alle mappe vettoriali predefinite, ottimizzate per l'uso offline.

Hai la flessibilità di aggiungere uno o due livelli di tessere online per completare la tua mappa di base. Ciò ti consente di visualizzare fino a tre livelli di mappe contemporaneamente sullo schermo. Ad esempio, puoi avere la mappa vettoriale offline di OsmAnd come base, sovrapporla con una vista satellitare e posizionare una mappa dei percorsi ciclabili come livello sottostante per aggiungere dettagli.

Puoi anche regolare la trasparenza della mappa di base per fonderla con i tuoi livelli. Se necessario, puoi abilitare un cursore di trasparenza sulla schermata principale per regolazioni rapide.

### Principale {#main}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![Mostra mappe](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*

![Mostra mappe](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Puoi scegliere uno stile di mappa dall'elenco o [aggiungere](#add-new-online-raster-map-source) il tuo.

### Livello di sovrapposizione {#overlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![Configura sottofondo / sovrapposizione Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![Configura sottofondo / sovrapposizione iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *Attiva/disattiva* la mappa di sottofondo.
2. *Trasparenza sovrapposizione* (*Android*)/ *Trasparenza* della mappa di sovrapposizione (*iOS*).
3. *Mostra cursore trasparenza* (*Android*) / *Mostra cursore sulla mappa* (*iOS*). Accesso rapido all'impostazione della trasparenza.
4. *Fonte mappa sovrapposizione* (*Android*) / *Livelli disponibili* (*iOS*). Puoi scegliere una mappa a tessere da installare o aggiornare.
5. *Mostra simboli mappa* - come testo, segnali stradali e altri.
6. *Aggiungi fonte online* (*iOS*).
7. *Importa da documenti* (*iOS*).

### Livello di sottofondo {#underlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![Configura sottofondo / sovrapposizione Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configura sottofondo / sovrapposizione iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *Attiva/disattiva* la mappa di sottofondo.
2. *Trasparenza mappa base*.
3. *Mostra cursore trasparenza* (*Android*) / *Mostra cursore sulla mappa* (*iOS*). Accesso rapido all'impostazione della trasparenza.
4. *Fonte mappa sottofondo* (*Android*) / *Livelli disponibili* (*iOS*). Puoi scegliere una mappa a tessere da installare o aggiornare.
5. *Mostra/Nascondi poligoni*.
6. *Aggiungi fonte online* (*iOS*).
7. *Importa da documenti* (*iOS*).

## Ombreggiatura / Pendenza {#hillshade--slope}

![Livelli terreno](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Ombreggiatura** e **Pendenza** sono mappe raster offline che mostrano il rilievo del terreno. Vengono visualizzate come un livello speciale della mappa, una seconda sovrapposizione sulla mappa base. Le mappe contengono informazioni aggiuntive sull'altitudine per aiutarti a comprendere più accuratamente la pendenza e le ombre del paesaggio. Le informazioni su *Ombreggiatura* e *Pendenza* si basano sui dati di un'unica fonte, il *file Global planet*, e sono divise per regioni.

Non è necessario passare tra i livelli di Ombreggiatura e Pendenza, poiché vengono uniti automaticamente. Puoi selezionare solo uno di questi livelli da visualizzare sulla mappa, ma hai anche la possibilità di combinarli entrambi [come sottofondo o sovrapposizione](#select-raster-maps) su altri livelli per una rappresentazione più visiva del terreno.

Per iniziare con Ombreggiatura e Pendenza è necessario:

1. Acquistare il plugin Topografia:
    - [Acquisti Android](../purchases/android.md)
    - [Acquisti iOS](../purchases/ios.md)
2. Abilitare il [plugin Topografia](../plugins/topography.md):
    *Menu → Plugin → ︙ → Abilita*
3. Seleziona la regione desiderata e scarica la **Mappa del terreno (3D)**.
4. Il processo di download potrebbe richiedere del tempo, a seconda delle dimensioni della regione selezionata e della velocità della connessione Internet.

### Ombreggiatura e Rilievo 3D {#hillshade-and-3d-relief}

| Ombreggiatura | Rilievo 3D |
|--------|---------|
| ![Livelli terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Livelli terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

La differenza di visualizzazione del rilievo sulla mappa quando si applicano queste impostazioni è descritta nell'articolo **Topografia** nella sezione corrispondente [Ombreggiatura e Rilievo 3D](../plugins/topography.md#hillshade-and-3d-relief).

### Configura opzioni di visualizzazione {#configure-display-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Livelli terreno](@site/static/img/plugins/online-maps/terrain_layers.png)

Puoi personalizzare il livello di zoom da visualizzare e la trasparenza per Ombreggiatura e Pendenza. Puoi leggere di più nell'articolo [Topografia](../plugins/topography.md#hillshade-slope-and-altitude-layers).

## Rilievo 3D {#3d-relief}

:::note
[Rilievo 3D](../plugins/topography.md#3d-relief) è una funzionalità a pagamento di [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Livelli terreno](@site/static/img/plugins/online-maps/raster_maps_3d.png)

La funzione [**Rilievo 3D**](../plugins/topography.md#3d-relief) è una tecnologia di mappatura che consente la visualizzazione del terreno su una mappa utilizzando modelli tridimensionali. Questa funzione aggiunge informazioni sull'altitudine a una normale mappa bidimensionale, creando un effetto 3D e di profondità che consente di visualizzare meglio il terreno.

*Per iniziare a utilizzare il Rilievo 3D*:
È necessario acquistare il [piano di acquisto OsmAnd Pro](../plugins/index.md#purchase), abilitare il [plugin Topografia](../plugins/topography.md) e attivare l'elemento [Rilievo 3D](../plugins/topography.md#3d-relief) in *Menu → Configura mappa*.

*Come funziona la funzione Rilievo 3D*:
*1.* Per creare un rilievo 3D, OsmAnd riceve informazioni sull'altitudine del terreno.
*2.* Sulla base dei dati di altitudine, viene creato un modello 3D per visualizzare montagne, colline, valli e altri elementi del terreno sulla mappa.
*3.* OsmAnd visualizza quindi questi modelli tridimensionali su una mappa piatta. La mappa può essere ingrandita, rimpicciolita e ruotata per visualizzare il terreno da diverse angolazioni e prospettive.
*4.* La visualizzazione delle curve di livello sulla mappa non dipende dal fatto che la fonte della mappa sia online o offline.

## Prepara/Copia mappe raster sul dispositivo {#preparecopy-raster-maps-to-device}

Esistono diversi modi per aggiungere una nuova mappa raster, copiarla da un altro dispositivo, prepararla su un PC e pre-scaricare le tessere da utilizzare offline. Ad esempio, puoi creare il tuo pacchetto di mappe su un PC utilizzando software speciali come [MOBAC, OsmAndMapCreator, ecc.](../../technical/map-creation/index.md). In genere le mappe raster vengono distribuite come file con estensione `.sqlitedb`.

Ecco i principali metodi per aggiungere una nuova fonte di mappe raster che non è ancora definita in OsmAnd:

- Apri il file `.sqlitedb` pronto all'uso con OsmAnd.
- Importa il pacchetto con mappe online preparate da un'altra applicazione OsmAnd come **pacchetto** `.osf` speciale tramite la [funzionalità di Importazione/esportazione](../personal/import-export.md).
- Crea una nuova fonte di mappe online sul dispositivo mobile stesso.
- Prepara un URL magico con i parametri della fonte di mappe online e aprilo con OsmAnd.

### Aggiungi nuova fonte di mappe raster online {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Aggiungi fonte online](@site/static/img/plugins/online-maps/add-online-source-2.png)

Per creare una fonte di mappe raster è necessario conoscere l'**URL di una tessera**, che è un URL specifico che distribuisce tessere di mappe nella proiezione di Mercatore. Ad esempio, un URL di tessera potrebbe essere simile a questo: `https://tile.osmand.net/hd/6/55/25.png`, dove `tile.osmand.net/hd/` è l'URL di base.

Ecco i parametri chiave da configurare quando si imposta una nuova fonte di mappe online:

| Parametro | Descrizione |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Fornisci un nome per la nuova fonte di mappe online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Inserisci o incolla l'URL per la fonte di tessere online. Assicurati che segua il formato URL delle tessere. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Questo parametro influisce su come viene visualizzata la mappa. <br/><ul><li>Come *tipo di mappa*, la mappa sarà limitata ai livelli di zoom selezionati.</li><li>Come *sovrapposizione/sottofondo*, la mappa apparirà ai livelli di zoom selezionati, con upscaling o downscaling applicato al di fuori di tali livelli.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Imposta la durata (in minuti) dopo la quale le tessere memorizzate nella cache verranno aggiornate. Puoi lasciare questo campo vuoto se non desideri che le tessere vengano ricaricate automaticamente. <br/><ul><li>1 giorno = 1440 minuti</li><li>1 settimana = 10.080 minuti</li><li>30 giorni = 43.200 minuti</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Scegli tra *Proiezione Pseudo-Mercatore* e *Proiezione Mercatore ellittica*, a seconda della fonte. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Seleziona come devono essere archiviate le tessere: in un *file SQLiteDB* o come *un file immagine per tessera*. |

### URL magico per installare la fonte della mappa {#magic-url-to-install-map-source}

Le mappe online possono essere aggiunte con un link speciale all'elenco delle mappe raster di OsmAnd. Clicca su questo link e scegli OsmAnd per l'apertura:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parametro del link|Esempio|
|:--------|:---------------|
| [Parte costante]| `http://osmand.net/add-tile-source` |
|[Separatori]| ? & |
|[Nome]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Livelli di zoom]|min_zoom=9 / max_zoom=15|

Trovi una mappa online aggiunta nell'elenco del menu [Livello principale / Sottofondo / Sovrapposizione](#select-raster-maps).

## Gestisci mappe raster {#manage-raster-maps}

Le mappe raster possono occupare una quantità significativa di spazio su disco, quindi potrebbe essere necessario controllarlo regolarmente. Per set di dati di grandi dimensioni, si consiglia di utilizzare la *fonte raster SQLite* poiché memorizzerà tutte le tessere in 1 file di grandi dimensioni (database SQLite).

- [**Formato SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Formato Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Per cambiare il formato delle tessere, puoi scegliere <Translate android="true" ids="storage_format"/> nel menu di modifica delle mappe online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegli mappe online →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*

### Cancella cache mappe raster {#clear-raster-map-cache}

![Elenco fonti online](@site/static/img/plugins/online-maps/online-sources-list.png)

Le tessere vengono memorizzate nella cache quando si utilizzano mappe raster online come livello principale / sovrapposizione / sottofondo. Puoi vedere la dimensione del tuo file SQ Lite sotto il nome della tua mappa online nell'elenco. A volte è necessaria una pulizia regolare per velocizzare la visualizzazione delle tessere o per aggiornare i dati.

Per cancellare la cache delle tessere della mappa, è necessario effettuare le seguenti operazioni:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegli mappe online →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

### Scarica / Aggiorna tessere {#download--update-tiles}

Se desideri accedere alle mappe raster offline, potresti dover precaricare le tessere. Questo può essere fatto sul tuo dispositivo mobile, ma tieni presente che alcuni servizi potrebbero bloccare download di pacchetti di grandi dimensioni. Puoi anche utilizzare la stessa funzione per aggiornare le tessere già scaricate per aree selezionate, altrimenti OsmAnd continuerà a visualizzare le tessere già memorizzate nella cache.

Affinché le mappe aggiornino automaticamente le tessere dopo un po', puoi impostare un [Tempo di scadenza](#add-new-online-raster-map-source), quindi OsmAnd ricaricherà le tessere non appena verranno visualizzate.

<Tabs groupId="operating-systems" queryString="operating-systems">

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

![Scarica tessere Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Scarica tessere Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Scarica tessere Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Scarica tessere Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica tessere iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Per scaricare o aggiornare le tessere raster, è necessario selezionare la fonte della mappa online come [fonte della mappa principale](#select-raster-maps). È inoltre possibile selezionare le tessere online separatamente per la mappa di [sovrapposizione](#overlay-layer) o per il [sottofondo](#underlay-layer).

- Per la versione **Android** dell'app OsmAnd, è necessario selezionare un'area in base alle dimensioni dello schermo del dispositivo e fare un tap lungo sulla mappa. Quindi selezionare [Azioni](../map/map-context-menu.md#customize) nel menu contestuale della mappa e l'opzione *Scarica mappa* o *Aggiorna mappa*. Nella schermata Scarica mappa, apportare le modifiche alle impostazioni necessarie e toccare Scarica.

- Nella versione iOS dell'app OsmAnd, è necessario fare un tap lungo sulla mappa, quindi selezionare *Azioni* e l'opzione *Scarica mappa* o *Aggiorna mappa* dal menu contestuale della mappa. Nella schermata Scarica mappa, è possibile selezionare l'area richiesta e modificare le impostazioni necessarie. Dopo aver impostato tutti i parametri, è possibile visualizzare il numero di tessere e la dimensione del download.

### Modifica parametri mappa raster {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → scegli mappe online → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Le mappe raster possono essere utilizzate così come sono se le tessere sono già mappate. Se le mappe raster sono fornite online, c'è sempre un URL di base che deve essere configurato. Ci sono alcuni altri parametri di base che possono essere modificati per le mappe raster, puoi leggere a riguardo in [questa sezione](#add-new-online-raster-map-source) dell'articolo. Parametri più complessi sono codificati nei componenti interni del [formato SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).

## Articoli correlati {#related-articles}

- [Importazione / Esportazione](../personal/import-export.md)
- [Schemi tavolozza colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: Ottobre 2024*