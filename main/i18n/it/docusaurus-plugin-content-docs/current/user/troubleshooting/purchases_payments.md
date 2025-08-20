---
source-hash: 2c18098f94d113417dbc7c36dee6af4769f8e0f98a71713649f8f3d246f92e77
sidebar_position: 2
title: Acquisti e Pagamenti
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Acquisti multipiattaforma {#cross-platform-purchases}

**OsmAnd Pro** e **Maps+** (*Tutte le mappe del mondo* per iOS) sono **abbonamenti multipiattaforma** disponibili per Android e iOS a partire da OsmAnd 5.0. Multipiattaforma significa che se acquisti un abbonamento, ad esempio, in uno degli store Android (Google Play, Huawei AppGallery), puoi usarlo anche su iOS e nella versione web.

- L'abbonamento multipiattaforma può essere utilizzato su più dispositivi e piattaforme **se collegato allo stesso account OsmAnd Cloud**.

- Gli acquisti una tantum come **OsmAnd+** (Android) e gli acquisti specifici dello store non sono trasferibili tra piattaforme.

- Puoi utilizzare OsmAnd Pro su un massimo di 6 dispositivi, anche se utilizzano sistemi operativi diversi.

- Assicurati sempre di utilizzare lo stesso account OsmAnd Cloud su tutti i dispositivi per accedere ai tuoi acquisti.

- Per maggiori dettagli, vedi: [Acquisti Android](../purchases/android.md), [Acquisti iOS](../purchases/ios.md) e [Portale mappe OsmAnd](https://www.osmand.net/map).


### Come collegare il tuo acquisto all'account OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Se **non hai** un account OsmAnd Cloud:

    - Apri l'app OsmAnd sul dispositivo in cui hai effettuato l'acquisto.
    - Vai su *Menu → Impostazioni → OsmAnd Cloud*.
    - Tocca **Crea nuovo account**.
    - Dopo aver creato l'account, vai su *Menu OsmAnd → Impostazioni → Acquisti*.
    - Tocca **Ripristina acquisti** per collegare il tuo acquisto a un nuovo account.

2. Se **hai già** un account OsmAnd Cloud:

    - Assicurati di aver effettuato l'accesso all'account OsmAnd Cloud sul dispositivo in cui hai effettuato l'acquisto.
    - Vai su *Menu OsmAnd → Impostazioni → OsmAnd Cloud → Ho già un account*
    - Dopo aver effettuato l'accesso al tuo account, vai su *Menu OsmAnd → Impostazioni → Acquisti*.
    - Tocca **Ripristina acquisti** per sincronizzare l'acquisto con il tuo account.


> Per maggiori informazioni, leggi l'articolo [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Come acquistare e ripristinare OsmAnd nell'Huawei AppGallery senza Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Acquista OsmAnd**:
   - Innanzitutto, abilita *Installa da origini sconosciute* nelle impostazioni del tuo dispositivo. Di solito puoi trovare questa opzione in **Impostazioni → Sicurezza**.
   - Installa gli [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), che sono essenziali per la compatibilità delle app.
   - Successivamente, apri *Huawei AppGallery* sulla pagina [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) e scarica l'app.
   - Inizialmente è disponibile per il download solo la versione gratuita. Per effettuare un acquisto, vai su OsmAnd *Menu → Impostazioni → Acquisti* e seleziona il tipo richiesto.
   - Per maggiori dettagli, visita [questa pagina](https://osmand.net/docs/user/purchases/android#install-application).

2. **Ripristina acquisto**:
   - Per ripristinare il tuo acquisto, accedi a *Huawei AppGallery* utilizzando lo stesso account associato al tuo acquisto OsmAnd.
   - Controlla la cronologia delle transazioni nella [cronologia ordini di Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Potrebbe essere necessario aggiornare *Huawei AppGallery* e cancellare la cache per evitare problemi.
   - Per ripristinare i tuoi acquisti, segui *Menu → Impostazioni → Acquisti → Ripristina acquisti* in OsmAnd.
   - Per maggiori informazioni, consulta l'articolo [Acquisti Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Istruzioni per la configurazione di Huawei Mobile Services.
- Come acquistare OsmAnd senza HMS Core.
- Ripristina gli acquisti nell'Huawei AppGallery.
-->

## Il negozio Amazon sta chiudendo - cosa fare {#amazon-store-is-closing---what-to-do}

Il **20 agosto 2025**, Amazon chiuderà l'Amazon Appstore per i dispositivi Android. Puoi leggere l'annuncio ufficiale [qui](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Se hai effettuato acquisti tramite Amazon, dovrai **trasferire i tuoi abbonamenti (Pro, Maps+) o acquisti in-app (Maps+)** a un'altra piattaforma.

➡️ Attualmente, [il trasferimento multipiattaforma è possibile per abbonamenti e acquisti in-app](../purchases/cross.md).
❗ **OsmAnd+** (app standalone) non può essere trasferito tra piattaforme tramite l'account OsmAnd Cloud. Per assistenza, contatta **support@osmand.net**.

## Come ripristinare l'acquisto del plugin Topografia (precedentemente Curve di livello) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Per ripristinare il [plugin Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Accedi allo stesso account Google Play utilizzato per acquistare il plugin Topografia e installa [l'app](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Se il pulsante *Installa* è inattivo, assicurati che sia Google Play che l'app OsmAnd siano aggiornate. Cancella la cache, riavvia il dispositivo e prova a installare nuovamente il plugin.
3. Dopo l'installazione, abilita il plugin Topografia nel *[menu OsmAnd → Plugin](../plugins/topography.md)*, scarica i file richiesti in *[Mappe e risorse](../start-with/download-maps.md#maps-and-resources)* e attivalo tramite il *[menu Configura mappa](../map/configure-map-menu.md)*.


## Come identificare se OsmAnd Unlimited è attivo {#how-to-identify-if-osmand-unlimited-is-active}

Vai su *Menu → Scarica mappe* e tocca il contatore delle mappe (il campo etichettato *Versione gratuita. X download rimanenti*). Se OsmAnd Unlimited è attivo, il display mostrerà lo spazio di archiviazione rimanente del dispositivo invece del numero di download gratuiti.


## Cosa significano 5 o 7 download gratuiti? {#what-do-5-or-7-free-downloads-mean}

Ti sono consentiti 5 download gratuiti su iOS o 7 su Android. Ogni download, che si tratti di una mappa, un aggiornamento (gli aggiornamenti delle mappe contano come download), pacchetti vocali o altri elementi, riduce il conteggio disponibile. Tieni presente che la rimozione di elementi dai tuoi download non ripristina il conteggio dei download gratuiti.


## Come posso ottenere download di mappe aggiuntivi in OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Se hai utilizzato tutti i 5 (iOS) o 7 (Android) download gratuiti, puoi ricevere 3 download extra *iscrivendoti alla mailing list*. Un banner con l'opzione di iscrizione apparirà una volta utilizzati tutti i download gratuiti.


## Codice di verifica per OsmAnd Cloud non ricevuto {#verification-code-for-osmand-cloud-not-received}

Se non ricevi il **codice di verifica** durante la creazione di un account **OsmAnd Cloud**, segui questi passaggi per risolvere il problema:

1. Controlla il tuo indirizzo email.
    Assicurati di aver inserito l'**indirizzo email corretto**. L'email deve corrispondere a quella utilizzata per l'acquisto di **OsmAnd Pro** o la registrazione del tuo account **OsmAnd Cloud**.

2. Controlla le cartelle spam.
    A volte, l'email di verifica potrebbe essere filtrata come spam. Cerca un'email da **OsmAnd** nelle tue cartelle **Spam**, **Posta indesiderata** o **Promozioni**.

3. Attendi l'arrivo del codice.
    In alcuni casi, l'email del codice di attivazione potrebbe essere **ritardata**. Evita **tentativi di attivazione multipli** in un breve periodo, poiché ciò può causare ulteriori ritardi.

4. Prova a inviare nuovamente il codice.
    Torna alla **schermata di accesso di OsmAnd Cloud** e seleziona **Invia nuovamente codice** se disponibile. Attendi qualche minuto prima di richiedere un altro codice.

5. Verifica le restrizioni del server email.
    Se stai utilizzando un **dominio email aziendale o personalizzato**, verifica con il tuo **provider di posta elettronica** per assicurarti che l'email non venga bloccata. Considera l'utilizzo di un servizio email diverso (ad esempio, Gmail, Outlook) se i problemi persistono.

<!--
## Acquisti e Pagamenti {#purchases--payments}

- Acquisto non visualizzato
- Acquisto non ripristinato
- Problemi di pagamento
- Politica di rimborso
- Soluzioni passo-passo ai problemi con gli acquisti.
- Istruzioni per la cancellazione della cache di Google Play, Huawei AppGallery.
- Cosa fare se l'acquisto non appare o la transazione fallisce.
- Acquisto non visualizzato - raccomandazioni su come controllare il tuo account e ripristinare i tuoi acquisti.
- Problemi di pagamento - istruzioni per contattare il supporto di Google Play in caso di problemi di pagamento.


## FAQ {#faq}

- Posso trasferire un acquisto tra Android e iOS?
- Posso utilizzare un acquisto su più dispositivi?
- Perché l'acquisto non appare?
- Dove posso trovare i dettagli del pagamento?
- Posso trasferire OsmAnd+ tra Android e iOS?
- Come posso ripristinare gli acquisti dopo aver reinstallato l'app?
- Cos'è OsmAnd Pro e quali sono i suoi vantaggi?
- Posso attivare il mio abbonamento senza Google Play?
- Posso condividere il mio acquisto con la mia famiglia?
- Come trasferisco OsmAnd+ su un altro telefono?
- Perché il mio acquisto non appare dopo la reinstallazione?
- Perché non riesco a riprendere il mio acquisto?
- Come faccio a sapere se il mio abbonamento è attivo?
- Posso utilizzare un acquisto su più dispositivi?
- Posso acquistare OsmAnd senza Google Play?
- Dove posso trovare i dettagli del mio pagamento?
-->