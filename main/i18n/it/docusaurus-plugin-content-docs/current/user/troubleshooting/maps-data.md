---
source-hash: 9b16ea12c0c7101ef5114041d96220299980dab0bb8a9a0697c20ff869c09d8b
sidebar_position: 4
title:  Mappe e Dati
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

OsmAnd è progettato per supportare OpenStreetMap (OSM) e dà priorità a questo percorso il più possibile. Inoltre, ci sono restrizioni di licenza che non consentono a OsmAnd di essere distribuito con i dati di Google Maps.

### Caricamento lento delle mappe su Android 11, 12 (scheda SD) {#maps-slowly-loading-on-android-11-12-sd-card}

A causa delle nuove [regole di accesso all'archiviazione introdotte in Android 11 e 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), gli utenti potrebbero riscontrare prestazioni più lente quando accedono alle mappe memorizzate su schede SD. Queste modifiche possono anche causare restrizioni di visibilità e accesso ai file nelle cartelle della scheda SD. Ulteriori discussioni e approfondimenti tecnici possono essere trovati ai seguenti link: [discussione su Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Al momento, sono disponibili le seguenti soluzioni:

#### 1. Migrare la cartella di archiviazione dati di OsmAnd nella "Memoria interna dell'app" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- È possibile cambiare la cartella di archiviazione selezionando l'opzione ***Memoria interna dell'app*** in *Menu → Impostazioni → Impostazioni OsmAnd → Cartella di archiviazione dati*.

- Tuttavia, bisogna essere consapevoli che la memoria interna è spesso limitata. Come soluzione alternativa, è possibile spostare i file importanti nella memoria interna mantenendo le mappe usate raramente sulla scheda SD. Utilizzare un gestore di file per trasferire manualmente questi file quando necessario.

Il team di sviluppo sta attivamente cercando soluzioni più efficienti per migliorare le prestazioni della scheda SD sotto le nuove politiche di archiviazione di Android.

#### 2. Usare la cartella "Download" della scheda SD {#2-use-the-sd-cards-download-folder}

È possibile provare a risolvere il problema del caricamento lento delle mappe specificando la cartella **Download** della scheda SD per l'archiviazione di OsmAnd in *Menu → Impostazioni → Impostazioni OsmAnd → Cartella di archiviazione dati → Specificata manualmente*. I seguenti percorsi sono possibili:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Questo percorso potrebbe causare errori durante l'accesso a più file. Ad esempio, potreste essere in grado di scaricare la mappa Panoramica del mondo, ma altre regioni potrebbero non apparire.

- ***/storage/XXXX-XXXX/Download***  
   Questo percorso dovrebbe funzionare in modo coerente per il download di mappe e altri dati. Tuttavia, si noti che OsmAnd non riconoscerà i file scritti in questa cartella da altre app o programmi (ad es., SasPlanet). Per maggiori dettagli, consultare [questa guida](../../technical/map-creation/create-offline-maps-yourself.md).

"XXXX-XXXX" rappresenta il numero di identificazione univoco della vostra scheda SD, che a volte può essere trovato nel percorso della cartella sotto le opzioni di *Archiviazione esterna 2* o individuato con altri metodi. Ulteriori ricerche e dettagli su questa soluzione sono disponibili [qui](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opzione di archiviazione "Media" {#3-media-storage-option}

Se le soluzioni precedenti non funzionano o sembrano limitate, è possibile provare a utilizzare l'opzione di archiviazione "Media" per risolvere il caricamento lento delle mappe o i problemi di accesso all'archiviazione. Questo metodo consente di selezionare una cartella accessibile per OsmAnd e altre app, particolarmente utile per l'archiviazione esterna o rimovibile.

### Scegliere una cartella di archiviazione dati di OsmAnd "Generalmente Accessibile" usando l'Archiviazione "Media" {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android è diventato più restrittivo con i permessi di archiviazione, limitando spesso l'accesso a cartelle specifiche dell'app, specialmente con nuove installazioni o aggiornamenti di sistema. L'archiviazione dati predefinita di OsmAnd potrebbe essere limitata, rendendola invisibile ad altre app o persino ai gestori di file. Molti utenti desiderano archiviare mappe e dati in un'archiviazione esterna accessibile per backup, sincronizzazione o gestione manuale dei file.

Tuttavia, OsmAnd non ha il permesso di *Accesso a tutti i file* (a causa delle restrizioni di Google), limitando la scelta delle cartelle. Una soluzione alternativa è usare la cartella di archiviazione "Media", alla quale Android concede tipicamente un accesso in lettura/scrittura più ampio. Per fare ciò:

- Andare su *Impostazioni di OsmAnd → Impostazioni OsmAnd → Cartella di archiviazione dati* e rivedere le aree di archiviazione disponibili. Usare l'indicatore di spazio libero per identificare l'archiviazione di destinazione, spesso etichettata come *Archiviazione esterna 2*.
- Prendere nota del percorso della cartella corrente, che potrebbe assomigliare a */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Passare all'opzione *Specificata manualmente* e modificare il percorso in una cartella accessibile ai media. Su molti sistemi, cambiare */Android/data/* in */media/* (ad es., ***/storage/xxxx-xxxx/media***) funziona. Alcuni sistemi potrebbero richiedere modifiche diverse del percorso.

Un percorso corretto non genererà alcun errore di permesso di scrittura da parte di OsmAnd. Prima di apportare queste modifiche, assicurarsi che OsmAnd abbia i permessi di archiviazione appropriati, incluso il permesso di archiviazione "Media", nelle impostazioni **App** di Android. Nelle versioni più recenti di Android, questi permessi potrebbero trovarsi in menu avanzati o nascosti.

### Cancellazione dei dati delle mappe dopo l'aggiornamento dell'app (se è selezionata "Archiviazione multiutente 1") {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

Nella versione Android di OsmAnd, la selezione di *Archiviazione multiutente 1* come posizione di archiviazione può portare alla cancellazione di tutte le [mappe locali](../personal/maps-resources.md#local-menu) ogni volta che l'app viene aggiornata automaticamente, ad esempio dalla versione 4.1.9 alla 4.1.10, 4.1.11 o successive (**Android 11, 12**). Questo problema è documentato su [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Per evitare di perdere i dati delle mappe durante gli aggiornamenti, considerare queste soluzioni:

1. *Eseguire il backup dei file*. Prima di aggiornare OsmAnd, effettuare un [backup](../personal/import-export.md) delle mappe memorizzate in *..Android/obb/net.osmand*. Dopo l'aggiornamento, ripristinare i file prima di avviare l'app OsmAnd aggiornata.

2. *Cambiare il percorso di archiviazione*. Spostare la cartella OsmAnd in una posizione scrivibile da tutte le app (ad es., server FTP Wi-Fi, X-plore, o tramite un cavo USB a un PC). Cambiare il percorso della cartella da:
   - /storage/emulated/0/Android/**obb**/net.osmand
   a
   - /storage/emulated/0/Android/**media**/net.osmand.


### Nessun rendering delle mappe per i dispositivi Google Pixel {#no-maps-rendering-for-google-pixel-devices}

Per le versioni Android di OsmAnd 4.2, il [rendering delle mappe potrebbe non riuscire](https://github.com/osmandapp/OsmAnd/issues/15045) sui dispositivi Google Pixel, lasciando gli utenti con uno schermo bianco vuoto al posto della mappa.

Per risolvere questo problema, passare al rendering OpenGL:

- Navigare su *Menu OsmAnd → Impostazioni → Impostazioni OsmAnd → Motore di rendering mappa → Versione 2 (OpenGL)*.
- Riavviare OsmAnd per applicare le modifiche.


### Risoluzione del rendering lento delle mappe in OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Per risolvere il problema del rendering lento delle mappe, specialmente quando si utilizzano mappe vettoriali offline, è necessario seguire i seguenti passaggi:

1. **Disabilitare le funzionalità non necessarie della mappa.** Disattivare il rilievo 3D, le curve di livello, l'ombreggiatura dei rilievi e le pendenze, che possono aumentare significativamente la potenza di elaborazione necessaria per il rendering delle mappe. È possibile farlo in *Menu → Configura mappa*.

2. **Semplificare i dettagli della mappa.** Nascondere elementi meno critici come confini, PDI, note OSM, livelli meteo, dettagli aggiuntivi (*Menu → Configura mappa → Rendering mappa*) per snellire la visualizzazione della mappa e migliorare la velocità.

3. **Limitare il numero di PDI visualizzati.** Visualizzare solo i PDI principali o limitare le categorie visualizzate durante la navigazione può aiutare ad accelerare il rendering della mappa. Accedere a queste impostazioni in *Menu → Navigazione → Impostazioni*.

4. **Regolare l'ingrandimento della mappa.** L'impostazione dell'ingrandimento della mappa potrebbe essere un fattore chiave nel rallentare la mappa. Impostare l'ingrandimento al 100% premendo a lungo il pulsante **"+"** o **"-"** sulla schermata della mappa per ottimizzare la visualizzazione.

5. **Disabilitare lo zoom automatico.** Lo zoom automatico può comportare un ridisegno frequente della mappa durante la navigazione, causando ritardi. Disabilitare lo zoom automatico in *Menu → Impostazioni → Profilo → Impostazioni di navigazione → [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md)*.

6. **Usare solo mappe offline.** Le mappe online, specialmente se non scaricate in anticipo, possono rallentare il caricamento della mappa. Passare all'uso esclusivo di mappe offline per prestazioni più fluide.

Queste modifiche dovrebbero ridurre il tempo necessario per il rendering delle mappe, specialmente durante la navigazione. Per opzioni di configurazione più dettagliate, fare riferimento alla [Guida alle Impostazioni della Mappa](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Curve di livello {#contour-lines}

### C'è un modo per visualizzare le curve di livello in piedi invece che in metri? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Sì, le curve di livello possono essere visualizzate in piedi invece che in metri. Prima di scaricare i dati delle Curve di livello, scegliere tra Piedi o Metri: [leggi di più qui](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Curve di livello, dati di elevazione o Rilievo 3D non vengono visualizzati {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verificare se sono stati scaricati i dati della regione corretta. Andare su ***Menu → Mappe e Risorse → Download → La tua Regione***. [Come scaricare le mappe](../start-with/first-steps.md#how-to-download-maps).
- Verificare che il [plugin](../plugins/topography.md#required-setup-parameters) sia abilitato e visibile in ***Menu → Plugin → Topografia***.
- Verificare che gli elementi nella sezione Topografia siano abilitati in ***Menu → Configura Mappa → Topografia → Curve di livello / Terreno / Rilievo 3D***.
- Controllare i propri acquisti: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Aggiornare l'app all'ultima versione.
- Eliminare e scaricare nuovamente le mappe richieste per assicurarsi che non ci siano file corrotti.
- Riavviare OsmAnd per aggiornare le impostazioni e i dati.


## Ricerca {#search}

### La ricerca strutturata dell'indirizzo (città *→* via *→* casa) non trova la casa {#structured-city--street--house-address-search-doesnt-find-the-house}

Se si sta tentando di cercare una località utilizzando la struttura *Città → Via → Numero Civico* e non vengono restituiti risultati, considerare i seguenti suggerimenti e possibili cause:

> **Suggerimento**: Prova una ricerca a testo completo senza specificare la città, poiché l'indirizzo potrebbe essere elencato sotto una città diversa.

**Potenziali problemi:**

- **Casa mancante**. La casa potrebbe non essere elencata su OpenStreetMap, oppure potrebbe essere presente ma senza numeri assegnati. È possibile verificarlo con un esempio [qui](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nome della via errato**. Il nome della via associato alla casa potrebbe essere errato in OpenStreetMap. Controllare il tag `addr:street` per assicurarsi che il nome della via corrisponda esattamente a quello nelle informazioni di etichettatura della via.

- **Problema con Nominatim**. La casa potrebbe essere presente in OpenStreetMap ma non trovata tramite Nominatim (il motore di ricerca utilizzato da OpenStreetMap). È possibile saperne di più su come risolvere i problemi relativi agli indirizzi [qui](https://wiki.openstreetmap.org/wiki/Addresses).

- **Possibile problema in OsmAnd**. Se la casa è presente in Nominatim ma non viene ancora trovata in OsmAnd, il problema potrebbe essere specifico di OsmAnd. È possibile contribuire a risolvere questo problema investigando ulteriormente. Maggiori dettagli possono essere trovati in questo [articolo tecnico](../../technical/algorithms/trace-address-search-issues.md).


## Tracce e Punti {#tracks-and-points}

### Come contrassegnare luoghi diversi sulla mappa {#how-to-mark-different-places-on-the-map}

È possibile lasciare note e contrassegnare luoghi sulla mappa in varie forme, ognuna con scopi diversi:

- *[Preferiti](../personal/favorites.md)*. Questi sono punti permanenti sulla mappa a cui è possibile aggiungere descrizioni. Per creare un Preferito, fare un *tocco lungo → toccare Aggiungi*. I Preferiti sono ottimi per contrassegnare luoghi che si visitano frequentemente o che si desidera salvare per riferimento futuro.

- *[Segnalibri](../personal/markers.md)*. I Segnalibri sono punti temporanei, spesso usati per la navigazione o la pianificazione. Possono mostrare la distanza dalla posizione corrente o da un altro punto e possono essere rimossi rapidamente quando non sono più necessari. Per aggiungere un Segnalibro, fare un *tocco lungo → toccare Segnalibro*.

- *[Punti tappa](../map/tracks/index.md#types-of-tracks)*. I Punti tappa vengono posizionati lungo i percorsi creati, aiutando a contrassegnare fermate o luoghi specifici lungo il viaggio. È possibile aggiungere descrizioni anche a questi punti. Per aggiungere un punto tappa, fare un *tocco lungo sulla mappa → Indicazioni → aggiungi come punto intermedio*.

- *[Note Audio/Video](../plugins/audio-video-notes.md)*. Queste note consentono di allegare file audio, video o foto a luoghi specifici sulla mappa. Per abilitare, attivare il plugin Note Audio/Video in *Menu OsmAnd → Plugin*. Per aggiungerne una, fare un *tocco lungo → Azioni → scegliere il file richiesto da allegare*.

- *[Note OSM](../plugins/osm-editing.md#create--modify-osm-note)*. Queste sono segnalazioni che è possibile creare per evidenziare errori o informazioni mancanti su OpenStreetMap. Abilitare il plugin di modifica OSM nel *Menu OsmAnd → Plugin*. Per aggiungere una Nota OSM, fare un *tocco lungo → Azioni → Aggiungi nota OSM*.

- *[PDI (Punti di Interesse)](../map/point-layers-on-map.md#points-of-interest-pois)*. Questi sono punti predefiniti dalla fonte dati di OpenStreetMap, come ristoranti, parchi o punti di riferimento. È possibile visualizzare i PDI abilitando il layer PDI nel menu *Configura Mappa* o selezionando una categoria.

- *[Ricerca](../search/index.md)*. È anche possibile utilizzare la funzione di ricerca per trovare e contrassegnare luoghi sulla mappa.