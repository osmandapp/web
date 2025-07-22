---
source-hash: 0e2f6c946c393607b5033a3e8d96b50750de7efd28c223841bc9d886f3ec9f2d
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

I percorsi rappresentano diverse attività all'aperto utilizzando i dati di [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Toccando **l'icona dello scudo con un numero di percorso o una bandiera del percorso** sulla mappa si aprirà un menu contestuale che fornisce informazioni aggiuntive sul percorso e consente di utilizzarlo come parte della navigazione.

È possibile configurare il filtro di alcuni tipi di percorso nel menu [Configura mappa](../map/configure-map-menu.md).

### Percorsi ciclabili {#cycle-routes}

I [percorsi ciclabili](https://wiki.openstreetmap.org/wiki/Cycle_routes) sono presenti in tre tipi: *locale* (`lcn`), *regionale* (`rcn`), *nazionale* (`ncn`), *internazionale* (`icn`). Inoltre, i percorsi ciclabili potrebbero far parte delle [reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Puoi scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="layer_route"/>***.
![Percorsi mappa - percorsi ciclabili](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Percorsi mappa - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)

Puoi trovare maggiori informazioni nell'articolo [Legenda mappa](../map-legend/index.md).


### Percorsi per mountain bike {#mountain-bike-routes}

I percorsi MTB hanno una mappatura specifica in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e possono essere selezionati separatamente dai percorsi ciclabili.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Mostra i sentieri in base alla scala MTB. Maggiori informazioni sono nell'articolo [Legenda mappa](../map-legend/index.md). | ![Percorsi mappa - sentieri MTB](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Mostra i sentieri MTB secondo l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Maggiori informazioni sono nell'articolo [Legenda mappa](../map-legend/index.md). | ![Percorsi mappa - sentieri MTB](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Mostra i sentieri in base alla scala MTB. Maggiori informazioni sono nell'articolo [Legenda mappa](../map-legend/index.md).
![Percorsi mappa - sentieri MTB](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Mostra i sentieri MTB secondo l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Maggiori informazioni sono nell'articolo [Legenda mappa](../map-legend/index.md).
![Percorsi mappa - sentieri MTB](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Percorsi escursionistici / pedonali {#hiking--walking-routes}

I [percorsi escursionistici](https://wiki.openstreetmap.org/wiki/Walking_Routes) sono presenti in tre tipi: *locale* (`lwn`), *regionale* (`rwn`), *nazionale* (`nwn`), *internazionale* (`iwn`). Inoltre, i percorsi pedonali potrebbero far parte delle [reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd non separa i percorsi pedonali e quelli escursionistici e li combina in un unico gruppo. Puoi scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Colora i percorsi in base al loro [colore locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuale (se disponibile in OpenStreetMap) e al simbolo dello scudo turistico.
![Percorsi mappa - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Colora per [affiliazione alla rete](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![Percorsi mappa - rete escursionistica](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Colora i percorsi in base al tipo di [rete di nodi](https://wiki.openstreetmap.org/wiki/Node_Networks) (internazionale, regionale o locale).
![Percorsi mappa - reti di nodi escursionistici](@site/static/img/map/map-routes-hiking-node-networks.png)


### Sentieri per moto da cross {#dirt-bike-trails}

![Percorsi mappa - Sentieri per moto da cross](@site/static/img/map/map-routes-dirt-bike-trails.png)

La funzione **Sentieri per moto da cross** consente di visualizzare sulla mappa percorsi specifici per moto da cross in base al tag `dirtbike:scale`. Questa scala evidenzia i sentieri adatti al dirt biking, con una sovrapposizione colorata che mostra i livelli di difficoltà.

È possibile attivare questa funzione in *Menu → Configura mappa → Percorsi → Percorsi per moto da cross*. Il sistema funziona in modo simile alla scala MTB, offrendo una rappresentazione visiva dei percorsi adattati al dirt biking — maggiori informazioni sul tag [`dirtbike` sono disponibili qui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Vie di arrampicata {#climbing-routes}

![Percorsi mappa - Vie di arrampicata](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd supporta le *aree di arrampicata* (`climbing=area`) e le *falesie di arrampicata* (`climbing=crag`), consentendo di trovare le località per l'[arrampicata su roccia](https://wiki.openstreetmap.org/wiki/Climbing) direttamente sulla mappa.

- Le **aree di arrampicata** rappresentano **zone più ampie** dove esistono più vie di arrampicata.

- Le **falesie di arrampicata** si riferiscono a **formazioni rocciose specifiche** o pareti adatte all'arrampicata.

- Queste località includono **attributi dettagliati** come:

    - *Grado di arrampicata* (ad esempio, UIAA, Francese, YDS).
    - *Tipo di roccia* (ad esempio, calcare, granito).
    - *Lunghezza della via* (in metri).
    - *Qualità dell'arrampicata* (solida, friabile, mista).
    - *Disponibilità del registro di vetta*.

Per abilitare le località di arrampicata sulla mappa, vai a: *Menu → Configura mappa → Percorsi → Vie di arrampicata*.


### Grado di difficoltà dei sentieri escursionistici {#hiking-trails-difficulty-grade}

![Percorsi mappa - escursionismo alpino](@site/static/img/map/map-routes-alpine-hiking.png)

Alcuni segmenti stradali potrebbero far parte di molti percorsi, ma potrebbero essere colorati individualmente per rappresentare la difficoltà del segmento nelle aree montuose. Attualmente, OsmAnd supporta le classificazioni italiana e svizzera, e ciascuna ha un elenco specifico di requisiti di attrezzatura per accedere a questo segmento.

1. [Scala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Scala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)


### Percorsi sciistici {#ski-routes}

![Percorsi mappa - piste da sci](@site/static/img/map/map-routes-ski-slopes.png)

I percorsi sciistici sono un gruppo specifico di [percorsi](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Tipicamente, questi percorsi possono essere utilizzati con lo stile di mappa [Inverno e sci](../map/vector-maps.md#winter-and-ski) con tutte le [piste](https://wiki.openstreetmap.org/wiki/Pistes) visibili.


### Percorsi a cavallo {#horse-routes}

![Percorsi mappa - percorsi a cavallo](@site/static/img/map/map-routes-horse.png)

I [percorsi a cavallo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) sono visualizzati come percorsi colorati con simboli per l'equitazione.


### Sport acquatici {#whitewater-sports}

![Percorsi mappa - sport acquatici](@site/static/img/map/map-routes-whitewater-sport.png)

I [percorsi per acque bianche](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) sono mostrati insieme alle icone di accesso, alle zone di pericolo per il [turismo delle acque bianche](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).


### Percorsi di corsa {#running-routes}

![Percorsi fitness](@site/static/img/map/fitness_1.png)

I [percorsi di corsa](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap sono utilizzati per percorsi di corsa nominati, numerati o altrimenti contrassegnati, principalmente per l'atletica.


### Sentieri fitness {#fitness-trails}

![Percorsi fitness](@site/static/img/map/fitness_route.png)

Un [sentiero fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) è un sentiero o un percorso attrezzato con ostacoli o stazioni lungo la sua lunghezza per esercitare il corpo umano al fine di migliorare la salute.


### Percorsi di viaggio {#travel-routes}

<InfoAndroidOnly />

![Percorsi di viaggio](@site/static/img/map/travel_route_2.png) ![Percorsi di viaggio](@site/static/img/map/travel_routes.png)

I percorsi di viaggio fanno parte di file personalizzati di [Guide di viaggio](../plan-route/travel-guides.md) (`travel.obf`), che possono essere generati dai [percorsi dell'utente](https://osmand.net/blog/routes#generated-travel-routes) o far parte di [plugin](../plugins/index.md) aggiuntivi.

È possibile personalizzare la visualizzazione di determinati ***Guide di viaggio*** e tipi di ***tracce***, visualizzare le tracce come punti o ***Gruppi di punti*** (ad esempio per le guide di viaggio di Wikivoyage). Ulteriori informazioni sulle [Guide di viaggio sono disponibili qui](../plan-route/travel-guides.md).


## Visualizzare i percorsi sulla mappa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Sezione Percorsi Configura mappa](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu Tracce iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Per visualizzare i percorsi richiesti sulla mappa, abilitarli nell'elenco *Percorsi* del menu [Configura mappa](../map/configure-map-menu.md).
- OsmAnd può evidenziare i [percorsi presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Possono essere selezionati toccando [il simbolo sul percorso](#save-as-a-track), e se il set visibile di percorsi è configurato correttamente, è possibile seguire il colore e le icone.
- È possibile creare una traccia sopra i percorsi utilizzando lo strumento [Pianifica un percorso](../plan-route/create-route.md).

![Percorsi mappa - escursionismo osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Percorsi mappa - reti di nodi ciclabili](@site/static/img/map/map-routes-cycle-node-networks.png)



## Azioni con i percorsi {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info percorso](@site/static/img/map/routes_osm.png) ![Info percorso](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info percorso](@site/static/img/map/routes_osm_ios.png) ![Info percorso](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

Sulla mappa, è possibile selezionare percorsi per [escursionismo, ciclismo, viaggi e altro](#type-of-routes), che sono contrassegnati con [simboli OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) dove applicabile.

Quando si tocca un **simbolo di percorso** sulla mappa:

- Viene visualizzato un **elenco dei percorsi vicini** in quella posizione.
- Dopo aver selezionato un percorso dall'elenco, si apre un [menu contestuale](../map/tracks/track-context-menu.md) per quel percorso, che visualizza informazioni dettagliate e azioni disponibili.

Nel **menu contestuale**, è possibile:

- Visualizzare [informazioni aggiuntive](#route-info-and-elevation) sul percorso selezionato.
- [Salvare il percorso](#save-as-a-track) come **traccia GPX**.
- [Avviare la navigazione](#start-navigation) lungo il percorso.


### Info percorso e altitudine {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info percorso](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info percorso](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Le seguenti informazioni saranno visibili nel menu contestuale:

- **Info percorso**: Nome percorso, link OSM (richiede il plugin OSM Editing), Tipo, Descrizione, Distanza, Direzione, Salita/Discesa, Intervallo di altitudine, Rete, Operatore, Stato, Colore, Andata e ritorno, Punti di inizio/fine e altro.
- **Generale**: Dimensione, Posizione, Creato il.
- **Info aggiuntive**. Visualizza il tipo di attività.
- pulsanti azione: [Salva come](#save-as-a-track) e [Avvia navigazione](#start-navigation).
- [Info altitudine](../navigation/setup/route-details.md#elevation-info). Visualizza informazioni sui dati di altitudine sul percorso.
- [Analizza traccia sulla mappa](../map/tracks/index.md#analyze-track-on-map). Visualizza un'analisi dettagliata dei dati della traccia utilizzando grafici e mappe.

Per visualizzare il grafico dell'altitudine, della pendenza o dei dettagli dell'altitudine per un percorso selezionato, è sufficiente toccare uno dei seguenti valori nel menu contestuale: **Distanza**, **Salita**, **Discesa** o **Altitudine**.

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

![Percorsi sul terreno](@site/static/img/map/routes-4.png) ![Percorsi sul terreno](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/hiking.png) ![Percorsi sul terreno](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>


Per salvare il percorso come file *GPX*, toccare il pulsante **Salva (Download)** sotto il [pannello Info](../map/tracks/track-context-menu.md#info-panel). Si aprirà il pannello dei pulsanti [Azioni rapide](../map/tracks/track-context-menu.md#track-actions) dove si avrà accesso alle azioni della traccia come la modifica dell'[Aspetto](./tracks/appearance.md), della [Navigazione](../navigation/setup/route-navigation.md) o la modifica di [Pianifica un percorso](../plan-route/create-route.md).


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

Questo avvierà la modalità [**Navigazione per traccia**](../navigation/setup/gpx-navigation.md), consentendo di seguire il percorso con guida vocale e funzionalità di navigazione.



### Azioni rapide {#quick-actions}

È possibile personalizzare l'attivazione o la disattivazione dei percorsi utilizzando il widget [Azione rapida](../widgets/quick-action.md#configure-map).


## Ricerca percorsi {#routes-search}

Trova percorsi utilizzando la [funzione di ricerca](../search/index.md) per nome o selezionando "Percorsi" nella sezione [Categorie](../search/search-poi.md#).

Per cercare, vai al menu *<Translate android="true" ids="search_button"/>* o *<Translate android="true" ids="search_button,search_categories"/>* e inserisci la tua attività.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Naviga su *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* per trovare i percorsi desiderati. I percorsi includono nome, tipo di attività, lunghezza, posizione e distanza dal punto più vicino.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Utilizza il pulsante filtri (angolo in alto a destra) per visualizzare solo i percorsi desiderati.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorsi sul terreno](@site/static/img/map/route_search_2.png) ![Percorsi sul terreno](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorsi sul terreno](@site/static/img/map/route_search_2_ios.png) ![Percorsi sul terreno](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Articoli correlati {#related-articles}

- [Menu contestuale mappa](./map-context-menu.md)
- [Configura mappa](./configure-map-menu.md)
- [Tracce](./tracks/index.md)
- [Menu contestuale tracce](./tracks/track-context-menu.md)
- [Trasporto pubblico](./public-transport.md)
- [Aspetto linea percorso di navigazione](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Ultimo aggiornamento: Maggio 2025*