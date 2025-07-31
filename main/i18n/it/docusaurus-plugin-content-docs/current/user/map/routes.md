---
source-hash: 24073bbbba8108ac4befa02adbada3ce95bc6b6c5197b214d7ffa297c6ee56c5
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

OsmAnd dispone di molte potenti funzionalità per visualizzare diversi [percorsi](#type-of-routes) sulla mappa. Per impostazione predefinita, questi percorsi fanno parte delle [mappe vettoriali](./vector-maps.md#routes) (dati OpenStreetMap), tuttavia funzionalità simili sono fornite dalle [tracce](./tracks/index.md) che possono essere create con [Pianifica un percorso](../plan-route/create-route.md), importate come [tracce GPX](#save-as-a-track), registrate con il [plugin Registrazione viaggio](../plugins/trip-recording.md).


## Tipo di percorsi {#type-of-routes}

I percorsi rappresentano diverse attività all'aperto utilizzando i dati di [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Toccando **l'icona dello scudo con un numero di percorso o una bandiera di percorso** sulla mappa si aprirà un menu contestuale che fornisce informazioni aggiuntive sul percorso e consente di utilizzarlo come parte della navigazione.

È possibile configurare il filtro di alcuni tipi di percorso nel menu [Configura mappa](../map/configure-map-menu.md).

### Percorsi ciclabili {#cycle-routes}

I [percorsi ciclabili](https://wiki.openstreetmap.org/wiki/Cycle_routes) sono presenti in tre tipi: *locale* (`lcn`), *regionale* (`rcn`), *nazionale* (`ncn`), *internazionale* (`icn`). Inoltre, i percorsi ciclabili potrebbero far parte delle [reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). È possibile scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="layer_route"/>***.  
![Mappa percorsi - percorsi ciclabili](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Mappa percorsi - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)

Maggiori informazioni sono disponibili nell'articolo [Legenda mappa](../map-legend/index.md).


### Percorsi per mountain bike {#mountain-bike-routes}

I percorsi MTB hanno una mappatura specifica in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e possono essere selezionati separatamente dai percorsi ciclabili.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Mostra i sentieri in base alla scala MTB. Maggiori informazioni sono disponibili nell'articolo [Legenda mappa](../map-legend/index.md).  
![Mappa percorsi - sentieri MTB](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Mostra i sentieri MTB in base alla International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Maggiori informazioni sono disponibili nell'articolo [Legenda mappa](../map-legend/index.md).  
![Mappa percorsi - sentieri MTB IMBA](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Percorsi escursionistici / pedonali {#hiking--walking-routes}

I [percorsi escursionistici](https://wiki.openstreetmap.org/wiki/Walking_Routes) sono presenti in tre tipi: *locale* (`lwn`), *regionale* (`rwn`), *nazionale* (`nwn`), *internazionale* (`iwn`). Inoltre, i percorsi pedonali potrebbero far parte delle [reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd non separa i percorsi pedonali e escursionistici e li combina in un unico gruppo. È possibile scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colora i percorsi in base al loro [colore locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuale (se disponibile in OpenStreetMap) e al simbolo dello scudo turistico.  
![Mappa percorsi - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colora in base all'[affiliazione alla rete](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Mappa percorsi - rete escursionistica](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colora i percorsi in base al tipo di [rete di nodi](https://wiki.openstreetmap.org/wiki/Node_Networks) (internazionale, regionale o locale).  
![Mappa percorsi - reti di nodi escursionistici](@site/static/img/map/map-routes-hiking-node-networks.png)


### Percorsi per moto da cross {#dirt-bike-trails}

![Mappa percorsi - Percorsi per moto da cross](@site/static/img/map/map-routes-dirt-bike-trails.png)

La funzione **Percorsi per moto da cross** consente di visualizzare sulla mappa percorsi specifici per moto da cross basati sul tag `dirtbike:scale`. Questa scala evidenzia i sentieri adatti al dirt biking, con una sovrapposizione colorata che mostra i livelli di difficoltà.  

È possibile attivare questa funzione in *Menu → Configura mappa → Percorsi → Percorsi per moto da cross*. Il sistema funziona in modo simile alla scala MTB, offrendo una rappresentazione visiva dei percorsi adattati al dirt biking — maggiori informazioni sul [tag `dirtbike` sono disponibili qui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Vie di arrampicata {#climbing-routes}

![Mappa percorsi - Vie di arrampicata](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd supporta le *aree di arrampicata* (`climbing=area`) e le *falesie di arrampicata* (`climbing=crag`), consentendoti di trovare i luoghi per l'[arrampicata su roccia](https://wiki.openstreetmap.org/wiki/Climbing) direttamente sulla mappa.

- Le **aree di arrampicata** rappresentano **zone più ampie** dove esistono più vie di arrampicata.

- Le **falesie di arrampicata** si riferiscono a **formazioni rocciose specifiche** o pareti adatte all'arrampicata.

- Queste posizioni includono **attributi dettagliati** come:

    - *Grado di arrampicata* (ad esempio, UIAA, francese, YDS).
    - *Tipo di roccia* (ad esempio, calcare, granito).
    - *Lunghezza del percorso* (in metri).
    - *Qualità dell'arrampicata* (solida, friabile, mista).
    - *Disponibilità del registro di vetta*.

Per abilitare le posizioni di arrampicata sulla mappa, vai a: *Menu → Configura mappa → Percorsi → Vie di arrampicata*.


### Grado di difficoltà dei sentieri escursionistici {#hiking-trails-difficulty-grade}

![Mappa percorsi - escursionismo alpino](@site/static/img/map/map-routes-alpine-hiking.png)

Alcuni segmenti stradali potrebbero far parte di molti percorsi, ma potrebbero essere colorati individualmente per rappresentare la difficoltà del segmento in aree montuose. Attualmente, OsmAnd supporta le classificazioni italiane e svizzere, e ognuna ha un elenco specifico di requisiti di attrezzatura per accedere a questo segmento.  

1. [Scala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Scala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Percorsi sciistici {#ski-routes}

![Mappa percorsi - piste da sci](@site/static/img/map/map-routes-ski-slopes.png)

I percorsi sciistici sono un gruppo specifico di [percorsi](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Tipicamente, questi percorsi potrebbero essere utilizzati con lo stile di mappa [Inverno e sci](../map/vector-maps.md#winter-and-ski) con tutte le [Piste](https://wiki.openstreetmap.org/wiki/Pistes) visibili.  


### Percorsi a cavallo {#horse-routes}

![Mappa percorsi - percorsi a cavallo](@site/static/img/map/map-routes-horse.png)

I [percorsi a cavallo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sono visualizzati come percorsi colorati con simboli per l'equitazione.  


### Sport acquatici {#whitewater-sports}

![Mappa percorsi - sport acquatici](@site/static/img/map/map-routes-whitewater-sport.png)

I [percorsi di sport acquatici](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sono mostrati insieme a icone di accesso, zone di pericolo per il [turismo acquatico](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Percorsi di corsa {#running-routes}

![Percorsi fitness](@site/static/img/map/fitness_1.png)

I [percorsi di corsa](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap sono utilizzati per percorsi di corsa nominati, numerati o altrimenti contrassegnati, principalmente per l'atletica.


### Percorsi fitness {#fitness-trails}

![Percorsi fitness](@site/static/img/map/fitness_route.png)

Un [percorso fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) è un sentiero o un percorso attrezzato con ostacoli o stazioni lungo la sua lunghezza per esercitare il corpo umano al fine di migliorare la salute.  


### Percorsi di viaggio {#travel-routes}

<InfoAndroidOnly />

![Percorsi di viaggio](@site/static/img/map/travel_route_2.png)  ![Percorsi di viaggio](@site/static/img/map/travel_routes.png)

I percorsi di viaggio fanno parte dei file personalizzati [Libro di viaggio](../plan-route/travel-guides.md) (`travel.obf`), che possono essere generati dai [percorsi dell'utente](https://osmand.net/blog/routes#generated-travel-routes) o far parte di [plugin](../plugins/index.md) aggiuntivi.  

È possibile personalizzare la visualizzazione di alcuni ***Libri di viaggio*** e tipi di ***tracce***, visualizzare le tracce come punti o ***gruppi di punti*** (ad esempio per i libri di viaggio di Wikivoyage). Maggiori informazioni sulle [Guide di viaggio qui](../plan-route/travel-guides.md).


## Visualizza percorsi sulla mappa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Sezione Percorsi Configura Mappa](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu traccia iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Per visualizzare i percorsi richiesti sulla mappa, abilitarli nell'*elenco Percorsi* del menu [Configura mappa](../map/configure-map-menu.md).
- OsmAnd può evidenziare i [percorsi presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Possono essere selezionati toccando [il simbolo sul percorso](#save-as-a-track), e se il set visibile di percorsi è configurato correttamente, è possibile seguire il colore e le icone.
- È possibile creare una traccia sopra i percorsi utilizzando lo strumento [Pianifica un percorso](../plan-route/create-route.md).  

![Mappa percorsi - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Mappa percorsi - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)



## Azioni con i percorsi {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informazioni sul percorso](@site/static/img/map/routes_osm.png) ![Informazioni sul percorso](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informazioni sul percorso](@site/static/img/map/routes_osm_ios.png) ![Informazioni sul percorso](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Sulla mappa, è possibile selezionare percorsi per [escursioni, cicloturismo, viaggi e altro](#type-of-routes), che sono contrassegnati con [simboli OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) ove applicabile.

Quando si tocca un **simbolo di percorso** sulla mappa:

- Viene visualizzato un **elenco dei percorsi vicini** in quella posizione.
- Dopo aver selezionato un percorso dall'elenco, si apre un [menu contestuale](../map/tracks/track-context-menu.md) per quel percorso, che mostra informazioni dettagliate e azioni disponibili.

Nel **menu contestuale**, è possibile:

- Visualizzare [informazioni aggiuntive](#route-info-and-elevation) sul percorso selezionato.
- [Salvare il percorso](#save-as-a-track) come **traccia GPX**.
- [Avviare la navigazione](#start-navigation) lungo il percorso.


### Informazioni sul percorso e altitudine {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informazioni sul percorso](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informazioni sul percorso](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Le seguenti informazioni saranno visibili nel menu contestuale:

- **Info percorso**: Nome percorso, link OSM (richiesto plugin OSM Editing), Tipo, Descrizione, Distanza, Direzione, Salita/Discesa, Intervallo altitudine, Rete, Operatore, Stato, Colore, Giro, Punti di inizio/fine e altro.
- **Generale**: Dimensione, Posizione, Creato il.
- **Info aggiuntive**. Visualizza il tipo di attività.
- Pulsanti azione: [Salva come](#save-as-a-track) e [Avvia navigazione](#start-navigation).
- [Info altitudine](../navigation/setup/route-details.md#elevation-info). Visualizza informazioni sui dati di altitudine sul percorso.
- [Analizza traccia sulla mappa](../map/tracks/index.md#analyze-track-on-map). Visualizza un'analisi dettagliata dei dati della traccia utilizzando grafici e mappe.

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


Per salvare il percorso come *file GPX*, toccare il pulsante **Salva (Scarica)** sotto il [pannello Info](../map/tracks/track-context-menu.md#info-panel). Questo aprirà il pannello dei pulsanti [Azioni rapide](../map/tracks/track-context-menu.md#track-actions) dove si avrà accesso alle azioni della traccia come la modifica dell'[Aspetto](./tracks/appearance.md), la [Navigazione](../navigation/setup/route-navigation.md) o la modifica di [Pianifica un percorso](../plan-route/create-route.md).


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

Questo avvierà la modalità [**Navigazione per traccia**](../navigation/setup/gpx-navigation.md), consentendoti di seguire il percorso con guida vocale e funzionalità di navigazione.



### Azioni rapide {#quick-actions}

È possibile personalizzare l'attivazione o la disattivazione dei percorsi utilizzando il widget [Azioni rapide](../widgets/quick-action.md#configure-map).


## Ricerca percorsi {#routes-search}

Trova i percorsi utilizzando la [funzione di ricerca](../search/index.md) per nome o selezionando "Percorsi" nella [sezione Categorie](../search/search-poi.md#).

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

> *Ultimo aggiornamento: Maggio 2025*