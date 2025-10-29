---
source-hash: 848546295eb67d895bd6bd5a48afe6f2f110a62b992de04aa47e91eee03c9082
sidebar_position: 3
title:  Navigazione
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Calcolo del percorso {#route-calculation}

### Il calcolo del percorso è lento {#route-calculation-is-slow}

*Android*. OsmAnd utilizza due diversi **motori di calcolo del percorso offline**: un *motore basato su Java* e un *motore Nativo (C++)*.

- Il *motore basato su Java* viene utilizzato in [Modalità sicura](../plugins/development.md#overview), ma è circa 10 volte più lento del motore nativo. Ha anche limiti di memoria rigidi, che possono portare a errori come *Memoria insufficiente per il calcolo*. Se si riscontra questo problema, navigare su *Plugin → Sviluppo OsmAnd → Impostazioni →* [*Modalità sicura*](../plugins/development.md#overview) e assicurarsi che questa opzione sia disabilitata.
- Il *motore Nativo (C++)* offre prestazioni migliori, ma la sua efficienza dipende dalla memoria e dalle capacità del processore del dispositivo. Generalmente, il calcolo del percorso nativo funziona bene per percorsi inferiori a 300 km, con tempi di calcolo che vanno da 15 secondi a 4 minuti. Se il processo richiede più di 4 minuti, è consigliabile interromperlo, poiché l'applicazione potrebbe bloccarsi.


### Percorsi errati o interrotti {#incorrect-or-broken-routes}

A volte OsmAnd potrebbe mostrare risultati di navigazione inaspettati. Invece di seguire la rete stradale, il percorso potrebbe apparire come una linea tratteggiata dritta verso un punto non correlato, o la navigazione potrebbe fallire completamente. Questo indica solitamente che il routing verso la posizione selezionata non è possibile con la configurazione attuale. Problemi simili sono stati segnalati dagli utenti su [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) e [altri](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/).

**Cause:**

- Mappe obsolete o duplicate. Mappe con date di aggiornamento diverse o duplicate possono interrompere la connettività (specialmente attraverso regioni/confini).
- Impostazioni del profilo danneggiate. Profili personalizzati/modificati (ad es., Bicicletta) possono causare comportamenti incoerenti.
- Incompatibilità del motore di routing: Motori diversi (HH × Java vs HH × C++) possono gestire le stesse mappe in modo diverso.

**Soluzioni:**

1. Reimposta il profilo.
- Apri *Menu* → *Impostazioni* → *Profilo app (Profilo di Navigazione)*.
- Seleziona *Reimposta predefinito*.

2. Rimuovi e reinstalla le mappe.
- Apri *Menu* → *Mappe e Risorse* → *Locale* ed elimina tutte le mappe per le regioni interessate.
- Poi vai a *Menu* → *Mappe e Risorse* → *Download* e scarica le mappe di nuovo.
- Opzionalmente controlla *Menu* → *Mappe e Risorse* → *Aggiornamenti* per assicurarti che tutte le regioni condividano la stessa data di aggiornamento.

3. Cambia motore di routing.
- Abilita il plugin: *Menu* → *Plugin* → *Sviluppo OsmAnd*.
- Poi apri *Menu* → *Impostazioni* → *Profilo app* → *Impostazioni di navigazione* → *Parametri del percorso* → *Sviluppo* → *Tipo di routing* e passa da *HH × C++* ↔ *HH × Java* (puoi anche provare A* classico o A* a due fasi).

4. Come ultima risorsa.
- Reinstalla l'app e scarica le mappe di nuovo (aiuta quando persistono conflitti nascosti).


### Come calcolare percorsi più lunghi di 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Se l'app non mostra un percorso dopo 7-8 minuti di calcolo, considerare di [inserire punti intermedi](../navigation/setup/route-navigation.md#route-recalculation) (scegliere ad esempio luoghi sulle autostrade). 3-4 punti intermedi saranno sufficienti per calcolare percorsi anche di 1000 km.

2. Per i dispositivi di fascia alta è possibile aumentare la memoria fino a 512 MB o 1024 MB - [Dispositivi con memoria allocata](../plugins/development.md#memory-settings).

3. Per la versione Android è possibile creare un profilo di navigazione con routing online o di terze parti (BRouter). Per saperne di più, leggete [qui](../navigation/routing/brouter.md).

### Calcolo di percorsi di 50 km per pedoni {#calculation-of-50-km-routes-for-pedestrians}

Se si utilizza il profilo **Pedonale** in OsmAnd, l'applicazione potrebbe bloccarsi durante il calcolo di percorsi superiori a 50 km. Questo problema si verifica specificamente quando è selezionato il [**Routing Standard A***](../navigation/guidance/navigation-settings.md#development-settings) nelle impostazioni di navigazione. Diversi fattori possono contribuire a questo problema:

- La lunghezza del percorso supera i 50 km.
- Il numero di punti diretti sul percorso è superiore a 1 milione.
- Si sta utilizzando un dispositivo mobile per calcolare il percorso, il che non è raccomandato per percorsi di questa lunghezza. Considerare l'utilizzo della versione web per prestazioni migliori.

Per evitare blocchi con percorsi di distanze simili, si consiglia di passare ad altri tipi di profilo come **Bicicletta**.


## Il percorso calcolato non sembra corretto {#the-calculated-route-does-not-seem-correct}

Per individuare problemi con percorsi errati o non ottimali, si prega di aprire un nuovo post nelle [discussioni di Github](https://github.com/osmandapp/OsmAnd/discussions) o una [segnalazione su Github](https://github.com/osmandapp/Osmand/issues) e specificare nel modo più dettagliato possibile le seguenti informazioni:

- Quale versione di OsmAnd state usando e su quale dispositivo?
- Utilizzate le mappe offline offerte per il download all'interno dell'app OsmAnd, o mappe online (a tasselli / raster)?
- Se utilizzate mappe offline, indicateci il nome esatto del file della mappa in cui si verifica il problema di routing e la sua data di edizione.
- Indicateci se avete utilizzato il routing offline integrato di OsmAnd o un fornitore di routing online come YOURS, OpenRouteService o OSRM.
- Quale profilo di routing è stato scelto nell'app OsmAnd (auto, bici o pedone)?
- Si prega di specificare nel modo più esatto possibile il punto di partenza e di arrivo del percorso. Se possibile, indicare il nome della città e della via per ciascuno. Anche un [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) da openstreetmap.org può essere utile.
- Indicateci il percorso che vi aspettavate e come OsmAnd lo calcola.

## Informazioni stradali {#road-information}

### OsmAnd mostra solo alcuni autovelox {#osmand-only-shows-some-speed-cams}

A causa dei geodati presi dal progetto OpenStreetMap, esistono attualmente due metodi con cui gli autovelox sono integrati nei dati grezzi di OSM:

- Un punto (chiamato "nodo" nella terminologia OSM) di una via è etichettato con "highway=speed_camera", vedi wiki OSM su [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Un gruppo di elementi di dati OSM sono uniti in una cosiddetta "relazione" che contiene più elementi di un singolo nodo per descrivere la direzione coperta dall'autovelox. Vedi [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Attualmente, OsmAnd può utilizzare solo gli elementi che consistono in un singolo nodo. L'analisi delle relazioni sarà implementata in una versione futura.


## Navigazione vocale {#voice-navigation}

### Perché dovrei usare una voce TTS invece di una voce registrata? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Le voci **Text-to-Speech (TTS)** generano prompt vocali dinamicamente, consentendo loro di pronunciare nomi di strade, nomi di luoghi e numeri di autostrade. Al contrario, le **voci registrate** sono limitate a frasi pre-registrate e non possono pronunciare nomi o numeri specifici.

*Vantaggi del TTS rispetto alle voci registrate:*

- Pronuncia i nomi delle strade e le informazioni dinamiche.
- Aggiornato regolarmente con nuove funzionalità.
- Offre una maggiore flessibilità per la navigazione.

Per utilizzare il TTS in OsmAnd, il dispositivo deve avere un **motore TTS** installato. Molti dispositivi sono dotati di un motore TTS preinstallato, ma se necessario se ne possono installare altri manualmente. [Elenco dei motori TTS e delle lingue supportate per Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Per istruzioni dettagliate su come impostare e regolare le istruzioni vocali, fare riferimento a: [Guida alla configurazione della navigazione vocale](../navigation/guidance/voice-navigation.md).

### Il TTS non funziona correttamente? Segui questi passaggi per risolvere il problema {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

I problemi con la **Text-to-Speech (TTS)** sono tipicamente legati alle **impostazioni di sistema di Android**, non all'app OsmAnd stessa.  

1. Assicurarsi che un motore TTS sia installato.

    - Aprire *Impostazioni dispositivo → Lingua e inserimento → Opzioni Sintesi vocale*.
    - Verificare se è installato un **motore TTS** (ad es. Google TTS, Samsung TTS, Pico).
    - Se non è installato alcun motore, selezionare *“Installa altri…”* e scaricarne uno compatibile.
    - [Elenco dei motori TTS e delle lingue supportate.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verificare le impostazioni della lingua del TTS.

    - Selezionare la lingua che si desidera utilizzare in *Impostazioni Android → Opzioni Sintesi vocale*.
    - Toccare *“Ascolta un esempio”* per verificare se il motore TTS funziona.
    - Se non si sente nulla, aggiornare o reinstallare il motore TTS.

3. Regolare le impostazioni della navigazione vocale di OsmAnd.

    - Aprire *OsmAnd → Menu → Configura profilo → Impostazioni di navigazione → Istruzioni vocali*.
    - Selezionare una *Lingua → TTS* compatibile.
    - Testare le istruzioni vocali navigando su *Menu → Plugin → Abilita Sviluppo OsmAnd → Impostazioni → Prova istruzioni vocali*.

#### Passaggi aggiuntivi {#additional-steps}

- *Aggiornare Google TTS*. Aprire il Google Play Store, cercare **Sintesi vocale di Google** e aggiornarla.  
- *Simulare la navigazione*. Toccare *Pulsante Navigazione → Impostazioni → Simula navigazione* per verificare se la guida vocale viene riprodotta.  
- *Reinstallare OsmAnd*:  
   - **Eseguire il backup delle impostazioni:** *Menu → Impostazioni → Esporta su file*.  
   - Disinstallare OsmAnd, quindi reinstallarlo dall'app store.  
   - Ripristinare le impostazioni: *Menu → Impostazioni → Importa da file*.

Per ulteriore risoluzione dei problemi, visitare:

- [Guida alla navigazione vocale](../navigation/guidance/voice-navigation.md)  
- [Importa/Esporta impostazioni](../personal/import-export.md)  


## Altro {#other}

### La navigazione si interrompe a schermo spento {#navigation-stops-while-screen-is-off}

- [Lo stesso problema](../troubleshooting/track-recording-issues.md#overview) con la registrazione della traccia in background.