---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Acquisti e Pagamenti
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Acquisti Multipiattaforma {#cross-platform-purchases}

**OsmAnd Pro** e **Maps+** (*Tutte le mappe del mondo* per iOS) sono **abbonamenti multipiattaforma** disponibili per Android e iOS a partire da OsmAnd 5.0. Multipiattaforma significa che se si acquista un abbonamento, ad esempio, in uno degli store Android (Google Play, Huawei AppGallery), è possibile utilizzarlo anche su iOS e nella versione web.

- L'abbonamento multipiattaforma può essere utilizzato su più dispositivi e piattaforme **se collegato allo stesso account OsmAnd Cloud**.

- Gli acquisti una tantum come **OsmAnd+** (Android) e gli acquisti specifici dello store non sono trasferibili tra piattaforme.

- È possibile utilizzare OsmAnd Pro su un massimo di 6 dispositivi, anche se eseguono sistemi operativi diversi.

- Assicurarsi sempre di utilizzare lo stesso account OsmAnd Cloud su tutti i dispositivi per accedere ai propri acquisti.

- Per maggiori dettagli, vedere: [Acquisti Android](../purchases/android.md), [Acquisti iOS](../purchases/ios.md), [Acquisti multipiattaforma](../purchases/cross.md) e [Portale Mappe OsmAnd](../purchases/web.md).


### Come collegare il proprio acquisto all'account OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Se **non si dispone** di un account OsmAnd Cloud:

    - Aprire l'app OsmAnd sul dispositivo in cui è stato effettuato l'acquisto.
    - Andare su *Menu → Impostazioni → OsmAnd Cloud*.
    - Toccare **Crea nuovo account**.
    - Dopo aver creato l'account, andare su *Menu OsmAnd → Impostazioni → Acquisti*.
    - Toccare **Ripristina acquisti** per collegare l'acquisto a un nuovo account.

2. Se **si dispone già** di un account OsmAnd Cloud:

    - Assicurarsi di aver effettuato l'accesso all'account OsmAnd Cloud sul dispositivo in cui è stato effettuato l'acquisto.
    - Navigare su *Menu OsmAnd → Impostazioni → OsmAnd Cloud → Ho già un account*
    - Dopo aver effettuato l'accesso al proprio account, andare su *Menu OsmAnd → Impostazioni → Acquisti*.
    - Toccare **Ripristina acquisti** per sincronizzare l'acquisto con il proprio account.


> Per maggiori informazioni, leggere gli articoli [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform), [Acquisti multipiattaforma](../purchases/cross.md).


### Associazione dell'acquisto con più account OsmAnd Cloud {#purchase-association-with-multiple-osmand-cloud-accounts}


Un acquisto multipiattaforma, come _Maps+_ e _Pro_, è collegato all'account OsmAnd Cloud che è stato attivato per ultimo sul dispositivo che contiene la ricevuta d'acquisto originale (dall'App Store o da Google Play). Se un utente su questo dispositivo si disconnette dal suo account principale (`account OsmAnd Cloud A`) e accede a uno nuovo (`account OsmAnd Cloud B`), il sistema OsmAnd trasferisce automaticamente la licenza al nuovo `account OsmAnd Cloud B`. Di conseguenza, l'account OsmAnd Cloud originale perde lo stato di acquisto sulle altre piattaforme, poiché la licenza può essere attiva solo su un account OsmAnd Cloud alla volta.

Tecnicamente, funziona come segue: l'acquisto stesso appartiene al proprio ID Apple o Account Google, non a un account OsmAnd. L'app OsmAnd sul dispositivo con l'acquisto informa semplicemente il nostro server su quale account OsmAnd Cloud è attualmente attivo. Il server, a sua volta, concede l'accesso multipiattaforma a quell'account. Pertanto, l'ultimo account ad accedere sul dispositivo "principale" diventa sempre il titolare della licenza.

Per ripristinare l'acquisto sull'account corretto (`account OsmAnd Cloud A`), è necessario eseguire l'azione inversa. Sullo stesso dispositivo in cui è stato effettuato l'acquisto, è necessario disconnettersi dall'account errato `account OsmAnd Cloud B` e accedere nuovamente all'`account OsmAnd Cloud A`. Questo processo costringerà il sistema a riverificare la ricevuta d'acquisto e a ricollegare la licenza all'account corretto `account OsmAnd Cloud A`, ripristinandone lo stato multipiattaforma.

> Per maggiori informazioni, leggere gli articoli [Acquisti multipiattaforma](../purchases/cross.md).

## Come acquistare e ripristinare OsmAnd nella Huawei AppGallery senza i Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Acquistare OsmAnd**:
   - Per prima cosa, abilitare *Installa da origini sconosciute* nelle impostazioni del dispositivo. Di solito si trova questa opzione in **Impostazioni → Sicurezza**.
   - Installare i [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), essenziali per la compatibilità delle app.
   - Successivamente, aprire *Huawei AppGallery* sulla pagina di [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) e scaricare l'app.
   - Inizialmente è disponibile per il download solo la versione gratuita. Per effettuare un acquisto, andare su *Menu OsmAnd → Impostazioni → Acquisti* e selezionare il tipo richiesto.
   - Per ulteriori dettagli, visitare [questa pagina](https://osmand.net/docs/user/purchases/android#install-application).

2. **Ripristinare l'acquisto**:
   - Per ripristinare l'acquisto, accedere a *Huawei AppGallery* utilizzando lo stesso account associato all'acquisto di OsmAnd.
   - Controllare la cronologia delle transazioni nella [cronologia degli ordini di Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Potrebbe essere necessario aggiornare *Huawei AppGallery* e svuotare la cache per evitare problemi.
   - Per ripristinare gli acquisti, seguire *Menu → Impostazioni → Acquisti → Ripristina acquisti* in OsmAnd.
   - Per maggiori informazioni, consultare l'articolo [Acquisti Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Istruzioni per la configurazione dei Huawei Mobile Services.
- Come acquistare OsmAnd senza HMS Core.
- Ripristinare gli acquisti nella Huawei AppGallery.
-->

## Lo store Amazon sta chiudendo - cosa fare {#amazon-store-is-closing---what-to-do}

Il **20 agosto 2025**, Amazon chiuderà l'Amazon Appstore per i dispositivi Android. È possibile leggere l'annuncio ufficiale [qui](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Se avete effettuato acquisti tramite Amazon, dovrete **trasferire i vostri abbonamenti (Pro, Maps+) o acquisti in-app (Maps+)** su un'altra piattaforma.

➡️ Attualmente, [il trasferimento multipiattaforma è possibile per abbonamenti e acquisti in-app](../purchases/cross.md).
❗ **OsmAnd+** (app standalone) non può essere trasferito tra piattaforme tramite l'account OsmAnd Cloud. Per assistenza, si prega di contattare **support@osmand.net**.

## Come ripristinare l'acquisto del plugin Topografia (precedentemente Curve di livello) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Per ripristinare il [plugin Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Accedere allo stesso account Google Play utilizzato per acquistare il plugin Topografia e installare [l'app](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Se il pulsante *Installa* non è attivo, assicurarsi che sia l'app Google Play che quella di OsmAnd siano aggiornate. Svuotare la loro cache, riavviare il dispositivo e provare a installare nuovamente il plugin.
3. Dopo l'installazione, abilitare il plugin Topografia nel *[Menu OsmAnd → Plugin](../plugins/topography.md)*, scaricare i file necessari in *[Mappe e risorse](../start-with/download-maps.md#maps-and-resources)* e attivarlo tramite il *[menu Configura mappa](../map/configure-map-menu.md)*.


## Come identificare se OsmAnd Unlimited è attivo {#how-to-identify-if-osmand-unlimited-is-active}

Navigare su *Menu → Scarica mappe* e toccare il contatore delle mappe (il campo etichettato *Versione gratuita. X download rimasti*). Se OsmAnd Unlimited è attivo, il display mostrerà lo spazio di archiviazione rimanente sul dispositivo invece del numero di download gratuiti.


## Posso ottenere la versione completa di OsmAnd come app separata per iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Per iOS, è disponibile una sola versione di OsmAnd. Per accedere alla versione completa, è necessario sbloccare funzioni aggiuntive tramite acquisti in-app.


## Cosa significano 5 o 7 download gratuiti? {#what-do-5-or-7-free-downloads-mean}

Sono consentiti 5 download gratuiti su iOS o 7 su Android. Ogni download, che si tratti di una mappa, di un aggiornamento (gli aggiornamenti delle mappe contano come download), di pacchetti vocali o di altri elementi, riduce il conteggio disponibile. Si prega di notare che la rimozione di elementi dai download non ripristina il conteggio dei download gratuiti.


## Come posso ottenere download di mappe aggiuntivi in OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Se avete utilizzato tutti i 5 (iOS) o 7 (Android) download gratuiti, potete ricevere 3 download extra *iscrivendovi alla mailing list*. Un banner con l'opzione di iscrizione apparirà una volta esauriti tutti i download gratuiti.


## Codice di verifica per OsmAnd Cloud non ricevuto {#verification-code-for-osmand-cloud-not-received}

Se non si riceve il **codice di verifica** durante la creazione di un account **OsmAnd Cloud**, seguire questi passaggi per risolvere il problema:

1. Controllare il proprio indirizzo email.
    Assicurarsi di aver inserito l'**indirizzo email corretto**. L'email dovrebbe corrispondere a quella utilizzata per l'acquisto di **OsmAnd Pro** o per la registrazione del proprio account **OsmAnd Cloud**.

2. Controllare le cartelle spam.
    A volte, l'email di verifica potrebbe essere filtrata come spam. Cercare un'email da **OsmAnd** nelle cartelle **Spam**, **Posta indesiderata** o **Promozioni**.

3. Attendere l'arrivo del codice.
    In alcuni casi, l'email con il codice di attivazione potrebbe subire un **ritardo**. Evitare **tentativi di attivazione multipli** in un breve periodo, poiché ciò può causare ulteriori ritardi.

4. Provare a inviare nuovamente il codice.
    Tornare alla **schermata di accesso di OsmAnd Cloud** e selezionare **Invia di nuovo il codice**, se disponibile. Attendere qualche minuto prima di richiedere un altro codice.

5. Verificare le restrizioni del server di posta elettronica.
    Se si utilizza un **dominio email aziendale o personalizzato**, verificare con il proprio **provider di posta elettronica** che l'email non venga bloccata. Considerare l'utilizzo di un altro servizio di posta elettronica (ad es. Gmail, Outlook) se i problemi persistono.

<!--
## Acquisti e Pagamenti {#purchases--payments}

- Acquisto non visualizzato
- Acquisto non ripristinato
- Problemi di pagamento
- Politica di rimborso
- Soluzioni passo-passo ai problemi con gli acquisti.
- Istruzioni per svuotare la cache di Google Play, Huawei AppGallery.
- Cosa fare se l'acquisto non appare o la transazione fallisce.
- Acquisto non visualizzato - raccomandazioni su come controllare il proprio account e ripristinare gli acquisti.
- Problemi di pagamento - istruzioni per contattare il supporto di Google Play in caso di problemi di pagamento.


## FAQ {#faq}

- Posso trasferire un acquisto tra Android e iOS?
- Posso usare un acquisto su più dispositivi?
- Perché l'acquisto non appare?
- Dove posso trovare i dettagli del pagamento?
- Posso trasferire OsmAnd+ tra Android e iOS?
- Come posso ripristinare gli acquisti dopo aver reinstallato l'app?
- Cos'è OsmAnd Pro e quali sono i suoi vantaggi?
- Posso attivare il mio abbonamento senza Google Play?
- Posso condividere il mio acquisto con la mia famiglia?
- Come trasferisco OsmAnd+ su un altro telefono?
- Perché il mio acquisto non appare dopo la reinstallazione?
- Perché non riesco a ripristinare il mio acquisto?
- Come faccio a sapere se il mio abbonamento è attivo?
- Posso usare un acquisto su più dispositivi?
- Posso acquistare OsmAnd senza Google Play?
- Dove posso trovare i miei dettagli di pagamento?
-->