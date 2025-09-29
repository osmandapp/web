---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Trasporto Pubblico
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Il trasporto pubblico è un livello aggiuntivo che consente di visualizzare le linee e le fermate dei trasporti sulla mappa, di consultarne le informazioni dettagliate e di navigare.

## Fermate dei Trasporti (Livello) {#transport-stops-layer}

Attiva/Disattiva il livello Trasporto pubblico:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Livello trasporto pubblico Android](@site/static/img/map/pt_layer_android.png) ![Livello trasporto pubblico iOS](@site/static/img/map/pt_layer_ios.png)

Scegli tra 1 o più categorie di trasporto da visualizzare:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Leggi di più](../map/vector-maps.md#transport) su come i trasporti vengono visualizzati sulla mappa.


## Linee di Trasporto (Menu Contestuale) {#transport-routes-context-menu}

![Menu Linee di trasporto pubblico Android](@site/static/img/map/pt_routemenu_android.png) ![Menu Linee di trasporto pubblico iOS](@site/static/img/map/pt_routemenu_ios.png)

Per aprire il menu Trasporti, puoi toccare l'icona del trasporto. Verranno visualizzati:

- Scudi colorati del trasporto pubblico (**cliccabili**)
- [Elenco delle linee](#routes) che fermano a quella fermata o nelle vicinanze (entro 150 m)
- Nome della fermata e altri [dettagli](#transport-stop-details)

### Dettagli Fermata del Trasporto {#transport-stop-details}

![Dettagli menu Linee di trasporto pubblico Android](@site/static/img/map/pt_routemenu_details_android.png) ![Dettagli menu Linee di trasporto pubblico iOS](@site/static/img/map/pt_routemenu_details_ios.png)

La fermata del trasporto pubblico fornisce dettagli aggiuntivi rispetto al [menu](../map/map-context-menu.md#details) standard degli oggetti di OpenStreetMap:

- Presenza di panchina
- Presenza di copertura
- Accessibilità per sedie a rotelle
- Nome dell'operatore

**Nota**: è possibile filtrare le fermate in base a determinati criteri. Ad esempio, espandi e tocca "Panchina" / "Sì" e potrai vedere l'elenco delle fermate con panchine. Inoltre, possono essere [mostrate sulla mappa](../map/point-layers-on-map.md#points-of-interest-pois).


### Linee {#routes}

![Linee di trasporto pubblico Android](@site/static/img/map/pt_routes_android.png) ![Linee di trasporto pubblico iOS](@site/static/img/map/pt_routes_ios.png)

Le Linee di Trasporto sono tutte le linee di trasporto pubblico che si avvicinano tramite la fermata selezionata e le linee vicine (entro 150 m). Le informazioni sulle linee sono prese dai [dati di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) come riferimento, nome, colore e tipo.

**Colore dello scudo**:

- Metropolitana - linea con colore proprio
- Ferrovia - marrone
- Autobus e altro - rosso
- Tram - blu
- Filobus - viola

### Sfoglia Linea {#browse-route}

![Elenco Linee di trasporto pubblico Android](@site/static/img/map/pt_route_list_android.png)  ![Elenco Linee di trasporto pubblico Android](@site/static/img/map/pt_route_list_ios.png)

È possibile accedere al menu Sfoglia Linea **cliccando su uno scudo** o **selezionando una linea** dall'elenco delle linee. Successivamente, è possibile navigare tra le fermate cliccando su '<Translate android="true" ids="shared_string_previous"/>' e '<Translate android="true" ids="shared_string_next"/>'. Le informazioni sulla fermata verranno aggiornate nel menu e la fermata verrà localizzata sulla mappa.

È possibile visualizzare l'elenco completo delle fermate cliccando su <Translate android="true" ids="rendering_category_details"/>. La fermata attualmente selezionata è contrassegnata con l'icona 'posizione' nell'elenco delle Linee.

> **NOTA**: *Se tocchi il pulsante <Translate android="true" ids="get_directions"/>, otterrai un percorso dalla tua posizione attuale alla stazione del trasporto pubblico selezionata.*


## Articoli Correlati {#related-articles}

- [Mappe vettoriali](../map/vector-maps.md)
- [Navigazione con trasporto pubblico](../navigation/routing/public-transport-navigation.md)