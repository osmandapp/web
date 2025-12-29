---
source-hash: bdb9eac116a28f1d5dfc284cdfe30f108124a7c87fbf05c077f70e32504f6445
sidebar_position: 3
sidebar_label: Mappa
title: Mappa Globale sul Sito Web
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


:::info
The *[osmand.net/map](https://osmand.net/map/)* site is currently being developed and tested.  
**Therefore, the layout and operation of some functions on the site may be different from those described in this article.**

We created the [Discussion theme](https://github.com/osmandapp/OsmAnd/discussions/16567) on our GitHub so you can leave feedback there.
:::
-->


## Panoramica {#overview}

La mappa web di OsmAnd è una mappa globale basata sui dati di [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Permette agli utenti di visualizzare i propri dati, come tracce e preferiti, creare percorsi di navigazione per qualsiasi profilo e accedere a funzionalità aggiuntive come meteo, tracce GPX pubbliche, POI e immagini di Wikimedia. Esplora e personalizza la tua esperienza con i dati direttamente nel tuo browser.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu Contestuale della Mappa {#map-context-menu}

Per aprirlo, fare clic con il pulsante destro del mouse in un punto qualsiasi della mappa. Questo menu include le seguenti azioni:

- **Dove sono** – Trova rapidamente la tua posizione attuale sulla mappa. Questa funzione mostra gli indirizzi più vicini al punto selezionato sulla mappa.
- **Apri meteo** – Accedi al [menu Meteo](#weather-on-the-web) per visualizzare i dettagli meteorologici.
- **Crea nuovo percorso** – Apre lo strumento [*Pianifica un percorso*](../web/planner.md#navigation-route) con la posizione selezionata come punto di partenza o di destinazione.
- **Aggiungi Preferito** – Consente di creare e salvare un [preferito](../web/web-favorites.md#add--edit-favorite) in qualsiasi punto della mappa per un facile accesso.
- **Indicazioni da** – Imposta il punto selezionato come [luogo di partenza](../web/planner.md#navigation-route) per la navigazione.
- **Indicazioni per** – Imposta il punto selezionato come [destinazione per la navigazione](../web/planner.md#navigation-route).
- **Copia coordinate** – Copia le coordinate del punto selezionato per uso esterno.
- **Mostra regioni** – Visualizza le regioni associate alla posizione selezionata.

<!--
- **Add pin** – Places a pin to mark a location on the map. ([Example](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))

![Map Context menu](@site/static/img/web/map_context_menu.png)

Add pin option will be added back once it becomes available again.
-->

![Map Context menu](@site/static/img/web/map_context_menu_new.png)


## Menu Configura Mappa {#configure-map-menu}

Il menu Configura Mappa consente di gestire le impostazioni di visualizzazione dei dati della mappa, come i livelli POI, i Preferiti, le tracce e il terreno. Questo menu è disponibile dopo aver effettuato l'accesso al proprio account OsmAnd. Per aprirlo, fare clic sul pulsante nell'**angolo in alto a sinistra** o accedervi tramite il **Menu**.

- [Sovrapposizione POI...](#poi-overlay). Consente di scegliere e mostrare le categorie di POI necessarie sulla mappa.
- [Preferiti](#favorites). Attiva o disattiva la visualizzazione dei preferiti sulla mappa.
- [Tracce](#tracks). Contiene le tracce GPX visibili sulla mappa.  
- [Terreno](#terrain). Abilita o disabilita la combinazione di colori del terreno sulla mappa.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Sovrapposizione POI {#poi-overlay}

La funzionalità di sovrapposizione POI consente di visualizzare i Punti di Interesse (POI) sulla mappa per categorie selezionate. Questo è utile quando si desidera sfogliare i luoghi direttamente sulla mappa.

Per aprire la sovrapposizione: *Menu Configura mappa → Sovrapposizione POI*... L'elenco della sovrapposizione contiene 18 categorie. È possibile abilitare una categoria o abilitare più categorie in qualsiasi combinazione. Quando almeno una categoria è abilitata, la sovrapposizione fornisce un'azione **Deseleziona tutto** per cancellare la selezione in una volta sola.

**Nota:** Se stai cercando un luogo specifico, puoi anche utilizzare la [**sezione Cerca**](web-search.md) sulla mappa.

Una volta visualizzati i POI, la selezione di un marker POI sulla mappa apre il suo pannello di dettagli che mostra le informazioni disponibili per quell'oggetto. A seconda del POI, può includere: nome del luogo e tipo, indirizzo, campi di contatto, identificatori correlati a OSM e coordinate, link di riferimento (Wikipedia, Wikidata), quando presenti. 

Per i POI che hanno foto online, il pannello di dettagli mostra un blocco Foto online con miniature. Mostra tutto apre una vista galleria con l'elenco completo delle foto. Nel visualizzatore di foto, OsmAnd Web visualizza i metadati delle foto quando disponibili, inclusi: data, autore, licenza e descrizione.

Nel pannello di dettagli POI, sono disponibili azioni rapide dai pulsanti di azione:
- *Aggiungi ai Preferiti* — salva il POI nei tuoi Preferiti.
- *Condividi* — genera un link condivisibile che apre il POI direttamente in OsmAnd Web. Il link include il nome del POI, il tipo e le coordinate (pin).
- *Indicazioni da* — imposta il POI selezionato come punto di partenza e apre il pannello Percorso in modo da poter scegliere una destinazione e un profilo.
- *Navigazione* — imposta il POI selezionato come punto di destinazione per la navigazione.

![POIs menu](@site/static/img/web/poi_categories.png) ![POIs menu](@site/static/img/web/poi_photo_new.png)


### Preferiti {#favorites}

Con un solo clic, è possibile attivare o disattivare i preferiti sulla mappa. Tuttavia, verranno visualizzati solo i preferiti con l'opzione [**Mostra sulla mappa abilitata**](../web/web-favorites.md#manage-favorites).


### Tracce {#tracks}

Questa sezione contiene un elenco delle tue [**tracce GPX visibili sulla mappa**](../web/web-tracks.md#visible-on-the-map) e delle tracce **Visibili di recente**.

- È possibile attivare o disattivare le tracce direttamente.  
- Attivare o disattivare le tracce dall'elenco **Visibili di recente**.  

Ogni traccia ha un **Menu Contestuale** (accessibile tramite il pulsante ⋮) con i seguenti comandi:

- **Nascondi traccia**: Nasconde la traccia attualmente visibile dalla mappa.  
- **Rendi traccia visibile**: Visualizza una traccia dall'elenco Visibili di recente sulla mappa.  
- **Rinomina**: Consente di rinominare la traccia per una più facile identificazione.  
- **Duplica**: Crea una copia della traccia.  
- **Scarica**: Salva la traccia sul dispositivo locale.  
- **Elimina**: Rimuove permanentemente la traccia dall'elenco.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Terreno {#terrain}

La sezione **Terreno** è una funzione a pagamento <ProFeature/>. Per utilizzare questa funzione, è necessario prima accedere al proprio account OsmAnd Pro.

In questa sezione è possibile:

- Scegliere una **combinazione di colori** per il terreno:
  - **Ombreggiatura**
  - **Pendenza**
  - **Altezza**
- Regolare la visibilità del livello di terreno selezionato da **0% a 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


## Impostazioni {#settings}

Nel Pianificatore Web, le *Impostazioni generali* (Lingua di visualizzazione, Unità di lunghezza, Unità di velocità) sono disponibili per tutti gli utenti, sia che tu sia connesso o meno. Una volta effettuato l'accesso con il tuo account OsmAnd, appare una sezione aggiuntiva OsmAnd Cloud nel pannello delle Impostazioni. Puoi leggere di OsmAnd Cloud [qui](./web-cloud.md).

### Lingua {#language}

Per cambiare la lingua dell'interfaccia:

*Vai a: Menu → ⚙ Impostazioni → Lingua di visualizzazione*

![Web Language](@site/static/img/web/web_language.png)

### Unità {#units}

*Vai a: Menu → ⚙ Impostazioni → Unità di lunghezza*  
*Vai a: Menu → ⚙ Impostazioni → Unità di velocità*

Puoi scegliere quali unità utilizzare per visualizzare distanza, elevazione e velocità sulla mappa, nei dettagli del percorso e negli strumenti di misurazione. Questo ti aiuta a mantenere OsmAnd coerente con le tue abitudini usuali o gli standard regionali.

L'opzione **Unità di lunghezza** definisce come vengono mostrate la distanza orizzontale e l'elevazione:
- Chilometri/metri.
- Miglia/piedi.
- Miglia/metri.
- Miglia/iarde.
- Miglia nautiche/metri.
- Miglia nautiche/piedi. 

Ad esempio, una distanza di 10 km verrà mostrata come circa 6,21 mi se scegli una delle opzioni Miglia/..., o come circa 5,40 nmi quando viene selezionata Miglia nautiche/....

L'opzione **Unità di velocità** controlla come vengono visualizzate la velocità attuale e i limiti di velocità:
- Chilometri all'ora.
- Miglia all'ora.
- Metri al secondo.
- Minuti per miglio.
- Minuti per chilometro.
- Miglia nautiche all'ora (nodi). 

Ad esempio, una velocità di 90 km/h corrisponde a 25 m/s o circa 55,92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)


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

Per un facile utilizzo del servizio web (e dell'applicazione) di OsmAnd, è possibile usufruire di link diretti. Si tratta di URL speciali che consentono di trasferire dati di localizzazione e includono dettagli su segnaposto, tracce, meteo e altro ancora.

Questi URL possono essere copiati e condivisi con qualsiasi mezzo supportato dal vostro dispositivo e sono compatibili con le versioni Android e iOS di OsmAnd.

1. **URL con un segnaposto sulla mappa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL senza segnaposto sulla mappa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL con navigazione:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

A seconda dei parametri specificati, le stringhe URL possono contenere:

- **latitude**: valore della latitudine come numero.  
- **longitude**: valore della longitudine come numero.  
- **start-finish**: coordinate per la navigazione.  
- **profile**: profilo di navigazione (es. auto, bici).  
- **zoom**: livello di zoom.

4. **Meteo**&nbsp; – &nbsp;`osmand.net/map/weather`

***Ad esempio***, è possibile accedere direttamente alla pagina del meteo con le coordinate specificate:  
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Account**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configura Mappa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Tracce**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Preferiti**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Impostazioni**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Pianifica un Percorso**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Link diretto alla pagina [**Esplora**](https://osmand.net/docs/user/web/web-search#explore) attuale&nbsp; - &nbsp;`osmand.net/map/search`


## Articoli Correlati {#related-articles}

- [Menu Contestuale della Mappa](../map/map-context-menu.md)
- [Account OsmAnd](./web-cloud.md)
- [Tracce](./web-tracks.md)
- [Preferiti](./web-favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)