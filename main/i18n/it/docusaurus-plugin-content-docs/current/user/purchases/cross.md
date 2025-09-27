---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title:  Acquisti multipiattaforma
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

## Acquisti multipiattaforma supportati {#supported-cross-platform-purchases}

I seguenti prodotti OsmAnd supportano attualmente l'uso su più piattaforme (Android, iOS e Web):

- Abbonamento **OsmAnd Pro**
- Abbonamento **Maps+**
- Acquisto in-app una tantum **Maps+**

A partire dalla **versione 5.1 di OsmAnd**, rilasciata in occasione del nostro **15° anniversario**, l'accesso multipiattaforma è stato esteso a **Maps+** (precedentemente noto come *Unlimited*). In precedenza, solo l'abbonamento [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) era multipiattaforma.

Per attivare l'accesso multipiattaforma, gli acquisti devono essere collegati al tuo account [OsmAnd Cloud](../personal/osmand-cloud.md#login).
Puoi confrontare tutti i prodotti OsmAnd qui: [differenza tra gli acquisti](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Tipo di prodotto** | **Multipiattaforma** | **Note** |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (abbonamento) | ✔ | Funziona dopo l'accesso a OsmAnd Cloud su Android, iOS e Web se collegato a Cloud. |
| **Maps+** (abbonamento) | ✔ | Utilizzabile su tutte le piattaforme, ma deve essere attivato tramite OsmAnd Cloud **sul dispositivo di acquisto**. |
| **Maps+** (acquisto una tantum) | ✔ | Utilizzabile su tutte le piattaforme, ma deve essere attivato tramite OsmAnd Cloud **sul dispositivo di acquisto**. |
| **OsmAnd+** (app standalone) | ✘ | Non trasferibile di default tra piattaforme, richiede la registrazione manuale dell'acquisto sull'account OsmAnd Cloud. Per assistenza, contattare support@osmand.net. |

## Come funziona {#how-it-works}

Per utilizzare il tuo acquisto **OsmAnd Pro** o **Maps+** su diverse piattaforme (Android, iOS o Web), devi **collegarlo al tuo account OsmAnd Cloud**.

### Collega il tuo acquisto {#link-your-purchase}

![Collegamento Cloud](@site/static/img/purchases/cloud_activation.png)

Esegui questo passaggio sul **dispositivo su cui hai effettuato l'acquisto** (Android o iOS, versione 5.0 o successiva):

1. Vai al tuo account [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   _Menu → Impostazioni → OsmAnd Cloud → Crea nuovo account / Ho già un account_

2. Una volta effettuato l'accesso, il tuo acquisto **Pro** o **Maps+** verrà automaticamente collegato al tuo **account Cloud** e contrassegnato come **multipiattaforma**, *se non era precedentemente collegato a un altro account.*

### Attiva su un altro dispositivo o piattaforma {#activate-on-another-device-or-platform}

![Maps+ multipiattaforma](@site/static/img/purchases/cross_purchase.png)
![Maps+ multipiattaforma](@site/static/img/purchases/cross_purchase_1.png)

1. Vai al tuo account [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Menu → Impostazioni → OsmAnd Cloud →* ***Accedi con lo stesso account***

2. Quindi vai a:
   *Menu → Impostazioni → Acquisti*
   Il tuo acquisto **Pro o Maps+** collegato dovrebbe ora essere disponibile.

### Risoluzione dei problemi {#troubleshooting}

Se non vedi il tuo acquisto elencato:

1. Tocca *Menu → Impostazioni → Acquisti → Ripristina acquisti*
2. Assicurati di aver effettuato l'accesso allo **stesso account OsmAnd Cloud** utilizzato sul dispositivo originale.

Se il problema persiste, contatta **support@osmand.net** e includi:

- La tua email di OsmAnd Cloud.
- Piattaforma(e) e app store utilizzati.
- Tipo di acquisto (Pro / Maps+ una tantum / abbonamento Maps+).

### Acquisti e account multipli {#purchases-and-multiple-accounts}

Un acquisto multipiattaforma è collegato all'account OsmAnd Cloud che è stato attivato per ultimo sul dispositivo che detiene la ricevuta d'acquisto originale (dall'App Store o da Google Play). Se esci dal tuo account principale e accedi a uno nuovo su questo dispositivo, il sistema trasferisce automaticamente la licenza al nuovo account. Di conseguenza, il tuo account OsmAnd Cloud originale perde lo stato degli acquisti su altre piattaforme, poiché la licenza può essere attiva solo su un account OsmAnd Cloud alla volta. Maggiori informazioni sono disponibili [qui](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).

## Esempio {#example}

Hai acquistato **Maps+** come acquisto in-app una tantum nella versione gratuita di OsmAnd dall'[Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).
Successivamente, decidi di passare a un iPhone e vuoi usare **Maps+** con la [versione iOS di OsmAnd](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Per attivare il tuo acquisto Maps+ su iOS:

1. Apri la **versione Amazon** dell'app OsmAnd sul tuo dispositivo originale.
2. Accedi al tuo account [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Menu → Impostazioni → OsmAnd Cloud → Crea nuovo account / Ho già un account*
3. Installa OsmAnd sul tuo iPhone dall'[App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Accedi allo **stesso account OsmAnd Cloud** sul tuo iPhone.
5. Vai su *Menu → Impostazioni → Acquisti* e conferma che **Maps+** sia elencato come attivo.

Questo completa l'attivazione multipiattaforma del tuo acquisto. Ora puoi continuare a usare **Maps+** sul tuo nuovo dispositivo.

Divertiti a usare Maps+/Pro su tutte le piattaforme!

## Articoli correlati {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Risoluzione dei problemi relativi agli acquisti](../troubleshooting/purchases_payments.md)
- [Differenza tra gli acquisti Android](./android.md#difference-between-purchases-android)
- [Differenza tra gli acquisti iOS](./ios.md#difference-between-purchases-ios)