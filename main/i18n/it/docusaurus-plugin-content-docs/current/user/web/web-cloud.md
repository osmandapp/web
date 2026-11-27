---
source-hash: e69343f9eb21e770166c3f64840279d4909964e16e57f6ff88c67cf26d0d4397
sidebar_position: 2
sidebar_label:  Account
title: Account OsmAnd
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

L'accesso con un account OsmAnd trasforma il [OsmAnd Web Planner](https://osmand.net/map) da un semplice visualizzatore di mappe in un tuo spazio di lavoro personale. Lo stesso account che utilizzi nell'app mobile collega il sito web ai tuoi dati OsmAnd Cloud e acquisti, in modo da poter accedere al tuo contenuto salvato e alle sottoscrizioni in un unico posto sul web.


## Autorizzazione {#authorization}

### Registrazione {#sign-up}

Per accedere alle funzionalità di OsmAnd Web, devi creare un account. Segui la procedura di registrazione:

- Vai al [**Portale Mappe di OsmAnd**](https://osmand.net/map).
- Apri il menu **Account**.
- Seleziona **Crea nuovo account**. Si apre la finestra di dialogo Crea nuovo account.
- Nel campo **Email**, inserisci l'indirizzo email da utilizzare per il tuo account OsmAnd e fai clic su **Continua**.
- Un codice di verifica viene inviato a questo indirizzo email. Controlla la tua casella di posta (e la cartella spam se necessario).
- Nella finestra di dialogo successiva, inserisci il codice di verifica e fai clic su **Continua** per confermare la tua email. Se non hai ricevuto il codice, usa il collegamento **Non ho ricevuto il codice di verifica** e segui le istruzioni.

Dopo la verifica del codice, il tuo account web viene creato e accedi automaticamente.

![Registrazione su OsmAnd Web](@site/static/img/web/web_sign_up.png) ![Registrazione su OsmAnd Web](@site/static/img/web/web_ver_code.png)


### Accesso {#login}

Se hai già un account OsmAnd, puoi accedere al [**Portale Mappe di OsmAnd**](https://osmand.net/map) con la stessa email e password. Vai al menu **Account** e scegli l'opzione **Accedi**. Nella finestra di dialogo che si apre, inserisci l'indirizzo email collegato al tuo account OsmAnd, digita la tua password e seleziona **Continua**. Dopo un accesso riuscito, si apre il pannello Account OsmAnd e puoi lavorare con i tuoi dati, acquisti e impostazioni.


## Gestione dell'account {#managing-account}

### I miei dati {#my-data}

Puoi scaricare i backup creati e sincronizzati dal tuo dispositivo mobile tramite **OsmAnd Cloud**.  
Vai a: *Menu Generale → Account → I miei dati (OsmAnd Cloud) → Scarica tutto*

Questa sezione visualizza:

- Il numero di file memorizzati nel tuo cloud.
- Il volume totale di archiviazione utilizzato.
- Lo spazio di archiviazione cloud disponibile.

> 💡 Qui appariranno solo i backup creati su dispositivi in cui **OsmAnd Cloud** è abilitato.

Se vuoi salvare una copia di tutti i tuoi dati, usa **Scarica tutto**. Si apre una finestra di dialogo in cui puoi:

- Selezionare quali dati esportare (ad esempio, *I miei luoghi, Impostazioni, Risorse, Mappe*),
- Scegliere il formato di esportazione (*ZIP o OSF*).
- Visualizzare una stima della dimensione e del tempo di download.

Fai clic su **Scarica backup** per avviare l'esportazione e salvare l'archivio sul tuo computer.

![Account OsmAnd Web](@site/static/img/web/web_download_all.png)

### Pagamenti e acquisti {#payments-and-purchases}

Questa sezione mostra tutti i prodotti e le sottoscrizioni collegati al tuo account OsmAnd. Per aprirla,  
Vai a: *Menu Generale → Account → Pagamenti e acquisti*

Qui puoi visualizzare un elenco di tutti gli acquisti associati alla tua email:
- Piani gratuiti e a pagamento (come OsmAnd Start o OsmAnd Pro).
- Prodotti una tantum (ad es. Maps+ o edizioni speciali).
- Sottoscrizioni che si rinnovano mensilmente o annualmente.

Per ogni elemento l'elenco mostra:
- Nome del prodotto e icona.
- Tipo – sottoscrizione mensile, sottoscrizione annuale o pagamento una tantum.
- Stato – *Attivo, Scaduto o Annullato*.
- Informazioni sulla data.

Se fai clic su un prodotto nell'elenco, si apre la pagina dei dettagli. Lì puoi vedere dove è stato acquistato il prodotto (*Google Play, Apple App Store, Huawei AppGallery, Amazon* o *OsmAnd Web*) e trovare un collegamento o istruzioni su come gestire o annullare la sottoscrizione nel negozio corrispondente. Se il prodotto è stato acquistato su OsmAnd Web (FastSpring), la pagina dei dettagli mostra un collegamento **Gestisci abbonamento** che apre il portale di gestione account FastSpring, dove puoi aggiornare il metodo di pagamento, annullare o riattivare la sottoscrizione, modificare il piano o scaricare le fatture.

Se non ci sono ancora acquisti collegati al tuo account, questa sezione mostra uno stato vuoto con il messaggio **Non hai ancora acquisti** e un pulsante **Scopri di più** che porta a una pagina con i piani OsmAnd disponibili e le opzioni di aggiornamento.

Per maggiori dettagli sull'utilizzo dei tuoi acquisti su diverse piattaforme, leggi l'articolo [accesso multipiattaforma](../purchases/cross.md).

![Account OsmAnd Web](@site/static/img/web/web_purchases.png)

### Sincronizzazione cloud {#cloud-sync}

La Sincronizzazione cloud ti consente di accedere ai dati che hai sincronizzato su OsmAnd Cloud direttamente sul [Portale Mappe Web](https://osmand.net/map/). Una volta effettuato l'accesso con il tuo account OsmAnd Start o OsmAnd Pro, il sito web visualizza Preferiti, Tracce e file di backup che hai precedentemente sincronizzato dall'app mobile. È un modo semplice per visualizzare il tuo contenuto cloud su uno schermo più grande e scaricare i tuoi backup quando ne hai bisogno.

Questi elementi diventano visibili nel menu subito dopo l'accesso al sito web. Per aggiornare queste informazioni, devi sincronizzare i tuoi dati dai tuoi dispositivi utilizzando l'azione [Sincronizza ora](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) nell'app mobile.

La disponibilità della Sincronizzazione cloud dipende dal tipo di account:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – sincronizza [Preferiti](../web/web-favorites.md) e li visualizza sul web.
- OsmAnd Pro – sincronizza [Tracce](../web/web-tracks.md), Preferiti e [Backup](#my-data), e sblocca l'accesso completo al web ai dati cloud.

![Traccia in OsmAnd Web](@site/static/img/web/web_track_start.png) ![Traccia in OsmAnd Web](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Quando sei connesso, la sezione OsmAnd Cloud appare in Menu → Impostazioni e include Modifiche e Cestino.

L'opzione **Modifiche** mostra un elenco cronologico dei file memorizzati nel tuo account OsmAnd Cloud. Gli elementi sono raggruppati per mese e includono il nome del file, il tipo di modifica (ad esempio, aggiunto, modificato o eliminato), l'ora dell'ultimo aggiornamento e il dispositivo che l'ha creato. Per ogni voce, puoi aprire il menu a tre punti e scegliere *Scarica* per salvare il file selezionato sul tuo computer, oppure *Elimina*.

L'opzione **Cestino** contiene i file che sono stati eliminati da OsmAnd Cloud. L'elenco è anch'esso raggruppato per mese e mostra quando ogni file è stato rimosso e da quale dispositivo. Usa il menu a tre punti accanto a un file per scaricarne una copia (*Scarica*), ripristinarlo (*Ripristina dal cestino*: il file torna in OsmAnd Cloud e diventa di nuovo disponibile nei tuoi dati) o rimuoverlo permanentemente (*Elimina subito*). Questo aiuta a prevenire la perdita accidentale di dati pur consentendo di liberare lo spazio di archiviazione cloud quando sei sicuro che un file non è più necessario. Puoi anche eliminare tutti gli elementi cancellati in una volta sola facendo clic sull'icona del Cestino nell'intestazione del pannello Cestino. Si apre la finestra di dialogo **Svuota cestino**, dove confermi l'eliminazione per rimuovere permanentemente tutti i file dal Cestino.

![Cloud di OsmAnd Web](@site/static/img/web/web_changes.png) ![Cloud di OsmAnd Web](@site/static/img/web/web_trash.png)

### App collegate {#connected-apps}

La sezione **App connesse** consente di collegare servizi esterni al tuo account OsmAnd. Attualmente supporta l'integrazione con [Garmin Connect™](https://connect.garmin.com/app/), che permette la sincronizzazione automatica delle attività Garmin. Per aprirla, vai a: *Mappa OsmAnd Web → Account → App connesse*.

L'integrazione con Garmin Connect è disponibile solo per gli utenti [OsmAnd Pro](https://osmand.net/docs/user/purchases/). Se non hai un abbonamento Pro attivo, selezionando l'elemento Garmin Connect si apre la pagina dei prezzi.

Per collegare il tuo account Garmin Connect™, fai clic su **Connetti**. Verrai reindirizzato alla pagina di autorizzazione Garmin, dove dovrai accedere e concedere l'accesso ai tuoi dati Garmin Connect™. Durante l'autorizzazione, puoi abilitare la sincronizzazione delle attività recenti per importare i dati degli ultimi 30 giorni. Le attività più vecchie di 30 giorni non possono essere importate automaticamente.

Dopo la connessione, OsmAnd crea una cartella dedicata Garmin Connect nella [sezione Tracce](./web-tracks.md) e inizia a importare automaticamente le attività. Le nuove attività registrate in Garmin Connect™ vengono aggiunte a questa cartella senza importazione manuale. La cartella viene inoltre sincronizzata con le app mobili OsmAnd quando [OsmAnd Cloud](../personal/osmand-cloud.md) è abilitato.

Il menu Garmin Connect contiene due sezioni: **I miei dati** e **Impostazioni**. In I miei dati, puoi visualizzare il numero di attività sincronizzate, aprire l'ultima attività recuperata o aprire la pagina delle attività Garmin Connect™ utilizzando il pulsante **Visualizza su Garmin Connect™**. In Impostazioni, puoi configurare quali tipi di attività sincronizzare con l'opzione Attività da sincronizzare.

Le attività sono raggruppate in categorie come Ciclismo, Camminata e corsa, Sport acquatici, Sport invernali e altri. I singoli tipi di attività possono essere abilitati o disabilitati. Per impostazione predefinita, dopo la connessione vengono selezionati tutti i tipi di attività supportati.

Per disconnettere il tuo account Garmin Connect™, vai su *Impostazioni → Disconnetti* e conferma l'azione. Le tracce precedentemente importate rimangono nella cartella Garmin Connect, ma le nuove attività non verranno più sincronizzate.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Risoluzione dei problemi {#troubleshooting}

### Reimposta password {#reset-password}

Se non ricordi la tua password, usa il collegamento **Non ho o ho dimenticato la password** nella finestra di dialogo di accesso. Si apre il pannello **Cambia o reimposta password**. Inserisci l'indirizzo email utilizzato per creare il tuo account e fai clic su **Continua**. Un messaggio con un codice di verifica viene inviato a questa email. Nella schermata successiva, digita il codice di verifica e la tua nuova password, quindi seleziona **Continua** per confermare. Quando il codice è accettato, la tua password viene aggiornata e puoi accedere a OsmAnd Web con le nuove credenziali.

![Account OsmAnd Web](@site/static/img/web/web_password.png)

### Cambia indirizzo email {#change-email-address}

Per aggiornare il tuo indirizzo email,  
vai a *Menu Generale → Account → Email → ⋮ → Cambia email*

Appare la finestra di dialogo Cambia email. Un codice di verifica viene inviato all'indirizzo email corrente. Inserisci questo codice nel campo **Codice dalla vecchia email**, specifica il nuovo indirizzo in **Nuova email**, quindi seleziona **Avanti**. Un secondo codice di verifica viene inviato al nuovo indirizzo email. Inseriscilo nel campo **Codice dalla nuova email** e seleziona **Fine**. Quando il codice viene accettato, appare il messaggio *Email cambiata con successo*. Per motivi di sicurezza, una notifica viene inviata anche al tuo precedente indirizzo email.

![Account OsmAnd Web](@site/static/img/web/web_email_new.png)

### Disconnessione ed eliminazione dell'account {#logout-and-delete}

![Account OsmAnd Web](@site/static/img/web/web_logout_new.png)

Il pannello Account OsmAnd contiene i controlli per terminare la sessione web corrente e rimuovere permanentemente l'account.

Per disconnetterti, apri Account OsmAnd e usa il pulsante **Esci** nell'angolo in alto a destra del pannello (icona con una freccia che esce da un quadrato). Selezionando Esci si chiude il pannello dell'account e termina la sessione attiva sul sito web.

Per eliminare un account, seleziona **Elimina account** in fondo al pannello Account OsmAnd. Appare una finestra di dialogo di conferma con il messaggio *“Vuoi davvero farlo?”* e una breve spiegazione che tutti i dati e i dettagli dell'account verranno rimossi da OsmAnd Cloud e i dispositivi secondari perderanno l'accesso alle funzionalità a pagamento. Un codice di verifica viene inviato all'indirizzo email dell'account. Inserisci l'indirizzo email del tuo account nel campo **Il tuo indirizzo email**. Se il campo è vuoto o l'indirizzo non corrisponde all'account con cui hai effettuato l'accesso, appare un errore sotto il campo e non viene inviato nulla. Inserisci il codice nel campo **Codice dall'email**. Se il codice non è corretto, appare un errore sotto questo campo. Scegli **ELIMINA ACCOUNT** per completare il processo. Questa operazione è permanente e non può essere annullata.

![Account OsmAnd Web](@site/static/img/web/web_delete.webp)


## Articoli correlati {#related-articles}

- [Introduzione](./web-overview.md)
- [Acquisti multipiattaforma](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Tracce](./web-tracks.md)