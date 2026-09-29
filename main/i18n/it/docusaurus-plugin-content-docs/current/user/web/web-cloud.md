---
source-hash: 6d86091f99fcc3a40ed293334c95361fd6142d9eab867812422962bbd0783539
sidebar_position: 2
sidebar_label:  Account
title: OsmAnd Account
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

Per accedere alle funzionalità di OsmAnd Web, è necessario creare un account. Utilizzare il flusso di Registrazione:

- Andare al [**Portale Mappe di OsmAnd**](https://osmand.net/map).
- Aprire il menu **Account**.
- Selezionare **Crea nuovo account**. Si apre la finestra di dialogo Crea nuovo account.
- Nel campo **Email**, inserire l'indirizzo email da utilizzare per il tuo account OsmAnd e fare clic su **Continua**.
- Un codice di verifica viene inviato a questo indirizzo email. Controlla la tua casella di posta (e la cartella spam se necessario).
- Nella finestra di dialogo successiva, inserire il Codice di verifica e fare clic su **Continua** per confermare la tua email. Se non hai ricevuto il codice, utilizzare il collegamento **I didn't receive verification code** e seguire le istruzioni.

Dopo la verifica del codice, il tuo account web viene creato e accedi automaticamente.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Accesso {#login}

Se hai già un account OsmAnd, puoi accedere al [**Portale Mappe di OsmAnd**](https://osmand.net/map) con la stessa email e password. Andare al menu **Account** e scegliere l'opzione **Log in option**. Nella finestra di dialogo che si apre, inserire l'indirizzo email collegato al tuo account OsmAnd, digitare la tua password e selezionare **Continua**. Dopo un accesso riuscito, si apre il pannello Account OsmAnd e puoi lavorare con i tuoi dati, acquisti e impostazioni.


## Gestione dell'account {#managing-account}

### I miei dati {#my-data}

È possibile scaricare i backup creati e sincronizzati dal tuo dispositivo mobile tramite **OsmAnd Cloud**.  
Andare a: *Menu Generale → Account → My data (OsmAnd Cloud) → Download all*

Questa sezione visualizza:

- Il numero di file memorizzati nel tuo cloud.
- Il volume totale di archiviazione utilizzato.
- Lo spazio di archiviazione cloud disponibile.

> 💡 Qui appariranno solo i backup creati su dispositivi in cui **OsmAnd Cloud** è abilitato.

Se desideri salvare una copia di tutti i tuoi dati, utilizzare **Download all**. Questo apre una finestra di dialogo in cui è possibile:

- Selezionare quali dati esportare (ad esempio, *My places, Settings, Resources, Maps*),
- Scegliere il formato di esportazione (*ZIP or OSF*).
- Visualizzare una stima della dimensione e del tempo di download.

Fare clic su **Download Backup** per avviare l'esportazione e salvare l'archivio sul tuo computer.

![Web Account](@site/static/img/web/web_download_all.png)

### Pagamenti e acquisti {#payments-and-purchases}

Questa sezione mostra tutti i prodotti e le sottoscrizioni collegati al tuo account OsmAnd. Per aprirla,  
Andare a: *Menu Generale → Account → Payments and Purchases*

Qui è possibile visualizzare un elenco di tutti gli acquisti associati alla tua email:
- Piani gratuiti e a pagamento (come OsmAnd Start o OsmAnd Pro).
- Prodotti una tantum (ad es. Maps+ o edizioni speciali).
- Sottoscrizioni che si rinnovano mensilmente o annualmente.

Per ogni elemento l'elenco mostra:
- Nome del prodotto e icona.
- Tipo – sottoscrizione mensile, sottoscrizione annuale o pagamento una tantum.
- Stato – *Active, Expired or Canceled*.
- Informazioni sulla data.

Se fai clic su un prodotto nell'elenco, si apre la pagina dei dettagli. Lì è possibile vedere dove è stato acquistato il prodotto (*Google Play, Apple App Store, Huawei AppGallery, Amazon* o *OsmAnd Web*) e trovare un collegamento o istruzioni su come gestire o annullare la sottoscrizione nel negozio corrispondente. Se il prodotto è stato acquistato su OsmAnd Web (FastSpring), la pagina dei dettagli mostra un collegamento **Manage subscription** che apre il portale di gestione account FastSpring, dove è possibile aggiornare il metodo di pagamento, annullare o riattivare la sottoscrizione, modificare il piano o scaricare le fatture.

Se non ci sono ancora acquisti collegati al tuo account, questa sezione mostra uno stato vuoto con il messaggio **You don’t have any purchases** e un pulsante **Learn more** che porta a una pagina con i piani OsmAnd disponibili e le opzioni di aggiornamento.

Per maggiori dettagli sull'utilizzo dei tuoi acquisti su diverse piattaforme, leggere su [accesso multipiattaforma](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Sincronizzazione cloud {#cloud-sync}

La Sincronizzazione cloud ti consente di accedere ai dati che hai sincronizzato su OsmAnd Cloud direttamente sul [Portale Mappe Web](https://osmand.net/map/). Una volta effettuato l'accesso con il tuo account OsmAnd Start o OsmAnd Pro, il sito web visualizza Preferiti, Tracce e file di backup che hai precedentemente sincronizzato dall'app mobile. È un modo semplice per visualizzare il tuo contenuto cloud su uno schermo più grande e scaricare i tuoi backup quando ne hai bisogno.

Questi elementi diventano visibili nel menu subito dopo l'accesso al sito web. Per aggiornare queste informazioni, è necessario sincronizzare i tuoi dati dai tuoi dispositivi utilizzando l'azione [Sync now action](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) nell'app mobile.

La disponibilità della Sincronizzazione cloud dipende dal tipo di account:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – sincronizza [Preferiti](../web/web-favorites.md) e li visualizza sul web.
- OsmAnd Pro – sincronizza [Tracce](../web/web-tracks.md), Preferiti e [Backups](#my-data), e sblocca l'accesso completo al web ai dati cloud.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Quando sei connesso, la sezione OsmAnd Cloud appare in Menu → Impostazioni e include Modifiche e Cestino.

L'opzione **Changes** mostra un elenco cronologico dei file memorizzati nel tuo account OsmAnd Cloud. Gli elementi sono raggruppati per mese e includono il nome del file, il tipo di modifica (ad esempio, aggiunto, modificato o eliminato), l'ora dell'ultimo aggiornamento e il dispositivo che l'ha creato. Per ogni voce, è possibile aprire il menu a tre punti e scegliere *Download* per salvare il file selezionato sul tuo computer, o *Delete*.

L'opzione **Trash** contiene i file che sono stati eliminati da OsmAnd Cloud. L'elenco è anch'esso raggruppato per mese e mostra quando ogni file è stato rimosso e da quale dispositivo. Utilizzare il menu a tre punti accanto a un file per *Download* una copia, *Restore from trash* (restituire il file a OsmAnd Cloud in modo che diventi disponibile nuovamente nei tuoi dati), o *Delete immediately* per rimuoverlo permanentemente. Questo aiuta a prevenire la perdita accidentale di dati pur consentendo di liberare lo spazio di archiviazione cloud quando sei sicuro che un file non è più necessario. È anche possibile eliminare tutti gli elementi cancellati in una volta sola facendo clic sull'icona del Cestino nell'intestazione del pannello Cestino. Questo apre la finestra di dialogo **Empty trash**, dove confermi l'eliminazione per rimuovere permanentemente tutti i file dal Cestino.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

### App collegate {#connected-apps}

La sezione **Connected Apps** consente di collegare servizi esterni al tuo account OsmAnd. Attualmente supporta l'integrazione con [Garmin Connect™](https://connect.garmin.com/app/), che permette la sincronizzazione automatica delle attività Garmin. Per aprirla, andare a: *OsmAnd Web Map → Account → Connected apps*.

L'integrazione con Garmin Connect è disponibile solo per gli utenti [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/). Se non hai un abbonamento Pro attivo, selezionando l'elemento Garmin Connect si apre la pagina dei prezzi.

Per collegare il tuo account Garmin Connect™, fai clic su **Connect**. Verrai reindirizzato alla pagina di autorizzazione Garmin, dove dovrai accedere e concedere l'accesso ai tuoi dati Garmin Connect™. Durante l'autorizzazione, puoi abilitare la sincronizzazione delle attività recenti per importare i dati degli ultimi 30 giorni. Le attività più vecchie di 30 giorni non possono essere importate automaticamente.

Dopo la connessione, OsmAnd crea una cartella dedicata Garmin Connect nella [sezione Tracce](./web-tracks.md) e inizia a importare automaticamente le attività. Le nuove attività registrate in Garmin Connect™ vengono aggiunte a questa cartella senza importazione manuale. La cartella viene inoltre sincronizzata con le app mobili OsmAnd quando [OsmAnd Cloud](../personal/osmand-cloud.md) è abilitato.

Il menu Garmin Connect contiene due sezioni: **My data** e **Settings**. In My data, puoi visualizzare il numero di attività sincronizzate, aprire l'ultima attività recuperata o aprire la pagina delle attività Garmin Connect™ utilizzando il pulsante **View on Garmin Connect™**. In Settings, puoi configurare quali tipi di attività devono essere sincronizzati utilizzando l'opzione Activities to sync.

Le attività sono raggruppate in categorie come Cycling, Walking & Running, Water Sports, and Winter & Other Sports e altri. I singoli tipi di attività possono essere abilitati o disabilitati. Per impostazione predefinita, dopo la connessione vengono selezionati tutti i tipi di attività supportati.

Per disconnettere il tuo account Garmin Connect™, vai su *Settings → Disconnect* e conferma l'azione. Le tracce precedentemente importate rimangono nella cartella Garmin Connect, ma le nuove attività non verranno più sincronizzate.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Risoluzione dei problemi {#troubleshooting}

### Reimposta password {#reset-password}

Se non ricordi la tua password, utilizzare il collegamento **I don’t have or forgot password** nella finestra di dialogo di accesso. Questo apre il pannello **Change or reset password**. Inserire l'indirizzo email utilizzato per creare il tuo account e fare clic su **Continua**. Un messaggio con un codice di verifica viene inviato a questa email. Nella schermata successiva, digitare il codice di verifica e la tua nuova password, quindi selezionare **Continua** per confermare. Quando il codice è accettato, la tua password viene aggiornata e puoi accedere a OsmAnd Web con le nuove credenziali.

![Web Account](@site/static/img/web/web_password.png)

### Cambia indirizzo email {#change-email-address}

Per aggiornare il tuo indirizzo email,
Andare a *Menu Generale → Account → Email → ⋮ → Change email*

Appare la finestra di dialogo Cambia email. Un codice di verifica viene inviato all'indirizzo email corrente. Inserire questo codice nel campo **Code from Old Email**, specificare il nuovo indirizzo in **New Email**, quindi selezionare **Next**. Per motivi di sicurezza, un messaggio di conferma viene inviato al tuo nuovo indirizzo email informandoti che l'email dell'account è stata aggiornata.

![Web Account](@site/static/img/web/web_email_new.png)

### Disconnessione ed eliminazione dell'account {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

Il pannello Account OsmAnd contiene i controlli per terminare la sessione web corrente e rimuovere permanentemente l'account.

Per disconnettersi, aprire Account OsmAnd e utilizzare il pulsante **Logout** nell'angolo in alto a destra del pannello (icona con una freccia che esce da un quadrato). La selezione di Logout chiude il pannello dell'account e termina la sessione attiva sul sito web.

Per eliminare un account, selezionare **Delete account** in fondo al pannello Account OsmAnd. Appare una finestra di dialogo di conferma con il messaggio *“Are you sure you want to do this?”* e una breve spiegazione che tutti i dati e i dettagli dell'account verranno rimossi da OsmAnd Cloud e i dispositivi secondari perderanno l'accesso alle funzionalità a pagamento. Un codice di verifica viene inviato all'indirizzo email dell'account. Inserire il codice nel campo Code from Email e scegliere **DELETE THIS ACCOUNT** per completare il processo. Questa operazione è permanente e non può essere annullata.

![Web Account](@site/static/img/web/web_delete.png)


## Articoli correlati {#related-articles}

- [Introduzione](./web-overview.md)
- [Acquisti multipiattaforma](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Tracce](./web-tracks.md)