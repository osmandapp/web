---
source-hash: afd8d811e22a04d300b6aceb6838f774b297758d02f07d66e5b085e41519527d
sidebar_position: 4
title:  Configura mappa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Il menu **Configura mappa** è un elemento importante nel *Menu principale* di OsmAnd, dove puoi personalizzare la visualizzazione della mappa in base alle tue esigenze. Puoi evidenziare punti preferiti, indicatori di navigazione o punti di interesse speciali sulla mappa, visualizzare percorsi specifici o file GPX di terze parti, sovrapporre informazioni sul terreno, immagini satellitari o qualsiasi altra immagine raster disponibile, visualizzare informazioni sul trasporto pubblico e cambiare lo stile della mappa.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Sezione **Mostra**:

![Configura mappa Android](@site/static/img/map/configure_map_show1_andr.png) ![Configura mappa Android](@site/static/img/map/configure_map_show2_andr.png)

Sezione **Topografia**:

![Configura mappa Android](@site/static/img/map/configure_map_topography_andr.png)

Sezione **OpenStreetMap**:

![Configura mappa Android](@site/static/img/map/configure_map_osm_andr.png)

Sezioni **Percorsi e rendering mappa**:

![Configura mappa Android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configura mappa iOS](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Il menu **<Translate android="true" ids="configure_map"/>** è diviso in due categorie:

- [Parametri stile mappa](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (o **<Translate ios="true" ids="map_widget_renderer"/>**) è un gruppo di impostazioni che ti consentono di cambiare il modo in cui viene visualizzata la mappa principale.
- [Livelli mappa](#map-layers). Questi livelli ti consentono di posizionare informazioni sopra (o sotto) il livello della mappa principale, ma non cambiano la visualizzazione della mappa stessa.

**Note:**

- Per cambiare le informazioni sullo schermo (widget, icone), puoi effettuare le impostazioni in [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Le impostazioni di Configura mappa dipendono dal tuo [profilo](../personal/profiles.md).
- Fai attenzione: il menu Configura mappa **si chiude** quando tocchi il campo della mappa.

## Livelli mappa {#map-layers}

- [Livello mappa vettoriale](../map/vector-maps.md) - visualizza tutte le informazioni della mappa vettoriale, inclusi OpenStreetMap, curve di livello e dati nautici.
- [Sorgenti raster mappa](../map/raster-maps.md#select-raster-maps) - consente di selezionare la mappa di sfondo / sorgente principale / overlay con livelli di trasparenza.
- [Terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers) - visualizza informazioni su pendenza / ombreggiatura, rilievo 3D.
- [Confini delle mappe scaricate](../map/vector-maps.md#show-borders) - visualizza tutti i confini delle mappe scaricate sul livello della mappa principale.
- [Griglia coordinate](../map/vector-maps.md#coordinates-grid) - controlla la visibilità della griglia coordinate sulla mappa.

## Livelli dati mappa {#map-data-layers}

- [Preferiti](../map/point-layers-on-map.md) - visualizza i punti preferiti.
- [POI](../map/point-layers-on-map.md) - visualizza i punti di interesse delle categorie selezionate.
- [Indicatori mappa](../map/point-layers-on-map.md) - visualizza gli indicatori mappa.
- [Etichette overlay](../map/point-layers-on-map.md) - mostra i nomi dei punti e dei preferiti sulla mappa.
- [Trasporto](../map/vector-maps.md#transport) - mostra le fermate del trasporto pubblico.
- [Tracce](../map/tracks/index.md) - visualizza tracce importate, pianificate o registrate sopra la mappa.
- [Immagini a livello stradale](../plugins/mapillary.md#map-layer) - visualizza punti con immagini a livello stradale disponibili.
- [Guide di viaggio](../plan-route/travel-guides.md) - visualizza le guide di viaggio sulla mappa.
- [Wikipedia](../plugins/wikipedia.md) - evidenzia gli articoli di Wikipedia collegati alla mappa.
- [Altri livelli plugin](../plugins/index.md#configure-plugin) - molti plugin aggiungono i loro livelli con informazioni aggiuntive.

## Parametri stile mappa {#map-style-parameters}

Le impostazioni dello stile della mappa dipendono dallo stile della mappa principale visualizzato. Puoi leggere di più a riguardo nell'[articolo Stili mappa](../map/vector-maps).

- [Stile mappa](../map/vector-maps.md#default-map-styles) - include OsmAnd (Città), Topo, Nautico e altri.
- [Modalità mappa](../map/vector-maps.md#map-mode) - consente di selezionare la visualizzazione della mappa e la navigazione in base all'ora del giorno.
- [Ingrandimento mappa](../map/vector-maps.md#map-magnifier) - consente di cambiare l'ingrandimento della mappa.
- [Dimensione testo](../map/vector-maps.md#text-size) - consente di aumentare o diminuire la dimensione del testo sulla mappa.
- [Lingua mappa](../map/vector-maps.md#map-language) - consente di selezionare la lingua preferita visualizzata sulla mappa.
- [Dettagli](../map/vector-maps.md#details) - mostra oggetti specifici.
- [Nascondi](../map/vector-maps.md#hide) - nasconde oggetti specifici.
- [Percorsi](../map/vector-maps.md#routes) - consente di evidenziare percorsi e i loro simboli.

## Personalizzazione UI (Android) {#ui-customization-android}

Per ogni profilo selezionato nel sistema Android, puoi cambiare l'ordine degli elementi del menu <Translate android="true" ids="configure_map"/>, nascondere gli elementi, ripristinare le impostazioni predefinite o copiarle da un altro profilo. Questo ti aiuterà a migliorare la tua interazione con l'app OsmAnd.

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elementi Configura mappa](@site/static/img/settings/configure-screen-ui-customization.png)


> *Ultimo aggiornamento: Febbraio 2025*