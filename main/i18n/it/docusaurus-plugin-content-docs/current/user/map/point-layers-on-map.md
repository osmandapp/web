---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
sidebar_position: 7
title:  Punti sulla mappa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

La mappa può visualizzare punti come [Preferiti](#favorites), [Punti di Interesse](#points-of-interest-pois), [Segnalibri](#markers), [Wikipedia](#-wikipedia), [Risultati della ricerca](#search-results-poi), [Note audio e video](#-audio--video-points-android) e [Modifiche OSM](#-osm-edit-points).


## Preferiti {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Livello Preferiti Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Livello Preferiti iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

I [Preferiti](../personal/favorites.md) sono punti speciali contrassegnati dagli utenti. Per impostazione predefinita, appaiono come stelle gialle sulla mappa, sebbene possano essere personalizzati con qualsiasi colore, forma e icona. Diventano visibili sulla mappa a partire dal livello di zoom 6.

:::info
Nella versione Android di OsmAnd, è possibile visualizzare solo determinati gruppi di preferiti sulla mappa e durante la ricerca. Andare su *Menu → I miei luoghi → Preferiti*, toccare &#8942; e scegliere *Mostra sulla mappa* o no.
:::


## Nomi dei Preferiti e dei PDI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Livello etichette Preferiti](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Livello etichette Preferiti](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Per impostazione predefinita, i Preferiti e i punti di interesse (PDI) vengono visualizzati senza nomi, per non affollare la mappa di testo. È possibile abilitare i nomi nel menu Configura mappa.  


## Punti di Interesse (PDI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Sovrapposizione PDI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Sovrapposizione PDI iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

I [Punti di interesse (PDI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) sono luoghi specifici contrassegnati da un simbolo sulla mappa. Indicano luoghi e oggetti interessanti o utili e fanno parte delle [Mappe Vettoriali](../map/vector-maps.md).  

I PDI più importanti vengono visualizzati automaticamente sulla mappa. Tuttavia, è possibile selezionare un tipo specifico di PDI (ad es. *Ristoranti*) e tutti verranno evidenziati sulla mappa con un **cerchio arancione** (a partire dal livello di zoom 9).  

Informazioni dettagliate su un punto di interesse si trovano nel [Menu contestuale](../map/map-context-menu.md) che appare quando si [tocca](../map/map-context-menu.md#select-an-object-single-tap) il punto.  


### Tipi di PDI {#poi-types}

![Selezione PDI singolo](@site/static/img/map/single_selection_android.png) ![Selezione PDI multipla](@site/static/img/map/multiple_selection_android.png)

È possibile selezionare uno o più tipi di PDI standard di OsmAnd, oppure creare il proprio [filtro PDI](../search/search-poi.md) e selezionarlo per visualizzare i PDI sulla mappa.

**Android**. Toccare il pulsante in basso a sinistra per passare dalla selezione di uno o più punti di interesse.


### PDI per Stile Mappa {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![PDI su stile mappa](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![PDI su stile topo](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

A ogni tipo di PDI in OsmAnd è assegnata un'icona e un colore specifici. Il [livello di zoom](../map/vector-maps.md#details) e il design dei PDI possono essere diversi in alcuni [stili di mappa](../map/vector-maps.md#default-map-styles).  

[Leggi di più](../map/vector-maps.md#hide).


## Segnalibri {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Segnalibri mappa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Segnalibri mappa iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

I [Segnalibri mappa](../personal/markers.md) sono punti temporanei contrassegnati sulla mappa come bandierine. Il loro aspetto può essere personalizzato utilizzando **frecce** (Frecce sulla mappa) e **indicazione della distanza** (Linee di direzione).  

Potete leggere di più sull'aspetto dei segnalibri in questo [articolo](../personal/markers#appearance-on-the-map).


## Waypoint della traccia {#track-waypoints}

![Traccia sulla mappa](@site/static/img/map/track_point_on_map.png)

I punti traccia (waypoint) fanno parte dei file Traccia (GPX). Questi punti vengono visualizzati automaticamente se la traccia è sulla mappa. Hanno un aspetto e possono essere configurati in modo simile ai [Preferiti](#favorites) - icona, nomi, colore, forma. Per sapere come creare e aggiungere un Waypoint, leggere l' [articolo](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Leggi di più](../map/tracks/index.md) sulle tracce sulla mappa.


## Risultati della ricerca (PDI) {#search-results-poi}

![Ricerca PDI](@site/static/img/map/poi_search.png) ![Risultato ricerca PDI](@site/static/img/map/poi_search_result.png)

I risultati della ricerca possono essere visualizzati sulla mappa come un livello speciale di PDI. Durante la ricerca, toccare una riga speciale (**<Translate android="true" ids="shared_string_show_on_map"/>**) per visualizzare i PDI sulla mappa.  

Per disattivare i PDI, premere la **X** nell'angolo in alto a destra.  

Leggi di più sulla [ricerca](../search/index.md).


## * Immagini a livello stradale {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtro Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Vista stradale Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

Le [immagini a livello stradale (Mapillary)](../plugins/mapillary.md) sono visualizzate come punti verdi sulla mappa. A questi punti sono allegate le foto della vista stradale. È possibile creare un [filtro](../plugins/mapillary.md#data-filtering) e selezionare le foto che si desidera visualizzare sulla mappa. Per aprire una foto della vista stradale, toccare il punto verde.  

Richiede il [plugin Mapillary](../plugins/mapillary.md).


## * Punto di parcheggio {#-parking-point}

![Parcheggio limitato](@site/static/img/map/context_menu_limited_parking.png) ![Parcheggio illimitato](@site/static/img/map/context_menu_unlimited_parking.png)

Un [Punto di parcheggio](../plugins/parking.md) è un punto contrassegnato dagli utenti sulla mappa per memorizzare informazioni sulla posizione esatta del veicolo. Può essere suddiviso in zone di parcheggio illimitate e limitate.  

Richiede il [plugin Posizione parcheggio](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia sulla mappa](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Lingua Wikipedia - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd ha punti di interesse speciali contrassegnati da un logo "W" e collegati ad articoli di Wikipedia. Questi punti possono essere visualizzati come qualsiasi altro tipo di PDI, tramite la ricerca o andando su <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Tuttavia, esiste un modo speciale per filtrare gli articoli di Wikipedia per **lingue disponibili**.  

[Leggi di più](../plugins/wikipedia.md) su come scaricare e utilizzare la funzione Wikipedia in OsmAnd.


## * Punti Audio / Video (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![PDI AV](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Le note audio/video sono punti con dati audio, foto e video sulla mappa creati dagli utenti.  

Richiede il [plugin Note audio/video](../plugins/audio-video-notes.md).


## * Punti di modifica OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![PDI modifica OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![PDI modifica OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

I punti di modifica OSM sono PDI creati dagli utenti per essere aggiunti al [progetto OpenStreetMap](https://www.openstreetmap.org/).  

Richiede il [plugin Modifica OSM](../plugins/osm-editing.md).


## * Note OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare su: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Note OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare su: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Note OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Le note OSM sono PDI creati dagli utenti per segnalare problemi con i dati della mappa in [OpenStreetMap](https://www.openstreetmap.org/). Le nuove note (non ancora caricate su OpenStreetMap) sono contrassegnate in verde con un **+**, le note chiuse sono contrassegnate in verde con una "V" e le note aperte sono contrassegnate in rosso. È possibile personalizzare il livello di zoom per la visualizzazione delle note e scegliere se mostrare o nascondere le note chiuse.  

Richiede il [plugin Modifica OSM](../plugins/osm-editing.md).


## Punti lungo il percorso {#points-along-the-route}

Waypoint, PDI, punti Preferiti e note audio/video si riferiscono tutti al concetto di salvataggio di posizioni e percorsi in formato [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). È possibile utilizzare [gli stessi tag](../map/tracks/track-context-menu.md#display-custom-gpx-tags) per descriverli e modificarli.  

I [Waypoint](#track-waypoints) sono punti individuali su una mappa o un percorso. Possono essere utilizzati per contrassegnare determinati luoghi che possono essere importanti per la navigazione o la registrazione dei propri viaggi. Ad esempio, è possibile creare un waypoint sulla mappa per indicare un incrocio importante o un cambio di direzione.  

I [Punti di interesse (PDI)](#points-of-interest-pois) sono luoghi di particolare interesse per gli utenti. Possono essere punti di riferimento, ristoranti, hotel, stazioni di servizio e altri luoghi di interesse che si desidera annotare o visitare.  

I [Punti preferiti](#favorites) sono luoghi che gli utenti ritengono particolarmente importanti o interessanti e che salvano nel loro elenco di luoghi preferiti. I luoghi possono includere qualsiasi posizione che si desidera trovare e tornare a visitare in seguito.

[Note audio/video](#-audio--video-points-android). In formato GPX, è possibile salvare registrazioni audio e video come waypoint. Ciò consente di associare file multimediali a posizioni specifiche sulla mappa o sul percorso.  

Tutti questi tipi di punti possono essere salvati in formato GPX per fornire informazioni sulla posizione e aiutare nella navigazione e nella pianificazione del percorso. Servono a scopi diversi, ma l'idea generale è quella di memorizzare e trasmettere informazioni geografiche in modo da poterle utilizzare nelle proprie attività di navigazione.


## Articoli correlati {#related-articles}

- [Menu Configura mappa](../map/configure-map-menu.md)
- [Mappe vettoriali (Stili mappa)](./vector-maps.md)
- [Mappe raster (Online / Offline)](./raster-maps.md)