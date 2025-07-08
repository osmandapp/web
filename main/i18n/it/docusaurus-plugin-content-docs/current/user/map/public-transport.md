---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title: Trasporto pubblico
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Il trasporto pubblico è un livello aggiuntivo che ti consente di visualizzare percorsi e fermate di trasporto sulla mappa, di controllare informazioni dettagliate su di essi e di navigare.

## Fermate del trasporto pubblico (Livello) {#transport-stops-layer}

Abilita/Disabilita il livello Trasporto pubblico:

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

[Leggi di più](../map/vector-maps.md#transport) su come viene visualizzato il trasporto sulla mappa.


## Percorsi di trasporto (Menu contestuale) {#transport-routes-context-menu}

![Menu percorso trasporto pubblico Android](@site/static/img/map/pt_routemenu_android.png) ![Menu percorso trasporto pubblico iOS](@site/static/img/map/pt_routemenu_ios.png)

Per aprire il menu Trasporto, puoi toccare l'icona del trasporto. Visualizza:

- Scudi colorati del trasporto pubblico (**cliccabili**)
- [Elenco dei percorsi](#routes) che fermano in quella fermata o nelle vicinanze (entro 150 m)
- Nome della fermata e altri [dettagli](#transport-stop-details)

### Dettagli della fermata del trasporto pubblico {#transport-stop-details}

![Dettagli del menu percorso trasporto pubblico Android](@site/static/img/map/pt_routemenu_details_android.png) ![Dettagli del menu percorso trasporto pubblico iOS](@site/static/img/map/pt_routemenu_details_ios.png)

La fermata del trasporto pubblico fornisce dettagli aggiuntivi rispetto al menu standard dell'oggetto OpenStreetMap [menu](../map/map-context-menu.md#details):

- Presenza di panchine
- Presenza di copertura
- Accessibilità per sedie a rotelle
- Nome dell'operatore

**Nota**: puoi filtrare le fermate in base a determinati criteri. Ad esempio, espandi e tocca "Panchina" / "Sì" e puoi vedere l'elenco delle fermate con panchine. Inoltre possono essere [mostrate sulla mappa](../map/point-layers-on-map.md#points-of-interest-pois).


### Percorsi {#routes}

![Percorsi trasporto pubblico Android](@site/static/img/map/pt_routes_android.png) ![Percorsi trasporto pubblico iOS](@site/static/img/map/pt_routes_ios.png)

I percorsi di trasporto sono tutti i percorsi di trasporto pubblico che passano per la fermata selezionata e i percorsi vicini (entro 150 m). Le informazioni sui percorsi sono prese dai [dati OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) come riferimento, nome, colore e tipo.

**Colore dello scudo**:

- Metropolitana - colore della linea proprio
- Ferrovia - marrone
- Autobus e altri - rosso
- Tram - blu
- Filobus - viola

### Sfoglia percorso {#browse-route}

![Elenco percorsi trasporto pubblico Android](@site/static/img/map/pt_route_list_android.png)  ![Elenco percorsi trasporto pubblico Android](@site/static/img/map/pt_route_list_ios.png)

Puoi accedere al menu Sfoglia percorso **cliccando su uno scudo** o **selezionando un percorso** dall'elenco dei percorsi. Successivamente puoi sfogliare tra le fermate cliccando su '<Translate android="true" ids="shared_string_previous"/>' e '<Translate android="true" ids="shared_string_next"/>'. Le informazioni sulla fermata verranno aggiornate nel menu e la fermata verrà localizzata sulla mappa.

Puoi vedere l'elenco completo delle fermate cliccando su <Translate android="true" ids="rendering_category_details"/>. La fermata attualmente selezionata è contrassegnata con l'icona 'posizione' nell'elenco dei percorsi.

> **NOTA**: *Se tocchi il pulsante <Translate android="true" ids="get_directions"/> otterrai un percorso dalla tua posizione attuale alla stazione di trasporto pubblico selezionata.*


## Articoli correlati {#related-articles}

- [Mappe vettoriali](../map/vector-maps.md)
- [Navigazione con trasporto pubblico](../navigation/routing/public-transport-navigation.md)

> *Ultimo aggiornamento: agosto 2022*