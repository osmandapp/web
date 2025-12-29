---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: Introduzione
title: Introduzione al Pianificatore Web
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

<!--
<InfoIncompleteArticle/>
-->

## Panoramica {#overview}

Il **Pianificatore Web**, noto anche come [**OsmAnd Map Portal**](https://osmand.net/map), è un'estensione basata su browser dell'app mobile OsmAnd. Consente agli utenti di visualizzare mappe globali, pianificare percorsi, simulare la navigazione, gestire dati personali e accedere a contenuti sincronizzati dai propri dispositivi tramite il cloud.

Progettato come compagno multipiattaforma di OsmAnd per Android e iOS, il Portale Web aiuta gli utenti a pianificare viaggi, analizzare tracce, visualizzare il terreno e gestire file utilizzando qualsiasi browser per desktop o tablet — senza installare un'app.

OsmAnd Web si integra strettamente con il servizio **OsmAnd Cloud**, che consente la sincronizzazione di preferiti, tracce e backup tra dispositivi e piattaforme. Gli utenti con account **OsmAnd Start** (gratuito) o **OsmAnd Pro** (a pagamento) possono sfruttare appieno questo ecosistema sincronizzando i dati tra mobile e web. Puoi trovare un confronto dettagliato delle funzionalità di *Start* e *Pro* nella sezione [Accesso tramite abbonamento](#subscription-access) qui sotto.

> **Nota:** Anche senza accedere o verificare il tuo account, puoi comunque utilizzare diverse funzionalità principali del Portale Mappe Web, tra cui: [Percorso di navigazione](./planner.md), [Pianificatore di percorso](./planner.md), [Sovrapposizioni meteo](./web-map.md#weather-on-the-web) e [Impostazioni](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Funzionalità principali {#key-features}

Il Portale Web offre le seguenti capacità principali per lavorare con mappe e dati personali nel browser: 

- [Mappa](./web-map.md) con copertura globale e dati vettoriali di alta qualità.
- [Pianificazione del percorso](./planner.md) utilizzando profili a piedi, in auto, in bicicletta e altri.
- [Navigazione](./planner.md) con istruzioni passo-passo.
- [Ricerca](./web-search.md) ed [esplorazione](./web-search.md#explore) di luoghi popolari nelle vicinanze.
- Visualizzazione di [Preferiti](./web-map.md#favorites), [Tracce](./web-map.md#tracks) e [POI](./web-map.md#poi-overlay) sulla mappa.
- [Sovrapposizioni meteo](./web-weather.md): vento, temperatura e pressione.
- [Livelli del terreno](./web-map.md#terrain): ombreggiatura, pendenze e vista altimetrica.
- [Analizzatore di tracce](./web-tracks-analyzer.md) per profili di altitudine e velocità.
- Accesso completo ai dati sincronizzati tramite [OsmAnd Cloud](./web-cloud#cloud-sync).
- Supporto per l'importazione/esportazione di file (GPX: tracce, preferiti).
- Integrazione perfetta con **OsmAnd Pro** e **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Accesso tramite abbonamento {#subscription-accesses}

![Account Web](@site/static/img/web/web_start.png) ![Account Web](@site/static/img/web/web_pro.png)

Il Portale Mappe Web supporta diversi livelli di accesso: senza accesso, con OsmAnd Start e con OsmAnd Pro. La tabella qui sotto riassume quali funzionalità sono disponibili a ciascun livello, in modo da poter vedere rapidamente cosa hai già e cosa diventa disponibile con un account o un upgrade. Questa panoramica è pensata per aiutarti a decidere se hai bisogno di un account e, in caso affermativo, quale opzione si adatta meglio al tuo utilizzo di OsmAnd.

| Funzionalità | Disponibile in |
|--------|--------------|
| [Percorso di navigazione](./planner.md) | Senza accesso |
| [Pianificatore di percorso](./planner.md) | Senza accesso |
| [Sovrapposizioni meteo](./web-weather.md) | Senza accesso |
| [Impostazioni](./web-map.md#settings) | Senza accesso |
| [Configura menu mappa](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Preferiti](./web-map.md#favorites), [Tracce](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Configura menu mappa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| <ProFeature/> |
| [Sincronizzazione OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Ricerca web, Luoghi popolari](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) o <ProFeature/> |
| [Cartelle e Livello Tracce](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Come iniziare {#how-to-start}

Per accedere a tutte le funzionalità del Portale Web OsmAnd, è necessario accedere con un account OsmAnd Cloud.

- Se hai già un abbonamento [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o vuoi creare un account gratuito [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), segui questi passaggi:

1. Vai al [**OsmAnd Map Portal**](https://osmand.net/map).
2. Apri il menu **Account**:
   - **Accedi**: Inserisci l'indirizzo email collegato al tuo abbonamento Pro o Start, o
   - **Crea account**: Registrati per un account gratuito OsmAnd Start. Per una guida dettagliata passo-passo alla creazione di un nuovo account, consulta l'articolo [Account OsmAnd](./web-cloud).

![Account Web](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Articoli correlati {#related-articles}

- [Primi passi](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Acquisti Web](../purchases/web.md)
- [Acquisti multipiattaforma](../purchases/cross.md)