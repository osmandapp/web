---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
sidebar_position: 4
title:  Mappe e dati
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Mappe {#maps}

### Perché OsmAnd non offre l'accesso a Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd è progettato per supportare OpenStreetMap (OSM) e privilegia questo percorso il più possibile. Inoltre, esistono restrizioni di licenza che non consentono la distribuzione di OsmAnd con i dati di Google Maps.

### Caricamento lento delle mappe su Android 11, 12 (scheda SD) {#maps-slowly-loading-on-android-11-12-sd-card}

A causa delle nuove [regole di accesso alla memoria introdotte in Android 11 e 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), gli utenti potrebbero riscontrare prestazioni più lente durante l'accesso alle mappe memorizzate su schede SD. Queste modifiche possono anche causare restrizioni di visibilità e accesso per i file nelle cartelle della scheda SD. Ulteriori discussioni e approfondimenti tecnici sono disponibili ai seguenti link: [Discussione su Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Al momento, sono disponibili le seguenti soluzioni:

#### 1. Migrare la cartella di archiviazione dati di OsmAnd nella "Memoria interna dell'app" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- È possibile modificare la cartella di archiviazione selezionando l'opzione ***Memoria interna dell'app*** in *Menu → Impostazioni → Impostazioni OsmAnd → Cartella di archiviazione dati*.

- Tuttavia, tieni presente che la memoria interna è spesso limitata. Come soluzione alternativa, puoi spostare i file importanti nella memoria interna mantenendo le mappe usate raramente sulla scheda SD. Utilizza un file manager per trasferire manualmente questi file quando necessario.

Il team di sviluppo sta attivamente cercando soluzioni più efficienti per migliorare le prestazioni della scheda SD in base alle nuove politiche di archiviazione di Android.

#### 2. Utilizzare la cartella "Download" della scheda SD {#2-use-the-sd-cards-download-folder}

Puoi provare a risolvere il problema del caricamento lento delle mappe specificando la cartella **Download** della scheda SD per l'archiviazione di OsmAnd in *Menu → Impostazioni → Impostazioni OsmAnd → Cartella di archiviazione dati → Specificata manualmente*. Sono possibili i seguenti percorsi:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Questo percorso potrebbe causare errori durante l'accesso a più file. Ad esempio, potresti essere in grado di scaricare la mappa World Overview, ma altre regioni potrebbero non apparire.

- ***/storage/XXXX-XXXX/Download***  
   Questo percorso dovrebbe funzionare in modo coerente per il download di mappe e altri dati. Tuttavia, tieni presente che OsmAnd non riconoscerà i file scritti in questa cartella da altre app o programmi (ad esempio, SasPlanet). Per maggiori dettagli, consulta [questa guida](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" rappresenta il numero di identificazione univoco della tua scheda SD, che a volte può essere trovato nel percorso della cartella sotto le opzioni *Memoria esterna 2* o localizzato utilizzando altri metodi. Ulteriori ricerche e dettagli su questa soluzione sono disponibili [qui](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opzione di archiviazione "Media" {#3-media-storage-option}

Se le soluzioni precedenti non funzionano o sembrano limitate, puoi provare a utilizzare l'opzione di archiviazione "Media" per risolvere il caricamento lento delle mappe o i problemi di accesso alla memoria. Questo metodo consente di selezionare una cartella accessibile per OsmAnd e altre app, particolarmente utile per l'archiviazione esterna o rimovibile.

### Scelta di una cartella di archiviazione dati OsmAnd "generalmente accessibile" utilizzando l'archiviazione "Media" {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android è diventato più severo con le autorizzazioni di archiviazione, spesso limitando l'accesso alle cartelle specifiche delle app, specialmente con nuove installazioni o aggiornamenti di sistema. L'archiviazione dati predefinita di OsmAnd potrebbe essere limitata, rendendola invisibile ad altre app o persino ai file manager. Molti utenti desiderano archiviare mappe e dati in una memoria esterna accessibile per backup, sincronizzazione o gestione manuale dei file.

Tuttavia, OsmAnd non dispone dell'autorizzazione *Accesso a tutti i file* (a causa delle restrizioni di Google), limitando la scelta delle cartelle. Una soluzione alternativa è l'utilizzo della cartella di archiviazione "Media", a cui Android in genere concede un accesso di lettura/scrittura più ampio. Per fare ciò:

- Vai a *Impostazioni di OsmAnd → Impostazioni OsmAnd → Cartella di archiviazione dati* e controlla le aree di archiviazione disponibili. Utilizza l'indicatore dello spazio libero per identificare l'archiviazione di destinazione, spesso etichettata come *Memoria esterna 2*.
- Prendi nota del percorso della cartella corrente, che potrebbe assomigliare a */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Passa all'opzione *Specificata manualmente* e modifica il percorso in una cartella accessibile ai media. Su molti sistemi, la modifica di */Android/data/* in */media/* (ad esempio, ***/storage/xxxx-xxxx/media***) funziona. Alcuni sistemi potrebbero richiedere modifiche diverse del percorso.

Un percorso corretto non richiederà a OsmAnd alcun errore di autorizzazione di scrittura. Prima di apportare queste modifiche, assicurati che OsmAnd disponga delle autorizzazioni di archiviazione appropriate, inclusa l'autorizzazione di archiviazione "Media", nelle impostazioni **App** di Android. Nelle versioni più recenti di Android, queste autorizzazioni potrebbero trovarsi in menu avanzati o nascosti.

### Eliminazione dei dati delle mappe dopo l'aggiornamento dell'app (se è selezionato "Multiuser Storage 1") {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

Nella versione Android di OsmAnd, la selezione di *Multiuser Storage 1* come posizione di archiviazione può portare all'eliminazione di tutte le [mappe locali](../personal/maps-resources.md#local-maps) ogni volta che l'app viene aggiornata automaticamente, ad esempio dalla versione 4.1.9 alla 4.1.10, 4.1.11 o successive (**Android 11, 12**). Questo problema è documentato su [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Per evitare di perdere i dati delle mappe durante gli aggiornamenti, considera queste soluzioni:

1. *Esegui il backup dei tuoi file*. Prima di aggiornare OsmAnd, esegui un [backup](../personal/import-export.md) delle mappe archiviate in *..Android/obb/net.osmand*. Dopo l'aggiornamento, ripristina i file prima di avviare l'app OsmAnd aggiornata.

2. *Modifica il percorso di archiviazione*. Sposta la cartella OsmAnd in una posizione scrivibile da tutte le app (ad esempio, server FTP Wi-Fi, X-plore o tramite cavo USB a un PC). Modifica il percorso della cartella da:
   - /storage/emulated/0/Android/**obb**/net.osmand
   a
   - /storage/emulated/0/Android/**media**/net.osmand.


### Nessun rendering delle mappe per i dispositivi Google Pixel {#no-maps-rendering-for-google-pixel-devices}

Per le versioni Android di OsmAnd 4.2, il [rendering delle mappe potrebbe fallire](https://github.com/osmandapp/OsmAnd/issues/15045) sui dispositivi Google Pixel, lasciando gli utenti con una schermata bianca vuota invece di una mappa.

Per risolvere questo problema, passa al rendering OpenGL:

- Vai su *Menu OsmAnd → Impostazioni → Impostazioni OsmAnd → Motore di rendering delle mappe → Versione 2 (OpenGL)*.
- Riavvia OsmAnd per applicare le modifiche.


### Risoluzione del rendering lento delle mappe in OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Per risolvere il problema del rendering lento delle mappe, specialmente quando si utilizzano mappe vettoriali offline, è necessario seguire i seguenti passaggi:

1. **Disabilita le funzioni mappa non necessarie.** Disattiva il rilievo 3D, le curve di livello, le ombreggiatura e le pendenze, che possono aumentare significativamente la potenza di elaborazione necessaria per il rendering delle mappe. Puoi farlo in *Menu → Configura mappa*.

2. **Semplifica i dettagli della mappa.** Nascondi gli elementi meno critici come confini, POI, note OSM, livelli meteo, dettagli aggiuntivi (*Menu → Configura mappa → Rendering mappa*) per semplificare la visualizzazione della mappa e migliorare la velocità.

3. **Limita il numero di POI visualizzati.** Visualizza solo i POI principali o limita le categorie visualizzate durante la navigazione, il che può aiutare ad accelerare il rendering della mappa. Accedi a queste impostazioni in *Menu → Navigazione → Impostazioni*.

4. **Regola l'ingrandimento della mappa.** L'impostazione dell'ingrandimento della mappa potrebbe essere un fattore chiave nel rallentamento della mappa. Imposta l'ingrandimento al 100% premendo a lungo il pulsante **"+"** o **"-"** nella schermata della mappa per ottimizzare la visualizzazione.

5. **Disabilita lo zoom automatico.** Lo zoom automatico può comportare frequenti ridisegni della mappa durante la navigazione, causando ritardi. Disabilita lo zoom automatico in *Menu → Impostazioni → Profilo → Impostazioni di navigazione → [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md)*.

6. **Utilizza solo mappe offline.** Le mappe online, specialmente se non scaricate in anticipo, possono rallentare il caricamento delle mappe. Passa all'utilizzo di sole mappe offline per prestazioni più fluide.

Queste modifiche dovrebbero ridurre il tempo necessario per il rendering delle mappe, specialmente durante la navigazione. Per opzioni di configurazione più dettagliate, consulta la [Guida alle impostazioni della mappa](https://osmand.net/docs/user/map/interact-with-map#settings).


## Curve di livello {#contour-lines}

### È possibile visualizzare le curve di livello in piedi anziché in metri? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Sì, le curve di livello possono essere visualizzate in piedi anziché in metri. Prima di scaricare i dati delle curve di livello, scegli tra Piedi o Metri: [leggi di più qui](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Curve di livello, dati di elevazione o rilievo 3D non vengono visualizzati {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verifica se sono stati scaricati i dati della regione corretta. Vai su ***Menu → Mappe e risorse → Download → La tua regione***. [Come scaricare le mappe](../start-with/first-steps.md#how-to-download-maps).
- Controlla che il [plugin](../plugins/topography.md#required-setup-parameters) sia abilitato e visibile in ***Menu → Plugin → Topografia***.
- Controlla che gli elementi nella sezione Topografia siano abilitati in ***Menu → Configura mappa → Topografia → Curve di livello / Terreno / Rilievo 3D***.
- Controlla i tuoi acquisti: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Aggiorna l'app all'ultima versione.
- Elimina e riscarica le mappe richieste per assicurarti che non ci siano file danneggiati.
- Riavvia OsmAnd per aggiornare impostazioni e dati.


## Ricerca {#search}

### La ricerca indirizzo strutturata (città *→* via *→* numero civico) non trova il numero civico {#structured-city--street--house-address-search-doesnt-find-the-house}

Se stai cercando di trovare una posizione utilizzando la struttura *Città → Via → Numero civico* e non vengono restituiti risultati, considera i seguenti suggerimenti e le potenziali cause:

> **Suggerimento**: prova una ricerca a testo libero senza specificare la città, poiché l'indirizzo potrebbe essere elencato sotto una città diversa.

**Potenziali problemi:**

- **Numero civico mancante**. Il numero civico potrebbe non essere elencato su OpenStreetMap, oppure potrebbe essere presente ma senza numeri assegnati. Puoi verificarlo con un esempio [qui](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nome della via errato**. Il nome della via associato al numero civico potrebbe essere errato in OpenStreetMap. Controlla il tag `addr:street` per assicurarti che il nome della via corrisponda esattamente a quello nelle informazioni di tag della via.

- **Problema con Nominatim**. Il numero civico potrebbe essere presente in OpenStreetMap ma non trovato tramite Nominatim (il motore di ricerca utilizzato da OpenStreetMap). Puoi saperne di più su come risolvere i problemi relativi agli indirizzi [qui](https://wiki.openstreetmap.org/wiki/Addresses).

- **Possibile problema in OsmAnd**. Se il numero civico è presente in Nominatim ma non viene ancora trovato in OsmAnd, il problema potrebbe essere specifico di OsmAnd. Puoi contribuire a risolverlo indagando ulteriormente. Maggiori dettagli sono disponibili in questo [articolo tecnico](../../technical/algorithms/trace-address-search-issues.md).


## Tracce e punti {#tracks-and-points}

### Come contrassegnare diversi luoghi sulla mappa {#how-to-mark-different-places-on-the-map}

Puoi lasciare note e contrassegnare posizioni sulla mappa in varie forme, ognuna con scopi diversi:

- *[Preferiti](../personal/favorites.md)*. Sono punti permanenti sulla mappa in cui puoi aggiungere descrizioni. Per creare un Preferito, fai un *tocco lungo → tocca Aggiungi*. I Preferiti sono ottimi per contrassegnare luoghi che visiti frequentemente o che vuoi salvare per riferimento futuro.

- *[Segnalibri](../personal/markers.md)*. I segnalibri sono punti temporanei, spesso utilizzati per la navigazione o la pianificazione. Possono mostrare la distanza dalla tua posizione corrente o da un altro punto e possono essere rimossi rapidamente quando non sono più necessari. Per aggiungere un segnalibro, fai un *tocco lungo → tocca Segnalibro*.

- *[Waypoint](../map/tracks/index.md#types-of-tracks)*. I waypoint vengono posizionati lungo i percorsi che crei, aiutandoti a contrassegnare fermate o posizioni specifiche lungo il tuo viaggio. Puoi anche aggiungere descrizioni a questi punti. Per aggiungere un waypoint, fai un *tocco lungo sulla mappa → Indicazioni → aggiungi come waypoint intermedio*.

- *[Note audio/video](../plugins/audio-video-notes.md)*. Queste note ti consentono di allegare file audio, video o fotografici a posizioni specifiche sulla mappa. Per abilitare, attiva il plugin Note audio/video in *Menu OsmAnd → Plugin*. Per aggiungerne una, fai un *tocco lungo → Azioni → scegli il file richiesto da allegare*.

- *[Note OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Sono segnalazioni che puoi creare per evidenziare errori o informazioni mancanti su OpenStreetMap. Abilita il plugin di modifica OSM in *Menu OsmAnd → Plugin*. Per aggiungere una nota OSM, fai un *tocco lungo → Azioni → Aggiungi nota OSM*.

- *[POI (Punti di interesse)](../map/point-layers-on-map.md#points-of-interest-pois)*. Sono punti predefiniti dalla fonte dati di OpenStreetMap, come ristoranti, parchi o punti di riferimento. Puoi visualizzare i POI abilitando la sovrapposizione POI nel menu *Configura mappa* o selezionando una categoria.

- *[Ricerca](../search/index.md)*. Puoi anche utilizzare la funzione di ricerca per trovare e contrassegnare luoghi sulla mappa.