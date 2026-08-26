---
source-hash: 935cab06de14f7d40135dc91b1f1ba4ea6e4f6419796e6398db2850a17971af3
sidebar_position: 12
title:  Tipi di percorsi
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

I percorsi rappresentano diverse attività all'aperto utilizzando dati da [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Toccando **l'icona dello scudo con un numero di percorso o una bandiera di percorso** sulla mappa si aprirà un menu contestuale che fornisce informazioni aggiuntive sul percorso e consente di utilizzarlo come parte della navigazione.

Puoi configurare il filtraggio di alcuni tipi di percorsi nel menu [Configura mappa](../../map/configure-map-menu.md).

## Ciclismo {#cycle}

[Percorsi ciclabili](https://wiki.openstreetmap.org/wiki/Cycle_routes) sono presenti in tre tipi: *locali* (`lcn`), *regionali* (`rcn`), *nazionali* (`ncn`), *internazionali* (`icn`). Inoltre, i percorsi ciclabili potrebbero far parte di [Reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Puoi scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Puoi trovare maggiori informazioni nell'articolo [Legenda della mappa](../../map-legend/osmand.md#cycling).


## Mountain bike {#mountain-bike}

I percorsi MTB hanno una mappatura specifica in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e possono essere selezionati separatamente dai percorsi ciclabili.

- ***<Translate android="true" ids="mtb_scale"/>***.  Mostra i sentieri secondo la scala MTB. Ulteriori informazioni sono nell'articolo [Legenda della mappa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Mostra i sentieri MTB secondo l'International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Ulteriori informazioni sono nell'articolo [Legenda della mappa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Escursionismo / Camminata {#hiking--walking}

[Percorsi escursionistici](https://wiki.openstreetmap.org/wiki/Walking_Routes) sono presenti in tre tipi: *locali* (`lwn`), *regionali* (`rwn`), *nazionali* (`nwn`), *internazionali* (`iwn`). Inoltre, i percorsi pedonali potrebbero far parte di [Reti di nodi](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd non separa i percorsi pedonali e quelli escursionistici e li combina in un unico gruppo. Puoi scegliere come assegnare il colore ai segmenti del percorso:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colora i percorsi in base al loro [colore locale](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individuale (se disponibile in OpenStreetMap) e al simbolo dello scudo turistico.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colora in base all'[affiliazione di rete](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colora i percorsi in base al tipo di [rete di nodi](https://wiki.openstreetmap.org/wiki/Node_Networks) (internazionale, regionale o locale).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Sentieri per moto da cross {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

La funzione **Sentieri per moto da cross** consente di visualizzare sulla mappa percorsi specifici per moto da cross in base al tag `dirtbike:scale`. Questa scala evidenzia i sentieri adatti alla moto da cross, con una sovrapposizione colorata che mostra i livelli di difficoltà ([Legenda della mappa](../../map-legend/osmand.md#dirtbike-scale)).  

Puoi attivare questa funzione in *Menu → Configura mappa → Percorsi → Percorsi per moto da cross*. Il sistema funziona in modo simile alla scala MTB, offrendo una rappresentazione visiva dei percorsi pensati per la moto da cross — ulteriori informazioni sul [tag `dirtbike` sono disponibili qui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Percorsi di arrampicata {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd supporta le *aree di arrampicata* (`climbing=area`) e i *cengioni di arrampicata* (`climbing=crag`), consentendo di trovare le località di [arrampicata su roccia](https://wiki.openstreetmap.org/wiki/Climbing) direttamente sulla mappa.

- **Aree di arrampicata** rappresentano **zone più estese** in cui esistono più percorsi di arrampicata.

- **Cengioni di arrampicata** si riferiscono a **formazioni rocciose specifiche** o pareti adatte all'arrampicata.

- Queste località includono **attributi dettagliati** come:

    - *Grado di arrampicata* (ad es. UIAA, Francese, YDS).
    - *Tipo di roccia* (ad es. calcare, granito).
    - *Lunghezza del percorso* (in metri).
    - *Qualità dell'arrampicata* (solida, friabile, mista).
    - *Disponibilità del registro di vetta*.

Per abilitare le località di arrampicata sulla mappa, vai su: *Menu → Configura mappa → Percorsi → Percorsi di arrampicata*.


## Grado di difficoltà dei sentieri escursionistici {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Alcuni segmenti stradali possono far parte di molti percorsi, ma possono essere colorati singolarmente per rappresentare la difficoltà del segmento in zone montane. Attualmente OsmAnd supporta le classificazioni italiana e svizzera, ognuna con un elenco specifico di requisiti di equipaggiamento per accedere al segmento.  

1. [Scala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Scala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Piste e percorsi sciistici {#ski-slopes-and-routes}

- _Piste e percorsi sciistici_ nello stile di mappa _Inverno e sci_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Piste e percorsi sciistici_ nello stile di mappa predefinito di _OsmAnd_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Piste e percorsi sciistici costituiscono un gruppo specifico di [percorsi](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. In genere questi percorsi possono essere utilizzati con lo stile di mappa [Inverno e sci](../../map/map-styles.md#winter-and-ski) con tutte le [piste](https://wiki.openstreetmap.org/wiki/Pistes) visibili. Se è attivo un altro stile di mappa, viene visualizzato un banner che suggerisce di passare a [Inverno e sci](../../map/map-styles.md#winter-and-ski) (*solo Android*) e vengono mostrate solo le piste. Tocca ***Passa*** per cambiare lo stile della mappa senza uscire dalla schermata corrente, oppure ***Più tardi*** per nascondere il banner.


## Percorsi per motoslitte {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

I percorsi per motoslitte sono mappati in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) come `route=snowmobile`. Vengono utilizzati per il tempo libero invernale e per collegare aree remote durante la stagione della neve. In OsmAnd i percorsi per motoslitte sono cliccabili, vedi la sezione [Azioni con i percorsi](./index.md#actions-with-routes).


## Percorsi a cavallo {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[I percorsi a cavallo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) vengono visualizzati come percorsi indicati con colori e simboli per l'equitazione.  


## Sport acquatici in acque bianche {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[I percorsi in acque bianche](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) vengono mostrati insieme alle icone di accesso, alle aree pericolose e alle rapide vicine per il [turismo in acque bianche](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Vedi [Caratteristiche acque bianche](../../map-legend/osmand.md#whitewater-features) nella Legenda della mappa per i gradi delle rapide, i gradi delle sezioni fluviali e i simboli correlati.


## Corsa {#running}

![Percorsi fitness](@site/static/img/map/fitness_1.png)

[I percorsi di corsa](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap vengono utilizzati per percorsi di corsa nominati, numerati o comunque segnalati, principalmente per l'atletica.


## Percorsi fitness {#fitness-trails}

![Percorsi fitness](@site/static/img/map/fitness_route.png)

Un [percorso fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) è un sentiero o un percorso dotato di ostacoli o stazioni lungo la sua lunghezza per esercitare il corpo umano e migliorare la salute.  


## Viaggio {#travel}

<InfoAndroidOnly />

![Percorsi di viaggio](@site/static/img/map/travel_route_2.png)  ![Percorsi di viaggio](@site/static/img/map/travel_routes.png)

I percorsi di viaggio fanno parte di file personalizzati [Guida di viaggio](../../plan-route/travel-guides.md) (`travel.obf`), che possono essere generati dai [percorsi dell'utente](https://osmand.net/blog/routes#generated-travel-routes) o far parte di [plugin](../../plugins/index.md) aggiuntivi.  

Puoi personalizzare la visualizzazione di determinati ***Travelbook*** e tipi di ***tracce***, visualizzare le tracce come punti o ***Gruppi di punti*** (ad esempio per le guide di viaggio Wikivoyage). Ulteriori informazioni sulle [Guide di viaggio sono disponibili qui](../../plan-route/travel-guides.md).


## Articoli correlati {#related-articles}

- [Configura mappa](../../map/configure-map-menu.md)
- [Legenda della mappa](../../map-legend/osmand.md)
- [Percorsi](./index.md)