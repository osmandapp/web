---
source-hash: 433d6d08e49e6890daaaa46fc6b20c35ff2894dc6f351cae5e275a638a825736
sidebar_position: 10
title:  Percorsi
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

OsmAnd ha molte potenti funzionalità per visualizzare diversi [percorsi](#type-of-routes) sulla mappa. Per impostazione predefinita, questi percorsi fanno parte delle [mappe vettoriali](./vector-maps.md#routes) (dati OpenStreetMap), tuttavia una funzionalità simile è fornita dalle [tracce](./tracks/index.md) che possono essere create con [Pianifica un percorso](../plan-route/create-route.md), importate come [tracce GPX](#save-as-a-track), registrate con il [plugin Registrazione viaggio](../plugins/trip-recording.md). La legenda della mappa dei percorsi si trova [qui](../map-legend/osmand.md#routes).


## Tipi di percorsi {#type-of-routes}

I percorsi rappresentano diverse attività all'aperto utilizzando i dati di [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Toccando **l'icona a scudo con un numero di percorso o una bandierina del percorso** sulla mappa si aprirà un menu contestuale che fornisce informazioni aggiuntive sul percorso e consente di utilizzarlo come parte della navigazione.

È possibile configurare il filtraggio di alcuni tipi di percorso nel menu [Configura mappa](../map/configure-map-menu.md).

### Percorsi ciclabili {#cycle-routes}

I [percorsi ciclabili](https://wiki.openstreetmap.org/wiki/Cycle_routes) sono presenti in tre tipi: *locali* (`lcn`), *regionali* (`rcn`), *nazionali* (`ncn`), *internazionali* (`icn`). Inoltre, i percorsi ciclabili potrebbero far parte di [Reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). È possibile scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="layer_route"/>***.  
![Mappa percorsi - percorsi ciclabili](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Mappa percorsi - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)

Potete trovare maggiori informazioni nell'articolo [Legenda della mappa](../map-legend/index.md).


### Percorsi per mountain bike {#mountain-bike-routes}

I percorsi MTB hanno una mappatura specifica in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e possono essere selezionati separatamente dai percorsi ciclabili.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Mostra i sentieri secondo la scala MTB. Maggiori informazioni si trovano nell'articolo [Legenda della mappa](../map-legend/index.md).  
![Mappa percorsi - sentieri MTB](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Mostra i sentieri MTB secondo l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Maggiori informazioni si trovano nell'articolo [Legenda della mappa](../map-legend/index.md).  
![Mappa percorsi - sentieri MTB](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Percorsi escursionistici / pedonali {#hiking--walking-routes}

I [percorsi escursionistici](https://wiki.openstreetmap.org/wiki/Walking_Routes) sono presenti in tre tipi: *locali* (`lwn`), *regionali* (`rwn`), *nazionali* (`nwn`), *internazionali* (`iwn`). Inoltre, i percorsi pedonali potrebbero far parte di [Reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd non separa i percorsi pedonali da quelli escursionistici e li combina in un unico gruppo. È possibile scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Colora i percorsi in base al loro [colore locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuale (se disponibile in OpenStreetMap) e al simbolo dello scudo turistico.  
![Mappa percorsi - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Colora in base all'[appartenenza alla rete](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Mappa percorsi - rete escursionistica](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Colora i percorsi in base al tipo di [rete di nodi](https://wiki.openstreetmap.org/wiki/Node_Networks) (internazionale, regionale o locale).  
![Mappa percorsi - reti di nodi escursionistici](@site/static/img/map/map-routes-hiking-node-networks.png)


### Percorsi da Dirt Bike {#dirt-bike-trails}

![Mappa percorsi - Percorsi da Dirt Bike](@site/static/img/map/map-routes-dirt-bike-trails.png)

La funzione **Percorsi da Dirt Bike** consente di visualizzare sulla mappa percorsi specifici per dirt bike basati sul tag `dirtbike:scale`. Questa scala evidenzia i sentieri adatti al dirt biking, con una sovrapposizione colorata che mostra i livelli di difficoltà ([Legenda della mappa](../map-legend/osmand.md#routes)).  

È possibile attivare questa funzione in *Menu → Configura mappa → Percorsi → Percorsi da dirt bike*. Il sistema funziona in modo simile alla scala MTB, offrendo una rappresentazione visiva dei percorsi su misura per il dirt biking — maggiori informazioni sul [tag `dirtbike` possono essere trovate qui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Vie di arrampicata {#climbing-routes}

![Mappa percorsi - Vie di arrampicata](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd supporta *aree di arrampicata* (`climbing=area`) e *falesie di arrampicata* (`climbing=crag`), consentendo di trovare luoghi di [arrampicata su roccia](https://wiki.openstreetmap.org/wiki/Climbing) direttamente sulla mappa.

- Le **aree di arrampicata** rappresentano **zone più ampie** dove esistono più vie di arrampicata.

- Le **falesie di arrampicata** si riferiscono a **specifiche formazioni rocciose** o pareti adatte all'arrampicata.

- Queste località includono **attributi dettagliati** come:

    - *Grado di arrampicata* (es. UIAA, Francese, YDS).
    - *Tipo di roccia* (es. calcare, granito).
    - *Lunghezza della via* (in metri).
    - *Qualità dell'arrampicata* (solida, friabile, mista).
    - *Disponibilità del libro di vetta*.

Per abilitare le località di arrampicata sulla mappa, andare su: *Menu → Configura Mappa → Percorsi → Vie di arrampicata*.


### Grado di difficoltà dei sentieri escursionistici {#hiking-trails-difficulty-grade}

![Mappa percorsi - escursionismo alpino](@site/static/img/map/map-routes-alpine-hiking.png)

Alcuni segmenti di strada potrebbero far parte di molti percorsi, ma potrebbero essere colorati individualmente per rappresentare la difficoltà del segmento in aree montuose. Attualmente, OsmAnd supporta le classificazioni italiana e svizzera, e ognuna ha un elenco specifico di requisiti di attrezzatura per accedere a questo segmento.  

1. [Scala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Scala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Piste da sci e percorsi {#ski-slopes-and-routes}

- _Piste da sci e percorsi_ nello stile di mappa _Invernale e Sci_.  
![Mappa percorsi - piste da sci](@site/static/img/map/map-routes-ski-slopes.png)

- _Piste da sci e percorsi_ nello stile di mappa _OsmAnd predefinito_.  
![Mappa percorsi - piste da sci](@site/static/img/map/map-routes-ski-slopes_1.png)

Le piste da sci e i percorsi sono un gruppo specifico di [percorsi](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Tipicamente, questi percorsi possono essere utilizzati con lo stile di mappa [Invernale e Sci](../map/vector-maps.md#winter-and-ski) con tutte le [Piste](https://wiki.openstreetmap.org/wiki/Pistes) visibili. Se è attivo un altro stile di mappa, viene mostrato un banner che suggerisce di passare a [Invernale e Sci](../map/vector-maps.md#winter-and-ski) (*solo Android*) e vengono mostrate solo le Piste. Tocca ***Passa a*** per cambiare lo stile di mappa senza lasciare la schermata corrente, o ***Più tardi*** per nascondere il banner.


### Sentieri per motoslitta {#snowmobile-trails}

![Mappa percorsi - motoslitta](@site/static/img/map/snowmobile_trail.png)

I sentieri per motoslitta sono mappati in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) come `route=snowmobile`. Sono utilizzati per il tempo libero invernale e per collegare aree remote durante la stagione nevosa. In OsmAnd, i sentieri per motoslitta sono cliccabili, vedere la sezione [Azioni con i percorsi](#actions-with-routes).


### Percorsi a cavallo {#horse-routes}

![Mappa percorsi - percorsi a cavallo](@site/static/img/map/map-routes-horse.png)

I [percorsi a cavallo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sono visualizzati come percorsi indicati da colori con simboli per l'equitazione.  


### Sport in acque bianche {#whitewater-sports}

![Mappa percorsi - sport acquatici](@site/static/img/map/map-routes-whitewater-sport.png)

I [percorsi per acque bianche](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sono mostrati insieme a icone di accesso, zone di pericolo per il [turismo in acque bianche](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Percorsi di corsa {#running-routes}

![Percorsi fitness](@site/static/img/map/fitness_1.png)

I [percorsi di corsa](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap sono utilizzati per percorsi di corsa nominati, numerati o altrimenti contrassegnati, principalmente per l'atletica.


### Percorsi vita {#fitness-trails}

![Percorsi fitness](@site/static/img/map/fitness_route.png)

Un [percorso vita](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) è un sentiero o un percorso attrezzato con ostacoli o stazioni lungo la sua lunghezza per esercitare il corpo umano al fine di migliorare la salute.  


### Percorsi di viaggio {#travel-routes}

<InfoAndroidOnly />

![Percorsi di viaggio](@site/static/img/map/travel_route_2.png)  ![Percorsi di viaggio](@site/static/img/map/travel_routes.png)

I percorsi di viaggio fanno parte di file personalizzati [Guida di viaggio](../plan-route/travel-guides.md) (`travel.obf`), che possono essere generati dai [percorsi dell'utente](https://osmand.net/blog/routes#generated-travel-routes) o far parte di [plugin](../plugins/index.md) aggiuntivi.  

È possibile personalizzare la visualizzazione di determinate ***Guide di viaggio*** e tipi di ***tracce***, visualizzare le tracce come punti o ***Gruppi di punti*** (ad esempio per le guide di viaggio di Wikivoyage). Scopri di più sulle [Guide di viaggio qui](../plan-route/travel-guides.md).


## Visualizzare i percorsi sulla mappa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Sezione Configura Mappa Percorsi](@site/static/img/map/configure_map_routes_android.png) ![Classi di percorsi](@site/static/img/map/routes_classes_android.png)

- Per visualizzare i percorsi richiesti sulla mappa, abilitali nell'elenco *Percorsi* del menu [Configura mappa](../map/configure-map-menu.md).
- OsmAnd può evidenziare i [percorsi presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Possono essere selezionati toccando [il simbolo sul percorso](#save-as-a-track) e, se l'insieme visibile di percorsi è configurato correttamente, è possibile seguire il colore e le icone.
- I tipi principali di percorso possono essere filtrati anche per classi e sottoclassi, consentendo di visualizzare solo gruppi specifici all'interno di ciascun tipo. Ad esempio, è possibile mostrare i percorsi escursionistici per **simboli OSMC** come classi e per *reti internazionali, nazionali, regionali* o *locali* come sottoclassi.
- È possibile creare una traccia sopra i percorsi utilizzando lo strumento [Pianifica un percorso](../plan-route/create-route.md).  

![Mappa percorsi - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Mappa percorsi - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu Tracce iOS](@site/static/img/map/configure_map_routes_ios.png)

- Per visualizzare i percorsi richiesti sulla mappa, abilitali nell'elenco *Percorsi* del menu [Configura mappa](../map/configure-map-menu.md).
- OsmAnd può evidenziare i [percorsi presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Possono essere selezionati toccando [il simbolo sul percorso](#save-as-a-track) e, se l'insieme visibile di percorsi è configurato correttamente, è possibile seguire il colore e le icone.
- È possibile creare una traccia sopra i percorsi utilizzando lo strumento [Pianifica un percorso](../plan-route/create-route.md).  

![Mappa percorsi - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Mappa percorsi - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Dettagli area e falesia di arrampicata {#climbing-area-and-crag-details}

![Dettagli arrampicata](@site/static/img/map/climbing_andr.png)

Quando si seleziona un'[area o falesia di arrampicata](../map/routes.md#climbing-routes), OsmAnd fornisce un riepilogo dettagliato della località di arrampicata, tra cui: nome e posizione, grado di difficoltà dell'arrampicata (UIAA, Francese, YDS, ecc.), tipo di roccia, altezza e lunghezza della via, qualità dell'arrampicata e condizioni della superficie.


## Azioni con i percorsi {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info percorso](@site/static/img/map/routes_osm.png) ![Info percorso](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info percorso](@site/static/img/map/routes_osm_ios_new.png) ![Info percorso](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Sulla mappa, è possibile selezionare percorsi per [escursionismo, ciclismo, sci, MTB, dirt bike, viaggio e altro](#type-of-routes). Dove disponibili, i percorsi escursionistici visualizzano i loro segnavia utilizzando [simboli OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); altri tipi di percorso utilizzano i propri contrassegni.

Quando si tocca un **simbolo del percorso** sulla mappa:

- Viene visualizzato un **elenco dei percorsi vicini** in quella posizione.
- Dopo aver selezionato un percorso dall'elenco, si apre un [menu contestuale](../map/tracks/track-context-menu.md) per quel percorso, che mostra informazioni dettagliate e le azioni disponibili.

Nel **menu contestuale**, è possibile:

- Visualizzare [informazioni aggiuntive](#route-info-and-elevation) sul percorso selezionato.
- [Salvare il percorso](#save-as-a-track) come **traccia GPX**.
- [Avviare la navigazione](#start-navigation) lungo il percorso.


### Informazioni sul percorso e altitudine {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info percorso](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info percorso](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Le seguenti informazioni saranno visibili nel menu contestuale:

- **Info percorso**: Nome del percorso, link OSM (richiede il plugin OSM Editing), Tipo, Descrizione, Distanza, Direzione, Salita/Discesa, Intervallo di altitudine, Rete, Operatore, Stato, Colore, Percorso ad anello, Punti di inizio/fine e altro.
- **Generale**: Dimensioni, Posizione, Creato il.
- **Info aggiuntive**. Mostra il tipo di attività.
- pulsanti di azione: [Salva come](#save-as-a-track) e [Avvia navigazione](#start-navigation).
- [Informazioni sull'altitudine](../navigation/setup/route-details.md#elevation-info). Mostra informazioni sui dati di altitudine del percorso.
- [Analizza traccia sulla mappa](../map/tracks/index.md#analyze-track-on-map). Mostra un'analisi dettagliata dei dati della traccia utilizzando grafici e mappe.

Per visualizzare il grafico dell'altitudine, della pendenza o i dettagli dell'altitudine per un percorso selezionato, è sufficiente toccare uno dei seguenti valori nel menu contestuale: **Distanza**, **Salita**, **Discesa** o **Altitudine**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Salva come traccia {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/routes-4.png)   ![Percorsi sul terreno](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/hiking.png)   ![Percorsi sul terreno](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Per salvare il percorso come *file GPX*, toccare il pulsante **Salva (Download)** sotto il [pannello Info](../map/tracks/track-context-menu.md#info-panel). Questo aprirà il pannello dei pulsanti [Azioni rapide](../map/tracks/track-context-menu.md#track-actions) dove si avrà accesso alle azioni sulla traccia come la modifica dell'[Aspetto](./tracks/appearance.md), la [Navigazione](../navigation/setup/route-navigation.md) o la modifica in [Pianifica un percorso](../plan-route/create-route.md).


### Avvia navigazione {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Per avviare la navigazione lungo il percorso OSM selezionato, toccare il pulsante **Avvia navigazione** nel [**pannello Info**](../map/tracks/track-context-menu.md#info-panel).

Questo avvierà la modalità [**Navigazione tramite traccia**](../navigation/setup/gpx-navigation.md), consentendo di seguire il percorso con guida vocale e funzioni di navigazione.



### Azioni rapide {#quick-actions}

È possibile personalizzare se i percorsi sono attivati o disattivati utilizzando il widget [Azione rapida](../widgets/quick-action.md#configure-map).


## Ricerca percorsi {#routes-search}

Trova i percorsi utilizzando la [funzione Cerca](../search/index.md) per nome o selezionando "Percorsi" nella [sezione Categorie](../search/search-poi.md#).

Per cercare, vai al menu *<Translate android="true" ids="search_button"/>* o *<Translate android="true" ids="search_button,search_categories"/>* e inserisci la tua attività.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Vai a *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* per trovare i percorsi desiderati. I percorsi includono nome, tipo di attività, lunghezza, posizione e distanza dal punto più vicino.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Utilizza il pulsante dei filtri (angolo in alto a destra) per visualizzare solo i percorsi desiderati.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search_2.png) ![Percorsi sul terreno](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_2_ios.png) ![Percorsi sul terreno](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](./map-context-menu.md)
- [Configura mappa](./configure-map-menu.md)
- [Tracce](./tracks/index.md)
- [Menu contestuale delle tracce](./tracks/track-context-menu.md)
- [Trasporto pubblico](./public-transport.md)
- [Aspetto della linea del percorso di navigazione](../navigation/guidance/map-during-navigation.md#route-line-appearance)