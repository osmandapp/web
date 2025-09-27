---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
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

Ci sono state segnalazioni da parte degli utenti di un consumo eccessivo di batteria da parte di OsmAnd, con casi in cui OsmAnd era responsabile fino al 90% dell'utilizzo della batteria. Tuttavia, abbiamo eseguito molti test e non siamo riusciti a riprodurre tali risultati.

In circostanze normali, OsmAnd consuma energia solo quando necessario per funzioni attive come la navigazione in tempo reale o la registrazione di tracce. Quando questi servizi sono attivi, compaiono nell'area di notifica di Android. Se non è visibile alcuna notifica di questo tipo, OsmAnd non sta consumando energia in background.

Diversi fattori influenzano il consumo della batteria: l'età del dispositivo, il numero di cicli di carica, la capacità della batteria, la temperatura e altro ancora. Di seguito sono riportati i tassi di consumo tipici della batteria, basati su test eseguiti su un dispositivo di fascia media:

| Funzione del dispositivo | Consumo di batteria all'ora |
| :--- | :--- |
| Dispositivo tipico in standby con solo le app standard attive | 0.5 % |
| Schermo acceso (tipicamente) | 6 % |
| GPS attivo (tipicamente) | 5 % |
| OsmAnd in esecuzione in background per la registrazione di tracce | 0.5 % |
| OsmAnd non esegue alcun servizio in background | 0 % |

#### Consumo della batteria per funzione di OsmAnd {#osmand-function-battery-consumption}

| Funzione di OsmAnd | Consumo di batteria all'ora |
| :--- | :--- |
| Registrazione traccia con schermo spento | 6 % |
| Navigazione con schermo acceso | 12 % |

Il consumo energetico complessivo dovrebbe risultare dalla somma di questi componenti, a seconda di come si utilizza OsmAnd. Si prega di segnalare se si notano deviazioni significative da questi valori tipici.


### Ottimizzazione del consumo della batteria {#optimizing-battery-consumption}

Quando si utilizza OsmAnd, diverse funzionalità possono influenzare il consumo della batteria, specialmente durante attività come la navigazione o la registrazione di tracce. Ecco alcuni suggerimenti per aiutare a gestire efficacemente l'utilizzo della batteria:

- **Controllo dello schermo durante la navigazione** (*Android*). Per risparmiare energia, è possibile configurare OsmAnd per mantenere lo schermo spento durante la navigazione, a meno che non si verifichi una svolta o un evento importante. Ciò è particolarmente utile durante la navigazione vocale. Per maggiori dettagli, fare riferimento a *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Impostazioni di navigazione a risparmio energetico**. È possibile ridurre il consumo della batteria minimizzando la frequenza di ridisegno della mappa e limitando la precisione del GPS. Per regolare queste impostazioni, andare su *Navigazione → Impostazioni → Navigazione percorso*. Per ulteriori informazioni, fare riferimento a [risparmio energetico durante la navigazione](../navigation/setup/route-navigation.md#power-saving-tips).

- **Gestione dei livelli e dei dettagli della mappa**. Disattivare le funzionalità della mappa non necessarie come rilievo 3D, linee di contorno o ombreggiatura dei rilievi. È anche possibile ridurre il numero di oggetti visualizzati (etichette POI, confini, numeri civici, ecc.) tramite il menu *Configura mappa*. La disattivazione di questi livelli aiuta a ridurre la frequenza di ridisegno della mappa, il che riduce il consumo di energia.

- **Disattivazione dello zoom automatico**. Lo zoom automatico durante la navigazione può causare frequenti ridisegni della mappa, il che aumenta l'utilizzo della batteria. La disattivazione di questa funzione può aiutare a ridurre il consumo di energia. Navigare su *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* per disattivare lo zoom automatico. Per ulteriori dettagli, visitare [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md).

- **Ottimizzazione delle impostazioni di registrazione della traccia**. Assicurarsi di regolare la precisione del GPS e l'uso dello schermo durante la registrazione della traccia per risparmiare batteria. Visitare la sezione [Risoluzione dei problemi di registrazione della traccia](../troubleshooting/track-recording-issues.md) per ulteriori indicazioni.


## Privacy {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Come eliminare la cronologia delle ricerche {#how-to-delete-search-history}

Per rimuovere la cronologia delle ricerche in OsmAnd:

1. Aprire il menu *Cerca*.
2. Toccare a lungo su qualsiasi risultato di ricerca.
3. Selezionare i risultati che si desidera eliminare o utilizzare l'opzione *Seleziona tutto* nell'angolo in alto a sinistra per eliminare tutti i risultati.
4. Toccare l'icona del *Cestino* nell'angolo in alto a destra per confermare l'eliminazione.

Per istruzioni più dettagliate sulla funzionalità di ricerca, è possibile fare riferimento a [questa guida](../search/search-history.md).


## Altro {#other}

### Problema con la connessione GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd si basa sui dati di localizzazione forniti dal tuo dispositivo Android tramite l'API di Android.

Per risolvere i problemi di connessione GPS, seguire questi passaggi:

1. **Cambia sorgente di localizzazione**. Provare diverse opzioni come Google Play Services o API Android in *Impostazioni OsmAnd → Sorgente di localizzazione*.
2. **Aggiorna l'API di Google Service**. Assicurarsi di avere l'ultima versione da [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Controlla le impostazioni di localizzazione di Android**. Andare alle Impostazioni di sistema di Android e assicurarsi che l'Accesso alla posizione sia attivato e impostato su Alta precisione. È anche possibile provare a svuotare la cache e riavviare il dispositivo. I problemi GPS possono verificarsi se edifici o oggetti di grandi dimensioni interferiscono con il segnale. Testare le prestazioni del GPS e, se il segnale è debole, impostare la precisione minima di registrazione a oltre 15 metri.
4. **Abilita il widget GPS**. Utilizzare il widget informazioni GPS per controllare le connessioni satellitari. Se non ci sono connessioni satellitari, il dispositivo non determinerà la posizione e il numero di satelliti sarà 0. Maggiori dettagli possono essere trovati nella [guida al widget GPS](../widgets/info-widgets.md#gps-info).
5. **Usa solo il segnale GPS**. Impostare il dispositivo per utilizzare solo il GPS (disabilitare la localizzazione basata su Wi-Fi o Bluetooth). Le istruzioni sono disponibili su [Supporto Google](https://support.google.com/android/answer/3467281?hl=it).
6. **Reinstalla OsmAnd**. Se i passaggi precedenti non funzionano, provare a reinstallare l'app OsmAnd per cancellare i dati errati e risolvere i problemi GPS. Prima di farlo, esportare tutti i dati salvati.
7. **Controlla la RAM del dispositivo**. Se il problema persiste, potrebbe essere dovuto a memoria insufficiente, quindi assicurarsi che il dispositivo disponga di abbastanza RAM disponibile.


### Problema di mancata corrispondenza dell'email durante l'acquisto di OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Se si riscontra un problema in cui l'email associata all'acquisto di OsmAnd Pro non corrisponde all'email dell'app OsmAnd, seguire questi passaggi per risolvere il problema:

1. **Controlla gli account Google Play e Pay**. Assicurarsi che l'email corretta sia collegata ai propri account Google Play Store e Pay. Il processo di pagamento è gestito da questi servizi e la mancata corrispondenza dell'email potrebbe verificarsi a causa di una vecchia email ancora associata al proprio profilo di pagamento.

2. **Verifica l'email dell'app OsmAnd**. Ricontrollare l'indirizzo email nell'app OsmAnd per assicurarsi che corrisponda all'email corrente di Google Play. Questo può essere fatto aprendo l'app e navigando nelle impostazioni dell'account.

3. **Ripristina acquisti**. Verificare la disponibilità e l'adeguatezza del proprio acquisto. Per fare ciò, andare su OsmAnd *Menu → Impostazioni → Acquisti*. Se i dati visualizzati non corrispondono alle proprie aspettative, provare a [Ripristinare gli acquisti](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Svuota cache e dati dell'app**. Svuotare la cache e i dati dell'app OsmAnd andando su *Impostazioni → App → OsmAnd → Archiviazione → Svuota cache e Cancella dati* del dispositivo. Questo aggiornerà l'app e rimuoverà eventuali problemi residui dal vecchio account.

5. **Reinstalla OsmAnd**. Se la pulizia della cache non risolve il problema, provare a disinstallare e reinstallare l'app. Prima di farlo, assicurarsi di eseguire il backup di tutti i dati importanti (tracce, preferiti) andando su *Menu → Impostazioni → Esporta su file*. La reinstallazione dell'app garantirà che tutti i dettagli dell'account vengano aggiornati correttamente.

6. **Disabilita proxy**. Controllare le impostazioni proxy dell'app e assicurarsi che il proxy sia disattivato andando su *Menu → Impostazioni → Impostazioni OsmAnd → Proxy*. Un proxy o una VPN potrebbero interferire con la sincronizzazione dell'account.

7. **Rieffettua l'accesso o usa il Web per la gestione dell'account**. Se si riscontrano ancora problemi, provare a disconnettersi e riconnettersi per aggiornare la connessione dell'app all'account corrente. Se si riscontrano problemi nell'eliminare il vecchio account in-app, considerare la gestione del proprio account tramite la versione web di OsmAnd.