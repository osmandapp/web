---
source-hash: 0a0e6bbadf34561e82d857c6270b71b1fa26543e35edd9ea4cda96e07711812f
sidebar_position: 2
title: Generale
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Problemi generali relativi alle varie funzionalità di OsmAnd.

## Consumo della batteria {#battery-consumption}

### OsmAnd sembra consumare troppa energia della batteria {#osmand-seems-to-use-up-too-much-battery-power}

Ci sono state segnalazioni da parte degli utenti di OsmAnd che consuma eccessivamente la batteria, con casi in cui OsmAnd era responsabile fino al 90% dell'utilizzo della batteria. Tuttavia, abbiamo eseguito molti test e non siamo riusciti a riprodurre tali risultati.

In circostanze normali, OsmAnd consuma energia solo quando necessario per funzioni attive come la navigazione in tempo reale o la registrazione di tracce. Quando questi servizi sono attivi, appaiono nell'area di notifica di Android. Se non è visibile alcuna notifica di questo tipo, OsmAnd non sta consumando energia in background.

Diversi fattori influenzano il consumo della batteria: l'età del dispositivo, il numero di cicli di carica, la capacità della batteria, la temperatura e altro ancora. Di seguito sono riportati i tassi di consumo tipici della batteria, basati su test eseguiti su un dispositivo di fascia media:

| Funzione del dispositivo | Consumo della batteria per ora |
| :--- | :--- |
| Dispositivo tipico inattivo con solo app standard attive | 0.5 % |
| Schermo acceso (tipicamente) | 6 % |
| GPS attivo (tipicamente) | 5 % |
| OsmAnd in esecuzione in background per la registrazione di tracce | 0.5 % |
| OsmAnd non esegue alcun servizio in background | 0 % |

#### Consumo della batteria delle funzioni di OsmAnd {#osmand-function-battery-consumption}

| Funzione di OsmAnd | Consumo della batteria per ora |
| :--- | :--- |
| Registrazione di tracce con schermo spento | 6 % |
| Navigazione con schermo acceso | 12 % |

Il consumo energetico complessivo dovrebbe risultare dalla somma di questi componenti, a seconda di come si utilizza OsmAnd. Si prega di segnalare se si riscontrano deviazioni significative da questi valori tipici.


### Ottimizzazione del consumo della batteria {#optimizing-battery-consumption}

Quando si utilizza OsmAnd, diverse funzionalità possono influenzare il consumo della batteria, specialmente durante attività come la navigazione o la registrazione di tracce. Ecco alcuni suggerimenti per gestire efficacemente l'utilizzo della batteria:

- **Controllo dello schermo durante la navigazione** (*Android*). Per risparmiare energia, è possibile configurare OsmAnd per mantenere lo schermo spento durante la navigazione a meno che non si verifichi una svolta o un evento importante. Ciò è particolarmente utile durante la navigazione vocale. Per maggiori dettagli, fare riferimento a *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Impostazioni di navigazione a risparmio energetico**. È possibile ridurre il consumo della batteria minimizzando la frequenza di ridisegno della mappa e limitando la precisione del GPS. Per regolare queste impostazioni, andare su *Navigazione → Impostazioni → Navigazione percorso*. Per maggiori informazioni, fare riferimento al [risparmio energetico durante la navigazione](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Gestione dei livelli della mappa e dei dettagli**. Disattivare le funzionalità della mappa non necessarie come il rilievo 3D, le curve di livello o le ombreggiature. È inoltre possibile ridurre il numero di oggetti visualizzati (etichette POI, confini, numeri civici, ecc.) tramite il menu *Configura mappa*. La disattivazione di questi livelli aiuta a ridurre la frequenza di ridisegno della mappa, il che riduce il consumo energetico.

- **Disattivazione dello zoom automatico**. Lo zoom automatico durante la navigazione può causare frequenti ridisegni della mappa, aumentando l'utilizzo della batteria. La disattivazione di questa funzionalità può aiutare a ridurre il consumo energetico. Andare su *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* per disattivare lo zoom automatico. Per ulteriori dettagli, visitare [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md).

- **Ottimizzazione delle impostazioni di registrazione delle tracce**. Assicurarsi di regolare la precisione del GPS e l'utilizzo dello schermo durante la registrazione delle tracce per risparmiare batteria. Visitare la sezione [Risoluzione dei problemi di registrazione delle tracce](../troubleshooting/track-recording-issues.md) per ulteriori indicazioni.


## Privacy {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Come eliminare la cronologia delle ricerche {#how-to-delete-search-history}

Per rimuovere la cronologia delle ricerche in OsmAnd:

1. Aprire il menu *Cerca*.
2. Toccare a lungo su qualsiasi risultato di ricerca.
3. Selezionare i risultati che si desidera eliminare o utilizzare l'opzione *Seleziona tutto* nell'angolo in alto a sinistra per eliminare tutti i risultati.
4. Toccare l'icona *Cestino* nell'angolo in alto a destra per confermare l'eliminazione.

Per istruzioni più dettagliate sulla funzionalità di ricerca, è possibile fare riferimento a [questa guida](../search/search-history.md).


## Altro {#other}

### Problema con la connessione GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd si basa sui dati di posizione forniti dal dispositivo Android tramite l'API Android.

Per risolvere i problemi di connessione GPS, seguire questi passaggi:

1. **Cambia origine posizione**. Prova diverse opzioni come Google Play Services o Android API in *Impostazioni OsmAnd → Origine posizione*.
2. **Aggiorna API Google Service**. Assicurati di avere l'ultima versione da [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Controlla le impostazioni di posizione di Android**. Vai alle Impostazioni di sistema di Android e assicurati che l'Accesso alla posizione sia attivato e impostato su Alta precisione. Puoi anche provare a cancellare la cache e riavviare il dispositivo. I problemi GPS possono verificarsi se edifici o oggetti di grandi dimensioni interferiscono con il segnale. Testa le prestazioni del GPS e, se il segnale è debole, imposta la precisione minima di registrazione su oltre 15 metri.
4. **Abilita widget GPS**. Utilizza il widget informazioni GPS per controllare le connessioni satellitari. Se non ci sono connessioni satellitari, il dispositivo non determinerà la posizione e il numero di satelliti sarà 0. Maggiori dettagli si trovano nella [guida al widget GPS](../widgets/info-widgets.md#gps-info-android).
5. **Utilizza solo segnale GPS**. Imposta il dispositivo per utilizzare solo il GPS (disabilita la posizione basata su Wi-Fi o Bluetooth). Le istruzioni sono disponibili su [Supporto Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstalla OsmAnd**. Se i passaggi precedenti non funzionano, prova a reinstallare l'app OsmAnd per cancellare i dati errati e risolvere i problemi GPS. Prima di farlo, esporta tutti i tuoi dati salvati.
7. **Controlla la RAM del dispositivo**. Se il problema persiste, potrebbe essere dovuto a memoria insufficiente, quindi assicurati che il tuo dispositivo abbia abbastanza RAM disponibile.


### Problema di mancata corrispondenza dell'email durante l'acquisto di OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Se riscontri un problema in cui l'email associata all'acquisto di OsmAnd Pro non corrisponde all'email dell'app OsmAnd, segui questi passaggi per risolvere il problema:

1. **Controlla gli account Google Play e Pay**. Assicurati che l'email corretta sia collegata ai tuoi account Google Play Store e Pay. Il processo di pagamento è gestito da questi servizi e la mancata corrispondenza dell'email potrebbe verificarsi a causa di una vecchia email ancora associata al tuo profilo di pagamento.

2. **Verifica l'email dell'app OsmAnd**. Ricontrolla l'indirizzo email nella tua app OsmAnd per assicurarti che corrisponda alla tua attuale email di Google Play. Puoi farlo aprendo l'app e navigando nelle impostazioni dell'account.

3. **Ripristina gli acquisti**. Controlla la disponibilità e l'adeguatezza del tuo acquisto. Per fare ciò, vai su OsmAnd *Menu → Impostazioni → Acquisti*. Se i dati visualizzati non corrispondono alle tue aspettative, prova a [Ripristina gli acquisti](./purchases_payments.md#how-to-restore-purchases).

4. **Cancella cache e dati dell'app**. Cancella la cache e i dati dell'app OsmAnd andando su *Impostazioni → App → OsmAnd → Archiviazione → Cancella cache e Cancella dati* del tuo dispositivo. Ciò aggiornerà l'app e rimuoverà eventuali problemi residui dal vecchio account.

5. **Reinstalla OsmAnd**. Se la cancellazione della cache non risolve il problema, prova a disinstallare e reinstallare l'app. Prima di farlo, assicurati di eseguire il backup di tutti i dati importanti (tracce, preferiti) andando su *Menu → Impostazioni → Esporta su file*. La reinstallazione dell'app garantirà che tutti i dettagli dell'account vengano aggiornati correttamente.

6. **Disabilita proxy**. Controlla le impostazioni proxy dell'app e assicurati che il proxy sia disattivato andando su *Menu → Impostazioni → Impostazioni OsmAnd → Proxy*. Un proxy o una VPN potrebbero interferire con la sincronizzazione dell'account.

7. **Effettua nuovamente l'accesso o utilizza il Web per la gestione dell'account**. Se riscontri ancora problemi, prova a disconnetterti e ad accedere nuovamente per aggiornare la connessione dell'app al tuo account corrente. Se riscontri problemi nell'eliminazione del vecchio account in-app, considera la gestione del tuo account tramite la versione web di OsmAnd.