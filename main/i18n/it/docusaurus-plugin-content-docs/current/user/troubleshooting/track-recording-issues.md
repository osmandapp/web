---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Registrazione Traccia
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Questo articolo tratta i problemi di registrazione delle tracce GPX che sono stati osservati per molto tempo in diverse versioni di Android e iOS. Per **Background**, intendiamo che l'app OsmAnd non appare in primo piano, specialmente quando lo schermo del dispositivo è spento (che è diverso dalla definizione interna di *background* nei dispositivi).

**Note**:

- A partire da Android 11 (12/2020), non esiste più l'opzione di autorizzazione di sistema *Consenti sempre* per l'accesso alla posizione da utilizzare in background, ma questo **non limita** la registrazione in background delle tracce di OsmAnd. Secondo la documentazione di Google, questo è ora considerato **utilizzo in primo piano** perché l'autorizzazione a utilizzare il servizio in primo piano viene usata internamente e la notifica di sistema che una traccia è in fase di registrazione è sempre visibile.

- Si noti che la nuova terminologia di Android può essere fuorviante:

  - **Consenti mentre usi l'app** significa che l'app può ricevere continuamente dati sulla posizione finché è visualizzata sullo schermo o ha una notifica visibile nella barra delle notifiche di *Android*, come fa OsmAnd durante la navigazione o la registrazione di un viaggio. (Tecnicamente, questa è chiamata *modalità primo piano*).

  - **Consenti sempre**, d'altra parte, significa che l'app può in linea di principio ottenere la tua posizione 'senza essere notata' senza che si applichi nessuna di queste condizioni. Ma *Android* limita la frequenza di accesso alla posizione in questa modalità (*background*) a qualcosa come una volta all'ora, che non è certamente la modalità corretta per un'app di navigazione.


## Le tracce registrate sono disturbate {#recorded-tracks-are-noisy}

Ci sono 2 tipici problemi di precisione che portano a una traccia registrata *disordinata*.

- Sosta prolungata nello stesso punto, o registrazione di punti troppo frequente (il corrispondente zig-zag esagera i valori reali)
- Segnale GPS debole o passaggio alla localizzazione basata sul segnale di rete.

Azioni di mitigazione:

- Metti in pausa le tue registrazioni mentre sei fermo, o usa il filtro *Spostamento minimo* del plugin Registrazione viaggio.
- Seleziona la spaziatura temporale o di spostamento dei tuoi punti registrati in modo appropriato per catturare la sinuosità del tuo viaggio, ma senza creare molti punti extra (la cui dispersione creerà rumore ed esagererà le fluttuazioni di distanza e altitudine).
- È anche possibile modificare una traccia in seguito e rimuovere i punti *"disturbati"*.
- Oppure puoi usare le impostazioni del *Plugin Registrazione Viaggio* per filtrare i punti *"disturbati"* già durante la registrazione, in base alla tua **esperienza** e al **dispositivo di registrazione**. Puoi filtrare i punti secondo vari criteri:
  - Punti con velocità bassa o nulla.
  - Punti con scarsa precisione (GPS 'hdop').
  - Punti più vicini di una soglia in metri.

- **API Google Services o API Android**. Puoi inoltre modificare il modo in cui OsmAnd riceve i dati di localizzazione sui dispositivi Android. In [Impostazioni OsmAnd → Sorgente di localizzazione](../personal/global-settings.md#location-source) seleziona tra **Google Play Services** e **API Android**, in molti casi passare ad **API Android** aiuta a migliorare le tracce registrate e le rende meno disturbate.


## Le tracce registrate presentano delle lacune {#recorded-tracks-have-gaps}

### Configurazione di OsmAnd per la registrazione delle tracce {#configuring-osmand-for-track-recording}

- **Impedisci registrazione autonoma**. Assicurati che l'impostazione *Impedisci registrazione autonoma* sotto Plugin/Registrazione viaggio sia disattivata per consentire a OsmAnd di registrare tracce con lo schermo spento.
- **Aggiorna OsmAnd**. Le versioni di Android utilizzano strategie diverse per ridurre il consumo di energia [terminando le applicazioni in esecuzione in background](https://dontkillmyapp.com/). La versione 3.9 o superiore utilizza un servizio in primo piano, visibile nella barra delle notifiche, [per mantenere l'app in esecuzione in background](https://dontkillmyapp.com/) sulla maggior parte delle versioni di Android. Questo è particolarmente efficace su Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Ottimizzazione di Android per la registrazione delle tracce {#optimizing-android-for-track-recording}

A partire da Android 4.4, le funzioni di risparmio energetico possono limitare l'uso della CPU, ridurre la luminosità dello schermo e terminare le app in background quando lo schermo è spento. Ciò può influire sulle prestazioni di OsmAnd per l'uso all'aperto, il rendering delle mappe e la registrazione delle tracce. Le versioni successive di Android hanno aggiunto comportamenti di risparmio energetico basati sull'intelligenza artificiale come **Batteria automatica** e **Risparmio energetico automatico**, introducendo un comportamento dinamico e ancora meno prevedibile. Per evitare problemi di registrazione, almeno inizialmente o per il debug, **considera di disabilitare completamente le funzioni di risparmio energetico**. Gli utenti segnalano che l'impatto sulla durata della batteria per la maggior parte dei dispositivi è tollerabile.

- **Escludi OsmAnd dall'*Ottimizzazione batteria*.** Nelle *Impostazioni* del tuo dispositivo Android, trova OsmAnd sotto *App*, *Applicazioni* o *Gestione app*. Individua la sezione *Batteria*, *Risparmio energetico* o *Consumo energetico* ed escludi OsmAnd dall'ottimizzazione della batteria. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Disabilita la modalità *Risparmio energetico*.** Questa modalità ha un'alta probabilità di impattare/terminare anche i servizi in primo piano, come la registrazione del viaggio di OsmAnd.

- **Disabilita *Risparmio energetico adattivo*.** Avere questa opzione 'attiva' applicherà politiche a livello di sistema, basate sul modello di utilizzo, per disattivare/attivare la modalità 'risparmio energetico' di cui sopra.

- **Disabilita *Batteria adattiva* a meno che non usi regolarmente l'app OsmAnd.** La *Batteria adattiva* funziona per singola app, anch'essa basata sul modello di utilizzo. Il suo effetto su un'app specifica può essere ridotto esentando tale app dall'*Ottimizzazione batteria* (come impostare su *Non ottimizzata*). Tuttavia, la *Batteria adattiva* può ancora terminare i servizi in primo piano come la registrazione del viaggio di OsmAnd, se il dispositivo giudica che OsmAnd si trovi nel tuo gruppo di app 'usate raramente'.

### Controllare il comportamento delle app in background di iOS {#control-the-behavior-of-ios-background-apps}

iOS può sospendere o arrestare automaticamente le app in background quando le risorse di sistema vengono riallocate. OsmAnd non può sovrascrivere questo comportamento. Se la registrazione della traccia viene interrotta quando il dispositivo è bloccato, ciò può lasciare delle lacune nella registrazione. È possibile modificare queste lacune utilizzando lo strumento [Pianifica un percorso](https://docs.osmand.net/docs/user/plan-route/create-route).

Per maggiori dettagli su come iOS gestisce il tracciamento della posizione, consulta la documentazione di Apple [qui](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Impostazioni di alimentazione testate per Android 9, 10 e 11 (Hardy, 25-08-2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Le seguenti impostazioni di alimentazione sono state testate con successo su Android 9, 10 e successivamente 11 (su dispositivi Samsung) per far sì che OsmAnd registri le tracce senza interruzioni. Si prega di rivedere queste **10 impostazioni** e impostarle di conseguenza:

- (1) **Risparmio energetico (modalità)** = OFF (o *Ottimizzato* in Android 10)
- (2) **Risparmio energetico adattivo** = OFF (Quando è ON, la modalità di risparmio energetico potrebbe a volte essere attivata, impedendo a OsmAnd di registrare.)
- (3) **Batteria adattiva** = ON (Non influisce comunque sulle app esentate dall'ottimizzazione della batteria, vedi (9) sotto, **a meno che l'app non venga usata raramente**. Per sicurezza, impostare su OFF.)
- (4) **Sospendi app non usate** = ON (Ma OsmAnd è esentato dall'ottimizzazione della batteria, vedi (9) sotto!)
- (5) **Disattiva automaticamente app non usate** = OFF (Sembra presente solo in Android 9.)
- (6) **Ottimizza impostazioni** = OFF (In Android 10 sotto *Assistenza dispositivo / Avanzate*, in Android 11 sembra essere scomparso.)
- (7) **Ottimizzazione automatica (giornaliera)** = ON (Non ha effetto qui.)
- (8) **Riavvio automatico (a orari prestabiliti)** = OFF (Non ha effetto qui.)
- (9) **Ottimizza uso batteria** (Sotto *Impostazioni / App / OsmAnd / Batteria* di Android o *Impostazioni / App / 3-puntini / Accesso speciale / Ottimizza uso batteria / Tutte / OsmAnd*) = Escludere OsmAnd dall'ottimizzazione della batteria (fortemente consigliato, anche se non necessario se l'app viene avviata di frequente dall'utente).
- (10) **Consenti attività in background** = ON per OsmAnd sotto *App / OsmAnd / Batteria* per Android 11

Alcune di queste impostazioni interagiscono tra loro, quindi siate precisi. La migliore ricerca per le impostazioni di cui sopra per nome (con e senza le espressioni tra parentesi). A seconda della vostra versione di Android, potrebbero essere sparse in queste varie schermate delle *Impostazioni di Android*:

- *Assistenza dispositivo*
- *Assistenza dispositivo / 3-puntini / Automazione*
- *Assistenza dispositivo / Avanzate*
- *Assistenza dispositivo / Batteria*
- *Assistenza dispositivo / Batteria / Impostazioni*
- *Assistenza dispositivo / Batteria / Gestione alimentazione app*
- *Assistenza dispositivo / Batteria / Altre impostazioni batteria*


## Come tracciare la distanza percorsa {#how-to-track-traveled-distance}

OsmAnd non ha un widget speciale simile a un contachilometri, è possibile utilizzare il [plugin Registrazione viaggio](../plugins/trip-recording.md#new-track-recording) per tracciare la distanza percorsa e azzerarla quando necessario.


## OsmAnd 3.9: Problemi di altitudine con Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play ha cambiato la sua politica e, per conformarsi, OsmAnd, a partire dalla versione 3.9 (escluse le build Nightly, F-Droid e Huawei) è tenuto a utilizzare i Google Play Services per ottenere i fix di posizione durante l'esecuzione in background (cioè, nella terminologia di Android, come servizio in primo piano con una notifica di sistema visibile).

Dopo questa modifica, sembra esserci un problema con la registrazione dell'altitudine: apparentemente, i Google Play Services interpolano la misurazione dell'altitudine in modo molto aggressivo, vedi [issue GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Questo problema riguarda Android 10, forse non Android 11. L'[issue](https://issuetracker.google.com/issues/180218747) è già stata segnalata sul sito di Google e probabilmente sarà risolta il 09-03-2021.

Come soluzione alternativa, in [*Impostazioni OsmAnd → Sorgente di localizzazione*](../personal/global-settings.md#location-source) è possibile cambiare la sorgente di localizzazione da **Google Play Services** a **API Android**.


## OsmAnd 3.9: Riattivazione GPS ora sostituita da servizio continuo in primo piano (12/2020) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

A partire dalla versione 3.9, quando è richiesta la registrazione della traccia o la navigazione, OsmAnd supporta continuamente il GPX tramite il servizio in background di *Android*, e questo è visibile come una notifica di sistema di *Android*.

La strategia precedente di utilizzare una modalità di sospensione e una riattivazione periodica del GPS è stata rimossa dal nostro codice (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), come richiesto dalle nuove restrizioni di Google Play sull'accesso alla posizione in background. Di conseguenza, le seguenti sezioni (A) e (B) si applicano solo alle versioni di OsmAnd precedenti alla 3.9:

**<del> (A) Strategia di riattivazione del GPS</del>**

- (A1) Mentre OsmAnd è in uso, ad es. Navigazione. Manteniamo il modulo GPS del sistema sempre acceso, poiché le informazioni continue sulla posizione sono fondamentali qui. L'effetto sull'uso della batteria (ordine di grandezza) sembra essere di circa il 5% all'ora su sistemi più vecchi fino ad Android 4.4, e del 2-3% per i sistemi più recenti.
- (A2) Per la registrazione di tracce in *background* senza navigazione simultanea. Per la registrazione con intervalli fino a 15 secondi, manteniamo anche il GPS acceso, altre strategie non risparmieranno molta energia della batteria.
- (A3) Per intervalli >=30sec, accendiamo il GPS solo per ogni punto di campionamento. Questo ha un effetto notevole sulla precisione dei punti registrati ma riduce l'uso della batteria a un ordine di grandezza dell'1,2% all'ora per la registrazione di tracce a 30 secondi.

**<del> (B) Problemi di riattivazione del GPS</del>**

Per ottenere la riattivazione del GPS, finora utilizziamo l'Alarm Manager di Android per riattivare periodicamente il dispositivo (anche dalla modalità Doze, introdotta in Android 6). Le nuove versioni di Android hanno introdotto i seguenti problemi:

- **(B1) setRepeating() di Alarm Manager è diventato impreciso a partire da Android 4.4:**  
Mitigazione: Ora usiamo *setRepeating()* solo fino ad Android 4.2, il nuovo metodo *setExact()* a partire da Android 4.4, e *setExactAndAllowWhileIdle()* per Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) A partire da Android 4.4, i sistemi limitano il numero di volte in cui *setExact()* viene eseguito ripetutamente** a, ad esempio, una volta ogni 5 o addirittura 15 minuti. (Il valore effettivo sembra essere estremamente specifico del dispositivo.)  
Nessuna buona soluzione trovata per ora. La mitigazione attuale è che non usiamo la riattivazione tramite Alarm Manager, ma manteniamo il GPS sempre acceso per la registrazione di tracce in background su dispositivi con Android 5+ per tutti gli intervalli di registrazione inferiori a 5 minuti. Questo produce tracce affidabili e precise al costo di un maggiore consumo della batteria. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))