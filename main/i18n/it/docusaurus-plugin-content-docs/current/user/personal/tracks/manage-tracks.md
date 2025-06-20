---
source-hash: 72d37f9997601d7e49a3f431d77204a5ac209322f624590ebefae8426b2e23af
sidebar_position: 2
title: Gestire le tracce
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

Tutte le tracce in OsmAnd sono memorizzate in una scheda in *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd elabora il file della traccia in [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), ma i formati [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) e [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) possono essere importati e convertiti in GPX. Per saperne di più sui diversi tipi di tracce, consulta l'articolo [Tracce sulla mappa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Panoramica Gestione tracce Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica Gestione tracce iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Creare una traccia {#create-a-track}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pianifica un percorso modifica-traccia-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso modifica-traccia-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Puoi aggiungere tracce in OsmAnd nei seguenti modi:

1. **[Importa](./manage-tracks.md#import--export-track)** una traccia da una fonte esterna.
2. Crea una nuova traccia nell'applicazione utilizzando lo strumento **[Pianifica un percorso](../../plan-route/create-route.md)**.
3. Registra una traccia nell'applicazione utilizzando il plugin **[Registrazione viaggio](../../plugins/trip-recording.md)**.
4. Inserisci più punti tramite coordinate e salvali come traccia utilizzando lo strumento **[Inserimento coordinate](../../plan-route/coordinate-input.md)**.
5. Puoi anche aggiungere **Waypoint** a una nuova traccia tramite il **[Menu contestuale](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Gestire le tracce {#manage-tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![I miei luoghi con tracce in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Tutte le tracce mai registrate, create o importate vengono visualizzate automaticamente nella cartella [I miei luoghi](../../personal/myplaces.md) nella scheda *Tracce*. Sono organizzate per cartella o visualizzate in un elenco sotto di esse.


### Menu Traccia {#track-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

Ogni traccia, come le cartelle, ha un menu che ti consente di gestire le tracce in modo efficiente. Ecco come accedervi:

- *Android* - tocca il *menu a tre puntini* nel campo della traccia.
- *iOS* - tocca a lungo la traccia desiderata nell'elenco.

Il menu offre le seguenti azioni:

- **Mostra/Nascondi sulla mappa** — Visualizza o nasconde le tracce selezionate sulla mappa, rappresentandone visivamente la posizione.

- [Apri](../../map/tracks/index.md#configure-map) (*iOS*) — Questa impostazione è disponibile nel menu Configura mappa. Situata in *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, ti consente di accedere al [menu contestuale della traccia selezionata](../../map/tracks/track-context-menu.md) quando viene toccata.

- **Aspetto** (*iOS*) — Personalizza l'[aspetto delle tracce](../../map/tracks/appearance.md) in base alle tue preferenze.

- **Navigazione** (*iOS*) — Avvia la [navigazione](../../navigation/setup/gpx-navigation.md) lungo la traccia selezionata.

- **Analizza sulla mappa** (*Android*) / **Analizza** (*iOS*) — Apre lo strumento [Analizza sulla mappa](../../navigation/setup/route-details.md#analyze-on-map) all'interno dei Dettagli percorso per ulteriori analisi.

- **Condividi** — Consente di condividere la traccia selezionata con altri.

- **Carica modifiche su OSM** (*iOS*) — [Carica le modifiche](../../plugins/osm-editing.md#gps-track) che hai apportato alla traccia direttamente su *OpenStreetMap*.

- **Modifica** (*iOS*) — Utilizza lo strumento [Pianifica un percorso](../../plan-route/create-route.md#modify-gpx-track) per modificare le tracce.

- **Duplica** (*iOS*) — Crea una copia della traccia selezionata.

- **Rinomina** — Cambia il nome della traccia selezionata per una migliore organizzazione.

- **Sposta** — Ti consente di spostare la traccia selezionata in una cartella diversa.

- **Esporta** (*Android*) — Naviga in *Menu → Impostazioni → Scheda Azioni* per esportare tutte le tracce da una cartella.

- **Elimina** — Rimuovi definitivamente la traccia selezionata che non è più necessaria.


### Cerca {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzione di ricerca tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ricerca tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>

Tocca il pulsante &#x1F50D; nella parte superiore dello schermo del dispositivo per aprire il menu di ordinamento dell'elenco delle tracce.

Disponibile:

- Cerca per nome della traccia.
- [Ordina per](#sort-by) per una migliore ricerca se non riesci a ricordare il titolo.
- [Filtra](./smart-folder.md#search-filter) (*solo Android*) se hai bisogno delle caratteristiche specifiche della traccia.


### Modalità di selezione {#selection-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracce I miei luoghi iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>

La voce di menu **Seleziona** fornisce opzioni per la gestione di cartelle e tracce. Questa funzione ti consente di selezionare più tracce o cartelle di tracce. Puoi anche selezionare tutte le tracce e le cartelle toccando lo speciale pulsante **Seleziona tutto**.

Una volta effettuata la scelta, vengono fornite le seguenti fasi:

- **Mostra sulla mappa** — Con questa funzione, puoi visualizzare le tracce selezionate sulla mappa per comprendere meglio la loro posizione e relazione reciproca.

- **Condividi** (*Android*) / **Esporta** (*iOS*) — Se desideri condividere i dati selezionati con altri utenti o salvarli su un servizio cloud, la funzione *Condividi/Esporta* ti consente di inviare tracce e cartelle utilizzando diversi metodi di condivisione.

- **Carica su OpenStreetMap** — Puoi inviare le tracce selezionate a OpenStreetMap, contribuendo allo sviluppo e al miglioramento dei dati.

- **Sposta** — Puoi organizzare i tuoi dati spostando le tracce e le cartelle selezionate in altre cartelle.

- [Cambia attività](../../map/tracks/track-context-menu.md#track-information-activity) (*solo Android*) — Questa azione ti consente di cambiare il tipo di attività, ad esempio in *Auto*, *Motorsport avventura*, *Escursionismo* o altri, per la traccia selezionata.

- [Cambia aspetto](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Questa opzione ti consente di personalizzare l'aspetto delle tracce selezionate, rendendole più visibili e riconoscibili sulla mappa.

- **Elimina** — Se le tracce o le cartelle selezionate non sono più necessarie, la funzione Elimina ti consente di eliminarle, con l'app che fornisce opzioni di conferma per evitare eliminazioni accidentali.


### Ordina per {#sort-by}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ordinamento tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>

OsmAnd offre un modo semplice per ordinare le tue tracce, aiutandoti a gestire una vasta collezione o a trovare rapidamente funzionalità specifiche. Per accedere al menu di ordinamento, tocca **Ordina per** nella parte superiore dell'elenco delle tracce.

***Opzioni di ordinamento:***

- **Più vicine** — Mostra le tracce più vicine alla tua posizione attuale.

- **Ultima modifica** — Visualizza le tracce ordinate per data di modifica più recente.

- **Nome: A - Z** — Dispone le tracce alfabeticamente dalla A alla Z.

- **Nome: Z - A** — Dispone le tracce alfabeticamente dalla Z alla A.

- **Data più recente per prima** — Elenca le tracce per data di creazione, con la più recente in cima.

- **Data meno recente per prima** — Elenca le tracce per data di creazione, con la meno recente in cima.

- **Distanza più lunga per prima** — Visualizza le tracce ordinate per lunghezza, con la più lunga in cima.

- **Distanza più corta per prima** — Visualizza le tracce ordinate per lunghezza, con la più corta in cima.

- **Durata più lunga per prima** — Ordina le tracce per durata, posizionando la più lunga in cima.

- **Durata più corta per prima** — Ordina le tracce per durata, posizionando la più corta in cima.

#### Ordinamento delle sottocartelle {#sorting-subfolders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ordinamento tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Se desideri ordinare le [sottocartelle](#folder-actions), vai al menu a tre puntini all'interno della cartella selezionata e seleziona le [opzioni](#sort-by) richieste.

L'opzione di ordinamento selezionata viene applicata non solo alla sottocartella corrente, ma anche a tutte le cartelle nidificate e alle tracce a tutti i livelli. Ciò garantisce una struttura coerente tra i dati salvati.


## Cartella tracce {#track-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Il menu della cartella tracce ti consente di visualizzare, rinominare, esportare e gestire le cartelle.

Come aprire il menu della cartella:

- *Android* - tocca il *menu a tre puntini* nel campo della cartella.
- *iOS* - tocca a lungo il campo della cartella.

***Azioni con una cartella:***

- **Nome** — Visualizza il nome della cartella, la data di creazione e il numero di tracce che contiene.

- **Mostra tutte le tracce sulla mappa** (*solo Android*) — Visualizza tutte le tracce nella cartella sulla mappa —
    *NOTA: Se ci sono molte tracce, ciò potrebbe causare il blocco del dispositivo.*

- **Modifica nome** (*Android*) / **Rinomina** (*iOS*) — Ti consente di rinominare la cartella.

- [Cambia aspetto predefinito](../../map/tracks/appearance.md) (*Android*) / **Aspetto** (*iOS*) — Cambia l'aspetto di visualizzazione di tutte le tracce nella cartella.

- [Esporta](../../personal/import-export.md) — Apre la scheda *Menu → Impostazioni → Azioni* per esportare tutte le tracce nella cartella come file [`.osf`](../../personal/import-export.md#export).

- [Sposta](#track-folder) — Ti consente di spostare la cartella in un'altra cartella esistente o crearne una nuova.

- [Elimina cartella](#delete-folder) — Elimina la cartella dopo la conferma.
    ***NOTA: Questa azione è irreversibile.***


### Statistiche cartella {#folder-statistics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![I miei luoghi con tracce in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Nella parte inferiore dell'elenco nella scheda *Tracce* e sotto l'elenco delle tracce **in ciascuna delle tue cartelle**, c'è una sezione informativa che ti consente di visualizzare le statistiche riassuntive complessive per le tracce nella cartella selezionata. Tutti i valori sono visualizzati nelle [unità](../../personal/profiles.md#units--formats) che hai selezionato.

- *Numero di **Tracce** nella cartella* — Visualizza il numero di tracce contenute nella cartella selezionata.

- *Somma totale delle* **Distanze** — Viene visualizzata la lunghezza totale di tutte le tracce nella cartella selezionata, misurata nelle unità che hai selezionato.

- *Somma delle* **Salite** — I dati indicano il dislivello verticale totale su tutte le tracce nella cartella selezionata.

- *Somma delle* **Discese** — Questo parametro è la somma delle discese verticali su tutte le tracce nella cartella selezionata.

- *Somma del tempo di* **Durata** — Visualizza il tempo totale impiegato per completare tutte le tracce nella cartella selezionata.

- *Dimensione totale dei file scaricati in MB* — La dimensione totale dei file scaricati in megabyte mostra quanto spazio occupano tutte le tracce nella cartella selezionata sul tuo dispositivo.


### Azioni cartella {#folder-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Le azioni nella cartella ti aiutano a organizzare, ordinare e importare tracce, per strutturare i tuoi dati di navigazione.

Come aprire le azioni della cartella:

- Apri la scheda Tracce in I miei luoghi.
- Naviga nella cartella che desideri gestire.
- Tocca il *menu a tre puntini* nell'angolo in alto a destra per aprire il menu delle azioni della cartella.

***Azioni nel menu della cartella:***

- [Seleziona](#selection-mode) — Tocca le cartelle e le tracce richieste per applicare le azioni dal menu in *modalità di selezione*.

- [Ordina sottocartelle](#sort-by) — Applica un ordine di ordinamento (ad esempio, per nome, data) a tutte le sottocartelle e alle tracce a ogni livello.

- [Aggiungi cartella intelligente](../tracks/smart-folder.md#how-to-create-smart-folder) — Ordina automaticamente percorsi e tracce in base ai criteri impostati.

- [Importa](#import) — Carica file GPX o altri file di traccia dal tuo dispositivo in OsmAnd per l'utilizzo offline.

- **Aggiungi nuova cartella** — Per organizzare i tuoi percorsi e le tue tracce in categorie logiche, mettili in cartelle diverse. Questo aiuta a strutturare le tue informazioni di navigazione.


### Elimina cartella {#delete-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>

Puoi eliminare una cartella con tutte le tracce che contiene. Per fare ciò:

- Tocca il *menu a tre puntini* nel campo della cartella da eliminare.
- Nella parte inferiore del menu, trova l'opzione **Elimina cartella**.
- ***NOTA: Questa azione è irreversibile.***


## Importa / Esporta traccia {#import--export-track}

### Importa {#import}

Lo strumento di importazione ti consente di aggiungere tracce da file esterni per la navigazione e l'analisi offline. Metodi per importare tracce:

1. **Importazione diretta di file:**

    - Tocca un file GPX, KML o KMZ da app di messaggistica, email, Google Drive o file manager.
    - Seleziona Apri in OsmAnd quando richiesto.
    - La traccia importata viene salvata nella cartella **Importa** in *I miei luoghi*.
    - Passaggi: Tocca il file GPX → Apri in OsmAnd.

2. **Importazione tramite il menu *I miei luoghi*:**

    - Apri il menu *I miei luoghi → Tracce*.
    - Seleziona il file GPX da importare.

    *Opzioni aggiuntive:*

    - **File GPX a traccia singola** - importa l'intera traccia direttamente.
    - **File GPX a tracce multiple** - scegli di importare il singolo file GPX o seleziona tracce specifiche.

***NOTA:*** *Le tracce aggiunte manualmente alla cartella OsmAnd sul tuo dispositivo vengono importate automaticamente senza riavviare l'applicazione.*


### Esporta {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Esporta | Importa |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Esporta </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Esporta </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Esistono diversi modi per esportare uno o più file di traccia in qualsiasi messenger, email, file manager o app.

1. Tramite [*Menu contestuale traccia → Condividi*](../../map/tracks/track-context-menu.md#options).

2. Tramite *Menu I miei luoghi → Tracce → Menu Cartella / Traccia*:

    - Per [**esportare una singola traccia**](#track-menu), seleziona il menu della traccia.
    - Per [**esportazione multi-traccia**](#track-folder), seleziona il menu della cartella richiesta.

3. Tramite [File di backup locale](../../personal/import-export.md#export-to-file). Esportazione di tracce GPX come file `.osf`.


## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../../map/tracks/index.md)
- [Analizza sulla mappa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale traccia](../../map/tracks/track-context-menu.md)
- [Navigazione per traccia](../../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)

> *Ultimo aggiornamento: Aprile 2025*