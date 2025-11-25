---
source-hash: 04406e7e66e2e6cda894bf72a3f747e6b543f8a003e1b65c58a1772ff944c6c2
sidebar_position: 2
title:  Gestire le Tracce
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

Tutte le tracce in OsmAnd sono memorizzate in una scheda in *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd elabora i file delle tracce in [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), ma i formati [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) e [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) possono essere importati e convertiti in GPX. Per saperne di più sui diversi tipi di tracce, consultare l'articolo [Tracce sulla mappa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panoramica Gestione Tracce Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Panoramica Gestione Tracce iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Creare una Traccia {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica un percorso modifica-traccia-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica un percorso modifica-traccia-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

È possibile aggiungere tracce in OsmAnd nei seguenti modi:

1. **[Importa](./manage-tracks.md#import--export-track)** una traccia da una fonte esterna.
2. Creare una nuova traccia nell'applicazione utilizzando lo strumento **[Pianifica un percorso](../../plan-route/create-route.md)**.
3. Registrare una traccia nell'applicazione utilizzando il plugin **[Registrazione viaggio](../../plugins/trip-recording.md)**.
4. Inserire più punti tramite coordinate e salvarli come traccia utilizzando lo strumento **[Inserimento coordinate](../../plan-route/coordinate-input.md)**.
5. È anche possibile aggiungere **Waypoints** a una nuova traccia tramite il **[Menu contestuale](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Gestire le Tracce {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *scheda <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![I miei luoghi con tracce in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Tutte le tracce registrate, create o importate vengono visualizzate automaticamente nella cartella [I miei luoghi](../../personal/myplaces.md) nella scheda *Tracce*. Sono organizzate per cartella o visualizzate in un elenco sottostante.


### Menu Traccia {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *scheda <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Ogni traccia, come le cartelle, ha un menu che consente di gestire le tracce in modo efficiente. Ecco come accedervi:

- *Android* - toccare il *menu con i tre puntini* nel campo della traccia.
- *iOS* - toccare a lungo la traccia desiderata nell'elenco.

Il menu offre le seguenti azioni:

- **Mostra/Nascondi sulla mappa** — Mostra o nasconde le tracce selezionate sulla mappa, rappresentando visivamente la loro posizione.

- **[Apri](../../map/tracks/index.md#configure-map)** (*iOS*) — Questa impostazione è disponibile nel menu Configura mappa. Situata in *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, consente di accedere al [menu contestuale della traccia selezionata](../../map/tracks/track-context-menu.md) quando viene toccata.

- **Aspetto** (*iOS*) — Personalizza l'[aspetto delle tracce](../../map/tracks/appearance.md) in base alle tue preferenze.

- **Navigazione** (*iOS*) — Avvia la [navigazione](../../navigation/setup/gpx-navigation.md) lungo la traccia selezionata.

- **Analizza sulla mappa** (*Android*) / **Analizza** (*iOS*) — Apre lo strumento [Analizza sulla mappa](../../navigation/setup/route-details.md#analyze-on-map) nei Dettagli percorso per ulteriori analisi.

- **Condividi** — Consente di condividere la traccia selezionata con altri.

- **Carica modifiche su OSM** (*iOS*) — [Carica le modifiche](../../plugins/osm-editing.md#gps-track) apportate alla traccia direttamente su *OpenStreetMap*.

- **Modifica** (*iOS*) — Utilizza lo strumento [Pianifica un percorso](../../plan-route/create-route.md#modify-existing-gpx-track) per modificare le tracce.

- **Duplica** (*iOS*) — Crea una copia della traccia selezionata.

- **Rinomina** — Cambia il nome della traccia selezionata per una migliore organizzazione.

- **Sposta** — Consente di spostare la traccia selezionata in una cartella diversa.

- **Esporta** (*Android*) — Navigare su *Menu → Impostazioni → scheda Azioni* per esportare tutte le tracce da una cartella.

- **Elimina** — Rimuove permanentemente la traccia selezionata che non è più necessaria.


### Cerca {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ricerca tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ricerca tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Toccare il pulsante &#x1F50D; nella parte superiore dello schermo del dispositivo per aprire il menu di ordinamento dell'elenco delle tracce.  

Disponibile:

- Ricerca per nome della traccia.
- [Ordina per](#sort-by) per una ricerca migliore se non si ricorda il titolo.
- [Filtro](./smart-folder.md#search-filter) (*solo Android*) se si necessita delle caratteristiche specifiche della traccia.


### Modalità di selezione {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracce I miei luoghi iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

La voce di menu **Seleziona** offre opzioni per la gestione di cartelle e tracce. Questa funzione consente di selezionare più tracce o cartelle di tracce. È anche possibile selezionare tutte le tracce e le cartelle toccando il pulsante speciale **Seleziona tutto**.

Una volta effettuata la scelta, vengono forniti i seguenti passaggi:  

- **Mostra sulla mappa** — Con questa funzione, è possibile visualizzare le tracce selezionate sulla mappa per comprendere meglio la loro posizione e la relazione reciproca.

- **Condividi** (*Android*) / **Esporta** (*iOS*) — Apre il menu di condivisione del sistema e invia le tracce selezionate come file GPX (.gpx) o esporta le cartelle selezionate utilizzando l'app o il servizio cloud scelto.

- **Carica su OpenStreetMap** — È possibile inviare le tracce selezionate a OpenStreetMap, contribuendo allo sviluppo e al miglioramento dei dati.

- **Sposta** — È possibile organizzare i dati spostando le tracce e le cartelle selezionate in altre cartelle.

- **[Cambia attività](../../map/tracks/track-context-menu.md#ttrack-activity-type)** — Questa azione consente di cambiare il tipo di attività, ad esempio in *Auto*, *Motociclismo d'avventura*, *Escursionismo* o altro, per la traccia selezionata.

- **[Cambia aspetto](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks)** — Questa opzione consente di personalizzare l'aspetto delle tracce selezionate, rendendole più visibili e riconoscibili sulla mappa.

- **Elimina** — Se le tracce o le cartelle selezionate non sono più necessarie, la funzione Elimina consente di eliminarle, con l'app che fornisce opzioni di conferma per evitare cancellazioni accidentali.


### Ordinare le Tracce {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ordinamento tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd offre un modo semplice per ordinare le tracce, aiutandovi a gestire una vasta collezione o a trovare rapidamente caratteristiche specifiche. Per accedere al menu di ordinamento, toccare **Ordina per** nella parte superiore dell'elenco delle tracce.

***Opzioni di ordinamento:***

- **Più vicine** — Mostra le tracce più vicine alla posizione corrente.
- **Ultima modifica** — Visualizza le tracce ordinate in base alla data di modifica più recente.
- **Nome: A - Z** — Ordina le tracce in ordine alfabetico dalla A alla Z.
- **Nome: Z - A** — Ordina le tracce in ordine alfabetico dalla Z alla A.
- **Data più recente prima** — Elenca le tracce per data di creazione, con le più recenti in cima.
- **Data meno recente prima** — Elenca le tracce per data di creazione, con le meno recenti in cima.
- **Distanza più lunga prima** — Visualizza le tracce ordinate per lunghezza, con la più lunga in cima.
- **Distanza più breve prima** — Visualizza le tracce ordinate per lunghezza, con la più breve in cima.
- **Durata più lunga prima** — Ordina le tracce per durata, posizionando la più lunga in cima.
- **Durata più breve prima** — Ordina le tracce per durata, posizionando la più breve in cima.

### Ordinamento Sottocartelle {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ordinamento tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Se si desidera ordinare le [sottocartelle](#folder-actions), accedere al menu con i tre puntini all'interno della cartella selezionata e selezionare le [opzioni](#sort-by) richieste.  

L'opzione di ordinamento selezionata viene applicata non solo alla sottocartella corrente, ma anche a tutte le cartelle e le tracce nidificate a tutti i livelli. Ciò garantisce una struttura coerente per tutti i dati salvati.


## Cartella Tracce {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Toccare il *menu con i tre puntini* nel campo della cartella per **aprire** il menu della cartella.

![importa multitraccia](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Toccare a lungo il campo della cartella per **aprire** il menu della cartella.

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Il menu della cartella delle tracce consente di visualizzare, rinominare, esportare e gestire le cartelle.


***Azioni con una cartella:***

- **Nome** — Visualizza il nome della cartella, la data di creazione e il numero di tracce che contiene.
- **Mostra tutte le tracce sulla mappa** (*solo Android*) — Visualizza tutte le tracce della cartella sulla mappa. Se ci sono molte tracce, questo potrebbe causare il blocco del dispositivo.
- **Modifica nome** (*Android*) / **Rinomina** (*iOS*) — Consente di rinominare la cartella.
- **[Cambia aspetto predefinito](../../map/tracks/appearance.md)** (*Android*) / **Aspetto** (*iOS*) — Cambia l'aspetto di visualizzazione di tutte le tracce nella cartella.
- **[Esporta](../../personal/import-export.md)** — Apre la scheda *Menu → Impostazioni → Azioni* per esportare tutte le tracce della cartella come [file `.osf`](../../personal/import-export.md#export).
- **[Sposta](#track-folder)** — Consente di spostare la cartella in un'altra cartella esistente o di crearne una nuova.
- **[Elimina cartella](#delete-folder)** — Elimina la cartella dopo la conferma. ***Questa azione è irreversibile.***


### Statistiche Cartella {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *scheda <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![I miei luoghi con tracce in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

In fondo all'elenco nella scheda *Tracce*, e sotto l'elenco delle tracce **in ciascuna delle vostre cartelle**, c'è una sezione informativa che permette di visualizzare le statistiche riassuntive complessive per le tracce nella cartella selezionata. Tutti i valori sono visualizzati nelle [unità](../../personal/profiles.md#units--formats) che avete selezionato.

- *Numero di **Tracce** nella cartella* — Visualizza il numero di tracce contenute nella cartella selezionata.
- *Somma totale delle* **Distanze** — Viene visualizzata la lunghezza totale di tutte le tracce nella cartella selezionata, misurata nelle unità selezionate.
- *Somma delle* **Salite** — Il dato indica il dislivello totale in salita di tutte le tracce nella cartella selezionata.
- *Somma delle* **Discese** — Questo parametro è la somma dei dislivelli in discesa di tutte le tracce nella cartella selezionata.
- *Somma del* **Tempo** *di durata* — Visualizza il tempo totale impiegato per completare tutte le tracce nella cartella selezionata.
- *Dimensione **Totale** dei file scaricati in MB* — La dimensione totale dei file scaricati in megabyte mostra quanto spazio occupano tutte le tracce nella cartella selezionata sul dispositivo.


### Azioni Cartella {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracce I miei luoghi iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Le azioni nella cartella aiutano a organizzare, ordinare e importare le tracce, per strutturare i dati di navigazione.  

Come aprire le azioni della cartella:

- Aprire la scheda Tracce in I miei luoghi.
- Navigare fino alla cartella che si desidera gestire.
- Toccare il *menu con i tre puntini* nell'angolo in alto a destra per aprire il menu delle azioni della cartella.

***Azioni nel menu della cartella:***

- [Seleziona](#selection-mode) — Toccare le cartelle e le tracce richieste per applicare le azioni dal menu in *modalità di selezione*.
- [Ordina sottocartelle](#sort-by) — Applica un ordine di ordinamento (ad es. per nome, data) a tutte le sottocartelle e le tracce a ogni livello.
- [Aggiungi cartella smart](../tracks/smart-folder.md#how-to-create-smart-folder) — Ordina automaticamente percorsi e tracce in base ai criteri impostati.
- [Importa](#import) — Carica file GPX o altri file di tracce dal tuo dispositivo a OsmAnd per l'uso offline.
- **Aggiungi nuova cartella** — Per organizzare i percorsi e le tracce in categorie logiche, inserirli in cartelle diverse. Questo aiuta a strutturare le informazioni di navigazione.


### Elimina cartella {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *scheda <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![I miei luoghi con tracce in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Menu contestuale di una traccia in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

È possibile eliminare una cartella con tutte le tracce che contiene. Per fare ciò:

- Toccare il *menu con i tre puntini* nel campo della cartella da eliminare.
- In fondo al menu, trovare l'opzione **Elimina cartella**.
- ***NOTA: Questa azione è irreversibile.***


## Importa / Esporta Traccia {#import--export-track}

### Importa {#import}

Lo strumento di importazione consente di aggiungere tracce da file esterni per la navigazione e l'analisi offline. Metodi per importare le tracce:

1. **Importazione diretta di file:**

    - Toccare un file GPX, KML o KMZ da app di messaggistica, e-mail, Google Drive o gestori di file.
    - Selezionare Apri in OsmAnd quando richiesto.
    - La traccia importata viene salvata nella cartella **Importa** in *I miei luoghi*.
    - Passaggi: Toccare il file GPX → Apri in OsmAnd.

2. **Importazione tramite il menu *I miei luoghi*:**

    - Aprire il *menu I miei luoghi → Tracce*.
    - Selezionare il file GPX da importare.

    *Opzioni aggiuntive:*

    - **File GPX a traccia singola** - importa direttamente l'intera traccia.
    - **File GPX a più tracce** - scegliere di importare il singolo file GPX o selezionare tracce specifiche.

***NOTA:*** *Le tracce aggiunte manualmente alla cartella OsmAnd sul dispositivo vengono importate automaticamente senza riavviare l'applicazione.*  


### Esporta {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importa multitraccia](@site/static/img/personal/tracks/import_multitrack.png) ![importa multitraccia](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Esporta | Importa |
|:------------|:---------------|
| ![importa multitraccia](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Esporta </summary> ![importa multitraccia](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importa multitraccia](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Esporta </summary> ![importa multitraccia](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Esistono diversi modi per esportare uno o più file di tracce su qualsiasi messenger, e-mail, file manager o app.  

1. Tramite [*Menu contestuale traccia → Condividi*](../../map/tracks/track-context-menu.md#options).

2. Tramite *Menu I miei luoghi → Tracce → Menu Cartella / Traccia*:

    - Per [**esportare una singola traccia**](#track-menu), selezionare il menu della traccia.
    - Per [**esportazione multi-traccia**](#track-folder), selezionare il menu della cartella richiesta.

3. Tramite [File di backup locale](../../personal/import-export.md#export). Esportazione di tracce GPX come file `.osf`.


## Articoli Correlati {#related-articles}

- [Mostra traccia sulla mappa](../../map/tracks/index.md)
- [Analizza sulla mappa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale traccia](../../map/tracks/track-context-menu.md)
- [Navigazione tramite traccia](../../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)