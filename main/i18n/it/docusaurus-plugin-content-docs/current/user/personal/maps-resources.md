---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
sidebar_position: 2
title:  Mappe e risorse
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

Nella sezione **Mappe e risorse**, puoi gestire le mappe *online* e *offline* e altre risorse utilizzate in OsmAnd. Ad esempio, puoi scaricare, eliminare, rinominare, svuotare la cache, aggiornare e controllare le dimensioni ed eseguire diverse azioni.

OsmAnd funziona con due tipi di mappe: [Mappe vettoriali](../map/vector-maps.md) e [Mappe raster](../map/raster-maps.md). La scheda [Locale](#local) memorizza tutte le mappe e le risorse. I tipi di mappa disponibili possono essere scaricati dalla scheda [Download](#downloads). Nella scheda [Aggiornamenti](#updates), puoi scaricare le mappe disponibili per gli aggiornamenti e utilizzare gli [Aggiornamenti in tempo reale](#osmand-live). Puoi anche accedere alla funzione [Mappe extra](#extra-maps) per creare i tuoi tipi di mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menu mappe Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu mappe iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipi di mappa {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu download mappa Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Mappe regionali Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu download mappa iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mappe regionali Android](@site/static/img/personal/maps/map_type_2_ios.png)

</TabItem>

</Tabs>

Scaricare le mappe nell'applicazione OsmAnd è un passo importante che determina la funzionalità e l'efficienza della navigazione.

#### Funzionalità gratuite per la posizione selezionata {#free-features-for-the-selected-location}

- **Mappa standard**. Fornisce una panoramica dell'area basata sulla sorgente [OpenStreetMap](https://www.openstreetmap.org/) e contiene una mappa, percorsi, indirizzi, POI e informazioni sui trasporti pubblici. Toccando si apre una schermata con un elenco delle regioni del paese selezionato e informazioni su quanto spazio occuperanno queste mappe sul tuo dispositivo.
- **Solo strade** (*solo Android*). La mappa contiene solo informazioni sulla griglia stradale per concentrarsi sui percorsi e sull'infrastruttura stradale. Rimuovendo dettagli come edifici e punti di interesse, è più piccola di una mappa standard. Toccando si apre una schermata con un elenco delle regioni del paese selezionato e informazioni su quanto spazio occuperanno queste mappe sul tuo dispositivo.

#### Funzionalità a pagamento per la posizione selezionata {#paid-features-for-the-selected-location}

- [Curve di livello](../plugins/topography.md#contour-lines). Una mappa contenente curve di livello altimetriche per visualizzare il terreno.
- [Mappa del terreno (Hillshade e Pendenza)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mappe con ombre o pendenze forniscono informazioni aggiuntive sul terreno.
- [Mappa del terreno (3D)](../plugins/topography.md#3d-relief). Rappresentazione tridimensionale del terreno per una migliore comprensione dell'ambiente circostante. È necessario abilitare il [Motore di rendering della mappa Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [Wikipedia](../plugins/wikipedia.md). Mappa vettoriale con articoli di [Wikipedia](https://wikipedia.org/) geolocalizzati su punti di riferimento o informazioni aggiuntive sui luoghi.
- [Previsioni del tempo](../plugins/weather.md). Informazioni meteorologiche su una mappa per facilitare la pianificazione del percorso.
- [Mappe raster online](../map/raster-maps.md). Le mappe sono disponibili per il download online e possono essere installate come mappe di terze parti o come riquadri OsmAnd.

#### Mappa panoramica del mondo {#world-overview-map}

Le versioni di OsmAnd fino alla 3.8 offrono la possibilità di scaricare una mappa del mondo in modo da poterla visualizzare su scala planetaria. Nelle versioni più recenti di OsmAnd, una leggera *Mini mappa del mondo* è inclusa nell'applicazione. L'app consente di scaricare una mappa del mondo panoramica più grande con informazioni più dettagliate.


## Mappe e risorse {#maps--resources}

La sezione del *Menu principale* **Mappe e risorse** dell'app OsmAnd fornisce l'accesso per gestire mappe e altri dati importanti.

- La scheda [Download](#downloads) mappe consente di scaricare mappe per l'utilizzo offline, garantendone la disponibilità senza Internet.
- Nella scheda [Locale](#local) mappe, puoi trovare e gestire informazioni dettagliate su mappe e luoghi, inclusi preferiti, tracce, note OSM e altri elementi che hai sul tuo dispositivo.
- La scheda [Aggiornamenti](#updates) consente agli utenti di ottenere informazioni sugli aggiornamenti disponibili per mappe e altre risorse, garantendo che i dati siano aggiornati e precisi.

***Azioni generali che puoi eseguire in Mappe e risorse***:

- **Aggiorna**. Ricarica l'elenco delle mappe disponibili dal server OsmAnd.
- **Cerca**. Cerca mappe per **paese**, **provincia** o **città** principale.
- **Memoria dispositivo**. Mostra sull'indicatore quanta memoria è disponibile per il download e quante mappe possono essere scaricate gratuitamente. A seconda della scheda, a volte vengono visualizzati dati leggermente diversi.
- **Contatore mappe** (*Versione gratuita* è visibile solo se non hai un [abbonamento](../purchases/index.md)). L'indicatore con i divisori mostra quante mappe ti restano da scaricare delle *7 disponibili*.

:::info aggiornamenti mensili delle mappe
Si noti che gli aggiornamenti mensili delle mappe sono considerati un altro download di mappe e vengono sottratti dal numero disponibile di download di mappe gratuiti.
:::


### Download {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu download mappa generale Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu download mappa generale iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La scheda **Download** consente di scaricare vari tipi di mappe dai server OsmAnd, richiedendo una connessione Internet attiva.

***Per scaricare una mappa:***

- **Apri la scheda Download**, individua la sezione richiesta e tocca la cartella pertinente per vedere le mappe disponibili.

- Le **Mappe disponibili** visualizzano le icone di download, per una singola mappa o per [più mappe](#multiple-map-loading).

- Le **Mappe scaricate** mostrano un'icona verde con un pulsante di menu:
    - *Android*: Menu a tre puntini.
    - *iOS*: Icona Info (I).

- Le **Mappe in fase di caricamento** hanno un'icona che lo visualizza. Per annullare il download, tocca l'icona. Per visualizzare l'elenco delle mappe nella coda di download e annullare i download, tocca la barra Download nell'area informazioni Memoria dispositivo delle schede Download e Aggiornamenti.

- **Nella versione gratuita**, le mappe non disponibili per il download mostrano un'icona [OTTIENI](../purchases/index.md), che rimanda alla pagina di acquisto.

***La scheda download è composta da gruppi di mappe:***

- **Informazioni sulla memoria del dispositivo**. Visualizza la quantità di spazio occupato e libero sul tuo dispositivo.
- **Contatore mappe** (***Versione gratuita***). Visualizza quante mappe ti restano da scaricare.
- [Mappe extra](#extra-maps). Visualizza i dati della mappa per il [Pacchetto personalizzato](../plugins/custom.md).
- **Regioni**. Elenco per continente e regione del mondo: *Africa, Antartide, Asia, Australia e Oceania, America Centrale, Europa, Nord America, Russia e Sud America.*
- [Mappe del mondo](#world-maps). Un elenco di mappe del mondo intero: *Correzione altitudine mondiale (solo Android)*, *Mappa panoramica del mondo*, *Tutto il mondo (Previsioni del tempo)*
- [Mappe nautiche](../plugins/nautical-charts.md) ([*funzione a pagamento*](../purchases/index.md)). Mappe vettoriali con elevazioni come punti o linee.
- [Guide di viaggio (Wikivoyage)](../plan-route/travel-guides.md) ([*funzione a pagamento*](../purchases/index.md)). Mappe vettoriali con una raccolta di articoli in formato HTML e, in aggiunta, file GPX.
- **Altre mappe**. Mappe che non possono essere assegnate alla gerarchia di mappe corrente perché non sono supportate o saranno disponibili in versioni future.
- [Indicazioni vocali](../navigation/guidance/voice-navigation.md) (*solo Android*). Pacchetti vocali per la vocalizzazione delle indicazioni di navigazione.
- [Font delle mappe](../map/vector-maps.md#map-fonts-android) (*solo Android*). File di font aggiuntivi visualizzano il testo sulla mappa.

#### Mappe del mondo {#world-maps}

Nel menu Scarica mappe, c'è una sezione **Mappe del mondo** che fornisce l'accesso per scaricare varie mappe del mondo, completando la funzionalità dell'app.

- **Correzione altitudine mondiale** (*solo Android*). Migliora la precisione della navigazione, specialmente in terreni montuosi.
- **Mappa panoramica del mondo**. Fornisce un'ampia panoramica della superficie terrestre, utile per la pianificazione di percorsi a lungo termine e l'esplorazione occasionale.
- **Tutto il mondo (Previsioni del tempo)**. Consente di scaricare una mappa con informazioni meteorologiche.

Informazioni sul *menu mappe* e sulle *azioni* si trovano nell'articolo [Scarica mappe](../start-with/download-maps.md).


#### Caricamento di più mappe {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu download mappa generale Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu download mappa generale iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Per i paesi composti da **più mappe regionali**, puoi utilizzare il caricamento in blocco di più mappe. Le mappe disponibili per questo tipo di download sono visualizzate con icone a doppia freccia di download e un'etichetta con il numero di regioni all'interno (ad esempio Curve di livello / Tutte le regioni: 10). Puoi scegliere quante mappe scaricare.


### Locale {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Scheda Locale Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Scheda Locale Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menu scheda Locale iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

La scheda Locale fornisce una panoramica dell'utilizzo dello spazio di archiviazione per tutti i dati OsmAnd sul tuo dispositivo. I dati sono divisi in tre sezioni con codice colore per chiarezza, con gli elementi ordinati per dimensione dal più grande al più piccolo. Ogni sezione visualizza solo gli elementi con dati scaricati:

- ***Risorse*** (*blu*).
    Include mappe ([Standard](../map/vector-maps.md), &nbsp;[Nautiche](../plugins/nautical-charts.md), &nbsp;[Topografia](../plugins/topography.md), &nbsp;[Meteo](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) e [Guide di viaggio](../plan-route/travel-guides.md), &nbsp;[Aggiornamenti in tempo reale](../personal/maps-resources.md#osmand-live), &nbsp;**Solo strade**, &nbsp;[Sorgenti mappe](../map/raster-maps.md), &nbsp;[Stili di rendering](../map/vector-maps.md#default-map-styles), &nbsp;**Font mappe, &nbsp;Indicazioni vocali (registrate e TTS), &nbsp;Cache**.

- ***I miei luoghi*** (*giallo*).
    Include [Preferiti](../personal/favorites.md), &nbsp;[Tracce](../personal/tracks/manage-tracks.md), &nbsp;[Note OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Modifiche OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Note A/V](../plugins/audio-video-notes.md), &nbsp;[Segnalibri mappa](../personal/markers.md), &nbsp;[Cronologia](../personal/global-settings.md#history), &nbsp;*Itinerario*.

- ***Impostazioni*** (*verde*).
    Include [Profili](../personal/profiles.md), &nbsp;[Colori](../personal/color-palette-schemes.md) e **Altre** configurazioni dell'app.


#### Visualizzazione dei dati {#viewing-data}

![Panoramica categoria locale Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opzioni categoria locale Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tocca qualsiasi elemento nella scheda **Locale** per aprire il suo elenco dettagliato. Nella parte superiore di questo elenco, un pannello visivo mostra quanto spazio occupa il tipo di dati selezionato rispetto allo spazio di archiviazione totale di OsmAnd.

***Azioni disponibili:***

- **Cerca**. Trova dati specifici per nome all'interno della cartella selezionata.
- **Menu a tre puntini**:
    ***Seleziona***. Scegli più elementi per azioni come *Elimina*, *Disattiva* o *Attiva*.
    ***Importa***. Accedi allo spazio di archiviazione del dispositivo per importare file.
- [Opzione di ordinamento](#sorting-options). Ordina gli elementi per nome, paese, data o dimensione (la disponibilità dipende dal tipo di dati).


#### Menu per gli elementi dall'elenco {#menu-for-items-from-the-list}

![Azioni elemento categoria locale 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Azioni elemento categoria locale](@site/static/img/personal/maps/local_menu_items_2_andr.png)

Ogni elemento nell'elenco offre un *menu a tre puntini* con opzioni:

- **Info**. Visualizza informazioni dettagliate sull'*[elemento dati](#local-data-item-overview)*.
- **Esporta**. Salva i dati in un file tramite *Impostazioni → Esporta in file*.

***Opzioni aggiuntive per le mappe:***

- **Disattiva**. Disabilita le mappe vettoriali senza eliminarle. Rimangono memorizzate ma non vengono utilizzate per la navigazione, la ricerca o il routing. Riduce il carico sul dispositivo e velocizza OsmAnd.
- **Aggiorna**. Scarica l'ultima versione della mappa.
- **Rinomina**. Personalizza il nome della mappa per una migliore identificazione.
- **Rimuovi**. Elimina la mappa dal tuo dispositivo.
- **Modifica** (per mappe online). Modifica la configurazione della mappa online.

#### Menu elementi sorgente mappa {#map-source-items-menu}

![Menu elementi sorgente mappa](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Ogni elemento nell'elenco [Sorgente mappa](../map/raster-maps.md) fornisce impostazioni per la gestione delle mappe raster online memorizzate sul tuo dispositivo. Apri il *menu a tre puntini* per accedere alle azioni disponibili:

- [Info](#local-data-item-overview). Visualizza dettagli generali sulla sorgente mappa selezionata, inclusi formato e data dell'ultimo aggiornamento.
- **Calcola dimensione**. Stima lo spazio di archiviazione occupato dai riquadri memorizzati nella cache di questa sorgente mappa. Se la cache supera i *50 MB*, la dimensione può essere visualizzata come *≥50 MB* anziché un numero esatto.
- **Cancella tutti i riquadri**. Elimina tutti i riquadri memorizzati nella cache per la sorgente mappa selezionata, liberando spazio di archiviazione pur mantenendo la sorgente mappa disponibile per un uso futuro.
- **Esporta**. Salva la configurazione della sorgente mappa selezionata per il backup o la condivisione.
- **Rimuovi**. Elimina la sorgente mappa selezionata. Questa azione non influisce sulle mappe offline scaricate ma cancella la cache associata.


#### Panoramica elemento dati locale {#local-data-item-overview}

![Panoramica elemento dati locale](@site/static/img/settings/local_category_overview_2.png) ![Panoramica elemento dati locale 2](@site/static/img/settings/local_category_overview_1.png)

Quando visualizzi un elemento dati locale, vedi:

- **Tipo**. Il tipo di dati dall'elenco **Locale**.
- **Creato**. La data in cui l'elemento è stato aggiunto.
- **Dimensione**. La dimensione dell'elemento in MB.

Le **Azioni** disponibili dipendono dal tipo di dati e possono includere **Disattiva**, **Aggiorna**, **Rinomina**, **Esporta** ed **Elimina**.

#### Opzioni di ordinamento {#sorting-options}

![Opzioni di ordinamento dati locali](@site/static/img/settings/local_sorting_options_andr_1.png)

Utilizza le opzioni di ordinamento per organizzare i dati della mappa:

- **Nome (A - Z / Z - A)**. Individua gli elementi in ordine alfabetico.
- **Nome paese (A - Z / Z - A)**. Organizza le mappe geograficamente.
- **Data più recente prima** / **Data meno recente prima**. Visualizza gli aggiornamenti o le versioni precedenti.
- **Dimensione maggiore prima** / **Dimensione minore prima**. Identifica le mappe grandi per liberare spazio di archiviazione.


### Aggiornamenti {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menu mappe Aggiorna mappe Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menu mappe Aggiorna mappe iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

La scheda **Aggiornamenti** consente di aggiornare le mappe OsmAnd mensilmente. Utilizza il pulsante *Aggiorna tutto* per aggiornare tutte le mappe contemporaneamente, oppure aggiorna le singole mappe secondo necessità. Le mappe standard e solo strade vengono generalmente rilasciate due settimane dopo l'inizio di ogni mese. Per aggiornamenti orari, controlla lo stato del tuo abbonamento [OsmAnd Live](#osmand-live). Se abilitato, la sezione **Aggiornamenti in tempo reale** apparirà nella parte superiore della scheda, sotto l'indicatore Memoria dispositivo.


### Mappe extra {#extra-maps}

OsmAnd supporta il trasferimento di impostazioni e dati specifici del profilo, inclusi file di rendering, font, percorsi, mappe e plugin personalizzati. Crea una cartella mappe personalizzata utilizzando un file plugin `.osf` (un formato `.zip` compresso).

Per importare un file:

1. Individua il file `.osf` nello spazio di archiviazione del tuo dispositivo, nel messenger o nell'e-mail.
2. Tocca per aprirlo con OsmAnd.
3. Il plugin apparirà nella sezione **Elenco plugin**, dove potrà essere attivato.
4. Una cartella corrispondente apparirà quindi nella sezione **Mappe extra** della scheda [Download](#downloads).

Leggi di più nell'articolo [**Pacchetto personalizzato**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Acquisto
OsmAnd Live è una funzione a pagamento.
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*

![Menu mappe OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menu mappe OsmAnd live modifica Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menu mappe OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menu mappe OsmAnd live modifica iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** fornisce aggiornamenti incrementali frequenti delle mappe tramite [abbonamento](../purchases/index.md) o è gratuito per i [collaboratori OSM](#free-for-osm-mappers). Gli aggiornamenti avvengono ogni 15 minuti sui server OsmAnd e sono scaricabili ogni ora, ogni giorno o ogni settimana. Questi aggiornamenti consumano uno spazio di archiviazione minimo, circa il 2-4% della dimensione completa della mappa al mese.

<!--
Ogni scheda ha una raccolta indipendente di piccoli aggiornamenti, quindi **fai attenzione** se hai aree sovrapposte. Se vuoi tornare allo stato originale, puoi *disabilitare gli aggiornamenti e svuotare la cache*.
-->

Caratteristiche principali:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Aggiornamenti in tempo reale**. Gestisci tramite un interruttore nelle impostazioni.
- Pulsante **&#8230; &#124;** (*Android*) / Pulsante **&#62;** (*iOS*). Apri le impostazioni di *OsmAnd live*.
- **Interruttore**(*Android*) / Pulsante **&#43;** (*iOS*). Aggiungi mappe per gli *aggiornamenti in tempo reale*.
- **<Translate android="true" ids="update_frequency"/>**. Seleziona la frequenza di aggiornamento della mappa (oraria, giornaliera o settimanale).
- **<Translate android="true" ids="update_now"/>**. Avvia l'aggiornamento della mappa *OsmAnd live*.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Dimensione degli *aggiornamenti in tempo reale*.
- Pulsante **Cestino**(*Android*). Elimina tutti gli *aggiornamenti in tempo reale* ricevuti per la mappa corrente.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gestisci il download degli *aggiornamenti in tempo reale* tramite una connessione Wi-Fi.


### Timestamp degli aggiornamenti {#update-timestamps}

- **Ultimo aggiornamento OSM.**
    Indica le ultime modifiche di OpenStreetMap elaborate.
- **Regione aggiornata.**
    Mostra quando sono stati elaborati per l'ultima volta gli aggiornamenti della regione specifica.
- **Prossimo aggiornamento.**
    Visualizza l'ora pianificata per il prossimo controllo degli aggiornamenti.


### Limitazioni di OsmAnd Live {#limitations-of-osmand-live}

Le modifiche agli indirizzi sono supportate solo tramite aggiornamenti mensili.
Le strade aggiornate non hanno dettagli sull'altitudine, influenzando i grafici di pendenza.
I riferimenti di percorso eliminati o modificati potrebbero apparire ancora in modo errato.


### Gratuito per i mappatori OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live per i mappatori](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live per i mappatori](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

I contributori di [OpenStreetMap](https://openstreetmap.org/) hanno diritto a download di mappe illimitati gratuiti e aggiornamenti in tempo reale. Per qualificarsi:
Abilita il [plugin Modifica OpenStreetMap](../plugins/osm-editing.md).
[Accedi](../plugins/osm-editing.md#settings) con il tuo nome utente OSM.
Mantieni almeno [**30 modifiche**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) negli ultimi due mesi.

## Articoli correlati {#related-articles}

- [Profili (Impostazioni)](./profiles.md)
- [Importa / Esporta](../personal/import-export.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

- Navigazione vocale. [(verifica)](../troubleshooting/navigation.md#voice-navigation)
- Come eliminare la cronologia delle ricerche. [(verifica)](../troubleshooting/general.md#how-to-delete-search-history)
- Per ulteriori risoluzioni dei problemi, visita: [Mappe e dati](../troubleshooting/maps-data.md)

> *Ultimo aggiornamento: Febbraio 2025*