---
source-hash: 37751eb7faea59cec520cd8d8ca456b80fef44964424340366c4b1999e2835d6
sidebar_position: 4
title:  Configura Mappa
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Panoramica {#overview}

Il menu **Configura mappa** è una voce importante del *Menu principale* di OsmAnd, dove è possibile personalizzare la visualizzazione della mappa in base alle proprie esigenze. È possibile evidenziare sulla mappa i punti preferiti, i marcatori di navigazione o i punti di interesse speciali, visualizzare percorsi specifici o file GPX di terze parti, sovrapporre informazioni sul terreno, immagini satellitari o qualsiasi altra immagine raster disponibile, visualizzare informazioni sul trasporto pubblico e modificare lo stile della mappa.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sezione **Mostra**:  

![Configura mappa android](@site/static/img/map/configure_map_show1_andr.png)  ![Configura mappa android](@site/static/img/map/configure_map_show2_andr.png)  

Sezione **Topografia**:  

![Configura mappa android](@site/static/img/map/configure_map_topography_andr.png)  

Sezione **OpenStreetMap**:  

![Configura mappa android](@site/static/img/map/configure_map_osm_andr.png)  

Sezioni **Percorsi e Rendering mappa**:  

![Configura mappa android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Sezione **Mostra sulla mappa**:  

![Configura mappa ios](@site/static/img/map/configure_map_show1_ios.png)  

Sezione **Topografia**:  

![Configura mappa ios](@site/static/img/map/configure_map_topography_ios.png)  

Sezione **OpenStreetMap**:  

![Configura mappa ios](@site/static/img/map/configure_map_osm_ios.png)  

Sezione **Percorsi**:  

![Configura mappa ios](@site/static/img/map/configure_map_routes_new_ios.png)

Sezioni **Tipo mappa e Stile mappa**:  

![Configura mappa ios](@site/static/img/map/configure_map_style_ios.png)

Sezioni **Sovrapposizione/Sottofondo e Lingua**:  

![Configura mappa ios](@site/static/img/map/configure_map_overlay_ios.png)

</TabItem>

</Tabs>


Il menu **<Translate android="true" ids="configure_map"/>** è suddiviso in due categorie:

- [Parametri stile mappa](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (o **<Translate ios="true" ids="map_widget_renderer"/>**) è un gruppo di impostazioni che consentono di modificare il modo in cui viene visualizzata la mappa principale.  
- [Livelli mappa](#map-layers). Questi livelli consentono di posizionare le informazioni sopra (o sotto) il livello della mappa principale, ma non modificano la visualizzazione della mappa stessa.  

**Note:**

- Per modificare le informazioni sullo schermo (widget, icone), è possibile effettuare le impostazioni in [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Le impostazioni di Configura mappa dipendono dal proprio [profilo](../personal/profiles.md).
- Attenzione: il menu Configura mappa **si chiude** quando si tocca il campo della mappa.

## Livelli Mappa {#map-layers}

- [Livello mappa vettoriale](../map/vector-maps.md) - visualizza tutte le informazioni della mappa vettoriale, inclusi OpenStreetMap, linee di contorno e dati nautici.
- [Sorgenti raster mappa](../map/raster-maps.md#select-raster-maps) - consente di selezionare la mappa di sottofondo / fonte principale / sovrapposizione con livelli di trasparenza.
- [Terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers) - visualizza informazioni su pendenza / ombreggiatura, Rilievo 3D.
- [Confini delle mappe scaricate](../map/vector-maps.md#show-borders) - visualizza tutti i confini delle mappe scaricate sul livello della mappa principale.
- [Griglia di coordinate](../map/vector-maps.md#coordinates-grid) - controlla la visibilità della griglia di coordinate sulla mappa.

## Livelli Dati Mappa {#map-data-layers}

   - [Preferiti](../map/point-layers-on-map.md) - visualizza i punti preferiti.
   - [POI](../map/point-layers-on-map.md) - visualizza i punti di interesse delle categorie selezionate.
   - [Marcatori mappa](../map/point-layers-on-map.md) - visualizza i marcatori sulla mappa.
   - [Etichette in sovrimpressione](../map/point-layers-on-map.md) - mostra i nomi dei punti e dei preferiti sulla mappa.
   - [Trasporto](../map/vector-maps.md#transport) - mostra le fermate del trasporto pubblico.
   - [Tracce](../map/tracks/index.md) - visualizza le tracce importate, pianificate o registrate sulla mappa.
   - [Immagini a livello stradale](../plugins/mapillary.md#map-layer) - visualizza i punti con immagini a livello stradale disponibili.
   - [Guide di viaggio](../plan-route/travel-guides.md) - visualizza le guide di viaggio sulla mappa.
   - [Wikipedia](../plugins/wikipedia.md) - evidenzia gli articoli di Wikipedia collegati alla mappa.
   - [Modifica OSM](../plugins/osm-editing.md#osm-editing-layer) - visualizza le modifiche OpenStreetMap, note e livelli di assistenza correlati alla mappatura.
   - [Altri livelli dei plugin](../plugins/index.md#configure-plugin) - molti plugin aggiungono i loro livelli con informazioni extra.

## Parametri stile mappa {#map-style-parameters}

Le impostazioni dello stile della mappa dipendono dallo stile della mappa principale visualizzato. Per saperne di più, consultare l'articolo [Articolo sugli stili mappa](../map/vector-maps).

   - [Stile mappa](../map/vector-maps.md#default-map-styles) - include OsmAnd (Città), Topo, Nautico e altri.
   - [Modalità mappa](../map/vector-maps.md#map-mode) - consente di selezionare la visualizzazione della mappa e la navigazione a seconda dell'ora del giorno.
   - [Lente d'ingrandimento mappa](../map/vector-maps.md#map-magnifier) - consente di modificare l'ingrandimento della mappa.
   - [Dimensione testo](../map/vector-maps.md#text-size) - consente di aumentare o diminuire la dimensione del testo sulla mappa.
   - [Lingua mappa](../map/vector-maps.md#map-language) - consente di selezionare la lingua preferita da visualizzare sulla mappa.
   - [Dettagli](../map/vector-maps.md#details) - mostra oggetti specifici.
   - [Nascondi](../map/vector-maps.md#hide) - nasconde oggetti specifici.
   - [Percorsi](../map/vector-maps.md#routes) - consente di evidenziare i percorsi e i loro simboli.  


## Personalizzazione UI (Android) {#ui-customization-android}

Per ogni profilo selezionato nel sistema Android, è possibile modificare l'ordine delle voci del menu <Translate android="true" ids="configure_map"/>, nascondere le voci, ripristinare le impostazioni predefinite o copiarle da un altro profilo. Ciò contribuirà a migliorare l'interazione con l'app OsmAnd.  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Voci di configurazione della mappa](@site/static/img/settings/configure-screen-ui-customization.png)