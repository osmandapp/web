---
source-hash: 52104063be1e1f495b5c9faaaa8cd1c009b92fb4dccba395827634a48aa85dd8
sidebar_position: 3
title: Cartella intelligente (Filtro)
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

La funzione **Cartella intelligente** fornisce potenti strumenti per organizzare e gestire le tue tracce. Una delle caratteristiche principali è la possibilità di filtrare i file nella *scheda Tracce* del menu *I miei luoghi* in base a criteri quali durata, lunghezza o velocità.

Questa funzione consente di trovare rapidamente le tracce specifiche che soddisfano i tuoi requisiti. I risultati filtrati possono essere salvati come **Cartella intelligente**, offrendo un comodo accesso a raccolte di tracce aggiornate dinamicamente.


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

- **Scegli le impostazioni di filtro richieste** per perfezionare la ricerca delle tracce.

- Tocca **Mostra** nell'angolo in basso a destra per visualizzare i risultati filtrati. Il numero di tracce corrispondenti appare tra parentesi.

- **Per cancellare** tutti i filtri attivi, tocca **Ripristina tutto**.

- **Per salvare** il set di filtri corrente come nuova **Cartella intelligente**, tocca l'icona di salvataggio nell'angolo in alto a destra dello schermo.


### Filtri disponibili {#available-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Nome** — Cerca tracce per titolo. Inserisci un nome completo o parziale per visualizzare le tracce corrispondenti.
- **Cartella** — Seleziona una o più cartelle per filtrare le tracce in base alla loro posizione di archiviazione.
- **Durata** — Filtra le tracce in base alla loro durata registrata, impostando un intervallo in ore e minuti.
- **Tempo in movimento** — Specifica l'intervallo di tempo trascorso in movimento durante la registrazione.
- **Lunghezza** — Imposta un intervallo specifico in chilometri o miglia per trovare tracce di una lunghezza particolare.
- **Velocità media** — Filtra le tracce in base alla [velocità media](../../widgets/info-widgets.md#average-speed).
- **Gruppo dati sensore.**
    Applica filtri basati sui dati di sensori esterni, tra cui:
    - Velocità sensore, media.
    - Velocità sensore, massima.
    - Frequenza cardiaca, media.
    - Frequenza cardiaca, massima.
    - Cadenza bicicletta, media.
    - Cadenza bicicletta, massima
    - Potenza bicicletta, media.
    - Potenza bicicletta, massima.
    - Temperatura, media.
    - Temperatura, massima.
- **Velocità massima** — Seleziona le tracce con specifici intervalli di velocità massima.
- **In salita** e **In discesa** — Filtra le tracce in base alle variazioni di altitudine positive o negative.
- **Altitudine media** e **Altitudine massima** — Trova tracce con dati specifici di altitudine media o massima.
- **Data di creazione** — Filtra le tracce create entro un particolare intervallo di date.
- **Città più vicine** — Visualizza le tracce che passano vicino a città o località selezionate.
- **Tipo di attività** (*solo Android*) — Filtra le tracce in base al tipo di [attività](../../map/tracks/track-context-menu.md#track-information-activity) registrato nel file GPX (ad esempio, ciclismo, escursionismo).
- **Paese** — Filtra le tracce in base al paese o alla regione in cui sono state registrate.
- **Colore** e **Larghezza** — Seleziona le tracce in base al colore o alla larghezza della linea assegnati.
- **Altro** — Filtri aggiuntivi per caratteristiche speciali:
    - *Visibile sulla mappa*. Mostra solo le tracce visualizzate sulla mappa.
    - *Con waypoint*. Visualizza le tracce contenenti waypoint specifici.


## Cartella intelligente {#smart-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Una **Cartella intelligente** è una raccolta dinamica di tracce aggiornata automaticamente in base a specifici criteri di filtro. Offre strumenti avanzati per organizzare, cercare e gestire le tracce in modo efficiente.

***Vantaggi delle Cartelle intelligenti:***

1. **Organizzazione automatizzata.**
    Include automaticamente le tracce che corrispondono a regole predefinite, come la data di creazione o l'intervallo di durata.
2. **Filtro e ricerca.**
    Consente ricerche rapide all'interno delle tracce utilizzando filtri avanzati e parole chiave.
3. **Aggiornamento dinamico.**
    Aggiorna automaticamente il contenuto per visualizzare le tracce più recenti che corrispondono ai criteri.
4. **Personalizza le regole.**
    Crea raccolte di tracce personalizzate definendo regole di filtro personalizzate.


### Come creare una Cartella intelligente {#how-to-create-smart-folder}

Per creare una **Cartella intelligente**, segui questi passaggi:

1. Tocca l'icona del ***menu a tre puntini*** nella scheda *Tracce* del menu *I miei luoghi*.

2. Seleziona **Aggiungi cartella intelligente** dal menu a discesa.

3. Configura le impostazioni:
   - **Dai un nome alla cartella**. Inserisci un nome per identificare la cartella.
   - Specifica i **parametri del filtro tracce**. Applica i filtri richiesti utilizzando le opzioni di [Filtro](#available-filters) disponibili.

4. **Salva** le impostazioni.
    - Tocca **Mostra** per visualizzare in anteprima le tracce.
    - Seleziona il pulsante **Salva** per finalizzare la *Cartella intelligente*.

La **Cartella intelligente** appena creata aggiornerà automaticamente i suoi contenuti con le tracce che corrispondono ai criteri selezionati.


### Gestione delle Cartelle intelligenti {#managing-smart-folders}

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

La **Cartella intelligente** viene visualizzata con un'icona univoca nell'elenco delle cartelle nella scheda Tracce. Per gestire la cartella, tocca il *menu a tre puntini* accanto ad essa (*Android*) e *tieni premuto* (*iOS*) o apri la cartella e usa l'icona nell'angolo in alto a destra.

***Azioni disponibili:***

- **Dettagli** — Visualizza l'elenco completo delle tracce contenute nella cartella.

- **Mostra tutte le tracce sulla mappa** (*solo Android*) — Visualizza tutte le tracce della cartella sulla mappa.
    *NOTA: Il caricamento di molte tracce potrebbe influire sulle prestazioni.*

- **Modifica nome** (*Android*) / **Rinomina** (*iOS*) — Modifica il nome della cartella per una più facile identificazione.

- **Aggiorna** — Aggiorna manualmente il contenuto della cartella per assicurarti che includa le tracce più recenti.

- **Modifica aspetto predefinito** (*Android*) — Modifica l'aspetto di visualizzazione di tutte le tracce nella cartella.

- **Modifica filtro** — Modifica le impostazioni del filtro tracce per la Cartella intelligente corrente. Vedi [Filtro di ricerca](#search-filter) per i dettagli.

- **Esporta** — Esporta tutte le tracce nella Cartella intelligente tramite la funzione [Importa/Esporta](../../personal/import-export.md). Sarai reindirizzato a *Menu → Impostazioni → Scheda Azioni*.

- **Elimina cartella** — Rimuovi la Cartella intelligente senza eliminare le sue tracce.
    *AVVISO: Questa azione è irreversibile e richiederà un messaggio di conferma.*

- **Sposta** (*iOS*) — Consente di spostare la cartella in un'altra cartella esistente o di crearne una nuova.

- **Seleziona** — Utilizza la [Modalità di selezione](./manage-tracks.md#selection-mode) per azioni specifiche sulle tracce all'interno della cartella.


## Articoli correlati {#related-articles}

- [Mostra traccia sulla mappa](../../map/tracks/index.md)
- [Analizza sulla mappa](../../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale della traccia](../../map/tracks/track-context-menu.md)
- [Navigazione per traccia](../../navigation/setup/gpx-navigation.md)
- [Registrazione viaggio](../../plugins/trip-recording.md)

> *Ultimo aggiornamento: Marzo 2025*