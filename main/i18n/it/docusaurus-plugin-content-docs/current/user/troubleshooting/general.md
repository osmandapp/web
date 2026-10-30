---
source-hash: 7a4ec38811965699d4bf8be48f33fcce4e1e12973b13ab13ffa374909cfef793
sidebar_position: 2
title:  Generale
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

Problemi generali relativi a varie funzionalità di OsmAnd.

## Consumo della batteria {#battery-consumption}

### Sembra che OsmAnd consumi troppa batteria {#osmand-seems-to-use-up-too-much-battery-power}

Sono state segnalate da alcuni utenti situazioni in cui OsmAnd consumava una quantità eccessiva di batteria, con casi in cui OsmAnd risultava responsabile fino al 90% dell'utilizzo della batteria. Tuttavia, abbiamo eseguito molti test e non siamo riusciti a riprodurre tali risultati.  

In circostanze normali, OsmAnd consuma energia solo quando necessario per funzioni attive come la navigazione in tempo reale o la registrazione di una traccia. Quando questi servizi sono attivi, compaiono nell'area delle notifiche di Android. Se non è visibile alcuna notifica di questo tipo, OsmAnd non sta consumando energia in background.  

Diversi fattori influenzano il consumo della batteria: l'età del dispositivo, il numero di cicli di carica, la capacità della batteria, la temperatura e altro ancora. Di seguito sono riportati i consumi tipici della batteria, basati su test eseguiti su un dispositivo di fascia media:

| Funzione del dispositivo | Consumo della batteria all'ora |
| :--- | :--- |
| Dispositivo tipico in standby con solo le app standard attive | 0,5 % |
| Schermo acceso (tipicamente) | 6 % |
| GPS attivo (tipicamente) | 5 % |
| OsmAnd in esecuzione in background per la registrazione di una traccia | 0,5 % |
| OsmAnd senza alcun servizio in esecuzione in background | 0 % |

#### Consumo della batteria delle funzioni di OsmAnd {#osmand-function-battery-consumption}

| Funzione di OsmAnd | Consumo della batteria all'ora |
| :--- | :--- |
| Registrazione di una traccia con schermo spento | 6 % |
| Navigazione con schermo acceso | 12 % |

Il consumo energetico complessivo deriva dalla somma di queste componenti, a seconda di come utilizzi OsmAnd. Segnalaci se noti deviazioni significative rispetto a questi valori tipici.


### Ottimizzazione del consumo della batteria {#optimizing-battery-consumption}

Quando si utilizza OsmAnd, diverse funzioni possono influenzare il consumo della batteria, soprattutto durante attività come la navigazione o la registrazione di tracce. Ecco alcuni suggerimenti per gestire efficacemente l'utilizzo della batteria:

- **Controllo dello schermo durante la navigazione** (*Android*). Per risparmiare energia, puoi configurare OsmAnd in modo che mantenga lo schermo spento durante la navigazione, a meno che non ci sia una svolta o un evento importante. Questo è particolarmente utile durante la navigazione vocale. Per maggiori dettagli, consulta *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Impostazioni di navigazione a risparmio energetico**. Puoi ridurre il consumo della batteria riducendo al minimo la frequenza di ridisegno della mappa e limitando la precisione del GPS. Per regolare queste impostazioni, vai su *Navigazione → Impostazioni → Navigazione del percorso*. Per maggiori informazioni, consulta [risparmio energetico durante la navigazione](../navigation/setup/route-navigation.md#power-saving-tips).

- **Gestione dei livelli e dei dettagli della mappa**. Disattiva le funzioni della mappa non necessarie come il rilievo 3D, le curve di livello o l'ombreggiatura del rilievo. Puoi anche ridurre il numero di oggetti visualizzati (etichette dei PDI, confini, numeri civici, ecc.) tramite il menu *Configura mappa*. La disattivazione di questi livelli aiuta a ridurre la frequenza di ridisegno della mappa, riducendo il consumo energetico.

- **Disattivazione dello zoom automatico**. Lo zoom automatico durante la navigazione può causare frequenti ridisegni della mappa, aumentando l'utilizzo della batteria. Disattivare questa funzione può aiutare a ridurre il consumo energetico. Vai su *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* per disattivare lo zoom automatico. Per ulteriori dettagli, visita [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md).

- **Ottimizzazione delle impostazioni di registrazione delle tracce**. Assicurati di regolare la precisione del GPS e l'utilizzo dello schermo durante la registrazione delle tracce per risparmiare batteria. Consulta la sezione [Risoluzione dei problemi di registrazione delle tracce](../troubleshooting/track-recording-issues.md) per ulteriori indicazioni.


## Privacy {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Come eliminare la cronologia di ricerca {#how-to-delete-search-history}

Per rimuovere la cronologia di ricerca in OsmAnd:

1. Apri il menu *Cerca*.
2. Tocca a lungo un qualsiasi risultato di ricerca.
3. Seleziona i risultati che desideri eliminare, oppure usa l'opzione *Seleziona tutto* nell'angolo in alto a sinistra per eliminarli tutti.
4. Tocca l'icona *Cestino* nell'angolo in alto a destra per confermare l'eliminazione.

Per istruzioni più dettagliate sulla funzione di ricerca, puoi consultare [questa guida](../search/search-history.md).


## Interfaccia {#interface}

### Perché i pulsanti della mappa, i widget o il testo sono troppo grandi? (Android) {#why-are-map-buttons-widgets-or-the-map-ruler-too-large}

Se i pulsanti della mappa, i widget o il righello della mappa appaiono sovradimensionati dopo aver regolato la dimensione del display nelle impostazioni di sistema di Android, potrebbe essere correlato al modo in cui OsmAnd adatta l'interfaccia alla configurazione attuale dello schermo.

Su alcuni dispositivi, ridurre la densità dello schermo o modificare la dimensione del display può influenzare le dimensioni degli elementi dell'interfaccia, specialmente su dispositivi con schermo grande e tablet.

Le versioni recenti di OsmAnd non applicano più il ridimensionamento automatico aggiuntivo per i dispositivi rilevati come tablet. Gli elementi dell'interfaccia ora seguono più da vicino le impostazioni di visualizzazione del sistema Android.

Se desideri regolare manualmente la dimensione dei pulsanti della mappa, utilizza le impostazioni [Aspetto predefinito](https://osmand.net/docs/user/widgets/configure-screen#button-appearance): *Menu → Configura schermata → Pulsanti → Pulsanti predefiniti → menu a tre punti → Aspetto*. Lì puoi impostare una dimensione personalizzata, il raggio degli angoli e l'opacità dello sfondo per tutti i pulsanti predefiniti contemporaneamente.

Se l'interfaccia appare ancora più grande del previsto, controlla *Impostazioni di sistema di Android → Display → Dimensione del display e del testo* e regola le impostazioni di visualizzazione secondo necessità.

### OsmAnd non riempie lo schermo in orizzontale su iPad (iOS) {#osmand-does-not-fill-the-screen-in-landscape-on-ipad-ios}

OsmAnd supporta sia l'orientamento verticale che quello orizzontale su iPad e segue la rotazione del sistema. Se l'app riempie lo schermo in verticale ma appare come una finestra più piccola in orizzontale, la causa è la modalità di gestione delle finestre di iPadOS 26, non OsmAnd.

Nella modalità *App in finestra*, iPadOS ricorda le dimensioni della finestra di ciascuna app. Una volta ridimensionata la finestra di OsmAnd in orizzontale, l'app mantiene quelle dimensioni in orizzontale, mentre in verticale continua a riempire lo schermo.

Per fare in modo che OsmAnd riempia di nuovo lo schermo, usa una delle seguenti opzioni:

- **Espandi la finestra.** Con OsmAnd aperto in orizzontale, tocca la piccola pillola nella parte superiore della finestra. Compaiono tre pulsanti: *Chiudi*, *Riduci a icona* e *Zoom*. Tocca *Zoom* per espandere l'app a tutto schermo. L'app mantiene le dimensioni a schermo intero dopo la rotazione dell'iPad.
- **Disattiva le finestre per tutte le app.** Vai su *Impostazioni iPad → Multitasking e gesti* e seleziona *App a schermo intero* invece di *App in finestra*. Tutte le app, compresa OsmAnd, si apriranno sempre a schermo intero.

Assicurati inoltre che OsmAnd non sia aperta in *Split View* o *Slide Over* accanto a un'altra app.


## Altro {#other}

### Problema con la connessione GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd si basa sui dati di posizione forniti dal tuo dispositivo Android tramite l'API di Android.  

Per risolvere i problemi di connessione GPS, segui questi passaggi:

1. **Cambia l'origine della posizione**. Prova opzioni diverse come i servizi Google Play o l'API di Android in *Impostazioni di OsmAnd → Origine della posizione*.
2. **Aggiorna l'API dei servizi Google**. Assicurati di avere l'ultima versione da [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Controlla le impostazioni di posizione di Android**. Vai alle Impostazioni di sistema di Android e assicurati che l'accesso alla posizione sia attivato e impostato su Alta precisione. Puoi anche provare a svuotare la cache e riavviare il dispositivo. I problemi del GPS possono verificarsi se edifici o grandi oggetti interferiscono con il segnale. Verifica le prestazioni del GPS e, se il segnale è debole, imposta la precisione minima di registrazione a più di 15 metri.
4. **Attiva il widget GPS**. Usa il widget Info GPS per controllare le connessioni ai satelliti. Se non ci sono connessioni ai satelliti, il dispositivo non determinerà la posizione e il numero di satelliti sarà 0. Maggiori dettagli sono disponibili nella [guida al widget GPS](../widgets/info-widgets.md#gps-info).
5. **Usa solo il segnale GPS**. Imposta il dispositivo in modo che usi solo il GPS (disattiva la posizione basata su Wi-Fi o Bluetooth). Le istruzioni sono disponibili su [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstalla OsmAnd**. Se i passaggi precedenti non funzionano, prova a reinstallare l'app OsmAnd per eliminare i dati danneggiati e risolvere i problemi del GPS. Prima di farlo, esporta tutti i dati salvati.
7. **Controlla la RAM del dispositivo**. Se il problema persiste, potrebbe essere dovuto a memoria insufficiente, quindi assicurati che il dispositivo abbia abbastanza RAM disponibile.


### Problema di mancata corrispondenza dell'e-mail durante l'acquisto di OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Se riscontri un problema in cui l'e-mail associata al tuo acquisto di OsmAnd Pro non corrisponde all'e-mail dell'app OsmAnd, segui questi passaggi per risolvere il problema:

1. **Controlla gli account Google Play e Pay**. Assicurati che l'e-mail corretta sia collegata ai tuoi account Google Play Store e Pay. Il processo di pagamento è gestito da questi servizi e la mancata corrispondenza dell'e-mail potrebbe essere dovuta a una vecchia e-mail ancora associata al tuo profilo di pagamento.

2. **Verifica l'e-mail dell'app OsmAnd**. Ricontrolla l'indirizzo e-mail nella tua app OsmAnd per assicurarti che corrisponda alla tua attuale e-mail di Google Play. Puoi farlo aprendo l'app e andando nelle impostazioni dell'account.

3. **Ripristina gli acquisti**. Controlla la disponibilità e la correttezza del tuo acquisto. Per farlo, vai su OsmAnd *Menu → Impostazioni → Acquisti*. Se i dati visualizzati non corrispondono alle tue aspettative, prova a [Ripristinare gli acquisti](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Svuota la cache e i dati dell'app**. Svuota la cache e i dati dell'app OsmAnd andando in *Impostazioni → App → OsmAnd → Archiviazione → Svuota cache e Cancella dati* del dispositivo. Questo aggiornerà l'app e rimuoverà eventuali problemi residui del vecchio account.

5. **Reinstalla OsmAnd**. Se lo svuotamento della cache non risolve il problema, prova a disinstallare e reinstallare l'app. Prima di farlo, assicurati di eseguire il backup di tutti i dati importanti (tracce, preferiti) andando su *Menu → Impostazioni → Esporta in file*. La reinstallazione dell'app garantirà che tutti i dettagli dell'account vengano aggiornati correttamente.

6. **Disattiva il proxy**. Controlla le impostazioni del proxy dell'app e assicurati che il proxy sia disattivato andando su *Menu → Impostazioni → Impostazioni OsmAnd → Proxy*. Un proxy o una VPN potrebbero interferire con la sincronizzazione dell'account.

7. **Riaccedi o usa il Web per la gestione dell'account**. Se hai ancora problemi, prova a disconnetterti e ad accedere di nuovo per aggiornare la connessione dell'app al tuo account attuale. Se riscontri problemi nell'eliminazione del vecchio account nell'app, valuta di gestire il tuo account tramite la versione web di OsmAnd.
