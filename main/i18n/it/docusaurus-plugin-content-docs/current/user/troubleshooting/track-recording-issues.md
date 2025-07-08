---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title:  Registrazione tracce
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Questo articolo tratta i problemi di registrazione delle tracce GPX che sono stati osservati per molto tempo in diverse versioni di Android e iOS. Per **Sfondo**, intendiamo che l'app OsmAnd non appare in primo piano, specialmente quando lo schermo del dispositivo è spento (che è diverso dalla definizione interna di *sfondo* nei dispositivi).

**Note**:

- A partire da Android 11 (2020/12), non esiste più l'opzione di autorizzazione di sistema *Consenti sempre* l'accesso alla posizione da utilizzare in background, ma questo **non limita** la registrazione in background delle tracce OsmAnd. Secondo la documentazione di Google, questo è ora considerato **utilizzo in primo piano** perché l'autorizzazione all'uso del servizio in primo piano viene utilizzata internamente e la notifica di sistema che una traccia è in fase di registrazione è sempre visibile.

- Si noti che la nuova terminologia di Android può essere fuorviante:

  - **Consenti durante l'utilizzo dell'app** significa che l'app può ricevere continuamente dati sulla posizione finché viene visualizzata sullo schermo o ha una notifica visibile nella barra di notifica di *Android*, come OsmAnd ha durante la navigazione o la registrazione del viaggio. (Tecnicamente, questo è chiamato *modalità in primo piano*).

  - **Consenti sempre**, d'altra parte, significa che l'app può in linea di principio ottenere la tua posizione 'inosservata' senza che si applichi nessuna di queste condizioni. Ma *Android* limita la frequenza di accesso alla posizione in questa modalità (*background*) a qualcosa come una volta all'ora, che non è certamente la modalità corretta per un'app di navigazione.


## Le tracce registrate sono rumorose {#recorded-tracks-are-noisy}

Ci sono 2 tipici problemi di precisione che portano a una traccia registrata *disordinata*.

- Stare fermi nello stesso posto per un periodo prolungato.
- Segnale GPS scarso e passaggio alla localizzazione basata sul segnale di rete.

Azioni che puoi eseguire:

- Puoi evitare tali problemi utilizzando **Pausa** per interrompere la registrazione in tali condizioni.
- È anche possibile modificare una traccia in seguito e rimuovere i punti *"rumorosi"*.
- Oppure puoi utilizzare le impostazioni del *Plugin di registrazione viaggio* per filtrare i punti *"rumorosi"* già durante la registrazione, in base alla tua **esperienza** e al **dispositivo di registrazione**. Puoi filtrare i punti in base a vari criteri:
  - Punti con velocità bassa o nulla.
  - Punti con precisione scarsa (GPS 'hdop').
  - Punti più vicini di una soglia in metri.

- **API di Google Services o API di Android**. Puoi ulteriormente modificare il modo in cui OsmAnd riceve i dati sulla posizione sui dispositivi Android. In [Impostazioni OsmAnd → Origine posizione](../personal/global-settings.md#location-source) seleziona tra **Google Play Services** e **API di Android**, in molti casi il passaggio all'**API di Android** aiuta a migliorare le tracce registrate e le rende meno rumorose.


## Le tracce registrate presentano interruzioni {#recorded-tracks-have-gaps}

A partire da Android 4.4, le funzionalità di risparmio energetico possono limitare l'utilizzo della CPU, ridurre la luminosità dello schermo e terminare le app in background quando lo schermo è spento. Ciò può influire sulle prestazioni di OsmAnd per l'uso all'aperto, il rendering delle mappe e la registrazione delle tracce. Per evitare problemi, considera di disabilitare completamente le funzionalità di risparmio energetico. Sulla base dell'esperienza utente, ciò ha un impatto minimo sulla durata della batteria per la maggior parte dei dispositivi.

### Configurazione di OsmAnd per la registrazione delle tracce {#configuring-osmand-for-track-recording}

- **Impedisci la registrazione autonoma**. Assicurati che l'impostazione *Impedisci la registrazione autonoma* in Plugin/Registrazione viaggio sia disattivata per consentire a OsmAnd di registrare le tracce con lo schermo spento.
- **Aggiorna OsmAnd**. Le versioni di Android utilizzano diverse strategie per ridurre il consumo energetico [terminando le applicazioni in esecuzione in background](https://dontkillmyapp.com/). La versione 3.9 o superiore utilizza un servizio in primo piano, visibile nella barra di notifica, [per mantenere l'app in esecuzione in background](https://dontkillmyapp.com/) sulla maggior parte delle versioni di Android. Ciò è particolarmente efficace su Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Ottimizzazione di Android per la registrazione delle tracce {#optimizing-android-for-track-recording}

- **Escludi OsmAnd dall'ottimizzazione energetica**. Nelle impostazioni di Alimentazione o Risparmio energetico del tuo dispositivo Android, trova OsmAnd in *App*, *Applicazioni* o *Gestore app*. Individua *Risparmio energetico* o *Consumo energetico* ed escludi OsmAnd dall'ottimizzazione energetica. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))

- **Disabilita la modalità di risparmio energetico**. Disabilitare completamente il risparmio energetico di Android può aiutare, specialmente sulle versioni precedenti di Android. Ciò può risolvere i problemi di prestazioni durante la registrazione delle tracce o la navigazione.

### Controlla il comportamento delle app in background di iOS {#control-the-behavior-of-ios-background-apps}

iOS può sospendere o interrompere automaticamente le app in background quando le risorse di sistema vengono riallocate. OsmAnd non può ignorare questo comportamento. Se la registrazione delle tracce viene interrotta quando il dispositivo è bloccato, ciò può lasciare interruzioni nella registrazione. Puoi modificare queste interruzioni utilizzando lo strumento [Pianifica un percorso](https://docs.osmand.net/docs/user/plan-route/create-route).

Per maggiori dettagli su come iOS gestisce il tracciamento della posizione, consulta la documentazione di Apple [qui](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Impostazioni di alimentazione testate per Android 9, 10 e 11 (Hardy, 25-08-2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Le seguenti impostazioni di alimentazione sono state testate con successo su Android 9, 10 e successivamente 11 (su dispositivi Samsung) per far registrare a OsmAnd le tracce senza interruzioni. Si prega di rivedere queste **10 impostazioni** e impostarle di conseguenza:

- (1) **Risparmio energetico (modalità)** = OFF (o *Ottimizzato* in Android 10)
- (2) **Risparmio energetico adattivo** = OFF (Quando ON, la modalità di risparmio energetico medio potrebbe essere attivata a volte, il che impedisce a OsmAnd di registrare)
- (3) **Batteria adattiva** = ON (non dovrebbe comunque influire sulle app esentate dall'ottimizzazione della batteria, vedi (9) sotto)
- (4) **Metti in sospensione le app inutilizzate** = OFF (ON probabilmente va bene anche se OsmAnd è esentato dall'ottimizzazione della batteria, vedi (9) sotto)
- (5) **Disabilita automaticamente le app inutilizzate** = OFF (sembra presente solo in Android 9)
- (6) **Ottimizza impostazioni** = OFF (in Android 10 sotto *Assistenza dispositivo / Avanzate*, in Android 11 sembra scomparso)
- (7) **Ottimizzazione automatica (giornaliera)** = ON (probabilmente non rilevante)
- (8) **Riavvio automatico (a orari prestabiliti)** = OFF (probabilmente non rilevante)
- (9) **Ottimizza utilizzo batteria** (sotto *App / OsmAnd / Batteria* o *App / 3 puntini / Accesso speciale / Ottimizza utilizzo batteria / Tutte / OsmAnd*) = consigliabile esentare OsmAnd dall'ottimizzazione della batteria (anche se non necessario su tutti i dispositivi)
- (10) **Consenti attività in background** = ON per OsmAnd sotto *App / OsmAnd / Batteria* per Android 11

Alcune di queste impostazioni interagiscono, quindi sii preciso. La migliore ricerca per le impostazioni di cui sopra per nome (con e senza le espressioni tra parentesi). A seconda della tua versione di Android, potrebbero essere sparse su queste varie *schermate delle impostazioni di Android*:

- *Assistenza dispositivo*
- *Assistenza dispositivo / 3 puntini / Automazione*
- *Assistenza dispositivo / Avanzate*
- *Assistenza dispositivo / Batteria*
- *Assistenza dispositivo / Batteria / Impostazioni*
- *Assistenza dispositivo / Batteria / Gestione energia app*
- *Assistenza dispositivo / Batteria / Altre impostazioni batteria*


## Come tenere traccia della distanza percorsa {#how-to-track-traveled-distance}

OsmAnd non dispone di un widget speciale simile a un contachilometri, puoi utilizzare il [plugin Registrazione viaggio](../plugins/trip-recording.md#new-track-recording) per tenere traccia della distanza percorsa e reimpostarla quando necessario.


## OsmAnd 3.9: Problemi di altitudine quando si utilizzano i Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play ha modificato la sua politica e, per conformarsi, OsmAnd, a partire dalla versione 3.9 (escluse le build Nightly, F-Droid e Huawei) è tenuto a utilizzare i Google Play Services per ottenere correzioni di posizione durante l'esecuzione in background (ovvero, nella terminologia di Android, come servizio in primo piano con una notifica di sistema visibile).

Dopo questa modifica, sembra esserci un problema con la registrazione dell'altitudine: apparentemente, i Google Play Services interpolano la misurazione dell'altitudine in modo molto aggressivo, vedi [problema GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Questo problema riguarda Android 10, possibilmente non Android 11. Il [problema](https://issuetracker.google.com/issues/180218747) è già stato segnalato sul sito web di Google e sarà probabilmente risolto il 09-03-2021.

Come soluzione alternativa, in [*Impostazioni OsmAnd → Origine posizione*](../personal/global-settings.md#location-source) puoi cambiare l'origine della posizione da **Google Play Services** a **API di Android**.


## OsmAnd 3.9: Il risveglio del GPS è ora sostituito da un servizio in primo piano continuo (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

A partire dalla versione 3.9, quando è richiesta la registrazione della traccia o la navigazione, OsmAnd supporta continuamente il GPX tramite il servizio in background di *Android*, e questo è visibile come una notifica di sistema di *Android*.

La precedente strategia di utilizzo di una modalità doze e del risveglio periodico del GPS è stata rimossa dal nostro codice (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), come richiesto dalle nuove restrizioni di Google Play sull'accesso alla posizione in background. Di conseguenza, le seguenti sezioni (A) e (B) si applicano solo alle versioni di OsmAnd precedenti alla 3.9:

**<del> (A) Strategia di risveglio del GPS</del>**

- (A1) Mentre OsmAnd è in uso, ad esempio Navigazione. Manteniamo il modulo GPS del sistema sempre attivo, poiché le informazioni continue sulla posizione sono fondamentali qui. L'effetto sull'utilizzo della batteria (ordine di grandezza) sembra essere circa il 5% all'ora sui sistemi più vecchi fino ad Android 4.4 e il 2-3% per i sistemi più recenti.
- (A2) Per la registrazione delle tracce in *background* senza navigazione simultanea. Per la registrazione con intervalli fino a 15 secondi, manteniamo anche il GPS attivo, altre strategie non risparmieranno molta energia della batteria.
- (A3) Per intervalli >=30 secondi, attiviamo il GPS solo per ogni punto di campionamento. Ciò ha un effetto notevole sulla precisione dei punti registrati ma riduce l'utilizzo della batteria a un ordine di grandezza dell'1,2% all'ora per la registrazione delle tracce di 30 secondi.

**<del> (B) Problemi di risveglio del GPS</del>**

Per ottenere il risveglio del GPS, finora utilizziamo l'Android Alarm Manager per risvegliare periodicamente il dispositivo (anche dalla modalità Doze, introdotta in Android 6). Le nuove versioni di Android hanno introdotto i seguenti problemi:

- **(B1) setRepeating() di Alarm Manager è diventato inesatto a partire da Android 4.4:**
Mitigazione: Ora utilizziamo *setRepeating()* solo fino ad Android 4.2, il nuovo metodo *setExact()* a partire da Android 4.4 e *setExactAndAllowWhileIdle()* per Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) A partire da Android 4.4, i sistemi limitano il numero di volte in cui *setExact()* viene eseguito ripetutamente** a, ad esempio, una volta ogni 5 o anche 15 minuti. (Il valore effettivo sembra variare enormemente a seconda del dispositivo.)
Nessuna buona soluzione trovata per ora. L'attuale mitigazione è che non utilizziamo il risveglio di Alarm Manager, invece manteniamo il GPS sempre attivo per la registrazione delle tracce in background sui dispositivi con Android 5+ per tutti gli intervalli di registrazione inferiori a 5 minuti. Ciò produce tracce affidabili e precise a costo di un maggiore utilizzo della batteria. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))