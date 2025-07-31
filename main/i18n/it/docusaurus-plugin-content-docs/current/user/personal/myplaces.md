---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: I miei luoghi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

## Panoramica {#overview}

**I miei luoghi** è l'hub centrale nell'app OsmAnd per la gestione e la personalizzazione di tutti i dati personali. Puoi usare questa sezione per organizzare i [Punti preferiti](#favorites) contrassegnati come importanti o visitati frequentemente. La scheda [Tracce](#tracks) ti consente di visualizzare, importare, registrare e creare file GPX per aiutarti a mantenere una cronologia dettagliata dei tuoi percorsi e viaggi. Puoi anche gestire le tue [Modifiche OpenStreetMap](#openstreetmap-edits), rendendo facile contribuire ai miglioramenti e agli aggiornamenti delle mappe. Il plugin e i widget [Note audio/video](#audiovideo-notes) consentono agli utenti Android di creare e salvare note multimediali relative a posizioni specifiche, aggiungendo contesto ai loro viaggi.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu"/> → I miei luoghi*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Importa ed esporta dati***](../personal/import-export.md):

    Tutti i dati memorizzati nel menu *I miei luoghi* possono essere spostati utilizzando un formato speciale `.osf` tramite le applicazioni sul tuo dispositivo. Questo processo semplifica il salvataggio e il trasferimento dei dati tra dispositivi e ti consente di condividerli con altri utenti OsmAnd.

    **Vai alla** sezione *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* e seleziona se esportare o importare i dati. Se selezioni *esporta*, dovrai espandere il *gruppo I miei luoghi* e controllare i dati richiesti.

- [***Mappe e risorse***](../personal/maps-resources.md):

    La voce *Mappe e risorse* del *Menu principale* dell'applicazione OsmAnd fornisce l'accesso alla gestione dei dati dalla sezione *I miei luoghi*. La scheda [*Locale*](../personal/maps-resources.md#local) mostra quanto spazio è occupato da tutti i dati OsmAnd esistenti sul tuo dispositivo, e in particolare la sezione *I miei luoghi*. Puoi usarla per ottenere informazioni dettagliate sui tuoi dati e l'accesso per gestirli. La sezione può contenere solo elementi per i quali i dati sono stati scaricati.

    **Vai a** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Controlla e gestisci i tuoi dati.


## Preferiti {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

I **Preferiti** ti consentono di aggiungere ai segnalibri posizioni importanti o visitate frequentemente. Questi punti preferiti sono organizzati in cartelle e possono essere personalizzati con colori, forme e icone diverse. Puoi navigare rapidamente a qualsiasi luogo preferito tramite il menu **I miei luoghi** senza doverlo cercare ripetutamente.


1. ***Pulsanti di azione***. I *pulsanti di azione* nella parte inferiore della schermata I miei luoghi ti consentono di gestire l'elenco delle cartelle con i tuoi preferiti:

    - **Importa** (pulsante *Aggiungi*) — Ti consente di importare file *favorite.gpx* dalla memoria del tuo dispositivo.

    - **Esporta** — Salva i tuoi punti preferiti come file *favorites.gpx* per uso esterno o backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Solo Android*) — Puoi aggiungere qualsiasi punto preferito o l'intero elenco di punti preferiti in una cartella all'[elenco dei marcatori della mappa](../personal/markers.md).

    - **Elimina** (*su iOS, questa opzione si trova nel menu Modifica*) — Elimina i punti preferiti uno alla volta o le cartelle preferite selezionate e tutti i punti in esse contenuti.

2. ***Menu a tre punti*** (*Android*) e ***tocco prolungato*** (*iOS*). Usa il menu *a tre punti* accanto a ciascuna cartella o *tocca a lungo* la cartella per gestire i gruppi di preferiti:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Usa questa opzione per cambiare il nome della cartella selezionata.

    - **<Translate android="true" ids="change_default_appearance"/>** — Personalizza l'aspetto dei punti preferiti nella cartella sulla mappa modificando le loro icone, colori o etichette.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** o **Nascondi sulla mappa** — Attiva questa opzione per visualizzare o nascondere i punti preferiti dalla cartella sulla mappa.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Rimuovi dai marcatori della mappa** (*Solo Android*) — Aggiungi tutti i punti preferiti dalla cartella all'*elenco dei marcatori della mappa* o rimuovili secondo necessità per un facile riferimento.

    - **<Translate android="true" ids="shared_string_share"/>** — Condividi i punti preferiti nella cartella esportandoli come file *Favorites.gpx*, rendendo facile trasferire o eseguire il backup dei tuoi dati.

    - **<Translate android="true" ids="shared_string_delete"/>** — Elimina definitivamente la cartella dei preferiti selezionata e tutti i punti al suo interno.

Per istruzioni più dettagliate, consulta l'articolo [Preferiti](../personal/favorites.md).


## Tracce {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> scheda*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> scheda*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Le **Tracce** offrono potenti strumenti per la registrazione, la creazione e la gestione dei percorsi all'interno di OsmAnd. Possono essere utilizzate per la [navigazione](../navigation/setup/gpx-navigation.md), la [registrazione di viaggi](../plugins/trip-recording.md) o l'[integrazione](../personal/tracks/manage-tracks.md#import) di file GPX esterni.

- **Scheda Tracce** — Tutte le tracce mai registrate, create o importate vengono visualizzate automaticamente nella cartella *I miei luoghi* nella scheda *Tracce*. Sono organizzate per cartella o visualizzate in un elenco sotto di esse.

- **Crea una traccia** — Inizia la registrazione usando la **Scheda Tracce** o il [plugin di registrazione di viaggi](../plugins/trip-recording.md).

- **Visualizza e modifica** — Accedi all'elenco delle tracce tramite *I miei luoghi* e gestiscile usando il *menu a tre punti* per le [cartelle](../personal/tracks/manage-tracks.md#track-folder) o il menu della [singola traccia](../personal/tracks/manage-tracks.md#single-track-menu).

- **Gestisci** — Usa gli strumenti [Filtro](../personal/tracks/smart-folder.md#filter) e [Cartella intelligente](../personal/tracks/smart-folder.md#smart-folder) per organizzare le tracce in base a parametri specifici.

- **Aspetto e analisi** — [Personalizza](../map/tracks/appearance.md) lo stile visivo delle tracce e [analizzale](../map/tracks/index.md#analyze-track-on-map) usando lo strumento [Pianifica un percorso](../plan-route/create-route.md) di OsmAnd.

Per una guida completa, consulta l'articolo [Gestisci tracce](../personal/tracks/manage-tracks.md).


## Modifiche OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

La funzione **Modifiche OpenStreetMap** di OsmAnd ti consente di contribuire alla comunità globale di mappatura aggiungendo, modificando o commentando i dati della mappa.

1. ***Pulsanti di azione***. Puoi usare i *pulsanti di azione* nella schermata I miei luoghi per gestire il tuo elenco di note:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Carica file su OSM** — Invia le tue note e i tuoi dati a OpenStreetMap per contribuire alla comunità.

    - **Esporta** (*Solo Android*) — Salva le tue note e i POI come file per uso esterno o backup, con opzioni per esportare come note OSM, POI o tutti i dati combinati.

    - **Elimina** — Rimuovi definitivamente gli elementi selezionati dal tuo elenco.


2. ***Menu a tre punti***. Puoi gestire POI o note specifici usando il *menu a tre punti* accanto a ciascuna nota:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Carica modifica su OSM** — Invia le tue modifiche o correzioni a OpenStreetMap affinché altri possano vederle.

    - **Mostra sulla mappa** — Visualizza la posizione specifica del POI o della nota sulla mappa.

    - **Modifica modifica/nota OSM** — Apporta ulteriori modifiche al POI o alla nota che sono già stati aggiunti a OpenStreetMap.

    - **Elimina** — Rimuovi il POI o la nota selezionati dal tuo elenco.

Fai riferimento al [plugin di modifica OSM](../plugins/osm-editing.md) per istruzioni passo-passo.


## Note audio/video {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

Il **plugin Note audio/video** ti consente di creare note multimediali collegate a posizioni specifiche della mappa. Queste note sono memorizzate in **I miei luoghi** nella **scheda Note A/V**.

1. ***Pulsanti di azione***. Puoi usare i *pulsanti di azione* nella parte inferiore della schermata I miei luoghi per gestire il tuo elenco di note:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Apre una selezione di metodi di ordinamento, *Per tipo* o *Per data*, e una volta selezionato, ordina l'elenco di conseguenza.

    - **<Translate android="true" ids="shared_string_share"/>** — Visualizza una checklist di tutte le note, comprese quelle aggiunte ai file GPX come waypoint. Innanzitutto, le note richieste vengono selezionate, quindi l'icona *Condividi* nell'angolo in alto a destra dello schermo suggerisce le opzioni di condivisione disponibili e infine queste note diventano disponibili in base all'opzione selezionata.

    - **Condividi con waypoint GPX** — Puoi condividere le note selezionate come waypoint nel menu *I miei luoghi* aggiungendo [dati GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) ad esse usando il pulsante **Condividi** nella parte inferiore della schermata della scheda *Note A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Visualizza una checklist di sole note audio, foto e video. Innanzitutto, seleziona le note non necessarie, quindi tocca l'icona *Elimina* nell'angolo in alto a destra dello schermo, dopo la conferma, le note selezionate verranno eliminate definitivamente.


2. ***Menu a tre punti***. Puoi gestire note audio, video o fotografiche specifiche usando il *menu a tre punti* accanto a ciascuna nota:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Visualizza o ascolta direttamente la nota audio, video o fotografica selezionata.

    - **<Translate android="true" ids="shared_string_share"/>** — Condivide la nota con altri tramite varie app o piattaforme.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Visualizza la posizione correlata e il [menu contestuale](../plugins/audio-video-notes#actions-in-map-context-menu) della nota sulla mappa.

    - **<Translate android="true" ids="shared_string_rename"/>** — Cambia il nome della nota in qualcosa di più descrittivo o pertinente.

    - **<Translate android="true" ids="shared_string_delete"/>** — Le note selezionate vengono eliminate definitivamente dalla tua raccolta.

Per maggiori informazioni, visita la pagina del [plugin Note audio/video](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Articoli correlati {#related-articles}

- [Gestisci tracce](../personal/tracks/manage-tracks.md#import--export-track)
- [Cronologia ricerche](../search/search-history.md#export-and-share)
- [Schemi della tavolozza dei colori](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: marzo 2025*