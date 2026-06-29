---
source-hash: f73eef279fd6e1edf89b0ae21f1ad4a085ed951e11e56fc824bdfb9a1adae66b
sidebar_position: 3
title: Cartella Smart (Filtro)
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

La funzione **Cartella Smart** fornisce potenti strumenti per organizzare e gestire le tue tracce. Una delle caratteristiche principali è la possibilità di filtrare i file nella *scheda Tracce* del menu *I miei luoghi* in base a criteri quali durata, lunghezza o velocità.  

Questa funzione consente di trovare rapidamente tracce specifiche che corrispondono ai propri requisiti. I risultati filtrati possono essere salvati come **Cartella Smart**, offrendo un comodo accesso a raccolte di tracce aggiornate dinamicamente.


## Filtro di ricerca {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *scheda <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Tracce I miei luoghi](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *scheda <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracce I miei luoghi](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Come applicare un filtro:***

- Tocca l'icona *Cerca*, quindi tocca *Filtro* nella riga [*Ordina per*](./manage-tracks.md#sort-by).

- **Scegli le impostazioni del filtro richieste** per affinare la ricerca delle tracce.

- Tocca **Mostra** nell'angolo in basso a destra per vedere i risultati filtrati. Il numero di tracce corrispondenti appare tra parentesi.

- **Per cancellare** tutti i filtri attivi, tocca **Ripristina tutto**.

- **Per salvare** il set di filtri corrente come nuova **Cartella Smart**, tocca l'icona di salvataggio nell'angolo in alto a destra dello schermo.


### Filtri disponibili {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tracce I miei luoghi](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracce I miei luoghi](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nome** — Cerca le tracce per titolo. Inserisci un nome completo o parziale per visualizzare le tracce corrispondenti.
- **Cartella** — Seleziona una o più cartelle per filtrare le tracce in base alla loro posizione di archiviazione.
- **Durata** — Filtra le tracce in base alla loro durata registrata, impostando un intervallo in ore e minuti.
- **Tempo in movimento** — Specifica l'intervallo di tempo trascorso in movimento durante la registrazione.
- **Lunghezza** — Imposta un intervallo specifico in chilometri o miglia per trovare tracce di una particolare lunghezza.
- **Velocità media** — Filtra le tracce per [velocità media](../../widgets/info-widgets.md#average-speed).
- **Gruppo dati sensore.**  
    Applica filtri basati sui dati dei sensori esterni, tra cui:
    - Velocità sensore, media.
    - Velocità sensore, max.
    - Frequenza cardiaca, media.
    - Frequenza cardiaca, max.
    - Cadenza bicicletta, media.
    - Cadenza bicicletta, max
    - Potenza bicicletta, media.
    - Potenza bicicletta, max.
    - Temperatura, media.
    - Temperatura, max.
- **Velocità massima** — Seleziona le tracce con specifici intervalli di velocità massima.
- **Salita** e **Discesa** — Filtra le tracce in base ai dislivelli positivi o negativi.
- **Altitudine media** e **Altitudine massima** — Trova tracce con dati specifici di altitudine media o massima.
- **Data di creazione** — Filtra le tracce create entro un particolare intervallo di date.
- **Città più vicine** — Visualizza le tracce che passano vicino a città o località selezionate.
- **Tipo di attività** — Filtra le tracce in base al tipo di [attività](../../map/tracks/track-context-menu.md#ttrack-activity-type) registrata nel file GPX (ad es. ciclismo, escursionismo).
- **Paese** — Filtra le tracce per paese o regione in cui sono state registrate.
- **Colore** e **Larghezza** — Seleziona le tracce in base al colore o alla larghezza della linea assegnati.
- **Altro** — Filtri aggiuntivi per caratteristiche speciali:
    - *Visibile sulla mappa*. Mostra solo le tracce visualizzate sulla mappa.
    - *Con Waypoint*. Visualizza le tracce contenenti waypoint specifici.


## Cartella Smart {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ordinamento tracce I miei luoghi Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracce I miei luoghi](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Cartella Smart** è una raccolta dinamica di tracce aggiornata automaticamente in base a specifici criteri di filtro. Offre strumenti avanzati per organizzare, cercare e gestire le tracce in modo efficiente.  

***Vantaggi delle Cartelle Smart:***

1. **Organizzazione automatizzata.**  
    Include automaticamente le tracce che corrispondono a regole predefinite, come la data di creazione o l'intervallo di durata.
2. **Filtraggio e ricerca.**  
    Consente ricerche rapide all'interno delle tracce utilizzando filtri avanzati e parole chiave.
3. **Aggiornamento dinamico.**  
    Aggiorna automaticamente il contenuto per visualizzare le ultime tracce che corrispondono ai criteri.
4. **Personalizzazione delle regole.**  
    Crea raccolte di tracce personalizzate definendo regole di filtro personalizzate.


### Come creare una Cartella Smart {#how-to-create-smart-folder}

Per creare una **Cartella Smart**, segui questi passaggi:

1. Tocca l'icona del ***menu a tre punti*** nella scheda *Tracce* del menu *I miei luoghi*.

2. Seleziona **Aggiungi cartella smart** dal menu a discesa.

3. Configura le impostazioni:
   - **Dai un nome alla cartella**. Inserisci un nome per identificare la cartella.
   - Specifica i **parametri del filtro delle tracce**. Applica i filtri richiesti utilizzando le opzioni disponibili in [Filtro](#available-filters).

4. **Salva** le impostazioni.
    - Tocca **Mostra** per visualizzare l'anteprima delle tracce.
    - Seleziona il pulsante **Salva** per finalizzare la *Cartella Smart*.

La **Cartella Smart** appena creata aggiornerà automaticamente il suo contenuto con le tracce che corrispondono ai criteri selezionati.


### Gestione delle Cartelle Smart {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestione Cartelle Smart I miei luoghi Android](@site/static/img/personal/tracks/smart_folder_1_andr.png) ![Gestione Cartelle Smart I miei luoghi Android](@site/static/img/personal/tracks/smart_folder_2_andr.png)

La **cartella smart** viene visualizzata con un'icona unica nell'elenco delle cartelle nella scheda Tracce. Per gestire la cartella, tocca il *menu a tre punti* accanto ad essa per accedere alle azioni disponibili:

- **<Translate android="true" ids="shared_string_details"/>** — Visualizza l'elenco completo delle tracce contenute nella cartella.
- **<Translate android="true" ids="show_all_tracks_on_the_map"/>** — Visualizza tutte le tracce della cartella sulla mappa.  
    *NOTA: il caricamento di molte tracce potrebbe influire sulle prestazioni.*
- **<Translate android="true" ids="shared_string_rename"/>** — Cambia il nome della cartella per una più facile identificazione.
- **<Translate android="true" ids="shared_string_refresh"/>** — Aggiorna manualmente il contenuto della cartella per assicurarti che includa le tracce più recenti.
- **<Translate android="true" ids="edit_filter"/>** — Modifica le impostazioni del filtro delle tracce per la Cartella Smart corrente. Vedi [Filtro di ricerca](#search-filter) per i dettagli.
- **<Translate android="true" ids="shared_string_export"/>** — Esporta tutte le tracce nella Cartella Smart tramite la funzione [Importa/Esporta](../../personal/import-export.md). Verrai reindirizzato a *Menu → Impostazioni → scheda Azioni*.
- **<Translate android="true" ids="delete_folder"/>** — Rimuovi la Cartella Smart senza eliminare le sue tracce.  
    *ATTENZIONE: questa azione è irreversibile e richiederà un messaggio di conferma.*

Puoi anche aprire la cartella e toccare il *menu a tre punti* nell'*angolo in alto a destra* per accedere ad azioni aggiuntive:

- **<Translate android="true" ids="shared_string_select"/>** — Utilizza la [Modalità di selezione](./manage-tracks.md#selection-mode) per azioni specifiche sulle tracce all'interno della cartella.
- **<Translate android="true" ids="organize_by"/>** — Organizza automaticamente le tracce nella Cartella Smart in gruppi in base a un parametro selezionato. Seleziona *None* per visualizzare tutte le tracce come un elenco singolo, corrispondente alla visualizzazione predefinita della Cartella Smart. I tipi di raggruppamento disponibili includono *Generale*, *Data e ora*, *Posizione*, *Velocità*, *Altitudine e dislivello* e *Dati sensore*. 

Alcuni parametri di raggruppamento sono disponibili solo con un abbonamento OsmAnd Pro. I parametri gratuiti includono *Attività*, *Anno di creazione* e *Città più vicina*. Tutti gli altri parametri sono contrassegnati con l'etichetta <ProFeature/>.

Per i parametri numerici (come distanza, durata, velocità o altitudine), è disponibile una finestra di dialogo *Imposta dimensione passo*. Utilizza il cursore per definire intervalli di valori per il raggruppamento.

Per i parametri PRO, puoi visualizzare in anteprima la configurazione del raggruppamento (ad esempio, apri il selettore di dimensione passo e vedi come sono raggruppate le tracce), ma l'applicazione di queste modifiche richiede un abbonamento attivo. Se selezioni un parametro PRO o tocchi il pulsante Sblocca, si aprirà la schermata Scegli piano. Il raggruppamento applicato in precedenza rimane visibile anche se l'abbonamento scade, ma la modifica o l'applicazione di un nuovo raggruppamento basato su PRO richiede un abbonamento attivo.

Dopo aver selezionato un parametro di raggruppamento, le tracce vengono visualizzate come gruppi. Ogni gruppo mostra il suo nome, l'icona e il numero di tracce che contiene. Tocca un gruppo per aprire l'elenco delle tracce in quel gruppo. I gruppi vuoti non vengono visualizzati. I risultati raggruppati possono essere ordinati alfabeticamente (A–Z o Z–A) o, per i parametri numerici, in base ai valori più alti o più bassi. Tocca a lungo un gruppo per mostrare tutte le tracce del gruppo sulla mappa o esportare tutte le tracce del gruppo.

</TabItem>

<TabItem value="ios" label="iOS">

![Gestione Cartelle Smart I miei luoghi iOS](@site/static/img/personal/tracks/smart_folder_new_ios.png) ![Gestione Cartelle Smart I miei luoghi iOS](@site/static/img/personal/tracks/smart_folder_new1_ios.png)

La **cartella smart** viene visualizzata con un'icona unica nell'elenco delle cartelle nella scheda Tracce. Per gestire la cartella, fai un *tocco lungo* sul nome della cartella per accedere alle azioni disponibili:

- **<Translate ios="true" ids="shared_string_rename"/>**— Cambia il nome della cartella per una più facile identificazione.
- **<Translate ios="true" ids="shared_string_export"/>** — Esporta tutte le tracce nella Cartella Smart tramite la funzione [Importa/Esporta](../../personal/import-export.md). Verrai reindirizzato a *Menu → Impostazioni → scheda Azioni*.
- **<Translate ios="true" ids="shared_string_move"/>** — Consente di spostare la cartella in un'altra cartella esistente o di crearne una nuova.
- **<Translate ios="true" ids="shared_string_delete"/>** — Rimuovi la Cartella Smart senza eliminare le sue tracce.  
    *ATTENZIONE: questa azione è irreversibile e richiederà un messaggio di conferma.*

Puoi anche aprire la cartella e toccare l'icona nell'*angolo in alto a destra* per accedere ad azioni aggiuntive:

- **<Translate ios="true" ids="shared_string_select"/>** — Utilizza la [Modalità di selezione](./manage-tracks.md#selection-mode) per azioni specifiche sulle tracce all'interno della cartella.
- **<Translate ios="true" ids="shared_string_refresh"/>** — Aggiorna manualmente il contenuto della cartella per assicurarti che includa le tracce più recenti.
- **<Translate ios="true" ids="edit_filter"/>** — Modifica le impostazioni del filtro delle tracce per la Cartella Smart corrente. Vedi [Filtro di ricerca](#search-filter) per i dettagli.
- **Organize by** — Organizza automaticamente le tracce nella Cartella Smart in gruppi in base a un parametro selezionato. Seleziona *None* per visualizzare tutte le tracce come un elenco singolo, corrispondente alla visualizzazione predefinita della Cartella Smart. I tipi di raggruppamento disponibili includono *Generale*, *Data e ora*, *Posizione*, *Velocità*, *Altitudine e dislivello* e *Dati sensore*. 

Alcuni parametri di raggruppamento sono disponibili solo con un abbonamento OsmAnd Pro. I parametri gratuiti includono *Attività*, *Anno di creazione* e *Città più vicina*. Tutti gli altri parametri sono contrassegnati con l'etichetta <ProFeature/>.

Per i parametri numerici (come distanza, durata, velocità o altitudine), è disponibile una finestra di dialogo *Imposta dimensione passo*. Utilizza il cursore per definire intervalli di valori per il raggruppamento.

Per i parametri PRO, puoi visualizzare in anteprima la configurazione del raggruppamento (ad esempio, apri il selettore di dimensione passo e vedi come sono raggruppate le tracce), ma l'applicazione di queste modifiche richiede un abbonamento attivo. Se selezioni un parametro PRO o tocchi il pulsante Sblocca, si aprirà la schermata Scegli piano. Il raggruppamento applicato in precedenza rimane visibile anche se l'abbonamento scade, ma la modifica o l'applicazione di un nuovo raggruppamento basato su PRO richiede un abbonamento attivo.

Dopo aver selezionato un parametro di raggruppamento, le tracce vengono visualizzate come gruppi. Ogni gruppo mostra il suo nome, l'icona e il numero di tracce che contiene. Tocca un gruppo per aprire l'elenco delle tracce in quel gruppo. I gruppi vuoti non vengono visualizzati. I risultati raggruppati possono essere ordinati alfabeticamente (A–Z o Z–A) o, per i parametri numerici, in base ai valori più alti o più bassi. Tocca a lungo un gruppo per mostrare tutte le tracce del gruppo sulla mappa o esportare tutte le tracce del gruppo.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../../map/tracks/index.md)
- [Analizza sulla mappa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale traccia](../../map/tracks/track-context-menu.md)
- [Navigazione tramite traccia](../../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)