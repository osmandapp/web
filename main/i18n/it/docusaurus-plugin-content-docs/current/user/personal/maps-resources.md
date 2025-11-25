---
source-hash: 18fb3a3ada428d5cb9890f755d85611b5560c8e172ba9d7c50665504b2f3c137
sidebar_position: 2
title:  Mappe e Risorse
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

Nella sezione **Mappe e Risorse**, è possibile gestire sia le mappe *Online* che *Offline* e altre risorse utilizzate in OsmAnd. Ad esempio, è possibile scaricare, eliminare, rinominare, svuotare la cache, aggiornare e controllare le dimensioni, ed eseguire diverse azioni.

OsmAnd funziona con due tipi di mappe: [Mappe vettoriali](../map/vector-maps.md) e [Mappe raster](../map/raster-maps.md). La scheda [Locale](#local-menu) memorizza tutte le mappe e le risorse. I tipi di mappa disponibili possono essere scaricati dalla scheda [Download](#downloads-menu). Nella scheda [Aggiornamenti](#updates-menu), è possibile scaricare le mappe disponibili per l'aggiornamento e utilizzare gli [Aggiornamenti Live](#live-updates). È inoltre possibile accedere alla funzione [Mappa extra](#extra-maps) per creare i propri tipi di mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu Mappe Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu Mappe iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipi di Mappe {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu download mappe Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Mappe regionali Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu download mappe iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mappe regionali iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Il download delle mappe nell'applicazione OsmAnd è un passo importante che determina la funzionalità e l'efficienza della navigazione.

### Contenuti Mappa Gratuiti {#free-map-content}

- **Mappa standard**. Fornisce una panoramica dell'area basata sulla fonte [OpenStreetMap](https://www.openstreetmap.org/) e contiene una mappa, percorsi, indirizzi, PDI e informazioni sul trasporto pubblico. Toccando si apre una schermata con un elenco di regioni del paese selezionato e informazioni su quanto spazio queste mappe occuperanno sul dispositivo.  
- **Solo strade** (*solo Android*). La mappa contiene solo informazioni sulla rete stradale per concentrarsi su percorsi e infrastrutture stradali. Rimuovendo dettagli come edifici e punti di interesse, è più piccola di una mappa standard. Toccando si apre una schermata con un elenco di regioni del paese selezionato e informazioni su quanto spazio queste mappe occuperanno sul dispositivo.
- **Mappa di panoramica mondiale**. Le versioni di OsmAnd fino alla 3.8 offrono il download di una mappa mondiale per poterla visualizzare su scala planetaria. Nelle versioni più recenti di OsmAnd, una leggera *Mini Mappa Mondiale* è inclusa nell'applicazione. L'app consente di scaricare una mappa mondiale di panoramica più grande con informazioni più dettagliate. 

:::info aggiornamenti mensili delle mappe
Si prega di notare che gli aggiornamenti mensili delle mappe sono considerati un altro download di mappa e vengono sottratti dal numero disponibile di download di mappe gratuite.
:::

### Contenuti Mappa a Pagamento {#paid-map-content}

- [Linee di contorno](../plugins/topography.md#contour-lines). Una mappa contenente linee di contorno di elevazione per visualizzare il terreno.
- [Mappa del terreno (Ombreggiatura e Pendenza)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mappe con ombreggiature o pendenze forniscono informazioni aggiuntive sul terreno.
- [Mappa del terreno (3D)](../plugins/topography.md#3d-relief). Rappresentazione tridimensionale del terreno per una migliore comprensione dell'ambiente circostante. È necessario abilitare il [Motore di rendering della mappa Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [Profondità e contorni nautici](../plugins/nautical-charts.md). Carte nautiche che mostrano linee costiere, profondità, aiuti alla navigazione, porti e pericoli per una navigazione e vela sicure.
- [Wikipedia](../plugins/wikipedia.md). Mappa vettoriale con articoli di [Wikipedia](https://wikipedia.org/) geolocalizzati su punti di riferimento o informazioni aggiuntive sui luoghi.
- [Wikivoyage](../plan-route/travel-guides.md). Fornisce mappe vettoriali con guide di viaggio virtuali, offrendo agli utenti informazioni preziose, raccomandazioni e consigli.
- [Previsioni meteo](../plugins/weather.md). Informazioni meteorologiche su una mappa per una facile pianificazione del percorso.


## Menu Download {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu download mappe generale Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu download mappe generale iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La scheda **Download** consente di scaricare vari tipi di mappe dai server di OsmAnd, richiedendo una connessione Internet attiva.

***Per scaricare una mappa:***

- **Apri la scheda Download**, individua la sezione richiesta e tocca la cartella pertinente per vedere le mappe disponibili.

- Le **Mappe disponibili** mostrano le icone di download, per una singola mappa o per [mappe multiple](#multiple-map-loading).

- Le **Mappe scaricate** mostrano un'icona verde con un pulsante di menu:  
    - *Android*: Menu a tre punti.  
    - *iOS*: Icona Info (i).

- Le **Mappe in fase di caricamento** hanno un'icona che lo visualizza. Per annullare il download, tocca l'icona. Per visualizzare l'elenco delle mappe in coda di download e annullare i download, tocca la barra di download nell'area delle informazioni sulla memoria del dispositivo delle schede Download e Aggiornamenti.

- **Nella versione gratuita**, le mappe non disponibili per il download mostrano un'icona [OTTIENI](../purchases/index.md), che collega alla pagina di acquisto.

***La scheda dei download è composta da gruppi di mappe:***

- **Info memoria dispositivo**. Visualizza la quantità di spazio occupato e libero sul tuo dispositivo.
- **Contatore mappe** (***Versione gratuita***). Mostra quante mappe ti sono rimaste da scaricare.
- [Mappe extra](#extra-maps). Mostra i dati della mappa per il [Pacchetto personalizzato](../plugins/custom.md).
- **Regioni**. Elenco per continente e regione del mondo: *Africa, Antartide, Asia, Australia e Oceania, America Centrale, Europa, Nord America, Russia e Sud America.*
- [Mappe mondiali](#world-maps). Un elenco di mappe del mondo intero: *Correzione altitudine mondiale (solo Android)*, *Mappa di panoramica mondiale*, *Tutto il mondo (Previsioni meteo)*
- [Mappe nautiche](../plugins/nautical-charts.md) ([*funzione a pagamento*](../purchases/index.md)). Mappe vettoriali con elevazioni come punti o linee.
- [Guide di viaggio (Wikivoyage)](../plan-route/travel-guides.md) ([*funzione a pagamento*](../purchases/index.md)). Mappe vettoriali con una raccolta di articoli in formato HTML e inoltre file GPX.
- **Altre mappe**. Mappe che non possono essere assegnate alla gerarchia di mappe corrente perché non sono supportate o saranno disponibili nelle versioni future.
- [Istruzioni vocali](../navigation/guidance/voice-navigation.md) (*solo Android*). Pacchetti vocali per le istruzioni di navigazione.
- [Caratteri mappa](../map/vector-maps.md#map-fonts-android) (*solo Android*). File di caratteri aggiuntivi per visualizzare il testo sulla mappa.
- **Cerca città o regione** (*solo Android*). Uno strumento di ricerca rapida nella parte superiore della scheda dei download (icona a forma di lente d'ingrandimento) per trovare la città o la regione desiderata.

### Mappe Mondiali {#world-maps}

Nel menu Scarica Mappe, c'è una sezione **Mappe Mondiali** che fornisce l'accesso al download di varie mappe del mondo, completando la funzionalità dell'app.  

- **Correzione altitudine mondiale** (*solo Android*). Questo file contiene correzioni di altitudine per compensare la curvatura planetaria.
- **Mappa di panoramica mondiale**. Fornisce una panoramica estesa della superficie terrestre, utile per la pianificazione di percorsi a lungo termine e l'esplorazione casuale.
- **Tutto il mondo (Previsioni meteo)**. Consente di scaricare una mappa con informazioni meteorologiche.


### Mappe Extra {#extra-maps}

OsmAnd supporta il trasferimento di impostazioni e dati specifici del profilo, inclusi file di rendering, caratteri, percorsi, mappe e plugin personalizzati. Crea una cartella di mappe personalizzata utilizzando un file plugin `.osf` (un formato compresso `.zip`).

Per importare un file:

1. Individua il file `.osf` nella memoria del tuo dispositivo, in un'app di messaggistica o in un'email.
2. Tocca per aprirlo con OsmAnd.
3. Il plugin apparirà nella sezione **Elenco Plugin**, dove potrà essere attivato.
4. Una cartella corrispondente apparirà quindi nella sezione **Mappe Extra** della scheda [Download](#downloads-menu).

Leggi di più nell'articolo [**Pacchetto personalizzato**](../plugins/custom).


### Caricamento Mappe Multiple {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu download mappe generale Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Menu deseleziona Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu download mappe generale iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Menu deseleziona iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Per i paesi composti da **mappe di più regioni**, è possibile utilizzare il caricamento in blocco di più mappe. Le mappe disponibili per questo tipo di download sono visualizzate con icone a doppia freccia di download e un'etichetta con il numero di regioni all'interno (ad es. Linee di contorno / Tutte le regioni: 10). È possibile scegliere quante mappe scaricare. Il caricamento in blocco supporta diversi tipi di mappa, inclusi Standard, Linee di contorno, Wikipedia e Terreno.

Quando un elemento di paese raggruppato viene aperto, viene visualizzata una scheda inferiore con l'elenco completo delle mappe per quel paese, consentendo di selezionare mappe individuali o di scaricarle tutte in una volta.


## Menu Locale {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Scheda Locale Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Scheda Locale Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

La scheda Locale fornisce una panoramica dell'utilizzo dello spazio di archiviazione per tutti i dati di OsmAnd sul tuo dispositivo. I dati sono suddivisi in tre sezioni codificate a colori per maggiore chiarezza, con gli elementi ordinati per dimensione dal più grande al più piccolo. Ogni sezione mostra solo gli elementi con dati scaricati:

- ***Risorse*** (*blu*).  
    Include mappe ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topografiche](../plugins/topography.md), &nbsp;[Meteo](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) e [Guide di viaggio](../plan-route/travel-guides.md), &nbsp;[Aggiornamenti Live](../personal/maps-resources.md#live-updates), &nbsp;**Solo strade**,  &nbsp;[Sorgenti mappa](../map/raster-maps.md), &nbsp;[Stili di rendering](../map/vector-maps.md#default-map-styles), &nbsp;**Caratteri mappa, &nbsp;Istruzioni vocali (registrate e TTS), &nbsp;Cache**.  

- ***I miei luoghi*** (*giallo*).  
    Include [Preferiti](../personal/favorites.md), &nbsp;[Tracce](../personal/tracks/manage-tracks.md), &nbsp;[Note OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Modifiche OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Note A/V](../plugins/audio-video-notes.md), &nbsp;[Segnalibri](../personal/markers.md), &nbsp;[Cronologia](../personal/global-settings.md#history), &nbsp;*Itinerario*.  

- ***Impostazioni*** (*verde*).  
    Include [Profili](../personal/profiles.md), &nbsp;[Colori](../personal/color-palette-schemes.md) e **Altre** configurazioni dell'app.

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu scheda Locale iOS](@site/static/img/personal/maps/local_tab_ios.png)

La scheda Locale fornisce una panoramica dell'utilizzo dello spazio di archiviazione per i dati di mappe e risorse sul tuo dispositivo. La barra della memoria in alto mostra tre categorie:

- ***Verde***. Spazio di archiviazione totale utilizzato sul dispositivo.
- ***Arancione***. Parte dello spazio di archiviazione utilizzato occupato dai download di OsmAnd.
- ***Grigio***. Spazio di archiviazione libero disponibile sul dispositivo.

Sotto la barra della memoria, viene mostrato un elenco di tutte le mappe e le risorse di OsmAnd scaricate, inclusi il loro tipo e la dimensione del file. Le mappe online non vengono conteggiate nella barra della memoria, poiché vengono trasmesse in streaming e memorizzate solo temporaneamente nella cache.

</TabItem>

</Tabs>


### Visualizzazione Dati {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Panoramica categoria Locale Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opzioni categoria Locale Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tocca un qualsiasi elemento nella scheda **Locale** per aprire il suo elenco dettagliato. Nella parte superiore di questo elenco, un pannello visivo mostra quanto spazio occupa il tipo di dati selezionato rispetto allo spazio di archiviazione totale di OsmAnd.

***Azioni disponibili:***

- **Cerca**. Trova dati specifici per nome all'interno della cartella selezionata.
- **Menu a tre punti**:  
    ***Seleziona***. Scegli più elementi per azioni come *Elimina*, *Disattiva* o *Attiva*.  
    ***Importa***. Accedi alla memoria del dispositivo per importare file.
- **Opzione di ordinamento**. Ordina gli elementi per nome, paese, data o dimensione (la disponibilità dipende dal tipo di dati).

Ogni elemento nell'elenco offre un *menu a tre punti* con opzioni:

- **Info**. Visualizza informazioni dettagliate sulle *[azioni](#actions)*.
- **Esporta**. Salva i dati in un file tramite *Impostazioni → Esporta in file*.

***Opzioni aggiuntive per le mappe:***

- **Disattiva**. Disabilita le mappe vettoriali senza eliminarle. Rimangono memorizzate ma non vengono utilizzate per la navigazione, la ricerca o il calcolo del percorso. Riduce il carico sul dispositivo e velocizza OsmAnd.
- **Aggiorna**. Scarica l'ultima versione della mappa.
- **Rinomina**. Personalizza il nome della mappa per una migliore identificazione.
- **Rimuovi**. Elimina la mappa dal tuo dispositivo.
- **Modifica** (per le Mappe Online). Modifica la configurazione della mappa online.

</TabItem>

<TabItem value="ios" label="iOS">  

![Visualizzazione dati](@site/static/img/personal/maps/viewing_data_ios.png)

Tocca un qualsiasi elemento offline nella scheda **Locale** per aprire i suoi dati dettagliati, come segue:

- **Tipo**. Il tipo dell'elemento di dati come **Mappa standard**, **Wikipedia**, **Linee di contorno**, o altro.
- **Dimensione**. La dimensione dell'elemento in MB.
- **Creato il**. La data in cui l'elemento è stato aggiunto.

Per le mappe online, vengono visualizzati solo il tipo e la dimensione dei dati memorizzati nella cache.

</TabItem>

</Tabs>


### Azioni {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu elementi Sorgente mappa](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Ogni elemento nell'elenco [Sorgente mappa](../map/raster-maps.md) fornisce impostazioni per la gestione della mappa raster online memorizzata sul tuo dispositivo. Apri il *menu a tre punti* per accedere alle azioni disponibili:

- **Info**. Mostra dettagli generali sulla sorgente mappa selezionata, inclusi formato e data dell'ultimo aggiornamento.  
- **Calcola dimensione**. Stima lo spazio di archiviazione occupato dai tile memorizzati nella cache di questa sorgente mappa. Se la cache supera i *50MB*, la dimensione può essere visualizzata come *≥50MB* invece di un numero esatto.
- **Svuota tutti i tile**. Elimina tutti i tile memorizzati nella cache per la sorgente mappa selezionata, liberando spazio di archiviazione e mantenendo la sorgente mappa disponibile per un uso futuro.  
- **Esporta**. Salva la configurazione della sorgente mappa selezionata per il backup o la condivisione.  
- **Rimuovi**. Elimina la sorgente mappa selezionata. Questa azione non influisce sulle mappe offline scaricate ma svuota la cache associata.

Quando si visualizza un elemento di dati locale, si vede:

- **Tipo**. Il tipo di dati dall'elenco **Locale**.
- **Creato**. La data in cui l'elemento è stato aggiunto.
- **Dimensione**. La dimensione dell'elemento in MB.

Le **Azioni** disponibili dipendono dal tipo di dati e possono includere **Disattiva**, **Aggiorna**, **Rinomina**, **Esporta** ed **Elimina**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Azioni iOS](@site/static/img/personal/maps/local_actions_ios.png)

Le **Azioni** disponibili dipendono dal tipo di dati:

- Per gli **elementi offline**, è disponibile solo l'opzione **Elimina**.
- Per le **mappe online**, le azioni possono includere **Svuota cache**, **Modifica** ed **Elimina**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Menu Aggiornamenti {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu Mappe Aggiorna mappe Android](@site/static/img/personal/maps/maps_update_andr.png) ![Scheda Aggiorna mappe Android](@site/static/img/personal/maps/maps_update_tab_andr.png)

La scheda **Aggiornamenti** consente di aggiornare le mappe e le risorse di OsmAnd. Le mappe standard e solo strade vengono rilasciate una volta al mese, di solito tra il 2° e il 5° giorno, e includono i dati di OpenStreetMap fino all'ultimo giorno del mese precedente (ad esempio, la versione di ottobre contiene i dati fino al 30 settembre). Altri dati come Wikipedia, mappe del terreno o nautiche possono seguire calendari di aggiornamento diversi e non regolari. Le previsioni meteo hanno un proprio ciclo di aggiornamento regolare. Per i dettagli, vedere [Scarica Previsioni](../plugins/weather.md#download-forecast). 

Se diverse mappe dello stesso paese richiedono un aggiornamento, OsmAnd le raggruppa in un singolo elemento nell'elenco Aggiornamenti. L'elemento raggruppato mostra il nome del paese e il numero di mappe incluse. Toccalo per aprire una scheda inferiore *Aggiorna mappe*, che mostra tutte le mappe che devono essere aggiornate. 

Usa il pulsante *Aggiorna tutto* per aggiornare tutte le mappe contemporaneamente, o aggiorna le singole mappe secondo necessità. Per aggiornamenti orari, controlla lo stato del tuo abbonamento a [Aggiornamenti Live](#live-updates). Se abilitato, la sezione **Aggiornamenti Live** apparirà in cima alla scheda, sotto l'indicatore della Memoria del Dispositivo.

È inoltre possibile gestire le mappe direttamente dalla scheda Aggiornamenti utilizzando un gesto di pressione prolungata su qualsiasi mappa elencata. Questo apre un menu contestuale che fornisce diverse opzioni:
- **Info** — visualizza dettagli sulla mappa selezionata
- **Aggiorna** — scarica l'ultima versione disponibile
- **Disattiva** — disabilita temporaneamente una mappa senza rimuoverne i dati
- **Rimuovi** — elimina completamente i dati della mappa dal dispositivo

Quando una mappa è disattivata, potrebbe scomparire temporaneamente dalla scheda Locale. Se un aggiornamento diventa disponibile per una mappa disattivata, apparirà comunque nell'elenco Aggiornamenti e sarà mostrata con un'icona grigia. L'aggiornamento di tale mappa la riattiverà automaticamente.

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu Mappe Aggiorna mappe iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Previsioni meteo Aggiorna mappe iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

La scheda **Aggiornamenti** consente di aggiornare le mappe e le risorse di OsmAnd. Le mappe standard e solo strade vengono rilasciate una volta al mese, di solito tra il 2° e il 5° giorno, e includono i dati di OpenStreetMap fino all'ultimo giorno del mese precedente (ad esempio, la versione di ottobre contiene i dati fino al 30 settembre). Altri dati come Wikipedia, mappe del terreno o nautiche possono seguire calendari di aggiornamento diversi e non regolari. 

Usa il pulsante *Aggiorna tutto* per aggiornare tutte le mappe contemporaneamente, o aggiorna le singole mappe secondo necessità. Per aggiornamenti orari, controlla lo stato del tuo abbonamento a [Aggiornamenti Live](#live-updates). Se abilitato, la sezione **Aggiornamenti Live** apparirà in cima alla scheda, sotto l'indicatore della Memoria del Dispositivo.

La scheda **Aggiornamenti** include anche una sezione Previsioni meteo. È progettata per gestire le tue previsioni offline per i paesi selezionati:

- Se non è stata ancora scaricata alcuna previsione, vedrai un messaggio per selezionare i paesi. I dati delle previsioni sono disponibili fino a 7 giorni.
- Una volta scaricata una previsione, la schermata ***Previsioni offline*** mostra l'elenco dei paesi con informazioni sullo stato, inclusa l'ora dell'ultimo aggiornamento, il periodo di validità e la dimensione totale dei dati.
- Toccando un paese si aprono informazioni dettagliate come l'ora dell'ultimo aggiornamento, il prossimo aggiornamento, la dimensione dei dati e la precisione. Le opzioni includono ***Aggiorna ora***, l'abilitazione o la disabilitazione dell'***Aggiornamento automatico*** (Le previsioni meteo hanno un proprio ciclo di aggiornamento regolare. Per i dettagli, vedere [Scarica Previsioni](../plugins/weather.md#download-forecast).), e ***Rimuovi previsione***.


</TabItem>

</Tabs>

## Aggiornamenti Live {#live-updates}

:::tip Acquisto
Gli aggiornamenti live sono una funzione a pagamento.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Menu Mappe OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu Mappe OsmAnd live modifica Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu Mappe OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu Mappe OsmAnd live modifica iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Aggiornamenti Live** fornisce aggiornamenti incrementali e frequenti delle mappe tramite [abbonamento](../purchases/index.md) o è gratuito per i [collaboratori OSM](#free-for-osm-mappers). Gli aggiornamenti avvengono ogni 15 minuti sui server di OsmAnd e sono scaricabili ogni ora, ogni giorno o ogni settimana. Questi aggiornamenti consumano uno spazio di archiviazione minimo — circa il 2-4% della dimensione completa della mappa al mese.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Caratteristiche principali:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Aggiornamenti Live**. Gestisci tramite un interruttore nelle impostazioni.
- Pulsante **&#8230; &#124;** (*Android*) / Pulsante **&#62;** (*iOS*). Apri le impostazioni degli *Aggiornamenti Live*.
- **Interruttore**(*Android*) / Pulsante **&#43;** (*iOS*). Aggiungi mappe per gli *aggiornamenti live*.
- **<Translate android="true" ids="update_frequency"/>**. Seleziona la frequenza di aggiornamento della mappa (oraria, giornaliera o settimanale).
- **<Translate android="true" ids="update_now"/>**. Avvia gli *aggiornamenti live* per la mappa.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Dimensione degli *aggiornamenti live*.
- **Pulsante Cestino**(*Android*). Elimina tutti gli *aggiornamenti live* ricevuti per la mappa corrente.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gestisci il download degli *aggiornamenti live* tramite una connessione Wi-Fi.


### Timestamp degli Aggiornamenti {#update-timestamps}

- **Ultimo aggiornamento OSM.**  
    Indica le ultime modifiche di OpenStreetMap elaborate.
- **Regione Aggiornata.**  
    Mostra quando sono stati elaborati gli ultimi aggiornamenti della regione specifica.
- **Prossimo aggiornamento.**  
    Mostra l'orario programmato per il prossimo controllo degli aggiornamenti.


### Limitazioni degli Aggiornamenti Live {#limitations-of-live-updates}

Le modifiche agli indirizzi sono supportate solo tramite aggiornamenti mensili.
Le strade aggiornate non hanno dettagli sull'elevazione, influenzando i grafici di pendenza.
I riferimenti di percorso eliminati o alterati potrebbero ancora apparire in modo errato.


### Gratuito per i mappatori OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live per mappatori](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live per mappatori](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

I collaboratori di [OpenStreetMap](https://openstreetmap.org/) hanno diritto a download illimitati di mappe e aggiornamenti live gratuiti. Per qualificarsi:
Abilita il [plugin di modifica OpenStreetMap](../plugins/osm-editing.md).
[Accedi](../plugins/osm-editing.md#settings) con il tuo nome utente OSM.
Mantieni almeno [**30 modifiche**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) negli ultimi due mesi.

## Articoli Correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Importa / Esporta](../personal/import-export.md)

### Problemi Comuni e Soluzioni {#common-issues-and-solutions}

- Navigazione Vocale. [(controlla)](../troubleshooting/navigation.md#voice-navigation)
- Come eliminare la cronologia delle ricerche. [(controlla)](../troubleshooting/general.md#how-to-delete-search-history)
- Per ulteriori risoluzioni di problemi, visita: [Mappe e Dati](../troubleshooting/maps-data.md)