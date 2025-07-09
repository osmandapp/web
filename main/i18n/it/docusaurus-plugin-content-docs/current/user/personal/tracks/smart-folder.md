---
source-hash: f590f02934d3bbad431f346fc5f01207a37246d4320a4a5025973bb5ff373b63
sidebar_position: 3
title: Cartella Intelligente (Filtro)
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

La funzione **Cartella Intelligente** offre strumenti potenti per organizzare e gestire le tue tracce. Una delle caratteristiche principali è la possibilità di filtrare i file nella scheda *Tracce* del menu *I miei luoghi* in base a criteri come durata, lunghezza o velocità.

Questa funzione ti consente di trovare rapidamente tracce specifiche che corrispondono alle tue esigenze. I risultati filtrati possono essere salvati come **Cartella Intelligente**, offrendo un accesso comodo a raccolte di tracce aggiornate dinamicamente.


## Filtro di ricerca {#search-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Come applicare un filtro:***

- Tocca l'icona *Cerca*, quindi tocca *Filtra* nella riga [*Ordina per*](./manage-tracks.md#sort-by).

- **Scegli le impostazioni del filtro richieste** per affinare la ricerca della traccia.

- Tocca **Mostra** nell'angolo in basso a destra per visualizzare i risultati filtrati. Il numero di tracce corrispondenti appare tra parentesi.

- **Per cancellare** tutti i filtri attivi, tocca **Ripristina tutto**.

- **Per salvare** il set di filtri corrente come nuova **Cartella Intelligente**, tocca l'icona di salvataggio nell'angolo in alto a destra dello schermo.


### Filtri disponibili {#available-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nome** — Cerca le tracce per titolo. Inserisci un nome completo o parziale per visualizzare le tracce corrispondenti.
- **Cartella** — Seleziona una o più cartelle per filtrare le tracce in base alla loro posizione di archiviazione.
- **Durata** — Filtra le tracce in base alla loro durata registrata, impostando un intervallo in ore e minuti.
- **Tempo in movimento** — Specifica l'intervallo di tempo trascorso in movimento durante la registrazione.
- **Lunghezza** — Imposta un intervallo specifico in chilometri o miglia per trovare tracce di una particolare lunghezza.
- **Velocità media** — Filtra le tracce per [velocità media](../../widgets/info-widgets.md#average-speed).
- **Gruppo dati sensore.**
    Applica filtri basati sui dati di sensori esterni, inclusi:
    - Velocità sensore, media.
    - Velocità sensore, massima.
    - Frequenza cardiaca, media.
    - Frequenza cardiaca, massima.
    - Cadenza bicicletta, media.
    - Cadenza bicicletta, massima.
    - Potenza bicicletta, media.
    - Potenza bicicletta, massima.
    - Temperatura, media.
    - Temperatura, massima.
- **Velocità massima** — Seleziona le tracce con intervalli di velocità massima specifici.
- **In salita** e **In discesa** — Filtra le tracce in base a cambiamenti di elevazione positivi o negativi.
- **Altitudine media** e **Altitudine massima** — Trova le tracce con dati specifici di altitudine media o massima.
- **Data di creazione** — Filtra le tracce create entro un determinato intervallo di date.
- **Città più vicine** — Visualizza le tracce che passano vicino a città o località selezionate.
- **Tipo di attività** — Filtra le tracce in base al tipo di [attività](../../map/tracks/track-context-menu.md#track-information-activity) registrato nel file GPX (ad esempio, ciclismo, escursionismo).
- **Paese** — Filtra le tracce in base al paese o alla regione in cui sono state registrate.
- **Colore** e **Larghezza** — Seleziona le tracce per colore assegnato o larghezza della linea.
- **Altro** — Filtri aggiuntivi per caratteristiche speciali:
    - *Visibile sulla mappa*. Mostra solo le tracce visualizzate sulla mappa.
    - *Con Waypoint*. Visualizza le tracce contenenti waypoint specifici.


## Cartella Intelligente {#smart-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Cartella Intelligente** è una raccolta dinamica di tracce aggiornata automaticamente in base a specifici criteri di filtro. Offre strumenti avanzati per organizzare, cercare e gestire le tracce in modo efficiente.

***Vantaggi delle Cartelle Intelligenti:***

1. **Organizzazione automatizzata.**
    Include automaticamente le tracce che corrispondono a regole predefinite, come la data di creazione o l'intervallo di durata.
2. **Filtraggio e ricerca.**
    Consente ricerche rapide all'interno delle tracce utilizzando filtri avanzati e parole chiave.
3. **Aggiornamento dinamico.**
    Aggiorna automaticamente il contenuto per visualizzare le tracce più recenti che corrispondono ai criteri.
4. **Personalizza le regole.**
    Crea raccolte di tracce personalizzate definendo regole di filtro personalizzate.


### Come creare una Cartella Intelligente {#how-to-create-smart-folder}

Per creare una **Cartella Intelligente**, segui questi passaggi:

1. Tocca l'icona del ***menu a tre puntini*** nella scheda *Tracce* del menu *I miei luoghi*.

2. Seleziona **Aggiungi cartella intelligente** dal menu a discesa.

3. Configura le impostazioni:
   - **Dai un nome alla cartella**. Inserisci un nome per identificare la cartella.
   - Specifica i **parametri del filtro traccia**. Applica i filtri richiesti utilizzando le opzioni [Filtro](#available-filters) disponibili.

4. **Salva** le impostazioni.
    - Tocca **Mostra** per visualizzare in anteprima le tracce.
    - Seleziona il pulsante **Salva** per finalizzare la *Cartella Intelligente*.

La **Cartella Intelligente** appena creata aggiornerà automaticamente i suoi contenuti con le tracce che corrispondono ai criteri selezionati.


### Gestione delle Cartelle Intelligenti {#managing-smart-folders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![My places Managing Smart Foldersn Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

La **Cartella intelligente** viene visualizzata con un'icona unica nell'elenco delle cartelle nella scheda Tracce. Per gestire la cartella, tocca il *menu a tre puntini* accanto ad essa (Android) e *tieni premuto a lungo* (iOS) oppure apri la cartella e usa l'icona nell'angolo in alto a destra.

***Azioni disponibili:***

- **Dettagli** — Visualizza l'elenco completo delle tracce contenute nella cartella.

- **Mostra tutte le tracce sulla mappa** (solo Android) — Visualizza tutte le tracce della cartella sulla mappa.
    *NOTA: il caricamento di molte tracce potrebbe influire sulle prestazioni.*

- **Modifica nome** (Android) / **Rinomina** (iOS) — Cambia il nome della cartella per una più facile identificazione.

- **Aggiorna** — Aggiorna manualmente il contenuto della cartella per assicurarti che includa le tracce più recenti.

- **Cambia aspetto predefinito** (Android) — Cambia l'aspetto di visualizzazione di tutte le tracce nella cartella.

- **Modifica filtro** — Modifica le impostazioni del filtro traccia per la Cartella Intelligente corrente. Vedi [Filtro di ricerca](#search-filter) per i dettagli.

- **Esporta** — Esporta tutte le tracce nella Cartella Intelligente tramite la funzione [Importa/Esporta](../../personal/import-export.md). Verrai reindirizzato a *Menu → Impostazioni → Scheda Azioni*.

- **Elimina cartella** — Rimuovi la Cartella Intelligente senza eliminare le sue tracce.
    *ATTENZIONE: questa azione è irreversibile e richiederà un messaggio di conferma.*

- **Sposta** (iOS) — Consente di spostare la cartella in un'altra cartella esistente o di crearne una nuova.

- **Seleziona** — Utilizza la [Modalità di selezione](./manage-tracks.md#selection-mode) per azioni specifiche sulle tracce all'interno della cartella.


## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../../map/tracks/index.md)
- [Analizza sulla mappa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale della traccia](../../map/tracks/track-context-menu.md)
- [Navigazione per traccia](../../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)

> *Ultimo aggiornamento: marzo 2025*