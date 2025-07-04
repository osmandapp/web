---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
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

L'[OsmAnd Map Portal](https://osmand.net/map) è un servizio basato su browser fornito da OsmAnd, che consente agli utenti di esplorare mappe, gestire i propri dati, pianificare e creare viaggi o semplicemente navigare sulla mappa.

#### Accessi con abbonamento {#subscription-accesses}

Il Map Portal può essere utilizzato senza registrazione; tuttavia, alcune funzionalità sono disponibili esclusivamente per gli utenti OsmAnd Pro e OsmAnd Start:

| Funzionalità | Versioni |
|--- |--- |
| [Percorso di navigazione](./planner.md) | Gratuito |
| [Crea traccia](./planner.md) | Gratuito |
| [Meteo](./web-map.md) | Gratuito |
| [Preferiti](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Sincronizzazione OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Ricerca web](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) o <ProFeature/>|
| [Tracce](./web-map.md) | <ProFeature/> |


## Come iniziare {#how-to-start}

Se hai un account [OsmAnd Pro](../personal/osmand-cloud.md#login) o desideri creare un account [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), devi seguire questi passaggi:

- Vai all'[*OsmAnd Map Portal*](https://osmand.net/map).
- Apri il menu **Account**.
  - *Accedi*. Inserisci l'email che hai usato per creare il tuo account. Per abbonamenti Pro o Start.
  - *Crea account*. Per OsmAnd Start.


## Come cambiare lingua {#how-to-change-language}

Se vuoi cambiare la lingua di visualizzazione:

- La versione web di OsmAnd utilizza la lingua dalle impostazioni del browser.
- Per Chrome, la priorità è `chrome://settings/languages`.
- Puoi cambiare manualmente la lingua di sistema (menu) selezionando:
    *Menu →* ⚙ *→ Disattiva lingua*.


## Gestione account {#managing-account}

*Menu generale → Account*

Dopo essersi registrati sul web, gli utenti possono accedere alle informazioni del proprio account, scaricare backup, disconnettersi, eliminare il proprio account o cambiare il proprio indirizzo email.

#### Accedi all'account {#access-account}

#### Backup {#backups}

#### Disconnetti ed elimina {#log-out-and-delete}

#### Cambia indirizzo email {#change-email-address}


## Sincronizzazione OsmAnd Pro e OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** è un abbonamento a pagamento [multipiattaforma](../troubleshooting/setup.md#cross-platform).
- **OsmAnd Start** è una [registrazione gratuita a OsmAnd Cloud](https://osmand.net/blog/start).

La capacità multipiattaforma ti consente di utilizzare OsmAnd Pro su tutte le piattaforme *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Per fare ciò devi:

1. Abbonati a **OsmAnd Pro**. Leggi di più su come farlo per [Android qui](../purchases/android.md#how-to-buy) e per [iOS qui](../purchases/ios.md#how-to-buy).
2. Come creare un account **OsmAnd Start** leggi di più [qui](https://osmand.net/blog/start#how-to-create-an-account).
3. Registra il tuo account [Pro o Start](../troubleshooting/setup.md#cross-platform) sul server OsmAnd all'interno dell'app OsmAnd.
4. L'email registrata sarà il tuo login per attivare OsmAnd Pro sulla piattaforma web. La prima volta sarà necessario scegliere una password per accedere in futuro al portale web (si prega di seguire le istruzioni sul portale web).

- Inserisci la tua *email* e *password* per [osmand.net/map](https://osmand.net/map/).

![Visualizza attivazione OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- I tuoi dati, come tracce (OsmAnd Pro) e preferiti (OsmAnd Pro e OsmAnd Start), appariranno nel menu dopo l'accesso. Sono disponibili per la visualizzazione sulla mappa. Ma devi [sincronizzare questi dati](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) dai tuoi dispositivi.

![Visualizza dati OsmAnd Web](@site/static/img/web/web_data.png)

- Per *SCARICARE BACKUP* da [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), clicca sul campo di login. Sul campo di login puoi vedere le informazioni sui file (numero totale di file, dimensione totale dei file, spazio di archiviazione cloud utilizzato) e le informazioni sull'account (tipo di abbonamento, ora di inizio e ora di scadenza del tuo abbonamento).

![Visualizza file di backup OsmAnd Web](@site/static/img/web/web_backup_file.png)

Scegli i file necessari per il download, il formato `.zip` o `.osf` dei file scaricati e clicca sul pulsante *SCARICA BACKUP*:

![Visualizza file di backup OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

C'è anche un pulsante per *disconnettersi* dall'account.

- *DISCONNETTI*, *ELIMINA IL TUO ACCOUNT* o *Cambia email* li trovi anche sul campo di login. Per aprire *ELIMINA IL TUO ACCOUNT* o *Cambia email* devi cliccare su *Area pericolosa*.

![Visualizza file di backup OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Dati cloud {#cloud-data}

[Tracce e Preferiti](web-map.md#tracks).
<!--
## Stile mappa {#map-style}

In questa sezione del menu, puoi cambiare lo stile della mappa. Puoi leggere di più su come farlo nell'articolo [Mappe vettoriali (Stili mappa)](../map/vector-maps.md) per l'app OsmAnd. Le impostazioni nella versione web non sono diverse.
**Alcuni esempi:**

- Stile mappa nautica

![Stile mappa OsmAnd Web](@site/static/img/web/web_map_style_nautical.png)

- Stile mappa Topo

![Aggiungi preferiti OsmAnd Web](@site/static/img/web/web_map_style_topo.png)
-->



> *Ultimo aggiornamento: settembre 2024*