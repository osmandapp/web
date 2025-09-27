---
source-hash: 36fa594008d56ae693369164879dccfe01f275c12d52be379ad60b0b9c264d67
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud sul sito web
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


<InfoIncompleteArticle/>

## Panoramica {#overview}

Il [Portale Mappe di OsmAnd](https://osmand.net/map) è un servizio basato su browser fornito da OsmAnd, che consente agli utenti di esplorare mappe, gestire i propri dati, pianificare e creare viaggi o semplicemente navigare sulla mappa.



## Come iniziare {#how-to-start}

Per accedere alle funzionalità di OsmAnd Web, è necessario un account:

- Se si dispone già di un abbonamento [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o si desidera creare un account gratuito [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), seguire questi passaggi:

  1. Andare al [**Portale Mappe di OsmAnd**](https://osmand.net/map).
  2. Aprire il menu **Account**.
     - **Accedi**: Inserire l'indirizzo email utilizzato per l'abbonamento Pro o Start.
     - **Crea account**: Utilizzare questa opzione per registrare un account gratuito OsmAnd Start.

![Account Web](@site/static/img/web/web_account.png)

## Gestione dell'account {#managing-account}

Per gestire il proprio account, andare su:  
**Menu Generale → Account**

Dopo essersi registrati sul web, è possibile:

- Visualizzare le informazioni sull'account
- Scaricare i backup dal cloud
- Disconnettersi dal proprio account
- Eliminare il proprio account
- Modificare il proprio indirizzo email
- Vedere i propri pagamenti e acquisti

![Account Web](@site/static/img/web/web_account_2.png)

### I miei dati {#my-data}

È possibile scaricare i backup creati e sincronizzati dal proprio dispositivo mobile tramite **OsmAnd Cloud**.

- Andare su **Menu Generale → Account → I miei dati (OsmAnd Cloud) → Scarica tutto**.

Questa sezione mostra:

- Il numero di file archiviati nel cloud
- Il volume totale di archiviazione utilizzato
- Lo spazio di archiviazione disponibile nel cloud

> 💡 Qui appariranno solo i backup creati su dispositivi in cui **OsmAnd Cloud** è abilitato.

### Pagamenti e acquisti {#payments-and-purchases}

- Andare su **Menu Generale → Account → Pagamenti e acquisti**.

In questa sezione, è possibile visualizzare tutti gli acquisti e gli abbonamenti collegati al proprio account.

Per maggiori dettagli sull'utilizzo degli acquisti su diverse piattaforme, leggere l'articolo sull'[accesso multipiattaforma](../purchases/cross.md).

### Modificare l'indirizzo email {#change-email-address}

Per aggiornare il proprio indirizzo email:

1. Andare su **Menu Generale → Account → Email → ⋮ → Modifica email**.
2. Inserire il nuovo indirizzo email e confermare.

> 🔒 Verrà inviata un'email di verifica al nuovo indirizzo prima che la modifica venga finalizzata.

### Disconnessione ed eliminazione dell'account {#log-out-and-delete}

Per disconnettersi dal proprio account OsmAnd Web:

- Aprire **Menu Generale → Account**.
- Fare clic sul pulsante **Disconnetti** per terminare la sessione corrente.

Per eliminare permanentemente il proprio account:

- Scorrere fino in fondo al menu **Account**.
- Fare clic sul pulsante **Elimina account**.
- Confermare l'eliminazione. Questa azione è irreversibile.


## Sincronizzazione di OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** è un abbonamento a pagamento [multipiattaforma](../troubleshooting/setup.md#initial-setup). 
- **OsmAnd Start** è una [registrazione gratuita a OsmAnd Cloud](https://osmand.net/blog/start).

La funzionalità multipiattaforma consente di utilizzare OsmAnd Pro su tutte le piattaforme *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. Per fare ciò è necessario:

1. Abbonarsi a **OsmAnd Pro**. Per saperne di più su come farlo per [Android qui](../purchases/android.md#how-to-buy) e per [iOS qui](../purchases/ios.md#how-to-buy).
2. Per sapere come creare un account **OsmAnd Start**, leggere di più [qui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registrare il proprio [account Pro o Start](/docs/user/personal/osmand-cloud/#cross-platform) sul server OsmAnd all'interno dell'app OsmAnd.
4. L'email registrata sarà il vostro login per attivare OsmAnd Pro sulla piattaforma web. La prima volta è necessario scegliere una password per i futuri accessi al portale web (si prega di seguire le istruzioni sul portale web).


<!--

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->