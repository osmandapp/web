---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
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

## Panoramica {#overview}

Il **Pianificatore Web**, noto anche come [**OsmAnd Map Portal**](https://osmand.net/map), è un'estensione basata su browser dell'app mobile OsmAnd. Consente agli utenti di visualizzare mappe globali, pianificare percorsi, simulare la navigazione, gestire dati personali e accedere a contenuti sincronizzati dai propri dispositivi tramite il cloud.

Progettato come compagno multipiattaforma di OsmAnd per Android e iOS, il Portale Web aiuta gli utenti a pianificare viaggi, analizzare tracce, visualizzare il terreno e gestire file utilizzando qualsiasi browser per desktop o tablet — senza installare un'app.

OsmAnd Web si integra strettamente con il servizio **OsmAnd Cloud**, che consente la sincronizzazione di preferiti, tracce e backup tra dispositivi e piattaforme. Gli utenti con account **OsmAnd Start** (gratuito) o **OsmAnd Pro** (a pagamento) possono sfruttare appieno questo ecosistema sincronizzando i dati tra mobile e web. Puoi trovare un confronto dettagliato delle funzionalità di *Start* e *Pro* nella sezione [Accesso tramite abbonamento](#subscription-accesses) qui sotto.

> **Nota:** Anche senza accedere o verificare il tuo account, puoi comunque utilizzare diverse funzionalità principali del Portale Mappe Web, tra cui: [Percorso di navigazione](./web-navigation.md), [Pianificatore di percorso](./planner.md), [Sovrapposizioni meteo](./web-weather.md), e [Impostazioni](./web-map.md#settings).


## Funzionalità principali {#key-features}

Il Portale Web offre le seguenti capacità principali per lavorare con mappe e dati personali nel browser: 

- [Mappa](./web-map.md) con copertura globale e dati vettoriali di alta qualità.
- [Pianificazione del percorso](./planner.md) utilizzando profili a piedi, in auto, in bicicletta e altri.
- [Navigazione](./web-navigation.md) in anteprima con istruzioni passo-passo.
- [Ricerca](./web-search.md) ed [esplorazione](./web-search.md#explore) di luoghi popolari nelle vicinanze.
- Visualizzazione di [Preferiti](./web-map.md#favorites), [Tracce](./web-map.md#tracks), e [POI](./web-map.md#poi-overlay) sulla mappa.
- [Sovrapposizioni meteo](./web-weather.md): vento, temperatura e pressione.
- [Livelli del terreno](./web-map.md#terrain): ombreggiatura, pendenze e vista altimetrica.
- [Analizzatore di tracce](./web-tracks-analyzer.md) per profili di altitudine e velocità.
- Accesso completo ai dati sincronizzati tramite [OsmAnd Cloud](./web-cloud#cloud-sync).
- Supporto per l'importazione/esportazione di file (GPX: tracce, preferiti).
- Integrazione perfetta con **OsmAnd Pro** e **OsmAnd Start**.

### Accesso tramite abbonamento {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Il Portale Mappe Web supporta diversi livelli di accesso: senza accesso, con OsmAnd Start e con OsmAnd Pro. La tabella qui sotto riassume quali funzionalità sono disponibili a ciascun livello, in modo da poter vedere rapidamente cosa hai già e cosa diventa disponibile con un account o un upgrade. Questa panoramica è pensata per aiutarti a decidere se hai bisogno di un account e, in caso affermativo, quale opzione si adatta meglio al tuo utilizzo di OsmAnd.

| Funzionalità | Disponibile in |
|--------|--------------|
| [Percorso di navigazione](./web-navigation.md) | Senza accesso |
| [Pianificatore di percorso](./planner.md) | Senza accesso |
| [Sovrapposizioni meteo](./web-weather.md) | Senza accesso |
| [Impostazioni](./web-map.md#settings) | Senza accesso |
| [Configura menu mappa](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Preferiti](./web-map.md#favorites), [Tracce](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Configura menu mappa](./web-map.md#configure-map-menu) ([Terreno](./web-map.md#terrain))| [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Sincronizzazione OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Ricerca web, Luoghi popolari](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) o [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Cartelle e Livello Tracce](./web-tracks.md) | [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |


## Come iniziare {#how-to-start}

Per accedere a tutte le funzionalità del Portale Web OsmAnd, è necessario accedere con un account OsmAnd Cloud.

- Se hai già un abbonamento [**OsmAnd Pro**](../personal/osmand-cloud.md#login) o vuoi creare un account gratuito [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), segui questi passaggi:

1. Vai al [**OsmAnd Map Portal**](https://osmand.net/map).
2. Apri il menu **Account**:
   - **Accedi**: Inserisci l'indirizzo email collegato al tuo abbonamento Pro o Start, o
   - **Crea account**: Registrati per un account gratuito OsmAnd Start. Per una guida dettagliata passo-passo alla creazione di un nuovo account, consulta l'articolo [Account OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)


## Articoli correlati {#related-articles}

- [Primi passi](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Acquisti Web](../purchases/web.md)
- [Acquisti multipiattaforma](../purchases/cross.md)