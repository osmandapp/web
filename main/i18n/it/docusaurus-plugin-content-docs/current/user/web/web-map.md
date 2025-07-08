---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Mappa
title: Mappa globale sul sito web
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

:::info
Il sito *[osmand.net/map](https://osmand.net/map/)* è attualmente in fase di sviluppo e test.
**Pertanto, il layout e il funzionamento di alcune funzioni sul sito potrebbero essere diversi da quelli descritti in questo articolo.**

Abbiamo creato il [tema di discussione](https://github.com/osmandapp/OsmAnd/discussions/16567) sul nostro GitHub in modo che tu possa lasciare un feedback lì.
:::


## Panoramica {#overview}

La mappa web di OsmAnd è una mappa globale basata sui dati di [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Consente agli utenti di visualizzare i propri dati, come tracce e preferiti, creare percorsi di navigazione per qualsiasi profilo e accedere a funzionalità aggiuntive come meteo, tracce GPX pubbliche, POI e immagini di Wikimedia. Esplora e personalizza la tua esperienza con i dati direttamente nel tuo browser.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu contestuale della mappa {#map-context-menu}

Per aprirlo, fai clic con il pulsante destro del mouse in qualsiasi punto della mappa. Questo menu include le seguenti azioni:

- **Dove sono** – Trova rapidamente la tua posizione attuale sulla mappa. Questa funzione visualizza gli indirizzi più vicini al punto selezionato sulla mappa.
- **Apri meteo** – Accedi al [menu Meteo](#weather-on-the-web) per visualizzare i dettagli meteorologici.
- **Crea nuovo percorso** – Apre lo strumento [*Pianifica un percorso*](../web/planner.md#create-track-and-local) con la posizione selezionata come punto di partenza o di destinazione.
- **Aggiungi preferito** – Ti consente di creare e salvare un [preferito](../web/web-userdata.mdx#add--edit-favorite) in qualsiasi punto della mappa per un facile accesso.
- **Indicazioni da** – Imposta il punto selezionato come [posizione di partenza](../web/planner.md#navigation-route) per la navigazione.
- **Indicazioni per** – Imposta il punto selezionato come [destinazione per la navigazione](../web/planner.md#navigation-route).
- **Copia coordinate** – Copia le coordinate del punto selezionato per uso esterno.
- **Aggiungi segnaposto** – Posiziona un segnaposto per contrassegnare una posizione sulla mappa. ([Esempio](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Mostra regioni** – Visualizza le regioni associate alla posizione selezionata.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Meteo sul Web {#weather-on-the-web}

OsmAnd Web fornisce informazioni meteorologiche da due fonti di previsione:

- **GFS (predefinito)**
- **ECMWF**

Per passare da una fonte di previsione all'altra, fai clic sul **pulsante dell'ombrello** nel menu Meteo.

***Funzioni del menu meteo:***

- **Dati meteorologici attuali**: Visualizza le tue coordinate insieme ai seguenti dati:

  - Temperatura.
  - Precipitazioni.
  - Vento.
  - Pressione atmosferica.
  - Copertura nuvolosa.

- **Regolazione dell'ora**: Modifica la data e l'ora utilizzando lo **strumento ora** nel menu Meteo per visualizzare il meteo per un momento specifico.

***Livelli meteo sulla mappa:***

- Utilizza il **pulsante livelli** per selezionare e abilitare livelli meteo come:

  - Temperatura.
  - Pressione.
  - Vento.
  - Copertura nuvolosa.
  - Precipitazioni.

***Visualizzazione delle previsioni:***

- Le previsioni meteorologiche sono disponibili per le previsioni a **7 giorni**.
- Gli aggiornamenti delle previsioni sono forniti a **intervalli di 3 ore** per informazioni dettagliate.

Per accedere o personalizzare queste funzionalità, utilizza i menu sul lato sinistro o destro dell'interfaccia.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***Previsioni a 7 giorni***:

Fai clic sui dati delle previsioni nel menu per visualizzare le **previsioni a 7 giorni** per la tua posizione. Le previsioni sono disponibili in:

- **Formato grafico**
- **Formato elenco**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Menu Configura mappa {#configure-map-menu}

Il menu Configura mappa ti consente di gestire le impostazioni di visualizzazione per i dati della mappa, come livelli POI, Preferiti, tracce e terreno. Effettua il login al tuo account OsmAnd per utilizzare questa sezione del menu.

Per aprire questo menu, fai clic sul pulsante nell'**angolo in alto a sinistra** o accedi tramite il **Menu**.

- [Sovrapposizione POI...](#poi-overlay-section). Ti consente di scegliere e mostrare le categorie di POI necessarie sulla mappa.
- [Preferiti](#favorites-section). Attiva o disattiva la visualizzazione dei preferiti sulla mappa.
- [Tracce](#tracks-section). Contiene le tracce GPX visibili sulla mappa.
- [Terreno](#terrain-section). Abilita o disabilita lo schema di colori del terreno sulla mappa.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Sezione Sovrapposizione POI {#poi-overlay-section}

Per mostrare i POI sulla mappa:

*Menu Configura mappa → Sovrapposizione POI...*. Qui puoi scegliere le categorie da visualizzare sulla mappa.

In alternativa, puoi utilizzare la [**sezione Cerca**](web-search.md) per trovare il luogo desiderato.

![POIs menu](@site/static/img/web/poi_menu.png)


### Sezione Preferiti {#favorites-section}

Con un clic, puoi attivare o disattivare i preferiti sulla mappa. Tuttavia, verranno visualizzati solo i preferiti con [**Mostra sulla mappa abilitato**](../web/web-userdata.mdx##favorites-on-the-web).


### Sezione Tracce {#tracks-section}

Questa sezione contiene un elenco delle tue [**tracce GPX visibili sulla mappa**](../web/web-userdata.mdx#visible-on-the-map) e delle tracce **Visualizzate di recente**.

- Puoi attivare o disattivare le tracce direttamente.
- Attivare o disattivare le tracce dall'elenco **Visualizzate di recente**.

Ogni traccia ha un **Menu contestuale** (accessibile tramite il pulsante ⋮) con i seguenti comandi:

- **Nascondi traccia**: Nasconde la traccia attualmente visibile dalla mappa.
- **Rendi traccia visibile**: Visualizza una traccia dall'elenco Visualizzate di recente sulla mappa.
- **Rinomina**: Ti consente di rinominare la traccia per una più facile identificazione.
- **Duplica**: Crea una copia della traccia.
- **Scarica**: Salva la traccia sul tuo dispositivo locale.
- **Elimina**: Rimuove definitivamente la traccia dall'elenco.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Sezione Terreno {#terrain-section}

La sezione **Terreno** è una funzionalità a pagamento <ProFeature/>. Per utilizzare questa funzionalità, devi prima accedere al tuo account OsmAnd Pro.

In questa sezione, puoi:

- Scegliere uno **schema di colori** per il terreno:
  - **Rilievo ombreggiato**
  - **Pendenza**
  - **Altezza**
- Regolare la visibilità del livello di terreno selezionato da **0% a 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Schemi URL {#url-schemes}

Per un facile utilizzo del servizio web (e dell'applicazione) di OsmAnd, puoi sfruttare i link diretti. Si tratta di URL speciali che ti consentono di trasferire dati di posizione e includere dettagli su segnaposto, tracce, meteo e altro ancora.

Questi URL possono essere copiati e condivisi utilizzando qualsiasi mezzo supportato dal tuo dispositivo e sono compatibili con le versioni Android e iOS di OsmAnd.

1. **URL con un segnaposto sulla mappa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL senza un segnaposto sulla mappa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL con navigazione:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

A seconda dei parametri specificati, le stringhe URL possono contenere:

- **latitude**: valore della latitudine come numero.
- **longitude**: valore della longitudine come numero.
- **start-finish**: coordinate per la navigazione.
- **profile**: profilo di navigazione (ad es. auto, bici).
- **zoom**: livello di zoom.

4. **Meteo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Ad esempio***, puoi accedere direttamente alla pagina meteo con le coordinate specificate:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configura mappa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracce**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Preferiti**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Impostazioni**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Pianifica un percorso**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Link diretto alla [**pagina Esplora**](https://osmand.net/docs/user/web/web-search#explore) attuale&nbsp; - &nbsp;`osmand.net/map/search`


> *Ultimo aggiornamento: Gennaio 2025*