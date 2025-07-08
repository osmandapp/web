---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Navigazione
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

*Android*. OsmAnd utilizza due diversi **motori di routing offline**: un *motore basato su Java* e un *motore nativo (C++)*.

- Il *motore basato su Java* viene utilizzato in [Modalità sicura](../plugins/development.md#safe), ma è circa 10 volte più lento del motore nativo. Ha anche severe limitazioni di memoria, che possono portare a errori come *Memoria insufficiente per il calcolo*. Se riscontri questo problema, vai su *Plugin → Sviluppo OsmAnd → Impostazioni →* [*Modalità sicura*](../plugins/development.md#safe) e assicurati che questa opzione sia disabilitata.
- Il *motore nativo (C++)* offre prestazioni migliori, ma la sua efficienza dipende dalla memoria e dalle capacità del processore del tuo dispositivo. In generale, il routing nativo funziona bene per percorsi inferiori a 300 km, con tempi di calcolo del percorso che vanno da 15 secondi a 4 minuti. Se il processo richiede più di 4 minuti, è consigliabile interrompere, poiché l'applicazione potrebbe bloccarsi.


### Come calcolare percorsi più lunghi di 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Se l'app non mostra un percorso dopo 7-8 minuti di tempo di calcolo, considera di [posizionare waypoint](../navigation/setup/route-navigation.md#route-recalculation) (scegli ad esempio luoghi sulle autostrade). 3-4 waypoint saranno sufficienti per calcolare anche percorsi di 1000 km.

2. Per i dispositivi di fascia alta puoi aumentare la memoria fino a 512 MB o 1024 MB - [Dispositivi con memoria allocata](../plugins/development.md#memory-allocated-for-routing).

3. Per la versione Android puoi creare un Profilo di navigazione con routing Online o di terze parti (BRouter). Leggi di più [qui](../navigation/routing/brouter.md).

### Calcolo di percorsi di 50 km per pedoni {#calculation-of-50-km-routes-for-pedestrians}

Se utilizzi il profilo **A piedi** in OsmAnd, l'applicazione potrebbe bloccarsi durante il calcolo di percorsi superiori a 50 km. Questo problema si verifica in particolare quando nelle impostazioni di navigazione è selezionato [**Routing standard A***](../navigation/guidance/navigation-settings.md#development-settings). Diversi fattori possono contribuire a questo problema:

- La lunghezza del percorso supera i 50 km.
- Il numero di punti diretti sul percorso è superiore a 1 milione.
- Stai utilizzando un dispositivo mobile per calcolare il percorso, cosa non consigliata per percorsi di questa lunghezza. Considera l'utilizzo della versione web per prestazioni migliori.

Per evitare arresti anomali con percorsi di distanze simili, potresti voler passare ad altri tipi di profilo come **Bicicletta**.


## Il percorso calcolato non sembra corretto {#the-calculated-route-does-not-seem-correct}

Per individuare problemi con percorsi errati o subottimali, apri una nuova discussione in [Github discussions](https://github.com/osmandapp/OsmAnd/discussions) o [Github issue](https://github.com/osmandapp/Osmand/issues) e specifica nel modo più dettagliato possibile le seguenti informazioni:

- Quale versione di OsmAnd stai utilizzando, su quale dispositivo?
- Utilizzi le mappe offline offerte all'interno dell'app OsmAnd per il download o mappe online (tile / raster)?
- Se utilizzi mappe offline, indicaci il nome esatto del file della mappa in cui si verifica il problema di routing e la sua data di edizione.
- Dicci se hai utilizzato il routing offline in-app di OsmAnd o qualsiasi provider di routing online come YOURS, OpenRouteService o OSRM.
- Quale profilo di routing è scelto nell'app OsmAnd (auto, bici o pedone)?
- Specifica il più esattamente possibile il punto di partenza e di arrivo del tuo percorso. Se possibile, indicaci il nome della città e il nome della strada per ciascuno. Anche un [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) da openstreetmap.org può essere utile.
- Dicci il tuo routing previsto e come OsmAnd effettua il routing.

## Informazioni stradali {#road-information}

### OsmAnd mostra solo alcuni autovelox {#osmand-only-shows-some-speed-cams}

A causa dei geodati presi dal progetto OpenStreetMap, esistono attualmente due metodi con cui gli autovelox sono integrati nei dati grezzi di OSM:

- Un punto (chiamato "nodo" nella terminologia OSM) di una via è taggato con "highway=speed_camera", vedi wiki OSM su [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Un gruppo di elementi di dati OSM sono uniti insieme in una cosiddetta "relazione" che contiene più elementi di un singolo nodo per descrivere la direzione coperta dall'autovelox. Vedi [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Attualmente, OsmAnd può utilizzare solo gli elementi costituiti da un singolo nodo. L'analisi delle relazioni è prevista in una versione futura.


## Navigazione vocale {#voice-navigation}

### Perché dovrei usare una voce TTS invece di una voce registrata? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Le voci **Text-to-Speech (TTS)** generano prompt vocali in modo dinamico, consentendo loro di pronunciare nomi di strade, nomi di luoghi e numeri di autostrade. Al contrario, le **voci registrate** sono limitate a frasi preregistrate e non possono pronunciare nomi o numeri specifici.

*Vantaggi del TTS rispetto alle voci registrate:*

- Pronuncia nomi di strade e informazioni dinamiche.
- Aggiornato regolarmente con nuove funzionalità.
- Offre una maggiore flessibilità per la navigazione.

Per utilizzare il TTS in OsmAnd, il tuo dispositivo deve avere un **motore TTS** installato. Molti dispositivi sono dotati di un motore TTS preinstallato, ma è possibile installarne manualmente altri se necessario. [Elenco dei motori e delle lingue TTS supportati per Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Per istruzioni dettagliate su come configurare e regolare i prompt vocali, consulta: [Guida alla configurazione della navigazione vocale](../navigation/guidance/voice-navigation.md).

### Il TTS non funziona correttamente? Segui questi passaggi per risolverlo {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

I problemi con il **Text-to-Speech (TTS)** sono tipicamente correlati alle **impostazioni di sistema Android**, non all'app OsmAnd stessa.

1. Assicurati che sia installato un motore TTS.

    - Apri *Impostazioni dispositivo → Lingua e input → Opzioni Text-to-Speech*.
    - Controlla se è installato un **motore TTS** (ad esempio, Google TTS, Samsung TTS, Pico).
    - Se non è installato alcun motore, seleziona *“Installa altro…”* e scaricane uno compatibile.
    - [Elenco dei motori e delle lingue TTS supportati.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifica le impostazioni della lingua TTS.

    - Seleziona la lingua che desideri utilizzare in *Impostazioni Android → Opzioni Text-to-Speech*.
    - Tocca *“Ascolta un esempio”* per verificare se il motore TTS funziona.
    - Se non senti nulla, aggiorna o reinstalla il motore TTS.

3. Regola le impostazioni di navigazione vocale di OsmAnd.

    - Apri *OsmAnd → Menu → Configura profilo → Impostazioni di navigazione → Prompt vocali*.
    - Seleziona una *Lingua → TTS* compatibile.
    - Prova i prompt vocali navigando in *Menu → Plugin → Abilita sviluppo OsmAnd → Impostazioni → Prova prompt vocali*.

#### Passaggi aggiuntivi {#additional-steps}

- *Aggiorna Google TTS*. Apri Google Play Store, cerca **Google Text-to-Speech** e aggiornalo.
- *Simula navigazione*. Tocca *Pulsante Navigazione → Impostazioni → Simula navigazione* per verificare se la guida vocale viene riprodotta.
- *Reinstalla OsmAnd*:
   - **Esegui il backup delle impostazioni:** *Menu → Impostazioni → Esporta su file*.
   - Disinstalla OsmAnd, quindi reinstallalo dallo store delle app.
   - Ripristina le impostazioni: *Menu → Impostazioni → Importa file*.

Per ulteriori risoluzioni dei problemi, visita:

- [Guida alla navigazione vocale](../navigation/guidance/voice-navigation.md)
- [Importa/Esporta impostazioni](../personal/import-export.md)


## Altro {#other}

### La navigazione si interrompe mentre lo schermo è spento {#navigation-stops-while-screen-is-off}

- [Lo stesso problema](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) con la registrazione della traccia in background.