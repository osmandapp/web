---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
sidebar_position: 2
sidebar_label: OsmAnd Cloud
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

Il [Portale Mappe OsmAnd](https://osmand.net/map) è un servizio basato su browser fornito da OsmAnd, che consente agli utenti di esplorare mappe, gestire i propri dati, pianificare e creare viaggi, o semplicemente navigare sulla mappa.



## Come iniziare {#how-to-start}

Per accedere alle funzionalità di OsmAnd Web, è necessario un account:

- Se hai già un abbonamento [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o desideri creare un account gratuito [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), segui questi passaggi:

  1. Vai al [**Portale Mappe OsmAnd**](https://osmand.net/map).
  2. Apri il menu **Account**.
     - **Accedi**: Inserisci l'indirizzo email utilizzato per il tuo abbonamento Pro o Start.
     - **Crea account**: Utilizza questa opzione per registrarti per un account OsmAnd Start gratuito.

![Account Web](@site/static/img/web/web_account.png)

## Gestione dell'account {#managing-account}

Per gestire il tuo account, vai a:
**Menu Generale → Account**

Dopo esserti registrato sul web, puoi:

- Visualizzare le informazioni dell'account
- Scaricare i backup cloud
- Disconnettersi dal tuo account
- Eliminare il tuo account
- Cambiare il tuo indirizzo email
- Visualizzare i tuoi pagamenti e acquisti

![Account Web](@site/static/img/web/web_account_2.png)

### I miei dati {#my-data}

Puoi scaricare i backup creati e sincronizzati dal tuo dispositivo mobile tramite **OsmAnd Cloud**.

- Vai a **Menu Generale → Account → I miei dati (OsmAnd Cloud) → Scarica tutto**.

Questa sezione visualizza:

- Il numero di file archiviati nel tuo cloud
- Il volume totale di archiviazione utilizzato
- Lo spazio di archiviazione cloud disponibile

> 💡 Qui appariranno solo i backup creati su dispositivi in cui è abilitato **OsmAnd Cloud**.

### Pagamenti e Acquisti {#payments-and-purchases}

- Vai a **Menu Generale → Account → Pagamenti e Acquisti**.

In questa sezione, puoi visualizzare tutti gli acquisti e gli abbonamenti collegati al tuo account.

Per maggiori dettagli sull'utilizzo dei tuoi acquisti su diverse piattaforme, leggi l'articolo sull'[accesso multipiattaforma](../purchases/cross.md).

### Cambia indirizzo email {#change-email-address}

Per aggiornare il tuo indirizzo email:

1. Vai a **Menu Generale → Account → Email → ⋮ → Cambia email**.
2. Inserisci il tuo nuovo indirizzo email e conferma.

> 🔒 Verrà inviata un'email di verifica al nuovo indirizzo prima che la modifica sia finalizzata.

### Disconnetti ed elimina account {#log-out-and-delete}

Per disconnettersi dal tuo account OsmAnd Web:

- Apri **Menu Generale → Account**.
- Fai clic sul pulsante **Disconnetti** per terminare la sessione corrente.

Per eliminare definitivamente il tuo account:

- Scorri fino alla fine del menu **Account**.
- Fai clic sul pulsante **Elimina account**.
- Conferma l'eliminazione. Questa azione è irreversibile.


## Sincronizzazione OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** è un abbonamento a pagamento [multipiattaforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** è una [registrazione gratuita di OsmAnd Cloud](https://osmand.net/blog/start).

La capacità multipiattaforma ti consente di utilizzare OsmAnd Pro su tutte le piattaforme *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Per fare ciò è necessario:

1. Abbonarsi a **OsmAnd Pro**. Maggiori informazioni su come farlo per [Android qui](../purchases/android.md#how-to-buy), e per [iOS qui](../purchases/ios.md#how-to-buy).
2. Come creare un account **OsmAnd Start** leggi di più [qui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registra il tuo account [Pro o Start](../troubleshooting/setup.md#cross-platform) sul server OsmAnd all'interno dell'app OsmAnd.
4. L'email registrata sarà il tuo login per attivare OsmAnd Pro sulla piattaforma web. Inizialmente, è necessario scegliere una password per l'accesso futuro al portale web (si prega di seguire le istruzioni sul portale web).


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



> *Ultimo aggiornamento: Luglio 2024*